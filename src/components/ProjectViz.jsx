/**
 * Generated artwork for project + blog cards.
 *
 * The reference template used product screenshots. For a data engineering
 * portfolio an abstract pipeline/topology diagram reads better and stays
 * sharp at any size — so each card gets a deterministic diagram derived
 * from its slug, tinted with the project's accent colour.
 */

// Small deterministic PRNG so the same slug always renders the same artwork.
function seeded(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return () => {
    h += 0x6d2b79f5;
    let t = h;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function ProjectViz({ seed = 'default', accent = '#7c8cff', variant = 'flow' }) {
  const rand = seeded(seed);
  const id = `v-${seed.replace(/[^a-z0-9]/gi, '')}`;

  // Three columns of nodes: sources → processing → sinks
  const columns = [
    { x: 66, count: 3 + Math.floor(rand() * 2) },
    { x: 200, count: 2 },
    { x: 334, count: 2 + Math.floor(rand() * 2) },
  ];

  const nodes = columns.map((col) => {
    const gap = 150 / (col.count + 1);
    return Array.from({ length: col.count }, (_, i) => ({
      x: col.x,
      y: 40 + gap * (i + 1) + (rand() - 0.5) * 12,
      r: 5 + rand() * 4,
    }));
  });

  const edges = [];
  for (let c = 0; c < nodes.length - 1; c += 1) {
    nodes[c].forEach((from) => {
      nodes[c + 1].forEach((to) => {
        if (rand() > 0.42) edges.push({ from, to, dash: rand() > 0.6 });
      });
    });
  }

  const bars = Array.from({ length: 11 }, () => 26 + rand() * 88);

  return (
    <svg className="viz" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" role="img" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2c2c37" />
          <stop offset="100%" stopColor="#1c1c24" />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="42%" r="62%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <pattern id={`${id}-grid`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0v20" fill="none" stroke="rgba(255,255,255,0.045)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="400" height="240" fill={`url(#${id}-bg)`} />
      <rect width="400" height="240" fill={`url(#${id}-grid)`} />
      <rect width="400" height="240" fill={`url(#${id}-glow)`} />

      {variant === 'flow' ? (
        <g>
          {edges.map((e, i) => (
            <path
              key={i}
              d={`M${e.from.x + e.from.r} ${e.from.y} C ${(e.from.x + e.to.x) / 2} ${e.from.y}, ${
                (e.from.x + e.to.x) / 2
              } ${e.to.y}, ${e.to.x - e.to.r} ${e.to.y}`}
              fill="none"
              stroke={accent}
              strokeOpacity={e.dash ? 0.22 : 0.42}
              strokeWidth="1"
              strokeDasharray={e.dash ? '3 4' : undefined}
            />
          ))}

          {nodes.flat().map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r={n.r + 5} fill={accent} fillOpacity="0.07" />
              <circle
                cx={n.x}
                cy={n.y}
                r={n.r}
                fill="#22222b"
                stroke={accent}
                strokeOpacity="0.75"
                strokeWidth="1.3"
              />
            </g>
          ))}

          {/* stage labels as abstract rules */}
          <g stroke="rgba(255,255,255,0.14)" strokeWidth="1">
            <path d="M40 206h52M174 206h52M308 206h52" />
          </g>
        </g>
      ) : (
        <g>
          {/* throughput bars for blog artwork */}
          {bars.map((h, i) => (
            <rect
              key={i}
              x={44 + i * 28}
              y={198 - h}
              width="14"
              height={h}
              rx="3"
              fill={accent}
              fillOpacity={0.25 + (i % 3) * 0.2}
            />
          ))}
          <path
            d={bars
              .map((h, i) => `${i === 0 ? 'M' : 'L'}${51 + i * 28} ${192 - h}`)
              .join(' ')}
            fill="none"
            stroke={accent}
            strokeOpacity="0.85"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M36 198h330" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
          <path d="M36 40h96M36 56h60" stroke="rgba(255,255,255,0.13)" strokeWidth="1" />
        </g>
      )}
    </svg>
  );
}
