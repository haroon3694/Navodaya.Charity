import { useEffect, useRef, useState } from 'react';

const format = (v) => Math.round(v).toLocaleString('en-US');

/**
 * Animates from 0 up to `target` with an ease-out cubic curve once `start`
 * becomes true. Mirrors the original `data-count` counter animation.
 */
export function useCountUp(target, { suffix = '', duration = 1400, start = true } = {}) {
  const [display, setDisplay] = useState(format(0) + suffix);
  const started = useRef(false);

  useEffect(() => {
    if (!start || started.current) return;
    started.current = true;

    const t0 = performance.now();
    let raf;
    const step = (now) => {
      const t = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(format(target * eased) + suffix);
      if (t < 1) raf = requestAnimationFrame(step);
      else setDisplay(format(target) + suffix);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, target, suffix, duration]);

  return display;
}
