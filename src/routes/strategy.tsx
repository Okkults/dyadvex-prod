import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/dyadvex/SiteChrome";

export const Route = createFileRoute("/strategy")({
  head: () => ({
    meta: [
      { title: "Strategies — dyadvex" },
      {
        name: "description",
        content:
          "Two regimes, three risk tiers. Structured per-strategy specification: signal type, horizon, regime conditions, and failure mode.",
      },
      { property: "og:title", content: "Strategies — dyadvex" },
      {
        property: "og:description",
        content:
          "Macro overnight and earnings event-driven strategies. Specifications, not formulas.",
      },
    ],
  }),
  component: StrategyPage,
});

const STRATEGIES = [
  {
    tag: "II.a",
    name: "Macro Overnight",
    signal: "Mean-reversion + kernel regression on the open-state distribution",
    horizon: "≈ 14 hours (close → open)",
    instruments: "SPY · QQQ · IWM · GLD · TLT",
    tier: "Steady allocator — outside the earnings tier system",
    regime: "Quiet to moderately volatile macro tape with intact regime structure",
    failure: "Consecutive regime misclassification — a structural trend shift mistaken for mean-reversion failure",
    profile: "Low variance · high frequency · steady compounding",
  },
  {
    tag: "II.b.1",
    name: "Earnings — Conservative",
    signal: "Vol-surface inference on low-to-moderate conviction events",
    horizon: "Single event window (entry pre-print, exit post-print)",
    instruments: "Single-name equities + options",
    tier: "Tier 1 · ~10% of event capital",
    regime: "Mixed conviction, normal implied-vol pricing",
    failure: "Volatility clustering across adjacent prints distorts the modeled distribution",
    profile: "Capital preservation · tight position caps · asymmetry harvesting",
  },
  {
    tag: "II.b.2",
    name: "Earnings — Standard",
    signal: "Core volatility mispricing model — implied vs realized divergence",
    horizon: "Single event window",
    instruments: "Single-name equities + options",
    tier: "Tier 2 · ~20% of event capital",
    regime: "Stable cross-sectional vol regime, balanced positioning imbalance",
    failure: "Sudden cross-sector vol expansion that breaks the implied/realized assumption",
    profile: "Primary engine of expected value · balanced risk-reward",
  },
  {
    tag: "II.b.3",
    name: "Earnings — Aggressive",
    signal: "High-skew, high-conviction setups with convex payoff structure",
    horizon: "Single event window",
    instruments: "Single-name equities + options",
    tier: "Tier 3 · ~30% of event capital · kill-switch armed",
    regime: "Extreme positioning imbalance or large implied-vs-realized divergence",
    failure: "Tail expansion in the wrong direction during high-skew prints",
    profile: "Convex tail capture · accepts wider variance for asymmetric upside",
  },
];

function StrategyPage() {
  return (
    <PageShell
      numeral="III"
      eyebrow="Strategies"
      title={<>Two regimes. <em>Three earnings tiers.</em></>}
      lede="Specifications, not formulas. Each strategy is documented by its signal type, time horizon, regime conditions, and failure mode — not by its alpha logic. Full disclosure of features or model weights would collapse the inefficiencies they exploit."
    >
      <div className="mt-8 space-y-px bg-gold/15">
        {STRATEGIES.map((s) => (
          <article key={s.tag} className="bg-background p-8 md:p-10">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                Strategy {s.tag}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {s.profile}
              </div>
            </div>
            <h3 className="mt-4 font-display text-3xl leading-tight text-ivory md:text-4xl">
              {s.name}
            </h3>

            <dl className="mt-8 grid gap-x-12 gap-y-6 md:grid-cols-2">
              {[
                ["Signal type", s.signal],
                ["Time horizon", s.horizon],
                ["Instruments", s.instruments],
                ["Risk tier", s.tier],
                ["Expected regime", s.regime],
                ["Failure mode", s.failure],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-gold/15 pt-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
                    {k}
                  </dt>
                  <dd className="mt-2 font-sans text-sm leading-relaxed text-ivory">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      <section className="mt-16 grid gap-10 border-t border-gold/15 pt-12 md:grid-cols-2">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
            Expected move distribution — earnings
          </div>
          <ul className="mt-6 space-y-3 font-sans text-sm text-muted-foreground">
            <li className="flex justify-between border-b border-gold/15 pb-3">
              <span>typical realized move</span>
              <span className="text-ivory">5 – 15%</span>
            </li>
            <li className="flex justify-between border-b border-gold/15 pb-3">
              <span>tail expansion regime</span>
              <span className="text-gold">30%+</span>
            </li>
            <li className="flex justify-between border-b border-gold/15 pb-3">
              <span>distribution shape</span>
              <span className="text-ivory">non-normal · skewed · fat-tailed</span>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
            Capacity discipline
          </div>
          <p className="mt-6 font-sans text-sm leading-relaxed text-muted-foreground">
            Each event-driven trade is capped at ~5% of observable event
            liquidity. Less capacity means less return — but also bounded
            slippage when a move goes wrong. Capacity is enforced by code,
            not by discretion.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
