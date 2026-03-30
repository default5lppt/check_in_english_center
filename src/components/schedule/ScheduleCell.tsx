"use client";

interface Entry {
	id: string;
	teacherId: string | null;
	taId: string | null;
	classId: string | null;
	roomId: string | null;
	order: number;
	teacher?: { id: string; name: string; color: string } | null;
	ta?: { id: string; name: string; color: string } | null;
	class?: { id: string; name: string } | null;
	room?: { id: string; name: string } | null;
}

interface School {
	color: string;
}

interface ScheduleCellProps {
	entries: Entry[];
	school: School;
	isConflict: boolean;
	conflictLabel: string;
	onAddEntry: () => void;
	onEditEntry: (entry: Entry) => void;
}

export function ScheduleCell({
	entries,
	school,
	isConflict,
	conflictLabel,
	onAddEntry,
	onEditEntry,
}: ScheduleCellProps) {
	return (
		<td
			className="border p-0 align-top"
			style={{
				borderColor: "var(--border)",
				minWidth: "130px",
			}}
		>
			<div
				className="relative flex flex-col gap-1 p-1.5"
				style={{
					borderLeft: entries.length > 0
						? `4px solid ${school.color}`
						: "4px solid transparent",
					minHeight: "80px",
					background: entries.length > 0 ? "var(--surface)" : "var(--surface-alt)",
				}}
			>
				{isConflict && (
					<span
						className="absolute top-1 right-1 z-10 animate-pulse rounded px-1 font-bold text-white text-xs"
						style={{ background: "var(--danger)", fontSize: "10px" }}
					>
						{conflictLabel}
					</span>
				)}

				{entries.length === 0 ? (
					<button
						className="absolute inset-0 flex items-center justify-center text-2xl transition-colors hover:brightness-95"
						onClick={onAddEntry}
						style={{ color: "var(--text-muted)", opacity: 0.3 }}
						type="button"
					>
						+
					</button>
				) : (
					<>
						{entries.map((entry) => (
							<button
								className="w-full rounded p-1 text-left text-xs transition-colors hover:brightness-95"
								key={entry.id}
								onClick={() => onEditEntry(entry)}
								style={{
									background: "var(--surface-alt)",
									border: "1px solid var(--border)",
								}}
								type="button"
							>
								{entry.teacher && (
									<div className="flex items-center gap-1">
										<span
											className="h-2 w-2 flex-shrink-0 rounded-full"
											style={{ background: entry.teacher.color }}
										/>
										<span className="truncate font-semibold" style={{ color: "var(--text)" }}>
											{entry.teacher.name}
										</span>
									</div>
								)}
								{entry.ta && (
									<div className="truncate" style={{ color: "var(--text-secondary)" }}>
										TA: {entry.ta.name}
									</div>
								)}
								{(entry.class ?? entry.room) && (
									<div className="flex gap-1" style={{ color: "var(--text-muted)" }}>
										{entry.class && (
											<span className="rounded px-1" style={{ background: "var(--primary-light)", color: "var(--primary-dark)" }}>
												{entry.class.name}
											</span>
										)}
										{entry.room && (
											<span className="truncate">{entry.room.name}</span>
										)}
									</div>
								)}
							</button>
						))}
						<button
							className="mt-0.5 w-full rounded py-0.5 text-center font-medium text-xs transition-colors hover:brightness-95"
							onClick={onAddEntry}
							style={{
								color: "var(--primary)",
								border: "1px dashed var(--primary)",
								opacity: 0.7,
							}}
							type="button"
						>
							+ Thêm lớp
						</button>
					</>
				)}
			</div>
		</td>
	);
}
