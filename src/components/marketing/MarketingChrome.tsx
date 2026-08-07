import { Link } from "@tanstack/react-router";
import { Hexagon, Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/lib/theme";

const links = [
  { label: "Platform", href: "#platform" },
  { label: "Modules", href: "#modules" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative flex size-9 items-center justify-center rounded-md bg-primary/12 text-primary">
        <Hexagon className="size-5" strokeWidth={2.2} />
        <span className="absolute size-1.5 rounded-full bg-primary" />
      </span>
      {!compact && (
        <span className="font-display text-base font-semibold tracking-tight">
          QualitySphere <span className="text-muted-foreground">QMS</span>
        </span>
      )}
    </span>
  );
}

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle color theme">
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}

export function MarketingNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/">
          <BrandMark />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
            <Link to="/auth">Sign in</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/auth" search={{ mode: "signup" }}>
              Request access
            </Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="mt-10 flex flex-col gap-1">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <BrandMark />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Electronic quality records, workflows and AI assistance for regulated manufacturing and
            laboratories.
          </p>
        </div>
        <FooterColumn
          title="Platform"
          items={["Document control", "CAPA", "Deviations", "Audits", "Risk", "Training"]}
        />
        <FooterColumn
          title="Compliance"
          items={["21 CFR Part 11", "EU GMP Annex 11", "ISO 9001", "ISO 13485", "ICH Q10", "GAMP 5"]}
        />
        <FooterColumn title="Company" items={["About", "Security", "Contact", "Status", "Legal"]} />
      </div>
      <div className="border-t border-border px-5 py-5">
        <p className="mx-auto max-w-6xl text-xs text-muted-foreground">
          © 2026 QualitySphere QMS. An original quality management platform. All product names
          referenced elsewhere belong to their respective owners.
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="text-sm text-muted-foreground">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
