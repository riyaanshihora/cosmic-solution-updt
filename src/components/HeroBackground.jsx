import NetworkArt from './NetworkArt.jsx';
import heroPhoto from '../assets/hero.jpg';

/** Full-bleed hero background. Replace src/assets/hero.jpg to change the photo. */
export default function HeroBackground({ seed = 11, x0 = 620, photo = heroPhoto }) {
  return (
    <div className="hero-bg">
      {photo ? (
        <div className="photo" style={{ backgroundImage: `url(${photo})` }} />
      ) : (
        <NetworkArt seed={seed} x0={x0} />
      )}
    </div>
  );
}
