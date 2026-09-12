import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router doesn't reset scroll position between route changes (it's
 * still a single page, so the browser has no reason to). Without this, going
 * from a scrolled-down page to a new route lands you wherever the scroll
 * happened to be, instead of the top of the destination page.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
