"use client";

import { useEffect, useState } from "react";
import { useToast } from "~/components/Toast";
import { api } from "~/trpc/react";

interface EntryData {
	id: string;
	teacherId: string | null;
	taId: string | null;
	classId: string | null;
	roomId: string | null;
}

interface CellTarget {
	weekStart: string;
	dayIndex: number;
	periodIndex: number;
	schoolId: string;
	schoolName: string;
	dayLabel: string;
}

export interface EditCellModalState {
	cell: CellTarget;
	entry?: EntryData | null;
}

interface EditCellModalProps {
	state: EditCellModalState | null;
	onClose: () => void;
	onSaved: () => void;
}

export function EditCellModal({ state, onClose, onSaved }: EditCellModalProps) {
	const { showToast } = useToast();

	const [teacherId, setTeacherId] = useState<string>("");
	const [taId, setTaId] = useState<string>("");
	const [classId, setClassId] = useState<string>("");
	const [roomId, setRoomId] = useState<string>("");

	const teachersQuery = api.teacher.getAll.useQuery();
	const tasQuery = api.ta.getAll.useQuery();
	const classesQuery = api.class.getBySchool.useQuery(
		{ schoolId: state?.cell.schoolId ?? "" },
		{ enabled: !!state },
	);
	const roomsQuery = api.room.getBySchool.useQuery(
		{ schoolId: state?.cell.schoolId ?? "" },
		{ enabled: !!state },
	);

	const utils = api.useUtils();

	const addMutation = api.schedule.addEntry.useMutation({
		onSuccess: async () => {
			await utils.schedule.invalidate();
			showToast("✅ Đã thêm lớp", "success");
			onSaved();
			onClose();
		},
		onError: (err) => showToast(err.message, "error"),
	});

	const updateMutation = api.schedule.updateEntry.useMutation({
		onSuccess: async () => {
			await utils.schedule.invalidate();
			showToast("✅ Đã cập nhật", "success");
			onSaved();
			onClose();
		},
		onError: (err) => showToast(err.message, "error"),
	});

	const deleteMutation = api.schedule.deleteEntry.useMutation({
		onSuccess: async () => {
			await utils.schedule.invalidate();
			showToast("Đã xoá lớp", "success");
			onSaved();
			onClose();
		},
		onError: (err) => showToast(err.message, "error"),
	});

	useEffect(() => {
		if (state) {
			setTeacherId(state.entry?.teacherId ?? "");
			setTaId(state.entry?.taId ?? "");
			setClassId(state.entry?.classId ?? "");
			setRoomId(state.entry?.roomId ?? "");
		}
	}, [state]);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		if (state) document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [state, onClose]);

	if (!state) return null;

	const { cell, entry } = state;
	const isEditing = !!entry;
	const title = isEditing
		? `Sửa lớp · Tiết ${cell.periodIndex + 1} · ${cell.schoolName} · ${cell.dayLabel}`
		: `Thêm lớp · Tiết ${cell.periodIndex + 1} · ${cell.schoolName} · ${cell.dayLabel}`;

	const handleSave = () => {
		const payload = {
			weekStart: cell.weekStart,
			dayIndex: cell.dayIndex,
			periodIndex: cell.periodIndex,
			schoolId: cell.schoolId,
			teacherId: teacherId || null,
			taId: taId || null,
			classId: classId || null,
			roomId: roomId || null,
		};
		if (isEditing) {
			updateMutation.mutate({ entryId: entry.id, ...payload });
		} else {
			addMutation.mutate(payload);
		}
	};

	const handleDelete = () => {
		if (!entry) return;
		deleteMutation.mutate({ entryId: entry.id });
	};

	const isPending = addMutation.isPending || updateMutation.isPending;

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
				<h3 className="mb-4 font-bold text-base" style={{ color: "var(--text)" }}>
					{title}
				</h3>

				{/* Teacher */}
				<div className="mb-3">
					<label
						className="mb-1 block font-medium text-sm"
						htmlFor="entry-teacher"
						style={{ color: "var(--text-secondary)" }}
					>
						Giáo viên
					</label>
					<select
						className="w-full rounded-lg border px-3 py-2 text-sm"
						id="entry-teacher"
						onChange={(e) => setTeacherId(e.target.value)}
						style={{ border: "1px solid var(--border)" }}
						value={teacherId}
					>
						<option value="">-- Chọn giáo viên --</option>
						{teachersQuery.data?.map((t) => (
							<option key={t.id} value={t.id}>
								{t.name}
							</option>
						))}
					</select>
				</div>

				{/* TA */}
				<div className="mb-3">
					<label
						className="mb-1 block font-medium text-sm"
						htmlFor="entry-ta"
						style={{ color: "var(--text-secondary)" }}
					>
						Trợ giảng
					</label>
					<select
						className="w-full rounded-lg border px-3 py-2 text-sm"
						id="entry-ta"
						onChange={(e) => setTaId(e.target.value)}
						style={{ border: "1px solid var(--border)" }}
						value={taId}
					>
						<option value="">-- Chọn trợ giảng --</option>
						{tasQuery.data?.map((ta) => (
							<option key={ta.id} value={ta.id}>
								{ta.name}
							</option>
						))}
					</select>
				</div>

				{/* Class */}
				<div className="mb-3">
					<label
						className="mb-1 block font-medium text-sm"
						htmlFor="entry-class"
						style={{ color: "var(--text-secondary)" }}
					>
						Lớp
					</label>
					<select
						className="w-full rounded-lg border px-3 py-2 text-sm"
						id="entry-class"
						onChange={(e) => setClassId(e.target.value)}
						style={{ border: "1px solid var(--border)" }}
						value={classId}
					>
						<option value="">-- Chọn lớp --</option>
						{classesQuery.data?.map((c) => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div>

				{/* Room */}
				<div className="mb-5">
					<label
						className="mb-1 block font-medium text-sm"
						htmlFor="entry-room"
						style={{ color: "var(--text-secondary)" }}
					>
						Phòng
					</label>
					<select
						className="w-full rounded-lg border px-3 py-2 text-sm"
						id="entry-room"
						onChange={(e) => setRoomId(e.target.value)}
						style={{ border: "1px solid var(--border)" }}
						value={roomId}
					>
						<option value="">-- Chọn phòng --</option>
						{roomsQuery.data?.map((r) => (
							<option key={r.id} value={r.id}>
								{r.name}
							</option>
						))}
					</select>
				</div>

				<div className="flex gap-2">
					{isEditing && (
						<button
							className="rounded-lg px-4 py-2 font-medium text-sm text-white disabled:opacity-50"
							disabled={deleteMutation.isPending}
							onClick={handleDelete}
							style={{ background: "var(--danger)" }}
							type="button"
						>
							Xoá
						</button>
					)}
					<div className="flex-1" />
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
						disabled={isPending}
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
