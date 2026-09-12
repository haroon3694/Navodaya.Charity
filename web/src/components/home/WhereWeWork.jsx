import Eyebrow from '../common/Eyebrow';
import FadeIn from '../common/FadeIn';
import iconTiger from '../../assets/images/icon-tiger-corridor.png';
import iconClassroom from '../../assets/images/icon-rural-classroom.png';
import iconForest from '../../assets/images/icon-forest-village.png';
import iconVulture from '../../assets/images/icon-vulture-recovery.png';

const regions = [
  { icon: iconTiger, alt: 'Tiger', label: 'Tiger Corridors' },
  { icon: iconClassroom, alt: 'Rural classroom hut', label: 'Rural Classrooms' },
  { icon: iconForest, alt: 'Forest village tree', label: 'Forest Villages' },
  { icon: iconVulture, alt: 'Vulture', label: 'Vulture Recovery' },
];

export default function WhereWeWork() {
  return (
    <section style={{ padding: 'clamp(64px,8vw,104px) clamp(20px,5vw,56px)', background: '#F9F6F0', borderTop: '1px solid #EFE9DD', borderBottom: '1px solid #EFE9DD' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>
        <FadeIn y={16} threshold={0.18} style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto clamp(40px,5vw,56px)' }}>
          <Eyebrow>Where We Work</Eyebrow>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.5rem,2.4vw,2.4rem)',
              color: '#233027',
              lineHeight: 1.14,
              margin: '0 0 16px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Everywhere change is needed, we show up.
          </h2>
          <p style={{ fontSize: '1rem', color: '#5f6a63', lineHeight: 1.75, margin: '0 auto', maxWidth: 600 }}>
            From tiger corridors to rural classrooms, Navodaya works across the full landscape of India's
            people and wildlife.
          </p>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: 22 }}>
          {regions.map((region, i) => (
            <FadeIn key={region.label} variant="scale" y={12} duration={550} delay={i * 100} threshold={0.2} style={{ padding: '20px 26px', textAlign: 'center' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                <img src={region.icon} alt={region.alt} style={{ width: 88, height: 88, objectFit: 'contain' }} />
              </span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.14rem', color: '#233027', margin: 0, fontWeight: 600 }}>
                {region.label}
              </h3>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
