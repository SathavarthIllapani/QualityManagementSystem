import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { M as MarketingNav, I as Input, a as MarketingFooter } from "./input-BAlsZYMf.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { B as Button, c as cn } from "./button-DjOZMqFS.mjs";
import { B as Badge } from "./badge-YM7oB01y.mjs";
import { C as Card, a as CardContent } from "./card-CVDnmg2p.mjs";
import { L as Label } from "./label-C8WJLhmR.mjs";
import "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { B as BadgeCheck, A as ArrowRight, W as Workflow, P as PenLine, a as Bot, S as Search, F as FileText, C as ClipboardCheck, G as GitCompareArrows, T as TriangleAlert, b as ShieldCheck, R as Radar, c as GraduationCap, d as Factory, M as MessageSquareWarning, e as Wrench, f as Gauge, g as FlaskConical, U as Users, h as ChartColumn, i as CircleCheck, Q as Quote, j as ChevronDown } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-dialog.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-effect-event+[...].mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./router-KVCBpVzC.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/zustand.mjs";
import "../_libs/zod.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const fadeUp = {
  initial: {
    opacity: 0,
    y: 14
  },
  whileInView: {
    opacity: 1,
    y: 0
  },
  viewport: {
    once: true,
    margin: "-80px"
  },
  transition: {
    duration: 0.45,
    ease: [0.22, 1, 0.36, 1]
  }
};
const modules = [{
  icon: FileText,
  name: "Document Control",
  desc: "SOPs, templates, versions, periodic review, watermarking."
}, {
  icon: ClipboardCheck,
  name: "CAPA",
  desc: "Root cause, action plans, effectiveness verification."
}, {
  icon: GitCompareArrows,
  name: "Change Control",
  desc: "Impact assessment through verified implementation."
}, {
  icon: TriangleAlert,
  name: "Deviations",
  desc: "Classification, investigation, trending, CAPA linkage."
}, {
  icon: ShieldCheck,
  name: "Audits",
  desc: "Internal, external and supplier audits with checklists."
}, {
  icon: Radar,
  name: "Risk",
  desc: "Risk register, matrix, FMEA with RPN and residual risk."
}, {
  icon: GraduationCap,
  name: "Training",
  desc: "Matrix, assessments, certificates, expiry alerts."
}, {
  icon: Factory,
  name: "Suppliers",
  desc: "Qualification, evaluation, scorecards, audits."
}, {
  icon: MessageSquareWarning,
  name: "Complaints",
  desc: "Intake, investigation, escalation, closure."
}, {
  icon: Wrench,
  name: "Equipment",
  desc: "Assets, maintenance history, certificates, alerts."
}, {
  icon: Gauge,
  name: "Calibration",
  desc: "Due schedules, certificates, out-of-tolerance handling."
}, {
  icon: FlaskConical,
  name: "Validation",
  desc: "IQ / OQ / PQ protocols, execution and reports."
}, {
  icon: Users,
  name: "User Management",
  desc: "Roles, permissions, departments, sessions."
}, {
  icon: ChartColumn,
  name: "Reports",
  desc: "Compliance analytics with PDF, Excel and CSV export."
}, {
  icon: Workflow,
  name: "Workflow Engine",
  desc: "Sequential, parallel and conditional approvals."
}];
const capabilities = [{
  icon: Workflow,
  title: "Configurable workflow engine",
  body: "Design sequential, parallel and conditional approval routes per record type, with escalation, delegation and due-date reminders."
}, {
  icon: PenLine,
  title: "Part 11 electronic signatures",
  body: "Re-authenticated signing with meaning, reason and timestamp, written to an immutable audit trail that nobody can edit."
}, {
  icon: Bot,
  title: "AI across every record",
  body: "Draft SOPs, summarise investigations, suggest root causes, detect duplicates and predict approval delays without leaving the record."
}, {
  icon: Search,
  title: "Natural-language search",
  body: "Ask “open critical deviations in Granulation since April” and get filtered, permission-aware results across all modules."
}];
const industries = ["Pharmaceuticals", "Biotechnology", "Medical Devices", "Healthcare", "Manufacturing", "Food & Beverage", "Cosmetics", "Chemicals", "Laboratories"];
const standards = ["FDA 21 CFR Part 11", "EU GMP Annex 11", "ISO 9001", "ISO 13485", "ICH Q10", "GAMP 5", "ALCOA+"];
const testimonials = [{
  quote: "We consolidated four disconnected trackers into one record model. Deviation-to-CAPA hand-off now takes minutes instead of a week of email.",
  name: "Head of Quality Assurance",
  org: "Sterile injectables CDMO, 900 employees"
}, {
  quote: "Inspection readiness is the difference. Every signature, revision and comment is reconstructable from a single audit trail view.",
  name: "Director, Regulatory Compliance",
  org: "Class II medical device manufacturer"
}, {
  quote: "The AI drafting cut SOP authoring time roughly in half, and reviewers still control every word before it becomes effective.",
  name: "QA Documentation Lead",
  org: "Nutraceutical manufacturing group"
}];
const plans = [{
  name: "Essential",
  price: "$18",
  unit: "per user / month",
  desc: "Document control and training for small quality teams.",
  features: ["Document control", "Training matrix", "Audit trail", "Email notifications", "Up to 50 users"]
}, {
  name: "Professional",
  price: "$39",
  unit: "per user / month",
  desc: "The full quality event lifecycle with AI assistance.",
  features: ["All Essential features", "CAPA, deviations, change control", "Audits, risk, suppliers", "Workflow engine + e-signatures", "AI assistant and drafting"],
  featured: true
}, {
  name: "Enterprise",
  price: "Custom",
  unit: "annual agreement",
  desc: "Multi-site governance, SSO and validation support.",
  features: ["All Professional features", "Multi-site and multi-entity", "SSO, SAML and 2FA", "Validation documentation pack", "Dedicated success engineer"]
}];
const faqs = [{
  q: "Is QualitySphere suitable for FDA-regulated records?",
  a: "The platform is built for 21 CFR Part 11 and EU GMP Annex 11 expectations: unique user accounts, re-authenticated electronic signatures with meaning, immutable audit trails, version control and retention rules. Your validation team still performs qualification against your intended use."
}, {
  q: "How configurable are the approval workflows?",
  a: "Every record type has its own workflow definition. You can chain sequential steps, run parallel review groups, add conditional branches based on severity or department, and set escalation and reminder rules per step."
}, {
  q: "What exactly does the AI do — and what does it never do?",
  a: "AI drafts, summarises, classifies and suggests. It never approves, signs or closes a record. Every AI output is presented as a draft that a qualified user must review, edit and sign."
}, {
  q: "Can we migrate existing SOPs and open quality events?",
  a: "Yes. Documents import with their revision history and effective dates, and open CAPAs, deviations and change controls can be loaded with their current workflow state and owners."
}, {
  q: "How is data segregated across sites?",
  a: "Records are scoped by organisation, site and department, and access is enforced by role and permission on every read and write, not only in the interface."
}];
function Landing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MarketingNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "surface-grid pointer-events-none absolute inset-0 opacity-60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-6xl px-5 py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "outline", className: "gap-1.5 border-primary/30 bg-primary/8 text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "size-3.5" }),
          " Built for GxP and ISO regulated operations"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-4xl leading-[1.08] font-semibold md:text-6xl", children: [
          "The quality system your",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-brand", children: " inspectors can follow" }),
          " and your teams actually use."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg text-muted-foreground", children: "QualitySphere QMS connects controlled documents, CAPA, deviations, change control, audits, risk, training and supplier quality on one workflow engine — with AI that drafts the paperwork and an audit trail that never forgets." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/auth", search: {
            mode: "signup"
          }, children: [
            "Start free evaluation ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 size-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#modules", children: "Explore the 15 modules" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4", children: [["15", "quality modules"], ["100%", "actions audit-trailed"], ["11", "configurable roles"], ["<1 day", "workflow reconfiguration"]].map(([value, label]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-display text-2xl font-semibold text-foreground", children: value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 text-sm text-muted-foreground", children: label })
        ] }, label)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "platform", className: "mx-auto max-w-6xl px-5 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "One record model, four hard problems solved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Quality software fails when workflows are rigid, signatures are cosmetic and search doesn't reach the evidence. QualitySphere is designed around those four failures." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-2", children: capabilities.map((cap) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full border-border/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex size-10 items-center justify-center rounded-md bg-primary/12 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(cap.icon, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-semibold", children: cap.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: cap.body })
      ] }) }) }, cap.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "modules", className: "border-y border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "flex flex-wrap items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Fifteen modules, one governance layer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Every module shares the same workflow states, signature model, comment threads and audit trail — so cross-module linkage is native, not an integration project." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", children: "See a live dashboard" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: modules.map((mod) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex h-full gap-4 rounded-lg border border-border bg-background p-5 transition-colors hover:border-primary/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover:bg-primary/12 group-hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(mod.icon, { className: "size-4.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: mod.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: mod.desc })
        ] })
      ] }) }, mod.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "industries", className: "mx-auto max-w-6xl px-5 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Configured for regulated industries" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Terminology, severity scales, workflow steps and retention rules are configurable per industry, so the system speaks your inspectors' language." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: industries.map((industry) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "px-3 py-1.5 text-sm font-normal", children: industry }, industry)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Designed against the standards you're audited on" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: standards.map((standard) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-primary" }),
          standard
        ] }, standard)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs text-muted-foreground", children: "QualitySphere provides the controls; your organisation owns qualification and validation for its intended use." })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-5 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { ...fadeUp, className: "max-w-2xl text-3xl font-semibold md:text-4xl", children: "What quality leaders tell us after go-live" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-3", children: testimonials.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full border-border/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex h-full flex-col p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "size-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 flex-1 text-sm leading-relaxed", children: item.quote }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-t border-border pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: item.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: item.org })
        ] })
      ] }) }) }, item.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "pricing", className: "mx-auto max-w-6xl px-5 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Transparent pricing per named user" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Every plan includes unlimited records, unlimited audit trail history and role-based access control." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 lg:grid-cols-3", children: plans.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: plan.featured ? "h-full border-primary/50 shadow-[var(--shadow-glow)]" : "h-full border-border/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex h-full flex-col p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: plan.name }),
          plan.featured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { children: "Most adopted" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: plan.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-3xl font-semibold", children: plan.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: plan.unit })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 flex-1 space-y-2.5", children: plan.features.map((feature) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 size-4 shrink-0 text-primary" }),
          feature
        ] }, feature)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-7", variant: plan.featured ? "default" : "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/auth", search: {
          mode: "signup"
        }, children: plan.price === "Custom" ? "Talk to us" : "Start evaluation" }) })
      ] }) }) }, plan.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "border-y border-border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-5 py-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h2, { ...fadeUp, className: "text-3xl font-semibold md:text-4xl", children: "Frequently asked questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "mt-10", children: faqs.map((faq) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: faq.q, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left text-base", children: faq.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-sm leading-relaxed text-muted-foreground", children: faq.a })
      ] }, faq.q)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "mx-auto max-w-6xl px-5 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { ...fadeUp, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold md:text-4xl", children: "Book a walkthrough with a quality engineer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Tell us which processes hurt most today. We'll show the exact record flow — deviation to CAPA to effectiveness check — on your terminology." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "45-minute technical walkthrough, no slideware" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Sandbox tenant with your document taxonomy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Validation and qualification documentation review" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { ...fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "grid gap-4", onSubmit: (event) => {
        event.preventDefault();
        event.currentTarget.reset();
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-name", children: "Full name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "contact-name", placeholder: "Priya Raghavan", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-email", children: "Work email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "contact-email", type: "email", placeholder: "priya@company.com", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-org", children: "Organisation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "contact-org", placeholder: "Company and site", required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "contact-message", children: "What should we focus on?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "contact-message", rows: 4, placeholder: "Deviation backlog, SOP control, upcoming inspection…" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", children: "Request walkthrough" })
      ] }) }) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MarketingFooter, {})
  ] });
}
export {
  Landing as component
};
