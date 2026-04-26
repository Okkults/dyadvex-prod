export function Equation({
  label,
  expr,
  note,
  plain,
}: {
  label: string;
  expr: string;
  note?: string;
  plain?: string;
}) {
  return (
    <div className="hairline-t pt-6">
      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold/70">
        {label}
      </div>
      <div className="mt-3 font-display text-2xl italic text-ivory md:text-3xl">
        {expr}
      </div>
      {plain && (
        <div className="mt-3 font-sans text-sm leading-relaxed text-ivory/80">
          {plain}
        </div>
      )}
      {note && (
        <div className="mt-2 font-mono text-xs text-muted-foreground">{note}</div>
      )}
    </div>
  );
}
