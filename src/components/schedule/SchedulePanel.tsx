"use client";

import { useRef, useState } from "react";
import { useToast } from "~/components/Toast";
import { useLang } from "~/contexts/LangContext";
import { api } from "~/trpc/react";
import { formatDateRange, getMonday } from "~/utils/time";
import { EditCellModal } from "./EditCellModal";
import { ScheduleTable } from "./ScheduleTable";

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

export function SchedulePanel() {
	const { t } = useLang();
	const { showToast } = useToast();
	const [weekOffset, setWeekOffset] = useState(0);
	const [selectedCell, setSelectedCell] = useState<CellInfo | null>(null);
	const [isExporting, setIsExporting] = useState(false);
	const exportRef = useRef<HTMLDivElement>(null);

	const weekStart = getMonday(weekOffset);

	const schoolsQuery = api.school.getAll.useQuery();
	const sessionsQuery = api.schedule.getWeek.useQuery({ weekStart });
	const globalQuery = api.timing.getGlobal.useQuery();
	const timingsQuery = api.timing.getSchoolTimings.useQuery();

	const schools = schoolsQuery.data ?? [];
	const sessions = sessionsQuery.data ?? [];
	const period1Start = globalQuery.data?.period1Start ?? "14:00";
	const schoolTimings = timingsQuery.data ?? [];

	const weekLabel =
		weekOffset === 0
			? t("schedule.currentWeek")
			: weekOffset > 0
				? t("schedule.weekPlus", { n: String(weekOffset) })
				: t("schedule.weekMinus", { n: String(Math.abs(weekOffset)) });

	const dateRange = formatDateRange(weekStart);

	/** Resolve CSS variables thành giá trị thực để html2canvas render đúng */
	const resolveOnClone = (clonedDoc: Document) => {
		const computed = getComputedStyle(document.documentElement);
		const vars = [
			"--bg",
			"--surface",
			"--surface-alt",
			"--border",
			"--text",
			"--text-secondary",
			"--text-muted",
			"--primary",
			"--primary-light",
			"--primary-dark",
			"--danger",
		];
		const root = clonedDoc.documentElement;
		for (const v of vars) {
			root.style.setProperty(v, computed.getPropertyValue(v).trim());
		}
		// Xoá overflow:hidden trên tất cả elements để tránh clip chữ
		const all = clonedDoc.querySelectorAll<HTMLElement>("*");
		for (const el of all) {
			const ov = getComputedStyle(el).overflow;
			if (ov === "hidden") el.style.overflow = "visible";
			el.style.textOverflow = "clip";
		}
	};

	const captureCanvas = async () => {
		const { default: html2canvas } = await import("html2canvas");
		// biome-ignore lint/style/noNonNullAssertion: checked by callers
		return html2canvas(exportRef.current!, {
			scale: 2,
			useCORS: true,
			backgroundColor: "#ffffff",
			logging: false,
			onclone: (_clonedDoc, el) => {
				// el là phần tử gốc được clone
				resolveOnClone(el.ownerDocument);
				// Đảm bảo container không clip
				el.style.overflow = "visible";
				el.style.height = "auto";
			},
		});
	};

	const handleExportPNG = async () => {
		if (!exportRef.current) return;
		setIsExporting(true);
		try {
			const canvas = await captureCanvas();
			const link = document.createElement("a");
			link.download = `lich-day-${weekStart}.png`;
			link.href = canvas.toDataURL("image/png");
			link.click();
			showToast("✅ Đã xuất ảnh PNG", "success");
		} catch {
			showToast("Lỗi khi xuất ảnh", "error");
		} finally {
			setIsExporting(false);
		}
	};

	const handleExportPDF = async () => {
		if (!exportRef.current) return;
		setIsExporting(true);
		try {
			const canvas = await captureCanvas();
			const { jsPDF } = await import("jspdf");
			const imgData = canvas.toDataURL("image/png");
			const pdf = new jsPDF({
				orientation: "landscape",
				unit: "px",
				format: "a4",
			});
			const pdfWidth = pdf.internal.pageSize.getWidth();
			const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
			pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
			pdf.save(`lich-day-${weekStart}.pdf`);
			showToast("✅ Đã xuất PDF", "success");
		} catch {
			showToast("Lỗi khi xuất PDF", "error");
		} finally {
			setIsExporting(false);
		}
	};

	return (
		<div className="p-4">
			{/* Week navigation */}
			<div className="mb-4 flex flex-wrap items-center gap-3">
				<button
					className="rounded-lg border px-3 py-1.5 font-medium text-sm"
					onClick={() => setWeekOffset((w) => w - 1)}
					style={{ borderColor: "var(--border)", color: "var(--text)" }}
					type="button"
				>
					◀
				</button>
				<div className="flex flex-col">
					<span
						className="font-semibold text-sm"
						style={{ color: "var(--text)" }}
					>
						{weekLabel}
					</span>
					<span className="text-xs" style={{ color: "var(--text-muted)" }}>
						{dateRange}
					</span>
				</div>
				<button
					className="rounded-lg border px-3 py-1.5 font-medium text-sm"
					onClick={() => setWeekOffset((w) => w + 1)}
					style={{ borderColor: "var(--border)", color: "var(--text)" }}
					type="button"
				>
					▶
				</button>
				{weekOffset !== 0 && (
					<button
						className="rounded-lg px-3 py-1.5 font-medium text-sm text-white"
						onClick={() => setWeekOffset(0)}
						style={{ background: "var(--primary)" }}
						type="button"
					>
						{t("schedule.today")}
					</button>
				)}

				{/* Export buttons — only show when there are schools */}
				{schools.length > 0 && (
					<div className="ml-auto flex gap-2">
						<button
							className="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-medium text-sm disabled:opacity-50"
							disabled={isExporting}
							onClick={handleExportPNG}
							style={{ borderColor: "var(--border)", color: "var(--text)" }}
							type="button"
						>
							📷 PNG
						</button>
						<button
							className="flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-medium text-sm disabled:opacity-50"
							disabled={isExporting}
							onClick={handleExportPDF}
							style={{ borderColor: "var(--border)", color: "var(--text)" }}
							type="button"
						>
							📄 PDF
						</button>
					</div>
				)}
			</div>

			{/* Empty state */}
			{schools.length === 0 ? (
				<div
					className="flex flex-col items-center gap-3 rounded-xl py-16"
					style={{
						background: "var(--surface)",
						border: "1px solid var(--border)",
					}}
				>
					<span className="text-5xl">🏫</span>
					<p className="font-semibold" style={{ color: "var(--text)" }}>
						{t("schedule.emptySchool")}
					</p>
					<p className="text-sm" style={{ color: "var(--text-muted)" }}>
						{t("schedule.emptySchoolSub")}
					</p>
				</div>
			) : (
				/* Exportable area */
				<div ref={exportRef} style={{ background: "#ffffff", padding: "12px" }}>
					{/* Header for export */}
					<div className="mb-3 flex items-center justify-between">
						<h2 className="font-bold text-base" style={{ color: "#1e293b" }}>
							📅 Lịch dạy học — {weekLabel}
						</h2>
						<span className="text-sm" style={{ color: "#64748b" }}>
							{dateRange}
						</span>
					</div>
					<ScheduleTable
						onCellClick={setSelectedCell}
						period1Start={period1Start}
						schools={schools}
						schoolTimings={schoolTimings.map((st) => ({
							schoolId: st.schoolId,
							period2Start: st.period2Start,
							period3Start: st.period3Start,
						}))}
						sessions={sessions}
						weekStart={weekStart}
					/>
				</div>
			)}

			<EditCellModal
				cell={selectedCell}
				onClose={() => setSelectedCell(null)}
				onSaved={() => setSelectedCell(null)}
			/>
		</div>
	);
}
