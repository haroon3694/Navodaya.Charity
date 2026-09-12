import PillButton from '../common/PillButton';
import portraitFounderHero from '../../assets/images/portrait-founder-hero.webp';
import { useParallax } from '../../hooks/useParallax';

export default function Hero() {
  const portraitWrapRef = useParallax(0.17, 'translateY(-50%)');

  return (
    <section
      id="top"
      style={{ position: 'relative', background: '#fff', overflow: 'hidden', minHeight: '88vh', display: 'flex', alignItems: 'center' }}
    >
      {/* Scroll-parallax lives on this wrapper; the entrance + idle float
          animation lives on the image itself, so the two transforms don't
          fight over the same element. */}
      <div
        ref={portraitWrapRef}
        className="nv-hero-bg-portrait"
        style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          height: '78%',
          width: '42%',
          zIndex: 0,
          pointerEvents: 'none',
          WebkitMaskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 42%)',
          maskImage: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, #000 42%)',
        }}
      >
        <img
          className="nv-hero-illustration"
          src={portraitFounderHero}
          alt="Phaneesh Murthy, Founder of Navodaya Foundation"
          style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block' }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 1280, margin: '0 auto', padding: '140px clamp(20px,5vw,56px) 80px' }}>
        <div style={{ maxWidth: 640, textAlign: 'left' }}>
          <div
            className="nv-hero-rise"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24, animationDelay: '0ms' }}
          >
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
            <span className="nv-line-mask">
              <span className="nv-line-mask__inner" style={{ animationDelay: '150ms' }}>
                Vision and action by
              </span>
            </span>
            <span className="nv-line-mask">
              <span className="nv-line-mask__inner" style={{ animationDelay: '260ms' }}>
                Phaneesh Murthy.
              </span>
            </span>
          </h1>

          <p
            className="nv-hero-rise"
            style={{ fontSize: '0.95rem', color: '#5f6a63', lineHeight: 1.7, margin: '24px 0 0', maxWidth: 520, fontWeight: 400, textAlign: 'left', animationDelay: '420ms' }}
          >
            Navodaya Foundation, founded by Phaneesh Murthy and Jaya Murthy, turns three decades of
            entrepreneurial success into sustained social impact. Rooted in tiger conservation and girl
            empowerment, Navodaya practices focused philanthropy backing measurable interventions and
            long-term partnerships that give people and wildlife a genuine new dawn.
          </p>

          <div className="nv-hero-rise" style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 34, animationDelay: '560ms' }}>
            <PillButton href="#pillars" size="lg">
              <span style={{ fontSize: '15.36px' }}>Explore Our Initiatives</span>
              <span className="nv-btn__arrow" style={{ fontSize: '1.05rem' }}>→</span>
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
