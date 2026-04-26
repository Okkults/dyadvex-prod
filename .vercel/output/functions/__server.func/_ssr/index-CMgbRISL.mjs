import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { a as SiteNav, b as SiteFooter } from "./SiteChrome-Cm5DUZxB.mjs";
import { T as TIERS } from "./router-C_q_JY0y.mjs";
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
const items = [
  ["SPY", "+0.42σ", "mean-revert"],
  ["GLD", "−0.18σ", "neutral"],
  ["TLT", "+1.07σ", "long signal"],
  ["QQQ", "+0.31σ", "kernel-fit"],
  ["IWM", "−0.62σ", "fade gap"],
  ["NVDA", "earnings T−2", "vol regime"],
  ["AAPL", "earnings T−5", "skew rich"],
  ["MSFT", "post-print", "drift +1.2%"],
  ["XLE", "+0.08σ", "neutral"],
  ["HYG", "−0.44σ", "carry off"]
];
function Ticker() {
  const row = [...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticker-mask hairline-t hairline-b overflow-hidden bg-[oklch(0.16_0.035_260)] py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-ticker flex w-max gap-10 font-mono text-xs text-muted-foreground", children: row.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3 whitespace-nowrap", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: it[0] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: it[1] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground/70", children: [
      "// ",
      it[2]
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold/40", children: "◆" })
  ] }, i)) }) });
}
function seededWalk(n, seed, drift = 0, vol = 1) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const out = [50];
  for (let i = 1; i < n; i++) {
    const z = (rand() + rand() + rand() + rand() - 2) * 1.5;
    out.push(out[i - 1] + drift + z * vol);
  }
  return out;
}
function toPath(values, w, h, pad = 0) {
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
function StochasticCurve({
  className = ""
}) {
  const { paths, mean } = reactExports.useMemo(() => {
    const W = 800;
    const H = 400;
    const N = 160;
    const seeds = [11, 29, 53, 97, 131, 173, 211, 257];
    const paths2 = seeds.map(
      (s, i) => toPath(seededWalk(N, s, 0.05, 1.6 + i * 0.1), W, H, 8)
    );
    const all = seeds.map((s) => seededWalk(N, s, 0.05, 1.6));
    const meanArr = Array.from(
      { length: N },
      (_, i) => all.reduce((a, b) => a + b[i], 0) / all.length
    );
    return { paths: paths2, mean: toPath(meanArr, W, H, 8) };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 800 400",
      className,
      preserveAspectRatio: "none",
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "fade", x1: "0", x2: "0", y1: "0", y2: "1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.85 0.07 85)", stopOpacity: "0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.85 0.07 85)", stopOpacity: "0" })
        ] }) }),
        paths.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d,
            fill: "none",
            stroke: "oklch(0.85 0.07 85)",
            strokeOpacity: 0.18,
            strokeWidth: 1,
            className: "animate-draw",
            style: { ["--len"]: 2200, animationDelay: `${i * 120}ms` }
          },
          i
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: mean,
            fill: "none",
            stroke: "oklch(0.85 0.07 85)",
            strokeWidth: 1.5,
            className: "animate-draw",
            style: { ["--len"]: 2400 }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "0", y1: "200", x2: "800", y2: "200", stroke: "oklch(0.85 0.07 85)", strokeOpacity: "0.08" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "400", y1: "0", x2: "400", y2: "400", stroke: "oklch(0.85 0.07 85)", strokeOpacity: "0.08" })
      ]
    }
  );
}
function Equation({
  label,
  expr,
  note,
  plain
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hairline-t pt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-2xl italic text-ivory md:text-3xl", children: expr }),
    plain && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-sans text-sm leading-relaxed text-ivory/80", children: plain }),
    note && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-mono text-xs text-muted-foreground", children: note })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Ticker, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Doctrine, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Strategies, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Kelly, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Edge, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Tiers, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Capacity, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Waitlist, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-aurora absolute inset-0 -z-10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid-paper absolute inset-0 -z-10 opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StochasticCurve, { className: "pointer-events-none absolute inset-x-0 top-10 -z-10 h-[520px] w-full opacity-60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pt-20 pb-32 md:pt-28 md:pb-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-gold/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-gold/60" }),
        "a non-linear stochastic process"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-8 max-w-5xl font-display text-6xl leading-[0.95] tracking-tight text-ivory md:text-8xl lg:text-9xl", children: [
        "We do not ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-gold", children: "guess." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "We ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic", children: "solve" }),
        " the market."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg", children: "dyadvex is a quantitative machine intelligence built on the mathematical principles of the most profitable hedge fund in history. We treat the market as a chaotic system of hidden Markov models — and extract the signal that human emotion leaves behind." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#waitlist", className: "group inline-flex items-center gap-3 border border-gold bg-gold px-6 py-4 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-transparent hover:text-gold", children: [
          "Initialize connection",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition group-hover:translate-x-1", children: "→" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/performance", className: "font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-ivory", children: "Watch the system think →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24 grid grid-cols-2 gap-10 border-t border-gold/15 pt-10 md:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "signal threshold", v: "0.8σ+", sub: "high conviction trades" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "capacity", v: "$240M", sub: "hard ceiling" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "seats filled", v: "57", sub: "of 64" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { k: "strategies", v: "2", sub: "overnight · earnings" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl font-mono text-[11px] leading-relaxed text-muted-foreground", children: "◆ No guarantee on any individual trade — only a mathematical edge over a large number of independent trials." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.25em]", children: [{
        to: "/about",
        label: "System overview"
      }, {
        to: "/how-it-works",
        label: "How it works"
      }, {
        to: "/strategy",
        label: "Strategies"
      }, {
        to: "/risk",
        label: "Risk"
      }, {
        to: "/performance",
        label: "Performance"
      }, {
        to: "/faq",
        label: "FAQ"
      }].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: l.to, className: "border border-gold/30 px-3 py-2 text-muted-foreground transition hover:border-gold hover:text-gold", children: [
        l.label,
        " →"
      ] }, l.to)) })
    ] })
  ] });
}
function Stat({
  k,
  v,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-4xl text-ivory md:text-5xl", children: v }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono text-[11px] text-muted-foreground", children: sub })
  ] });
}
function Doctrine() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "doctrine", className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "I — Doctrine" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-5xl leading-[1] text-ivory md:text-6xl", children: [
        "The market is a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "distribution." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-sans text-sm leading-relaxed text-muted-foreground", children: "Not a story. Not a thesis. Not a CEO interview. A probability distribution over future price states — and we have its kernel." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12 md:col-span-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Equation, { label: "Posterior price state", expr: "P( xₜ₊₁ | ℱₜ ) = ∫ K(xₜ, x′) · π(x′) dx′", plain: "Translation: given everything we know right now, what's the probability distribution of tomorrow's price? We compute that distribution — and trade only when it's lopsided.", note: "High-dimensional kernel regression over the conditional filtration." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Equation, { label: "Mean reversion operator", expr: "dXₜ = θ ( μ − Xₜ ) dt + σ dWₜ", plain: "Translation: overnight gaps in liquid macro instruments tend to snap back to a stable mean. We size the snap-back, not the news that caused it.", note: "Ornstein–Uhlenbeck. Overnight gap returns ⇒ stationary process." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Equation, { label: "Earnings volatility surface", expr: "σᵢᵥ ( K, T ) ≫ σ_realized ⟹ short γ, long ε", plain: "Translation: option markets systematically overprice the chaos around earnings. We sell that overpriced fear and collect the difference.", note: "Implied vol systematically over-prices the post-print state." })
    ] })
  ] }) });
}
function Strategies() {
  const items2 = [{
    tag: "II.a",
    title: "Overnight Macro Disparities",
    body: "Mean-reversion and kernel regression on liquid macro instruments — SPY, GLD, TLT, QQQ. We forecast the opening state from the previous close and harvest the gap.",
    pts: ["Sharpe target ≥ 2.4", "Holding ≈ 14h", "Slippage-bounded sizing"]
  }, {
    tag: "II.b",
    title: "Earnings Event Edge",
    body: "Our highest-return regime. Human panic and greed mis-price the post-print distribution; our ML models feast on the resulting volatility skew.",
    pts: ["Kelly-capped 10–30%", "Vol-surface arbitrage", "Capacity constrained"]
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "strategies", className: "hairline-t bg-[oklch(0.16_0.035_260)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "II — Strategies" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 max-w-3xl font-display text-5xl leading-[1] md:text-6xl", children: [
      "Two anomalies. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Both mathematically inexhaustible." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-px bg-gold/15 md:grid-cols-2", children: items2.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative bg-background p-10 transition hover:bg-[oklch(0.2_0.04_260)] md:p-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: [
        "Strategy ",
        it.tag
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-4xl leading-tight text-ivory", children: it.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md font-sans text-sm leading-relaxed text-muted-foreground", children: it.body }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 space-y-3 font-mono text-xs text-muted-foreground", children: it.pts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "◆" }),
        p
      ] }, p)) })
    ] }, it.tag)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/strategy", className: "font-mono text-xs uppercase tracking-[0.25em] text-gold hover:text-ivory", children: "Full strategy specification →" }) })
  ] }) });
}
function Kelly() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "kelly", className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "III — Risk" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-5xl leading-[1] md:text-6xl", children: [
        "We are the casino. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "We protect the bankroll." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground", children: "Earnings carry variance. The Kelly Criterion bounds our exposure so that the law of large numbers can resolve in our favor across thousands of trials. We never bet the portfolio on a single state." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-3 gap-px bg-gold/15", children: [["f*", "0.14", "kelly fraction"], ["edge", "+3.8σ", "ex-ante per event"], ["max DD", "−4.1%", "rolling 12m"]].map(([k, v, s]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70", children: k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-3xl", children: v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] text-muted-foreground", children: s })
      ] }, k)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/risk", className: "font-mono text-xs uppercase tracking-[0.25em] text-gold hover:text-ivory", children: "Full risk architecture →" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gold/20 bg-card p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "Capital allocation per event · last 12 trades" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex h-72 items-end gap-2", children: [12, 18, 14, 10, 16, 11, 19, 13, 15, 17, 12, 14].map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full bg-gold/80", style: {
          height: `${h * 4}%`
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[9px] text-muted-foreground", children: [
          h,
          "%"
        ] })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "strict ceiling — 30%" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "◆ kelly-bounded" })
      ] })
    ] }) })
  ] }) });
}
function Edge() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "hairline-t hairline-b bg-[oklch(0.16_0.035_260)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "IV — On fundamentals" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-5xl leading-[1] md:text-6xl", children: [
        "We do not read ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "the news." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md font-sans text-sm leading-relaxed text-muted-foreground", children: "P/E ratios are anecdotes. Forward guidance is theatre. We do not care what the CEO said on the call. We care about the conditional distribution of the next price state — and only that." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/how-it-works", className: "font-mono text-xs uppercase tracking-[0.25em] text-gold hover:text-ivory", children: "See the pipeline →" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 font-mono text-sm", children: [["fundamental analysis", "discarded"], ["financial news cycle", "ignored"], ["analyst price targets", "noise"], ["macro punditry", "uncorrelated"], ["statistical edge", "everything"]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-gold/15 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: v === "everything" ? "text-gold" : "text-ivory/60", children: v })
    ] }, k)) })
  ] }) });
}
function Tiers() {
  const tiers = TIERS.map((t) => ({
    slug: t.slug,
    tag: t.tag,
    name: t.name,
    price: t.price,
    cadence: t.cadence,
    account: t.account,
    desc: t.desc,
    pts: t.pts,
    cta: t.cta,
    featured: t.featured
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "tiers", className: "hairline-t bg-[oklch(0.16_0.035_260)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "V — Access tiers" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 max-w-3xl font-display text-5xl leading-[1] md:text-6xl", children: [
      "Five doors. ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "One mathematical engine." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground", children: "Tier access is gated by account size to preserve execution speed and minimize aggregate slippage. The model is the same — your throughput and priority scale with the seat." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-px bg-gold/15 md:grid-cols-2 lg:grid-cols-5", children: tiers.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `group relative flex flex-col p-8 transition ${t.featured ? "bg-[oklch(0.2_0.05_260)]" : "bg-background hover:bg-[oklch(0.18_0.04_260)]"}`, children: [
      t.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-4 top-4 font-mono text-[9px] uppercase tracking-[0.25em] text-gold", children: "◆ recommended" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: [
        "Tier ",
        t.tag
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-3xl leading-tight text-ivory", children: t.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl text-ivory", children: t.price }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: t.cadence })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70", children: t.account }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-sans text-sm leading-relaxed text-muted-foreground", children: t.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 flex-1 space-y-3 font-mono text-xs text-muted-foreground", children: t.pts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-gold", children: "◆" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p })
      ] }, p)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/signup/$tier", params: {
        tier: t.slug
      }, className: `mt-8 inline-flex items-center justify-between border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.25em] transition ${t.featured ? "border-gold bg-gold text-primary-foreground hover:bg-transparent hover:text-gold" : "border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t.cta }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "→" })
      ] })
    ] }, t.tag)) })
  ] }) });
}
function Capacity() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "capacity", className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 py-32 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "VI — Capacity" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-5xl leading-[1.05] md:text-7xl", children: [
      "The more capital we accept,",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "the worse the slippage." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground", children: "Access to dyadvex is a privilege, not a right. Seats are strictly limited so that execution speed and statistical edge remain intact for every allocator inside the fund." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-14 flex max-w-md items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70", children: "57 / 64" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-px flex-1 bg-gold/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 bg-gold", style: {
        width: "89%"
      } }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold animate-blink", children: "● live" })
    ] })
  ] }) });
}
function Waitlist() {
  const [email, setEmail] = reactExports.useState("");
  const [aum, setAum] = reactExports.useState("");
  const [done, setDone] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "waitlist", className: "hairline-t bg-[oklch(0.14_0.035_260)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "VII — Initialize" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-5xl leading-[1.05] md:text-6xl", children: [
        "Request a seat.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "Sleep while the math works." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md font-sans text-sm leading-relaxed text-muted-foreground", children: "Once admitted, dyadvex assumes execution. Humans are too slow and too emotional. The model trades; you observe." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-10 space-y-3 font-mono text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ Alpaca API key intake (encrypted, post-admission)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ Quarterly attestation of edge decay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ No lockup — edge is honored daily" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: (e) => {
      e.preventDefault();
      setDone(true);
    }, className: "border border-gold/20 bg-card p-8 md:p-10", children: done ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-full flex-col items-start justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: "◆ request received" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl text-ivory", children: "Your application is in the queue." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-sans text-sm text-muted-foreground", children: [
        "A partner will contact ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory", children: email }),
        " if a seat opens within your allocation tier. We do not respond to rejected applications."
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "email", value: email, onChange: setEmail, placeholder: "allocator@family-office.com", type: "email", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "capital under consideration (USD)", value: aum, onChange: setAum, placeholder: "5,000,000", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70", children: "allocation tier" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-3 gap-px bg-gold/15", children: ["Macro", "Earnings", "Both"].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex cursor-pointer items-center justify-center gap-2 bg-background py-3 font-mono text-xs text-muted-foreground transition has-[:checked]:bg-gold has-[:checked]:text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "tier", defaultChecked: i === 2, className: "sr-only" }),
          t
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "group mt-4 flex w-full items-center justify-between border border-gold bg-gold px-6 py-4 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-transparent hover:text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Submit application" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition group-hover:translate-x-1", children: "→" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] leading-relaxed text-muted-foreground", children: "By submitting you acknowledge that dyadvex makes no return guarantee on any individual trade — only a mathematical edge over a large number of independent trials." })
    ] }) })
  ] }) });
}
function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, value, required, placeholder, onChange: (e) => onChange(e.target.value), className: "mt-3 w-full border-b border-gold/30 bg-transparent py-3 font-display text-2xl text-ivory placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none" })
  ] });
}
export {
  Index as component
};
