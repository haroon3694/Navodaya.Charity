import Eyebrow from '../common/Eyebrow';
import StatCounter from '../common/StatCounter';
import { useFadeIn } from '../../hooks/useFadeIn';

const stats = [
  { count: 5000, suffix: '+', label: 'Girls supported' },
  { count: 900, suffix: '+', label: 'Camera traps & tracking cameras deployed' },
  { count: 40, suffix: '%', label: 'Reduction in poaching pressure where technology is deployed' },
  { count: 12, suffix: '', label: 'Indian states' },
];

export default function ImpactBand() {
  const { ref, visible } = useFadeIn({ threshold: 0.18 });

  return (
    <section style={{ padding: 'clamp(56px,7vw,96px) clamp(20px,5vw,56px)', background: '#16382A', textAlign: 'center' }}>
      <div
        ref={ref}
        className={`nv-fade ${visible ? 'nv-fade--visible' : ''}`}
        style={{ '--nv-fade-y': '16px', maxWidth: 1080, margin: '0 auto' }}
      >
        <Eyebrow color="#E6B66A" style={{ marginBottom: 'clamp(32px,4vw,48px)' }}>
          Our Impact
        </Eyebrow>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'clamp(28px,4vw,48px)' }}>
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} start={visible} duration={1200} />
          ))}
        </div>
      </div>
    </section>
  );
}
