/** An icon + heading + paragraph card, used for "what we do" / "values" / "principles" grids. */
export default function IconFeatureCard({
  icon,
  alt = '',
  title,
  children,
  iconSize = 84,
  iconGap = 18,
  align = 'left',
  bg = '#FAF8F3',
  border = '#EBE5D8',
  padding = '32px 28px',
  titleSize = '1.18rem',
}) {
  const centered = align === 'center';
  return (
    <div style={{ background: bg, border: border ? `1px solid ${border}` : undefined, borderRadius: bg ? 18 : 0, padding, textAlign: centered ? 'center' : 'left' }}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: iconSize,
          height: iconSize,
          marginBottom: iconGap,
          ...(centered ? { margin: `0 auto ${iconGap}px` } : {}),
        }}
      >
        <img src={icon} alt={alt} style={{ width: iconSize, height: iconSize, objectFit: 'contain', display: 'block' }} />
      </span>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: titleSize, color: '#233027', margin: '0 0 10px', fontWeight: 600 }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.92rem', color: '#6a756e', lineHeight: 1.72, margin: 0 }}>{children}</p>
    </div>
  );
}
