import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Eyebrow from '../components/common/Eyebrow';
import FadeIn from '../components/common/FadeIn';
import IconFeatureCard from '../components/common/IconFeatureCard';
import TagLink from '../components/common/TagLink';
import { useParallax } from '../hooks/useParallax';

import photoRangers from '../assets/images/photo-forest-rangers.webp';
import iconRuralHealthcare from '../assets/images/icon-rural-healthcare.png';
import iconLivelihoodTraining from '../assets/images/icon-livelihood-training.png';
import iconAthleteSupport from '../assets/images/icon-athlete-support.png';
import iconStrayAnimalWelfare from '../assets/images/icon-stray-animal-welfare.png';

const whatWeDo = [
  { icon: iconRuralHealthcare, title: 'Rural healthcare pilots', text: 'AI-assisted projects that bring better diagnosis and care to communities far from major hospitals.' },
  { icon: iconLivelihoodTraining, title: 'Livelihood & vocational training', text: "Skills, sewing machines, and mechanics' toolkits that give forest-edge families dependable income and reduce their reliance on forest resources directly supporting tiger conservation." },
  { icon: iconAthleteSupport, title: 'Athlete support', text: 'Backing for promising athletes who lack the resources to train and compete.' },
  { icon: iconStrayAnimalWelfare, title: 'Stray animal welfare', text: "Feeding and care programmes for the animals that share India's towns and villages." },
];

const tests = [
  { title: 'A partner we can trust', text: 'Funding flows only to partners with a proven, accountable track record.' },
  { title: 'An outcome we can measure', text: 'Each project is evaluated for its real effect on the people it is meant to serve.' },
];

export default function ForCommunities() {
  const heroImgRef = useParallax(0.2);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#fff', fontFamily: "'Inter', system-ui, sans-serif", color: '#3a463f', overflowX: 'hidden' }}>
      <Nav />

      {/* HERO */}
      <section style={{ padding: '120px clamp(20px,5vw,56px) clamp(48px,6vw,72px)', background: '#fff' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto 26px' }}>
          <TagLink to="/programs" color="#1A9090" bg="#E4F1F1" hoverBg="#D3E9E9" iconBefore="←">
            Back to Initiatives
          </TagLink>
        </div>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1A9090' }}>For Communities</span>
              <span style={{ width: 28, height: 1, background: '#1A9090' }} />
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.4rem,4.8vw,3.9rem)', fontWeight: 700, color: '#233027', lineHeight: 1.06, margin: 0, letterSpacing: '-0.022em', textWrap: 'balance' }}>
              Communities are conservation's strongest&nbsp;allies.
            </h1>
            <p style={{ fontSize: '1rem', color: '#5f6a63', lineHeight: 1.8, margin: '26px 0 0', maxWidth: 520 }}>
              Rural healthcare pilots, athlete coaching, and livelihoods that give people a stake in the
              change Navodaya is working toward.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img ref={heroImgRef} src={photoRangers} alt="Two forest rangers reading a map" style={{ width: '100%', maxWidth: 420, height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section style={{ padding: 'clamp(56px,7vw,96px) clamp(20px,5vw,56px)', background: '#F9F6F0', borderTop: '1px solid #EFE9DD', borderBottom: '1px solid #EFE9DD', textAlign: 'center' }}>
        <FadeIn style={{ maxWidth: 840, margin: '0 auto' }}>
          <Eyebrow>Why It Matters</Eyebrow>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem,2.8vw,2.4rem)', color: '#233027', lineHeight: 1.2, margin: '0 0 20px', fontWeight: 700, letterSpacing: '-0.015em' }}>
            Lasting impact comes from&nbsp;within.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#5f6a63', lineHeight: 1.85, margin: '0 auto', maxWidth: 720 }}>
            Lasting impact rarely comes from outside a community it comes from within it. Navodaya backs
            small, high-trust projects that strengthen the people living beside India's forests and in its
            underserved towns, because a community with security and opportunity becomes a partner in
            conservation rather than a pressure on it.
          </p>
        </FadeIn>
      </section>

      {/* WHAT WE DO */}
      <section style={{ padding: 'clamp(64px,8vw,104px) clamp(20px,5vw,56px)', background: '#fff' }}>
        <FadeIn style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto clamp(36px,4vw,52px)' }}>
            <Eyebrow color="#1A9090">What We Do</Eyebrow>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: '#233027', lineHeight: 1.16, margin: 0, fontWeight: 700, letterSpacing: '-0.02em' }}>
              Small projects, deep&nbsp;trust.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 22 }}>
            {whatWeDo.map((item) => (
              <IconFeatureCard key={item.title} icon={item.icon} title={item.title} iconSize={84}>
                {item.text}
              </IconFeatureCard>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* HOW WE CHOOSE */}
      <section style={{ padding: 'clamp(56px,7vw,96px) clamp(20px,5vw,56px)', background: '#16382A' }}>
        <FadeIn style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow color="#E6B66A">How We Choose</Eyebrow>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem,2.8vw,2.4rem)', color: '#fff', lineHeight: 1.2, margin: '0 0 36px', fontWeight: 700, letterSpacing: '-0.015em' }}>
            Every project passes the same two&nbsp;tests.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 22, textAlign: 'left' }}>
            {tests.map((t) => (
              <div key={t.title} style={{ background: '#1E4536', border: '1px solid #2C5647', borderRadius: 20, padding: '32px 28px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: '#fff', margin: '0 0 8px', fontWeight: 600 }}>{t.title}</h3>
                <p style={{ fontSize: '0.94rem', color: '#C7D2C9', lineHeight: 1.72, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1.02rem', color: '#C7D2C9', lineHeight: 1.8, margin: '32px auto 0', maxWidth: 600 }}>
            Navodaya supports a deliberately small number of community projects focused where it counts,
            accountable for what it delivers, and built to last.
          </p>
        </FadeIn>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(72px,9vw,120px) clamp(20px,5vw,56px)', background: '#fff', textAlign: 'center' }}>
        <FadeIn style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(1.8rem,3.6vw,2.9rem)', color: '#233027', lineHeight: 1.3, margin: 0, fontWeight: 400, letterSpacing: '-0.01em' }}>
            Turn a community into an ally.
          </p>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
