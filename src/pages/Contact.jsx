import HeroBackground from '../components/HeroBackground.jsx';
import EnquiryForm from '../components/EnquiryForm.jsx';
import { NEXT_STEPS } from '../data/content.js';

export default function Contact() {
  return (
    <>
      <header className="hero sm" id="top">
        <HeroBackground seed={41} x0={700} />
        <div className="wrap hero-in">
          <h1>Let’s talk about your next project.</h1>
          <p className="lead">
            Tell us what you are building and our teams in India and Spain will get back to you.
          </p>
        </div>
      </header>

      <section className="sec alt">
        <div className="wrap cform">
          <div className="card fcard">
            <EnquiryForm />
          </div>
          <div className="cinfo">
            <div className="card">
              <h3>India office</h3>
              <p>Regulatory address to be added</p>
            </div>
            <div className="card">
              <h3>Spain office</h3>
              <p>Regulatory address to be added</p>
            </div>
            <div className="card">
              <h3>What happens next</h3>
              {NEXT_STEPS.map((n, i) => (
                <p key={n.title} style={{ marginTop: '.8rem' }}>
                  <b>{i + 1}. {n.title} </b>
                  {n.text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
