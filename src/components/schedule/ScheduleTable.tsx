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

interface Entry {
	id: string;
	teacherId: string | null;
	taId: string | null;
	classId: string | null;
	roomId: string | null;
	teacher?: { id: string; name: string; color: string } | null;
	ta?: { id: string; name: string; color: string } | null;
	class?: { id: string; name: string } | null;
	room?: { id: string; name: string } | null;
	order: number;
}

interface Session {
	id: string;
	weekStart: string;
	dayIndex: number;
	periodIndex: number;
	schoolId: string;
	entries: Entry[];
}

interface CellTarget {
	weekStart: string;
	dayIndex: number;
	periodIndex: number;
	schoolId: string;
	schoolName: string;
	dayLabel: string;
}

interface ScheduleTableProps {
	weekStart: string;
	schools: School[];
	sessions: Session[];
	period1Start: string;
	schoolTimings: SchoolTiming[];
	onAddEntry: (cell: CellTarget) => void;
	onEditEntry: (entry: Entry, cell: CellTarget) => void;
}

const PERIOD_COUNT = 3;

export function ScheduleTable({
	weekStart,
	schools,
	sessions,
	period1Start,
	schoolTimings,
	onAddEntry,
	onEditEntry,
}: ScheduleTableProps) {
	const { t, tArr } = useLang();

	// Build lookup map: key → session (with entries)
	const sessionMap = new Map<string, Session>();
	for (const s of sessions) {
		const key = `${s.weekStart}-${s.dayIndex}-${s.periodIndex}-${s.schoolId}`;
		sessionMap.set(key, s);
	}

	// Conflict detection: same teacherId or taId across schools in same (day, period)
	const conflictKeys = new Set<string>();
	for (let day = 0; day < 5; day++) {
		for (let period = 0; period < PERIOD_COUNT; period++) {
			const allTeacherIds: string[] = [];
			const allTaIds: string[] = [];
			const cellEntryMap = new Map<string, { teacherIds: string[]; taIds: string[] }>();

			for (const school of schools) {
				const key = `${weekStart}-${day}-${period}-${school.id}`;
				const session = sessionMap.get(key);
				const tIds = (session?.entries ?? []).map((e) => e.teacherId).filter(Boolean) as string[];
				const aIds = (session?.entries ?? []).map((e) => e.taId).filter(Boolean) as string[];
				cellEntryMap.set(key, { teacherIds: tIds, taIds: aIds });
				allTeacherIds.push(...tIds);
				allTaIds.push(...aIds);
			}

			const conflictTeacherIds = new Set(
				allTeacherIds.filter((id, i) => allTeacherIds.indexOf(id) !== i),
			);
			const conflictTaIds = new Set(
				allTaIds.filter((id, i) => allTaIds.indexOf(id) !== i),
			);

			for (const school of schools) {
				const key = `${weekStart}-${day}-${period}-${school.id}`;
				const cell = cellEntryMap.get(key);
				if (!cell) continue;
				const hasConflict =
					cell.teacherIds.some((id) => conflictTeacherIds.has(id)) ||
					cell.taIds.some((id) => conflictTaIds.has(id));
				if (hasConflict) conflictKeys.add(key);
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
									<div className="font-normal text-xs" style={{ color: "var(--text-secondary)" }}>
										{dateLabel}
									</div>
								</th>
							);
						})}
					</tr>
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
										minWidth: "130px",
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
									const session = sessionMap.get(key);
									const entries = session?.entries ?? [];
									const isConflict = conflictKeys.has(key);
									const dayLabel = days[dayIdx] ?? `Thứ ${dayIdx + 2}`;
									const cellTarget: CellTarget = {
										weekStart,
										dayIndex: dayIdx,
										periodIndex: periodIdx,
										schoolId: school.id,
										schoolName: school.name,
										dayLabel,
									};
									return (
										<ScheduleCell
											conflictLabel={t("schedule.conflictBadge")}
											entries={entries}
											isConflict={isConflict}
											key={key}
											onAddEntry={() => onAddEntry(cellTarget)}
											onEditEntry={(entry) => onEditEntry(entry, cellTarget)}
											school={school}
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
