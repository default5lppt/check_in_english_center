export const PERIOD_DURATION = 35;
export const BREAK_DURATION = 20;

export const timeToMins = (t: string): number => {
	const parts = t.split(":");
	const h = parseInt(parts[0] ?? "0", 10);
	const m = parseInt(parts[1] ?? "0", 10);
	return h * 60 + m;
};

export const minsToTime = (m: number): string => {
	const h = Math.floor(m / 60);
	const min = m % 60;
	return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
};

export const getEndTime = (start: string): string =>
	minsToTime(timeToMins(start) + PERIOD_DURATION);

export const autoCalcP3 = (p2Start: string): string =>
	minsToTime(timeToMins(p2Start) + PERIOD_DURATION + BREAK_DURATION);

export const getMonday = (offset = 0): string => {
	const now = new Date();
	const dayOfWeek = now.getDay(); // 0=Sun
	const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
	const monday = new Date(now);
	monday.setDate(now.getDate() + daysToMonday + offset * 7);
	const y = monday.getFullYear();
	const mo = String(monday.getMonth() + 1).padStart(2, "0");
	const d = String(monday.getDate()).padStart(2, "0");
	return `${y}-${mo}-${d}`;
};

export const formatDateRange = (weekStart: string): string => {
	const [y, mo, d] = weekStart.split("-").map(Number);
	const monday = new Date(y ?? 2025, (mo ?? 1) - 1, d ?? 1);
	const friday = new Date(monday);
	friday.setDate(monday.getDate() + 4);
	const fmt = (dt: Date) => `${dt.getDate()}/${dt.getMonth() + 1}`;
	return `${fmt(monday)} – ${fmt(friday)}/${friday.getFullYear()}`;
};
