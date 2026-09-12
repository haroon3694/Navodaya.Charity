import { Link } from 'react-router-dom';
import { footerColumns } from '../data/content';

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{ background: '#fff', borderTop: '1px solid #ECE7DE', padding: 'clamp(48px,6vw,72px) clamp(20px,5vw,56px) 28px' }}
    >
      <div
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: 40,
          marginBottom: 44,
        }}
      >
        <div style={{ gridColumn: 'span 2', minWidth: 240 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.1rem', color: '#233027' }}>
              Navodaya Foundation
            </span>
          </div>
          <p style={{ fontSize: '0.86rem', color: '#8a938c', lineHeight: 1.7, margin: 0, maxWidth: 320 }}>
            A new dawn for wildlife and India's people. Empowering Lives · Protecting Nature.
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h5 style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#C77A14', margin: '0 0 16px' }}>
              {column.title}
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {column.links.map((link) => (
                <Link key={link.label} to={link.to} className="nv-link" style={{ fontSize: '0.86rem', color: '#6a756e', textDecoration: 'none' }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          maxWidth: 1080,
          margin: '0 auto',
          borderTop: '1px solid #ECE7DE',
          paddingTop: 22,
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.78rem',
          color: '#9aa39c',
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        <span>© 2026 Navodaya Foundation. All rights reserved.</span>
        <span style={{ letterSpacing: '0.04em' }}>Empowering Lives · Protecting Nature</span>
      </div>
    </footer>
  );
}
