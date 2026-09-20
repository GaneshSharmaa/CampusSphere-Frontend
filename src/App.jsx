import {
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";

import AppShell from "./components/layout/AppShell";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Academics from "./pages/Academics";
import Financials from "./pages/Financials";
import Schedule from "./pages/Schedule";
import Faculty from "./pages/Faculty";
import Settings from "./pages/Settings";

export default function App() {
    return (
        <Routes>

        {/* Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Authenticated application */}
        <Route element={<AppShell />}>

            <Route
            path="/dashboard"
            element={<Dashboard />}
            />

            <Route
            path="/login"
            element={<Login />}
            />

            <Route
            path="/students"
            element={<Students />}
            />

            <Route
            path="/academics"
            element={<Academics />}
            />

            <Route
            path="/financials"
            element={<Financials />}
            />

            <Route
            path="/schedule"
            element={<Schedule />}
            />

            <Route
            path="/faculty"
            element={<Faculty />}
            />

            <Route
            path="/settings"
            element={<Settings />}
            />

        </Route>

        <Route
            path="*"
            element={<Navigate to="/" replace />}
        />

        </Routes>
    );
}

