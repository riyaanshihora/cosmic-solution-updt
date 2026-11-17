import { useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import useHashRoute from './hooks/useHashRoute.js';
import useScrollAnimations from './hooks/useScrollAnimations.js';

const PAGES = { home: Home, about: About, contact: Contact };

export default function App() {
  const page = useHashRoute();
  const root = useRef(null);
  useScrollAnimations(root, page);
  const Page = PAGES[page];

  return (
    <div ref={root}>
      <div id="bar" />
      <Navbar page={page} />
      <main key={page}>
        <Page />
      </main>
      <Footer />
    </div>
  );
}
