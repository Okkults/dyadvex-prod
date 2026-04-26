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
const STEPS = [{
  num: "01",
  title: "Data",
  body: "Live and historical market data ingested under point-in-time discipline. Every observation is timestamped to the exact moment it would have been available.",
  detail: "price · volume · implied vol surface · event calendar"
}, {
  num: "02",
  title: "Model",
  body: "Unified statistical engine — kernel regression, mean-reversion operators, hidden-state inference — runs against the reconstructed market state. The model rewrites parts of itself as prediction error and regime drift accumulate.",
  detail: "kernel regression · OU mean-reversion · vol-surface inference"
}, {
  num: "03",
  title: "Signal",
  body: "The model emits a probabilistic decision: direction, conviction, regime tag (macro / earnings / volatility state), and a recommended risk tier (Conservative / Standard / Aggressive).",
  detail: "p(state) · regime tag · tier assignment"
}, {
  num: "04",
  title: "Execution",
  body: "Orders route through the Alpaca API into the subscriber's own brokerage account. Sizing is slippage-aware and capped at ~5% of observable event liquidity. Same engine runs in paper and live.",
  detail: "Alpaca · slippage-aware · capacity-bounded"
}, {
  num: "05",
  title: "Risk layer",
  body: "Kelly-bounded position sizing, max daily loss thresholds, kill-switch logic, and exposure throttling after drawdown clusters. If the system drifts out of regime, exposure is reduced automatically.",
  detail: "F* ≈ 0.14 · max DD −4.1% · auto-throttle"
}];
function HowItWorksPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { numeral: "II", eyebrow: "Operational Pipeline", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Five steps. ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Data to trade." })
  ] }), lede: "No philosophy on this page. Just the operational path a single trade takes through dyadvex — from raw market data to a sized order in your Alpaca account.", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-px bg-gold/15 md:grid-cols-5", children: STEPS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: s.num }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl leading-tight", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-sans text-xs leading-relaxed text-muted-foreground", children: s.body }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 border-t border-gold/15 pt-3 font-mono text-[10px] text-muted-foreground", children: s.detail })
    ] }, s.num)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20 border border-gold/20 bg-card/40 p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "Pipeline as flow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.25em]", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border border-gold/40 px-3 py-2 text-ivory", children: s.title }),
        i < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "→" })
      ] }, s.num)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20 grid gap-10 border-t border-gold/15 pt-12 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "What is shared with users" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 font-sans text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ live trade outputs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ execution timing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ realized PnL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ regime classification" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "What stays protected" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 font-sans text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ feature engineering" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ model weights" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ dataset composition" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ signal construction" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "Why" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-sans text-sm leading-relaxed text-muted-foreground", children: "Full disclosure of feature engineering or model weights would collapse the microstructure inefficiencies the system harvests. You see decisions, not transformations." })
      ] })
    ] })
  ] });
}
export {
  HowItWorksPage as component
};
