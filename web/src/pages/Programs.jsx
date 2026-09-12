import Nav from '../components/Nav';
import Footer from '../components/Footer';
import FadeIn from '../components/common/FadeIn';
import TagLink from '../components/common/TagLink';
import { useParallax } from '../hooks/useParallax';

import photoTiger from '../assets/images/photo-tiger-jungle.webp';
import photoGirlFist from '../assets/images/photo-girl-fist.webp';
import photoRangers from '../assets/images/photo-forest-rangers.webp';

const rows = [
  {
    id: 'wildlife',
    image: photoTiger,
    alt: 'A tiger in the jungle',
    dot: '#2D6A4F',
    label: 'For Wildlife',
    title: "Technology on the side of India's tigers.",
    text: "India's tigers were nearly lost; today the country holds the majority of the world's wild tigers, and keeping it that way takes constant vigilance. Navodaya funds thermal drones, camera-trap networks, field equipment, and vulture-recovery work high-leverage tools that let small forest teams protect vast landscapes.",
    to: '/for-wildlife',
    linkHoverBg: '#245A42',
    imageFirst: true,
  },
  {
    id: 'girls',
    image: photoGirlFist,
    alt: 'A young woman raising her fist',
    dot: '#C77A14',
    label: 'For Girls',
    title: 'Remove the barrier, and she rises.',
    text: 'Talent is everywhere; opportunity is not. Navodaya funds scholarships, laptops, safe hostels, and mentorship so that girls from underserved backgrounds can finish their education and choose their own futures. Jaya Murthy leads this charter.',
    to: '/for-girl-empowerment',
    linkHoverBg: '#AC6910',
    imageFirst: false,
  },
  {
    id: 'community',
    image: photoRangers,
    alt: 'Two forest rangers reading a map',
    dot: '#1A9090',
    label: 'For Communities',
    title: "Communities are conservation's allies.",
    text: 'Conservation only lasts when the people who live beside the forest have a stake in it. Navodaya backs vocational training, rural healthcare pilots, athlete coaching, and other small, high-trust projects that turn communities into conservation’s allies.',
    to: '/for-communities',
    linkHoverBg: '#157878',
    imageFirst: true,
  },
];

function PillarRow({ row }) {
  const imgRef = useParallax(0.19);
  const image = (
    <div key="img" className="nv-img" style={{ display: 'flex', justifyContent: 'center' }}>
      <img ref={imgRef} src={row.image} alt={row.alt} style={{ width: '100%', maxWidth: 380, height: 'auto', display: 'block' }} />
    </div>
  );
  const text = (
    <div key="text">
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: row.dot, marginBottom: 14 }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: row.dot }} />
        {row.label}
      </span>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem,2.6vw,2.3rem)', color: '#233027', lineHeight: 1.14, margin: '0 0 16px', fontWeight: 700, letterSpacing: '-0.015em' }}>
        {row.title}
      </h2>
      <p style={{ fontSize: '1rem', color: '#5f6a63', lineHeight: 1.82, margin: '0 0 22px' }}>{row.text}</p>
      <TagLink to={row.to} color="#fff" bg={row.dot} hoverBg={row.linkHoverBg} iconAfter="→">
        Explore {row.label}
      </TagLink>
    </div>
  );
  return (
    <div data-fade="1" data-parallax-anchor className="nv-row">
      {row.imageFirst ? [image, text] : [text, image]}
    </div>
  );
}

export default function Programs() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#fff', fontFamily: "'Inter', system-ui, sans-serif", color: '#3a463f', overflowX: 'hidden' }}>
      <Nav />

      {/* HERO */}
      <section style={{ padding: '150px clamp(20px,5vw,56px) clamp(56px,7vw,84px)', textAlign: 'center', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <span style={{ width: 28, height: 1, background: '#C77A14' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C77A14' }}>Our Initiatives</span>
            <span style={{ width: 28, height: 1, background: '#C77A14' }} />
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.6rem,5.4vw,4.3rem)', fontWeight: 700, color: '#233027', lineHeight: 1.06, margin: 0, letterSpacing: '-0.022em', textWrap: 'balance' }}>
            <span style={{ background: '#FAA932', color: '#fff', padding: '2px 18px', borderRadius: 10, display: 'inline-block' }}>Three</span> pillars,
            <br />
            one shared mission.
          </h1>
        </div>
      </section>

      {/* PILLAR ROWS */}
      <section style={{ padding: 'clamp(20px,3vw,40px) clamp(20px,5vw,56px) clamp(48px,6vw,72px)', background: '#fff' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'clamp(48px,7vw,96px)' }}>
          {rows.map((row) => (
            <PillarRow key={row.id} row={row} />
          ))}
        </div>
      </section>

      {/* MONITORING & EVALUATION */}
      <section style={{ padding: 'clamp(56px,7vw,96px) clamp(20px,5vw,56px)', background: '#16382A', textAlign: 'center' }}>
        <FadeIn style={{ maxWidth: 840, margin: '0 auto' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E6B66A', marginBottom: 20 }}>
            <span style={{ width: 26, height: 1, background: '#E6B66A' }} />
            Monitoring &amp; Evaluation
            <span style={{ width: 26, height: 1, background: '#E6B66A' }} />
          </span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem,2.8vw,2.4rem)', color: '#fff', lineHeight: 1.2, margin: '0 0 20px', fontWeight: 700, letterSpacing: '-0.015em' }}>
            Philanthropy run like an&nbsp;operation.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#C7D2C9', lineHeight: 1.85, margin: '0 auto', maxWidth: 720 }}>
            Every Navodaya program is chosen for two reasons: the trustworthiness of the partner
            delivering it, and the ability to measure its outcome. Funding is transparent, and each
            project is evaluated for its impact on the people and ecosystems it is meant to serve
            focused, accountable, and built to last.
          </p>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
