import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell } from "./SiteChrome-Cm5DUZxB.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const STRATEGIES = [{
  tag: "II.a",
  name: "Macro Overnight",
  signal: "Mean-reversion + kernel regression on the open-state distribution",
  horizon: "≈ 14 hours (close → open)",
  instruments: "SPY · QQQ · IWM · GLD · TLT",
  tier: "Steady allocator — outside the earnings tier system",
  regime: "Quiet to moderately volatile macro tape with intact regime structure",
  failure: "Consecutive regime misclassification — a structural trend shift mistaken for mean-reversion failure",
  profile: "Low variance · high frequency · steady compounding"
}, {
  tag: "II.b.1",
  name: "Earnings — Conservative",
  signal: "Vol-surface inference on low-to-moderate conviction events",
  horizon: "Single event window (entry pre-print, exit post-print)",
  instruments: "Single-name equities + options",
  tier: "Tier 1 · ~10% of event capital",
  regime: "Mixed conviction, normal implied-vol pricing",
  failure: "Volatility clustering across adjacent prints distorts the modeled distribution",
  profile: "Capital preservation · tight position caps · asymmetry harvesting"
}, {
  tag: "II.b.2",
  name: "Earnings — Standard",
  signal: "Core volatility mispricing model — implied vs realized divergence",
  horizon: "Single event window",
  instruments: "Single-name equities + options",
  tier: "Tier 2 · ~20% of event capital",
  regime: "Stable cross-sectional vol regime, balanced positioning imbalance",
  failure: "Sudden cross-sector vol expansion that breaks the implied/realized assumption",
  profile: "Primary engine of expected value · balanced risk-reward"
}, {
  tag: "II.b.3",
  name: "Earnings — Aggressive",
  signal: "High-skew, high-conviction setups with convex payoff structure",
  horizon: "Single event window",
  instruments: "Single-name equities + options",
  tier: "Tier 3 · ~30% of event capital · kill-switch armed",
  regime: "Extreme positioning imbalance or large implied-vs-realized divergence",
  failure: "Tail expansion in the wrong direction during high-skew prints",
  profile: "Convex tail capture · accepts wider variance for asymmetric upside"
}];
function StrategyPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { numeral: "III", eyebrow: "Strategies", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Two regimes. ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Three earnings tiers." })
  ] }), lede: "Specifications, not formulas. Each strategy is documented by its signal type, time horizon, regime conditions, and failure mode — not by its alpha logic. Full disclosure of features or model weights would collapse the inefficiencies they exploit.", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-px bg-gold/15", children: STRATEGIES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-background p-8 md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: [
          "Strategy ",
          s.tag
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: s.profile })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-3xl leading-tight text-ivory md:text-4xl", children: s.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "mt-8 grid gap-x-12 gap-y-6 md:grid-cols-2", children: [["Signal type", s.signal], ["Time horizon", s.horizon], ["Instruments", s.instruments], ["Risk tier", s.tier], ["Expected regime", s.regime], ["Failure mode", s.failure]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-gold/15 pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-2 font-sans text-sm leading-relaxed text-ivory", children: v })
      ] }, k)) })
    ] }, s.tag)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16 grid gap-10 border-t border-gold/15 pt-12 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "Expected move distribution — earnings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-3 font-sans text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-gold/15 pb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "typical realized move" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory", children: "5 – 15%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-gold/15 pb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "tail expansion regime" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "30%+" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-gold/15 pb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "distribution shape" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory", children: "non-normal · skewed · fat-tailed" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "Capacity discipline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-sans text-sm leading-relaxed text-muted-foreground", children: "Each event-driven trade is capped at ~5% of observable event liquidity. Less capacity means less return — but also bounded slippage when a move goes wrong. Capacity is enforced by code, not by discretion." })
      ] })
    ] })
  ] });
}
export {
  StrategyPage as component
};
