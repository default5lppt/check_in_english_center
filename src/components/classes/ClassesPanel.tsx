"use client";

import { useEffect, useRef, useState } from "react";
import { useToast } from "~/components/Toast";
import { api } from "~/trpc/react";

// ─── Edit Class Modal ─────────────────────────────────────────────────────────

interface EditClassModalProps {
	classItem: { id: string; name: string } | null;
	onClose: () => void;
	onSave: (id: string, name: string) => void;
}

function EditClassModal({ classItem, onClose, onSave }: EditClassModalProps) {
	const [name, setName] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (classItem) {
			setName(classItem.name);
			setTimeout(() => inputRef.current?.focus(), 50);
		}
	}, [classItem]);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		if (classItem) document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [classItem, onClose]);

	if (!classItem) return null;

	const handleSave = () => {
		const trimmed = name.trim();
		if (!trimmed) return;
		onSave(classItem.id, trimmed);
	};

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: modal backdrop intentional
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
					✏️ Sửa tên lớp
				</h3>
				<input
					className="mb-5 w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2"
					onChange={(e) => setName(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleSave()}
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
						onClick={handleSave}
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

// ─── ClassesPanel ─────────────────────────────────────────────────────────────

export function ClassesPanel() {
	const { showToast } = useToast();
	const [selectedSchoolId, setSelectedSchoolId] = useState<string>("");
	const [inputName, setInputName] = useState("");
	const [editing, setEditing] = useState<{ id: string; name: string } | null>(null);

	const utils = api.useUtils();
	const schoolsQuery = api.school.getAll.useQuery();
	const classesQuery = api.class.getBySchool.useQuery(
		{ schoolId: selectedSchoolId },
		{ enabled: !!selectedSchoolId },
	);

	const schools = schoolsQuery.data ?? [];
	const classes = classesQuery.data ?? [];

	// Tự chọn trường đầu tiên khi load xong
	useEffect(() => {
		if (!selectedSchoolId && schools.length > 0) {
			setSelectedSchoolId(schools[0]!.id);
		}
	}, [schools, selectedSchoolId]);

	const createMutation = api.class.create.useMutation({
		onSuccess: async (cls) => {
			await utils.class.invalidate();
			showToast(`✅ Đã thêm lớp ${cls.name}`, "success");
			setInputName("");
		},
		onError: (err) => showToast(err.message ?? "Lỗi khi thêm lớp", "error"),
	});

	const updateMutation = api.class.update.useMutation({
		onSuccess: async () => {
			await utils.class.invalidate();
			showToast("✅ Đã cập nhật", "success");
			setEditing(null);
		},
		onError: (err) => showToast(err.message ?? "Lỗi khi cập nhật", "error"),
	});

	const deleteMutation = api.class.delete.useMutation({
		onSuccess: async () => {
			await utils.class.invalidate();
			showToast("Đã xoá lớp", "success");
		},
		onError: () => showToast("Lỗi khi xoá lớp", "error"),
	});

	// Tên lớp hợp lệ: bắt đầu bằng số, theo sau là chữ cái và số, có thể có "+" cho lớp ghép
	// VD: 2a1, 3B2, 1a1+1a2, 4b3+4b4
	const isTypicalClassName = (name: string) =>
		/^\d+[a-zA-Z]\d+([+]\d+[a-zA-Z]\d+)*$/.test(name.replace(/\s/g, ""));

	// Lấy chữ khu từ tên trường, VD: "An Thới 1 (A)" → "a", "An Thới (B)" → "b"
	const getSchoolZone = (schoolName: string): string | null => {
		const match = schoolName.match(/\(([a-zA-Z])\)/);
		return match ? match[1]!.toLowerCase() : null;
	};

	// Lấy chữ cái đầu tiên trong tên lớp, VD: "1b3" → "b", "2a1+2a2" → "a"
	const getClassLetter = (name: string): string | null => {
		const match = name.replace(/\s/g, "").match(/^\d+([a-zA-Z])/);
		return match ? match[1]!.toLowerCase() : null;
	};

	const handleAdd = () => {
		const name = inputName.trim();
		if (!name || !selectedSchoolId) return;

		const schoolName = selectedSchool?.name ?? "";
		const zone = getSchoolZone(schoolName);
		const letter = getClassLetter(name);

		if (!isTypicalClassName(name)) {
			if (!window.confirm(`Bạn chắc muốn dùng tên lớp "${name}" không?`)) return;
		} else if (zone && letter && letter !== zone) {
			if (
				!window.confirm(
					`Trường ${schoolName} là khu ${zone.toUpperCase()}, nhưng tên lớp "${name}" dùng chữ "${letter.toUpperCase()}". Bạn vẫn muốn thêm không?`,
				)
			)
				return;
		}

		createMutation.mutate({ name, schoolId: selectedSchoolId });
	};

	const handleDelete = (id: string, name: string) => {
		if (!window.confirm(`Xoá lớp "${name}"?`)) return;
		deleteMutation.mutate({ id });
	};

	const selectedSchool = schools.find((s) => s.id === selectedSchoolId);

	return (
		<div className="mx-auto max-w-3xl p-4">
			<div
				className="rounded-xl p-6 shadow-sm"
				style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
			>
				<h2 className="mb-6 font-bold text-xl" style={{ color: "var(--text)" }}>
					🎒 Quản lý Lớp học
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
								htmlFor="select-school"
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

						{/* Danh sách lớp */}
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
										{classes.length > 0
											? `${classes.length} lớp`
											: "Chưa có lớp nào"}
									</span>
								</div>

								{classes.length > 0 && (
									<div className="mb-4 flex flex-wrap gap-2">
										{classes.map((cls) => (
											<div
												className="flex items-center gap-1 rounded-lg px-3 py-1.5"
												key={cls.id}
												style={{
													background: selectedSchool.bg,
													border: `1.5px solid ${selectedSchool.color}`,
												}}
											>
												<span
													className="font-semibold text-sm"
													style={{ color: selectedSchool.color }}
												>
													{cls.name}
												</span>
												<button
													className="ml-1 opacity-50 hover:opacity-100"
													onClick={() => setEditing({ id: cls.id, name: cls.name })}
													title="Sửa"
													type="button"
												>
													✏️
												</button>
												<button
													className="opacity-50 hover:text-red-500 hover:opacity-100"
													onClick={() => handleDelete(cls.id, cls.name)}
													title="Xoá"
													type="button"
												>
													🗑️
												</button>
											</div>
										))}
									</div>
								)}

								{/* Add row */}
								<div className="flex gap-2">
									<input
										className="flex-1 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2"
										onChange={(e) => setInputName(e.target.value)}
										onKeyDown={(e) => e.key === "Enter" && handleAdd()}
										placeholder={`Tên lớp mới của ${selectedSchool.name}... (VD: 2A1, 3B2+3B3)`}
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

			<EditClassModal
				classItem={editing}
				onClose={() => setEditing(null)}
				onSave={(id, name) => updateMutation.mutate({ id, name })}
			/>
		</div>
	);
}
