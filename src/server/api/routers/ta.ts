import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const taRouter = createTRPCRouter({
	getAll: publicProcedure.query(({ ctx }) => {
		return ctx.db.teachingAssistant.findMany({ orderBy: { createdAt: "asc" } });
	}),

	create: publicProcedure
		.input(z.object({ name: z.string().min(1), color: z.string() }))
		.mutation(async ({ ctx, input }) => {
			const existing = await ctx.db.teachingAssistant.findFirst({
				where: { name: { equals: input.name } },
			});
			if (existing) {
				throw new TRPCError({
					code: "BAD_REQUEST",
					message: `Tên "${input.name}" đã tồn tại. Hãy phân biệt tên (VD: Phúc ${input.name}, Đức ${input.name} hoặc ${input.name}(A))`,
				});
			}
			return ctx.db.teachingAssistant.create({
				data: { name: input.name, color: input.color },
			});
		}),

	update: publicProcedure
		.input(
			z.object({ id: z.string(), name: z.string().min(1), color: z.string() }),
		)
		.mutation(async ({ ctx, input }) => {
			const existing = await ctx.db.teachingAssistant.findFirst({
				where: { name: { equals: input.name }, NOT: { id: input.id } },
			});
			if (existing) {
				throw new TRPCError({
					code: "BAD_REQUEST",
					message: `Tên "${input.name}" đã tồn tại. Hãy phân biệt tên (VD: Phúc ${input.name}, Đức ${input.name} hoặc ${input.name}(A))`,
				});
			}
			return ctx.db.teachingAssistant.update({
				where: { id: input.id },
				data: { name: input.name, color: input.color },
			});
		}),

	delete: publicProcedure
		.input(z.object({ id: z.string() }))
		.mutation(({ ctx, input }) => {
			return ctx.db.teachingAssistant.delete({ where: { id: input.id } });
		}),
});
