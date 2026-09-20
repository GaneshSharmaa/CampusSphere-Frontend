import { Link } from "react-router-dom";

const assets = {
    GraduationCap: "/assets/graduation-hat.svg",
    arrowRight: "/assets/arrow-right.svg",
    controls: "/assets/controls.svg",
    layoutDashboard: "/assets/layout-dashboard.svg",
    GraduationCapSmall: "/assets/graduation-smallcap.svg",
    usersRound: "/assets/users.svg",
    chartColumn: "/assets/chart-column.svg",
    calendar: "/assets/calendar.svg",
    settings: "/assets/settings.svg",
    book: "/assets/book.svg",
    barChart: "/assets/bar-chart.svg",
    creditCard: "/assets/credit-card.svg",
    users: "/assets/users.svg",
    megaphone: "/assets/announcements.svg",
    check: "/assets/check-round.svg",
};

const navItems = [
    "Features",
    "How It Works",
    "For Students",
    "For Institutes",
];

const features = [
    {
        icon: assets.book,
        title: "Academics",
        description:
        "Manage your insitution's programs, semesters, subjects, & department",
    },
    {
        icon: assets.barChart,
        title: "Marks & Grades",
        description:
        "Track & organize grades of each student on the basis of semesters, programs, departments, etc.",
    },
    {
        icon: assets.creditCard,
        title: "Fees & Payments",
        description:
        "No need of separate solution, fees and salaries could be managed, on CampusSphere.",
    },
    {
        icon: assets.calendar,
        title: "Schedule",
        description:
        "Spend your energy no things that matter, instead of remembering the schedule.",
    },
    {
        icon: assets.users,
        title: "Faculty",
        description:
        "Detailed profiles, automated assignment management, and seamless internal communication channels.",
    },
    {
        icon: assets.megaphone,
        title: "Announcements",
        description:
        "Publish secure updates, push notifications, target notices, and broadcast warnings in real-time.",
    },
];

const steps = [
    {
        number: "01",
        title: "Register Your Institute",
        description:
        "Deploy your dedicated cloud environment, customize your subdomain, and add institutional brand presets.",
    },
    {
        number: "02",
        title: "Set Up Courses & Faculty",
        description:
        "Create multi-department layouts, link specialized courses, and invite teachers with granular access roles.",
    },
    {
        number: "03",
        title: "Invite Students & Go Live",
        description:
        "Batch import student rosters, activate single-sign-on (SSO), and launch your central digital hub.",
    },
];

const studentBenefits = [
    "Real-time attendance tracking and descriptive analysis",
    "View marks, track semester grade point averages (GPA)",
    "No hassle of remembering the schedule, everything is at one place.",
    // "Direct secure messaging channels to subject teachers",
];

const teacherBenefits = [
    "No need of separate solution for broadcasting marks to students.",
    "Managing the fee records of students got easy.",
    "Keep track of each semester, department, and program.",
    // "Simple, trackable digital assignment submission lockers",
];

const adminItems = [
    {
        title: "Syllabi & Degree Schema",
        value: "12 Departments",
        description:
        "Build standard, combined, and accelerated degree architectures.",
    },
    {
        title: "SSO & Identity Gates",
        value: "AD / SAML Ready",
        description:
        "Sync active directory registers instantly with CampusSphere keys.",
    },
    {
        title: "Dynamic Billing Schemes",
        value: "8 Templates Active",
        description:
        "Structure specialized scholarship discounts and instalment models.",
    },
    {
        title: "Comprehensive Logs",
        value: "Tamper Proof System",
        description:
        "Track record audits, system accesses, and configuration history.",
    },
];

function Logo({ footer = false }) {
    return (
        <div className="flex items-center gap-2.5">
        <div className="flex size-8 items-center justify-center rounded-lg bg-campus-accent">
            <img
            src={assets.GraduationCap}
            alt="CampusSphere Logo"
            className="size-8"
            />
        </div>

        <span className="font-unbounded text-base font-bold tracking-[-0.5px] text-campus-text">
            CampusSphere
        </span>
        </div>
    );
}

