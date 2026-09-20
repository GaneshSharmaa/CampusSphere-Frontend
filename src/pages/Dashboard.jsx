import { useEffect, useState } from "react";

import StatCard from "../components/dashboard/StatCard";
import EnrollmentChart from "../components/dashboard/EnrollmentChart";
import ActivityFeed from "../components/dashboard/ActivityFeed";

import {
    stats,
    enrollmentData,
    activityFeed,
} from "../data/dashboard";

export default function Dashboard() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
        <div className="flex min-h-[60vh] items-center justify-center text-campus-muted">
            Loading dashboard...
        </div>
        );
    }

    return (
        <section>

        <div className="mb-8">
            <p className="text-sm text-campus-muted">
            Overview
            </p>

            <h1 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
            Dashboard
            </h1>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
            <StatCard
                key={stat.title}
                {...stat}
            />
            ))}
        </div>

        <div className="mt-6 grid gap-4 xl:grid-cols-[2fr_1fr]">

            <EnrollmentChart data={enrollmentData} />

            <ActivityFeed items={activityFeed} />

        </div>

        </section>
    );
}