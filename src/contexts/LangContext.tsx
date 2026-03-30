"use client";

import { createContext, useContext, useEffect, useState } from "react";
import enMessages from "~/locales/en.json";
import viMessages from "~/locales/vi.json";

type Lang = "vi" | "en";

const messages: Record<Lang, Record<string, unknown>> = {
	vi: viMessages as Record<string, unknown>,
	en: enMessages as Record<string, unknown>,
};

interface LangContextValue {
	lang: Lang;
	setLang: (lang: Lang) => void;
	t: (key: string, vars?: Record<string, string>) => string;
	tArr: (key: string) => string[];
}

const LangContext = createContext<LangContextValue>({
	lang: "vi",
	setLang: () => undefined,
	t: (key) => key,
	tArr: () => [],
});

export function LangProvider({ children }: { children: React.ReactNode }) {
	const [lang, setLangState] = useState<Lang>("vi");

	useEffect(() => {
		const stored = localStorage.getItem("lang");
		if (stored === "vi" || stored === "en") {
			setLangState(stored);
		}
	}, []);

	const setLang = (l: Lang) => {
		setLangState(l);
		localStorage.setItem("lang", l);
	};

	const t = (key: string, vars?: Record<string, string>): string => {
		const parts = key.split(".");
		let val: unknown = messages[lang];
		for (const part of parts) {
			if (typeof val === "object" && val !== null) {
				val = (val as Record<string, unknown>)[part];
			} else {
				val = undefined;
				break;
			}
		}
		if (typeof val !== "string") return key;
		if (!vars) return val;
		return val.replace(/\{(\w+)\}/g, (_, k: string) => vars[k] ?? `{${k}}`);
	};

	const tArr = (key: string): string[] => {
		const parts = key.split(".");
		let val: unknown = messages[lang];
		for (const part of parts) {
			if (typeof val === "object" && val !== null) {
				val = (val as Record<string, unknown>)[part];
			} else {
				return [];
			}
		}
		return Array.isArray(val) ? (val as string[]) : [];
	};

	return (
		<LangContext.Provider value={{ lang, setLang, t, tArr }}>
			{children}
		</LangContext.Provider>
	);
}

export const useLang = () => useContext(LangContext);
