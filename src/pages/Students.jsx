import { useMemo, useState } from "react";

const students = [
    {
        id: 1,
        name: "Aarav Sharma",
        course: "Computer Science",
        semester: 6,
        status: "Active",
    },
    {
        id: 2,
        name: "Priya Patel",
        course: "Information Technology",
        semester: 4,
        status: "Active",
    },
    {
        id: 3,
        name: "Rahul Mehta",
        course: "Electronics",
        semester: 8,
        status: "Inactive",
    },
];

export default function Students() {
    const [search, setSearch] = useState("");
    const [selectedStudent, setSelectedStudent] =
        useState(null);

    const filteredStudents = useMemo(() => {
        const query = search.toLowerCase();

        return students.filter((student) =>
        student.name.toLowerCase().includes(query)
        );
    }, [search]);

    return (
        <section>

        <div className="mb-6">
            <p className="text-sm text-campus-muted">
            Student Management
            </p>

            <h1 className="mt-1 text-2xl font-semibold">
            Student Roster
            </h1>
        </div>

        <div className="mb-6">

            <input
            value={search}
            onChange={(event) =>
                setSearch(event.target.value)
            }
            placeholder="Search students..."
            className="h-10 w-full max-w-md rounded-lg border border-campus-border/40 bg-campus-surface px-4 text-sm outline-none focus:border-campus-accent"
            />

        </div>

        <div className="overflow-hidden rounded-xl border border-campus-border/30 bg-campus-surface">

            <div className="overflow-x-auto">

            <table className="w-full text-sm">

                <thead className="border-b border-campus-border/30">
                <tr className="text-left text-campus-muted">
                    <th className="px-5 py-4">Student</th>
                    <th className="px-5 py-4">Course</th>
                    <th className="px-5 py-4">Semester</th>
                    <th className="px-5 py-4">Status</th>
                </tr>
                </thead>

                <tbody>

                {filteredStudents.map((student) => (
                    <tr
                    key={student.id}
                    onClick={() =>
                        setSelectedStudent(student)
                    }
                    className="cursor-pointer border-b border-campus-border/20 transition-colors hover:bg-white/[0.02]"
                    >

                    <td className="px-5 py-4 font-medium">
                        {student.name}
                    </td>

                    <td className="px-5 py-4 text-campus-muted">
                        {student.course}
                    </td>

                    <td className="px-5 py-4 text-campus-muted">
                        {student.semester}
                    </td>

                    <td className="px-5 py-4">
                        <span
                        className={
                            student.status === "Active"
                            ? "rounded-full bg-campus-accent/10 px-2.5 py-1 text-xs text-campus-accent"
                            : "rounded-full bg-white/5 px-2.5 py-1 text-xs text-campus-muted"
                        }
                        >
                        {student.status}
                        </span>
                    </td>

                    </tr>
                ))}

                </tbody>

            </table>

            </div>

        </div>

        {selectedStudent && (
            <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md border-l border-campus-border/30 bg-campus-surface p-6 shadow-2xl">

            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                Student Details
                </h2>

                <button
                onClick={() =>
                    setSelectedStudent(null)
                }
                className="text-campus-muted hover:text-campus-text"
                >
                Close
                </button>
            </div>

            <div className="mt-8 space-y-4">

                <div>
                <p className="text-xs text-campus-muted">
                    Name
                </p>

                <p className="mt-1">
                    {selectedStudent.name}
                </p>
                </div>

                <div>
                <p className="text-xs text-campus-muted">
                    Course
                </p>

                <p className="mt-1">
                    {selectedStudent.course}
                </p>
                </div>

                <div>
                <p className="text-xs text-campus-muted">
                    Semester
                </p>

                <p className="mt-1">
                    {selectedStudent.semester}
                </p>
                </div>

            </div>

            </div>
        )}

        </section>
    );
}