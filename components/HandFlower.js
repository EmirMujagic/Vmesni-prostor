const petalAngles = [0, 72, 144, 216, 288];

export default function HandFlower({ skin = "#e8b89a", sleeve = "var(--dusk-2)", petal = "var(--gold)", className = "", style = {} }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 170"
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M18 170 L18 92 Q18 68 36 62 L64 62 Q82 68 82 92 L82 170 Z" fill={sleeve} />
      <path
        d="M36 62 Q26 48 30 36 Q34 24 44 30 Q46 18 56 26 Q60 16 68 26 Q76 20 76 32 Q82 42 74 52 Q70 62 58 65 Q44 66 36 62 Z"
        fill={skin}
      />
      <line x1="56" y1="30" x2="56" y2="4" stroke="var(--sage)" strokeWidth="2.5" strokeLinecap="round" />
      <g transform="translate(56,4)">
        {petalAngles.map((a) => (
          <ellipse key={a} cx="0" cy="-9" rx="5.5" ry="9" fill={petal} transform={`rotate(${a})`} />
        ))}
        <circle r="3.4" fill="var(--gold-deep)" />
      </g>
    </svg>
  );
}
