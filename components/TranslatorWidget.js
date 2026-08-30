"use client";

import { useState } from "react";
import { phrases } from "../data/phrases";

export default function TranslatorWidget() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="translator">
      <span className="eyebrow on-dusk">Preizkusi prevod</span>
      <div className="translator-phrase">{phrases[current].quote}</div>
      <div className="translator-divider"></div>
      <div className="translator-label">Kaj se dogaja v ozadju</div>
      <div className="translator-meaning">{phrases[current].meaning}</div>
      <div className="translator-controls">
        <div className="translator-dots">
          {phrases.map((_, i) => (
            <div key={i} className={`dot${i === current ? " active" : ""}`} />
          ))}
        </div>
        <button
          className="translate-btn"
          aria-label="Naslednji prevod"
          onClick={() => setCurrent((current + 1) % phrases.length)}
        >
          →
        </button>
      </div>
    </div>
  );
}
