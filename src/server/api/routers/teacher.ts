import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const teacherRouter = createTRPCRouter({
	getAll: publicProcedure.query(({ ctx }) => {
		return ctx.db.teacher.findMany({ orderBy: { createdAt: "asc" } });
	}),

	create: publicProcedure
		.input(z.object({ name: z.string().min(1), color: z.string() }))
		.mutation(({ ctx, input }) => {
			return ctx.db.teacher.create({
				data: { name: input.name, color: input.color },
			});
		}),

	update: publicProcedure
		.input(
			z.object({ id: z.string(), name: z.string().min(1), color: z.string() }),
		)
		.mutation(({ ctx, input }) => {
			return ctx.db.teacher.update({
				where: { id: input.id },
				data: { name: input.name, color: input.color },
			});
		}),

	delete: publicProcedure
		.input(z.object({ id: z.string() }))
		.mutation(({ ctx, input }) => {
			return ctx.db.teacher.delete({ where: { id: input.id } });
		}),
});
