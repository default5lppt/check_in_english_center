"use client";

import { useState } from "react";
import { useToast } from "~/components/Toast";
import { useLang } from "~/contexts/LangContext";
import { api } from "~/trpc/react";
import { STAFF_PALETTE } from "~/utils/colors";
import { StaffList } from "./StaffList";

interface StaffPanelProps {
	mode: "teacher" | "ta";
}

export function StaffPanel({ mode }: StaffPanelProps) {
	const { t } = useLang();
	const { showToast } = useToast();
	const [inputName, setInputName] = useState("");

	const utils = api.useUtils();

	const isTeacher = mode === "teacher";
	const teacherQuery = api.teacher.getAll.useQuery();
	const taQuery = api.ta.getAll.useQuery();
	const dataQuery = isTeacher ? teacherQuery : taQuery;

	const createTeacher = api.teacher.create.useMutation({
		onSuccess: async (item) => {
			await utils.teacher.invalidate();
			showToast(t("toast.added", { name: item.name }), "success");
			setInputName("");
		},
		onError: (err) => showToast(err.message, "error"),
	});
	const createTA = api.ta.create.useMutation({
		onSuccess: async (item) => {
			await utils.ta.invalidate();
			showToast(t("toast.added", { name: item.name }), "success");
			setInputName("");
		},
		onError: (err) => showToast(err.message, "error"),
	});

	const updateTeacher = api.teacher.update.useMutation({
		onSuccess: async () => {
			await utils.teacher.invalidate();
			showToast(t("toast.updated"), "success");
		},
		onError: (err) => showToast(err.message, "error"),
	});
	const updateTA = api.ta.update.useMutation({
		onSuccess: async () => {
			await utils.ta.invalidate();
			showToast(t("toast.updated"), "success");
		},
		onError: (err) => showToast(err.message, "error"),
	});

	const deleteTeacher = api.teacher.delete.useMutation({
		onSuccess: async () => {
			await utils.teacher.invalidate();
			showToast(t("toast.deleted"), "success");
		},
	});
	const deleteTA = api.ta.delete.useMutation({
		onSuccess: async () => {
			await utils.ta.invalidate();
			showToast(t("toast.deleted"), "success");
		},
	});

	const items = dataQuery.data ?? [];

	const handleAdd = () => {
		const name = inputName.trim();
		if (!name) return;
		const idx = items.length % STAFF_PALETTE.length;
		const color = STAFF_PALETTE[idx] ?? "#3b82f6";
		if (isTeacher) {
			createTeacher.mutate({ name, color });
		} else {
			createTA.mutate({ name, color });
		}
	};

	const handleUpdate = (id: string, name: string, color: string) => {
		if (isTeacher) updateTeacher.mutate({ id, name, color });
		else updateTA.mutate({ id, name, color });
	};

	const handleDelete = (id: string) => {
		if (isTeacher) deleteTeacher.mutate({ id });
		else deleteTA.mutate({ id });
	};

	const title = isTeacher ? t("teachers.title") : t("tas.title");
	const editTitle = isTeacher ? t("teachers.edit") : t("tas.edit");
	const placeholder = isTeacher
		? t("teachers.placeholder")
		: t("tas.placeholder");
	const addLabel = isTeacher ? t("teachers.add") : t("tas.add");
	const noData = isTeacher ? t("teachers.noData") : t("tas.noData");

	return (
		<div className="mx-auto max-w-xl p-4">
			<div
				className="rounded-xl p-6 shadow-sm"
				style={{
					background: "var(--surface)",
					border: "1px solid var(--border)",
				}}
			>
				<h2 className="mb-6 font-bold text-xl" style={{ color: "var(--text)" }}>
					{isTeacher ? "👩‍🏫" : "🧑‍💼"} {title}
				</h2>

				{items.length === 0 ? (
					<p
						className="mb-6 text-center text-sm"
						style={{ color: "var(--text-muted)" }}
					>
						{noData}
					</p>
				) : (
					<div className="mb-6">
						<StaffList
							editTitle={editTitle}
							items={items}
							onDelete={handleDelete}
							onUpdate={handleUpdate}
						/>
					</div>
				)}

				<div className="flex gap-2">
					<input
						className="flex-1 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2"
						onChange={(e) => setInputName(e.target.value)}
						onKeyDown={(e) => e.key === "Enter" && handleAdd()}
						placeholder={placeholder}
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
						disabled={createTeacher.isPending || createTA.isPending}
						onClick={handleAdd}
						style={{ background: "var(--primary)" }}
						type="button"
					>
						{addLabel}
					</button>
				</div>
			</div>
		</div>
	);
}
