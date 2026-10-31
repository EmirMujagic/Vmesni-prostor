import { qaPosts } from "../data/qaPosts";
import Reveal from "./Reveal";

export default function QaList() {
  return (
    <div className="qa-list">
      {qaPosts.map((post, i) => (
        <Reveal key={i} delay={(i % 3) * 100}>
          <div className="qa-post">
            <span className="qa-date">{post.date}</span>
            <div className="qa-question">{post.question}</div>
            {post.answer.map((para, j) => (
              <p className="qa-answer" key={j}>
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
