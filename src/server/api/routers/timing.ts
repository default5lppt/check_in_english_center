import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const timingRouter = createTRPCRouter({
	getGlobal: publicProcedure.query(({ ctx }) => {
		return ctx.db.globalSetting.findUnique({ where: { id: "singleton" } });
	}),

	updateGlobal: publicProcedure
		.input(z.object({ period1Start: z.string() }))
		.mutation(({ ctx, input }) => {
			return ctx.db.globalSetting.upsert({
				where: { id: "singleton" },
				create: { id: "singleton", period1Start: input.period1Start },
				update: { period1Start: input.period1Start },
			});
		}),

	getSchoolTimings: publicProcedure.query(({ ctx }) => {
		return ctx.db.schoolTiming.findMany({ include: { school: true } });
	}),

	upsertSchoolTiming: publicProcedure
		.input(
			z.object({
				schoolId: z.string(),
				period2Start: z.string(),
				period3Start: z.string(),
			}),
		)
		.mutation(({ ctx, input }) => {
			return ctx.db.schoolTiming.upsert({
				where: { schoolId: input.schoolId },
				create: {
					schoolId: input.schoolId,
					period2Start: input.period2Start,
					period3Start: input.period3Start,
				},
				update: {
					period2Start: input.period2Start,
					period3Start: input.period3Start,
				},
			});
		}),
});
