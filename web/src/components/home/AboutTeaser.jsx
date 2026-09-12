import Eyebrow from '../common/Eyebrow';
import FadeIn from '../common/FadeIn';

const headingLines = [
  "To convert opportunity into responsibility supporting girl empowerment and protecting India's wildlife through focused,technology-enabled interventions and community partnerships.",
];

export default function AboutTeaser() {
  return (
    <section
      id="about-intro"
      style={{ padding: 'clamp(64px,9vw,108px) clamp(20px,5vw,56px)', textAlign: 'center', background: '#fff', position: 'relative' }}
    >
      <FadeIn y={16} threshold={0.18} style={{ maxWidth: 820, margin: '0 auto' }}>
        <Eyebrow style={{ marginBottom: 22 }}>About Navodaya Foundation</Eyebrow>

        <div style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b0b7af', marginBottom: 'clamp(28px,4vw,40px)' }}>
          नवोदय · Sanskrit · <span style={{ color: '#C77A14' }}>nava</span> (new) + <span style={{ color: '#C77A14' }}>udaya</span> (dawn)
        </div>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.55rem,2.7vw,2.2rem)',
            color: '#233027',
            lineHeight: 1.32,
            margin: '0 auto',
            fontWeight: 600,
            letterSpacing: '-0.01em',
            maxWidth: 1000,
          }}
        >
          {headingLines.map((line, i) => (
            <FadeIn key={line} as="span" y={12} duration={420} delay={i * 90} style={{ display: 'block' }}>
              {line}
            </FadeIn>
          ))}
        </h2>

        <FadeIn y={16} delay={120} style={{ maxWidth: 760, margin: 'clamp(32px,4vw,44px) auto 0' }}>
          <p style={{ fontSize: '1rem', color: '#5f6a63', lineHeight: 1.85, margin: 0 }}>
            Navodaya began when Phaneesh Murthy and Jaya Murthy felt compelled to give back after
            benefiting from a world-class education at an affordable cost. The name{' '}
            <span style={{ color: '#1A3C2B', fontWeight: 500 }}>Navodaya</span> means{' '}
            <em style={{ fontStyle: 'italic' }}>a new dawn</em>, and it captures the foundation's
            purpose: to open new opportunities for the people and the wildlife it serves investing where
            resources create measurable, long-lasting impact rather than spreading effort thin.
          </p>
        </FadeIn>
      </FadeIn>
    </section>
  );
}
