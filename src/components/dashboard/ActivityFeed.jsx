export default function ActivityFeed({ items }) {
    return (
        <div className="rounded-xl border border-campus-border/30 bg-campus-surface p-6">

        <h2 className="text-base font-medium">
            Recent Incidents & Alerts
        </h2>

        <div className="mt-6 space-y-3">

            {items.map((item, index) => (
            <div
                key={index}
                className="rounded-lg border border-campus-border/20 bg-campus-background p-3"
            >

                <p className="text-xs text-campus-accent">
                {item.type}
                </p>

                <p className="mt-1 text-sm font-medium">
                {item.title}
                </p>

                <p className="mt-1 text-xs text-campus-muted">
                {item.time}
                </p>

            </div>
            ))}

        </div>

        </div>
    );
}