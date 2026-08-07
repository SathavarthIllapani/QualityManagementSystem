import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  CheckCircle2,
  FileText,
  ClipboardCheck,
  GitCompareArrows,
  AlertTriangle,
  ShieldCheck,
  Radar,
  GraduationCap,
  Factory,
  MessageSquareWarning,
  Wrench,
  Gauge,
  FlaskConical,
  Users,
  BarChart3,
  Workflow,
  PenLine,
  Search,
  Quote,
} from "lucide-react";

import { MarketingFooter, MarketingNav } from "@/components/marketing/MarketingChrome";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QualitySphere QMS — AI-Powered Quality Management Platform" },
      {
        name: "description",
        content:
          "Run document control, CAPA, deviations, audits, risk, training and supplier quality on one validated-ready platform with AI drafting and complete audit trails.",
      },
      { property: "og:title", content: "QualitySphere QMS — AI-Powered Quality Management" },
      {
        property: "og:description",
        content:
          "One platform for GxP quality: controlled documents, CAPA, deviations, audits, risk, training and AI assistance.",
      },
    ],
  }),
  component: Landing,
});

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
};

const modules = [
  { icon: FileText, name: "Document Control", desc: "SOPs, templates, versions, periodic review, watermarking." },
  { icon: ClipboardCheck, name: "CAPA", desc: "Root cause, action plans, effectiveness verification." },
  { icon: GitCompareArrows, name: "Change Control", desc: "Impact assessment through verified implementation." },
  { icon: AlertTriangle, name: "Deviations", desc: "Classification, investigation, trending, CAPA linkage." },
  { icon: ShieldCheck, name: "Audits", desc: "Internal, external and supplier audits with checklists." },
  { icon: Radar, name: "Risk", desc: "Risk register, matrix, FMEA with RPN and residual risk." },
  { icon: GraduationCap, name: "Training", desc: "Matrix, assessments, certificates, expiry alerts." },
  { icon: Factory, name: "Suppliers", desc: "Qualification, evaluation, scorecards, audits." },
  { icon: MessageSquareWarning, name: "Complaints", desc: "Intake, investigation, escalation, closure." },
  { icon: Wrench, name: "Equipment", desc: "Assets, maintenance history, certificates, alerts." },
  { icon: Gauge, name: "Calibration", desc: "Due schedules, certificates, out-of-tolerance handling." },
  { icon: FlaskConical, name: "Validation", desc: "IQ / OQ / PQ protocols, execution and reports." },
  { icon: Users, name: "User Management", desc: "Roles, permissions, departments, sessions." },
  { icon: BarChart3, name: "Reports", desc: "Compliance analytics with PDF, Excel and CSV export." },
  { icon: Workflow, name: "Workflow Engine", desc: "Sequential, parallel and conditional approvals." },
];

const capabilities = [
  {
    icon: Workflow,
    title: "Configurable workflow engine",
    body: "Design sequential, parallel and conditional approval routes per record type, with escalation, delegation and due-date reminders.",
  },
  {
    icon: PenLine,
    title: "Part 11 electronic signatures",
    body: "Re-authenticated signing with meaning, reason and timestamp, written to an immutable audit trail that nobody can edit.",
  },
  {
    icon: Bot,
    title: "AI across every record",
    body: "Draft SOPs, summarise investigations, suggest root causes, detect duplicates and predict approval delays without leaving the record.",
  },
  {
    icon: Search,
    title: "Natural-language search",
    body: "Ask “open critical deviations in Granulation since April” and get filtered, permission-aware results across all modules.",
  },
];

const industries = [
  "Pharmaceuticals",
  "Biotechnology",
  "Medical Devices",
  "Healthcare",
  "Manufacturing",
  "Food & Beverage",
  "Cosmetics",
  "Chemicals",
  "Laboratories",
];

const standards = [
  "FDA 21 CFR Part 11",
  "EU GMP Annex 11",
  "ISO 9001",
  "ISO 13485",
  "ICH Q10",
  "GAMP 5",
  "ALCOA+",
];

