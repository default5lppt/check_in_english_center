import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const schoolRouter = createTRPCRouter({
	getAll: publicProcedure.query(({ ctx }) => {
		return ctx.db.school.findMany({
			orderBy: { order: "asc" },
			include: { timings: true },
		});
	}),

	create: publicProcedure
		.input(
			z.object({
				name: z.string().min(1),
				color: z.string(),
				bg: z.string(),
				order: z.number().optional(),
			}),
		)
		.mutation(async ({ ctx, input }) => {
			const school = await ctx.db.school.create({
				data: {
					name: input.name,
					color: input.color,
					bg: input.bg,
					order: input.order ?? 0,
				},
			});
			await ctx.db.schoolTiming.create({
				data: {
					schoolId: school.id,
					period2Start: "14:35",
					period3Start: "15:30",
				},
			});
			return school;
		}),

	update: publicProcedure
		.input(
			z.object({
				id: z.string(),
				name: z.string().min(1),
				color: z.string(),
				bg: z.string(),
			}),
		)
		.mutation(({ ctx, input }) => {
			return ctx.db.school.update({
				where: { id: input.id },
				data: { name: input.name, color: input.color, bg: input.bg },
			});
		}),

	delete: publicProcedure
		.input(z.object({ id: z.string() }))
		.mutation(({ ctx, input }) => {
			return ctx.db.school.delete({ where: { id: input.id } });
		}),
});
