import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/dyadvex/SiteChrome";

export const Route = createFileRoute("/performance")({
  head: () => ({
    meta: [
      { title: "Performance & Verification — dyadvex" },
      {
        name: "description",
        content:
          "Live paper-trade verification layer. Don't believe us — watch the system think. Trade feed, equity curve, drawdown, and replay log.",
      },
      { property: "og:title", content: "Performance & Verification — dyadvex" },
      {
        property: "og:description",
        content:
          "The trades are the audit. Live paper feed via Alpaca replaces accounting certifications and curated track records.",
      },
    ],
  }),
  component: PerformancePage,
});

// Deterministic mock data — to be replaced with live Alpaca feed
const MOCK_TRADES = [
  { ts: "2026-04-23 16:00:04", sym: "NFLX", tag: "earnings · t3", side: "LONG VOL", pnl: "+2.41%" },
  { ts: "2026-04-23 09:31:12", sym: "SPY", tag: "macro", side: "MEAN-REV", pnl: "+0.18%" },
  { ts: "2026-04-22 16:00:08", sym: "TSLA", tag: "earnings · t2", side: "SHORT γ", pnl: "+1.84%" },
  { ts: "2026-04-22 09:30:55", sym: "QQQ", tag: "macro", side: "GAP-FADE", pnl: "−0.07%" },
  { ts: "2026-04-21 16:00:02", sym: "GOOG", tag: "earnings · t2", side: "LONG VOL", pnl: "+0.92%" },
  { ts: "2026-04-21 09:30:48", sym: "GLD", tag: "macro", side: "MEAN-REV", pnl: "+0.11%" },
  { ts: "2026-04-18 16:00:11", sym: "NVDA", tag: "earnings · t3", side: "LONG VOL", pnl: "+3.66%" },
  { ts: "2026-04-18 09:31:02", sym: "TLT", tag: "macro", side: "MEAN-REV", pnl: "−0.04%" },
  { ts: "2026-04-17 16:00:07", sym: "META", tag: "earnings · t1", side: "SHORT γ", pnl: "+0.58%" },
  { ts: "2026-04-17 09:30:51", sym: "IWM", tag: "macro", side: "GAP-FADE", pnl: "+0.21%" },
];

// Deterministic equity curve
const EQUITY = Array.from({ length: 60 }, (_, i) => {
  const drift = i * 0.42;
  const wiggle = Math.sin(i * 0.6) * 1.4 + Math.cos(i * 0.31) * 0.9;
  return 100 + drift + wiggle;
});

const DRAWDOWN = Array.from({ length: 60 }, (_, i) => {
  const v = -(Math.abs(Math.sin(i * 0.42)) * 2.6 + Math.abs(Math.cos(i * 0.27)) * 0.7);
  return Math.max(v, -4.1);
});

