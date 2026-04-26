import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageShell } from "@/components/dyadvex/SiteChrome";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — dyadvex" },
      {
        name: "description",
        content:
          "Direct answers on edge, risk, verification, scaling, and the early-stage builder reality behind dyadvex.",
      },
      { property: "og:title", content: "FAQ — dyadvex" },
      {
        property: "og:description",
        content:
          "Why the edge exists, how it is harvested, when it dies, and how dyadvex proves scale without a giant fund.",
      },
    ],
  }),
  component: FAQPage,
});

const faqGroups: {
  heading: string;
  numeral: string;
  intro?: string;
  items: { q: string; a: string }[];
}[] = [
  {
    numeral: "α",
    heading: "What dyadvex is",
    intro:
      "A quantitative machine intelligence that treats the market as a non-linear stochastic process. No guesses, no news, no stories — only math.",
    items: [
      {
        q: "What is dyadvex?",
        a: "A statistical engine that extracts hidden signals from price and volume using high-dimensional kernel regression, mean-reversion operators, and earnings volatility surface modeling. The objective is a consistent mathematical edge compounded over thousands of independent trials.",
      },
      {
        q: "Is this a hedge fund?",
        a: "No. dyadvex is not a fund, not an investment advisor, and not a custodian of capital. It is a quantitative engine that emits trade signals into the subscriber's own Alpaca brokerage account. You retain custody. We provide the brain.",
      },
      {
        q: "Why does dyadvex exist?",
        a: "Markets are noisy chaotic systems that still contain predictable structure. Human emotion, panic, and greed create repeatable statistical anomalies — especially in overnight gaps and post-earnings volatility skew. We hunt those anomalies with math and code, not opinions.",
      },
      {
        q: "Why does a quantitative approach beat human intuition?",
        a: "Humans flinch. Emotion, bias, and overconfidence corrode any edge. Models do not. They harvest non-linear patterns across thousands of instruments simultaneously, size every bet by Kelly, and let the law of large numbers convert a fractional win rate into compounding wealth.",
      },
    ],
  },
  {
    numeral: "β",
    heading: "How it works",
    items: [
      {
        q: "What is the core technique?",
        a: "Statistical arbitrage on prices and volumes — never news. A single unified model finds short-term predictive signals through kernel methods, hidden Markov structure, and high-dimensional pattern detection. Tiny edges, hedged book, enormous repetition.",
      },
      {
        q: "Why secrecy and capacity discipline?",
        a: "Edge erodes when copied. Larger AUM means worse slippage. dyadvex enforces a hard capacity ceiling and strictly limited seats so execution speed and statistical edge stay intact for every participant.",
      },
      {
        q: "Why Alpaca?",
        a: "Cleanest, simplest brokerage API for both the operator and the user. Commission-free, real-time data, reliable execution, easy account linking. Same engine runs paper and live. No need to introduce a fund vehicle, custodian, or LP structure.",
      },
      {
        q: "Why paper mode first?",
        a: "Because the cheapest possible verification is to watch the system trade in your own sandbox. Paper mode replaces external auditors and curated track records with a live, mirrored, impossible-to-fabricate feed.",
      },
    ],
  },
  {
    numeral: "γ",
    heading: "When it stops working",
    items: [
      {
        q: "What causes edge decay?",
        a: "Slippage from oversized capital, anomalies fading as competitors copy them, regime breaks where historical patterns no longer hold, and culture erosion when a lean system turns into silos. dyadvex mitigates all four through a strict capacity cap, constant model refresh, and a single shared codebase.",
      },
      {
        q: "What happens if the model breaks?",
        a: "Drawdown clusters automatically reduce per-event exposure. If performance degrades beyond statistical thresholds, trading pauses. The model rewrites parts of itself in response to prediction error and regime drift — but if regime stability is lost, the safer move is no trade.",
      },
      {
        q: "Can this be reverse engineered?",
        a: "Not from the live trade outputs alone. The workflow is genuinely complicated to assemble — but almost embarrassingly simple once data, logic, and execution code are correctly wired. That asymmetry is precisely why feature engineering, model weights, and dataset composition stay protected.",
      },
      {
        q: "Why do most quants fail to replicate this?",
        a: "They copy surface tactics — a model, a feature, a strategy — without the full system: data moat, unified codebase, aligned incentives, secrecy, and persistence through losing years. dyadvex is the casino. Most quants are still playing the game.",
      },
    ],
  },
  {
    numeral: "δ",
    heading: "The early-stage builder",
    intro:
      "dyadvex is in the same lonely, high-potential phase the most successful quant fund in history occupied at its founding — a small system with real signal, waiting for scale.",
    items: [
      {
        q: "Is a solo builder with AI and code hopeless against incumbents?",
        a: "No — this is the classic starting position. The most legendary quant fund in history began as a tiny team in a strip-mall office, iterating for over a decade on computers the size of a refrigerator that held 900 megabytes. Today modern AI compresses that timeline dramatically. A solo operator with proven micro-scale results and AI-accelerated iteration is not behind. Solo may take longer, but the profit per participant is uncapped.",
      },
      {
        q: "Why deliberately small instead of scaling headcount?",
        a: "Even the legendary fund stayed under ~300 people running one unified model. With AI, that number compresses further — a single operator plus AI plus code has no silos, no leakage, no internal politics. Headcount is not the moat. A clean model, persistence, and a unified codebase are. The lean structure is what protects the edge.",
      },
      {
        q: "What about early contributors who sold their stake too soon?",
        a: "History is full of brilliant early contributors who cashed out at quick multiples — sometimes 6× in sixteen months — convinced they had already won. They later watched the same system compound into something orders of magnitude larger and regretted leaving. dyadvex is built for the long compound. The real win is not a quick exit; it is staying in while the edge matures.",
      },
      {
        q: "How is dyadvex different from large multi-strategy giants?",
        a: "Large pod shops run thousands of employees and dozens of competing internal teams. They scale capital well but sacrifice per-strategy purity. dyadvex is the opposite: extremely small, singular focus, one unified model, full transparency, obsessive capacity discipline. The edge lives in the math and the code — not in star PMs or macro bets.",
      },
    ],
  },
  {
    numeral: "ε",
    heading: "Proving scale without a giant fund",
    items: [
      {
        q: "How do you answer the “come back at $50M AUM” objection?",
        a: "By turning many small accounts into one virtual large book. dyadvex routes through the Alpaca API: each subscriber connects their own brokerage and trades the same model in parallel. 200 accounts at $20–50k aggregate to $4–10M of live capital. 500–1,000 accounts cross $10–50M — exactly the scale Wall Street demands — without a single concentrated personal account.",
      },
      {
        q: "Why does this prove robustness, not weakness?",
        a: "Identical signals executing cleanly across hundreds of independent accounts produces a verifiable multi-account track record: aggregate returns, Sharpe, win rate, slippage, and execution quality at increasing size. If the edge holds across the swarm, capacity is real — and institutions cannot easily dismiss it.",
      },
      {
        q: "Why not just publish a public backtest?",
        a: "Backtests are easy to fabricate, easy to optimize against known outcomes, and almost impossible to verify from the outside. A live point-in-time paper feed is the opposite: sequential, unfakeable, and replayable inside the user's own brokerage. Public backtests prove nothing. Live trades prove everything.",
      },
      {
        q: "Why a tiered subscription instead of an LP fund?",
        a: "Recurring revenue funds further model development, alignment stays tight, and the operator is never custodian of user capital. Subscribers keep their Alpaca account; dyadvex provides the brain. Low friction, fast user growth, faster real-world capacity testing.",
      },
    ],
  },
  {
    numeral: "ζ",
    heading: "Verification & paper mode",
    intro:
      "We operate in a market saturated with unverifiable track records, simulated backtests, and selectively audited performance. We do not rely on any of them.",
    items: [
      {
        q: "Why does the $5/month paper tier exist?",
        a: "It is the primary source of truth. The market is full of fabricated records, optimized backtests, and selectively audited performance — even when blessed by top accounting firms. Paper mode replaces all of that. For $5/month you connect an Alpaca paper account and watch the system operate live: trade generation, entries, exits, and signal timing — mirrored inside your own brokerage sandbox. The trades are the audit.",
      },
      {
        q: "Why not hire an auditor or accounting firm to certify performance?",
        a: "Because those reports are backward-looking and selectively curated. A live paper feed is cheaper, faster, and impossible to fabricate. If you want proof, you do not read a report — you watch the system trade in real time inside your own account.",
      },
      {
        q: "Why not disclose the full strategy and signal construction?",
        a: "Structural necessity, not narrative secrecy. Full disclosure of feature engineering, model weights, or signal construction would accelerate edge decay and collapse the microstructure inefficiencies the system harvests — front-running risk is real.",
      },
      {
        q: "What is disclosed, then?",
        a: "Everything that matters for verification: live trade outputs, execution timing, realized PnL behavior, and regime classification (macro / earnings / volatility state). You see the resulting decisions — not the proprietary transformations behind them.",
      },
    ],
  },
  {
    numeral: "η",
    heading: "Risk architecture",
    intro:
      "Capital is partitioned across a dual-layer system: high-variance earnings exposure and low-variance macro overnight exposure. Risk is not eliminated — it is priced and controlled independently across regimes.",
    items: [
      {
        q: "How is capital allocated overall?",
        a: "Two layers. Earnings / event-driven exposure is the high-edge, high-variance regime. Macro / overnight exposure runs the remainder of capital across liquid instruments (SPY, QQQ, IWM, GLD, TLT) for steady mean-reversion and gap inefficiency capture. Earnings provides convexity. Macro provides stability.",
      },
      {
        q: "What are the three earnings risk tiers?",
        a: "Three internal risk regimes are applied per earnings event, selected by conviction, volatility conditions, and liquidity depth. Tier 1 — Conservative: ~10% of event capital. Tier 2 — Standard: ~20% of event capital, primary engine of expected value. Tier 3 — Aggressive: ~30% of event capital, high-conviction / high-skew with kill-switches.",
      },
      {
        q: "What system-level risk controls are always on?",
        a: "Portfolio-level max daily loss threshold, automatic exposure reduction after drawdown clusters, volatility regime detection, and liquidity-aware sizing. If performance degrades beyond statistical thresholds, exposure is throttled and trading may pause.",
      },
      {
        q: "What is the expected move distribution on earnings?",
        a: "Earnings events are modeled as fat-tailed volatility distributions, not directional predictions. Typical realized moves: 5–15%. High-volatility tail expansions: 30%+. The distribution is non-normal with significant skew and kurtosis.",
      },
    ],
  },
  {
    numeral: "θ",
    heading: "Data, research & adaptation",
    intro:
      "The core edge is not the model. It is the dataset architecture, the research methodology, and the continuous recalibration loop on top of them.",
    items: [
      {
        q: "What is the actual source of the edge?",
        a: "The dataset. The model is comparatively simple — an AI loop that learns from its own prediction error and rewrites its own logic. Without the correct data structure, no model accuracy is possible, no regime classification is stable, and no volatility surface inference is meaningful. Execution currently routes exclusively through Alpaca.",
      },
      {
        q: "How is research conducted? Is this just backtesting?",
        a: "No. dyadvex uses point-in-time simulation. The model only sees data that was available at that exact historical moment, and the market is replayed as if the system were trading live. Decisions are generated sequentially, never retrospectively optimized. We do not test what worked — we test what could have been known.",
      },
      {
        q: "How does the system adapt over time?",
        a: "A continuous learning loop. The model ingests prediction error, volatility regime shifts, and execution slippage divergence, then updates feature weighting, signal thresholds, and risk allocation logic. This is not static quant logic — it is a continuously recalibrating system.",
      },
    ],
  },
];

function FAQPage() {
  return (
    <PageShell
      numeral="VI"
      eyebrow="Inquiry"
      title={<>Questions admitted <em>by the model.</em></>}
      lede="Direct answers — not defensive ones. Why the edge exists, how it is harvested, when it dies, and how dyadvex proves scale without a giant fund."
    >
      <div className="space-y-20">
        {faqGroups.map((group) => (
          <div key={group.heading} className="grid gap-10 md:grid-cols-[180px_1fr]">
            <div className="md:pt-2">
              <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
                {group.numeral} ·
              </div>
              <h3 className="mt-3 font-display text-2xl leading-tight">
                {group.heading}
              </h3>
              {group.intro && (
                <p className="mt-4 font-sans text-xs leading-relaxed text-muted-foreground">
                  {group.intro}
                </p>
              )}
            </div>
            <Accordion type="single" collapsible className="w-full">
              {group.items.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`${group.heading}-${idx}`}
                  className="border-b border-gold/15"
                >
                  <AccordionTrigger className="py-5 text-left font-display text-lg leading-snug hover:no-underline">
                    <span className="flex gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/60 pt-2">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span>{item.q}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-10 font-sans text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
