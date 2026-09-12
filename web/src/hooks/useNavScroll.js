import { useEffect, useState } from 'react';

/**
 * Tracks whether the page has scrolled past a small threshold, so the nav
 * bar can switch from a transparent hero overlay to a solid, blurred bar.
 */
export function useNavScroll(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
