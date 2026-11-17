import logo from '../assets/logo.png';
import { SITE_NAME } from '../config/site.js';

const LINKS = [
  { id: 'top', label: 'Home', page: 'home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About us', page: 'about' },
  { id: 'contact', label: 'Contact', page: 'contact' },
];

export default function Navbar({ page }) {
  return (
    <nav>
      <a href="#top" aria-label={`${SITE_NAME} home`}>
        <img src={logo} alt={SITE_NAME} />
      </a>
      <ul>
        {LINKS.map((l) => (
          <li key={l.id}>
            <a href={`#${l.id}`} aria-current={l.page === page ? 'page' : undefined}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
