import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
function Mark() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "28", height: "28", viewBox: "0 0 32 32", className: "text-gold", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "16", cy: "16", r: "14", fill: "none", stroke: "currentColor", strokeWidth: "0.6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M4 22 C 10 6, 22 26, 28 10",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.2"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "16", cy: "16", r: "1.6", fill: "currentColor" })
  ] });
}
const NAV_LINKS = [
  { to: "/about", label: "System" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/strategy", label: "Strategy" },
  { to: "/risk", label: "Risk" },
  { to: "/performance", label: "Performance" },
  { to: "/faq", label: "FAQ" }
];
function SiteNav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "relative z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mark, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl tracking-tight", children: "dyadvex" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:inline", children: "est. MMXXV" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground lg:flex", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: l.to,
        className: "transition hover:text-ivory",
        activeProps: { className: "text-gold" },
        children: l.label
      },
      l.to
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        hash: "waitlist",
        className: "border border-gold/50 bg-transparent px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-gold transition hover:bg-gold hover:text-primary-foreground",
        children: "Request a seat"
      }
    )
  ] }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "hairline-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mark, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl", children: "dyadvex" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "quantitative · machine · intelligence" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: l.to, className: "hover:text-ivory", children: l.label }, l.to)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "© MMXXV — not an offer to sell securities" })
  ] }) });
}
function PageShell({
  numeral,
  eyebrow,
  title,
  lede,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-aurora absolute inset-0 -z-10 opacity-70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid-paper absolute inset-0 -z-10 opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pt-16 pb-16 md:pt-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: [
          numeral,
          " — ",
          eyebrow
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 max-w-4xl font-display text-5xl leading-[1] text-ivory md:text-7xl", children: title }),
        lede && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg", children: lede })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 pb-32", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function SectionBlock({
  numeral,
  heading,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid gap-10 border-t border-gold/15 py-16 md:grid-cols-[200px_1fr]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[11px] uppercase tracking-[0.3em] text-gold", children: numeral }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-2xl leading-tight md:text-3xl", children: heading })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6 font-sans text-sm leading-relaxed text-muted-foreground md:text-base", children })
  ] });
}
function Callout({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gold/20 bg-card/60 p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/80", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-xl leading-snug text-ivory", children })
  ] });
}
export {
  Callout as C,
  PageShell as P,
  SectionBlock as S,
  SiteNav as a,
  SiteFooter as b
};
