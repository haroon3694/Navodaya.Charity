import { useCountUp } from '../../hooks/useCountUp';

/** A single big animated number with a caption underneath. */
export default function StatCounter({ count, suffix = '', label, start, valueColor = '#fff', labelColor = '#A8BBB0', valueSize = 'clamp(2.6rem,4.6vw,3.6rem)', duration }) {
  const display = useCountUp(count, { suffix, start, ...(duration ? { duration } : {}) });
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: valueSize, fontWeight: 700, color: valueColor, lineHeight: 1 }}>
        {display}
      </div>
      <div style={{ fontSize: '0.82rem', color: labelColor, lineHeight: 1.5, marginTop: 12 }}>{label}</div>
    </div>
  );
}
