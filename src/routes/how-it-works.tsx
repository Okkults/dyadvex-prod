import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/dyadvex/SiteChrome";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — dyadvex" },
      {
        name: "description",
        content:
          "The dyadvex pipeline: data, model, signal, execution, risk. Five steps from raw market data to a sized trade.",
      },
      { property: "og:title", content: "How It Works — dyadvex" },
      {
        property: "og:description",
        content:
          "Five-step operational pipeline. No philosophy — just the path from data to a sized trade.",
      },
    ],
  }),
  component: HowItWorksPage,
});

const STEPS = [
  {
    num: "01",
    title: "Data",
    body: "Live and historical market data ingested under point-in-time discipline. Every observation is timestamped to the exact moment it would have been available.",
    detail: "price · volume · implied vol surface · event calendar",
  },
  {
    num: "02",
    title: "Model",
    body: "Unified statistical engine — kernel regression, mean-reversion operators, hidden-state inference — runs against the reconstructed market state. The model rewrites parts of itself as prediction error and regime drift accumulate.",
    detail: "kernel regression · OU mean-reversion · vol-surface inference",
  },
  {
    num: "03",
    title: "Signal",
    body: "The model emits a probabilistic decision: direction, conviction, regime tag (macro / earnings / volatility state), and a recommended risk tier (Conservative / Standard / Aggressive).",
    detail: "p(state) · regime tag · tier assignment",
  },
  {
    num: "04",
    title: "Execution",
    body: "Orders route through the Alpaca API into the subscriber's own brokerage account. Sizing is slippage-aware and capped at ~5% of observable event liquidity. Same engine runs in paper and live.",
    detail: "Alpaca · slippage-aware · capacity-bounded",
  },
  {
    num: "05",
    title: "Risk layer",
    body: "Kelly-bounded position sizing, max daily loss thresholds, kill-switch logic, and exposure throttling after drawdown clusters. If the system drifts out of regime, exposure is reduced automatically.",
    detail: "F* ≈ 0.14 · max DD −4.1% · auto-throttle",
  },
];

function HowItWorksPage() {
  return (
    <PageShell
      numeral="II"
      eyebrow="Operational Pipeline"
      title={<>Five steps. <em>Data to trade.</em></>}
      lede="No philosophy on this page. Just the operational path a single trade takes through dyadvex — from raw market data to a sized order in your Alpaca account."
    >
      <div className="mt-8 grid gap-px bg-gold/15 md:grid-cols-5">
        {STEPS.map((s) => (
          <div key={s.num} className="bg-background p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
              {s.num}
            </div>
            <h3 className="mt-3 font-display text-2xl leading-tight">{s.title}</h3>
            <p className="mt-4 font-sans text-xs leading-relaxed text-muted-foreground">
              {s.body}
            </p>
            <div className="mt-6 border-t border-gold/15 pt-3 font-mono text-[10px] text-muted-foreground">
              {s.detail}
            </div>
          </div>
        ))}
      </div>

      <section className="mt-20 border border-gold/20 bg-card/40 p-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
          Pipeline as flow
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.25em]">
          {STEPS.map((s, i) => (
            <div key={s.num} className="flex items-center gap-3">
              <span className="border border-gold/40 px-3 py-2 text-ivory">
                {s.title}
              </span>
              {i < STEPS.length - 1 && <span className="text-gold">→</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-10 border-t border-gold/15 pt-12 md:grid-cols-3">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
            What is shared with users
          </div>
          <ul className="mt-4 space-y-2 font-sans text-sm text-muted-foreground">
            <li>◆ live trade outputs</li>
            <li>◆ execution timing</li>
            <li>◆ realized PnL</li>
            <li>◆ regime classification</li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
            What stays protected
          </div>
          <ul className="mt-4 space-y-2 font-sans text-sm text-muted-foreground">
            <li>◆ feature engineering</li>
            <li>◆ model weights</li>
            <li>◆ dataset composition</li>
            <li>◆ signal construction</li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
            Why
          </div>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
            Full disclosure of feature engineering or model weights would
            collapse the microstructure inefficiencies the system harvests.
            You see decisions, not transformations.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