const testimonials = [
  {
    quote:
      "We consolidated four disconnected trackers into one record model. Deviation-to-CAPA hand-off now takes minutes instead of a week of email.",
    name: "Head of Quality Assurance",
    org: "Sterile injectables CDMO, 900 employees",
  },
  {
    quote:
      "Inspection readiness is the difference. Every signature, revision and comment is reconstructable from a single audit trail view.",
    name: "Director, Regulatory Compliance",
    org: "Class II medical device manufacturer",
  },
  {
    quote:
      "The AI drafting cut SOP authoring time roughly in half, and reviewers still control every word before it becomes effective.",
    name: "QA Documentation Lead",
    org: "Nutraceutical manufacturing group",
  },
];

const plans = [
  {
    name: "Essential",
    price: "$18",
    unit: "per user / month",
    desc: "Document control and training for small quality teams.",
    features: ["Document control", "Training matrix", "Audit trail", "Email notifications", "Up to 50 users"],
  },
  {
    name: "Professional",
    price: "$39",
    unit: "per user / month",
    desc: "The full quality event lifecycle with AI assistance.",
    features: [
      "All Essential features",
      "CAPA, deviations, change control",
      "Audits, risk, suppliers",
      "Workflow engine + e-signatures",
      "AI assistant and drafting",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    unit: "annual agreement",
    desc: "Multi-site governance, SSO and validation support.",
    features: [
      "All Professional features",
      "Multi-site and multi-entity",
      "SSO, SAML and 2FA",
      "Validation documentation pack",
      "Dedicated success engineer",
    ],
  },
];

const faqs = [
  {
    q: "Is QualitySphere suitable for FDA-regulated records?",
    a: "The platform is built for 21 CFR Part 11 and EU GMP Annex 11 expectations: unique user accounts, re-authenticated electronic signatures with meaning, immutable audit trails, version control and retention rules. Your validation team still performs qualification against your intended use.",
  },
  {
    q: "How configurable are the approval workflows?",
    a: "Every record type has its own workflow definition. You can chain sequential steps, run parallel review groups, add conditional branches based on severity or department, and set escalation and reminder rules per step.",
  },
  {
    q: "What exactly does the AI do — and what does it never do?",
    a: "AI drafts, summarises, classifies and suggests. It never approves, signs or closes a record. Every AI output is presented as a draft that a qualified user must review, edit and sign.",
  },
  {
    q: "Can we migrate existing SOPs and open quality events?",
    a: "Yes. Documents import with their revision history and effective dates, and open CAPAs, deviations and change controls can be loaded with their current workflow state and owners.",
  },
  {
    q: "How is data segregated across sites?",
    a: "Records are scoped by organisation, site and department, and access is enforced by role and permission on every read and write, not only in the interface.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingNav />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="surface-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-28">
          <motion.div {...fadeUp} className="max-w-3xl">
            <Badge variant="outline" className="gap-1.5 border-primary/30 bg-primary/8 text-primary">
              <BadgeCheck className="size-3.5" /> Built for GxP and ISO regulated operations
            </Badge>
            <h1 className="mt-6 text-4xl leading-[1.08] font-semibold md:text-6xl">
              The quality system your
              <span className="text-gradient-brand"> inspectors can follow</span> and your teams
              actually use.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              QualitySphere QMS connects controlled documents, CAPA, deviations, change control,
              audits, risk, training and supplier quality on one workflow engine — with AI that
              drafts the paperwork and an audit trail that never forgets.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link to="/auth" search={{ mode: "signup" }}>
                  Start free evaluation <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#modules">Explore the 15 modules</a>
              </Button>
            </div>
            <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
              {[
                ["15", "quality modules"],
                ["100%", "actions audit-trailed"],
                ["11", "configurable roles"],
                ["<1 day", "workflow reconfiguration"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl font-semibold text-foreground">{value}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="platform" className="mx-auto max-w-6xl px-5 py-20">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="text-3xl font-semibold md:text-4xl">One record model, four hard problems solved</h2>
          <p className="mt-4 text-muted-foreground">
            Quality software fails when workflows are rigid, signatures are cosmetic and search
            doesn't reach the evidence. QualitySphere is designed around those four failures.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {capabilities.map((cap) => (
            <motion.div key={cap.title} {...fadeUp}>
              <Card className="h-full border-border/80">
                <CardContent className="p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-md bg-primary/12 text-primary">
                    <cap.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cap.body}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold md:text-4xl">Fifteen modules, one governance layer</h2>
              <p className="mt-4 text-muted-foreground">
                Every module shares the same workflow states, signature model, comment threads and
                audit trail — so cross-module linkage is native, not an integration project.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/auth">See a live dashboard</Link>
            </Button>
          </motion.div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod) => (
              <motion.div key={mod.name} {...fadeUp}>
                <div className="group flex h-full gap-4 rounded-lg border border-border bg-background p-5 transition-colors hover:border-primary/40">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover:bg-primary/12 group-hover:text-primary">
                    <mod.icon className="size-4.5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{mod.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{mod.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries + standards */}
      <section id="industries" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-semibold md:text-4xl">Configured for regulated industries</h2>
            <p className="mt-4 text-muted-foreground">
              Terminology, severity scales, workflow steps and retention rules are configurable per
              industry, so the system speaks your inspectors' language.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {industries.map((industry) => (
                <Badge key={industry} variant="secondary" className="px-3 py-1.5 text-sm font-normal">
                  {industry}
                </Badge>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp}>
            <Card className="border-border/80">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold">Designed against the standards you're audited on</h3>
                <ul className="mt-5 space-y-3">
                  {standards.map((standard) => (
                    <li key={standard} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2 className="size-4 text-primary" />
                      {standard}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs text-muted-foreground">
                  QualitySphere provides the controls; your organisation owns qualification and
                  validation for its intended use.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <motion.h2 {...fadeUp} className="max-w-2xl text-3xl font-semibold md:text-4xl">
            What quality leaders tell us after go-live
          </motion.h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <motion.div key={item.name} {...fadeUp}>
                <Card className="h-full border-border/80">
                  <CardContent className="flex h-full flex-col p-6">
                    <Quote className="size-5 text-primary" />
                    <p className="mt-4 flex-1 text-sm leading-relaxed">{item.quote}</p>
                    <div className="mt-6 border-t border-border pt-4">
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.org}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-5 py-20">
        <motion.div {...fadeUp} className="max-w-2xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Transparent pricing per named user</h2>
          <p className="mt-4 text-muted-foreground">
            Every plan includes unlimited records, unlimited audit trail history and role-based
            access control.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <motion.div key={plan.name} {...fadeUp}>
              <Card
                className={
                  plan.featured
                    ? "h-full border-primary/50 shadow-[var(--shadow-glow)]"
                    : "h-full border-border/80"
                }
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    {plan.featured && <Badge>Most adopted</Badge>}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{plan.desc}</p>
                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="font-display text-3xl font-semibold">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.unit}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-7"
                    variant={plan.featured ? "default" : "outline"}
                  >
                    <Link to="/auth" search={{ mode: "signup" }}>
                      {plan.price === "Custom" ? "Talk to us" : "Start evaluation"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-border bg-card">
        <div className="mx-auto max-w-3xl px-5 py-20">
          <motion.h2 {...fadeUp} className="text-3xl font-semibold md:text-4xl">
            Frequently asked questions
          </motion.h2>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq) => (
              <AccordionItem key={faq.q} value={faq.q}>
                <AccordionTrigger className="text-left text-base">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-semibold md:text-4xl">Book a walkthrough with a quality engineer</h2>
            <p className="mt-4 text-muted-foreground">
              Tell us which processes hurt most today. We'll show the exact record flow — deviation to
              CAPA to effectiveness check — on your terminology.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              <li>45-minute technical walkthrough, no slideware</li>
              <li>Sandbox tenant with your document taxonomy</li>
              <li>Validation and qualification documentation review</li>
            </ul>
          </motion.div>
          <motion.div {...fadeUp}>
            <Card className="border-border/80">
              <CardContent className="p-6">
                <form
                  className="grid gap-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                    (event.currentTarget as HTMLFormElement).reset();
                  }}
                >
                  <div className="grid gap-2">
                    <Label htmlFor="contact-name">Full name</Label>
                    <Input id="contact-name" placeholder="Priya Raghavan" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact-email">Work email</Label>
                    <Input id="contact-email" type="email" placeholder="priya@company.com" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact-org">Organisation</Label>
                    <Input id="contact-org" placeholder="Company and site" required />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact-message">What should we focus on?</Label>
                    <Textarea id="contact-message" rows={4} placeholder="Deviation backlog, SOP control, upcoming inspection…" />
                  </div>
                  <Button type="submit">Request walkthrough</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
