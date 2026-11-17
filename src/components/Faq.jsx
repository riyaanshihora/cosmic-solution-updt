import SectionHead from './SectionHead.jsx';
import { FAQS } from '../data/content.js';

export default function Faq() {
  return (
    <section className="sec dk">
      <div className="wrap">
        <SectionHead title="Questions, answered" />
        <div className="faq">
          {FAQS.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
