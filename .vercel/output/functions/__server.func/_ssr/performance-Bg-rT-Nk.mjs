import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as PageShell } from "./SiteChrome-Cm5DUZxB.mjs";
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
const MOCK_TRADES = [{
  ts: "2026-04-23 16:00:04",
  sym: "NFLX",
  tag: "earnings · t3",
  side: "LONG VOL",
  pnl: "+2.41%"
}, {
  ts: "2026-04-23 09:31:12",
  sym: "SPY",
  tag: "macro",
  side: "MEAN-REV",
  pnl: "+0.18%"
}, {
  ts: "2026-04-22 16:00:08",
  sym: "TSLA",
  tag: "earnings · t2",
  side: "SHORT γ",
  pnl: "+1.84%"
}, {
  ts: "2026-04-22 09:30:55",
  sym: "QQQ",
  tag: "macro",
  side: "GAP-FADE",
  pnl: "−0.07%"
}, {
  ts: "2026-04-21 16:00:02",
  sym: "GOOG",
  tag: "earnings · t2",
  side: "LONG VOL",
  pnl: "+0.92%"
}, {
  ts: "2026-04-21 09:30:48",
  sym: "GLD",
  tag: "macro",
  side: "MEAN-REV",
  pnl: "+0.11%"
}, {
  ts: "2026-04-18 16:00:11",
  sym: "NVDA",
  tag: "earnings · t3",
  side: "LONG VOL",
  pnl: "+3.66%"
}, {
  ts: "2026-04-18 09:31:02",
  sym: "TLT",
  tag: "macro",
  side: "MEAN-REV",
  pnl: "−0.04%"
}, {
  ts: "2026-04-17 16:00:07",
  sym: "META",
  tag: "earnings · t1",
  side: "SHORT γ",
  pnl: "+0.58%"
}, {
  ts: "2026-04-17 09:30:51",
  sym: "IWM",
  tag: "macro",
  side: "GAP-FADE",
  pnl: "+0.21%"
}];
const EQUITY = Array.from({
  length: 60
}, (_, i) => {
  const drift = i * 0.42;
  const wiggle = Math.sin(i * 0.6) * 1.4 + Math.cos(i * 0.31) * 0.9;
  return 100 + drift + wiggle;
});
const DRAWDOWN = Array.from({
  length: 60
}, (_, i) => {
  const v = -(Math.abs(Math.sin(i * 0.42)) * 2.6 + Math.abs(Math.cos(i * 0.27)) * 0.7);
  return Math.max(v, -4.1);
});
function toPath(values, w, h, pad = 6) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = (w - pad * 2) / (values.length - 1);
  return values.map((v, i) => {
    const x = pad + i * step;
    const y = pad + (h - pad * 2) * (1 - (v - min) / range);
    return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");
}
function PerformancePage() {
  const equityPath = toPath(EQUITY, 800, 240);
  const ddPath = toPath(DRAWDOWN, 800, 160);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { numeral: "V", eyebrow: "Performance & Verification", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Don't believe us. ",
    /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Watch the system think." })
  ] }), lede: "The market is full of fabricated track records, optimized backtests, and selectively audited performance — even with top accounting firms attached. We replace all of it with a $5/month live paper feed. Connect an Alpaca paper account, mirror the engine inside your own brokerage sandbox, and verify execution for yourself. The trades are the audit.", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-8 grid gap-px bg-gold/15 md:grid-cols-4", children: [["status", "● paper feed", "preview"], ["trades shown", "10", "of recent window"], ["equity (mock)", "+24.6%", "since inception"], ["max DD (mock)", "−4.1%", "within target"]].map(([k, v, sub]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70", children: k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-2xl text-ivory", children: v }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-muted-foreground", children: sub })
    ] }, k)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12 border border-gold/20 bg-card/40 p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "Equity curve · cumulative" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-2xl", children: "Sample data — live feed pending" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "window · last 60 sessions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 800 240", className: "mt-6 h-60 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "eq-fill", x1: "0", x2: "0", y1: "0", y2: "1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.78 0.12 80)", stopOpacity: "0.35" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.78 0.12 80)", stopOpacity: "0" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `${equityPath} L 794,234 L 6,234 Z`, fill: "url(#eq-fill)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: equityPath, fill: "none", stroke: "oklch(0.78 0.12 80)", strokeWidth: "1.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "120", x2: "800", y2: "120", stroke: "oklch(0.85 0.07 85)", strokeOpacity: "0.08" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8 border border-gold/20 bg-card/40 p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "Drawdown · rolling" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "target ceiling · −4.1%" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 800 160", className: "mt-6 h-40 w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `${ddPath} L 794,154 L 6,154 Z`, fill: "oklch(0.55 0.2 25 / 0.18)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: ddPath, fill: "none", stroke: "oklch(0.55 0.2 25)", strokeWidth: "1.2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "6", x2: "800", y2: "6", stroke: "oklch(0.85 0.07 85)", strokeOpacity: "0.1" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8 border border-gold/20 bg-card/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-gold/15 px-6 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "Live paper trade feed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "timestamp · symbol · regime · side · realized" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-gold/10 font-mono text-xs", children: MOCK_TRADES.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1.4fr_0.6fr_1fr_0.8fr_0.6fr] items-center gap-3 px-6 py-3 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.ts }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory", children: t.sym }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold/80 uppercase tracking-[0.2em] text-[10px]", children: t.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "uppercase tracking-[0.2em] text-[10px]", children: t.side }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: t.pnl.startsWith("−") ? "text-destructive" : "text-ivory", children: t.pnl })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-gold/15 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "◆ sample data shown · live Alpaca paper feed wires in at launch" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16 grid gap-10 border-t border-gold/15 pt-12 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "What this replaces" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 font-sans text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ external audit firms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ accounting certifications" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ third-party “track record validation”" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ trust-me memos" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "How verification works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "mt-4 space-y-2 font-sans text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "01 · Subscribe to paper tier ($5/mo)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "02 · Connect your own Alpaca paper account" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "03 · Watch live signals execute in your sandbox" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "04 · Audit entries, exits, and timing directly" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "Start verifying" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-sans text-sm leading-relaxed text-muted-foreground", children: "Cheaper than an auditor. Faster than a quarterly report. Impossible to fabricate. Watch the system think — inside your own brokerage." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "waitlist", className: "mt-6 inline-flex items-center gap-2 border border-gold bg-gold px-5 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-transparent hover:text-gold", children: "Request paper access →" })
      ] })
    ] })
  ] });
}
export {
  PerformancePage as component
};
