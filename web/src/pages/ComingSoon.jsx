import { Link } from 'react-router-dom';

/**
 * Shared placeholder for pages that exist as routes but aren't linked from
 * the nav/footer yet (e.g. Blog, Impact). Swap the content out once the real
 * page is ready — nothing else needs to change to "unhide" it.
 */
export default function ComingSoon({ title }) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        textAlign: 'center',
        padding: '20px clamp(20px,5vw,56px)',
        background: '#fff',
        fontFamily: "'Inter', system-ui, sans-serif",
        color: '#3a463f',
      }}
    >
      <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.18rem', color: '#233027' }}>
        Navodaya
      </span>
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem,4vw,2.8rem)',
          color: '#233027',
          margin: 0,
          fontWeight: 700,
        }}
      >
        {title}
      </h1>
      <p style={{ fontSize: '0.95rem', color: '#6a756e', maxWidth: 420, lineHeight: 1.7 }}>
        This page is coming soon.
      </p>
      <Link to="/" className="nv-link" style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1A3C2B' }}>
        ← Back to home
      </Link>
    </div>
  );
}
