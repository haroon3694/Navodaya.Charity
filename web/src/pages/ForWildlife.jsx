import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Eyebrow from '../components/common/Eyebrow';
import FadeIn from '../components/common/FadeIn';
import IconFeatureCard from '../components/common/IconFeatureCard';
import TagLink from '../components/common/TagLink';
import StatCounter from '../components/common/StatCounter';
import { useParallax } from '../hooks/useParallax';
import { useFadeIn } from '../hooks/useFadeIn';

import photoTiger from '../assets/images/photo-tiger-jungle.webp';
import photoKabini from '../assets/images/photo-kabini-jungle.png';
import iconThermalDrone from '../assets/images/icon-thermal-drone.png';
import iconCameraTrap from '../assets/images/icon-camera-trap.png';
import iconFieldEquipment from '../assets/images/icon-field-equipment.png';
import iconVultureConservation from '../assets/images/icon-vulture-conservation.png';
import iconAiMonitoring from '../assets/images/icon-ai-monitoring.png';

const whatWeDo = [
  {
    icon: iconThermalDrone,
    title: 'Thermal drones',
    text: "In 2022, Navodaya's founder donated a Q4i thermal drone to the Nagarahole Tiger Reserve. It flies in any weather, captures footage day and night across roughly four kilometres of forest, and detects heat signatures through dense canopy exposing illegal night activity that ground patrols would miss.",
  },
  {
    icon: iconCameraTrap,
    title: 'Camera-trap & tracking networks',
    text: 'Hundreds of cameras placed across the reserve monitor tigers, leopards, and other species, detect poachers laying snares, and capture the photographic evidence needed to prosecute wildlife crime.',
  },
  {
    icon: iconFieldEquipment,
    title: 'Field equipment for officials',
    text: 'Jeeps and gear that extend the range and response time of the people protecting the forest.',
  },
  {
    icon: iconVultureConservation,
    title: 'Vulture conservation',
    text: "India's vultures collapsed by more than 95% after the veterinary painkiller diclofenac entered the cattle carcasses they fed on. Navodaya supports work that identifies and removes toxic veterinary compounds from villages around key habitats, helping these essential scavengers recover.",
  },
  {
    icon: iconAiMonitoring,
    title: 'AI-assisted monitoring',
    text: 'Image analytics that help turn millions of camera-trap photographs into usable conservation intelligence.',
  },
];

function RecoveryStats() {
  const { ref, visible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`nv-fade ${visible ? 'nv-fade--visible' : ''}`}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(20px,5vw,56px)', flexWrap: 'wrap', background: '#fff', border: '1px solid #ECE7DE', borderRadius: 20, padding: 'clamp(30px,4vw,44px)', marginBottom: 'clamp(32px,4vw,44px)' }}
    >
      <StatCounter count={1411} label="Wild tigers · 2006 low" start={visible} valueColor="#B0483A" labelColor="#9aa39c" valueSize="clamp(2.4rem,4vw,3.2rem)" />
      <div style={{ fontSize: '2rem', color: '#C77A14' }}>→</div>
      <StatCounter count={3682} label="Wild tigers · 2022 estimate" start={visible} valueColor="#1A3C2B" labelColor="#9aa39c" valueSize="clamp(2.4rem,4vw,3.2rem)" />
      <div style={{ width: 1, height: 64, background: '#ECE7DE' }} />
      <StatCounter count={75} suffix="%" label="of the world's wild tigers" start={visible} valueColor="#1A3C2B" labelColor="#9aa39c" valueSize="clamp(2.4rem,4vw,3.2rem)" />
    </div>
  );
}

