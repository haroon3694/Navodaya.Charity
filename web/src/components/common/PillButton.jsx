import { Link } from 'react-router-dom';

const SIZES = {
  sm: { padding: '11px 22px', fontSize: '0.86rem', gap: 8 },
  lg: { padding: '22px 52px', fontSize: '0.96rem', gap: 10, letterSpacing: '0.01em' },
};

/**
 * The flat pill-shaped call-to-action button/link (hero, teaser CTAs).
 * Pass `to` for an internal route (renders a router Link) or `href` for a
 * same-page anchor / external URL (renders a plain anchor).
 */
export default function PillButton({ href, to, color = '#7CB342', size = 'lg', className = '', children, ...rest }) {
  const Tag = to ? Link : 'a';
  const linkProps = to ? { to } : { href };
  return (
    <Tag
      {...linkProps}
      className={`nv-btn ${size === 'lg' ? 'nv-btn--lg' : ''} ${className}`.trim()}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: color,
        borderRadius: 999,
        color: '#fff',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        fontWeight: 700,
        textShadow: size === 'lg' ? '0 1px 2px rgba(40,70,20,0.35)' : undefined,
        ...SIZES[size],
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
