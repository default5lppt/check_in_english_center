"use client";

import { useEffect, useRef, useState } from "react";
import { useToast } from "~/components/Toast";
import { useLang } from "~/contexts/LangContext";
import { api } from "~/trpc/react";
import { SCHOOL_BG_PALETTE, SCHOOL_PALETTE } from "~/utils/colors";

interface School {
	id: string;
	name: string;
	color: string;
	bg: string;
}

// ─── Edit School Modal ────────────────────────────────────────────────────────

interface EditSchoolModalProps {
	school: School | null;
	onClose: () => void;
	onSave: (id: string, name: string, color: string, bg: string) => void;
}

function EditSchoolModal({ school, onClose, onSave }: EditSchoolModalProps) {
	const [name, setName] = useState("");
	const [colorIdx, setColorIdx] = useState(0);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (school) {
			setName(school.name);
			const idx = SCHOOL_PALETTE.indexOf(school.color);
			setColorIdx(idx >= 0 ? idx : 0);
			setTimeout(() => inputRef.current?.focus(), 50);
		}
	}, [school]);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		if (school) document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [school, onClose]);

	if (!school) return null;

	const handleSave = () => {
		const trimmed = name.trim().toUpperCase();
		if (!trimmed) return;
		const color = SCHOOL_PALETTE[colorIdx] ?? "#3b82f6";
		const bg = SCHOOL_BG_PALETTE[colorIdx] ?? "#dbeafe";
		onSave(school.id, trimmed, color, bg);
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
					✏️ Sửa thông tin trường
				</h3>

				{/* Name */}
				<div className="mb-4">
					<label
						className="mb-1 block font-medium text-sm"
						htmlFor="school-name"
						style={{ color: "var(--text-secondary)" }}
					>
						Tên trường (viết tắt)
					</label>
					<input
						className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2"
						id="school-name"
						onChange={(e) => setName(e.target.value.toUpperCase())}
						onKeyDown={(e) => e.key === "Enter" && handleSave()}
						ref={inputRef}
						style={{ border: "1px solid var(--border)" }}
						type="text"
						value={name}
					/>
				</div>

				{/* Color picker */}
				<div className="mb-6">
					{/* biome-ignore lint/a11y/noLabelWithoutControl: visual color picker */}
					<label
						className="mb-2 block font-medium text-sm"
						style={{ color: "var(--text-secondary)" }}
					>
						Màu trường
					</label>
					<div className="flex flex-wrap gap-2">
						{SCHOOL_PALETTE.map((c, idx) => (
							<button
								className="relative h-8 w-8 rounded-full transition-transform hover:scale-110"
								key={c}
								onClick={() => setColorIdx(idx)}
								style={{
									background: c,
									outline: colorIdx === idx ? `3px solid ${c}` : "none",
									outlineOffset: "2px",
								}}
								title={c}
								type="button"
							>
								{colorIdx === idx && (
									<span className="absolute inset-0 flex items-center justify-center font-bold text-white text-xs">
										✓
									</span>
								)}
							</button>
						))}
					</div>
					{/* Preview */}
					<div className="mt-3 flex items-center gap-2">
						<span className="text-xs" style={{ color: "var(--text-muted)" }}>
							Xem trước:
						</span>
						<span
							className="rounded px-3 py-0.5 font-semibold text-sm"
							style={{
								background: SCHOOL_BG_PALETTE[colorIdx] ?? "#dbeafe",
								color: SCHOOL_PALETTE[colorIdx] ?? "#3b82f6",
								border: `2px solid ${SCHOOL_PALETTE[colorIdx] ?? "#3b82f6"}`,
							}}
						>
							{name || "TÊN"}
						</span>
					</div>
				</div>

				<div className="flex justify-end gap-2">
					<button
						className="rounded-lg px-4 py-2 font-medium text-sm"
						onClick={onClose}
						style={{
							background: "var(--surface-alt)",
							color: "var(--text-secondary)",
						}}
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

// ─── SchoolsPanel ─────────────────────────────────────────────────────────────

export function SchoolsPanel() {
	const { t } = useLang();
	const { showToast } = useToast();
	const [inputName, setInputName] = useState("");
	const [editing, setEditing] = useState<School | null>(null);

	const utils = api.useUtils();
	const schoolsQuery = api.school.getAll.useQuery();

	const createMutation = api.school.create.useMutation({
		onSuccess: async (school) => {
			await utils.school.invalidate();
			showToast(t("toast.added", { name: school.name }), "success");
			setInputName("");
		},
		onError: () => showToast("Lỗi khi thêm trường", "error"),
	});

	const updateMutation = api.school.update.useMutation({
		onSuccess: async () => {
			await utils.school.invalidate();
			showToast(t("toast.updated"), "success");
			setEditing(null);
		},
		onError: () => showToast("Lỗi khi cập nhật trường", "error"),
	});

	const deleteMutation = api.school.delete.useMutation({
		onSuccess: async () => {
			await utils.school.invalidate();
			await utils.schedule.invalidate();
			showToast(t("toast.deleted"), "success");
		},
		onError: () => showToast("Lỗi khi xoá trường", "error"),
	});

	const handleAdd = () => {
		const name = inputName.trim().toUpperCase();
		if (!name) return;
		const schools = schoolsQuery.data ?? [];
		const idx = schools.length % SCHOOL_PALETTE.length;
		const color = SCHOOL_PALETTE[idx] ?? "#3b82f6";
		const bg = SCHOOL_BG_PALETTE[idx] ?? "#dbeafe";
		createMutation.mutate({ name, color, bg, order: schools.length });
	};

	const handleDelete = (id: string) => {
		if (!window.confirm(t("schools.deleteConfirm"))) return;
		deleteMutation.mutate({ id });
	};

	const handleSaveEdit = (
		id: string,
		name: string,
		color: string,
		bg: string,
	) => {
		updateMutation.mutate({ id, name, color, bg });
	};

	const schools = schoolsQuery.data ?? [];

	return (
		<div className="mx-auto max-w-3xl p-4">
			<div
				className="rounded-xl p-6 shadow-sm"
				style={{
					background: "var(--surface)",
					border: "1px solid var(--border)",
				}}
			>
				<h2 className="mb-6 font-bold text-xl" style={{ color: "var(--text)" }}>
					🏫 {t("schools.title")}
				</h2>

				{schools.length === 0 ? (
					<p
						className="mb-6 text-center text-sm"
						style={{ color: "var(--text-muted)" }}
					>
						Chưa có trường nào
					</p>
				) : (
					<div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
						{schools.map((school) => (
							<div
								className="flex items-center justify-between rounded-lg px-3 py-2"
								key={school.id}
								style={{
									background: school.bg,
									border: `2px solid ${school.color}`,
								}}
							>
								<div className="flex items-center gap-2">
									<span
										className="h-4 w-4 flex-shrink-0 rounded-full"
										style={{ background: school.color }}
									/>
									<span
										className="font-semibold text-sm"
										style={{ color: school.color }}
									>
										{school.name}
									</span>
								</div>
								<div className="flex items-center gap-1">
									<button
										className="opacity-50 hover:opacity-100"
										onClick={() => setEditing(school)}
										title="Sửa"
										type="button"
									>
										✏️
									</button>
									<button
										className="opacity-50 hover:text-red-500 hover:opacity-100"
										onClick={() => handleDelete(school.id)}
										title="Xoá"
										type="button"
									>
										🗑️
									</button>
								</div>
							</div>
						))}
					</div>
				)}

				{/* Add row */}
				<div className="flex gap-2">
					<input
						className="flex-1 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2"
						onChange={(e) => setInputName(e.target.value.toUpperCase())}
						onKeyDown={(e) => e.key === "Enter" && handleAdd()}
						placeholder={t("schools.placeholder")}
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
						disabled={createMutation.isPending}
						onClick={handleAdd}
						style={{ background: "var(--primary)" }}
						type="button"
					>
						{t("schools.add")}
					</button>
				</div>
			</div>

			<EditSchoolModal
				onClose={() => setEditing(null)}
				onSave={handleSaveEdit}
				school={editing}
			/>
		</div>
	);
}