function SectionBadge({ children }) {
    return (
        <div className="inline-flex rounded-full border border-campus-accent bg-campus-accent/10 px-3 py-1">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[1px] text-campus-accent">
            {children}
        </span>
        </div>
    );
}

function ArrowIcon() {
    return (
        <img
        src={assets.arrowRight}
        alt=""
        className="size-3.5"
        />
    );
}

function Navbar() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-campus-border/20 bg-campus-background/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6 lg:px-20">
            <Logo />

            <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
                <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                className="text-sm font-medium text-campus-muted transition hover:text-campus-text"
                >
                {item}
                </a>
            ))}
            </nav>

            <div className="flex items-center gap-2 md:gap-4">
            <Link
                to="/login"
                className="rounded-lg px-4 py-2.5 text-sm font-semibold text-campus-text transition hover:bg-campus-surface"
            >
                Login
            </Link>

            <Link
                to="/register"
                className="flex items-center gap-2 rounded-lg bg-campus-accent px-4 py-2.5 text-sm font-semibold text-campus-background transition hover:brightness-110"
            >
                Register
                <ArrowIcon />
            </Link>
            </div>
        </div>
        </header>
    );
}

function Hero() {
    return (
        <section className="px-6 pb-20 pt-40 lg:px-20 lg:pt-[180px]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-12">
            <div className="flex w-full flex-col items-center gap-6 text-center">
            <SectionBadge>Next-Generation Educational SaaS</SectionBadge>

            <h1 className="max-w-[900px] font-unbounded text-4xl font-bold leading-[1.2] tracking-[-1px] text-campus-text sm:text-5xl">
                Manage Your Campus. All in One Place.
            </h1>

            <p className="max-w-[680px] text-lg leading-[1.6] text-campus-muted">
                CampusSphere brings students, academics, fees, schedules, and administrative workflows together in one centralized platform.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                to="/register"
                className="flex items-center justify-center gap-2 rounded-lg bg-campus-accent px-5 py-2.5 text-sm font-semibold text-campus-background transition hover:brightness-110"
                >
                Get Started
                <ArrowIcon />
                </Link>

                <a
                href="#contact"
                className="rounded-lg border border-campus-border/40 px-5 py-2.5 text-sm font-semibold text-campus-text transition hover:bg-campus-surface"
                >
                Request Demo
                </a>
            </div>
            </div>

            <DashboardPreview />
        </div>
        </section>
    );
}

function DashboardPreview() {
    const bars = [150, 160, 135, 190, 200, 120, 110, 100];

    return (
        <div className="w-full overflow-hidden rounded-xl border border-campus-border/40 bg-campus-surface shadow-2xl">
        {/* Browser header */}
        <div className="flex h-12 items-center justify-between border-b border-campus-border/20 px-6">
            <img
            src={assets.controls}
            alt=""
            className="h-3 w-[52px]"
            />

            <span className="hidden font-mono text-xs text-campus-muted sm:block">
            dashboard.campussphere.edu/admin
            </span>

            <div className="flex items-center gap-2">
            <div className="size-6 rounded-full bg-campus-accent/30" />
            <span className="hidden text-xs text-campus-text sm:block">
                Prof. Ganesh (CSE)
            </span>
            </div>
        </div>

        <div className="flex min-h-[480px]">
            {/* Sidebar */}
            <aside className="hidden w-[220px] shrink-0 flex-col gap-3 border-r border-campus-border/20 bg-campus-background p-5 md:flex">
            <MockupNav
                icon={assets.layoutDashboard}
                label="Overview"
                active
            />

            <MockupNav
                icon={assets.GraduationCapSmall}
                label="Academics"
            />

            <MockupNav
                icon={assets.usersRound}
                label="Student Roster"
            />

            <MockupNav
                icon={assets.chartColumn}
                label="Financials"
            />

            <MockupNav
                icon={assets.calendar}
                label="Schedules"
            />

            <MockupNav
                icon={assets.settings}
                label="Settings"
            />
            </aside>

            {/* Work area */}
            <div className="min-w-0 flex-1 p-5 lg:p-8">
            <div className="grid gap-4 lg:grid-cols-3">
                <PreviewStat
                label="Average GPA (CSE)"
                value="7.8 GPA"
                note="out of 10"
                />

                <PreviewStat
                label="Average Class Attendance"
                value="73.28%"
                note="Optimal engagement"
                />

                <PreviewStat
                label="Pending Fee Students"
                value="52"
                note="out of 400 students"
                />
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
                <EnrollmentChart bars={bars} />
                <ScheduleFeed />
            </div>
            </div>
        </div>
        </div>
    );
}

