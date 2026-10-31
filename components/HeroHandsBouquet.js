import HandsIcon from "./HandsIcon";
import FlowerIcon from "./FlowerIcon";
import FlowerTulipIcon from "./FlowerTulipIcon";
import LeafIcon from "./LeafIcon";
import ButterflyIcon from "./ButterflyIcon";

const bouquet = [
  { Icon: FlowerTulipIcon, size: 86, top: "2%", left: "38%", rotate: -6, color: "var(--gold)" },
  { Icon: FlowerIcon, size: 62, top: "10%", left: "20%", rotate: 10, color: "var(--pink-tint)" },
  { Icon: FlowerIcon, size: 58, top: "16%", left: "56%", rotate: -10, color: "var(--gold-deep)" },
  { Icon: LeafIcon, size: 50, top: "28%", left: "16%", rotate: -24, color: "var(--sage)" },
  { Icon: LeafIcon, size: 46, top: "30%", left: "62%", rotate: 22, color: "var(--sage)" },
];

const sparkles = [
  { top: "0%", left: "8%", size: 8, delay: "0s" },
  { top: "6%", left: "78%", size: 6, delay: "0.7s" },
  { top: "22%", left: "84%", size: 7, delay: "1.3s" },
  { top: "2%", left: "60%", size: 5, delay: "1.9s" },
];

export default function HeroHandsBouquet() {
  return (
    <div className="hero-hands-bouquet" aria-hidden="true">
      {bouquet.map((b, i) => {
        const { Icon } = b;
        return (
          <span
            key={i}
            className="hhb-flower"
            style={{ top: b.top, left: b.left, width: b.size, height: b.size, color: b.color, transform: `rotate(${b.rotate}deg)` }}
          >
            <Icon />
          </span>
        );
      })}

      <ButterflyIcon className="hhb-butterfly" style={{ color: "var(--gold-deep)" }} />

      {sparkles.map((s, i) => (
        <span
          key={i}
          className="hhb-sparkle"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }}
        />
      ))}

      <HandsIcon className="hhb-hands" style={{ color: "var(--paper)" }} />
    </div>
  );
}
