"use client";

import { useEffect, useState } from "react";
import { useToast } from "~/components/Toast";
import { useLang } from "~/contexts/LangContext";
import { api } from "~/trpc/react";

interface CellInfo {
	weekStart: string;
	dayIndex: number;
	periodIndex: number;
	schoolId: string;
	schoolName: string;
	dayLabel: string;
	currentSession?: {
		teacherId: string | null;
		taId: string | null;
		note: string | null;
	} | null;
}

interface EditCellModalProps {
	cell: CellInfo | null;
	onClose: () => void;
	onSaved: () => void;
}

export function EditCellModal({ cell, onClose, onSaved }: EditCellModalProps) {
	const { t } = useLang();
	const { showToast } = useToast();

	const [teacherId, setTeacherId] = useState<string>("");
	const [taId, setTaId] = useState<string>("");
	const [note, setNote] = useState("");

	const teachersQuery = api.teacher.getAll.useQuery();
	const tasQuery = api.ta.getAll.useQuery();

	const utils = api.useUtils();

	const upsertMutation = api.schedule.upsertSession.useMutation({
		onSuccess: async () => {
			await utils.schedule.invalidate();
			showToast(t("toast.saved"), "success");
			onSaved();
			onClose();
		},
		onError: () => showToast("Lỗi khi lưu", "error"),
	});

	const deleteMutation = api.schedule.deleteSession.useMutation({
		onSuccess: async () => {
			await utils.schedule.invalidate();
			showToast(t("toast.deleted"), "success");
			onSaved();
			onClose();
		},
		onError: () => showToast("Lỗi khi xoá", "error"),
	});

	useEffect(() => {
		if (cell) {
			setTeacherId(cell.currentSession?.teacherId ?? "");
			setTaId(cell.currentSession?.taId ?? "");
			setNote(cell.currentSession?.note ?? "");
		}
	}, [cell]);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		if (cell) document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [cell, onClose]);

	if (!cell) return null;

	const periodLabel = t("schedule.period", { n: String(cell.periodIndex + 1) });
	const title = t("cell.editTitle", {
		period: String(cell.periodIndex + 1),
		school: cell.schoolName,
		day: cell.dayLabel,
	});

	const handleSave = () => {
		upsertMutation.mutate({
			weekStart: cell.weekStart,
			dayIndex: cell.dayIndex,
			periodIndex: cell.periodIndex,
			schoolId: cell.schoolId,
			teacherId: teacherId || null,
			taId: taId || null,
			note: note.trim() || null,
		});
	};

	const handleDelete = () => {
		deleteMutation.mutate({
			weekStart: cell.weekStart,
			dayIndex: cell.dayIndex,
			periodIndex: cell.periodIndex,
			schoolId: cell.schoolId,
		});
	};

	void periodLabel;

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
				<h3
					className="mb-4 font-bold text-base"
					style={{ color: "var(--text)" }}
				>
					{title}
				</h3>

				{/* Teacher */}
				<div className="mb-3">
					<label
						className="mb-1 block font-medium text-sm"
						htmlFor="cell-teacher"
						style={{ color: "var(--text-secondary)" }}
					>
						{t("cell.teacher")}
					</label>
					<select
						className="w-full rounded-lg border px-3 py-2 text-sm"
						id="cell-teacher"
						onChange={(e) => setTeacherId(e.target.value)}
						style={{ border: "1px solid var(--border)" }}
						value={teacherId}
					>
						<option value="">{t("cell.selectTeacher")}</option>
						{teachersQuery.data?.map((teacher) => (
							<option key={teacher.id} value={teacher.id}>
								{teacher.name}
							</option>
						))}
					</select>
				</div>

				{/* TA */}
				<div className="mb-3">
					<label
						className="mb-1 block font-medium text-sm"
						htmlFor="cell-ta"
						style={{ color: "var(--text-secondary)" }}
					>
						{t("cell.ta")}
					</label>
					<select
						className="w-full rounded-lg border px-3 py-2 text-sm"
						id="cell-ta"
						onChange={(e) => setTaId(e.target.value)}
						style={{ border: "1px solid var(--border)" }}
						value={taId}
					>
						<option value="">{t("cell.selectTA")}</option>
						{tasQuery.data?.map((ta) => (
							<option key={ta.id} value={ta.id}>
								{ta.name}
							</option>
						))}
					</select>
				</div>

				{/* Note */}
				<div className="mb-5">
					<label
						className="mb-1 block font-medium text-sm"
						htmlFor="cell-note"
						style={{ color: "var(--text-secondary)" }}
					>
						{t("cell.note")}
					</label>
					<textarea
						className="w-full rounded-lg border px-3 py-2 text-sm"
						id="cell-note"
						onChange={(e) => setNote(e.target.value)}
						placeholder={t("cell.notePlaceholder")}
						rows={2}
						style={{ border: "1px solid var(--border)", resize: "vertical" }}
						value={note}
					/>
				</div>

				<div className="flex gap-2">
					<button
						className="rounded-lg px-4 py-2 font-medium text-sm text-white disabled:opacity-50"
						disabled={deleteMutation.isPending}
						onClick={handleDelete}
						style={{ background: "var(--danger)" }}
						type="button"
					>
						{t("cell.delete")}
					</button>
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
						{t("cell.cancel")}
					</button>
					<button
						className="rounded-lg px-4 py-2 font-medium text-sm text-white disabled:opacity-50"
						disabled={upsertMutation.isPending}
						onClick={handleSave}
						style={{ background: "var(--primary)" }}
						type="button"
					>
						{t("cell.save")}
					</button>
				</div>
			</div>
		</div>
	);
}
