/**
 * Hero diagram for the driving-school migration.
 *
 * The other projects put a recorded walkthrough in this slot. A migration has
 * nothing worth watching, but it does have a shape — two systems that disagree
 * about keys, schools and columns, collapsing into one tenant schema — and no
 * screenshot shows that, because it never existed on one screen.
 *
 * Drawn at 1200×600 (the 16/8 the hero slot expects) and scaled by the
 * container. Below ~860px that scale makes the labels unreadable, so the
 * wrapper scrolls sideways instead of shrinking further — see `.mig` in
 * `src/index.css`.
 *
 * SVG text does not wrap, so every string here is written to fit its box:
 * roughly 40 characters at the body size, 30 at the display size. Lengthening
 * one runs it out past the border.
 */

const CARD_W = 300;
const CARD_H = 128;

const SOURCES = [
  {
    eyebrow: 'Source — legacy',
    title: 'MySQL',
    meta: ['17 tables, keys from 1', 'school held as free text'],
    y: 64,
  },
  {
    eyebrow: 'Source — newer app',
    title: 'PostgreSQL',
    meta: ['own users, schools, courses', 'keys also from 1'],
    y: 224,
  },
];

const NOTES = [
  {
    title: 'Colliding keys',
    lines: ['Both sides start at one — each re-based', 'past the other’s max, with old_id kept.'],
  },
  {
    title: 'A school stored as text',
    lines: ['Names trimmed, lowered, de-aliased,', 'then joined for a real school_id.'],
  },
  {
    title: 'Columns with no counterpart',
    lines: ['driver_ed, has_paid and the fee lock', 'derived from what old rows proved.'],
  },
];

export default function MigrationDiagram({ accent = '#f6ad55' }) {
  return (
    <div className="mig">
      <svg className="mig__svg" viewBox="0 0 1200 600" role="img" aria-labelledby="mig-title">
        <title id="mig-title">
          Two source databases — a legacy MySQL application and a newer PostgreSQL one — merged by
          PySpark on Databricks into a single 44-table tenant schema on PostgreSQL, reconciling
          colliding primary keys, free-text school names and columns absent from the old schema.
        </title>

        <defs>
          <marker
            id="mig-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 0 L10 5 L0 10 z" fill={accent} />
          </marker>
          <radialGradient id="mig-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.15" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="370" y="18" width="460" height="380" fill="url(#mig-glow)" />

        {/* -- the flow --------------------------------------------------- */}
        {SOURCES.map((s) => (
          <g key={s.title + s.y}>
            <rect className="mig__box" x="60" y={s.y} width={CARD_W} height={CARD_H} rx="12" />
            <text className="mig__eyebrow" x="86" y={s.y + 34}>
              {s.eyebrow}
            </text>
            <text className="mig__name" x="86" y={s.y + 72}>
              {s.title}
            </text>
            {s.meta.map((line, i) => (
              <text className="mig__meta" key={line} x="86" y={s.y + 96 + i * 20}>
                {line}
              </text>
            ))}
          </g>
        ))}

        <path
          className="mig__link"
          d="M360 128 C 398 128, 404 168, 436 168"
          markerEnd="url(#mig-arrow)"
        />
        <path
          className="mig__link"
          d="M360 288 C 398 288, 404 248, 436 248"
          markerEnd="url(#mig-arrow)"
        />

        <rect
          className="mig__box mig__box--engine"
          x="440"
          y="108"
          width="320"
          height="200"
          rx="12"
          style={{ stroke: accent }}
        />
        <text className="mig__eyebrow" x="468" y="146" style={{ fill: accent }}>
          Transform
        </text>
        <text className="mig__name" x="468" y="184">
          PySpark
        </text>
        <text className="mig__meta" x="468" y="214">
          on Databricks, over JDBC
        </text>
        <text className="mig__meta" x="468" y="244">
          <tspan className="mig__figure" style={{ fill: accent }}>
            22
          </tspan>
          <tspan dx="8">shared transforms</tspan>
        </text>
        <text className="mig__meta" x="468" y="274">
          partitioned reads, batched writes
        </text>

        <path
          className="mig__link mig__link--main"
          d="M760 208 L 830 208"
          markerEnd="url(#mig-arrow)"
        />

        <rect
          className="mig__box mig__box--target"
          x="840"
          y="123"
          width={CARD_W}
          height="170"
          rx="12"
        />
        <text className="mig__eyebrow" x="866" y="161">
          Target
        </text>
        <text className="mig__name" x="866" y="199">
          PostgreSQL
        </text>
        <text className="mig__meta" x="866" y="229">
          schema tenant_&lt;uuid&gt;
        </text>
        <text className="mig__meta" x="866" y="259">
          <tspan className="mig__figure" style={{ fill: accent }}>
            44
          </tspan>
          <tspan dx="8">tables, one tenant</tspan>
        </text>

        {/* -- what the merge had to resolve ------------------------------ */}
        <line className="mig__rule" x1="60" y1="372" x2="1140" y2="372" />
        <text className="mig__eyebrow" x="60" y="400">
          What the merge had to resolve
        </text>

        {NOTES.map((n, i) => {
          const x = 60 + i * 367; // 3 × 346 + 2 × 21 gap spans the full 1080 rule
          return (
            <g key={n.title}>
              <rect
                className="mig__box mig__box--note"
                x={x}
                y="420"
                width="346"
                height="128"
                rx="12"
              />
              <text className="mig__num" x={x + 22} y="452" style={{ fill: accent }}>
                {`0${i + 1}`}
              </text>
              <text className="mig__note-title" x={x + 22} y="480">
                {n.title}
              </text>
              {n.lines.map((line, j) => (
                <text className="mig__note-text" key={line} x={x + 22} y={506 + j * 20}>
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
