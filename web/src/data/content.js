// Site-wide navigation and footer data, shared by every page.
// Impact is intentionally left out of both — that page isn't ready yet.

export const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Founder', to: '/founder' },
  { label: 'Initiatives', to: '/programs' },
];

export const footerColumns = [
  {
    title: 'Programs',
    links: [
      { label: 'For Wildlife', to: '/for-wildlife' },
      { label: 'For Girl Empowerment', to: '/for-girl-empowerment' },
      { label: 'For Communities', to: '/for-communities' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'All Programs', to: '/programs' },
      { label: "Founder's Story", to: '/founder' },
      { label: 'About', to: '/about' },
    ],
  },
  {
    title: 'Organization',
    links: [
      { label: 'About Navodaya', to: '/about' },
      { label: 'Phaneesh Murthy', to: '/founder' },
      { label: 'Home', to: '/' },
    ],
  },
];
