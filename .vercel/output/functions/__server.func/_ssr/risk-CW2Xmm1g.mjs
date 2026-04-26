import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageShell, S as SectionBlock, C as Callout } from "./SiteChrome-Cm5DUZxB.mjs";
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
function RiskPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { numeral: "IV", eyebrow: "Risk Architecture", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Risk is ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "partitioned," }),
    " not averaged."
  ] }), lede: "Each regime has independent failure modes. We do not eliminate risk — we price it, partition it, and control it across regimes. Losses are expected in clustered regimes; protection comes from position sizing, not prediction accuracy.", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionBlock, { numeral: "A", heading: "Risk philosophy", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A single portfolio-wide risk number is a marketing artifact. Real risk lives in the failure modes of each regime, and those failure modes are not correlated. dyadvex treats macro overnight exposure and earnings event exposure as two separate books, each with its own kill-switches and its own capacity." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { label: "Operating principle", children: "Losses are expected in clustered regimes. Protection comes from position sizing, not from prediction accuracy." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBlock, { numeral: "B", heading: "Failure modes — documented", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2", children: [{
      k: "Earnings · volatility clustering",
      v: "Adjacent prints distort the modeled vol distribution — implied/realized assumptions break down across the cluster."
    }, {
      k: "Macro · structural trend shift",
      v: "A regime transition is misread as mean-reversion failure. Loss streaks here are the signal that the model is out of regime."
    }, {
      k: "Liquidity gap · slippage divergence",
      v: "Realized fills diverge from modeled fills during thin-liquidity windows. Sizing assumptions silently invalidate."
    }, {
      k: "Model decay · regime drift",
      v: "Feature stability degrades as market microstructure evolves. Without continuous recalibration, edge fades quietly."
    }, {
      k: "Tail expansion · wrong-side skew",
      v: "Aggressive earnings tier accepts convex variance. A 30%+ move in the adverse direction is a documented possibility, not a black swan."
    }, {
      k: "Execution venue · single point of failure",
      v: "Alpaca outages or rate-limit events delay execution. Modeled timing assumptions break for the duration."
    }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gold/20 bg-card/40 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold/80", children: f.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-sans text-sm leading-relaxed text-muted-foreground", children: f.v })
    ] }, f.k)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBlock, { numeral: "C", heading: "Controls — always on", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4 font-sans text-sm text-muted-foreground", children: [["Kelly-bounded sizing", "F* ≈ 0.14 — every position sized as a fraction of the bankroll, never a fixed dollar amount."], ["Portfolio-level max daily loss", "Hard threshold. Hit it and the system flattens for the session."], ["Exposure throttling", "Drawdown clusters automatically reduce per-event size in the next window."], ["Volatility regime detection", "Risk-on / risk-off scaling. Aggressive tier deactivates when implied vol regimes shift."], ["Liquidity-aware sizing", "Per-event exposure capped at ~5% of observable liquidity. Slippage stays bounded."], ["Kill-switch logic", "Tier 3 (Aggressive) carries an armed kill-switch under adverse volatility shifts mid-event."], ["Trading pause", "If model performance degrades beyond statistical thresholds, the engine pauses until regime stabilizes."]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "grid gap-2 border-b border-gold/15 pb-4 md:grid-cols-[260px_1fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] uppercase tracking-[0.25em] text-gold", children: k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory", children: v })
    ] }, k)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBlock, { numeral: "D", heading: "Risk numbers", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px bg-gold/15 md:grid-cols-4", children: [["F*", "0.14", "Kelly fraction"], ["max DD", "−4.1%", "rolling 12m target"], ["per-event cap", "5%", "of observable liquidity"], ["earnings tiers", "10 / 20 / 30%", "of event capital"]].map(([k, v, sub]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70", children: k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-3xl text-ivory", children: v }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-muted-foreground", children: sub })
    ] }, k)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionBlock, { numeral: "E", heading: "Capital loss — the honest statement", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { label: "No guarantee of persistence", children: "Strategies degrade over time. Regimes shift. Capacity is a real constraint, not a marketing point. dyadvex makes no return guarantee on any individual trade — only a mathematical edge over a large number of independent trials, sized so that no single outcome can break the bankroll." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "If you require certainty, this is not the system for you. If you require a documented edge with documented failure modes and documented controls — that is what is on this page." })
    ] })
  ] });
}
export {
  RiskPage as component
};
