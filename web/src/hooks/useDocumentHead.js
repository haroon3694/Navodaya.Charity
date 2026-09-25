import { useEffect } from 'react';

export const SITE_URL = 'https://navodayacharity.web.app';

// Vite/CSR gives every route the same static index.html <head>; this pushes
// a per-page <title>/description/canonical on mount so each route can target
// its own search terms instead of sharing one generic tag set.
export function useDocumentHead({ title, description, path = '/' }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    let descTag = document.querySelector('meta[name="description"]');
    const prevDescription = descTag?.getAttribute('content');
    if (description) {
      if (!descTag) {
        descTag = document.createElement('meta');
        descTag.setAttribute('name', 'description');
        document.head.appendChild(descTag);
      }
      descTag.setAttribute('content', description);
    }

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    if (title) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    if (description) ogDesc.setAttribute('content', description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const href = `${SITE_URL}${path}`;
    canonical.setAttribute('href', href);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', href);

    return () => {
      document.title = prevTitle;
      if (descTag && prevDescription != null) descTag.setAttribute('content', prevDescription);
    };
  }, [title, description, path]);
}
