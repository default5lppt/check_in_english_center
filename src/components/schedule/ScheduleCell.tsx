"use client";

interface Session {
	teacherId: string | null;
	taId: string | null;
	note: string | null;
	teacher?: { name: string; color: string } | null;
	ta?: { name: string; color: string } | null;
}

interface School {
	color: string;
}

interface ScheduleCellProps {
	session: Session | null;
	school: School;
	isConflict: boolean;
	onClick: () => void;
	conflictLabel: string;
}

export function ScheduleCell({
	session,
	school,
	isConflict,
	onClick,
	conflictLabel,
}: ScheduleCellProps) {
	return (
		<td
			className="border p-0"
			style={{
				borderColor: "var(--border)",
				minWidth: "120px",
				minHeight: "80px",
			}}
		>
			<button
				className="relative flex h-full w-full flex-col gap-1 p-2 text-left transition-colors hover:brightness-95"
				onClick={onClick}
				style={{
					background: session ? "var(--surface)" : "var(--surface-alt)",
					minHeight: "80px",
					borderLeft: session
						? `4px solid ${school.color}`
						: "4px solid transparent",
				}}
				type="button"
			>
				{!session ? (
					<span
						className="absolute inset-0 flex items-center justify-center text-2xl"
						style={{ color: "var(--text-muted)", opacity: 0.3 }}
					>
						+
					</span>
				) : (
					<>
						{session.teacher && (
							<div className="flex items-center gap-1">
								<span
									className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
									style={{ background: session.teacher.color }}
								/>
								<span
									className="truncate font-semibold text-xs"
									style={{ color: "var(--text)" }}
								>
									{session.teacher.name}
								</span>
							</div>
						)}
						{session.ta && (
							<div
								className="truncate text-xs"
								style={{ color: "var(--text-secondary)" }}
							>
								TA: {session.ta.name}
							</div>
						)}
						{session.note && (
							<span
								className="rounded-full px-1.5 py-0.5 text-xs italic"
								style={{
									background: "var(--primary-light)",
									color: "var(--primary-dark)",
								}}
							>
								{session.note}
							</span>
						)}
					</>
				)}

				{isConflict && (
					<span
						className="absolute top-1 right-1 animate-pulse rounded px-1 font-bold text-white text-xs"
						style={{ background: "var(--danger)", fontSize: "10px" }}
					>
						{conflictLabel}
					</span>
				)}
			</button>
		</td>
	);
}
