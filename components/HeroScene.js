import HandFlower from "./HandFlower";
import Butterfly from "./Butterfly";

const hands = [
  { left: "4%", width: 100, skin: "#e8b89a", petal: "var(--gold)" },
  { left: "36%", width: 120, skin: "#c98a63", petal: "var(--pink-tint)" },
  { left: "68%", width: 100, skin: "#8a5a3f", petal: "var(--gold-deep)" },
];

const butterflies = [
  { left: "14%", top: "6%", size: 36, delay: "0s", duration: "6.5s", main: "var(--gold)", accent: "var(--gold-deep)" },
  { left: "44%", top: "0%", size: 44, delay: "0.5s", duration: "7.2s", main: "var(--pink-tint)", accent: "var(--gold)" },
  { left: "72%", top: "10%", size: 34, delay: "0.9s", duration: "6s", main: "var(--gold-deep)", accent: "var(--pink-tint)" },
  { left: "28%", top: "22%", size: 26, delay: "1.3s", duration: "5.6s", main: "var(--gold)", accent: "var(--sage)" },
];

export default function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      {hands.map((h, i) => (
        <HandFlower
          key={i}
          className="hero-scene-hand"
          skin={h.skin}
          petal={h.petal}
          style={{ left: h.left, width: h.width }}
        />
      ))}
      {butterflies.map((b, i) => (
        <Butterfly
          key={i}
          className="hero-scene-butterfly"
          style={{
            left: b.left,
            top: b.top,
            width: b.size,
            animationDelay: b.delay,
            animationDuration: b.duration,
            "--bw-main": b.main,
            "--bw-accent": b.accent,
          }}
        />
      ))}
    </div>
  );
}
