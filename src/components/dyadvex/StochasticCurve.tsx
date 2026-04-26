import { useMemo } from "react";

// Deterministic pseudo-random walk so SSR matches client
function seededWalk(n: number, seed: number, drift = 0, vol = 1) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  const out: number[] = [50];
  for (let i = 1; i < n; i++) {
    const z = (rand() + rand() + rand() + rand() - 2) * 1.5; // ~normal
    out.push(out[i - 1] + drift + z * vol);
  }
  return out;
}

function toPath(values: number[], w: number, h: number, pad = 0) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = (w - pad * 2) / (values.length - 1);
  return values
    .map((v, i) => {
      const x = pad + i * step;
      const y = pad + (h - pad * 2) * (1 - (v - min) / range);
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
}

export function StochasticCurve({
  className = "",
}: {
  className?: string;
}) {
  const { paths, mean } = useMemo(() => {
    const W = 800;
    const H = 400;
    const N = 160;
    const seeds = [11, 29, 53, 97, 131, 173, 211, 257];
    const paths = seeds.map((s, i) =>
      toPath(seededWalk(N, s, 0.05, 1.6 + i * 0.1), W, H, 8),
    );
    // mean path
    const all = seeds.map((s) => seededWalk(N, s, 0.05, 1.6));
    const meanArr = Array.from({ length: N }, (_, i) =>
      all.reduce((a, b) => a + b[i], 0) / all.length,
    );
    return { paths, mean: toPath(meanArr, W, H, 8) };
  }, []);

  return (
    <svg
      viewBox="0 0 800 400"
      className={className}
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.85 0.07 85)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.85 0.07 85)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* faint sample paths */}
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="oklch(0.85 0.07 85)"
          strokeOpacity={0.18}
          strokeWidth={1}
          className="animate-draw"
          style={{ ["--len" as never]: 2200, animationDelay: `${i * 120}ms` }}
        />
      ))}

      {/* mean / signal */}
      <path
        d={mean}
        fill="none"
        stroke="oklch(0.85 0.07 85)"
        strokeWidth={1.5}
        className="animate-draw"
        style={{ ["--len" as never]: 2400 }}
      />

      {/* axis hairlines */}
      <line x1="0" y1="200" x2="800" y2="200" stroke="oklch(0.85 0.07 85)" strokeOpacity="0.08" />
      <line x1="400" y1="0" x2="400" y2="400" stroke="oklch(0.85 0.07 85)" strokeOpacity="0.08" />
    </svg>
  );
}
