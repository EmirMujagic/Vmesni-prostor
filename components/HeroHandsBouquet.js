import FlowerIcon from "./FlowerIcon";
import FlowerTulipIcon from "./FlowerTulipIcon";
import ButterflyIcon from "./ButterflyIcon";

const flowers = [
  { Icon: FlowerTulipIcon, size: 78, left: "2%", rotate: -8, color: "var(--gold)" },
  { Icon: FlowerIcon, size: 58, left: "20%", rotate: 10, color: "var(--pink-tint)" },
  { Icon: FlowerTulipIcon, size: 68, left: "36%", rotate: -6, color: "var(--gold-deep)" },
  { Icon: FlowerIcon, size: 50, left: "54%", rotate: 12, color: "var(--gold)" },
  { Icon: FlowerTulipIcon, size: 72, left: "70%", rotate: -10, color: "var(--pink-tint)" },
  { Icon: FlowerIcon, size: 56, left: "86%", rotate: 8, color: "var(--gold-deep)" },
];

const butterflies = [
  { size: 48, top: "4%", left: "10%", color: "var(--gold)", duration: "6s", delay: "0s" },
  { size: 34, top: "14%", left: "48%", color: "var(--pink-tint)", duration: "5.2s", delay: "0.5s" },
  { size: 42, top: "6%", left: "78%", color: "var(--gold-deep)", duration: "6.6s", delay: "1s" },
  { size: 28, top: "30%", left: "28%", color: "var(--gold)", duration: "5.6s", delay: "1.5s" },
  { size: 38, top: "26%", left: "64%", color: "var(--pink-tint)", duration: "6.2s", delay: "0.8s" },
  { size: 24, top: "42%", left: "4%", color: "var(--gold-deep)", duration: "5s", delay: "1.9s" },
  { size: 30, top: "38%", left: "88%", color: "var(--gold)", duration: "6.8s", delay: "1.2s" },
];

export default function HeroHandsBouquet() {
  return (
    <div className="hero-hands-bouquet" aria-hidden="true">
      <div className="hhb-flower-row">
        {flowers.map((b, i) => {
          const { Icon } = b;
          return (
            <span
              key={i}
              className="hhb-flower"
              style={{ left: b.left, width: b.size, height: b.size, color: b.color, transform: `rotate(${b.rotate}deg)` }}
            >
              <Icon />
            </span>
          );
        })}
      </div>

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
