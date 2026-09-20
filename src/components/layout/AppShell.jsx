import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MobileNav from "./MobileNav";

export default function AppShell() {
    return (
        <div className="min-h-screen bg-campus-background text-campus-text">

        <div className="flex min-h-screen">

            <aside className="hidden w-[220px] shrink-0 border-r border-campus-border/30 bg-campus-surface lg:block">
            <Sidebar />
            </aside>

            <div className="flex min-w-0 flex-1 flex-col">

            <Topbar />

            <main className="flex-1 overflow-y-auto p-4 pb-24 md:p-6 lg:p-8 lg:pb-8">
                <div className="mx-auto w-full max-w-[1440px]">
                <Outlet />
                </div>
            </main>

            </div>
        </div>

        <MobileNav />

        </div>
    );
}