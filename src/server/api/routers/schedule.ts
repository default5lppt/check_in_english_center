import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const scheduleRouter = createTRPCRouter({
	getWeek: publicProcedure
		.input(z.object({ weekStart: z.string() }))
		.query(({ ctx, input }) => {
			return ctx.db.scheduleSession.findMany({
				where: { weekStart: input.weekStart },
				include: {
					school: true,
					entries: {
						include: { teacher: true, ta: true, class: true, room: true },
						orderBy: { order: "asc" },
					},
				},
			});
		}),

	addEntry: publicProcedure
		.input(
			z.object({
				weekStart: z.string(),
				dayIndex: z.number().int().min(0).max(4),
				periodIndex: z.number().int().min(0).max(2),
				schoolId: z.string(),
				teacherId: z.string().nullable().optional(),
				taId: z.string().nullable().optional(),
				classId: z.string().nullable().optional(),
				roomId: z.string().nullable().optional(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const { weekStart, dayIndex, periodIndex, schoolId } = input;

			// Conflict check: same teacher/TA/room at same period in same school
			if (input.teacherId ?? input.taId ?? input.roomId) {
				const sameSession = await ctx.db.scheduleSession.findUnique({
					where: {
						weekStart_dayIndex_periodIndex_schoolId: {
							weekStart,
							dayIndex,
							periodIndex,
							schoolId,
						},
					},
					include: {
						entries: {
							select: {
								teacherId: true,
								taId: true,
								roomId: true,
								class: { select: { name: true } },
								room: { select: { name: true } },
							},
						},
					},
				});
				if (sameSession) {
					for (const e of sameSession.entries) {
						if (input.teacherId && e.teacherId === input.teacherId) {
							const teacher = await ctx.db.teacher.findUnique({
								where: { id: input.teacherId },
								select: { name: true },
							});
							throw new TRPCError({
								code: "BAD_REQUEST",
								message: `GV ${teacher?.name ?? ""} đã dạy tiết này tại trường này${e.class ? ` (lớp ${e.class.name})` : ""}`,
							});
						}
						if (input.taId && e.taId === input.taId) {
							const ta = await ctx.db.teachingAssistant.findUnique({
								where: { id: input.taId },
								select: { name: true },
							});
							throw new TRPCError({
								code: "BAD_REQUEST",
								message: `TA ${ta?.name ?? ""} đã dạy tiết này tại trường này${e.class ? ` (lớp ${e.class.name})` : ""}`,
							});
						}
						if (input.roomId && e.roomId === input.roomId) {
							const room = await ctx.db.room.findUnique({
								where: { id: input.roomId },
								select: { name: true },
							});
							throw new TRPCError({
								code: "BAD_REQUEST",
								message: `Phòng ${room?.name ?? ""} đã được dùng tiết này${e.class ? ` (lớp ${e.class.name})` : ""}`,
							});
						}
					}
				}
			}

			// Conflict check: same teacher/TA at same period in other schools
			if (input.teacherId ?? input.taId) {
				const otherSessions = await ctx.db.scheduleSession.findMany({
					where: {
						weekStart,
						dayIndex,
						periodIndex,
						NOT: { schoolId },
					},
					include: { entries: { select: { teacherId: true, taId: true } } },
				});
				const otherTeacherIds = otherSessions
					.flatMap((s) => s.entries.map((e) => e.teacherId))
					.filter(Boolean);
				const otherTaIds = otherSessions
					.flatMap((s) => s.entries.map((e) => e.taId))
					.filter(Boolean);

				if (input.teacherId && otherTeacherIds.includes(input.teacherId)) {
					const teacher = await ctx.db.teacher.findUnique({
						where: { id: input.teacherId },
						select: { name: true },
					});
					const school = otherSessions.find((s) =>
						s.entries.some((e) => e.teacherId === input.teacherId),
					);
					const schoolRecord = school
						? await ctx.db.school.findUnique({
								where: { id: school.schoolId },
								select: { name: true },
							})
						: null;
					throw new TRPCError({
						code: "BAD_REQUEST",
						message: `GV ${teacher?.name ?? ""} đã có lịch dạy tiết này tại ${schoolRecord?.name ?? "trường khác"}`,
					});
				}
				if (input.taId && otherTaIds.includes(input.taId)) {
					const ta = await ctx.db.teachingAssistant.findUnique({
						where: { id: input.taId },
						select: { name: true },
					});
					const school = otherSessions.find((s) =>
						s.entries.some((e) => e.taId === input.taId),
					);
					const schoolRecord = school
						? await ctx.db.school.findUnique({
								where: { id: school.schoolId },
								select: { name: true },
							})
						: null;
					throw new TRPCError({
						code: "BAD_REQUEST",
						message: `TA ${ta?.name ?? ""} đã có lịch dạy tiết này tại ${schoolRecord?.name ?? "trường khác"}`,
					});
				}
			}

			// Find or create session
			const session = await ctx.db.scheduleSession.upsert({
				where: {
					weekStart_dayIndex_periodIndex_schoolId: {
						weekStart,
						dayIndex,
						periodIndex,
						schoolId,
					},
				},
				create: { weekStart, dayIndex, periodIndex, schoolId },
				update: {},
			});

			const count = await ctx.db.classEntry.count({
				where: { sessionId: session.id },
			});

			return ctx.db.classEntry.create({
				data: {
					sessionId: session.id,
					teacherId: input.teacherId ?? null,
					taId: input.taId ?? null,
					classId: input.classId ?? null,
					roomId: input.roomId ?? null,
					order: count,
				},
				include: { teacher: true, ta: true, class: true, room: true },
			});
		}),

	updateEntry: publicProcedure
		.input(
			z.object({
				entryId: z.string(),
				weekStart: z.string(),
				dayIndex: z.number().int(),
				periodIndex: z.number().int(),
				schoolId: z.string(),
				teacherId: z.string().nullable().optional(),
				taId: z.string().nullable().optional(),
				classId: z.string().nullable().optional(),
				roomId: z.string().nullable().optional(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const { weekStart, dayIndex, periodIndex, schoolId } = input;

			if (input.teacherId ?? input.taId ?? input.roomId) {
				// Conflict check: same school, exclude self
				const sameSession = await ctx.db.scheduleSession.findUnique({
					where: {
						weekStart_dayIndex_periodIndex_schoolId: {
							weekStart,
							dayIndex,
							periodIndex,
							schoolId,
						},
					},
					include: {
						entries: {
							where: { NOT: { id: input.entryId } },
							select: {
								teacherId: true,
								taId: true,
								roomId: true,
								class: { select: { name: true } },
								room: { select: { name: true } },
							},
						},
					},
				});
				if (sameSession) {
					for (const e of sameSession.entries) {
						if (input.teacherId && e.teacherId === input.teacherId) {
							const teacher = await ctx.db.teacher.findUnique({
								where: { id: input.teacherId },
								select: { name: true },
							});
							throw new TRPCError({
								code: "BAD_REQUEST",
								message: `GV ${teacher?.name ?? ""} đã dạy tiết này tại trường này${e.class ? ` (lớp ${e.class.name})` : ""}`,
							});
						}
						if (input.taId && e.taId === input.taId) {
							const ta = await ctx.db.teachingAssistant.findUnique({
								where: { id: input.taId },
								select: { name: true },
							});
							throw new TRPCError({
								code: "BAD_REQUEST",
								message: `TA ${ta?.name ?? ""} đã dạy tiết này tại trường này${e.class ? ` (lớp ${e.class.name})` : ""}`,
							});
						}
						if (input.roomId && e.roomId === input.roomId) {
							const room = await ctx.db.room.findUnique({
								where: { id: input.roomId },
								select: { name: true },
							});
							throw new TRPCError({
								code: "BAD_REQUEST",
								message: `Phòng ${room?.name ?? ""} đã được dùng tiết này${e.class ? ` (lớp ${e.class.name})` : ""}`,
							});
						}
					}
				}
			}

			if (input.teacherId ?? input.taId) {
				const otherSessions = await ctx.db.scheduleSession.findMany({
					where: { weekStart, dayIndex, periodIndex, NOT: { schoolId } },
					include: {
						entries: {
							where: { NOT: { id: input.entryId } },
							select: { teacherId: true, taId: true },
						},
					},
				});
				const otherTeacherIds = otherSessions
					.flatMap((s) => s.entries.map((e) => e.teacherId))
					.filter(Boolean);
				const otherTaIds = otherSessions
					.flatMap((s) => s.entries.map((e) => e.taId))
					.filter(Boolean);

				if (input.teacherId && otherTeacherIds.includes(input.teacherId)) {
					const teacher = await ctx.db.teacher.findUnique({
						where: { id: input.teacherId },
						select: { name: true },
					});
					throw new TRPCError({
						code: "BAD_REQUEST",
						message: `GV ${teacher?.name ?? ""} đã có lịch dạy tiết này tại trường khác`,
					});
				}
				if (input.taId && otherTaIds.includes(input.taId)) {
					const ta = await ctx.db.teachingAssistant.findUnique({
						where: { id: input.taId },
						select: { name: true },
					});
					throw new TRPCError({
						code: "BAD_REQUEST",
						message: `TA ${ta?.name ?? ""} đã có lịch dạy tiết này tại trường khác`,
					});
				}
			}

			return ctx.db.classEntry.update({
				where: { id: input.entryId },
				data: {
					teacherId: input.teacherId ?? null,
					taId: input.taId ?? null,
					classId: input.classId ?? null,
					roomId: input.roomId ?? null,
				},
				include: { teacher: true, ta: true, class: true, room: true },
			});
		}),

	deleteEntry: publicProcedure
		.input(z.object({ entryId: z.string() }))
		.mutation(async ({ ctx, input }) => {
			const entry = await ctx.db.classEntry.findUnique({
				where: { id: input.entryId },
				select: { sessionId: true },
			});
			if (!entry) throw new TRPCError({ code: "NOT_FOUND" });

			await ctx.db.classEntry.delete({ where: { id: input.entryId } });

			// Auto-delete session if no entries left
			const remaining = await ctx.db.classEntry.count({
				where: { sessionId: entry.sessionId },
			});
			if (remaining === 0) {
				await ctx.db.scheduleSession.delete({
					where: { id: entry.sessionId },
				});
			}
		}),
});
