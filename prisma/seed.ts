import { PrismaClient } from "../generated/prisma";

const db = new PrismaClient();

async function main() {
	// Clean up in reverse dependency order (idempotent)
	await db.scheduleSession.deleteMany();
	await db.schoolTiming.deleteMany();
	await db.globalSetting.deleteMany();
	await db.teachingAssistant.deleteMany();
	await db.teacher.deleteMany();
	await db.school.deleteMany();

	// Global setting
	await db.globalSetting.upsert({
		where: { id: "singleton" },
		create: { id: "singleton", period1Start: "14:00" },
		update: { period1Start: "14:00" },
	});

	// Schools
	const tn = await db.school.create({
		data: { name: "TN", color: "#3b82f6", bg: "#dbeafe", order: 0 },
	});
	const ta = await db.school.create({
		data: { name: "TA", color: "#8b5cf6", bg: "#ede9fe", order: 1 },
	});
	const at1 = await db.school.create({
		data: { name: "AT1", color: "#ec4899", bg: "#fce7f3", order: 2 },
	});

	// School timings
	await db.schoolTiming.createMany({
		data: [
			{ schoolId: tn.id, period2Start: "14:35", period3Start: "15:30" },
			{ schoolId: ta.id, period2Start: "14:40", period3Start: "15:35" },
			{ schoolId: at1.id, period2Start: "14:45", period3Start: "15:40" },
		],
	});

	// Teachers
	await db.teacher.createMany({
		data: [
			{ name: "Thầy An", color: "#3b82f6" },
			{ name: "Cô Mai", color: "#ec4899" },
			{ name: "Thầy Bình", color: "#14b8a6" },
		],
	});

	// Teaching Assistants
	await db.teachingAssistant.createMany({
		data: [
			{ name: "Trợ Tâm", color: "#f97316" },
			{ name: "Trợ Lan", color: "#8b5cf6" },
		],
	});

	console.log("✅ Seed complete");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(() => db.$disconnect());
