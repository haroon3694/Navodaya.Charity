/**
 * The small "— LABEL —" kicker used above most section headings.
 * `leading={false}` drops the line before the text — used inline ahead of a
 * left-aligned heading in two-column layouts.
 */
export default function Eyebrow({ children, color = '#C77A14', leading = true, style }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        fontSize: '0.72rem',
        fontWeight: 600,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color,
        marginBottom: 16,
        ...style,
      }}
    >
      {leading && <span style={{ width: 26, height: 1, background: color, flexShrink: 0 }} />}
      {children}
      <span style={{ width: 26, height: 1, background: color, flexShrink: 0 }} />
    </span>
  );
}
