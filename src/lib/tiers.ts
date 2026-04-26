export type TierSlug = "paper" | "live" | "growth" | "advanced" | "high-balance";

export type Tier = {
  slug: TierSlug;
  tag: string;
  name: string;
  price: string;
  cadence: string;
  account: string;
  desc: string;
  longDesc: string;
  pts: string[];
  cta: string;
  featured: boolean;
  stripeProductId?: string;
  stripePriceId?: string;
};

export const TIERS: Tier[] = [
  {
    slug: "paper",
    tag: "0",
    name: "Paper Mode",
    price: "$5",
    cadence: "/ month",
    account: "verification only",
    desc: "Connect an Alpaca paper account and watch the engine trade live in your sandbox.",
    longDesc:
      "Paper Mode is the verification layer. Connect an Alpaca paper trading account and dyadvex will mirror live signal generation into your sandbox. No capital is at risk — every trade, fill, and timestamp is auditable in your own brokerage portal.",
    pts: [
      "Live signal mirror into your paper account",
      "Execution engine fully visible",
      "No real capital at risk",
      "Independent audit of model behavior",
    ],
    cta: "Start verifying",
    featured: false,
    stripeProductId: "prod_UP1wGRa2WgaVkZ",
    stripePriceId: "price_1TQDs81k6ViMgCMe8q1tC8yF",
  },
  {
    slug: "live",
    tag: "I",
    name: "Live Tier",
    price: "$15",
    cadence: "/ month",
    account: "accounts < $2,500",
    desc: "Live execution of the dyadvex quant model via Alpaca for small retail accounts.",
    longDesc:
      "Live Tier opens the model to real capital under $2,500. The same model that runs in Paper Mode is now wired to your live Alpaca account with standard execution priority.",
    pts: [
      "Live execution access via Alpaca",
      "Model-driven trade generation",
      "Standard execution priority",
      "Full strategy coverage",
    ],
    cta: "Activate live access",
    featured: false,
    stripeProductId: "prod_UP1wGRa2WgaVkZ",
    stripePriceId: "price_1TQDs81k6ViMgCMe8q1tC8yF",
  },
  {
    slug: "growth",
    tag: "II",
    name: "Growth Tier",
    price: "$25",
    cadence: "/ month",
    account: "accounts < $5,000",
    desc: "Scaling retail accounts run on the full execution logic with priority throughput.",
    longDesc:
      "Growth Tier is built for scaling retail accounts up to $5,000. Priority routing and faster model refresh cycles ensure execution quality as size increases.",
    pts: [
      "Priority execution routing",
      "Faster model refresh cycles",
      "Live Alpaca execution",
      "Tier 2 throughput allocation",
    ],
    cta: "Upgrade to Growth",
    featured: true,
    stripeProductId: "prod_UP1wGRa2WgaVkZ",
    stripePriceId: "price_1TQDs81k6ViMgCMe8q1tC8yF",
  },
  {
    slug: "advanced",
    tag: "III",
    name: "Advanced Tier",
    price: "$50",
    cadence: "/ month",
    account: "accounts < $10,000",
    desc: "High-frequency execution layer tuned for larger retail accounts within slippage constraints.",
    longDesc:
      "Advanced Tier delivers the highest retail execution priority and enhanced model sensitivity, optimized for accounts approaching the $10,000 ceiling.",
    pts: [
      "Highest retail execution priority",
      "Enhanced model sensitivity",
      "Live Alpaca execution",
      "Optimized within slippage constraints",
    ],
    cta: "Unlock advanced",
    featured: false,
    stripeProductId: "prod_UP1wGRa2WgaVkZ",
    stripePriceId: "price_1TQDs81k6ViMgCMe8q1tC8yF",
  },
  {
    slug: "high-balance",
    tag: "IV",
    name: "High Balance",
    price: "Contact",
    cadence: "bespoke",
    account: "accounts > $10,000",
    desc: "Beyond retail tier limits. Custom execution configuration and direct onboarding review.",
    longDesc:
      "Above $10,000, retail tier constraints no longer apply. We configure execution and capacity allocation to your account profile through a direct onboarding review.",
    pts: [
      "Custom execution configuration",
      "Direct onboarding review",
      "Personalized capacity allocation",
      "Bespoke pricing structure",
    ],
    cta: "Contact for access",
    featured: false,
  },
];

export function getTier(slug: string): Tier | undefined {
  return TIERS.find((t) => t.slug === slug);
}
