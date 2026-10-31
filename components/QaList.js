import { qaPosts } from "../data/qaPosts";

export default function QaList() {
  return (
    <div className="qa-list">
      {qaPosts.map((post, i) => (
        <div className="qa-post" key={i}>
          <span className="qa-date">{post.date}</span>
          <div className="qa-question">{post.question}</div>
          {post.answer.map((para, j) => (
            <p className="qa-answer" key={j}>
              {para}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
