import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Eyebrow from '../components/common/Eyebrow';
import FadeIn from '../components/common/FadeIn';
import IconFeatureCard from '../components/common/IconFeatureCard';
import QuoteCard from '../components/common/QuoteCard';
import TagLink from '../components/common/TagLink';
import { useParallax } from '../hooks/useParallax';
import { useDocumentHead } from '../hooks/useDocumentHead';

import photoGirlFist from '../assets/images/photo-girl-fist.webp';
import iconScholarships from '../assets/images/icon-scholarships.png';
import iconLaptops from '../assets/images/icon-laptops-learning.png';
import iconSafeHostels from '../assets/images/icon-safe-hostels.png';
import iconMentorship from '../assets/images/icon-mentorship.png';

const whatWeDo = [
  { icon: iconScholarships, title: 'Scholarships', text: 'Direct support for deserving students in colleges and universities, including targeted partnerships with specific institutions.' },
  { icon: iconLaptops, title: 'Laptops & learning resources', text: 'Devices and tools that put girls in marginalised communities on equal footing with their peers.' },
  { icon: iconSafeHostels, title: 'Safe hostels', text: "Support for women's hostels that provide secure accommodation and reliable access to education." },
  { icon: iconMentorship, title: 'Mentorship & continuity', text: "Guidance that stays with each student, so support doesn't end with a single cheque." },
];

export default function ForGirlEmpowerment() {
  const heroImgRef = useParallax(0.2);
  useDocumentHead({
    title: "Girl Empowerment | Jaya Murthy's Charter — Navodaya Foundation",
    description:
      "Jaya Murthy leads Navodaya Foundation's (Navodaya Charity) girl-empowerment charter — scholarships, laptops, safe hostels, and mentorship for young women from underserved communities across India.",
    path: '/for-girl-empowerment',
  });

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#fff', fontFamily: "'Inter', system-ui, sans-serif", color: '#3a463f', overflowX: 'hidden' }}>
      <Nav />

      {/* HERO */}
      <section style={{ padding: '120px clamp(20px,5vw,56px) clamp(48px,6vw,72px)', background: '#fff' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto 26px' }}>
          <TagLink to="/programs" color="#C77A14" bg="#F6EEDF" hoverBg="#EFE3CC" iconBefore="←">
            Back to Initiatives
          </TagLink>
        </div>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C77A14' }}>For Girls</span>
              <span style={{ width: 28, height: 1, background: '#C77A14' }} />
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.6rem,5.2vw,4.2rem)', fontWeight: 700, color: '#233027', lineHeight: 1.06, margin: 0, letterSpacing: '-0.022em', textWrap: 'balance' }}>
              Remove the barrier, and she&nbsp;rises.
            </h1>
            <p style={{ fontSize: '1rem', color: '#5f6a63', lineHeight: 1.8, margin: '26px 0 0', maxWidth: 520 }}>
              Navodaya's girl-empowerment charter, led by Jaya Murthy, backs deserving young women with
              everything they need to finish their education and choose their own path.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img ref={heroImgRef} src={photoGirlFist} alt="A young woman raising her fist" style={{ width: '100%', maxWidth: 420, height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section style={{ padding: 'clamp(56px,7vw,96px) clamp(20px,5vw,56px)', background: '#F9F6F0', borderTop: '1px solid #EFE9DD', borderBottom: '1px solid #EFE9DD' }}>
        <FadeIn style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
          <div>
            <Eyebrow leading={false}>Why It Matters</Eyebrow>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem,2.8vw,2.4rem)', color: '#233027', lineHeight: 1.18, margin: '0 0 20px', fontWeight: 700, letterSpacing: '-0.015em' }}>
              The obstacle is never&nbsp;ability.
            </h2>
            <p style={{ fontSize: '1.02rem', color: '#5f6a63', lineHeight: 1.85, margin: 0 }}>
              For countless girls in India, the obstacle isn't ability it's a missing laptop, an
              unaffordable fee, or the lack of a safe place to live near campus. Navodaya's philanthropy
              is designed to remove those specific barriers, one young woman at a time, so that talent is
              no longer wasted for want of opportunity.
            </p>
          </div>
          <QuoteCard quote="I'm not trying to save the whole world. I'm trying to change a few lives at a time, completely." size="lg" />
        </FadeIn>
      </section>

      {/* WHAT WE DO */}
      <section style={{ padding: 'clamp(64px,8vw,104px) clamp(20px,5vw,56px)', background: '#fff' }}>
        <FadeIn style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto clamp(36px,4vw,52px)' }}>
            <Eyebrow>What We Do</Eyebrow>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: '#233027', lineHeight: 1.16, margin: 0, fontWeight: 700, letterSpacing: '-0.02em' }}>
              Everything a girl needs to&nbsp;finish.
            </h2>
          </div>
          <div className="nv-grid-2up-tablet" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 22 }}>
            {whatWeDo.map((item) => (
              <IconFeatureCard key={item.title} icon={item.icon} title={item.title} iconSize={84}>
                {item.text}
              </IconFeatureCard>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* HOW IT'S LED */}
      <section style={{ padding: 'clamp(56px,7vw,96px) clamp(20px,5vw,56px)', background: '#16382A', textAlign: 'center' }}>
        <FadeIn style={{ maxWidth: 900, margin: '0 auto' }}>
          <Eyebrow color="#E6B66A">How It's Led</Eyebrow>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem,2.6vw,2.3rem)', color: '#fff', lineHeight: 1.16, margin: '0 0 18px', fontWeight: 700, letterSpacing: '-0.015em' }}>
            Fewer young women, supported&nbsp;completely.
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#C7D2C9', lineHeight: 1.85, margin: 0 }}>
            Jaya Murthy stewards Navodaya's girl-empowerment work, while the foundation ensures the
            continuity, mentorship and follow-through that turn a one-time gift into a finished degree
            and a career. It's the same focused philosophy that runs through all of Navodaya fewer young
            women, supported completely, rather than many supported partly.
          </p>
        </FadeIn>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(72px,9vw,120px) clamp(20px,5vw,56px)', background: '#fff', textAlign: 'center' }}>
        <FadeIn style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(1.8rem,3.6vw,2.9rem)', color: '#233027', lineHeight: 1.3, margin: 0, fontWeight: 400, letterSpacing: '-0.01em' }}>
            Talent is everywhere. Help open the door.
          </p>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
