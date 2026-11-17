import { useEffect, useState } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const read = () => {
  const hash = window.location.hash;
  if (hash === '#about') return 'about';
  if (hash === '#contact') return 'contact';
  return 'home';
};

/**
 * Tiny hash router: #about and #contact are pages, anything else is the home page.
 * On the home page, hashes such as #services scroll to that section.
 */
export default function useHashRoute() {
  const [page, setPage] = useState(read);

  useEffect(() => {
    const onChange = () => {
      const next = read();
      setPage(next);
      setTimeout(() => {
        ScrollTrigger.refresh();
        const id = window.location.hash.slice(1);
        const el = next === 'home' && id && id !== 'top' ? document.getElementById(id) : null;
        window.scrollTo(0, el ? el.getBoundingClientRect().top + window.scrollY : 0);
      }, 80);
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return page;
}
