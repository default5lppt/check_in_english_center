import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const scheduleRouter = createTRPCRouter({
	getWeek: publicProcedure
		.input(z.object({ weekStart: z.string() }))
		.query(({ ctx, input }) => {
			return ctx.db.scheduleSession.findMany({
				where: { weekStart: input.weekStart },
				include: { teacher: true, ta: true, school: true },
			});
		}),

	upsertSession: publicProcedure
		.input(
			z.object({
				weekStart: z.string(),
				dayIndex: z.number().int().min(0).max(4),
				periodIndex: z.number().int().min(0).max(2),
				schoolId: z.string(),
				teacherId: z.string().nullable().optional(),
				taId: z.string().nullable().optional(),
				note: z.string().nullable().optional(),
			}),
		)
		.mutation(({ ctx, input }) => {
			const data = {
				weekStart: input.weekStart,
				dayIndex: input.dayIndex,
				periodIndex: input.periodIndex,
				schoolId: input.schoolId,
				teacherId: input.teacherId ?? null,
				taId: input.taId ?? null,
				note: input.note ?? null,
			};
			return ctx.db.scheduleSession.upsert({
				where: {
					weekStart_dayIndex_periodIndex_schoolId: {
						weekStart: input.weekStart,
						dayIndex: input.dayIndex,
						periodIndex: input.periodIndex,
						schoolId: input.schoolId,
					},
				},
				create: data,
				update: {
					teacherId: data.teacherId,
					taId: data.taId,
					note: data.note,
				},
			});
		}),

	deleteSession: publicProcedure
		.input(
			z.object({
				weekStart: z.string(),
				dayIndex: z.number().int(),
				periodIndex: z.number().int(),
				schoolId: z.string(),
			}),
		)
		.mutation(({ ctx, input }) => {
			return ctx.db.scheduleSession.delete({
				where: {
					weekStart_dayIndex_periodIndex_schoolId: {
						weekStart: input.weekStart,
						dayIndex: input.dayIndex,
						periodIndex: input.periodIndex,
						schoolId: input.schoolId,
					},
				},
			});
		}),
});
