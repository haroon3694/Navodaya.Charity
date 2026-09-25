import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Eyebrow from '../components/common/Eyebrow';
import FadeIn from '../components/common/FadeIn';
import QuoteCard from '../components/common/QuoteCard';
import IconFeatureCard from '../components/common/IconFeatureCard';
import PillButton from '../components/common/PillButton';
import { useParallax } from '../hooks/useParallax';
import { useDocumentHead } from '../hooks/useDocumentHead';

import portraitFull from '../assets/images/portrait-founder-full.png';
import logoInfosys from '../assets/images/logo-infosys.png';
import logoIgate from '../assets/images/logo-igate.png';
import logoPatni from '../assets/images/logo-patni.png';
import droneCameraForest from '../assets/images/photo-drone-camera-forest.webp';
import iconRealtime from '../assets/images/icon-principle-realtime-monitoring.png';
import iconModernData from '../assets/images/icon-principle-modern-data.png';
import iconCommunityLed from '../assets/images/icon-principle-community-led.png';

const milestones = [
  { logo: logoInfosys, alt: 'Infosys', label: 'Infosys', big: '$2M → ~$700M', text: 'Revenue growth as Global Sales Head, in under a decade.' },
  { logo: logoIgate, alt: 'iGATE', label: 'iGATE', big: 'President & CEO', text: 'Built the outcomes-based "iTOPS" delivery model.' },
  { logo: logoPatni, alt: 'Patni Computer Systems', label: 'Patni Computer Systems', big: '$1.22B', text: 'Landmark acquisition that reshaped the company.' },
];

const quotes = [
  ['If you have benefited from something, ', 'you owe it to the world to give back, so that others can benefit too.'],
  ["I'm not trying to save the whole world.", "I'm trying to change a few lives at a time, completely."],
  ['Forests are the lungs of our country', "If we don't preserve them, we are destroying our ability to breathe."],
];

const principles = [
  { icon: iconRealtime, title: 'Real-time monitoring', text: 'Monitoring that learns the landscape as fast as it changes.' },
  { icon: iconModernData, title: 'Modern data, not assumptions', text: 'Decisions driven by current data, not out-of-date assumptions.' },
  { icon: iconCommunityLed, title: 'Community-led delivery', text: 'Delivery led by communities, so change lasts long after we arrive.' },
];

