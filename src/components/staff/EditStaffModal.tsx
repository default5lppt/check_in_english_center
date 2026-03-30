"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "~/contexts/LangContext";
import { STAFF_PALETTE } from "~/utils/colors";

interface EditStaffModalProps {
	isOpen: boolean;
	title: string;
	initialName: string;
	initialColor: string;
	onSave: (name: string, color: string) => void;
	onClose: () => void;
}

export function EditStaffModal({
	isOpen,
	title,
	initialName,
	initialColor,
	onSave,
	onClose,
}: EditStaffModalProps) {
	const { t } = useLang();
	const [name, setName] = useState(initialName);
	const [color, setColor] = useState(initialColor);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		setName(initialName);
		setColor(initialColor);
	}, [initialName, initialColor]);

	useEffect(() => {
		if (isOpen) {
			setTimeout(() => inputRef.current?.focus(), 50);
		}
	}, [isOpen]);

	useEffect(() => {
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		if (isOpen) document.addEventListener("keydown", handleKey);
		return () => document.removeEventListener("keydown", handleKey);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

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
					{title}
				</h3>

				<div className="mb-4">
					<label
						className="mb-1 block font-medium text-sm"
						htmlFor="staff-name"
						style={{ color: "var(--text-secondary)" }}
					>
						{t("staff.name")}
					</label>
					<input
						className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2"
						id="staff-name"
						onChange={(e) => setName(e.target.value)}
						ref={inputRef}
						style={{ border: "1px solid var(--border)" }}
						type="text"
						value={name}
					/>
				</div>

				<div className="mb-6">
					{/* biome-ignore lint/a11y/noLabelWithoutControl: visual color picker, no input */}
					<label
						className="mb-2 block font-medium text-sm"
						style={{ color: "var(--text-secondary)" }}
					>
						{t("staff.color")}
					</label>
					<div className="flex flex-wrap gap-2">
						{STAFF_PALETTE.map((c) => (
							<button
								className="relative h-7 w-7 rounded-full transition-transform hover:scale-110"
								key={c}
								onClick={() => setColor(c)}
								style={{ background: c }}
								title={c}
								type="button"
							>
								{color === c && (
									<span className="absolute inset-0 flex items-center justify-center font-bold text-white text-xs">
										✓
									</span>
								)}
							</button>
						))}
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
						{t("cell.cancel")}
					</button>
					<button
						className="rounded-lg px-4 py-2 font-medium text-sm text-white"
						disabled={!name.trim()}
						onClick={() => onSave(name.trim(), color)}
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
