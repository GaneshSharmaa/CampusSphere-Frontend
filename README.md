# CampusSphere — Frontend

The frontend application for **CampusSphere**, a multi-user campus management platform for managing students, academics, faculty, finances, schedules, and other academic workflows from a centralized interface.

Built with **React and Vite**, with a focus on a clean, responsive, and role-aware user experience.

## Backend

The frontend communicates with the CampusSphere backend API.

The backend repository is [here](https://github.com/GaneshSharmaa/CampusSphere--A-Multi-User-Student-and-Academic-Management-Tool).

---

### Features

- Responsive landing page
- User authentication
- Login and registration flows
- Dashboard
- Student management
- Academic management
- Faculty management
- Financial management
- Schedule management
- Settings
- Role-based UI
- Reusable UI components
- API-driven application architecture

---

### Tech Stack

- **React** — UI development
- **Vite** — Frontend tooling and development server
- **React Router** — Client-side routing
- **Tailwind CSS** — Styling
- **shadcn/ui** — Reusable UI components
- **JavaScript** — Application logic
- **ESLint** — Code quality and linting

---

### Project Structure

```text
src/
├── assets/           # Images and static assets
├── components/       # Reusable UI components
├── data/             # Static/mock application data
├── hooks/            # Custom React hooks
├── lib/              # Utilities and shared logic
├── pages/            # Application pages
│   ├── Academics.jsx
│   ├── Dashboard.jsx
│   ├── Faculty.jsx
│   ├── Financial.jsx
│   ├── LandingPage.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Schedule.jsx
│   ├── Settings.jsx
│   └── Students.jsx
├── App.jsx           # Application routes and root component
├── main.jsx          # Application entry point
└── index.css         # Global styles
```