function toPath(values: number[], w: number, h: number, pad = 6) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = (w - pad * 2) / (values.length - 1);
  return values
    .map((v, i) => {
      const x = pad + i * step;
      const y = pad + (h - pad * 2) * (1 - (v - min) / range);
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
}

function PerformancePage() {
  const equityPath = toPath(EQUITY, 800, 240);
  const ddPath = toPath(DRAWDOWN, 800, 160);

  return (
    <PageShell
      numeral="V"
      eyebrow="Performance & Verification"
      title={<>Don't believe us. <em>Watch the system think.</em></>}
      lede="The market is full of fabricated track records, optimized backtests, and selectively audited performance — even with top accounting firms attached. We replace all of it with a $5/month live paper feed. Connect an Alpaca paper account, mirror the engine inside your own brokerage sandbox, and verify execution for yourself. The trades are the audit."
    >
      <section className="mt-8 grid gap-px bg-gold/15 md:grid-cols-4">
        {[
          ["status", "● paper feed", "preview"],
          ["trades shown", "10", "of recent window"],
          ["equity (mock)", "+24.6%", "since inception"],
          ["max DD (mock)", "−4.1%", "within target"],
        ].map(([k, v, sub]) => (
          <div key={k} className="bg-background p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
              {k}
            </div>
            <div className="mt-2 font-display text-2xl text-ivory">{v}</div>
            <div className="font-mono text-[10px] text-muted-foreground">{sub}</div>
          </div>
        ))}
      </section>

      <section className="mt-12 border border-gold/20 bg-card/40 p-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
              Equity curve · cumulative
            </div>
            <div className="mt-2 font-display text-2xl">Sample data — live feed pending</div>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            window · last 60 sessions
          </div>
        </div>
        <svg viewBox="0 0 800 240" className="mt-6 h-60 w-full">
          <defs>
            <linearGradient id="eq-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.78 0.12 80)" stopOpacity="0.35" />
              <stop offset="100%" stopColor="oklch(0.78 0.12 80)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={`${equityPath} L 794,234 L 6,234 Z`} fill="url(#eq-fill)" />
          <path d={equityPath} fill="none" stroke="oklch(0.78 0.12 80)" strokeWidth="1.5" />
          <line x1="0" y1="120" x2="800" y2="120" stroke="oklch(0.85 0.07 85)" strokeOpacity="0.08" />
        </svg>
      </section>

      <section className="mt-8 border border-gold/20 bg-card/40 p-8">
        <div className="flex items-center justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
            Drawdown · rolling
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            target ceiling · −4.1%
          </div>
        </div>
        <svg viewBox="0 0 800 160" className="mt-6 h-40 w-full">
          <path d={`${ddPath} L 794,154 L 6,154 Z`} fill="oklch(0.55 0.2 25 / 0.18)" />
          <path d={ddPath} fill="none" stroke="oklch(0.55 0.2 25)" strokeWidth="1.2" />
          <line x1="0" y1="6" x2="800" y2="6" stroke="oklch(0.85 0.07 85)" strokeOpacity="0.1" />
        </svg>
      </section>

      <section className="mt-8 border border-gold/20 bg-card/40">
        <div className="flex items-center justify-between border-b border-gold/15 px-6 py-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
            Live paper trade feed
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            timestamp · symbol · regime · side · realized
          </div>
        </div>
        <div className="divide-y divide-gold/10 font-mono text-xs">
          {MOCK_TRADES.map((t, i) => (
            <div
              key={i}
              className="grid grid-cols-[1.4fr_0.6fr_1fr_0.8fr_0.6fr] items-center gap-3 px-6 py-3 text-muted-foreground"
            >
              <span>{t.ts}</span>
              <span className="text-ivory">{t.sym}</span>
              <span className="text-gold/80 uppercase tracking-[0.2em] text-[10px]">
                {t.tag}
              </span>
              <span className="uppercase tracking-[0.2em] text-[10px]">{t.side}</span>
              <span
                className={
                  t.pnl.startsWith("−") ? "text-destructive" : "text-ivory"
                }
              >
                {t.pnl}
              </span>
            </div>
          ))}
        </div>
        <div className="border-t border-gold/15 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          ◆ sample data shown · live Alpaca paper feed wires in at launch
        </div>
      </section>

      <section className="mt-16 grid gap-10 border-t border-gold/15 pt-12 md:grid-cols-3">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
            What this replaces
          </div>
          <ul className="mt-4 space-y-2 font-sans text-sm text-muted-foreground">
            <li>◆ external audit firms</li>
            <li>◆ accounting certifications</li>
            <li>◆ third-party “track record validation”</li>
            <li>◆ trust-me memos</li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
            How verification works
          </div>
          <ol className="mt-4 space-y-2 font-sans text-sm text-muted-foreground">
            <li>01 · Subscribe to paper tier ($5/mo)</li>
            <li>02 · Connect your own Alpaca paper account</li>
            <li>03 · Watch live signals execute in your sandbox</li>
            <li>04 · Audit entries, exits, and timing directly</li>
          </ol>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
            Start verifying
          </div>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
            Cheaper than an auditor. Faster than a quarterly report. Impossible
            to fabricate. Watch the system think — inside your own brokerage.
          </p>
          <Link
            to="/"
            hash="waitlist"
            className="mt-6 inline-flex items-center gap-2 border border-gold bg-gold px-5 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-transparent hover:text-gold"
          >
            Request paper access →
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
