"use client";

import { useState } from "react";
import { EditStaffModal } from "./EditStaffModal";

interface StaffMember {
	id: string;
	name: string;
	color: string;
}

interface StaffListProps {
	items: StaffMember[];
	editTitle: string;
	onUpdate: (id: string, name: string, color: string) => void;
	onDelete: (id: string) => void;
}

export function StaffList({
	items,
	editTitle,
	onUpdate,
	onDelete,
}: StaffListProps) {
	const [editing, setEditing] = useState<StaffMember | null>(null);

	return (
		<>
			<ul className="flex flex-col gap-2">
				{items.map((item) => (
					<li
						className="flex items-center gap-3 rounded-lg px-3 py-2"
						key={item.id}
						style={{
							background: "var(--surface-alt)",
							border: "1px solid var(--border)",
						}}
					>
						<span
							className="h-4 w-4 flex-shrink-0 rounded-full"
							style={{ background: item.color }}
						/>
						<span
							className="flex-1 font-medium text-sm"
							style={{ color: "var(--text)" }}
						>
							{item.name}
						</span>
						<button
							className="text-sm opacity-60 hover:opacity-100"
							onClick={() => setEditing(item)}
							type="button"
						>
							✏️
						</button>
						<button
							className="text-sm opacity-60 hover:text-red-500 hover:opacity-100"
							onClick={() => onDelete(item.id)}
							type="button"
						>
							🗑️
						</button>
					</li>
				))}
			</ul>

			<EditStaffModal
				initialColor={editing?.color ?? "#3b82f6"}
				initialName={editing?.name ?? ""}
				isOpen={editing !== null}
				onClose={() => setEditing(null)}
				onSave={(name, color) => {
					if (editing) onUpdate(editing.id, name, color);
					setEditing(null);
				}}
				title={editTitle}
			/>
		</>
	);
}
