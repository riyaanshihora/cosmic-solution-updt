import { SITE_NAME } from '../config/site.js';

export default function Footer() {
  return (
    <footer className="close" id="site-footer">
      <div className="wrap">
        <div className="big">{SITE_NAME}</div>
        <div className="f">
          <div>
            <h3>India office</h3>
            <p>Regulatory address to be added</p>
          </div>
          <div>
            <h3>Spain office</h3>
            <p>Regulatory address to be added</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>Global phone numbers and website URL to be added</p>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="#top">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About us</a>
            <a href="#contact">Contact us</a>
          </div>
        </div>
        <small>© 2026 {SITE_NAME}. Global AI-driven web and software development.</small>
      </div>
    </footer>
  );
}
