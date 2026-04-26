import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link, d as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { a as SiteNav, b as SiteFooter } from "./SiteChrome-Cm5DUZxB.mjs";
import { c as createClient } from "../_libs/supabase__supabase-js.mjs";
import { R as Route } from "./router-C_q_JY0y.mjs";
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
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "tslib";
import "../_libs/supabase__functions-js.mjs";
const supabaseUrl = "https://jgfeaxyfyyqvairgpmkh.supabase.co";
const supabaseAnonKey = "pk_test_51TPR7A1k6ViMgCMeeLmt1w1UgQ1EUWtdqgOA2oW3ekb94Z9nbJdJvT951xAloXMBm1BMMxJ8el0LWWyAr4rWYpnN00Q10z9XN4";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
async function createStripeCheckout({
  tierSlug,
  userId,
  priceId,
  email,
  origin
}) {
  const response = await fetch(`${supabaseUrl}/functions/v1/create-checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      tier_slug: tierSlug,
      user_id: userId,
      price_id: priceId,
      email,
      origin
    })
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to create checkout session");
  }
  const data = await response.json();
  return data;
}
function SignupTierPage() {
  const {
    tier
  } = Route.useLoaderData();
  const [step, setStep] = reactExports.useState("details");
  const [userId, setUserId] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-aurora absolute inset-0 -z-10 opacity-60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid-paper absolute inset-0 -z-10 opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-16 px-6 pt-16 pb-24 md:grid-cols-12 md:pt-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TierSummary, { tier, step }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Stepper, { step }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
            step === "details" && /* @__PURE__ */ jsxRuntimeExports.jsx(DetailsStep, { tier, onContinue: () => setStep("auth") }),
            step === "auth" && /* @__PURE__ */ jsxRuntimeExports.jsx(AuthStep, { tier, onBack: () => setStep("details"), onContinue: (id) => {
              setUserId(id || "");
              setStep("keys");
            } }),
            step === "keys" && /* @__PURE__ */ jsxRuntimeExports.jsx(KeysStep, { tier, userId, onBack: () => setStep("auth"), onContinue: () => setStep("done") }),
            step === "done" && /* @__PURE__ */ jsxRuntimeExports.jsx(DoneStep, { tier })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function TierSummary({
  tier,
  step
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "md:col-span-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "tiers", className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-gold", children: "← All tiers" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 border border-gold/20 bg-card/60 p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold", children: [
        "Tier ",
        tier.tag
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 font-display text-4xl leading-tight text-ivory md:text-5xl", children: tier.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-baseline gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl text-ivory", children: tier.price }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: tier.cadence })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70", children: tier.account }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-sans text-sm leading-relaxed text-muted-foreground", children: tier.longDesc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3 font-mono text-xs text-muted-foreground", children: tier.pts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-gold", children: "◆" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p })
      ] }, p)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 hairline-t pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: [
        "current step:",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gold", children: [
          step === "details" && "review",
          step === "auth" && "authenticate",
          step === "keys" && "connect alpaca",
          step === "done" && "complete"
        ] })
      ] })
    ] })
  ] });
}
function Stepper({
  step
}) {
  const steps = [{
    key: "details",
    label: "01 — Review"
  }, {
    key: "auth",
    label: "02 — Authenticate"
  }, {
    key: "keys",
    label: "03 — Connect Alpaca"
  }, {
    key: "done",
    label: "04 — Activated"
  }];
  const idx = steps.findIndex((s) => s.key === step);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "grid grid-cols-4 gap-px bg-gold/15", children: steps.map((s, i) => {
    const active = i === idx;
    const done = i < idx;
    return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: `bg-background p-4 font-mono text-[10px] uppercase tracking-[0.2em] ${active ? "text-gold" : done ? "text-ivory/60" : "text-muted-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-block h-2 w-2 ${active ? "bg-gold animate-blink" : done ? "bg-gold/60" : "bg-muted"}` }),
      s.label
    ] }) }, s.key);
  }) });
}
function DetailsStep({
  tier,
  onContinue
}) {
  const isContact = tier.slug === "high-balance";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gold/20 bg-card/60 p-8 md:p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "Step 01 — Review your tier" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl text-ivory md:text-4xl", children: "Confirm execution scope." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 font-sans text-sm leading-relaxed text-muted-foreground", children: [
      "You are signing up for the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory", children: tier.name }),
      ". Execution is fully model-driven via Alpaca. dyadvex does not place discretionary trades and you will not be asked to approve individual orders."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-4 font-sans text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bullet, { k: "Brokerage", v: "Alpaca only — no alternative brokers supported." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bullet, { k: "Execution", v: "Model-generated orders sent directly to your Alpaca account." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bullet, { k: "Capital control", v: tier.slug === "paper" ? "Paper account — simulated only." : "You retain full withdrawal and kill-switch authority." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Bullet, { k: "Constraints", v: "Execution may be throttled during peak load, vol expansion, or Alpaca rate limits." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onContinue, className: "group mt-10 flex w-full items-center justify-between border border-gold bg-gold px-6 py-4 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-transparent hover:text-gold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: isContact ? "Continue to onboarding request" : "Continue to authentication" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition group-hover:translate-x-1", children: "→" })
    ] })
  ] });
}
function Bullet({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "grid grid-cols-[140px_1fr] gap-4 border-b border-gold/10 pb-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: v })
  ] });
}
function AuthStep({
  tier,
  onBack,
  onContinue
}) {
  const [mode, setMode] = reactExports.useState("signup");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (mode === "signup") {
        const {
          data,
          error: signUpError
        } = await supabase.auth.signUp({
          email,
          password
        });
        if (signUpError) {
          setError(signUpError.message);
          setLoading(false);
          return;
        }
        if (data.user) {
          await supabase.from("subscriptions").insert({
            user_id: data.user.id,
            tier_slug: tier.slug,
            status: "pending"
          });
          onContinue(data.user.id);
        }
      } else {
        const {
          data,
          error: signInError
        } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (signInError) {
          setError(signInError.message);
          setLoading(false);
          return;
        }
        if (data.user) {
          onContinue(data.user.id);
        }
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gold/20 bg-card/60 p-8 md:p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "Step 02 — Authenticate" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl text-ivory md:text-4xl", children: mode === "signup" ? "Create your account" : "Sign in" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 font-sans text-sm text-muted-foreground", children: [
      "Authentication is required before any Alpaca API key is submitted. Your email becomes your verification anchor for the ",
      tier.name,
      "."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 gap-px bg-gold/15", children: ["signup", "signin"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setMode(m), className: `bg-background py-3 font-mono text-[10px] uppercase tracking-[0.25em] transition ${mode === m ? "text-gold" : "text-muted-foreground hover:text-ivory"}`, children: m === "signup" ? "Create account" : "Existing user" }, m)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mt-8 space-y-6", children: [
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded bg-destructive/20 px-4 py-2 text-sm text-destructive", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "email", value: email, onChange: setEmail, placeholder: "you@domain.com", type: "email", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "password", value: password, onChange: setPassword, placeholder: "••••••••••", type: "password", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onBack, className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-ivory", children: "← Back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: loading, className: "group flex items-center justify-between gap-4 border border-gold bg-gold px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-transparent hover:text-gold disabled:opacity-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: loading ? "Processing..." : mode === "signup" ? "Create & continue" : "Sign in & continue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition group-hover:translate-x-1", children: "→" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] leading-relaxed text-muted-foreground", children: "By continuing you acknowledge that dyadvex will execute model-driven trades through your Alpaca account once keys are connected." })
    ] })
  ] });
}
function KeysStep({
  tier,
  userId,
  onBack,
  onContinue
}) {
  const [keyId, setKeyId] = reactExports.useState("");
  const [secret, setSecret] = reactExports.useState("");
  const [env, setEnv] = reactExports.useState(tier.slug === "paper" ? "paper" : "live");
  const [loading, setLoading] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!userId) {
        console.error("No user ID");
        onContinue();
        return;
      }
      const {
        error
      } = await supabase.from("subscriptions").update({
        alpaca_key_id: keyId,
        alpaca_secret: secret,
        alpaca_environment: env,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      }).eq("user_id", userId);
      if (error) {
        console.error("Failed to save Alpaca keys:", error);
      }
      if (tier.stripePriceId && tier.slug !== "high-balance") {
        const origin = window.location.origin;
        const {
          url
        } = await createStripeCheckout({
          tierSlug: tier.slug,
          userId,
          priceId: tier.stripePriceId,
          origin
        });
        window.location.href = url;
      } else {
        onContinue();
      }
    } catch (err) {
      console.error("Error:", err);
      onContinue();
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gold/20 bg-card/60 p-8 md:p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70", children: "Step 03 — Connect Alpaca" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl text-ivory md:text-4xl", children: "Paste your Alpaca API keys." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-sans text-sm text-muted-foreground", children: "Generate keys in your Alpaca dashboard and paste them below. dyadvex does not auto-connect via OAuth — you control issuance, scope, and revocation directly from Alpaca." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "mt-8 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70", children: "environment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-2 gap-px bg-gold/15", children: ["paper", "live"].map((e) => {
          const disabled = tier.slug === "paper" && e === "live";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `flex items-center justify-center gap-2 bg-background py-3 font-mono text-[10px] uppercase tracking-[0.25em] transition ${disabled ? "cursor-not-allowed text-muted-foreground/30" : "cursor-pointer text-muted-foreground has-[:checked]:bg-gold has-[:checked]:text-primary-foreground"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "env", value: e, checked: env === e, disabled, onChange: () => setEnv(e), className: "sr-only" }),
            "Alpaca ",
            e
          ] }, e);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "alpaca api key id", value: keyId, onChange: setKeyId, placeholder: "PKXXXXXXXXXXXXXXXXXX", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "alpaca secret key", value: secret, onChange: setSecret, placeholder: "••••••••••••••••••••••••••••", type: "password", required: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-gold/15 bg-background/40 p-4 font-mono text-[10px] leading-relaxed text-muted-foreground", children: "◆ Keys are submitted over TLS and stored encrypted at rest. dyadvex requests only trading and account read scopes — no withdrawal permissions. Revoke at any time from the Alpaca dashboard." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onBack, className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-ivory", children: "← Back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: loading, className: "group flex items-center justify-between gap-4 border border-gold bg-gold px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-transparent hover:text-gold disabled:opacity-50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: loading ? "Processing..." : "Submit keys & activate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition group-hover:translate-x-1", children: "→" })
        ] })
      ] })
    ] })
  ] });
}
function DoneStep({
  tier
}) {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gold/20 bg-card/60 p-8 md:p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-gold animate-blink", children: "◆ activation received" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl text-ivory md:text-5xl", children: [
      tier.name,
      " is live."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 font-sans text-sm text-muted-foreground", children: "Your Alpaca keys have been received and queued for execution wiring. The dyadvex model will begin generating signals against your account on the next eligible market window." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-8 space-y-3 font-mono text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ Confirmation email dispatched" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
        "◆ Execution layer pre-configured for ",
        tier.name
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "◆ Live trade feed will appear in your performance dashboard" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigate({
        to: "/performance"
      }), className: "group flex items-center gap-3 border border-gold bg-gold px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-transparent hover:text-gold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "View performance feed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition group-hover:translate-x-1", children: "→" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "border border-gold/40 px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] text-gold hover:bg-gold hover:text-primary-foreground", children: "Back to home" })
    ] })
  ] });
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
  SignupTierPage as component
};
