import { useEffect, useRef } from 'react';

/**
 * A hairline (2px) scroll-progress bar pinned to the very top of the
 * viewport. Driven entirely by a scroll listener + rAF writing directly to
 * the element's transform — no React state, so it never re-renders.
 */
export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    let raf = null;
    let ticking = false;

    const apply = () => {
      ticking = false;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
      el.style.transform = `scaleX(${progress})`;
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
  }, []);

  return <div ref={barRef} className="nv-scroll-progress" aria-hidden="true" style={{ transform: 'scaleX(0)' }} />;
}