function MockupNav({ icon, label, active = false }) {
    return (
        <div
        className={[
            "flex items-center gap-3 rounded-md p-2",
            active ? "bg-campus-accent/10" : "",
        ].join(" ")}
        >
        <img
            src={icon}
            alt=""
            className="size-4"
        />

        <span
            className={[
            "text-[13px] font-medium",
            active ? "text-campus-accent" : "text-campus-muted",
            ].join(" ")}
        >
            {label}
        </span>
        </div>
    );
}

function PreviewStat({ label, value, note }) {
    return (
        <div className="rounded-lg border border-campus-border/20 bg-campus-background p-5">
        <p className="text-xs text-campus-muted">{label}</p>

        <p className="mt-1.5 font-unbounded text-xl font-bold text-campus-text">
            {value}
        </p>

        <p className="mt-1.5 text-[11px] text-campus-accent">
            {note}
        </p>
        </div>
    );
}

function EnrollmentChart({ bars }) {
    return (
        <div className="rounded-lg border border-campus-border/20 bg-campus-background p-6">
        <h3 className="text-sm font-semibold text-campus-text">
            Attendance (Semester-Wise)
        </h3>

        <div className="mt-6 flex h-[220px] items-end gap-3">
            {bars.map((height, index) => (
            <div
                key={index}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
            >
                <div
                className="w-full max-w-10 rounded-t bg-campus-accent"
                style={{
                    height: `${Math.max(height * 0.8, 30)}px`,
                }}
                />

                <span className="font-mono text-[10px] text-campus-muted">
                Sem {1 + index}
                </span>
            </div>
            ))}
        </div>
        </div>
    );
}

function ScheduleFeed() {
    const schedules = [
        ["Today", "10:00", "Database Management", "Room 204"],
        ["Today", "11:00", "PostgreSQL", "Room 102"],
        ["Today", "01:00", "Redis", "Room 201"],
    ];

    return (
        <div className="rounded-lg border border-campus-border/20 bg-campus-background p-6">
        <h3 className="text-sm font-semibold text-campus-text">
            Upcoming Schedule
        </h3>

        <div className="mt-5 space-y-4">
            {schedules.map(([date, time, subject, classroom]) => (
            <div
                key={subject}
                className="border-b border-campus-border/10 pb-1 last:border-0 last:pb-0"
            >
                <p className="text-[11px] font-medium text-campus-accent">
                {date} • {time}
                </p>

                <p className="mt-1 text-xs leading-5 text-campus-text">
                {subject}
                </p>

                <p className="mt-1 font-mono text-[10px] text-campus-muted">
                {classroom}
                </p>
            </div>
            ))}
        </div>
        </div>
    );
}

