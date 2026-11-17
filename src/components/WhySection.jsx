import { WHY } from '../data/content.js';
import { SITE_NAME } from '../config/site.js';

export default function WhySection() {
  return (
    <section className="sec">
      <div className="wrap why">
        <div className="l">
          <h2>Why teams choose {SITE_NAME}</h2>
          <p>Smart technology, delivered by people who work across borders.</p>
        </div>
        <div>
          {WHY.map((w) => (
            <div className="it" key={w.title}>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
