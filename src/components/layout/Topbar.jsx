import {
    Bell,
    ChevronDown,
    Search,
} from "lucide-react";

export default function Topbar() {
    return (
        <header className="sticky top-0 z-30 border-b border-campus-border/30 bg-campus-background/95 backdrop-blur">

        <div className="flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">

            <div className="hidden items-center gap-2 md:flex">
            <span className="text-sm text-campus-muted">
                Institution
            </span>

            <button className="flex items-center gap-2 rounded-md border border-campus-border/40 bg-campus-surface px-3 py-2 text-sm">
                ABC University
                <ChevronDown size={15} />
            </button>
            </div>

            <div className="relative hidden w-full max-w-sm lg:block">
            <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-campus-muted"
            />

            <input
                type="text"
                placeholder="Search..."
                className="h-9 w-full rounded-md border border-campus-border/40 bg-campus-surface pl-9 pr-3 text-sm outline-none placeholder:text-campus-muted focus:border-campus-accent"
            />
            </div>

            <div className="ml-auto flex items-center gap-4">

            <button className="relative flex h-9 w-9 items-center justify-center rounded-md border border-campus-border/40 bg-campus-surface">
                <Bell size={17} />

                <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-campus-accent" />
            </button>

            <button className="flex items-center gap-2">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-campus-accent/20 text-sm font-semibold text-campus-accent">
                DA
                </div>

                <div className="hidden text-left sm:block">
                <p className="text-sm font-medium">
                    Dr. Alistair
                </p>

                <p className="text-xs text-campus-muted">
                    Dean
                </p>
                </div>

            </button>

            </div>

        </div>

        </header>
    );
}