import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Mark() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" className="text-gold">
      <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="0.6" />
      <path
        d="M4 22 C 10 6, 22 26, 28 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" />
    </svg>
  );
}

const NAV_LINKS = [
  { to: "/about", label: "System" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/strategy", label: "Strategy" },
  { to: "/risk", label: "Risk" },
  { to: "/performance", label: "Performance" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteNav() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6">
        <Link to="/" className="flex items-center gap-3">
          <Mark />
          <span className="font-display text-2xl tracking-tight">dyadvex</span>
          <span className="ml-2 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:inline">
            est. MMXXV
          </span>
        </Link>
        <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="transition hover:text-ivory"
              activeProps={{ className: "text-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/"
          hash="waitlist"
          className="border border-gold/50 bg-transparent px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-gold transition hover:bg-gold hover:text-primary-foreground"
        >
          Request a seat
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="hairline-t">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <Mark />
          <span className="font-display text-xl">dyadvex</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            quantitative · machine · intelligence
          </span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {NAV_LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-ivory">
              {l.label}
            </Link>
          ))}
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          © MMXXV — not an offer to sell securities
        </div>
      </div>
    </footer>
  );
}

export function PageShell({
  numeral,
  eyebrow,
  title,
  lede,
  children,
}: {
  numeral: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="relative overflow-hidden">
        <div className="bg-aurora absolute inset-0 -z-10 opacity-70" />
        <div className="grid-paper absolute inset-0 -z-10 opacity-30" />
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-16 md:pt-24">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
            {numeral} — {eyebrow}
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1] text-ivory md:text-7xl">
            {title}
          </h1>
          {lede && (
            <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
              {lede}
            </p>
          )}
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 pb-32">{children}</div>
      <SiteFooter />
    </main>
  );
}

export function SectionBlock({
  numeral,
  heading,
  children,
}: {
  numeral: string;
  heading: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="grid gap-10 border-t border-gold/15 py-16 md:grid-cols-[200px_1fr]">
      <div>
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
          {numeral}
        </div>
        <h2 className="mt-3 font-display text-2xl leading-tight md:text-3xl">
          {heading}
        </h2>
      </div>
      <div className="space-y-6 font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
        {children}
      </div>
    </section>
  );
}

export function Callout({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="border border-gold/20 bg-card/60 p-6">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/80">
        {label}
      </div>
      <div className="mt-3 font-display text-xl leading-snug text-ivory">{children}</div>
    </div>
  );
}
