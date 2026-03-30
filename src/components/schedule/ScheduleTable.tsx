"use client";

import { useLang } from "~/contexts/LangContext";
import { ScheduleCell } from "./ScheduleCell";
import { TimeCell } from "./TimeCell";

interface School {
	id: string;
	name: string;
	color: string;
	bg: string;
}

interface SchoolTiming {
	schoolId: string;
	period2Start: string;
	period3Start: string;
}

interface Session {
	id: string;
	weekStart: string;
	dayIndex: number;
	periodIndex: number;
	schoolId: string;
	teacherId: string | null;
	taId: string | null;
	note: string | null;
	teacher?: { id: string; name: string; color: string } | null;
	ta?: { id: string; name: string; color: string } | null;
}

interface CellInfo {
	weekStart: string;
	dayIndex: number;
	periodIndex: number;
	schoolId: string;
	schoolName: string;
	dayLabel: string;
	currentSession?: Session | null;
}

interface ScheduleTableProps {
	weekStart: string;
	schools: School[];
	sessions: Session[];
	period1Start: string;
	schoolTimings: SchoolTiming[];
	onCellClick: (cell: CellInfo) => void;
}

const PERIOD_COUNT = 3;

export function ScheduleTable({
	weekStart,
	schools,
	sessions,
	period1Start,
	schoolTimings,
	onCellClick,
}: ScheduleTableProps) {
	const { t, tArr } = useLang();

	// Build O(1) lookup map
	const sessionMap = new Map<string, Session>();
	for (const s of sessions) {
		const key = `${s.weekStart}-${s.dayIndex}-${s.periodIndex}-${s.schoolId}`;
		sessionMap.set(key, s);
	}

	// Conflict detection: same teacher or TA in same (day, period) across schools
	const conflictKeys = new Set<string>();
	for (let day = 0; day < 5; day++) {
		for (let period = 0; period < PERIOD_COUNT; period++) {
			const teacherIds: string[] = [];
			const taIds: string[] = [];
			const cellKeys: string[] = [];
			for (const school of schools) {
				const key = `${weekStart}-${day}-${period}-${school.id}`;
				const session = sessionMap.get(key);
				cellKeys.push(key);
				if (session?.teacherId) teacherIds.push(session.teacherId);
				if (session?.taId) taIds.push(session.taId);
			}
			const teacherSet = new Set(teacherIds);
			const taSet = new Set(taIds);
			const hasTeacherConflict = teacherIds.length !== teacherSet.size;
			const hasTAConflict = taIds.length !== taSet.size;
			if (hasTeacherConflict || hasTAConflict) {
				for (const k of cellKeys) {
					const s = sessionMap.get(k);
					if (s) {
						const tId = s.teacherId;
						const aId = s.taId;
						const isConflict =
							(tId !== null &&
								teacherIds.filter((id) => id === tId).length > 1) ||
							(aId !== null && taIds.filter((id) => id === aId).length > 1);
						if (isConflict) conflictKeys.add(k);
					}
				}
			}
		}
	}

	const days = tArr("schedule.days");

	return (
		<div
			className="overflow-x-auto rounded-xl border"
			style={{ borderColor: "var(--border)" }}
		>
			<table className="w-full border-collapse text-sm">
				<thead>
					{/* Row 1: Day headers */}
					<tr style={{ background: "var(--surface-alt)" }}>
						<th
							className="border p-2 text-center font-semibold text-xs"
							rowSpan={2}
							style={{
								borderColor: "var(--border)",
								color: "var(--text-secondary)",
								minWidth: "100px",
							}}
						>
							{t("schedule.timeCol")}
						</th>
						{[0, 1, 2, 3, 4].map((dayIdx) => {
							const dayLabel = days[dayIdx] ?? `Thứ ${dayIdx + 2}`;
							const date = new Date(weekStart);
							date.setDate(date.getDate() + dayIdx);
							const dateLabel = `${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`;
							return (
								<th
									className="border p-2 text-center font-semibold text-xs"
									colSpan={schools.length}
									key={dayLabel}
									style={{ borderColor: "var(--border)", color: "var(--text)" }}
								>
									{dayLabel}
									<div className="font-normal text-xs" style={{ color: "var(--text-secondary)" }}>{dateLabel}</div>
								</th>
							);
						})}
					</tr>
					{/* Row 2: School sub-headers */}
					<tr style={{ background: "var(--surface-alt)" }}>
						{[0, 1, 2, 3, 4].flatMap((dayIdx) =>
							schools.map((school) => (
								<th
									className="border px-2 py-1 text-center font-medium text-xs"
									key={`${dayIdx}-${school.id}`}
									style={{
										borderColor: "var(--border)",
										background: school.bg,
										color: school.color,
										minWidth: "120px",
									}}
								>
									{school.name}
								</th>
							)),
						)}
					</tr>
				</thead>
				<tbody>
					{([0, 1, 2] as const).map((periodIdx) => (
						<tr key={periodIdx}>
							<TimeCell
								period1Start={period1Start}
								periodIndex={periodIdx}
								periodLabel={t("schedule.period", { n: String(periodIdx + 1) })}
								schools={schools}
								schoolTimings={schoolTimings}
							/>
							{[0, 1, 2, 3, 4].flatMap((dayIdx) =>
								schools.map((school) => {
									const key = `${weekStart}-${dayIdx}-${periodIdx}-${school.id}`;
									const session = sessionMap.get(key) ?? null;
									const isConflict = conflictKeys.has(key);
									const dayLabel = days[dayIdx] ?? `Thứ ${dayIdx + 2}`;
									return (
										<ScheduleCell
											conflictLabel={t("schedule.conflictBadge")}
											isConflict={isConflict}
											key={key}
											onClick={() =>
												onCellClick({
													weekStart,
													dayIndex: dayIdx,
													periodIndex: periodIdx,
													schoolId: school.id,
													schoolName: school.name,
													dayLabel,
													currentSession: session,
												})
											}
											school={school}
											session={session}
										/>
									);
								}),
							)}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
