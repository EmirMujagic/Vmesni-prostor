import Butterfly from "./Butterfly";

const flock = [
  { left: "6%", size: 54, delay: "0s", float: "7.5s", main: "var(--gold)", accent: "var(--gold-deep)" },
  { left: "22%", size: 38, delay: "0.6s", float: "6.2s", main: "var(--pink-tint)", accent: "var(--gold)" },
  { left: "40%", size: 62, delay: "0.2s", float: "8s", main: "var(--gold-deep)", accent: "var(--sage)" },
  { left: "60%", size: 40, delay: "0.9s", float: "6.8s", main: "var(--gold)", accent: "var(--pink-tint)" },
  { left: "78%", size: 56, delay: "0.4s", float: "7.2s", main: "var(--pink-tint)", accent: "var(--gold-deep)" },
  { left: "92%", size: 34, delay: "1.1s", float: "6.5s", main: "var(--gold-deep)", accent: "var(--gold)" },
];

export default function HeroButterflies() {
  return (
    <div className="hero-flock" aria-hidden="true">
      {flock.map((b, i) => (
        <Butterfly
          key={i}
          className="hero-flock-item"
          style={{
            left: b.left,
            width: b.size,
            animationDelay: b.delay,
            animationDuration: b.float,
            "--bw-main": b.main,
            "--bw-accent": b.accent,
          }}
        />
      ))}
    </div>
  );
}
