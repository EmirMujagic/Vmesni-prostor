import FlowerIcon from "./FlowerIcon";
import FlowerTulipIcon from "./FlowerTulipIcon";
import LeafIcon from "./LeafIcon";
import ButterflyIcon from "./ButterflyIcon";

const items = [
  { Icon: FlowerTulipIcon, size: 110, top: "4%", left: "30%", rotate: -8, color: "var(--gold)", delay: "0s" },
  { Icon: FlowerIcon, size: 86, top: "0%", left: "58%", rotate: 10, color: "var(--pink-tint)", delay: "0.4s" },
  { Icon: FlowerTulipIcon, size: 90, top: "30%", left: "4%", rotate: 14, color: "var(--gold-deep)", delay: "0.8s" },
  { Icon: FlowerIcon, size: 70, top: "40%", left: "68%", rotate: -12, color: "var(--gold)", delay: "1.1s" },
  { Icon: LeafIcon, size: 64, top: "56%", left: "22%", rotate: -20, color: "var(--sage)", delay: "0.3s" },
  { Icon: LeafIcon, size: 56, top: "18%", left: "44%", rotate: 30, color: "var(--sage)", delay: "0.9s" },
  { Icon: FlowerTulipIcon, size: 72, top: "62%", left: "54%", rotate: 6, color: "var(--pink-tint)", delay: "0.6s" },
];

export default function HeroGarden() {
  return (
    <div className="hero-garden" aria-hidden="true">
      {items.map((it, i) => {
        const { Icon } = it;
        return (
          <span
            key={i}
            className="hero-garden-item"
            style={{
              top: it.top,
              left: it.left,
              width: it.size,
              height: it.size,
              color: it.color,
              transform: `rotate(${it.rotate}deg)`,
              animationDelay: it.delay,
            }}
          >
            <Icon />
          </span>
        );
      })}
      <ButterflyIcon className="hero-garden-butterfly" style={{ color: "var(--gold-deep)" }} />
    </div>
  );
}
