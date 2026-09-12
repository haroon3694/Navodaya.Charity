import { useEffect, useRef, useState } from 'react';

/**
 * Reveals an element (fade + rise) the first time it scrolls into view.
 * Mirrors the original `data-fade` behaviour driven by an IntersectionObserver.
 *
 * Defaults are unchanged from the original implementation so existing call
 * sites keep behaving exactly as before; pass `threshold`/`rootMargin` to
 * tune when a specific reveal fires (e.g. the ~15–20% entry point used by
 * the newer staggered reveals).
 */
export function useFadeIn({ threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);

  return { ref, visible };
}
