import {
    Home,
    GraduationCap,
    CalendarDays,
    CreditCard,
    Menu,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const items = [
    {
        label: "Home",
        path: "/dashboard",
        icon: Home,
    },
    {
        label: "Academics",
        path: "/academics",
        icon: GraduationCap,
    },
    {
        label: "Schedule",
        path: "/schedule",
        icon: CalendarDays,
    },
    {
        label: "Fees",
        path: "/financials",
        icon: CreditCard,
    },
    {
        label: "More",
        path: "/settings",
        icon: Menu,
    },
];

export default function MobileNav() {
    return (
        <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-campus-border/30 bg-campus-surface lg:hidden">

        <div className="grid grid-cols-5">

            {items.map((item) => {
            const Icon = item.icon;

            return (
                <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                    [
                    "flex flex-col items-center justify-center gap-1 py-3 text-[11px]",
                    isActive
                        ? "text-campus-accent"
                        : "text-campus-muted",
                    ].join(" ")
                }
                >
                <Icon size={19} />
                <span>{item.label}</span>
                </NavLink>
            );
            })}

        </div>

        </nav>
    );
}
