import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Mnenja</span>
          <h2>Kaj pravijo starši, ki so že prišli skozi</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              {t.placeholder && <span className="testimonial-placeholder-tag">PRIMER — ni pravo mnenje</span>}
              <p>&ldquo;{t.text}&rdquo;</p>
              <div className="testimonial-name">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
