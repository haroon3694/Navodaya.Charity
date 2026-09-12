import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Small pill link used for "← Back to Initiatives" and "Explore For X →".
 * Hovers by widening its icon gap and darkening its background, rather than
 * the lift+brighten used by PillButton.
 */
export default function TagLink({ to, color, bg, hoverBg, iconBefore, iconAfter, children }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: hover ? 12 : 8,
        fontSize: '0.86rem',
        fontWeight: 600,
        color,
        background: hover ? hoverBg : bg,
        textDecoration: 'none',
        letterSpacing: '0.01em',
        padding: '11px 22px',
        borderRadius: 999,
        transition: 'gap .2s, background .2s',
      }}
    >
      {iconBefore && <span aria-hidden="true">{iconBefore}</span>}
      {children}
      {iconAfter && <span aria-hidden="true">{iconAfter}</span>}
    </Link>
  );
}
