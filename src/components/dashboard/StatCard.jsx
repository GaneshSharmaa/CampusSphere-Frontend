export default function StatCard({
    title,
    value,
    description,
}) {
    return (
        <div className="rounded-xl border border-campus-border/30 bg-campus-surface p-5">

        <p className="text-sm text-campus-muted">
            {title}
        </p>

        <p className="mt-3 text-3xl font-semibold tracking-tight text-campus-text">
            {value}
        </p>

        <p className="mt-3 text-sm text-campus-accent">
            {description}
        </p>

        </div>
    );
}