import { useEffect, useRef } from 'react';

/**
 * Nudges an element vertically as the page scrolls, proportional to how far
 * its containing section sits from the viewport's centre. Mirrors the
 * site-fx.js parallax effect: offset = -(sectionCenter - viewportCenter) * speed.
 *
 * @param {number} speed - 0..1, how strongly the element reacts to scroll.
 * @param {string} base - an additional transform to layer under the translateY
 *   (e.g. 'translateY(-50%)' for an element that's already vertically centred).
 */
export function useParallax(speed = 0.15, base = '') {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = null;
    let ticking = false;

    const apply = () => {
      ticking = false;
      const anchor = el.closest('section') || el.parentElement || el;
      const rect = anchor.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      const center = rect.top + rect.height / 2 - vh / 2;
      const offset = -(center * speed);
      const transform = `${base ? base + ' ' : ''}translateY(${offset.toFixed(1)}px)`;
      el.style.transform = transform;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed, base]);

  return ref;
}
