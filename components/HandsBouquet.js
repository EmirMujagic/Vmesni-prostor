const fingers = [
  { angle: -22, length: 62, width: 11 },
  { angle: -7, length: 74, width: 12 },
  { angle: 8, length: 70, width: 11.5 },
  { angle: 23, length: 56, width: 10 },
];

function Hand({ flip = false, color = "var(--paper)" }) {
  return (
    <g transform={flip ? "translate(110,0) scale(-1,1)" : undefined}>
      <path
        d="M34 190 L30 120 Q28 98 40 90 L70 90 Q82 98 80 120 L76 190 Z"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <rect x="18" y="72" width="34" height="15" rx="7.5" fill="none" stroke={color} strokeWidth="2.2" transform="rotate(-48 25 86)" />
      <ellipse cx="18.5" cy="79.5" rx="3.2" ry="4.2" fill={color} transform="rotate(-48 25 86)" />
      {fingers.map((f, i) => (
        <g key={i} transform={`rotate(${f.angle} 55 92)`}>
          <rect x="49" y={90 - f.length} width={f.width} height={f.length + 14} rx={f.width / 2} fill="none" stroke={color} strokeWidth="2.2" />
          <ellipse cx={49 + f.width / 2} cy={90 - f.length + f.width / 2} rx={f.width / 2 - 1.5} ry={f.width / 2} fill={color} />
        </g>
      ))}
    </g>
  );
}

function Flower({ x, y, scale = 1, color = "var(--gold)" }) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      {petals.map((a) => (
        <path
          key={a}
          d="M0 0 C 4 -6, 4 -16, 0 -20 C -4 -16, -4 -6, 0 0 Z"
          fill="none"
          stroke={color}
          strokeWidth="1.8"
          strokeLinejoin="round"
          transform={`rotate(${a})`}
        />
      ))}
      <circle r="3" fill={color} />
    </g>
  );
}

function Leaf({ x, y, rotate = 0, color = "var(--sage)" }) {
  return (
    <path
      d="M0 0 C 10 -4, 16 -14, 10 -24 C 4 -14, -2 -4, 0 0 Z"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinejoin="round"
      transform={`translate(${x},${y}) rotate(${rotate})`}
    />
  );
}

function Sparkle({ x, y, size = 10, delay = "0s" }) {
  return (
    <path
      className="sparkle-twinkle"
      d={`M0 ${-size} Q ${size * 0.25} ${-size * 0.25} ${size} 0 Q ${size * 0.25} ${size * 0.25} 0 ${size} Q ${-size * 0.25} ${size * 0.25} ${-size} 0 Q ${-size * 0.25} ${-size * 0.25} 0 ${-size} Z`}
      fill="var(--gold)"
      transform={`translate(${x},${y})`}
      style={{ animationDelay: delay }}
    />
  );
}

export default function HandsBouquet() {
  return (
    <svg className="hands-bouquet" viewBox="0 0 400 320" aria-hidden="true" focusable="false">
      {/* stems */}
      <path d="M200 320 L200 160" stroke="var(--sage)" strokeWidth="2.2" fill="none" />
      <path d="M200 220 C 170 210, 150 190, 145 160" stroke="var(--sage)" strokeWidth="2" fill="none" />
      <path d="M200 200 C 230 188, 250 172, 258 148" stroke="var(--sage)" strokeWidth="2" fill="none" />

      <Leaf x={168} y={248} rotate={-30} />
      <Leaf x={232} y={236} rotate={35} />
      <Leaf x={190} y={280} rotate={-12} />

      <Flower x={200} y={150} scale={1.25} color="var(--gold)" />
      <Flower x={145} y={158} scale={0.85} color="var(--pink-tint)" />
      <Flower x={258} y={146} scale={0.9} color="var(--gold-deep)" />

      <g className="bouquet-butterfly">
        <g className="bouquet-wing-left">
          <path d="M296 90 C 280 64, 258 64, 256 82 C 255 96, 272 100, 296 92 Z" fill="none" stroke="var(--gold)" strokeWidth="2" />
        </g>
        <g className="bouquet-wing-right">
          <path d="M300 90 C 316 64, 338 64, 340 82 C 341 96, 324 100, 300 92 Z" fill="none" stroke="var(--gold)" strokeWidth="2" />
        </g>
        <line x1="298" y1="78" x2="298" y2="100" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      </g>

      <Sparkle x={120} y={90} size={7} delay="0s" />
      <Sparkle x={300} y={130} size={9} delay="0.6s" />
      <Sparkle x={330} y={190} size={6} delay="1.1s" />
      <Sparkle x={100} y={170} size={6} delay="1.6s" />

      <g transform="translate(70,130)">
        <Hand color="var(--paper)" />
      </g>
      <g transform="translate(220,130)">
        <Hand flip color="var(--paper)" />
      </g>
    </svg>
  );
}
