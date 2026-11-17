import HeroBackground from '../components/HeroBackground.jsx';
import SectionHead from '../components/SectionHead.jsx';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';
import Steps from '../components/Steps.jsx';
import Faq from '../components/Faq.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import { PRINCIPLES } from '../data/content.js';
import { SITE_NAME } from '../config/site.js';

export default function About() {
  return (
    <>
      <header className="hero sm" id="top">
        <HeroBackground seed={29} x0={700} />
        <div className="wrap hero-in">
          <h1>A cross-continental partner for intelligent digital products.</h1>
          <p className="lead">About {SITE_NAME}</p>
        </div>
      </header>

      <section className="sec alt story">
        <div className="wrap">
          <SectionHead title="Who we are" />
          <div className="cols">
            <p>
              {SITE_NAME} is a cross-continental IT partner bridging operational hubs in India and
              Spain to architect next-generation digital products.
            </p>
            <p>
              We specialise exclusively in intelligent, high-availability, AI-infused website
              environments and customized enterprise software frameworks built for a global audience.
            </p>
          </div>
          <ImagePlaceholder label="team or studio photo (wide)" parallax />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead title="What guides our work" />
          <div className="three">
            {PRINCIPLES.map((p) => (
              <div className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Steps />
      <Faq />
      <CtaBanner />
    </>
  );
}