function TrustedBy() {
    const institutions = [
        "MIT",
        "Stanford",
        "IIT Delhi",
        "Oxford",
        "NUS",
        "IIT Bombay",
    ];

    return (
        <section className="border-y border-campus-border/10 px-6 py-14 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
            <p className="text-center text-sm text-campus-muted">
            Trusted by leading global universities and academies
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {institutions.map((institution) => (
                <div
                key={institution}
                className="flex min-h-16 items-center justify-center rounded-lg border border-campus-border/10 px-3 text-center"
                >
                <span className="font-unbounded text-[11px] font-bold text-campus-muted">
                    {institution}
                </span>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}

function Features() {
    return (
        <section
        id="features"
        className="px-6 py-24 lg:px-20"
        >
        <div className="mx-auto max-w-[1280px]">
            <SectionHeader
            badge="BUILT AROUND YOUR CAMPUS"
            title="Everything Your Campus Needs, In One Place"
            />

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
                <div
                key={feature.title}
                className="rounded-xl border border-campus-border/20 bg-campus-surface p-6 transition hover:border-campus-accent/40"
                >
                <div className="flex size-10 items-center justify-center rounded-lg bg-campus-accent/10">
                    <img
                    src={feature.icon}
                    alt=""
                    className="size-5"
                    />
                </div>

                <h3 className="mt-5 font-unbounded text-sm font-bold text-campus-text">
                    {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-campus-muted">
                    {feature.description}
                </p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}

function SectionHeader({ badge, title }) {
    return (
        <div className="mx-auto max-w-2xl text-center">
        <SectionBadge>{badge}</SectionBadge>

        <h2 className="mt-6 font-unbounded text-2xl font-bold leading-[1.3] tracking-[-0.5px] text-campus-text sm:text-3xl">
            {title}
        </h2>
        </div>
    );
}

function HowItWorks() {
    return (
        <section
        id="how-it-works"
        className="border-y border-campus-border/10 bg-campus-surface/30 px-6 py-24 lg:px-20"
        >
        <div className="mx-auto max-w-[1280px]">
            <SectionHeader
            badge="Simple Implementation"
            title="Get Your Campus Online in Hours"
            />

            <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {steps.map((step, index) => (
                <div
                key={step.number}
                className="relative text-center"
                >
                <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-campus-accent bg-campus-accent/10 font-mono text-sm font-bold text-campus-accent">
                    {step.number}
                </div>

                <h3 className="mt-6 font-unbounded text-sm font-bold text-campus-text">
                    {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-campus-muted">
                    {step.description}
                </p>

                {index < steps.length - 1 && (
                    <div className="absolute left-[calc(50%+60px)] right-[calc(-50%+60px)] top-6 hidden border-t border-dashed border-campus-border/30 lg:block" />
                )}
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}

function AudienceSection({
    id,
    badge,
    title,
    benefits,
    reverse = false,
    children,
}) {
    return (
        <section
        id={id}
        className="px-6 py-24 lg:px-20"
        >
        <div
            className={[
            "mx-auto flex max-w-[1280px] flex-col items-center gap-14 lg:flex-row",
            reverse ? "lg:flex-row-reverse" : "",
            ].join(" ")}
        >
            <div className="flex-1">
            <SectionBadge>{badge}</SectionBadge>

            <h2 className="mt-6 max-w-xl font-unbounded text-2xl font-bold leading-[1.3] text-campus-text sm:text-3xl">
                {title}
            </h2>

            <div className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                <div
                    key={benefit}
                    className="flex gap-3"
                >
                    <div className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-campus-accent/10">
                    <img
                        src={assets.check}
                        alt=""
                        className="size-3"
                    />
                    </div>

                    <p className="text-sm leading-6 text-campus-muted">
                    {benefit}
                    </p>
                </div>
                ))}
            </div>
            </div>

            <div className="w-full flex-1">
            {children}
            </div>
        </div>
        </section>
    );
}

function StudentMockup() {
    return (
        <div className="rounded-xl border border-campus-border/30 bg-campus-surface p-4 shadow-xl">
        <div className="rounded-lg border border-campus-border/20 bg-campus-background p-5">
            <div className="flex items-center justify-between">
            <div>
                <p className="text-xs text-campus-muted">Student Dashboard</p>
                <h3 className="mt-1 font-unbounded text-sm font-bold text-campus-text">
                Narendra Modi
                </h3>
            </div>

            <span className="rounded-full bg-campus-accent/10 px-3 py-1 text-[10px] text-campus-accent">
                Active
            </span>
            </div>

            <p className="mt-2 text-xs text-campus-muted">
            B.Tech Computer Science
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
            <MiniMetric
                label="Class Attendance"
                value="92.5%"
            />
            <MiniMetric
                label="Midterms"
                value="6.8 GPA"
            />
            <MiniMetric
                label="Pending Fees"
                value="₹0.00"
            />
            <MiniMetric
                label="Schedule"
                value="3 upcoming classes"
            />
            </div>
        </div>
        </div>
    );
}

function TeacherMockup() {
    return (
        <div className="rounded-xl border border-campus-border/30 bg-campus-surface p-4 shadow-xl">
        <div className="rounded-lg border border-campus-border/20 bg-campus-background p-5">
            <div className="flex items-center justify-between">
            <div>
                <p className="text-xs text-campus-muted">Grade Management</p>
                <h3 className="mt-1 font-unbounded text-sm font-bold text-campus-text">
                Calculus III
                </h3>
            </div>

            <span className="text-xs text-campus-accent">
                94/100
            </span>
            </div>

            <div className="mt-6 space-y-3">
            {[
                ["Harsha Bhogle", "94/100"],
                ["Arijit Singh", "88/100"],
                ["Shreya Ghoshal", "95/100"],
            ].map(([name, grade, status]) => (
                <div
                key={name}
                className="flex items-center justify-between rounded-lg border border-campus-border/10 p-3"
                >
                <span className="text-xs text-campus-text">
                    {name}
                </span>

                <div className="flex items-center gap-3">
                    <span className="text-xs text-campus-muted">
                    {grade}
                    </span>

                    <span className="text-[10px] text-campus-accent">
                    {status}
                    </span>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
}

function AdminSection() {
    return (
        <section
        id="for-institutes"
        className="px-6 py-24 lg:px-20"
        >
        <div className="mx-auto max-w-[1280px]">
            <SectionHeader
            badge="Administrative Command Center"
            title="Granular Control for Campus Registrars & Directors"
            />

            <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="rounded-xl border border-campus-border/30 bg-campus-surface p-5">
                <div className="flex items-center justify-between border-b border-campus-border/10 pb-5">
                <div>
                    <p className="text-xs text-campus-muted">
                    Configuration
                    </p>

                    <h3 className="mt-1 font-unbounded text-sm font-bold text-campus-text">
                    Academic Architecture Configuration
                    </h3>
                </div>

                <button className="rounded-lg bg-campus-accent px-4 py-2 text-xs font-semibold text-campus-background">
                    Modify Configurations
                </button>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {adminItems.map((item) => (
                    <div
                    key={item.title}
                    className="rounded-lg border border-campus-border/10 bg-campus-background p-4"
                    >
                    <p className="text-xs font-semibold text-campus-text">
                        {item.title}
                    </p>

                    <p className="mt-2 font-mono text-[11px] text-campus-accent">
                        {item.value}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-campus-muted">
                        {item.description}
                    </p>
                    </div>
                ))}
                </div>
            </div>

            <div className="flex items-center justify-center rounded-xl border border-campus-border/20 bg-campus-surface p-8">
                <div className="w-full max-w-sm space-y-4">
                {adminItems.map((item, index) => (
                    <div
                    key={item.title}
                    className="flex gap-4"
                    >
                    <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-campus-accent/10 font-mono text-xs text-campus-accent">
                        {index + 1}
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-campus-text">
                        {item.title}
                        </p>

                        <p className="mt-1 text-xs leading-5 text-campus-muted">
                        {item.description}
                        </p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

function MiniMetric({ label, value }) {
    return (
        <div className="rounded-lg border border-campus-border/10 bg-campus-surface p-4">
        <p className="text-[10px] text-campus-muted">{label}</p>
        <p className="mt-2 text-sm font-semibold text-campus-text">
            {value}
        </p>
        </div>
    );
}

function Stats() {
    const stats = [
        ["20+", "Institutes Managed"],
        ["10K+", "Active Students"],
        ["2K+", "Academic Instructors"],
        ["99.9%", "Uptime Performance"],
    ];

    return (
        <section className="border-y border-campus-border/10 bg-campus-surface/30 px-6 py-16 lg:px-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map(([value, label]) => (
            <div
                key={label}
                className="text-center"
            >
                <p className="font-unbounded text-3xl font-bold text-campus-text">
                {value}
                </p>

                <p className="mt-2 text-xs text-campus-muted">
                {label}
                </p>
            </div>
            ))}
        </div>
        </section>
    );
}

function CTA() {
    return (
        <section
        id="contact"
        className="px-6 py-24 lg:px-20"
        >
        <div className="mx-auto max-w-[1280px]">
            <div className="relative overflow-hidden rounded-2xl border border-campus-accent/30 bg-campus-surface px-6 py-16 text-center sm:px-12">
            <div className="relative z-10 mx-auto max-w-2xl">
                <SectionBadge>Get Started Today</SectionBadge>

                <h2 className="mt-6 font-unbounded text-2xl font-bold leading-[1.3] text-campus-text sm:text-4xl">
                Ready to Transform Your Campus Experience?
                </h2>

                <p className="mt-5 text-sm leading-6 text-campus-muted">
                Secure, progressive software architected to streamline campus
                management, academic paths, and operations.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                    to="/register"
                    className="flex items-center justify-center gap-2 rounded-lg bg-campus-accent px-5 py-2.5 text-sm font-semibold text-campus-background"
                >
                    Get Started Free
                    <ArrowIcon />
                </Link>

                <a
                    href="mailto:sales@campussphere.edu"
                    className="rounded-lg border border-campus-border/40 px-5 py-2.5 text-sm font-semibold text-campus-text"
                >
                    Talk to an Expert
                </a>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

function Footer() {
    const columns = [
        {
        title: "Product",
        links: [
            "For Teachers",
            "Security Gates",
            "API Docs",
        ],
        },
        {
        title: "Resources",
        links: [
            "Blog Insights",
            "Case Studies",
            "Help Guides",
            "System Status",
        ],
        },
        {
        title: "Company",
        links: [
            "Our Mission",
            "Careers",
            "Pressroom",
            "Contact Sales",
        ],
        },
        {
        title: "About",
        links: [
            "Privacy",
            "Terms",
            "About us",
        ],
        },
    ];

    return (
        <footer className="border-t border-campus-border/20 px-6 pb-8 pt-16 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
            <div className="grid gap-12 lg:grid-cols-[1.5fr_2fr]">
            <div>
                <Logo />

                <p className="mt-5 max-w-sm text-sm leading-6 text-campus-muted">
                Secure, progressive software architected to streamline campus
                management, academic paths, and operations.
                </p>

                <div className="mt-6 flex gap-3">
                {["Twitter", "GitHub", "LinkedIn", "YouTube"].map(
                    (social) => (
                    <a
                        key={social}
                        href="#"
                        className="rounded-lg border border-campus-border/20 px-3 py-2 text-xs text-campus-muted transition hover:border-campus-accent/40 hover:text-campus-text"
                    >
                        {social}
                    </a>
                    )
                )}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                {columns.map((column) => (
                <div key={column.title}>
                    <h3 className="text-sm font-semibold text-campus-text">
                    {column.title}
                    </h3>

                    <div className="mt-5 space-y-3">
                    {column.links.map((link) => (
                        <a
                        key={link}
                        href="#"
                        className="block text-xs text-campus-muted transition hover:text-campus-text"
                        >
                        {link}
                        </a>
                    ))}
                    </div>
                </div>
                ))}
            </div>
            </div>

            <div className="mt-14 flex flex-col gap-4 border-t border-campus-border/10 pt-6 text-xs text-campus-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
                © 2026 CampusSphere Technologies Inc. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-5">
                <span>SaaS Security Certified</span>
                <span>ISO-27001 Compliant</span>
            </div>
            </div>
        </div>
        </footer>
    );
}

export default function LandingPage() {
    return (
        <main className="min-h-screen overflow-x-hidden bg-campus-background text-campus-text">
        <Navbar />

        <Hero />

        {/* <TrustedBy /> */}

        <Features />

        <HowItWorks />

        <AudienceSection
            id="for-students"
            badge="Designed for Students"
            title="Your Entire Academic Journey in One Single App"
            benefits={studentBenefits}
        >
            <StudentMockup />
        </AudienceSection>

        <AudienceSection
            badge="Built for Educators"
            title="Less Administrative Burden, More Active Teaching"
            benefits={teacherBenefits}
            reverse
        >
            <TeacherMockup />
        </AudienceSection>

        <AdminSection />

        {/* <Stats /> */}

        <CTA />

        <Footer />
        </main>
    );
}

