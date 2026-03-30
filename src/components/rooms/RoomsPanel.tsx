"use client";

import { useEffect, useRef, useState } from "react";
import { useToast } from "~/components/Toast";
import { api } from "~/trpc/react";

interface EditRoomModalProps {
	room: { id: string; name: string } | null;
	onClose: () => void;
	onSave: (id: string, name: string) => void;
}

function EditRoomModal({ room, onClose, onSave }: EditRoomModalProps) {
	const [name, setName] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (room) {
			setName(room.name);
			setTimeout(() => inputRef.current?.focus(), 50);
		}
	}, [room]);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		if (room) document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [room, onClose]);

	if (!room) return null;

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
			onClick={onClose}
			onKeyDown={(e) => e.key === "Escape" && onClose()}
			role="presentation"
		>
			<div
				className="w-full max-w-sm rounded-xl p-6 shadow-xl"
				onClick={(e) => e.stopPropagation()}
				onKeyDown={(e) => e.stopPropagation()}
				role="dialog"
				style={{ background: "var(--surface)" }}
			>
				<h3 className="mb-4 font-bold text-lg" style={{ color: "var(--text)" }}>
					✏️ Sửa tên phòng
				</h3>
				<input
					className="mb-5 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2"
					onChange={(e) => setName(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && name.trim() && onSave(room.id, name.trim())}
					ref={inputRef}
					style={{ border: "1px solid var(--border)" }}
					type="text"
					value={name}
				/>
				<div className="flex justify-end gap-2">
					<button
						className="rounded-lg px-4 py-2 font-medium text-sm"
						onClick={onClose}
						style={{ background: "var(--surface-alt)", color: "var(--text-secondary)" }}
						type="button"
					>
						Huỷ
					</button>
					<button
						className="rounded-lg px-4 py-2 font-medium text-sm text-white disabled:opacity-50"
						disabled={!name.trim()}
						onClick={() => name.trim() && onSave(room.id, name.trim())}
						style={{ background: "var(--primary)" }}
						type="button"
					>
						Lưu
					</button>
				</div>
			</div>
		</div>
	);
}

