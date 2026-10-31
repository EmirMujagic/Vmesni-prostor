export default function Butterfly({ className = "", style = {} }) {
  return (
    <svg
      className={`butterfly-fly ${className}`}
      viewBox="0 0 100 80"
      aria-hidden="true"
      focusable="false"
      style={style}
    >
      <g className="butterfly-wing-left">
        <path
          d="M48 40 C 30 10, 5 10, 4 30 C 3 46, 22 52, 48 42 Z"
          fill="var(--bw-main, var(--gold))"
        />
        <path
          d="M48 44 C 34 56, 14 60, 10 50 C 7 42, 22 40, 48 44 Z"
          fill="var(--bw-accent, var(--gold-deep))"
        />
      </g>
      <g className="butterfly-wing-right">
        <path
          d="M52 40 C 70 10, 95 10, 96 30 C 97 46, 78 52, 52 42 Z"
          fill="var(--bw-main, var(--gold))"
        />
        <path
          d="M52 44 C 66 56, 86 60, 90 50 C 93 42, 78 40, 52 44 Z"
          fill="var(--bw-accent, var(--gold-deep))"
        />
      </g>
      <ellipse cx="50" cy="42" rx="2.4" ry="14" fill="var(--ink)" />
    </svg>
  );
}
