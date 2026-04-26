import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionBlock, Callout } from "@/components/dyadvex/SiteChrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "System Overview — dyadvex" },
      {
        name: "description",
        content:
          "dyadvex is a quantitative machine intelligence. System documentation: architecture, data philosophy, and what it is not.",
      },
      { property: "og:title", content: "System Overview — dyadvex" },
      {
        property: "og:description",
        content:
          "Mechanical documentation of the dyadvex system — architecture, constraints, and what it deliberately is not.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      numeral="I"
      eyebrow="System Overview"
      title={<>A documented system. <em>Not a story.</em></>}
      lede="dyadvex is a quantitative machine intelligence that treats the market as a non-linear stochastic process. This page is the mechanical specification of the system — what it is, what it is not, and the architecture that produces the edge."
    >
      <SectionBlock numeral="01" heading="What dyadvex is">
        <p>
          A unified mathematical engine that ingests price and volume data,
          reconstructs point-in-time market states, and emits trade decisions
          across two regimes: macro overnight and earnings events. Execution
          routes through Alpaca. The same model runs for every participant.
          Sizing, throttling, and capacity are enforced by code — not by
          discretion.
        </p>
      </SectionBlock>

      <SectionBlock numeral="02" heading="What dyadvex is not">
        <ul className="space-y-3 font-mono text-sm">
          {[
            ["not", "an investment advisor"],
            ["not", "a discretionary fund"],
            ["not", "a human signal-trading desk"],
            ["not", "a custodian of user capital"],
            ["not", "a backtest demo"],
            ["not", "a fundamental research product"],
          ].map(([k, v]) => (
            <li
              key={v}
              className="flex items-center justify-between border-b border-gold/15 pb-3"
            >
              <span className="text-muted-foreground uppercase tracking-[0.2em] text-[10px]">
                {k}
              </span>
              <span className="text-ivory">{v}</span>
            </li>
          ))}
        </ul>
        <p>
          Subscribers retain custody of their own brokerage account. dyadvex
          provides the brain. The trades are executed inside the user's own
          Alpaca account — paper or live, depending on tier.
        </p>
      </SectionBlock>

      <SectionBlock numeral="03" heading="Core architecture">
        <p>
          Three layers operate as a single pipeline:
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <Callout label="Macro layer">
            Mean-reversion and kernel regression on liquid macro instruments.
            Steady compounding across overnight gap inefficiencies.
          </Callout>
          <Callout label="Earnings layer">
            Volatility-surface arbitrage across scheduled earnings events.
            Convex payoffs harvested through three risk tiers.
          </Callout>
          <Callout label="Execution layer">
            Alpaca-routed orders, slippage-aware sizing, kill-switch logic,
            and capacity enforcement at ~5% of observable event liquidity.
          </Callout>
        </div>
      </SectionBlock>

      <SectionBlock numeral="04" heading="Data philosophy">
        <p>
          The model is comparatively simple. The dataset is the moat. Every
          signal is generated under point-in-time discipline: the model only
          ever sees data that was available at that exact historical moment.
          History is replayed sequentially as if the system were trading live.
          No lookahead bias. No retroactively optimized features. No
          artificially inflated curves.
        </p>
        <p className="text-ivory">
          We do not test what worked. We test what could have been known.
        </p>
      </SectionBlock>

      <SectionBlock numeral="05" heading="Why it exists">
        <p>
          Markets are noisy chaotic systems that still contain predictable
          structure. Human emotion, panic, and greed create repeatable
          statistical anomalies — most cleanly in overnight gaps and
          post-earnings volatility skew. dyadvex exists to harvest those
          anomalies with math and code, not opinions, and to do so at a
          deliberately small scale where edge is preserved.
        </p>
      </SectionBlock>

      <SectionBlock numeral="06" heading="Operating constraints">
        <ul className="space-y-3 font-mono text-sm text-muted-foreground">
          <li className="flex justify-between border-b border-gold/15 pb-3">
            <span>capacity ceiling</span>
            <span className="text-ivory">$240M</span>
          </li>
          <li className="flex justify-between border-b border-gold/15 pb-3">
            <span>seats open</span>
            <span className="text-gold">07 / 64</span>
          </li>
          <li className="flex justify-between border-b border-gold/15 pb-3">
            <span>execution venue</span>
            <span className="text-ivory">Alpaca</span>
          </li>
          <li className="flex justify-between border-b border-gold/15 pb-3">
            <span>per-event liquidity cap</span>
            <span className="text-ivory">~5%</span>
          </li>
          <li className="flex justify-between border-b border-gold/15 pb-3">
            <span>kelly fraction</span>
            <span className="text-ivory">F* ≈ 0.14</span>
          </li>
        </ul>
      </SectionBlock>
    </PageShell>
  );
}
