import { scheduleRouter } from "~/server/api/routers/schedule";
import { schoolRouter } from "~/server/api/routers/school";
import { taRouter } from "~/server/api/routers/ta";
import { teacherRouter } from "~/server/api/routers/teacher";
import { timingRouter } from "~/server/api/routers/timing";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
	school: schoolRouter,
	teacher: teacherRouter,
	ta: taRouter,
	timing: timingRouter,
	schedule: scheduleRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
