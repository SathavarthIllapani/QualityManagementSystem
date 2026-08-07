# QualitySphere QMS — Enterprise AI-Powered Quality Management System

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/SathavarthIllapani/QualityManagementSystem)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.0+-61dafb)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38bdf8)](https://tailwindcss.com/)

**QualitySphere QMS** is an original, next-generation, enterprise-grade Quality Management System built for highly regulated industries including Pharmaceuticals, Biotechnology, Medical Devices, Healthcare, Manufacturing, Food & Cosmetics, Chemicals, and Laboratories. 

Combining the usability of modern SaaS platforms with strict regulatory compliance frameworks, QualitySphere delivers a unified workspace for quality control, risk management, automated workflows, and AI-driven intelligence.

---

## 🌟 Key Capabilities & Compliance Standards

- **Regulatory Compliance**: Built to support FDA 21 CFR Part 11, EU GMP Annex 11, ISO 9001, ISO 13485, ICH Q10, GAMP 5, and ALCOA+ principles.
- **Data Integrity & Governance**: Complete immutable audit trails, electronic signatures with re-authentication, version pinning, and role-based access control (RBAC).
- **AI-Powered Quality Intelligence**: Integrated LLM capabilities for automated SOP drafting, root cause analysis (RCA), CAPA generation, document summarization, risk prediction, and compliance chat.
- **Configurable Workflow Engine**: Multi-stage approval cycles (sequential, parallel, conditional), escalations, delegation, and automated notifications.
- **Enterprise UX**: Slate & Emerald design tokens, high-density data tables, dark/light theme switcher, collapsible navigation, and responsive dashboards.

---

## 📦 Primary Modules (15 Core Domains)

1. **Executive Dashboard**: Real-time compliance score, KPI widgets, pending task list, risk heat maps, audit status, and activity feeds.
2. **Document Management System (DMS)**: SOP creation, folder hierarchies, versioning, review/approval cycles, watermarked PDF previews, and archiving.
3. **CAPA Management**: Corrective and Preventive Action lifecycle, 5 Whys / Fishbone root cause analysis, action plans, and effectiveness verification.
4. **Change Control**: Change requests, impact assessments, multi-department reviews, execution tracking, and closure logs.
5. **Deviations**: Incident reporting, severity classification, investigations, root cause links, and trend reporting.
6. **Audit Management**: Internal, external, and supplier audits, interactive checklists, finding logs, and CAPA integration.
7. **Risk Management**: Risk registers, 5x5 interactive matrices, Failure Mode & Effects Analysis (FMEA) with RPN calculations, and mitigation tracking.
8. **Training Management**: Matrix mapping, course assignments, automated assessments, competency tracking, and renewal alerts.
9. **Supplier Management**: Qualification workflows, vendor evaluation scorecards, document tracking, and audit links.
10. **Customer Complaints**: Intake, investigation logs, regulatory reporting triggers, root cause analysis, and resolution tracking.
11. **Equipment Management**: Asset register, maintenance schedules, operational logs, and status tracking.
12. **Calibration Management**: Equipment calibration cycles, certificate storage, tolerance checks, and due-date alerts.
13. **Validation Management**: Qualification protocol execution (IQ / OQ / PQ), validation matrix, and approval logs.
14. **User & Access Management**: Multi-role engine (11 default roles), granular permission matrices, department scoping, and security policies.
15. **Reports & Analytics**: Custom reporting builder with export support for PDF, Excel, and CSV formats.

---

## 🤖 Integrated AI Capabilities

- **Natural Language Search**: Semantic search across documents, CAPAs, audits, and equipment logs.
- **SOP & CAPA Generation**: AI-assisted draft creation based on regulatory templates and incident descriptions.
- **Root Cause & Risk Prediction**: Machine learning suggestions for incident investigations and risk priority score estimation.
- **Automated Summaries**: Instant executive summaries of lengthy audit findings, investigations, and regulatory documents.
- **Knowledge Base Chat**: Conversational assistant trained on internal quality guidelines and standard operating procedures.

---

## 🛣️ Product Roadmap

### Phase 1 — Prototype (Current State)
- Interactive, investor-ready UI prototype with full surface area for 15 modules.
- Marketing landing page, auth screens, mega dashboard, dark/light mode switcher, and mock enterprise datasets.
- Interactive workflow modals, electronic signature dialogs, and AI assistant side-panel preview.

### Phase 2 — MVP
- Full database integration (PostgreSQL with Row Level Security).
- Active authentication & authorization with JWT, session timeouts, and granular role permissions.
- File storage, PDF rendering engine with dynamic watermarking, and electronic signature verification.
- Live background jobs, email alerts, and workflow state transition triggers.

### Phase 3 — Production & Scale
- Multi-tenant cloud deployment (AWS / Azure / Kubernetes ready).
- Redis caching, API gateway, microservice breakdown, and background job queues.
- Enterprise SSO (SAML/OIDC), LDAP integration, 2FA enforcement, and automated disaster recovery.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [TanStack Start](https://tanstack.com/router) (Full-Stack React Framework)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + CSS variables (`oklch` color system)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) primitives & [Lucide Icons](https://lucide.dev/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) (Client state) & [TanStack Query](https://tanstack.com/query) (Server state)
- **Charts & Visualization**: [Recharts](https://recharts.org/)
- **Form Handling**: React Hook Form + Zod validation

---

## 🚀 Development Setup

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or `pnpm` / `yarn`)

### Quick Start

1. **Clone the repository**
   ```sh
   git clone [https://github.com/SathavarthIllapani/QualityManagementSystem.git](https://github.com/SathavarthIllapani/QualityManagementSystem.git)
   cd QualityManagementSystem

Install dependencies

npm install
Configure environment variables

cp .env.example .env
Run the local development server

npm run dev
Open http://localhost:3000 in your browser.

📁 Repository Structure
QualityManagementSystem/
├── src/
│   ├── assets/          # SVG icons, logos, and static assets
│   ├── components/      # UI components, layout shell, AI side panel, PDF viewer
│   ├── hooks/           # Custom React hooks (auth, theme, workflows)
│   ├── lib/             # API client, database connection, utility functions
│   ├── modules/         # Feature implementations for all 15 QMS domains
│   ├── routes/          # File-based routes (marketing, auth, authenticated app)
│   ├── store/           # Zustand state stores (app, auth, theme)
│   ├── styles/          # Global styles & theme tokens
│   └── types/           # TypeScript interfaces (QMS models, DB schema, workflows)
├── public/              # Favicon, manifest, and public static files
├── app.config.ts        # TanStack Start configuration
├── tailwind.config.ts   # Tailwind configuration & token setup
└── README.md            # Project documentation

📄 License
Distributed under the MIT License. See LICENSE for more information.