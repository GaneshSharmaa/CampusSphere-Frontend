export default function EnrollmentChart({ data }) {
    const max = Math.max(...data.map((item) => item.value));

    return (
        <div className="rounded-xl border border-campus-border/30 bg-campus-surface p-6">

        <h2 className="text-base font-medium">
            Enrollment Growth (2022 - 2026)
        </h2>

        <div className="mt-8 flex h-64 items-end gap-3 sm:gap-5">

            {data.map((item) => {
            const height = `${(item.value / max) * 100}%`;

            return (
                <div
                key={item.year}
                className="flex flex-1 flex-col items-center justify-end gap-3"
                >

                <div className="flex h-full w-full items-end">
                    <div
                    className="w-full rounded-t-md bg-campus-accent/80 transition-all duration-300 hover:bg-campus-accent"
                    style={{ height }}
                    />
                </div>

                <span className="text-xs text-campus-muted">
                    {item.year}
                </span>

                </div>
            );
            })}

        </div>

        </div>
    );
}