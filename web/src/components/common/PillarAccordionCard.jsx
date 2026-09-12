/** One of the three "For Wildlife / For Girls / For Communities" cards with an expandable detail list. */
export default function PillarAccordionCard({ image, alt, title, blurb, dropLabel, dotBg, dotStroke, items }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={image} alt={alt} style={{ maxHeight: 300, maxWidth: '100%', width: 'auto', height: 'auto', display: 'block' }} />
      </div>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', color: '#233027', margin: '20px 0 10px', fontWeight: 600 }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.9rem', color: '#6a756e', lineHeight: 1.75, margin: '0 auto 14px', maxWidth: 300 }}>{blurb}</p>
      <details className="nv-drop" style={{ maxWidth: 316, margin: '0 auto', textAlign: 'left' }}>
        <summary>
          <span className="nv-sumlabel">{dropLabel}</span>
          <span className="nv-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </summary>
        <ul className="nv-drop-body" style={{ listStyle: 'none', margin: 0, paddingTop: 6, display: 'flex', flexDirection: 'column', gap: 13 }}>
          {items.map((text) => (
            <li key={text}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill={dotBg} />
                <path d="M7.5 12.4l3 3 6-6.4" stroke={dotStroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {text}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}
