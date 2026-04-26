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
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { numeral: "I", eyebrow: "System Overview", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "A documented system. ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Not a story." })
  ] }), lede: "dyadvex is a quantitative machine intelligence that treats the market as a non-linear stochastic process. This page is the mechanical specification of the system — what it is, what it is not, and the architecture that produces the edge.", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBlock, { numeral: "01", heading: "What dyadvex is", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A unified mathematical engine that ingests price and volume data, reconstructs point-in-time market states, and emits trade decisions across two regimes: macro overnight and earnings events. Execution routes through Alpaca. The same model runs for every participant. Sizing, throttling, and capacity are enforced by code — not by discretion." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionBlock, { numeral: "02", heading: "What dyadvex is not", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 font-mono text-sm", children: [["not", "an investment advisor"], ["not", "a discretionary fund"], ["not", "a human signal-trading desk"], ["not", "a custodian of user capital"], ["not", "a backtest demo"], ["not", "a fundamental research product"]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between border-b border-gold/15 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground uppercase tracking-[0.2em] text-[10px]", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory", children: v })
      ] }, v)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Subscribers retain custody of their own brokerage account. dyadvex provides the brain. The trades are executed inside the user's own Alpaca account — paper or live, depending on tier." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionBlock, { numeral: "03", heading: "Core architecture", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Three layers operate as a single pipeline:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { label: "Macro layer", children: "Mean-reversion and kernel regression on liquid macro instruments. Steady compounding across overnight gap inefficiencies." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { label: "Earnings layer", children: "Volatility-surface arbitrage across scheduled earnings events. Convex payoffs harvested through three risk tiers." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Callout, { label: "Execution layer", children: "Alpaca-routed orders, slippage-aware sizing, kill-switch logic, and capacity enforcement at ~5% of observable event liquidity." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionBlock, { numeral: "04", heading: "Data philosophy", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The model is comparatively simple. The dataset is the moat. Every signal is generated under point-in-time discipline: the model only ever sees data that was available at that exact historical moment. History is replayed sequentially as if the system were trading live. No lookahead bias. No retroactively optimized features. No artificially inflated curves." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory", children: "We do not test what worked. We test what could have been known." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBlock, { numeral: "05", heading: "Why it exists", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Markets are noisy chaotic systems that still contain predictable structure. Human emotion, panic, and greed create repeatable statistical anomalies — most cleanly in overnight gaps and post-earnings volatility skew. dyadvex exists to harvest those anomalies with math and code, not opinions, and to do so at a deliberately small scale where edge is preserved." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBlock, { numeral: "06", heading: "Operating constraints", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 font-mono text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-gold/15 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "capacity ceiling" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory", children: "$240M" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-gold/15 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "seats open" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "07 / 64" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-gold/15 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "execution venue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory", children: "Alpaca" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-gold/15 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "per-event liquidity cap" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory", children: "~5%" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between border-b border-gold/15 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "kelly fraction" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory", children: "F* ≈ 0.14" })
      ] })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
