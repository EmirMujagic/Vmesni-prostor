import HeroIllustration from "./HeroIllustration";

export default function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <HeroIllustration />
      <span className="hero-scene-sparkle hero-scene-sparkle-1" />
      <span className="hero-scene-sparkle hero-scene-sparkle-2" />
      <span className="hero-scene-sparkle hero-scene-sparkle-3" />
    </div>
  );
}
