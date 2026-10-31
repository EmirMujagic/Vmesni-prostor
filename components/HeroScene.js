import HeroIllustration from "./HeroIllustration";
import ButterflyIcon from "./ButterflyIcon";
import FlowerIcon from "./FlowerIcon";

export default function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <HeroIllustration />
      <ButterflyIcon className="hero-scene-butterfly" style={{ color: "var(--gold)" }} />
      <FlowerIcon className="hero-scene-flower" style={{ color: "var(--pink-tint)" }} />
    </div>
  );
}
