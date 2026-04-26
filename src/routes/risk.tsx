import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, Callout } from "@/components/dyadvex/SiteChrome";

export const Route = createFileRoute("/risk")({
  head: () => ({
    meta: [
      { title: "Risk Architecture — dyadvex" },
      {
        name: "description",
        content:
          "Risk is partitioned, not averaged. Failure modes, controls, and the capital loss reality of a quantitative system.",
      },
      { property: "og:title", content: "Risk Architecture — dyadvex" },
      {
        property: "og:description",
        content:
          "Documented failure modes, system-level controls, and the capital loss reality of running a quantitative engine.",
      },
    ],
  }),
  component: RiskPage,
});

function RiskPage() {
  return (
    <PageShell
      numeral="IV"
      eyebrow="Risk Architecture"
      title={<>Risk is <em>partitioned,</em> not averaged.</>}
      lede="Each regime has independent failure modes. We do not eliminate risk — we price it, partition it, and control it across regimes. Losses are expected in clustered regimes; protection comes from position sizing, not prediction accuracy."
    >
      <SectionBlock numeral="A" heading="Risk philosophy">
        <p>
          A single portfolio-wide risk number is a marketing artifact. Real
          risk lives in the failure modes of each regime, and those failure
          modes are not correlated. dyadvex treats macro overnight exposure
          and earnings event exposure as two separate books, each with its
          own kill-switches and its own capacity.
        </p>
        <Callout label="Operating principle">
          Losses are expected in clustered regimes. Protection comes from
          position sizing, not from prediction accuracy.
        </Callout>
      </SectionBlock>

      <SectionBlock numeral="B" heading="Failure modes — documented">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              k: "Earnings · volatility clustering",
              v: "Adjacent prints distort the modeled vol distribution — implied/realized assumptions break down across the cluster.",
            },
            {
              k: "Macro · structural trend shift",
              v: "A regime transition is misread as mean-reversion failure. Loss streaks here are the signal that the model is out of regime.",
            },
            {
              k: "Liquidity gap · slippage divergence",
              v: "Realized fills diverge from modeled fills during thin-liquidity windows. Sizing assumptions silently invalidate.",
            },
            {
              k: "Model decay · regime drift",
              v: "Feature stability degrades as market microstructure evolves. Without continuous recalibration, edge fades quietly.",
            },
            {
              k: "Tail expansion · wrong-side skew",
              v: "Aggressive earnings tier accepts convex variance. A 30%+ move in the adverse direction is a documented possibility, not a black swan.",
            },
            {
              k: "Execution venue · single point of failure",
              v: "Alpaca outages or rate-limit events delay execution. Modeled timing assumptions break for the duration.",
            },
          ].map((f) => (
            <div key={f.k} className="border border-gold/20 bg-card/40 p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/80">
                {f.k}
              </div>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                {f.v}
              </p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock numeral="C" heading="Controls — always on">
        <ul className="space-y-4 font-sans text-sm text-muted-foreground">
          {[
            ["Kelly-bounded sizing", "F* ≈ 0.14 — every position sized as a fraction of the bankroll, never a fixed dollar amount."],
            ["Portfolio-level max daily loss", "Hard threshold. Hit it and the system flattens for the session."],
            ["Exposure throttling", "Drawdown clusters automatically reduce per-event size in the next window."],
            ["Volatility regime detection", "Risk-on / risk-off scaling. Aggressive tier deactivates when implied vol regimes shift."],
            ["Liquidity-aware sizing", "Per-event exposure capped at ~5% of observable liquidity. Slippage stays bounded."],
            ["Kill-switch logic", "Tier 3 (Aggressive) carries an armed kill-switch under adverse volatility shifts mid-event."],
            ["Trading pause", "If model performance degrades beyond statistical thresholds, the engine pauses until regime stabilizes."],
          ].map(([k, v]) => (
            <li key={k} className="grid gap-2 border-b border-gold/15 pb-4 md:grid-cols-[260px_1fr]">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold">
                {k}
              </span>
              <span className="text-ivory">{v}</span>
            </li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock numeral="D" heading="Risk numbers">
        <div className="grid gap-px bg-gold/15 md:grid-cols-4">
          {[
            ["F*", "0.14", "Kelly fraction"],
            ["max DD", "−4.1%", "rolling 12m target"],
            ["per-event cap", "5%", "of observable liquidity"],
            ["earnings tiers", "10 / 20 / 30%", "of event capital"],
          ].map(([k, v, sub]) => (
            <div key={k} className="bg-background p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
                {k}
              </div>
              <div className="mt-2 font-display text-3xl text-ivory">{v}</div>
              <div className="font-mono text-[10px] text-muted-foreground">{sub}</div>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock numeral="E" heading="Capital loss — the honest statement">
        <Callout label="No guarantee of persistence">
          Strategies degrade over time. Regimes shift. Capacity is a real
          constraint, not a marketing point. dyadvex makes no return
          guarantee on any individual trade — only a mathematical edge over
          a large number of independent trials, sized so that no single
          outcome can break the bankroll.
        </Callout>
        <p>
          If you require certainty, this is not the system for you. If you
          require a documented edge with documented failure modes and
          documented controls — that is what is on this page.
        </p>
      </SectionBlock>
    </PageShell>
  );
}
