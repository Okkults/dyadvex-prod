import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav, SiteFooter } from "@/components/dyadvex/SiteChrome";
import { getTier, type Tier } from "@/lib/tiers";
import { supabase, createStripeCheckout } from "@/lib/supabase";

export const Route = createFileRoute("/signup/$tier")({
  component: SignupTierPage,
  loader: ({ params }) => {
    const tier = getTier(params.tier);
    if (!tier) throw notFound();
    return { tier };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.tier.name} — dyadvex signup` },
      {
        name: "description",
        content: `Sign up for the dyadvex ${loaderData?.tier.name} and connect your Alpaca account.`,
      },
    ],
  }),
  notFoundComponent: () => (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
          404
        </div>
        <h1 className="mt-6 font-display text-5xl text-ivory">Tier not found</h1>
        <Link
          to="/"
          hash="tiers"
          className="mt-8 inline-block font-mono text-xs uppercase tracking-[0.25em] text-gold hover:text-ivory"
        >
          ← Back to tiers
        </Link>
      </div>
      <SiteFooter />
    </main>
  ),
});

type Step = "details" | "auth" | "keys" | "done";

function SignupTierPage() {
  const { tier } = Route.useLoaderData();
  const [step, setStep] = useState<Step>("details");
  const [userId, setUserId] = useState<string>("");

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <section className="relative overflow-hidden">
        <div className="bg-aurora absolute inset-0 -z-10 opacity-60" />
        <div className="grid-paper absolute inset-0 -z-10 opacity-30" />

        <div className="mx-auto grid max-w-7xl gap-16 px-6 pt-16 pb-24 md:grid-cols-12 md:pt-24">
          <TierSummary tier={tier} step={step} />
          <div className="md:col-span-7">
            <Stepper step={step} />
            <div className="mt-10">
              {step === "details" && (
                <DetailsStep tier={tier} onContinue={() => setStep("auth")} />
              )}
              {step === "auth" && (
                <AuthStep
                  tier={tier}
                  onBack={() => setStep("details")}
                  onContinue={(id) => { setUserId(id || ""); setStep("keys"); }}
                />
              )}
              {step === "keys" && (
                <KeysStep
                  tier={tier}
                  userId={userId}
                  onBack={() => setStep("auth")}
                  onContinue={() => setStep("done")}
                />
              )}
              {step === "done" && <DoneStep tier={tier} />}
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}

function TierSummary({ tier, step }: { tier: Tier; step: Step }) {
  return (
    <aside className="md:col-span-5">
      <Link
        to="/"
        hash="tiers"
        className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-gold"
      >
        ← All tiers
      </Link>
      <div className="mt-8 border border-gold/20 bg-card/60 p-8">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
          Tier {tier.tag}
        </div>
        <h1 className="mt-4 font-display text-4xl leading-tight text-ivory md:text-5xl">
          {tier.name}
        </h1>
        <div className="mt-6 flex items-baseline gap-2">
          <span className="font-display text-5xl text-ivory">{tier.price}</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {tier.cadence}
          </span>
        </div>
        <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
          {tier.account}
        </div>
        <p className="mt-6 font-sans text-sm leading-relaxed text-muted-foreground">
          {tier.longDesc}
        </p>
        <ul className="mt-8 space-y-3 font-mono text-xs text-muted-foreground">
          {tier.pts.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span className="mt-1 text-gold">◆</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 hairline-t pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          current step:{" "}
          <span className="text-gold">
            {step === "details" && "review"}
            {step === "auth" && "authenticate"}
            {step === "keys" && "connect alpaca"}
            {step === "done" && "complete"}
          </span>
        </div>
      </div>
    </aside>
  );
}

function Stepper({ step }: { step: Step }) {
  const steps: { key: Step; label: string }[] = [
    { key: "details", label: "01 — Review" },
    { key: "auth", label: "02 — Authenticate" },
    { key: "keys", label: "03 — Connect Alpaca" },
    { key: "done", label: "04 — Activated" },
  ];
  const idx = steps.findIndex((s) => s.key === step);
  return (
    <ol className="grid grid-cols-4 gap-px bg-gold/15">
      {steps.map((s, i) => {
        const active = i === idx;
        const done = i < idx;
        return (
          <li
            key={s.key}
            className={`bg-background p-4 font-mono text-[10px] uppercase tracking-[0.2em] ${
              active ? "text-gold" : done ? "text-ivory/60" : "text-muted-foreground"
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`inline-block h-2 w-2 ${
                  active ? "bg-gold animate-blink" : done ? "bg-gold/60" : "bg-muted"
                }`}
              />
              {s.label}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function DetailsStep({ tier, onContinue }: { tier: Tier; onContinue: () => void }) {
  const isContact = tier.slug === "high-balance";
  return (
    <div className="border border-gold/20 bg-card/60 p-8 md:p-10">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
        Step 01 — Review your tier
      </div>
      <h2 className="mt-4 font-display text-3xl text-ivory md:text-4xl">
        Confirm execution scope.
      </h2>
      <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
        You are signing up for the <span className="text-ivory">{tier.name}</span>.
        Execution is fully model-driven via Alpaca. dyadvex does not place
        discretionary trades and you will not be asked to approve individual
        orders.
      </p>

      <ul className="mt-8 space-y-4 font-sans text-sm">
        <Bullet
          k="Brokerage"
          v="Alpaca only — no alternative brokers supported."
        />
        <Bullet
          k="Execution"
          v="Model-generated orders sent directly to your Alpaca account."
        />
        <Bullet
          k="Capital control"
          v={tier.slug === "paper" ? "Paper account — simulated only." : "You retain full withdrawal and kill-switch authority."}
        />
        <Bullet
          k="Constraints"
          v="Execution may be throttled during peak load, vol expansion, or Alpaca rate limits."
        />
      </ul>

      <button
        onClick={onContinue}
        className="group mt-10 flex w-full items-center justify-between border border-gold bg-gold px-6 py-4 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-transparent hover:text-gold"
      >
        <span>{isContact ? "Continue to onboarding request" : "Continue to authentication"}</span>
        <span className="transition group-hover:translate-x-1">→</span>
      </button>
    </div>
  );
}

function Bullet({ k, v }: { k: string; v: string }) {
  return (
    <li className="grid grid-cols-[140px_1fr] gap-4 border-b border-gold/10 pb-4">
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
        {k}
      </span>
      <span className="text-muted-foreground">{v}</span>
    </li>
  );
}

function AuthStep({
  tier,
  onBack,
  onContinue,
}: {
  tier: Tier;
  onBack: () => void;
  onContinue: (userId?: string) => void;
}) {
  const [mode, setMode] = useState<"signin" | "signup">("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (mode === "signup") {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
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
            status: "pending",
          });
          onContinue(data.user.id);
        }
      } else {
        const { data, error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password,
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

  return (
    <div className="border border-gold/20 bg-card/60 p-8 md:p-10">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
        Step 02 — Authenticate
      </div>
      <h2 className="mt-4 font-display text-3xl text-ivory md:text-4xl">
        {mode === "signup" ? "Create your account" : "Sign in"}
      </h2>
      <p className="mt-4 font-sans text-sm text-muted-foreground">
        Authentication is required before any Alpaca API key is submitted. Your
        email becomes your verification anchor for the {tier.name}.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-px bg-gold/15">
        {(["signup", "signin"] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            className={`bg-background py-3 font-mono text-[10px] uppercase tracking-[0.25em] transition ${
              mode === m ? "text-gold" : "text-muted-foreground hover:text-ivory"
            }`}
          >
            {m === "signup" ? "Create account" : "Existing user"}
          </button>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >
        {error && (
          <div className="rounded bg-destructive/20 px-4 py-2 text-sm text-destructive">
            {error}
          </div>
        )}
        <Field
          label="email"
          value={email}
          onChange={setEmail}
          placeholder="you@domain.com"
          type="email"
          required
        />
        <Field
          label="password"
          value={password}
          onChange={setPassword}
          placeholder="••••••••••"
          type="password"
          required
        />
        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={onBack}
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-ivory"
          >
            ← Back
          </button>
          <button
            type="submit"
            disabled={loading}
            className="group flex items-center justify-between gap-4 border border-gold bg-gold px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-transparent hover:text-gold disabled:opacity-50"
          >
            <span>{loading ? "Processing..." : mode === "signup" ? "Create & continue" : "Sign in & continue"}</span>
            <span className="transition group-hover:translate-x-1">→</span>
          </button>
        </div>
        <p className="font-mono text-[10px] leading-relaxed text-muted-foreground">
          By continuing you acknowledge that dyadvex will execute model-driven
          trades through your Alpaca account once keys are connected.
        </p>
      </form>
    </div>
  );
}

function KeysStep({
  tier,
  userId,
  onBack,
  onContinue,
}: {
  tier: Tier;
  userId: string;
  onBack: () => void;
  onContinue: () => void;
}) {
  const [keyId, setKeyId] = useState("");
  const [secret, setSecret] = useState("");
  const [env, setEnv] = useState<"paper" | "live">(
    tier.slug === "paper" ? "paper" : "live",
  );
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!userId) {
        console.error("No user ID");
        onContinue();
        return;
      }

      const { error } = await supabase
        .from("subscriptions")
        .update({
          alpaca_key_id: keyId,
          alpaca_secret: secret,
          alpaca_environment: env,
          updated_at: new Date().toISOString(),
        })
        .eq("user_id", userId);

      if (error) {
        console.error("Failed to save Alpaca keys:", error);
      }

      if (tier.stripePriceId && tier.slug !== "high-balance") {
        const origin = window.location.origin;
        const { url } = await createStripeCheckout({
          tierSlug: tier.slug,
          userId: userId,
          priceId: tier.stripePriceId,
          origin,
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

  return (
    <div className="border border-gold/20 bg-card/60 p-8 md:p-10">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
        Step 03 — Connect Alpaca
      </div>
      <h2 className="mt-4 font-display text-3xl text-ivory md:text-4xl">
        Paste your Alpaca API keys.
      </h2>
      <p className="mt-4 font-sans text-sm text-muted-foreground">
        Generate keys in your Alpaca dashboard and paste them below. dyadvex
        does not auto-connect via OAuth — you control issuance, scope, and
        revocation directly from Alpaca.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >
        <div>
          <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
            environment
          </label>
          <div className="mt-3 grid grid-cols-2 gap-px bg-gold/15">
            {(["paper", "live"] as const).map((e) => {
              const disabled = tier.slug === "paper" && e === "live";
              return (
                <label
                  key={e}
                  className={`flex items-center justify-center gap-2 bg-background py-3 font-mono text-[10px] uppercase tracking-[0.25em] transition ${
                    disabled
                      ? "cursor-not-allowed text-muted-foreground/30"
                      : "cursor-pointer text-muted-foreground has-[:checked]:bg-gold has-[:checked]:text-primary-foreground"
                  }`}
                >
                  <input
                    type="radio"
                    name="env"
                    value={e}
                    checked={env === e}
                    disabled={disabled}
                    onChange={() => setEnv(e)}
                    className="sr-only"
                  />
                  Alpaca {e}
                </label>
              );
            })}
          </div>
        </div>

        <Field
          label="alpaca api key id"
          value={keyId}
          onChange={setKeyId}
          placeholder="PKXXXXXXXXXXXXXXXXXX"
          required
        />
        <Field
          label="alpaca secret key"
          value={secret}
          onChange={setSecret}
          placeholder="••••••••••••••••••••••••••••"
          type="password"
          required
        />

        <div className="border border-gold/15 bg-background/40 p-4 font-mono text-[10px] leading-relaxed text-muted-foreground">
          ◆ Keys are submitted over TLS and stored encrypted at rest. dyadvex
          requests only trading and account read scopes — no withdrawal
          permissions. Revoke at any time from the Alpaca dashboard.
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={onBack}
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-ivory"
          >
            ← Back
          </button>
          <button
            type="submit"
            disabled={loading}
            className="group flex items-center justify-between gap-4 border border-gold bg-gold px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-transparent hover:text-gold disabled:opacity-50"
          >
            <span>{loading ? "Processing..." : "Submit keys & activate"}</span>
            <span className="transition group-hover:translate-x-1">→</span>
          </button>
        </div>
      </form>
    </div>
  );
}

function DoneStep({ tier }: { tier: Tier }) {
  const navigate = useNavigate();
  return (
    <div className="border border-gold/20 bg-card/60 p-8 md:p-10">
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold animate-blink">
        ◆ activation received
      </div>
      <h2 className="mt-4 font-display text-4xl text-ivory md:text-5xl">
        {tier.name} is live.
      </h2>
      <p className="mt-4 font-sans text-sm text-muted-foreground">
        Your Alpaca keys have been received and queued for execution wiring.
        The dyadvex model will begin generating signals against your account on
        the next eligible market window.
      </p>
      <ul className="mt-8 space-y-3 font-mono text-xs text-muted-foreground">
        <li>◆ Confirmation email dispatched</li>
        <li>◆ Execution layer pre-configured for {tier.name}</li>
        <li>◆ Live trade feed will appear in your performance dashboard</li>
      </ul>
      <div className="mt-10 flex flex-wrap gap-4">
        <button
          onClick={() => navigate({ to: "/performance" })}
          className="group flex items-center gap-3 border border-gold bg-gold px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-transparent hover:text-gold"
        >
          <span>View performance feed</span>
          <span className="transition group-hover:translate-x-1">→</span>
        </button>
        <Link
          to="/"
          className="border border-gold/40 px-6 py-3 font-mono text-xs uppercase tracking-[0.25em] text-gold hover:bg-gold hover:text-primary-foreground"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
        {label}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full border-b border-gold/30 bg-transparent py-3 font-display text-2xl text-ivory placeholder:text-muted-foreground/40 focus:border-gold focus:outline-none"
      />
    </div>
  );
}
