import { NavLink } from 'react-router-dom';
import { useNavScroll } from '../hooks/useNavScroll';
import { navLinks } from '../data/content';

const linkStyle = ({ isActive }) => ({
  fontSize: '0.82rem',
  fontWeight: isActive ? 700 : 500,
  color: isActive ? '#1A3C2B' : '#5a6660',
  textDecoration: 'none',
});

/**
 * Site nav. On the home page it starts transparent over the hero and turns
 * into a solid, blurred bar on scroll; every other page keeps the solid bar
 * from the start.
 */
export default function Nav({ transparentOnTop = false }) {
  const scrolled = useNavScroll();
  const solid = !transparentOnTop || scrolled;

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px clamp(20px,5vw,56px)',
        background: solid ? 'rgba(255,255,255,0.9)' : 'transparent',
        backdropFilter: solid ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: solid ? 'blur(12px)' : 'none',
        boxShadow: solid ? '0 1px 0 rgba(26,60,43,0.06)' : 'none',
        transition: 'background .3s ease, box-shadow .3s ease',
      }}
    >
      <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.18rem', color: '#233027', letterSpacing: '-0.01em' }}>
          Navodaya
        </span>
      </NavLink>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(14px,2.4vw,34px)' }}>
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to} style={linkStyle}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
