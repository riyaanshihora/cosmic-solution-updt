import { useMemo } from 'react';

// Small seeded random generator so the artwork is the same on every load.
function seededRandom(seed) {
  let s = seed;
  return () => {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Decorative network of linked points, used when no hero photo is supplied. */
export default function NetworkArt({ seed, x0 }) {
  const { points, lines } = useMemo(() => {
    const rand = seededRandom(seed);
    const pts = [];
    for (let i = 0; i < 50; i++) pts.push([x0 + rand() * (1600 - x0), rand() * 900, rand()]);
    const seen = new Set();
    const ls = [];
    pts.forEach((p, i) => {
      pts
        .map((q, j) => [j, Math.hypot(p[0] - q[0], p[1] - q[1])])
        .filter((a) => a[0] !== i)
        .sort((a, b) => a[1] - b[1])
        .slice(0, 3)
        .forEach(([j, dist]) => {
          const key = i < j ? `${i}-${j}` : `${j}-${i}`;
          if (dist < 300 && !seen.has(key)) {
            seen.add(key);
            ls.push([pts[i], pts[j]]);
          }
        });
    });
    return { points: pts, lines: ls };
  }, [seed, x0]);

  const gradientId = `glow-${seed}`;
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <radialGradient id={gradientId}>
          <stop offset="0" stopColor="#fff" stopOpacity=".95" />
          <stop offset=".3" stopColor="#D9C9EC" stopOpacity=".55" />
          <stop offset="1" stopColor="#D9C9EC" stopOpacity="0" />
        </radialGradient>
      </defs>
      {lines.map((l, i) => (
        <line key={i} x1={l[0][0]} y1={l[0][1]} x2={l[1][0]} y2={l[1][1]} stroke="#6C3BAA" strokeOpacity=".2" strokeWidth="1" />
      ))}
      {points.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={2 + p[2] * 4} fill="#6C3BAA" fillOpacity={0.25 + p[2] * 0.45} />
      ))}
      <circle cx={points[7][0]} cy={points[7][1]} r="90" fill={`url(#${gradientId})`} />
    </svg>
  );
}
