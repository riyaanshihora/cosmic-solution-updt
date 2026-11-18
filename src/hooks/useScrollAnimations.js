import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * All scroll-driven motion lives here: progress bar, hero parallax, word reveal,
 * card reveals, image parallax, and the pinned horizontal services track.
 * Re-runs whenever the page changes, and respects reduced-motion settings.
 */
export default function useScrollAnimations(rootRef, page) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('#bar', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.2 },
      });

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.hero-in>*', { opacity: 0, y: 22, duration: 1.1, stagger: 0.12, ease: 'power3.out' });

        gsap.to('.hero-bg .photo,.hero-bg svg', {
          yPercent: 7,
          ease: 'none',
          scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
        });

        gsap.to('.hero-in', {
          opacity: 0.2,
          y: -40,
          ease: 'none',
          scrollTrigger: { trigger: '.hero', start: 'center top', end: 'bottom top', scrub: true },
        });

        gsap.to('.intro .w', {
          color: '#6A1B29',
          stagger: 0.12,
          ease: 'none',
          scrollTrigger: { trigger: '.intro p.big', start: 'top 80%', end: 'bottom 45%', scrub: true },
        });

        gsap.utils.toArray('[data-par]').forEach((el) =>
          gsap.fromTo(
            el,
            { yPercent: -5 },
            {
              yPercent: 5,
              ease: 'none',
              scrollTrigger: { trigger: el.parentNode, start: 'top bottom', end: 'bottom top', scrub: true },
            }
          )
        );

        gsap.set('.card', { opacity: 0 });
        ScrollTrigger.batch('.card', {
          start: 'top 90%',
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(batch, { opacity: 0, y: 32 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.8, ease: 'power2.out' }),
        });
      });

      mm.add('(min-width: 900px) and (prefers-reduced-motion: no-preference)', () => {
        const track = document.querySelector('.track');
        if (!track) return;
        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
            trigger: '.svc',
            pin: true,
            start: 'top top',
            end: () => '+=' + (track.scrollWidth - window.innerWidth),
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, [rootRef, page]);
}