export function RoomsPanel() {
	const { showToast } = useToast();
	const [selectedSchoolId, setSelectedSchoolId] = useState<string>("");
	const [inputName, setInputName] = useState("");
	const [editing, setEditing] = useState<{ id: string; name: string } | null>(null);

	const utils = api.useUtils();
	const schoolsQuery = api.school.getAll.useQuery();
	const roomsQuery = api.room.getBySchool.useQuery(
		{ schoolId: selectedSchoolId },
		{ enabled: !!selectedSchoolId },
	);

	const schools = schoolsQuery.data ?? [];
	const rooms = roomsQuery.data ?? [];
	const selectedSchool = schools.find((s) => s.id === selectedSchoolId);

	useEffect(() => {
		if (!selectedSchoolId && schools.length > 0) {
			setSelectedSchoolId(schools[0]!.id);
		}
	}, [schools, selectedSchoolId]);

	const createMutation = api.room.create.useMutation({
		onSuccess: async (room) => {
			await utils.room.invalidate();
			showToast(`✅ Đã thêm phòng ${room.name}`, "success");
			setInputName("");
		},
		onError: (err) => showToast(err.message ?? "Lỗi khi thêm phòng", "error"),
	});

	const updateMutation = api.room.update.useMutation({
		onSuccess: async () => {
			await utils.room.invalidate();
			showToast("✅ Đã cập nhật", "success");
			setEditing(null);
		},
		onError: (err) => showToast(err.message ?? "Lỗi khi cập nhật", "error"),
	});

	const deleteMutation = api.room.delete.useMutation({
		onSuccess: async () => {
			await utils.room.invalidate();
			showToast("Đã xoá phòng", "success");
		},
		onError: () => showToast("Lỗi khi xoá phòng", "error"),
	});

	const handleAdd = () => {
		const name = inputName.trim();
		if (!name || !selectedSchoolId) return;
		createMutation.mutate({ name, schoolId: selectedSchoolId });
	};

	const handleDelete = (id: string, name: string) => {
		if (!window.confirm(`Xoá phòng "${name}"?`)) return;
		deleteMutation.mutate({ id });
	};

	return (
		<div className="mx-auto max-w-3xl p-4">
			<div
				className="rounded-xl p-6 shadow-sm"
				style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
			>
				<h2 className="mb-6 font-bold text-xl" style={{ color: "var(--text)" }}>
					🚪 Quản lý Phòng học
				</h2>

				{schools.length === 0 ? (
					<p className="text-center text-sm" style={{ color: "var(--text-muted)" }}>
						Chưa có trường nào. Vào tab "Trường" để thêm trước.
					</p>
				) : (
					<>
						{/* Chọn trường */}
						<div className="mb-5">
							<label
								className="mb-2 block font-medium text-sm"
								style={{ color: "var(--text-secondary)" }}
							>
								Chọn trường
							</label>
							<div className="flex flex-wrap gap-2">
								{schools.map((school) => (
									<button
										className="rounded-lg px-4 py-1.5 font-semibold text-sm transition-all"
										key={school.id}
										onClick={() => {
											setSelectedSchoolId(school.id);
											setInputName("");
										}}
										style={
											selectedSchoolId === school.id
												? {
														background: school.bg,
														color: school.color,
														border: `2px solid ${school.color}`,
													}
												: {
														background: "var(--surface-alt)",
														color: "var(--text-secondary)",
														border: "2px solid var(--border)",
													}
										}
										type="button"
									>
										{school.name}
									</button>
								))}
							</div>
						</div>

						{selectedSchool && (
							<>
								<div className="mb-3 flex items-center gap-2">
									<span
										className="rounded px-2 py-0.5 font-semibold text-xs"
										style={{
											background: selectedSchool.bg,
											color: selectedSchool.color,
											border: `1.5px solid ${selectedSchool.color}`,
										}}
									>
										{selectedSchool.name}
									</span>
									<span className="text-sm" style={{ color: "var(--text-secondary)" }}>
										{rooms.length > 0 ? `${rooms.length} phòng` : "Chưa có phòng nào"}
									</span>
								</div>

								{rooms.length > 0 && (
									<div className="mb-4 flex flex-wrap gap-2">
										{rooms.map((room) => (
											<div
												className="flex items-center gap-1 rounded-lg px-3 py-1.5"
												key={room.id}
												style={{
													background: selectedSchool.bg,
													border: `1.5px solid ${selectedSchool.color}`,
												}}
											>
												<span
													className="font-semibold text-sm"
													style={{ color: selectedSchool.color }}
												>
													{room.name}
												</span>
												<button
													className="ml-1 opacity-50 hover:opacity-100"
													onClick={() => setEditing({ id: room.id, name: room.name })}
													title="Sửa"
													type="button"
												>
													✏️
												</button>
												<button
													className="opacity-50 hover:text-red-500 hover:opacity-100"
													onClick={() => handleDelete(room.id, room.name)}
													title="Xoá"
													type="button"
												>
													🗑️
												</button>
											</div>
										))}
									</div>
								)}

								<div className="flex gap-2">
									<input
										className="flex-1 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2"
										onChange={(e) => setInputName(e.target.value)}
										onKeyDown={(e) => e.key === "Enter" && handleAdd()}
										placeholder={`Tên phòng mới... (VD: P:Ngoại Ngữ, P:Thư viện)`}
										style={{
											border: "1px solid var(--border)",
											background: "var(--surface-alt)",
											color: "var(--text)",
										}}
										type="text"
										value={inputName}
									/>
									<button
										className="rounded-lg px-4 py-2 font-medium text-sm text-white disabled:opacity-50"
										disabled={createMutation.isPending || !inputName.trim()}
										onClick={handleAdd}
										style={{ background: "var(--primary)" }}
										type="button"
									>
										+ Thêm
									</button>
								</div>
							</>
						)}
					</>
				)}
			</div>

			<EditRoomModal
				room={editing}
				onClose={() => setEditing(null)}
				onSave={(id, name) => updateMutation.mutate({ id, name })}
			/>
		</div>
	);
}
