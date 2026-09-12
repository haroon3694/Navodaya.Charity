import Eyebrow from '../common/Eyebrow';
import FadeIn from '../common/FadeIn';
import PillButton from '../common/PillButton';

export default function FounderTeaser() {
  return (
    <section style={{ padding: 'clamp(64px,8vw,108px) clamp(20px,5vw,56px)', background: '#fff' }}>
      <FadeIn style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div>
          <Eyebrow>Founder &amp; Leadership</Eyebrow>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.9rem,3vw,2.6rem)',
              color: '#233027',
              lineHeight: 1.1,
              margin: '0 0 6px',
              fontWeight: 700,
              letterSpacing: '-0.015em',
            }}
          >
            Phaneesh Murthy
          </h2>
          <div style={{ fontSize: '0.94rem', fontWeight: 600, color: '#C77A14', letterSpacing: '0.01em', marginBottom: 22 }}>
            Founder, Navodaya Foundation
          </div>
          <p style={{ fontSize: '1.05rem', color: '#5f6a63', lineHeight: 1.85, margin: '0 0 30px' }}>
            Phaneesh Murthy is a technology entrepreneur and philanthropist who co-founded Navodaya
            Foundation with his wife, Jaya Murthy. Drawing on a career that scaled Infosys and iGATE into
            global names, he applies a focused, outcomes-driven approach to philanthropy leading wildlife
            and technology-driven conservation while Jaya stewards the foundation's girl-empowerment
            work.
          </p>
          <PillButton to="/founder">
            Read the founder's story<span style={{ fontSize: '1.05rem' }}>→</span>
          </PillButton>
        </div>
      </FadeIn>
    </section>
  );
}
