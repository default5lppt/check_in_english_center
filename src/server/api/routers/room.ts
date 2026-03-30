import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const roomRouter = createTRPCRouter({
	getBySchool: publicProcedure
		.input(z.object({ schoolId: z.string() }))
		.query(({ ctx, input }) => {
			return ctx.db.room.findMany({
				where: { schoolId: input.schoolId },
				orderBy: { order: "asc" },
			});
		}),

	create: publicProcedure
		.input(
			z.object({
				name: z.string().min(1),
				schoolId: z.string(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const existing = await ctx.db.room.findUnique({
				where: { name_schoolId: { name: input.name, schoolId: input.schoolId } },
			});
			if (existing) throw new Error("Phòng này đã tồn tại trong trường");
			const count = await ctx.db.room.count({ where: { schoolId: input.schoolId } });
			return ctx.db.room.create({
				data: { name: input.name, schoolId: input.schoolId, order: count },
			});
		}),

	update: publicProcedure
		.input(z.object({ id: z.string(), name: z.string().min(1) }))
		.mutation(async ({ ctx, input }) => {
			const current = await ctx.db.room.findUnique({ where: { id: input.id } });
			if (!current) throw new Error("Không tìm thấy phòng");
			const existing = await ctx.db.room.findUnique({
				where: { name_schoolId: { name: input.name, schoolId: current.schoolId } },
			});
			if (existing && existing.id !== input.id)
				throw new Error("Phòng này đã tồn tại trong trường");
			return ctx.db.room.update({ where: { id: input.id }, data: { name: input.name } });
		}),

	delete: publicProcedure
		.input(z.object({ id: z.string() }))
		.mutation(({ ctx, input }) => {
			return ctx.db.room.delete({ where: { id: input.id } });
		}),
});
