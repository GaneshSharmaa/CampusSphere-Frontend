import {
    LayoutDashboard,
    GraduationCap,
    UsersRound,
    ChartColumn,
    CalendarDays,
    Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const navigation = [
    {
        label: "Overview",
        path: "/dashboard",
        icon: LayoutDashboard,
    },
    {
        label: "Academics",
        path: "/academics",
        icon: GraduationCap,
    },
    {
        label: "Student Roster",
        path: "/students",
        icon: UsersRound,
    },
    {
        label: "Financials",
        path: "/financials",
        icon: ChartColumn,
    },
    {
        label: "Schedules",
        path: "/schedule",
        icon: CalendarDays,
    },
    {
        label: "Settings",
        path: "/settings",
        icon: Settings,
    },
];

export default function Sidebar() {
    return (
        <div className="flex h-screen flex-col">

        <div className="flex h-20 items-center border-b border-campus-border/30 px-6">
            <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-campus-accent text-black">
                <GraduationCap size={20} />
            </div>

            <span className="font-semibold tracking-tight">
                CampusSphere
            </span>
            </div>
        </div>

        <nav className="flex-1 space-y-2 p-4">

            {navigation.map((item) => {
            const Icon = item.icon;

            return (
                <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                    [
                    "flex h-11 items-center gap-3 rounded-lg px-3",
                    "text-sm transition-colors",
                    isActive
                        ? "bg-campus-accent/10 text-campus-accent"
                        : "text-campus-muted hover:bg-white/[0.03] hover:text-campus-text",
                    ].join(" ")
                }
                >
                <Icon size={18} />
                <span>{item.label}</span>
                </NavLink>
            );
            })}

        </nav>

        <div className="border-t border-campus-border/30 p-4">
            <div className="rounded-lg border border-campus-border/30 p-3">
            <p className="text-sm font-medium text-campus-text">
                ABC University
            </p>

            <p className="mt-1 text-xs text-campus-muted">
                Administrator
            </p>
            </div>
        </div>

        </div>
    );
}