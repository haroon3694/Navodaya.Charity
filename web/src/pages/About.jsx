import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Eyebrow from '../components/common/Eyebrow';
import FadeIn from '../components/common/FadeIn';
import QuoteCard from '../components/common/QuoteCard';
import IconFeatureCard from '../components/common/IconFeatureCard';
import PillButton from '../components/common/PillButton';
import { useParallax } from '../hooks/useParallax';
import { useDocumentHead } from '../hooks/useDocumentHead';

import aboutHeroBg from '../assets/images/about-hero-bg.png';
import gratitudeWoman from '../assets/images/photo-gratitude-woman.webp';
import mapIndia from '../assets/images/map-india-states.png';
import iconFocusedImpact from '../assets/images/icon-value-focused-impact.webp';
import iconTrustTransparency from '../assets/images/icon-value-trust-transparency.png';
import iconTechnology from '../assets/images/icon-value-technology.png';
import iconLocalSustainable from '../assets/images/icon-value-local-sustainable.png';

const values = [
  { icon: iconFocusedImpact, title: 'Focused impact', text: 'A few problems solved fully, rather than many addressed partly focus over scattershot charity.' },
  { icon: iconTrustTransparency, title: 'Trust & transparency', text: 'Funding flows to partners with a proven track record, and outcomes are tracked openly.' },
  { icon: iconTechnology, title: 'Technology that multiplies', text: 'Drones, camera traps, and AI tools that let small teams cover large landscapes.' },
  { icon: iconLocalSustainable, title: 'Local & sustainable', text: 'Solutions designed with the communities and forest departments who live with the results.' },
];

