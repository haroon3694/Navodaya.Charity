const QuoteMark = ({ color, width = 34, height = 26 }) => (
  <svg width={width} height={height} viewBox="0 0 30 22" fill={color} aria-hidden="true">
    <path d="M0 22V12C0 5 4.2 1 11 0L12 3.2C8 4.2 6.2 6 6 9H11V22H0ZM18 22V12C18 5 22.2 1 29 0L30 3.2C26 4.2 24.2 6 24 9H29V22H18Z" />
  </svg>
);

/** A quote-icon + italic blockquote + caption, in a bordered card. */
export default function QuoteCard({ quote, author = 'Phaneesh Murthy', bg = '#fff', markColor = '#FAA932', authorColor = '#5a6660', size = 'lg' }) {
  const quoteSize = size === 'lg' ? 'clamp(1.2rem,1.9vw,1.5rem)' : '0.98rem';
  return (
    <figure
      style={{
        margin: 0,
        background: bg,
        border: '1px solid #E6E1D3',
        borderRadius: size === 'lg' ? 24 : 18,
        padding: size === 'lg' ? 'clamp(30px,4vw,44px)' : '26px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: size === 'lg' ? 18 : 14,
        boxShadow: size === 'lg' ? '0 1px 2px rgba(26,60,43,0.04), 0 14px 32px rgba(26,60,43,0.05)' : undefined,
      }}
    >
      <QuoteMark color={markColor} width={size === 'lg' ? 34 : 28} height={size === 'lg' ? 26 : 21} />
      <blockquote
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontSize: quoteSize,
          color: '#233027',
          lineHeight: 1.5,
          margin: 0,
          flex: 1,
        }}
      >
        {quote}
      </blockquote>
      <figcaption style={{ fontSize: size === 'lg' ? '0.84rem' : '0.8rem', fontWeight: 600, color: authorColor }}>
        {author}
      </figcaption>
    </figure>
  );
}
