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
  ["HYG", "−0.44σ", "carry off"],
];

export function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="ticker-mask hairline-t hairline-b overflow-hidden bg-[oklch(0.16_0.035_260)] py-3">
      <div className="animate-ticker flex w-max gap-10 font-mono text-xs text-muted-foreground">
        {row.map((it, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap">
            <span className="text-gold">{it[0]}</span>
            <span>{it[1]}</span>
            <span className="text-muted-foreground/70">// {it[2]}</span>
            <span className="text-gold/40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