export default function About() {
  const storyImgRef = useParallax(0.2);
  useDocumentHead({
    title: 'About Navodaya Foundation | Founded by Phaneesh Murthy & Jaya Murthy',
    description:
      "The story behind Navodaya Foundation (Navodaya Charity): why Phaneesh Murthy and Jaya Murthy started it, the mission behind the name, and the values that guide India's tiger conservation and girl-empowerment work.",
    path: '/about',
  });

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#fff', fontFamily: "'Inter', system-ui, sans-serif", color: '#3a463f', overflowX: 'hidden' }}>
      <Nav />

      {/* HERO */}
      <section
        style={{
          padding: '150px clamp(20px,5vw,56px) clamp(200px,26vw,360px)',
          textAlign: 'center',
          background: `#fff url(${aboutHeroBg}) bottom center/100% auto no-repeat`,
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <span style={{ width: 28, height: 1, background: '#C77A14' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C77A14' }}>
              About Navodaya Foundation
            </span>
            <span style={{ width: 28, height: 1, background: '#C77A14' }} />
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.6rem,5.4vw,4.3rem)',
              fontWeight: 700,
              color: '#233027',
              lineHeight: 1.06,
              margin: 0,
              letterSpacing: '-0.022em',
              textWrap: 'balance',
            }}
          >
            A new dawn for India's
            <br />
            people and wildlife.
          </h1>
        </div>
        <div style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#000', marginTop: 28 }}>
          नवोदय · Sanskrit · <span>nava</span> (new) + <span>udaya</span> (dawn)
        </div>
      </section>

      {/* MISSION BAND */}
      <section style={{ padding: 'clamp(56px,7vw,90px) clamp(20px,5vw,56px)', background: '#F9F6F0', borderTop: '1px solid #EFE9DD', borderBottom: '1px solid #EFE9DD', textAlign: 'center' }}>
        <FadeIn style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Eyebrow style={{ marginBottom: 22 }}>Our Mission</Eyebrow>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.55rem,2.9vw,2.4rem)',
              color: '#233027',
              lineHeight: 1.34,
              margin: '0 auto',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              textWrap: 'balance',
            }}
          >
            To convert opportunity into responsibility supporting girl empowerment and protecting India's
            wildlife through focused, technology-enabled interventions and community partnerships led by
            Phaneesh Murthy and Jaya&nbsp;Murthy.
          </h2>
        </FadeIn>
      </section>

      {/* OUR STORY */}
      <section style={{ padding: 'clamp(64px,9vw,112px) clamp(20px,5vw,56px)', background: '#fff' }}>
        <FadeIn style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }}>
          <div>
            <Eyebrow leading={false}>Our Story</Eyebrow>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem,3vw,2.6rem)', color: '#233027', lineHeight: 1.14, margin: '0 0 22px', fontWeight: 700, letterSpacing: '-0.015em' }}>
              Navodaya grew out of&nbsp;gratitude.
            </h2>
            <p style={{ fontSize: '1rem', color: '#5f6a63', lineHeight: 1.85, margin: '0 0 18px' }}>
              Phaneesh Murthy and Jaya Murthy both benefited from a world-class education at a fraction of
              what it cost elsewhere, and that head start shaped a simple conviction: those who gain the
              most carry the greatest responsibility to give back.
            </p>
            <p style={{ fontSize: '1rem', color: '#5f6a63', lineHeight: 1.85, margin: 0 }}>
              The name they chose <span style={{ color: '#1A3C2B', fontWeight: 500 }}>Navodaya</span>,
              Sanskrit for <em style={{ fontStyle: 'italic' }}>new dawn</em> was suggested by Phaneesh's
              father. Rather than spread donations across dozens of causes, the foundation concentrates on
              a small number of areas where it can see the change it creates: tiger conservation, girl
              empowerment, and the rural communities that surround India's forests.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: 440 }}>
              <img
                ref={storyImgRef}
                src={gratitudeWoman}
                alt="A woman with hands folded in gratitude"
                style={{ position: 'relative', zIndex: 1, width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* PULLQUOTE */}
      <section style={{ padding: 'clamp(56px,7vw,88px) clamp(20px,5vw,56px)', background: '#16382A', textAlign: 'center' }}>
        <FadeIn style={{ maxWidth: 900, margin: '0 auto' }}>
          <svg width="40" height="30" viewBox="0 0 30 22" fill="#E6B66A" aria-hidden="true" style={{ marginBottom: 22 }}>
            <path d="M0 22V12C0 5 4.2 1 11 0L12 3.2C8 4.2 6.2 6 6 9H11V22H0ZM18 22V12C18 5 22.2 1 29 0L30 3.2C26 4.2 24.2 6 24 9H29V22H18Z" />
          </svg>
          <blockquote style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(1.4rem,2.6vw,2.1rem)', color: '#fff', lineHeight: 1.4, margin: 0, fontWeight: 500 }}>
            I believe if you have benefited from something, you owe it to the world to give back, so that
            others can benefit too.
          </blockquote>
          <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#E6B66A', letterSpacing: '0.04em', marginTop: 24 }}>Phaneesh Murthy</div>
        </FadeIn>
      </section>

      {/* HOW NAVODAYA WORKS */}
      <section style={{ padding: 'clamp(64px,8vw,104px) clamp(20px,5vw,56px)', background: '#F9F6F0', borderTop: '1px solid #EFE9DD', borderBottom: '1px solid #EFE9DD' }}>
        <FadeIn style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
          <div>
            <Eyebrow leading={false}>How Navodaya Works</Eyebrow>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem,3vw,2.6rem)', color: '#233027', lineHeight: 1.14, margin: '0 0 22px', fontWeight: 700, letterSpacing: '-0.015em' }}>
              Philanthropy run like <br />a business.
            </h2>
            <p style={{ fontSize: '1.02rem', color: '#5f6a63', lineHeight: 1.85, margin: 0 }}>
              Navodaya is built on a philosophy that mirrors how Phaneesh Murthy built businesses: pick
              the right problem, fund a focused intervention, and measure whether it actually works.
              Phaneesh leads wildlife and technology-driven conservation; Jaya Murthy stewards girl
              empowerment. Both halves of the foundation share the same test does this change a real
              life, completely?
            </p>
          </div>
          <QuoteCard
            quote="I'm not trying to save the whole world. I'm trying to change a few lives at a time, completely."
            size="lg"
          />
        </FadeIn>
      </section>

      {/* OUR VALUES */}
      <section style={{ padding: 'clamp(64px,8vw,104px) clamp(20px,5vw,56px)', background: '#fff' }}>
        <FadeIn style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto clamp(40px,5vw,60px)' }}>
            <Eyebrow>Our Values</Eyebrow>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem,3.2vw,2.8rem)', color: '#233027', lineHeight: 1.14, margin: 0, fontWeight: 700, letterSpacing: '-0.02em' }}>
              The principles behind every&nbsp;decision.
            </h2>
          </div>
          <div className="nv-grid-2up-tablet" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 22 }}>
            {values.map((v) => (
              <IconFeatureCard
                key={v.title}
                icon={v.icon}
                title={v.title}
                iconSize={76}
                iconGap={22}
                align="center"
                bg={null}
                border={null}
                padding="8px 4px"
                titleSize="1.22rem"
              >
                {v.text}
              </IconFeatureCard>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* WHERE WE WORK / CTA */}
      <section style={{ padding: 'clamp(64px,9vw,112px) clamp(20px,5vw,56px)', background: '#fff' }}>
        <FadeIn style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <Eyebrow leading={false}>Where We Work</Eyebrow>
            <p style={{ fontSize: '1rem', color: '#5f6a63', lineHeight: 1.85, margin: '22px 0 30px', maxWidth: 520 }}>
              Navodaya operates across 12 Indian states, working alongside state forest departments,
              colleges, and grassroots partners from the tiger corridors of Karnataka to rural classrooms
              and forest-edge villages.
            </p>
            <PillButton to="/founder">
              Meet the founder, Phaneesh Murthy<span style={{ fontSize: '1.05rem' }}>→</span>
            </PillButton>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={mapIndia} alt="Map of India highlighting 12 states" style={{ width: '100%', maxWidth: 440, height: 'auto', display: 'block' }} />
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