export default function Founder() {
  const portraitRef = useParallax(0.16);
  const leadsImgRef = useParallax(0.2);
  useDocumentHead({
    title: 'Phaneesh Murthy — Founder, Navodaya Foundation',
    description:
      'Phaneesh Murthy is the founder of Navodaya Foundation (Navodaya Charity), a technology entrepreneur and philanthropist who co-founded the foundation with his wife, Jaya Murthy, leading its tiger conservation and technology-driven work.',
    path: '/founder',
  });

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#fff', fontFamily: "'Inter', system-ui, sans-serif", color: '#3a463f', overflowX: 'hidden' }}>
      <Nav />

      {/* HERO */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '125px clamp(20px,5vw,56px) clamp(48px,7vw,96px)', background: '#fff' }}>
        <div className="nv-grid-founder-hero" style={{ position: 'relative', maxWidth: 1160, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'clamp(24px,4vw,48px)', alignItems: 'center' }}>
          <div>
            <Eyebrow leading={false}>Founder &amp; Leadership</Eyebrow>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.6rem,4.6vw,3.8rem)', color: '#233027', lineHeight: 1.04, margin: '0 0 8px', fontWeight: 700, letterSpacing: '-0.022em' }}>
              Phaneesh Murthy
            </h1>
            <div style={{ fontSize: '0.94rem', fontWeight: 600, color: '#C77A14', letterSpacing: '0.01em', marginBottom: 22 }}>Founder, Navodaya Foundation</div>
            <p style={{ fontSize: '1.02rem', color: '#54605a', lineHeight: 1.85, margin: 0 }}>
              Phaneesh Murthy is a technology entrepreneur, mentor, and philanthropist who co-founded
              Navodaya Foundation with his wife, Jaya Murthy. Over a career spanning more than three
              decades, he became one of the most recognised names in Indian IT services, and he now
              applies the same focus, discipline, and outcomes-thinking to philanthropy leading the
              foundation's wildlife and technology-driven conservation work, while Jaya stewards its
              girl-empowerment initiatives.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img ref={portraitRef} src={portraitFull} alt="Phaneesh Murthy, Founder of Navodaya Foundation" style={{ width: '100%', maxWidth: 540, height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* THE ENTREPRENEUR */}
      <section style={{ padding: 'clamp(64px,8vw,108px) clamp(20px,5vw,56px)', background: '#F9F6F0' }}>
        <FadeIn style={{ maxWidth: 900, margin: '0 auto' }}>
          <Eyebrow leading={false}>The Entrepreneur</Eyebrow>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem,3vw,2.6rem)', color: '#233027', lineHeight: 1.14, margin: '0 0 22px', fontWeight: 700, letterSpacing: '-0.015em' }}>
            Three decades at the front of Indian&nbsp;IT.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#5f6a63', lineHeight: 1.85, margin: '0 0 18px' }}>
            Born into a middle-class family in Bangalore, Phaneesh Murthy studied mechanical engineering
            at IIT Madras and earned his management degree at IIM Ahmedabad. As Global Sales Head at
            Infosys, he is widely credited with helping grow the company's revenue from around $2 million
            to roughly $700 million in under a decade winning landmark clients and helping take the
            company onto the Nasdaq.
          </p>
          <p style={{ fontSize: '1.05rem', color: '#5f6a63', lineHeight: 1.85, margin: 0 }}>
            He went on to lead iGATE as President and CEO, where his outcomes-based "iTOPS" model and the
            $1.22 billion acquisition of Patni Computer Systems turned a mid-sized firm into one of
            India's largest IT companies. Today, he mentors senior executives through his consulting firm
            Primentor and advises a portfolio of technology companies. The through-line across every
            chapter is a belief he returns to often: focus intensely on one thing and do it completely.
          </p>
          <div className="nv-grid-stack-tablet" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 1, background: '#ECE7DE', border: '1px solid #ECE7DE', borderRadius: 20, overflow: 'hidden', marginTop: 'clamp(32px,4vw,44px)' }}>
            {milestones.map((m) => (
              <div key={m.label} style={{ background: '#FAF8F3', padding: '28px 24px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 82, height: 36, marginBottom: 14 }}>
                  <img src={m.logo} alt={m.alt} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                </span>
                <div style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.13em', textTransform: 'uppercase', color: '#C77A14', marginBottom: 12 }}>{m.label}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#233027', lineHeight: 1.15 }}>{m.big}</div>
                <div style={{ fontSize: '0.86rem', color: '#6a756e', lineHeight: 1.6, marginTop: 8 }}>{m.text}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* THE CONSERVATIONIST */}
      <section style={{ padding: 'clamp(56px,7vw,100px) clamp(20px,5vw,56px)', background: '#16382A' }}>
        <FadeIn style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ marginBottom: 'clamp(32px,4vw,48px)' }}>
            <Eyebrow leading={false} color="#E6B66A">The Conservationist</Eyebrow>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem,2.8vw,2.5rem)', color: '#fff', lineHeight: 1.16, margin: '0 0 24px', fontWeight: 700, letterSpacing: '-0.015em' }}>
              Engineering instincts, turned toward the&nbsp;forest.
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(28px,4vw,48px)', maxWidth: 960 }}>
              <p style={{ fontSize: '1.02rem', color: '#C7D2C9', lineHeight: 1.85, margin: 0 }}>
                Phaneesh Murthy's conservation work began in the early 2000s, when India's tiger
                population was in freefall. Having seen these animals in the wild, he wanted to be sure
                the next generation could too. In the mid-2000s, he founded the Kabini Foundation,
                dedicated to protecting the Kabini jungle system a major tiger habitat near his home in
                Bangalore and that work continues today through Navodaya.
              </p>
              <p style={{ fontSize: '1.02rem', color: '#C7D2C9', lineHeight: 1.85, margin: 0 }}>
                His approach to tiger conservation reflects his engineering instincts. Rather than simply
                writing cheques, he identifies the specific operational gaps that let poaching happen,
                then deploys targeted technology to close them. In 2022 he donated a Q4i thermal drone
                able to fly in any weather and capture footage day or night across roughly four kilometres
                of forest to the Nagarahole Tiger Reserve, along with hundreds of tracking cameras to help
                forest staff detect snares and build prosecutable cases against poachers.
              </p>
            </div>
          </div>
          <div style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#E6B66A', marginBottom: 20 }}>
            Quotes from Phaneesh Murthy
          </div>
          <div className="nv-grid-stack-tablet" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(18px,2vw,24px)' }}>
            {quotes.map(([line1, line2]) => (
              <QuoteCard
                key={line1}
                quote={
                  <>
                    {line1}
                    <br />
                    {line2}
                  </>
                }
                bg="#FAF8F3"
                markColor="#7CB342"
                size="sm"
              />
            ))}
          </div>
        </FadeIn>
      </section>

      {/* HOW HE LEADS */}
      <section style={{ padding: 'clamp(64px,8vw,104px) clamp(20px,5vw,56px)', background: '#fff' }}>
        <FadeIn style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(36px,5vw,72px)', alignItems: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <Eyebrow leading={false}>Leadership</Eyebrow>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem,3vw,2.6rem)', color: '#233027', lineHeight: 1.14, margin: '0 0 22px', fontWeight: 700, letterSpacing: '-0.015em' }}>
              How Phaneesh&nbsp;Leads
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#5f6a63', lineHeight: 1.85, margin: 0 }}>
              Phaneesh prioritises trust, measurable impact, and technology. His interventions in Kabini
              and Nagarahole use thermal drones, camera traps, and field equipment to reduce poaching and
              human–wildlife conflict and he is increasingly drawn to AI, from image analytics for
              wildlife monitoring to pilots that bring better healthcare to rural communities. The
              principle is consistent with how he built companies: delivery that lasts long after the
              initial investment.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img ref={leadsImgRef} src={droneCameraForest} alt="A conservation drone and camera monitoring a forest" style={{ width: '100%', maxWidth: 420, height: 'auto', display: 'block' }} />
          </div>
        </FadeIn>
      </section>

      {/* PRINCIPLES */}
      <section style={{ padding: 'clamp(64px,8vw,104px) clamp(20px,5vw,56px)', background: '#F9F6F0', borderTop: '1px solid #EFE9DD', borderBottom: '1px solid #EFE9DD' }}>
        <FadeIn style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto clamp(36px,4vw,52px)' }}>
            <Eyebrow>His Philanthropy</Eyebrow>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: '#233027', lineHeight: 1.16, margin: 0, fontWeight: 700, letterSpacing: '-0.02em' }}>
              Three principles that guide the&nbsp;work.
            </h2>
          </div>
          <div className="nv-grid-stack-tablet" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 22 }}>
            {principles.map((p) => (
              <IconFeatureCard key={p.title} icon={p.icon} title={p.title} iconSize={56} bg="#fff">
                {p.text}
              </IconFeatureCard>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(64px,8vw,104px) clamp(20px,5vw,56px)', background: '#fff', textAlign: 'center' }}>
        <FadeIn style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.9rem,3.2vw,2.7rem)', color: '#233027', lineHeight: 1.16, margin: '0 0 28px', fontWeight: 700, letterSpacing: '-0.02em' }}>
            See the work in the&nbsp;field.
          </h2>
          <PillButton to="/programs">
            Explore the programs Phaneesh leads<span style={{ fontSize: '1.05rem' }}>→</span>
          </PillButton>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
