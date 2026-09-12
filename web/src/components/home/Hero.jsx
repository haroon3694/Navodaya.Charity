import PillButton from '../common/PillButton';
import portraitFounderHero from '../../assets/images/portrait-founder-hero.webp';
import { useParallax } from '../../hooks/useParallax';

export default function Hero() {
  const portraitRef = useParallax(0.17, 'translateY(-50%)');

  return (
    <section
      id="top"
      style={{ position: 'relative', background: '#fff', overflow: 'hidden', minHeight: '88vh', display: 'flex', alignItems: 'center' }}
    >
      <img
        ref={portraitRef}
        className="nv-hero-bg-portrait"
        src={portraitFounderHero}
        alt="Phaneesh Murthy, Founder of Navodaya Foundation"
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          height: '78%',
          width: '42%',
          objectFit: 'contain',
          objectPosition: 'center',
          display: 'block',
          zIndex: 0,
          pointerEvents: 'none',
          WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 42%)',
          maskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 42%)',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 1280, margin: '0 auto', padding: '140px clamp(20px,5vw,56px) 80px' }}>
        <div style={{ maxWidth: 640, textAlign: 'left' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C77A14' }}>
              Navodaya Foundation
            </span>
            <span style={{ width: 28, height: 1, background: '#C77A14' }} />
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.8rem,5.8vw,4.5rem)',
              fontWeight: 700,
              color: '#233027',
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: '-0.022em',
              textAlign: 'left',
            }}
          >
            Vision and action by
            <br />
            Phaneesh Murthy.
          </h1>

          <p style={{ fontSize: '0.95rem', color: '#5f6a63', lineHeight: 1.7, margin: '24px 0 0', maxWidth: 520, fontWeight: 400, textAlign: 'left' }}>
            Navodaya Foundation, founded by Phaneesh Murthy and Jaya Murthy, turns three decades of
            entrepreneurial success into sustained social impact. Rooted in tiger conservation and girl
            empowerment, Navodaya practices focused philanthropy backing measurable interventions and
            long-term partnerships that give people and wildlife a genuine new dawn.
          </p>

          <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 34 }}>
            <PillButton href="#pillars" size="lg">
              <span style={{ fontSize: '15.36px' }}>Explore Our Initiatives</span>
              <span style={{ fontSize: '1.05rem' }}>→</span>
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