export default function ForWildlife() {
  const heroImgRef = useParallax(0.2);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: '#fff', fontFamily: "'Inter', system-ui, sans-serif", color: '#3a463f', overflowX: 'hidden' }}>
      <Nav />

      {/* HERO */}
      <section style={{ padding: '120px clamp(20px,5vw,56px) clamp(48px,6vw,72px)', background: '#fff' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto 26px' }}>
          <TagLink to="/programs" color="#2D6A4F" bg="#EAF2ED" hoverBg="#DCEAE1" iconBefore="←">
            Back to Initiatives
          </TagLink>
        </div>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#2D6A4F' }}>For Wildlife</span>
              <span style={{ width: 28, height: 1, background: '#2D6A4F' }} />
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.5rem,5vw,4.1rem)', fontWeight: 700, color: '#233027', lineHeight: 1.06, margin: 0, letterSpacing: '-0.022em', textWrap: 'balance' }}>
              Technology on the side of India's&nbsp;tigers.
            </h1>
            <p style={{ fontSize: '1rem', color: '#5f6a63', lineHeight: 1.8, margin: '26px 0 0', maxWidth: 520 }}>
              Phaneesh Murthy's tiger conservation work pairs frontline forest teams with the tools to
              cover ground they never could alone.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img ref={heroImgRef} src={photoTiger} alt="A tiger in the jungle" style={{ width: '100%', maxWidth: 420, height: 'auto', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section style={{ padding: 'clamp(56px,7vw,96px) clamp(20px,5vw,56px)', background: '#F9F6F0', borderTop: '1px solid #EFE9DD', borderBottom: '1px solid #EFE9DD' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <FadeIn style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto clamp(36px,4vw,48px)' }}>
            <Eyebrow>Why It Matters</Eyebrow>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem,2.8vw,2.4rem)', color: '#233027', lineHeight: 1.18, margin: 0, fontWeight: 700, letterSpacing: '-0.015em' }}>
              A real recovery but a fragile&nbsp;one.
            </h2>
          </FadeIn>
          <RecoveryStats />
          <p style={{ fontSize: '1.02rem', color: '#5f6a63', lineHeight: 1.85, margin: '0 auto', maxWidth: 820, textAlign: 'center' }}>
            India's wild tiger population fell to a low of around 1,400 in 2006 the fewest ever recorded.
            Two decades of dedicated conservation have since lifted that number to roughly 3,700. That
            recovery is real but fragile: poaching, snares, habitat loss and human–wildlife conflict still
            threaten reserves every day, and many forest divisions have only a fraction of their staff
            dedicated to anti-poaching. Closing that gap is where focused philanthropy and technology make
            the difference.
          </p>
        </div>
      </section>

      {/* THE ROOTS */}
      <section style={{ padding: 'clamp(64px,8vw,104px) clamp(20px,5vw,56px)', background: '#fff' }}>
        <FadeIn style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(36px,5vw,64px)', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={photoKabini} alt="The Kabini jungle system" style={{ width: '100%', maxWidth: 400, height: 'auto', display: 'block', borderRadius: 20 }} />
          </div>
          <div>
            <Eyebrow leading={false}>The Roots</Eyebrow>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.7rem,2.8vw,2.4rem)', color: '#233027', lineHeight: 1.2, margin: '0 0 20px', fontWeight: 700, letterSpacing: '-0.015em' }}>
              The Kabini&nbsp;Foundation.
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#5f6a63', lineHeight: 1.85, margin: 0 }}>
              Phaneesh Murthy's tiger conservation began in the early 2000s with the Kabini Foundation,
              which he founded to protect the Kabini jungle system a major tiger habitat near Bangalore.
              Early work focused on community livelihoods to reduce pressure on the forest; over time, the
              strategy evolved toward high-leverage technology that delivers immediate, measurable
              protection. Both approaches now run side by side under Navodaya.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* WHAT WE DO */}
      <section style={{ padding: 'clamp(20px,3vw,32px) clamp(20px,5vw,56px) clamp(64px,8vw,104px)', background: '#fff' }}>
        <FadeIn style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto clamp(36px,4vw,52px)' }}>
            <Eyebrow color="#2D6A4F">What We Do</Eyebrow>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', color: '#233027', lineHeight: 1.16, margin: 0, fontWeight: 700, letterSpacing: '-0.02em' }}>
              Five ways we protect the&nbsp;forest.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 22 }}>
            {whatWeDo.map((item) => (
              <IconFeatureCard key={item.title} icon={item.icon} title={item.title} iconSize={84} titleSize="1.16rem">
                {item.text}
              </IconFeatureCard>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* LIVELIHOODS */}
      <section style={{ padding: 'clamp(56px,7vw,96px) clamp(20px,5vw,56px)', background: '#16382A' }}>
        <FadeIn style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Eyebrow leading={false} color="#E6B66A">Livelihoods That Protect</Eyebrow>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.4rem,2.1vw,2.1rem)', color: '#fff', lineHeight: 1.16, margin: '0 0 18px', fontWeight: 700, letterSpacing: '-0.015em' }}>
            Technology alone doesn't end poaching. Economics does.
          </h2>
          <p style={{ fontSize: '1.02rem', color: '#C7D2C9', lineHeight: 1.85, margin: 0 }}>
            Navodaya funds vocational training for forest-edge villagers including sewing machines and
            mechanics' toolkits so that families have alternatives to forest resources. When the people
            nearest the reserve have a stable income, the pressure on wildlife drops.
          </p>
        </FadeIn>
      </section>

      {/* THE GOAL */}
      <section style={{ padding: 'clamp(72px,9vw,120px) clamp(20px,5vw,56px)', background: '#fff', textAlign: 'center' }}>
        <FadeIn style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(1.8rem,3.6vw,2.9rem)', color: '#233027', lineHeight: 1.3, margin: 0, fontWeight: 400, letterSpacing: '-0.01em' }}>
            That future generations can still see these animals in the wild.
          </p>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
