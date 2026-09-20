import { useState } from "react";
import { Eye, EyeOff, GraduationCap, Lock, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        identifier: "",
        password: "",
        rememberMe: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    function handleChange(event) {
        const { name, value, type, checked } = event.target;

        setForm((current) => ({
        ...current,
        [name]: type === "checkbox" ? checked : value,
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setError("");
        setIsSubmitting(true);

        try {
        /*
        * Backend integration will go here.
        *
        * Example:
        *
        * const response = await apiFetch("/login", {
        *   method: "POST",
        *   body: JSON.stringify({
        *     identifier: form.identifier,
        *     password: form.password,
        *   }),
        * });
        *
        * Store the returned access token/session.
        * Then navigate to the dashboard.
        */

        // Temporary navigation while the backend is not connected.
        await new Promise((resolve) => setTimeout(resolve, 500));

        navigate("/dashboard");
        } catch (err) {
        setError(
            err instanceof Error
            ? err.message
            : "Unable to sign in. Please try again."
        );
        } finally {
        setIsSubmitting(false);
        }
    }

    return (
        <main className="max-h-screen bg-campus-background text-campus-text">
        <div className="grid max-h-screen lg:grid-cols-[55%_45%]">
            {/* ---------------------------------------------------------
                LEFT SIDE — PRODUCT / BRANDING
            --------------------------------------------------------- */}

            <section className="relative hidden overflow-hidden bg-campus-surface lg:block">
            <div className="flex max-h-screen flex-col px-16 py-10 xl:px-16">
                {/* Logo */}
                <Link
                to="/"
                className="flex w-fit items-center gap-3"
                >
                <div className="flex size-9 items-center justify-center rounded-lg bg-campus-accent">
                    <GraduationCap
                    className="size-5 text-campus-background"
                    strokeWidth={2}
                    />
                </div>

                <span className="font-unbounded text-[18px] font-bold tracking-[-0.5px]">
                    CampusSphere
                </span>
                </Link>

                {/* Dashboard visual */}
                <div className="mt-8 flex items-center justify-center">
                <div className="w-full overflow-hidden rounded-xl">
                    <img
                    src="/assets/login-dashboard.svg"
                    alt="CampusSphere dashboard"
                    className="block h-auto w-full object-cover"
                    />
                </div>
                </div>

                {/* Marketing copy */}
                <div className="flex flex-col mt-6 gap-4 max-w-[650px]">
                <h1 className="font-unbounded text-3xl font-bold leading-[1.3] tracking-[-1px] text-campus-text xl:text-[34px]">
                    Welcome back to your campus workspace
                </h1>

                <p className="max-w-[650px] text-base leading-7 text-campus-muted">
                    Access academic tracking, campus-wide scheduling, grades,
                    financials, and live collaboration in one centralized
                    environment.
                </p>
                </div>

                {/* Footer */}
                <div className="flex items-center fixed bottom-8">
                <p className="text-xs text-campus-muted">
                    © 2026 CampusSphere Technologies Inc.
                </p>
                </div>
            </div>
            </section>

            {/* ---------------------------------------------------------
                RIGHT SIDE — LOGIN FORM
            --------------------------------------------------------- */}

            <section className="flex min-h-screen items-center justify-center px-6 py-12 sm:px-10 lg:px-14 xl:px-24">
            <div className="w-full max-w-[420px]">
                {/* Heading */}
                <div>
                <h2 className="font-unbounded text-3xl font-bold tracking-[-1px] text-campus-text sm:text-[32px]">
                    Welcome Back
                </h2>

                <p className="mt-3 text-sm text-campus-muted">
                    Sign in to your account to continue
                </p>
                </div>

                {/* Form */}
                <form
                onSubmit={handleSubmit}
                className="mt-10"
                >
                {/* Email / Phone */}
                <div>
                    <label
                    htmlFor="identifier"
                    className="mb-2 block text-xs font-medium text-campus-text"
                    >
                    Email or Phone Number
                    </label>

                    <div className="relative">
                    <Mail
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-campus-muted"
                    />

                    <input
                        id="identifier"
                        name="identifier"
                        type="text"
                        value={form.identifier}
                        onChange={handleChange}
                        placeholder="name@university.edu"
                        autoComplete="username"
                        required
                        className="h-12 w-full rounded-lg border border-campus-border/40 bg-campus-surface pl-11 pr-4 text-sm text-campus-text outline-none transition placeholder:text-campus-muted focus:border-campus-accent focus:ring-1 focus:ring-campus-accent"
                    />
                    </div>
                </div>

                {/* Password */}
                <div className="mt-5">
                    <label
                    htmlFor="password"
                    className="mb-2 block text-xs font-medium text-campus-text"
                    >
                    Password
                    </label>

                    <div className="relative">
                    <Lock
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 top-1/2 size-[18px] -translate-y-1/2 text-campus-muted"
                    />

                    <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        required
                        className="h-12 w-full rounded-lg border border-campus-border/40 bg-campus-surface pl-11 pr-11 text-sm text-campus-text outline-none transition placeholder:text-campus-muted focus:border-campus-accent focus:ring-1 focus:ring-campus-accent"
                    />

                    <button
                        type="button"
                        onClick={() =>
                        setShowPassword((current) => !current)
                        }
                        aria-label={
                        showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-campus-muted transition hover:text-campus-text"
                    >
                        {showPassword ? (
                        <EyeOff className="size-[18px]" />
                        ) : (
                        <Eye className="size-[18px]" />
                        )}
                    </button>
                    </div>
                </div>

                {/* Remember / Forgot */}
                <div className="mt-3 flex items-center justify-between gap-4">
                    <label className="flex cursor-pointer items-center gap-2 text-xs text-campus-muted">
                    <input
                        type="checkbox"
                        name="rememberMe"
                        checked={form.rememberMe}
                        onChange={handleChange}
                        className="size-4 accent-campus-accent"
                    />

                    <span>Remember me</span>
                    </label>

                    <Link
                    to="/forgot-password"
                    className="text-xs font-medium text-campus-accent transition hover:text-campus-text"
                    >
                    Forgot Password?
                    </Link>
                </div>

                {/* Error */}
                {error && (
                    <div
                    role="alert"
                    className="mt-4 rounded-lg border border-red-500/40 bg-red-500/5 px-4 py-3 text-xs text-red-400"
                    >
                    {error}
                    </div>
                )}

                {/* Submit */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-6 h-11 w-full rounded-lg bg-campus-accent text-sm font-semibold text-campus-background transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isSubmitting ? "Signing in..." : "Sign In"}
                </button>
                </form>

                {/* Register */}
                <p className="mt-8 text-center text-sm text-campus-muted">
                Don't have an account?{" "}
                <Link
                    to="/register"
                    className="font-medium text-campus-accent transition hover:text-campus-text"
                >
                    Register here
                </Link>
                </p>
            </div>
            </section>
        </div>
        </main>
    );
}

