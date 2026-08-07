# QualitySphere QMS — Build Plan

An original, enterprise-grade AI-powered Quality Management System for regulated industries. Slate + emerald design system, dark/light mode, collapsible sidebar, and a full Phase 1 module surface backed by cloud infrastructure from day one.

Note on the stack: this project runs on React + TypeScript + TanStack Start (not Next.js/FastAPI). Backend logic uses cloud backend services (Postgres, auth, storage, server functions) instead of FastAPI — same capabilities, no external accounts. Everything else in your spec (Tailwind, shadcn, Lucide, Recharts, TanStack Query, Zustand, Framer-style motion) is used as requested.

## Design system

- Palette: slate `#0F172A` base, `#F8FAFC` surface, emerald `#059669` primary with `#34D399` accent, semantic status colors for Draft / Under Review / Approved / Rejected / Overdue.
- Typography: geometric sans headings + highly legible UI sans for tables and forms.
- Tokens defined in `src/styles.css` (oklch), light + dark, no hardcoded colors in components.
- Density: enterprise-tight tables, 8px rhythm, restrained motion (200ms transitions, no decorative animation).

## Build sequence

### Iteration 1 — Foundation, landing, auth, dashboard
- Enable Cloud Backend Infrastructure.
- Design system + app shell: collapsible sidebar (15 module groups), top bar with global search, notifications, theme toggle, profile menu, breadcrumbs.
- Premium landing page: hero, features, modules grid, industries, benefits, testimonials, pricing, FAQ, contact, footer.
- Auth: signup, login, forgot password, reset password, Google sign-in; `profiles` table + `user_roles` table with the 11 roles and a `has_role()` security-definer function; protected app routes.
- Mega dashboard: compliance score, KPI widgets, pending approvals/tasks, CAPA / deviation / audit / training / risk status, trend charts, risk heat map, calendar, activity feed, announcements, quick actions.

### Iteration 2 — Core quality modules (real data)
Documents (SOP create, folders, categories, versions, revision history, review cycle, PDF/preview viewer, watermark, archive), CAPA, Deviations, Change Control. Each with list + filters, detail with tabs, workflow actions, comments, attachments, audit trail.

### Iteration 3 — Workflow engine, e-signatures, audit trail
Configurable workflow definitions (sequential / parallel / conditional), states Draft → Submitted → Under Review → Approved/Rejected/Returned → Effective → Obsolete → Archived, delegation, escalation, reminders, due dates. Electronic signature dialog (re-authenticate + meaning of signature + reason), immutable audit-log table written by triggers, 21 CFR Part 11 / Annex 11 / ALCOA+ oriented.

### Iteration 4 — Remaining modules
Audit Management, Risk Management (register, matrix, FMEA with RPN), Training, Suppliers, Complaints, Equipment, Calibration, Validation (IQ/OQ/PQ).

### Iteration 5 — AI layer
AI Assistant side panel, natural-language search, document summarization, SOP draft generation, CAPA draft, root-cause suggestions, risk prediction, investigation and audit report summaries, training question generation, duplicate + missing-info detection, knowledge-base chat. Built on AI service integrations (streaming, server-side keys).

### Iteration 6 — Admin, reports, notifications, settings
Reports & Analytics with PDF/Excel/CSV export, user & role management with permission matrix, departments/sites, notification center + email notifications and due-date reminders, settings (organization, branding, workflow, password policy, security, audit logs, API keys), global search with advanced filters and saved searches.

## Technical notes

- Routing: file-based routes under `src/routes`; public marketing routes at top level, app under `_authenticated/` with its own head metadata per route.
- Data: Postgres schema covering users, roles, permissions, departments, documents + versions, capa, change_control, deviations, audits + findings, risks, trainings + assignments, suppliers, complaints, equipment, calibrations, validations, workflows + steps + approvals, tasks, comments, attachments, notifications, audit_logs. RLS on every table with explicit grants; role checks via `has_role()`, never role columns on profiles.
- Reads via TanStack Query + route loaders; writes via server functions with validation; Zustand for UI state (sidebar, theme, filters).
- Files in Cloud storage with signed URLs, version-pinned document records, download control.
- Phase 3 items (Kubernetes, Redis, microservices, LDAP, multi-region DR) are infrastructure outside this app runtime; I will document the architecture and implement the in-app equivalents (multi-tenant org scoping, caching, background jobs via scheduled endpoints, 2FA, SSO via Cloud auth, API keys, audit logging) rather than ship unusable config.

Each iteration ends with a working, demo-ready app; you approve before I move to the next.
