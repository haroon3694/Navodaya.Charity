import Eyebrow from '../common/Eyebrow';
import FadeIn from '../common/FadeIn';
import PillarAccordionCard from '../common/PillarAccordionCard';
import photoTiger from '../../assets/images/photo-tiger-jungle.webp';
import photoGirlFist from '../../assets/images/photo-girl-fist.webp';
import photoRangers from '../../assets/images/photo-forest-rangers.webp';

const pillars = [
  {
    id: 'wildlife',
    image: photoTiger,
    alt: 'A tiger in the jungle',
    title: 'For Wildlife',
    blurb: 'Thermal drones, camera-trap networks, and AI monitoring protecting India’s most endangered species.',
    dropLabel: 'Wildlife Conservation',
    dotBg: '#E7F0EB',
    dotStroke: '#2D6A4F',
    items: [
      'Thermal drones to detect illegal night activity and prevent human–wildlife conflict.',
      'Over 1,000 camera traps monitoring tigers, leopards and other species.',
      'Jeeps and equipment for forest officials.',
      'Vulture conservation that removes toxic veterinary compounds from villages.',
      'Vocational training — sewing machines, mechanics toolkits — to ease dependence on forests.',
    ],
  },
  {
    id: 'girls',
    image: photoGirlFist,
    alt: 'A young woman raising her fist',
    title: 'For Girls',
    blurb: 'Scholarships, devices, hostels, and mentorship — removing every barrier between a girl and her potential.',
    dropLabel: 'Girl Empowerment',
    dotBg: '#FCEFD2',
    dotStroke: '#C77A14',
    items: [
      'Scholarships for deserving students, including targeted university partnerships.',
      'Laptops and learning resources for girls in marginalised communities.',
      'Support for women’s hostels — safe accommodation and access to education.',
    ],
  },
  {
    id: 'community',
    image: photoRangers,
    alt: 'Two forest rangers reading a map',
    title: 'For Communities',
    blurb: 'Rural healthcare pilots, athlete coaching, and livelihoods that make communities conservation’s allies.',
    dropLabel: 'Community Partnerships',
    dotBg: '#DCEFEF',
    dotStroke: '#1A9090',
    items: [
      'Stray animal feeding programs in partner communities.',
      'Support for athletes pursuing their potential.',
      'AI-driven rural healthcare pilots with trusted local partners.',
    ],
  },
];

export default function PillarsSection() {
  return (
    <section id="pillars" style={{ padding: 'clamp(36px,5vw,60px) clamp(20px,5vw,56px)', background: '#fff', position: 'relative' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', position: 'relative' }}>
        <FadeIn y={16} threshold={0.2} style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto clamp(40px,5vw,60px)' }}>
          <Eyebrow>OUR INITIATIVES</Eyebrow>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2rem,3.2vw,2.8rem)',
              color: '#233027',
              lineHeight: 1.14,
              margin: 0,
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            Three pillars, one shared&nbsp;mission.
          </h2>
        </FadeIn>

        <div className="nv-grid-stack-tablet" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'clamp(28px,4vw,40px)', position: 'relative' }}>
          {pillars.map((pillar, i) => (
            <PillarAccordionCard key={pillar.id} {...pillar} delay={i * 130} />
          ))}
        </div>

        <FadeIn
          as="p"
          y={16}
          style={{ textAlign: 'center', fontSize: '0.86rem', color: '#8a938c', lineHeight: 1.7, margin: 'clamp(36px,4vw,52px) auto 0', maxWidth: 640 }}
        >
          Working across 12 Indian states alongside leading forest departments and conservation partners.
        </FadeIn>
      </div>
    </section>
  );
}
