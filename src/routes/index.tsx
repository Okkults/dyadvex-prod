import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Ticker } from "@/components/dyadvex/Ticker";
import { StochasticCurve } from "@/components/dyadvex/StochasticCurve";
import { Equation } from "@/components/dyadvex/Equation";
import { SiteNav, SiteFooter } from "@/components/dyadvex/SiteChrome";
import { TIERS } from "@/lib/tiers";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "dyadvex — Quantitative Machine Intelligence" },
      {
        name: "description",
        content:
          "dyadvex is a hyper-exclusive AI quant model. Stochastic edge across overnight macro disparities and earnings volatility. Capacity strictly capped.",
      },
      { property: "og:title", content: "dyadvex — Quantitative Machine Intelligence" },
      {
        property: "og:description",
        content:
          "We do not guess. A non-linear stochastic process, decomposed. Kelly-sized. Mathematically disciplined.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <Ticker />
      <Doctrine />
      <Strategies />
      <Kelly />
      <Edge />
      <Tiers />
      <Capacity />
      <Waitlist />
      <SiteFooter />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-aurora absolute inset-0 -z-10" />
      <div className="grid-paper absolute inset-0 -z-10 opacity-50" />
      <StochasticCurve className="pointer-events-none absolute inset-x-0 top-10 -z-10 h-[520px] w-full opacity-60" />

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-32 md:pt-28 md:pb-40">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-gold/80">
          <span className="h-px w-10 bg-gold/60" />
          a non-linear stochastic process
        </div>

        <h1 className="mt-8 max-w-5xl font-display text-6xl leading-[0.95] tracking-tight text-ivory md:text-8xl lg:text-9xl">
          We do not <em className="text-gold">guess.</em>
          <br />
          We <span className="italic">solve</span> the market.
        </h1>

        <p className="mt-10 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
          dyadvex is a quantitative machine intelligence built on the
          mathematical principles of the most profitable hedge fund in history.
          We treat the market as a chaotic system of hidden Markov models — and
          extract the signal that human emotion leaves behind.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href="#waitlist"
            className="group inline-flex items-center gap-3 border border-gold bg-gold px-6 py-4 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-transparent hover:text-gold"
          >
            Initialize connection
            <span className="transition group-hover:translate-x-1">→</span>
          </a>
          <Link
            to="/performance"
            className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-ivory"
          >
            Watch the system think →
          </Link>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-10 border-t border-gold/15 pt-10 md:grid-cols-4">
          <Stat k="signal threshold" v="0.8σ+" sub="high conviction trades" />
          <Stat k="capacity" v="$240M" sub="hard ceiling" />
          <Stat k="seats filled" v="57" sub="of 64" />
          <Stat k="strategies" v="2" sub="overnight · earnings" />
        </div>

        <p className="mt-8 max-w-2xl font-mono text-[11px] leading-relaxed text-muted-foreground">
          ◆ No guarantee on any individual trade — only a mathematical edge over
          a large number of independent trials.
        </p>

        <div className="mt-12 flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.25em]">
          {[
            { to: "/about", label: "System overview" },
            { to: "/how-it-works", label: "How it works" },
            { to: "/strategy", label: "Strategies" },
            { to: "/risk", label: "Risk" },
            { to: "/performance", label: "Performance" },
            { to: "/faq", label: "FAQ" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="border border-gold/30 px-3 py-2 text-muted-foreground transition hover:border-gold hover:text-gold"
            >
              {l.label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v, sub }: { k: string; v: string; sub: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
        {k}
      </div>
      <div className="mt-2 font-display text-4xl text-ivory md:text-5xl">{v}</div>
      <div className="mt-1 font-mono text-[11px] text-muted-foreground">{sub}</div>
    </div>
  );
}

function Doctrine() {
  return (
    <section id="doctrine" className="relative">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
            I — Doctrine
          </div>
          <h2 className="mt-6 font-display text-5xl leading-[1] text-ivory md:text-6xl">
            The market is a <em>distribution.</em>
          </h2>
          <p className="mt-6 font-sans text-sm leading-relaxed text-muted-foreground">
            Not a story. Not a thesis. Not a CEO interview. A probability
            distribution over future price states — and we have its kernel.
          </p>
        </div>

        <div className="space-y-12 md:col-span-8">
          <Equation
            label="Posterior price state"
            expr="P( xₜ₊₁ | ℱₜ ) = ∫ K(xₜ, x′) · π(x′) dx′"
            plain="Translation: given everything we know right now, what's the probability distribution of tomorrow's price? We compute that distribution — and trade only when it's lopsided."
            note="High-dimensional kernel regression over the conditional filtration."
          />
          <Equation
            label="Mean reversion operator"
            expr="dXₜ = θ ( μ − Xₜ ) dt + σ dWₜ"
            plain="Translation: overnight gaps in liquid macro instruments tend to snap back to a stable mean. We size the snap-back, not the news that caused it."
            note="Ornstein–Uhlenbeck. Overnight gap returns ⇒ stationary process."
          />
          <Equation
            label="Earnings volatility surface"
            expr="σᵢᵥ ( K, T ) ≫ σ_realized ⟹ short γ, long ε"
            plain="Translation: option markets systematically overprice the chaos around earnings. We sell that overpriced fear and collect the difference."
            note="Implied vol systematically over-prices the post-print state."
          />
        </div>
      </div>
    </section>
  );
}

function Strategies() {
  const items = [
    {
      tag: "II.a",
      title: "Overnight Macro Disparities",
      body: "Mean-reversion and kernel regression on liquid macro instruments — SPY, GLD, TLT, QQQ. We forecast the opening state from the previous close and harvest the gap.",
      pts: ["Sharpe target ≥ 2.4", "Holding ≈ 14h", "Slippage-bounded sizing"],
    },
    {
      tag: "II.b",
      title: "Earnings Event Edge",
      body: "Our highest-return regime. Human panic and greed mis-price the post-print distribution; our ML models feast on the resulting volatility skew.",
      pts: ["Kelly-capped 10–30%", "Vol-surface arbitrage", "Capacity constrained"],
    },
  ];
  return (
    <section id="strategies" className="hairline-t bg-[oklch(0.16_0.035_260)]">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
          II — Strategies
        </div>
        <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1] md:text-6xl">
          Two anomalies. <em>Both mathematically inexhaustible.</em>
        </h2>

        <div className="mt-16 grid gap-px bg-gold/15 md:grid-cols-2">
          {items.map((it) => (
            <article
              key={it.tag}
              className="group relative bg-background p-10 transition hover:bg-[oklch(0.2_0.04_260)] md:p-14"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                Strategy {it.tag}
              </div>
              <h3 className="mt-6 font-display text-4xl leading-tight text-ivory">
                {it.title}
              </h3>
              <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
                {it.body}
              </p>
              <ul className="mt-10 space-y-3 font-mono text-xs text-muted-foreground">
                {it.pts.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <span className="text-gold">◆</span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/strategy"
            className="font-mono text-xs uppercase tracking-[0.25em] text-gold hover:text-ivory"
          >
            Full strategy specification →
          </Link>
        </div>
      </div>
    </section>
  );
}

function Kelly() {
  return (
    <section id="kelly" className="relative">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
            III — Risk
          </div>
          <h2 className="mt-6 font-display text-5xl leading-[1] md:text-6xl">
            We are the casino. <em>We protect the bankroll.</em>
          </h2>
          <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground">
            Earnings carry variance. The Kelly Criterion bounds our exposure so
            that the law of large numbers can resolve in our favor across
            thousands of trials. We never bet the portfolio on a single state.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-px bg-gold/15">
            {[
              ["f*", "0.14", "kelly fraction"],
              ["edge", "+3.8σ", "ex-ante per event"],
              ["max DD", "−4.1%", "rolling 12m"],
            ].map(([k, v, s]) => (
              <div key={k} className="bg-background p-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
                  {k}
                </div>
                <div className="mt-2 font-display text-3xl">{v}</div>
                <div className="font-mono text-[10px] text-muted-foreground">{s}</div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/risk"
              className="font-mono text-xs uppercase tracking-[0.25em] text-gold hover:text-ivory"
            >
              Full risk architecture →
            </Link>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="border border-gold/20 bg-card p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
              Capital allocation per event · last 12 trades
            </div>
            <div className="mt-6 flex h-72 items-end gap-2">
              {[12, 18, 14, 10, 16, 11, 19, 13, 15, 17, 12, 14].map((h, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div
                    className="w-full bg-gold/80"
                    style={{ height: `${h * 4}%` }}
                  />
                  <div className="font-mono text-[9px] text-muted-foreground">
                    {h}%
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              <span>strict ceiling — 30%</span>
              <span className="text-gold">◆ kelly-bounded</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Edge() {
  return (
    <section className="hairline-t hairline-b bg-[oklch(0.16_0.035_260)]">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-2">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
            IV — On fundamentals
          </div>
          <h2 className="mt-6 font-display text-5xl leading-[1] md:text-6xl">
            We do not read <em>the news.</em>
          </h2>
          <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
            P/E ratios are anecdotes. Forward guidance is theatre. We do not
            care what the CEO said on the call. We care about the conditional
            distribution of the next price state — and only that.
          </p>
          <div className="mt-8">
            <Link
              to="/how-it-works"
              className="font-mono text-xs uppercase tracking-[0.25em] text-gold hover:text-ivory"
            >
              See the pipeline →
            </Link>
          </div>
        </div>
        <div className="space-y-6 font-mono text-sm">
          {[
            ["fundamental analysis", "discarded"],
            ["financial news cycle", "ignored"],
            ["analyst price targets", "noise"],
            ["macro punditry", "uncorrelated"],
            ["statistical edge", "everything"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex items-center justify-between border-b border-gold/15 pb-4"
            >
              <span className="text-muted-foreground">{k}</span>
              <span className={v === "everything" ? "text-gold" : "text-ivory/60"}>
                {v}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
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
    featured: t.featured,
  }));

  return (
    <section id="tiers" className="hairline-t bg-[oklch(0.16_0.035_260)]">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
          V — Access tiers
        </div>
        <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[1] md:text-6xl">
          Five doors. <em>One mathematical engine.</em>
        </h2>
        <p className="mt-6 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground">
          Tier access is gated by account size to preserve execution speed and
          minimize aggregate slippage. The model is the same — your throughput
          and priority scale with the seat.
        </p>

        <div className="mt-16 grid gap-px bg-gold/15 md:grid-cols-2 lg:grid-cols-5">
          {tiers.map((t) => (
            <article
              key={t.tag}
              className={`group relative flex flex-col p-8 transition ${
                t.featured
                  ? "bg-[oklch(0.2_0.05_260)]"
                  : "bg-background hover:bg-[oklch(0.18_0.04_260)]"
              }`}
            >
              {t.featured && (
                <div className="absolute right-4 top-4 font-mono text-[9px] uppercase tracking-[0.25em] text-gold">
                  ◆ recommended
                </div>
              )}
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                Tier {t.tag}
              </div>
              <h3 className="mt-4 font-display text-3xl leading-tight text-ivory">
                {t.name}
              </h3>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-5xl text-ivory">{t.price}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {t.cadence}
                </span>
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
                {t.account}
              </div>
              <p className="mt-6 font-sans text-sm leading-relaxed text-muted-foreground">
                {t.desc}
              </p>
              <ul className="mt-6 flex-1 space-y-3 font-mono text-xs text-muted-foreground">
                {t.pts.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 text-gold">◆</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/signup/$tier"
                params={{ tier: t.slug }}
                className={`mt-8 inline-flex items-center justify-between border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.25em] transition ${
                  t.featured
                    ? "border-gold bg-gold text-primary-foreground hover:bg-transparent hover:text-gold"
                    : "border-gold/40 text-gold hover:bg-gold hover:text-primary-foreground"
                }`}
              >
                <span>{t.cta}</span>
                <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capacity() {
  return (
    <section id="capacity" className="relative">
      <div className="mx-auto max-w-5xl px-6 py-32 text-center">
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
          VI — Capacity
        </div>
        <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
          The more capital we accept,
          <br />
          <em>the worse the slippage.</em>
        </h2>
        <p className="mx-auto mt-8 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground">
          Access to dyadvex is a privilege, not a right. Seats are strictly
          limited so that execution speed and statistical edge remain intact for
          every allocator inside the fund.
        </p>
        <div className="mx-auto mt-14 flex max-w-md items-center gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
            57 / 64
          </span>
          <div className="relative h-px flex-1 bg-gold/15">
            <div className="absolute inset-y-0 left-0 bg-gold" style={{ width: "89%" }} />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold animate-blink">
            ● live
          </span>
        </div>
      </div>
    </section>
  );
}

function Waitlist() {
  const [email, setEmail] = useState("");
  const [aum, setAum] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section id="waitlist" className="hairline-t bg-[oklch(0.14_0.035_260)]">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-32 md:grid-cols-2">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold/70">
            VII — Initialize
          </div>
          <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-6xl">
            Request a seat.
            <br />
            <em>Sleep while the math works.</em>
          </h2>
          <p className="mt-6 max-w-md font-sans text-sm leading-relaxed text-muted-foreground">
            Once admitted, dyadvex assumes execution. Humans are too slow and
            too emotional. The model trades; you observe.
          </p>
          <ul className="mt-10 space-y-3 font-mono text-xs text-muted-foreground">
            <li>◆ Alpaca API key intake (encrypted, post-admission)</li>
            <li>◆ Quarterly attestation of edge decay</li>
            <li>◆ No lockup — edge is honored daily</li>
          </ul>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="border border-gold/20 bg-card p-8 md:p-10"
        >
          {done ? (
            <div className="flex h-full flex-col items-start justify-center gap-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                ◆ request received
              </div>
              <div className="font-display text-3xl text-ivory">
                Your application is in the queue.
              </div>
              <p className="font-sans text-sm text-muted-foreground">
                A partner will contact <span className="text-ivory">{email}</span> if
                a seat opens within your allocation tier. We do not respond to
                rejected applications.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <Field
                label="email"
                value={email}
                onChange={setEmail}
                placeholder="allocator@family-office.com"
                type="email"
                required
              />
              <Field
                label="capital under consideration (USD)"
                value={aum}
                onChange={setAum}
                placeholder="5,000,000"
                required
              />
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
                  allocation tier
                </label>
                <div className="mt-3 grid grid-cols-3 gap-px bg-gold/15">
                  {["Macro", "Earnings", "Both"].map((t, i) => (
                    <label
                      key={t}
                      className="flex cursor-pointer items-center justify-center gap-2 bg-background py-3 font-mono text-xs text-muted-foreground transition has-[:checked]:bg-gold has-[:checked]:text-primary-foreground"
                    >
                      <input
                        type="radio"
                        name="tier"
                        defaultChecked={i === 2}
                        className="sr-only"
                      />
                      {t}
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-between border border-gold bg-gold px-6 py-4 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-transparent hover:text-gold"
              >
                <span>Submit application</span>
                <span className="transition group-hover:translate-x-1">→</span>
              </button>
              <p className="font-mono text-[10px] leading-relaxed text-muted-foreground">
                By submitting you acknowledge that dyadvex makes no return
                guarantee on any individual trade — only a mathematical edge
                over a large number of independent trials.
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
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
