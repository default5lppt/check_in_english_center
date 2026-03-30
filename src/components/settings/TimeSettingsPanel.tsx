"use client";

import { useEffect, useState } from "react";
import { useToast } from "~/components/Toast";
import { useLang } from "~/contexts/LangContext";
import { api } from "~/trpc/react";
import { autoCalcP3, getEndTime, timeToMins } from "~/utils/time";

const isValidTime = (val: string) => /^([01]\d|2[0-3]):[0-5]\d$/.test(val);

export function TimeSettingsPanel() {
	const { t } = useLang();
	const { showToast } = useToast();

	const utils = api.useUtils();
	const globalQuery = api.timing.getGlobal.useQuery();
	const schoolsQuery = api.school.getAll.useQuery();
	const timingsQuery = api.timing.getSchoolTimings.useQuery();

	const [period1Start, setPeriod1Start] = useState("14:00");
	const [period2Map, setPeriod2Map] = useState<Record<string, string>>({});
	const [period3Map, setPeriod3Map] = useState<Record<string, string>>({});
	const [p3Errors, setP3Errors] = useState<Record<string, string>>({});
	const [isSaving, setIsSaving] = useState(false);
	const [savedState, setSavedState] = useState<{
		period1Start: string;
		period2Map: Record<string, string>;
		period3Map: Record<string, string>;
	} | null>(null);

	useEffect(() => {
		if (globalQuery.data?.period1Start) {
			setPeriod1Start(globalQuery.data.period1Start);
		}
	}, [globalQuery.data]);

	useEffect(() => {
		if (timingsQuery.data) {
			const p2: Record<string, string> = {};
			const p3: Record<string, string> = {};
			for (const timing of timingsQuery.data) {
				p2[timing.schoolId] = timing.period2Start;
				p3[timing.schoolId] = timing.period3Start;
			}
			setPeriod2Map(p2);
			setPeriod3Map(p3);
			// Track server state as "saved" baseline
			setSavedState({
				period1Start: globalQuery.data?.period1Start ?? "14:00",
				period2Map: p2,
				period3Map: p3,
			});
		}
	}, [timingsQuery.data, globalQuery.data]);

	// Compute isDirty
	const isDirty =
		savedState !== null &&
		(period1Start !== savedState.period1Start ||
			Object.keys({ ...savedState.period2Map, ...period2Map }).some(
				(id) => (period2Map[id] ?? "") !== (savedState.period2Map[id] ?? ""),
			) ||
			Object.keys({ ...savedState.period3Map, ...period3Map }).some(
				(id) => (period3Map[id] ?? "") !== (savedState.period3Map[id] ?? ""),
			));

	const updateGlobalMutation = api.timing.updateGlobal.useMutation();
	const upsertTimingMutation = api.timing.upsertSchoolTiming.useMutation();

	/** Validate tiết 3 cho một trường, trả về error string hoặc null */
	const getP3Error = (
		schoolId: string,
		p3: string,
		p2Override?: string,
	): string | null => {
		const p2 = p2Override ?? period2Map[schoolId] ?? "14:35";
		if (!isValidTime(p3)) return "Định dạng phải là HH:mm (VD: 15:30)";
		if (timeToMins(p3) <= timeToMins(getEndTime(p2))) {
			return `Phải sau khi tiết 2 kết thúc (sau ${getEndTime(p2)})`;
		}
		return null;
	};

	const handleSaveAll = async () => {
		const schools = schoolsQuery.data ?? [];

		// Validate tất cả
		if (!isValidTime(period1Start)) {
			showToast("Tiết 1: Định dạng phải là HH:mm", "error");
			return;
		}
		const newErrors: Record<string, string> = {};
		for (const school of schools) {
			const p2 = period2Map[school.id] ?? "14:35";
			const p3 = period3Map[school.id] ?? "15:30";
			if (!isValidTime(p2)) {
				newErrors[school.id] = `${school.name} Tiết 2: Định dạng phải là HH:mm`;
			}
			const p3Err = getP3Error(school.id, p3, p2);
			if (p3Err) newErrors[school.id] = `${school.name} Tiết 3: ${p3Err}`;
		}
		if (Object.keys(newErrors).length > 0) {
			setP3Errors(newErrors);
			showToast("Có lỗi trong cài đặt giờ, vui lòng kiểm tra lại", "error");
			return;
		}

		setIsSaving(true);
		try {
			await updateGlobalMutation.mutateAsync({ period1Start });
			for (const school of schools) {
				const p2 = period2Map[school.id] ?? "14:35";
				const p3 = period3Map[school.id] ?? autoCalcP3(p2);
				await upsertTimingMutation.mutateAsync({
					schoolId: school.id,
					period2Start: p2,
					period3Start: p3,
				});
			}
			await utils.timing.invalidate();
			setP3Errors({});
			setSavedState({ period1Start, period2Map, period3Map });
			showToast("✅ Đã lưu cài đặt giờ", "success");
		} catch {
			showToast("Lỗi khi lưu, vui lòng thử lại", "error");
		} finally {
			setIsSaving(false);
		}
	};

	const handleAutoCalcP3 = (schoolId: string) => {
		const p2 = period2Map[schoolId] ?? "14:35";
		const newP3 = autoCalcP3(p2);
		setPeriod3Map((prev) => ({ ...prev, [schoolId]: newP3 }));
		setP3Errors((prev) => {
			const next = { ...prev };
			delete next[schoolId];
			return next;
		});
		showToast(t("toast.p3Recalc"), "success");
	};

	const schools = schoolsQuery.data ?? [];

	return (
		<div className="mx-auto max-w-2xl p-4">
			<div
				className="rounded-xl p-6 shadow-sm"
				style={{
					background: "var(--surface)",
					border: "1px solid var(--border)",
				}}
			>
				<h2 className="mb-1 font-bold text-xl" style={{ color: "var(--text)" }}>
					⏰ {t("settings.title")}
				</h2>
				<p className="mb-6 text-sm" style={{ color: "var(--text-secondary)" }}>
					{t("settings.subtitle")}
				</p>

				{/* Tiết 1 */}
				<div className="mb-6">
					<h3
						className="mb-3 font-semibold text-sm"
						style={{ color: "var(--text-secondary)" }}
					>
						{t("settings.period1Label")}
					</h3>
					<div className="flex items-center gap-3">
						<input
							className="w-28 rounded-lg border px-3 py-2 text-sm"
							onChange={(e) => setPeriod1Start(e.target.value)}
							placeholder="14:00"
							style={{
								border: `1px solid ${!isValidTime(period1Start) && period1Start ? "var(--danger)" : "var(--border)"}`,
							}}
							type="text"
							value={period1Start}
						/>
						<span className="text-sm" style={{ color: "var(--text-muted)" }}>
							→ {isValidTime(period1Start) ? getEndTime(period1Start) : "??:??"}
						</span>
					</div>
				</div>

				{/* Tiết 2 */}
				<div className="mb-6">
					<h3
						className="mb-3 font-semibold text-sm"
						style={{ color: "var(--text-secondary)" }}
					>
						{t("settings.period2Label")}
					</h3>
					<div className="flex flex-col gap-2">
						{schools.map((school) => {
							const p2 = period2Map[school.id] ?? "14:35";
							const invalid = p2 !== "" && !isValidTime(p2);
							return (
								<div className="flex items-center gap-3" key={school.id}>
									<span
										className="w-10 rounded px-2 py-0.5 text-center font-semibold text-sm"
										style={{ background: school.bg, color: school.color }}
									>
										{school.name}
									</span>
									<input
										className="w-28 rounded-lg border px-3 py-2 text-sm"
										onChange={(e) =>
											setPeriod2Map((prev) => ({
												...prev,
												[school.id]: e.target.value,
											}))
										}
										placeholder="14:35"
										style={{
											border: `1px solid ${invalid ? "var(--danger)" : "var(--border)"}`,
										}}
										type="text"
										value={p2}
									/>
									<span
										className="text-sm"
										style={{ color: "var(--text-muted)" }}
									>
										→ {isValidTime(p2) ? getEndTime(p2) : "??:??"}
									</span>
								</div>
							);
						})}
					</div>
				</div>

				{/* Tiết 3 */}
				<div className="mb-8">
					<h3
						className="mb-3 font-semibold text-sm"
						style={{ color: "var(--text-secondary)" }}
					>
						{t("settings.period3Label")}
					</h3>
					<div className="flex flex-col gap-3">
						{schools.map((school) => {
							const p2 = period2Map[school.id] ?? "14:35";
							const p3 = period3Map[school.id] ?? "15:30";
							const error = p3Errors[school.id];
							const hasError = Boolean(error);
							return (
								<div key={school.id}>
									<div className="flex items-center gap-3">
										<span
											className="w-10 rounded px-2 py-0.5 text-center font-semibold text-sm"
											style={{ background: school.bg, color: school.color }}
										>
											{school.name}
										</span>
										<input
											className="w-28 rounded-lg border px-3 py-2 text-sm"
											onChange={(e) => {
												const val = e.target.value;
												setPeriod3Map((prev) => ({
													...prev,
													[school.id]: val,
												}));
												if (p3Errors[school.id]) {
													setP3Errors((prev) => {
														const next = { ...prev };
														delete next[school.id];
														return next;
													});
												}
											}}
											placeholder="15:30"
											style={{
												border: `1px solid ${hasError ? "var(--danger)" : "var(--border)"}`,
											}}
											type="text"
											value={p3}
										/>
										<span
											className="text-sm"
											style={{ color: "var(--text-muted)" }}
										>
											→{" "}
											{isValidTime(p3) && !hasError ? getEndTime(p3) : "??:??"}
										</span>
										<button
											className="rounded px-2 py-1 font-medium text-white text-xs"
											onClick={() => handleAutoCalcP3(school.id)}
											style={{ background: "var(--primary)" }}
											type="button"
										>
											{t("settings.autoCalc")}
										</button>
									</div>
									{hasError && (
										<p
											className="mt-1 ml-14 text-xs"
											style={{ color: "var(--danger)" }}
										>
											⚠ {error}
										</p>
									)}
									{/* Live preview of p3 error without saving */}
									{!hasError &&
										isValidTime(p2) &&
										isValidTime(p3) &&
										getP3Error(school.id, p3, p2) && (
											<p
												className="mt-1 ml-14 text-xs"
												style={{ color: "var(--danger)" }}
											>
												⚠ {getP3Error(school.id, p3, p2)}
											</p>
										)}
								</div>
							);
						})}
					</div>
				</div>

				{/* Unsaved changes warning */}
				{isDirty && (
					<div
						className="mb-4 flex items-center gap-2 rounded-lg px-4 py-2.5 font-medium text-sm"
						style={{
							background: "#fef9c3",
							border: "1px solid #fde047",
							color: "#854d0e",
						}}
					>
						⚠ Có thay đổi chưa được lưu — nhớ bấm &ldquo;Lưu cài đặt&rdquo;
					</div>
				)}

				{/* Save button */}
				<div
					className="flex justify-end border-t pt-4"
					style={{ borderColor: "var(--border)" }}
				>
					<button
						className="flex items-center gap-2 rounded-lg px-6 py-2 font-semibold text-sm text-white disabled:opacity-50"
						disabled={isSaving}
						onClick={handleSaveAll}
						style={{ background: "var(--primary)" }}
						type="button"
					>
						{isSaving ? "⏳ Đang lưu..." : "💾 Lưu cài đặt"}
					</button>
				</div>
			</div>
		</div>
	);
}
