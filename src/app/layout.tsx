import "~/styles/globals.css";

import type { Metadata } from "next";
import { Be_Vietnam_Pro, Quicksand } from "next/font/google";
import { LangProvider } from "~/contexts/LangContext";
import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
	title: "Lịch Dạy Học",
	description: "Quản lý lịch dạy học",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const beVietnamPro = Be_Vietnam_Pro({
	subsets: ["latin", "vietnamese"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-be-vietnam-pro",
});

const quicksand = Quicksand({
	subsets: ["latin"],
	variable: "--font-quicksand",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			className={`${beVietnamPro.variable} ${quicksand.variable}`}
			lang="vi"
		>
			<body>
				<TRPCReactProvider>
					<LangProvider>{children}</LangProvider>
				</TRPCReactProvider>
			</body>
		</html>
	);
}
