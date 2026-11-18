import HeroBackground from '../components/HeroBackground.jsx';
import SectionHead from '../components/SectionHead.jsx';
import Services from '../components/Services.jsx';
import Steps from '../components/Steps.jsx';
import WhySection from '../components/WhySection.jsx';
import Faq from '../components/Faq.jsx';
import CtaBanner from '../components/CtaBanner.jsx';
import { INTRO, TRIO, CAPABILITIES } from '../data/content.js';

export default function Home() {
  return (
    <>
      <header className="hero" id="top">
        <HeroBackground seed={11} x0={620} />
        <div className="wrap hero-in">
          <h1>Intelligent websites and software, built across two continents.</h1>
          <p className="lead">
            Global AI-driven web and software development from our hubs in India and Spain.
          </p>
          <div className="btns">
            <a className="btn" href="#services">Our services</a>
            <a className="lnk" href="#about">About us</a>
          </div>
          <div className="facts">
            <div><b>India and Spain</b>Two delivery hubs</div>
            <div><b>AI-infused</b>Websites and software</div>
            <div><b>GDPR-aligned</b>Built for compliance</div>
          </div>
        </div>
      </header>

      <section className="intro">
        <div className="wrap">
          <p className="big">
            {INTRO.split(' ').map((w, i) => (
              <span className="w" key={i}>{w} </span>
            ))}
          </p>
          <div className="trio">
            {TRIO.map((t) => (
              <div className="card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead
            title="Everything your product needs to think ahead"
            subtitle="Six capabilities that make websites and software smarter from day one."
          />
          <div className="bento">
             {CAPABILITIES.map((c) => (
  <div className="card cap" key={c.title}>
    <img className="cap-img" src={c.image} alt="" />
    <div className="cap-t">
      <h3>{c.title}</h3>
      <p>{c.text}</p>
    </div>
  </div>
))}
        
          </div>
        </div>
      </section>

      <Services />
      <Steps />
      <WhySection />
      <Faq />
      <CtaBanner />
    </>
  );
}
