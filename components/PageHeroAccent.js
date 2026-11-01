import ButterflyIcon from "./ButterflyIcon";

const butterflies = [
  { size: 36, top: "14%", left: "78%", color: "var(--gold)", duration: "6.5s", delay: "0s" },
  { size: 24, top: "52%", left: "90%", color: "var(--pink-tint)", duration: "5.6s", delay: "0.6s" },
  { size: 28, top: "30%", left: "60%", color: "var(--gold-deep)", duration: "6s", delay: "1.1s" },
];

export default function PageHeroAccent() {
  return (
    <>
      {butterflies.map((b, i) => (
        <ButterflyIcon
          key={i}
          className="page-hero-butterfly"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            color: b.color,
            animationDuration: b.duration,
            animationDelay: b.delay,
          }}
        />
      ))}
    </>
  );
}
