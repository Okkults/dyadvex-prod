import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as notFound } from "../_libs/tanstack__router-core.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-DiTmr73p.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$8 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Quantum Edge is an AI quantitative trading model that exploits market anomalies for elite investors." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Quantum Edge is an AI quantitative trading model that exploits market anomalies for elite investors." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "Quantum Edge is an AI quantitative trading model that exploits market anomalies for elite investors." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/mOeGeWJKpBYD9zA7upKef9M0k5E3/social-images/social-1777069414323-ChatGPT_Image_Apr_24,_2026,_04_38_21_PM.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/mOeGeWJKpBYD9zA7upKef9M0k5E3/social-images/social-1777069414323-ChatGPT_Image_Apr_24,_2026,_04_38_21_PM.webp" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
}
const $$splitComponentImporter$7 = () => import("./strategy-DHa6moHS.mjs");
const Route$7 = createFileRoute("/strategy")({
  head: () => ({
    meta: [{
      title: "Strategies — dyadvex"
    }, {
      name: "description",
      content: "Two regimes, three risk tiers. Structured per-strategy specification: signal type, horizon, regime conditions, and failure mode."
    }, {
      property: "og:title",
      content: "Strategies — dyadvex"
    }, {
      property: "og:description",
      content: "Macro overnight and earnings event-driven strategies. Specifications, not formulas."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./risk-CW2Xmm1g.mjs");
const Route$6 = createFileRoute("/risk")({
  head: () => ({
    meta: [{
      title: "Risk Architecture — dyadvex"
    }, {
      name: "description",
      content: "Risk is partitioned, not averaged. Failure modes, controls, and the capital loss reality of a quantitative system."
    }, {
      property: "og:title",
      content: "Risk Architecture — dyadvex"
    }, {
      property: "og:description",
      content: "Documented failure modes, system-level controls, and the capital loss reality of running a quantitative engine."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./performance-Bg-rT-Nk.mjs");
const Route$5 = createFileRoute("/performance")({
  head: () => ({
    meta: [{
      title: "Performance & Verification — dyadvex"
    }, {
      name: "description",
      content: "Live paper-trade verification layer. Don't believe us — watch the system think. Trade feed, equity curve, drawdown, and replay log."
    }, {
      property: "og:title",
      content: "Performance & Verification — dyadvex"
    }, {
      property: "og:description",
      content: "The trades are the audit. Live paper feed via Alpaca replaces accounting certifications and curated track records."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./how-it-works-DL7TyCi9.mjs");
const Route$4 = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [{
      title: "How It Works — dyadvex"
    }, {
      name: "description",
      content: "The dyadvex pipeline: data, model, signal, execution, risk. Five steps from raw market data to a sized trade."
    }, {
      property: "og:title",
      content: "How It Works — dyadvex"
    }, {
      property: "og:description",
      content: "Five-step operational pipeline. No philosophy — just the path from data to a sized trade."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./faq-B741h7HR.mjs");
const Route$3 = createFileRoute("/faq")({
  head: () => ({
    meta: [{
      title: "FAQ — dyadvex"
    }, {
      name: "description",
      content: "Direct answers on edge, risk, verification, scaling, and the early-stage builder reality behind dyadvex."
    }, {
      property: "og:title",
      content: "FAQ — dyadvex"
    }, {
      property: "og:description",
      content: "Why the edge exists, how it is harvested, when it dies, and how dyadvex proves scale without a giant fund."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./about-C9QOQDm3.mjs");
const Route$2 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "System Overview — dyadvex"
    }, {
      name: "description",
      content: "dyadvex is a quantitative machine intelligence. System documentation: architecture, data philosophy, and what it is not."
    }, {
      property: "og:title",
      content: "System Overview — dyadvex"
    }, {
      property: "og:description",
      content: "Mechanical documentation of the dyadvex system — architecture, constraints, and what it deliberately is not."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-CMgbRISL.mjs");
const Route$1 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: "dyadvex — Quantitative Machine Intelligence"
    }, {
      name: "description",
      content: "dyadvex is a hyper-exclusive AI quant model. Stochastic edge across overnight macro disparities and earnings volatility. Capacity strictly capped."
    }, {
      property: "og:title",
      content: "dyadvex — Quantitative Machine Intelligence"
    }, {
      property: "og:description",
      content: "We do not guess. A non-linear stochastic process, decomposed. Kelly-sized. Mathematically disciplined."
    }]
  })
});
const TIERS = [
  {
    slug: "paper",
    tag: "0",
    name: "Paper Mode",
    price: "$5",
    cadence: "/ month",
    account: "verification only",
    desc: "Connect an Alpaca paper account and watch the engine trade live in your sandbox.",
    longDesc: "Paper Mode is the verification layer. Connect an Alpaca paper trading account and dyadvex will mirror live signal generation into your sandbox. No capital is at risk — every trade, fill, and timestamp is auditable in your own brokerage portal.",
    pts: [
      "Live signal mirror into your paper account",
      "Execution engine fully visible",
      "No real capital at risk",
      "Independent audit of model behavior"
    ],
    cta: "Start verifying",
    featured: false,
    stripeProductId: "prod_UP1wGRa2WgaVkZ",
    stripePriceId: "price_1TQDs81k6ViMgCMe8q1tC8yF"
  },
  {
    slug: "live",
    tag: "I",
    name: "Live Tier",
    price: "$15",
    cadence: "/ month",
    account: "accounts < $2,500",
    desc: "Live execution of the dyadvex quant model via Alpaca for small retail accounts.",
    longDesc: "Live Tier opens the model to real capital under $2,500. The same model that runs in Paper Mode is now wired to your live Alpaca account with standard execution priority.",
    pts: [
      "Live execution access via Alpaca",
      "Model-driven trade generation",
      "Standard execution priority",
      "Full strategy coverage"
    ],
    cta: "Activate live access",
    featured: false,
    stripeProductId: "prod_UP1wGRa2WgaVkZ",
    stripePriceId: "price_1TQDs81k6ViMgCMe8q1tC8yF"
  },
  {
    slug: "growth",
    tag: "II",
    name: "Growth Tier",
    price: "$25",
    cadence: "/ month",
    account: "accounts < $5,000",
    desc: "Scaling retail accounts run on the full execution logic with priority throughput.",
    longDesc: "Growth Tier is built for scaling retail accounts up to $5,000. Priority routing and faster model refresh cycles ensure execution quality as size increases.",
    pts: [
      "Priority execution routing",
      "Faster model refresh cycles",
      "Live Alpaca execution",
      "Tier 2 throughput allocation"
    ],
    cta: "Upgrade to Growth",
    featured: true,
    stripeProductId: "prod_UP1wGRa2WgaVkZ",
    stripePriceId: "price_1TQDs81k6ViMgCMe8q1tC8yF"
  },
  {
    slug: "advanced",
    tag: "III",
    name: "Advanced Tier",
    price: "$50",
    cadence: "/ month",
    account: "accounts < $10,000",
    desc: "High-frequency execution layer tuned for larger retail accounts within slippage constraints.",
    longDesc: "Advanced Tier delivers the highest retail execution priority and enhanced model sensitivity, optimized for accounts approaching the $10,000 ceiling.",
    pts: [
      "Highest retail execution priority",
      "Enhanced model sensitivity",
      "Live Alpaca execution",
      "Optimized within slippage constraints"
    ],
    cta: "Unlock advanced",
    featured: false,
    stripeProductId: "prod_UP1wGRa2WgaVkZ",
    stripePriceId: "price_1TQDs81k6ViMgCMe8q1tC8yF"
  },
  {
    slug: "high-balance",
    tag: "IV",
    name: "High Balance",
    price: "Contact",
    cadence: "bespoke",
    account: "accounts > $10,000",
    desc: "Beyond retail tier limits. Custom execution configuration and direct onboarding review.",
    longDesc: "Above $10,000, retail tier constraints no longer apply. We configure execution and capacity allocation to your account profile through a direct onboarding review.",
    pts: [
      "Custom execution configuration",
      "Direct onboarding review",
      "Personalized capacity allocation",
      "Bespoke pricing structure"
    ],
    cta: "Contact for access",
    featured: false
  }
];
function getTier(slug) {
  return TIERS.find((t) => t.slug === slug);
}
const $$splitNotFoundComponentImporter = () => import("./signup._tier-B-VSYjTb.mjs");
const $$splitComponentImporter = () => import("./signup._tier-dVwuoM9E.mjs");
const Route = createFileRoute("/signup/$tier")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  loader: ({
    params
  }) => {
    const tier = getTier(params.tier);
    if (!tier) throw notFound();
    return {
      tier
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.tier.name} — dyadvex signup`
    }, {
      name: "description",
      content: `Sign up for the dyadvex ${loaderData?.tier.name} and connect your Alpaca account.`
    }]
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
const StrategyRoute = Route$7.update({
  id: "/strategy",
  path: "/strategy",
  getParentRoute: () => Route$8
});
const RiskRoute = Route$6.update({
  id: "/risk",
  path: "/risk",
  getParentRoute: () => Route$8
});
const PerformanceRoute = Route$5.update({
  id: "/performance",
  path: "/performance",
  getParentRoute: () => Route$8
});
const HowItWorksRoute = Route$4.update({
  id: "/how-it-works",
  path: "/how-it-works",
  getParentRoute: () => Route$8
});
const FaqRoute = Route$3.update({
  id: "/faq",
  path: "/faq",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const SignupTierRoute = Route.update({
  id: "/signup/$tier",
  path: "/signup/$tier",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  FaqRoute,
  HowItWorksRoute,
  PerformanceRoute,
  RiskRoute,
  StrategyRoute,
  SignupTierRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route as R,
  TIERS as T,
  router as r
};
