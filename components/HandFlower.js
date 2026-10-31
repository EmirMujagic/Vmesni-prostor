const petalAngles = [0, 72, 144, 216, 288];

const fingers = [
  { angle: -22, length: 62, width: 11 },
  { angle: -7, length: 74, width: 12 },
  { angle: 8, length: 70, width: 11.5 },
  { angle: 23, length: 56, width: 10 },
];

export default function HandFlower({ skin = "#e8b89a", petal = "var(--gold)", className = "", style = {} }) {
  return (
    <svg
      className={className}
      viewBox="0 0 110 190"
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      {/* palm + wrist */}
      <path
        d="M34 190 L30 120 Q28 98 40 90 L70 90 Q82 98 80 120 L76 190 Z"
        fill={skin}
      />

      {/* fingers, fanned from a common base */}
      {fingers.map((f, i) => (
        <rect
          key={i}
          x="49"
          y={90 - f.length}
          width={f.width}
          height={f.length + 14}
          rx={f.width / 2}
          fill={skin}
          transform={`rotate(${f.angle} 55 92)`}
        />
      ))}
      {/* knuckle crease lines */}
      {fingers.map((f, i) => (
        <path
          key={`k${i}`}
          d={`M${49} ${90 - f.length * 0.42} q5 4 10 0`}
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="1.3"
          fill="none"
          transform={`rotate(${f.angle} 55 92)`}
        />
      ))}

      {/* thumb, bent toward the stem */}
      <rect x="18" y="72" width="34" height="15" rx="7.5" fill={skin} transform="rotate(-48 25 86)" />

      {/* flower stem held at the fingertip pinch point */}
      <line x1="55" y1="24" x2="55" y2="4" stroke="var(--sage)" strokeWidth="2.4" strokeLinecap="round" />
      <g transform="translate(55,4)">
        {petalAngles.map((a) => (
          <ellipse key={a} cx="0" cy="-9" rx="5.5" ry="9" fill={petal} transform={`rotate(${a})`} />
        ))}
        <circle r="3.4" fill="var(--gold-deep)" />
      </g>
    </svg>
  );
}
