"use client";

import { useState } from "react";
import { ClassesPanel } from "~/components/classes/ClassesPanel";
import { RoomsPanel } from "~/components/rooms/RoomsPanel";
import { SchedulePanel } from "~/components/schedule/SchedulePanel";
import { SchoolsPanel } from "~/components/schools/SchoolsPanel";
import { TimeSettingsPanel } from "~/components/settings/TimeSettingsPanel";
import { StaffPanel } from "~/components/staff/StaffPanel";
import { ToastProvider } from "~/components/Toast";
import { TopNav } from "~/components/TopNav";

export default function Home() {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<ToastProvider>
			<TopNav activeTab={activeTab} onTabChange={setActiveTab} />
			<main className="min-h-screen" style={{ background: "var(--bg)" }}>
				{activeTab === 0 && <SchedulePanel />}
				{activeTab === 1 && <StaffPanel mode="teacher" />}
				{activeTab === 2 && <StaffPanel mode="ta" />}
				{activeTab === 3 && <TimeSettingsPanel />}
				{activeTab === 4 && <SchoolsPanel />}
				{activeTab === 5 && <ClassesPanel />}
				{activeTab === 6 && <RoomsPanel />}
			</main>
		</ToastProvider>
	);
}
