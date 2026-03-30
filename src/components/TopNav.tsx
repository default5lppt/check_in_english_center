"use client";

import { useLang } from "~/contexts/LangContext";

interface TopNavProps {
	activeTab: number;
	onTabChange: (tab: number) => void;
}

const TAB_KEYS = [
	{ icon: "📅", key: "nav.schedule" },
	{ icon: "👩‍🏫", key: "nav.teachers" },
	{ icon: "🧑‍💼", key: "nav.tas" },
	{ icon: "⚙️", key: "nav.settings" },
	{ icon: "🏫", key: "nav.schools" },
	{ icon: "🎒", key: "nav.classes" },
	{ icon: "🚪", key: "nav.rooms" },
] as const;

export function TopNav({ activeTab, onTabChange }: TopNavProps) {
	const { lang, setLang, t } = useLang();

	return (
		<nav
			className="sticky top-0 z-40 flex items-center gap-2 px-4 py-2 shadow-lg"
			style={{
				background: "linear-gradient(135deg, #1e3a5f 0%, #2d5a8e 100%)",
			}}
		>
			{/* Brand */}
			<div className="mr-4 flex items-center gap-2 text-white">
				<span className="text-xl">📚</span>
				<span className="hidden font-bold text-lg sm:block">
					{t("nav.brand")}
				</span>
			</div>

			{/* Tabs */}
			<div className="flex flex-1 flex-wrap gap-1">
				{TAB_KEYS.map((tab, idx) => (
					<button
						className={`rounded-md px-3 py-1.5 font-medium text-sm transition-colors ${
							activeTab === idx
								? "bg-white text-[#1e3a5f]"
								: "text-white/80 hover:bg-white/20 hover:text-white"
						}`}
						key={tab.key}
						onClick={() => onTabChange(idx)}
						type="button"
					>
						<span className="mr-1">{tab.icon}</span>
						<span className="hidden sm:inline">{t(tab.key)}</span>
					</button>
				))}
			</div>

			{/* Right actions */}
			<div className="flex items-center gap-2">
				<button
					className="rounded-md border border-white/40 px-3 py-1.5 text-sm text-white/90 hover:bg-white/20"
					onClick={() => setLang(lang === "vi" ? "en" : "vi")}
					type="button"
				>
					🌐 {lang === "vi" ? "EN" : "VI"}
				</button>
			</div>
		</nav>
	);
}
