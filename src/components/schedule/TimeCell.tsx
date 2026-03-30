"use client";

import { getEndTime } from "~/utils/time";

interface School {
	id: string;
	name: string;
	color: string;
}

interface SchoolTiming {
	schoolId: string;
	period2Start: string;
	period3Start: string;
}

interface TimeCellProps {
	periodIndex: number;
	period1Start: string;
	schools: School[];
	schoolTimings: SchoolTiming[];
	periodLabel: string;
}

export function TimeCell({
	periodIndex,
	period1Start,
	schools,
	schoolTimings,
	periodLabel,
}: TimeCellProps) {
	const timingMap = new Map(schoolTimings.map((t) => [t.schoolId, t]));

	return (
		<td
			className="border p-2 text-center align-top"
			style={{
				background: "var(--surface-alt)",
				borderColor: "var(--border)",
				minWidth: "100px",
			}}
		>
			<div
				className="mb-1 font-semibold text-xs"
				style={{ color: "var(--text-secondary)" }}
			>
				{periodLabel}
			</div>
			{periodIndex === 0 ? (
				<div className="text-xs" style={{ color: "var(--text-muted)" }}>
					{period1Start}–{getEndTime(period1Start)}
				</div>
			) : (
				<div className="flex flex-col gap-0.5">
					{schools.map((school) => {
						const timing = timingMap.get(school.id);
						const start =
							periodIndex === 1
								? (timing?.period2Start ?? "14:35")
								: (timing?.period3Start ?? "15:30");
						return (
							<div
								className="text-xs"
								key={school.id}
								style={{ color: "var(--text-muted)" }}
							>
								<span style={{ color: school.color, fontWeight: 600 }}>
									{school.name}
								</span>{" "}
								{start}–{getEndTime(start)}
							</div>
						);
					})}
				</div>
			)}
		</td>
	);
}
