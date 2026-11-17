import SectionHead from './SectionHead.jsx';
import { STEPS } from '../data/content.js';

export default function Steps() {
  return (
    <section className="sec alt">
      <div className="wrap">
        <SectionHead
          title="From first call to global launch"
          subtitle="A clear path from idea to a product people use around the world."
        />
        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="card" key={s.title}>
              <div className="n">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
