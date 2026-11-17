import SectionHead from './SectionHead.jsx';
import { SERVICES } from '../data/content.js';

/** Pinned section: the three services slide sideways as you scroll (desktop). */
export default function Services() {
  return (
    <section className="svc" id="services">
      <div className="wrap svc-head">
        <SectionHead title="What we build" />
      </div>
      <div className="track">
        {SERVICES.map((s) => (
          <article className="panel" key={s.title}>
            <div className="grid2">
              <div>
                <h3>{s.title}</h3>
                <p className="tag">{s.tagline}</p>
                <p>{s.text}</p>
              </div>
              <div className="pimg">
                <img src={s.image} alt={s.title} loading="lazy" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
