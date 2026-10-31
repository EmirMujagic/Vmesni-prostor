import FlowerIcon from "./FlowerIcon";
import FlowerTulipIcon from "./FlowerTulipIcon";
import ButterflyIcon from "./ButterflyIcon";

const flowers = [
  { Icon: FlowerTulipIcon, size: 84, top: "58%", left: "10%", rotate: -8, color: "var(--gold)" },
  { Icon: FlowerIcon, size: 64, top: "70%", left: "40%", rotate: 10, color: "var(--pink-tint)" },
  { Icon: FlowerTulipIcon, size: 72, top: "62%", left: "68%", rotate: -6, color: "var(--gold-deep)" },
];

const butterflies = [
  { size: 48, top: "6%", left: "14%", color: "var(--gold)", duration: "6s", delay: "0s" },
  { size: 36, top: "18%", left: "60%", color: "var(--pink-tint)", duration: "5.2s", delay: "0.6s" },
  { size: 42, top: "40%", left: "80%", color: "var(--gold-deep)", duration: "6.6s", delay: "1.1s" },
  { size: 30, top: "34%", left: "32%", color: "var(--gold)", duration: "5.6s", delay: "1.6s" },
];

export default function HeroHandsBouquet() {
  return (
    <div className="hero-hands-bouquet" aria-hidden="true">
      {flowers.map((b, i) => {
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

      {butterflies.map((b, i) => (
        <ButterflyIcon
          key={i}
          className="hhb-butterfly"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            color: b.color,
            animationDuration: b.duration,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
