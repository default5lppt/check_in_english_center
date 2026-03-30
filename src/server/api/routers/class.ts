import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const classRouter = createTRPCRouter({
	getAll: publicProcedure.query(({ ctx }) => {
		return ctx.db.class.findMany({
			orderBy: [{ schoolId: "asc" }, { order: "asc" }],
			include: { school: true },
		});
	}),

	getBySchool: publicProcedure
		.input(z.object({ schoolId: z.string() }))
		.query(({ ctx, input }) => {
			return ctx.db.class.findMany({
				where: { schoolId: input.schoolId },
				orderBy: { order: "asc" },
			});
		}),

	create: publicProcedure
		.input(
			z.object({
				name: z.string().min(1),
				schoolId: z.string(),
				order: z.number().optional(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const existing = await ctx.db.class.findUnique({
				where: { name_schoolId: { name: input.name, schoolId: input.schoolId } },
			});
			if (existing) {
				throw new Error("Lớp này đã tồn tại trong trường");
			}
			const count = await ctx.db.class.count({
				where: { schoolId: input.schoolId },
			});
			return ctx.db.class.create({
				data: {
					name: input.name,
					schoolId: input.schoolId,
					order: input.order ?? count,
				},
			});
		}),

	update: publicProcedure
		.input(
			z.object({
				id: z.string(),
				name: z.string().min(1),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const current = await ctx.db.class.findUnique({ where: { id: input.id } });
			if (!current) throw new Error("Không tìm thấy lớp");
			const existing = await ctx.db.class.findUnique({
				where: {
					name_schoolId: { name: input.name, schoolId: current.schoolId },
				},
			});
			if (existing && existing.id !== input.id) {
				throw new Error("Lớp này đã tồn tại trong trường");
			}
			return ctx.db.class.update({
				where: { id: input.id },
				data: { name: input.name },
			});
		}),

	delete: publicProcedure
		.input(z.object({ id: z.string() }))
		.mutation(({ ctx, input }) => {
			return ctx.db.class.delete({ where: { id: input.id } });
		}),
});
