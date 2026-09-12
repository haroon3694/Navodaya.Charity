import { useFadeIn } from '../../hooks/useFadeIn';

/**
 * Fades and rises its children into place the first time they scroll into
 * view — a drop-in replacement for the original `data-fade` attribute, and
 * the base of the site's reveal system.
 *
 * - `y`: how far (px) the element travels while revealing (default 22, the
 *   original amount — pass 16 for the tighter, newer default).
 * - `delay`: transition-delay in ms, used to stagger sibling reveals.
 * - `duration`: transition duration in ms.
 * - `variant`: 'rise' (default) or 'scale' (adds a gentle 0.94 → 1 scale-in,
 *   used for the illustration/icon reveals).
 * - `threshold`/`rootMargin`: forwarded to the IntersectionObserver.
 */
export default function FadeIn({
  as: Tag = 'div',
  style,
  className = '',
  delay,
  y,
  duration,
  variant = 'rise',
  threshold,
  rootMargin,
  children,
  ...rest
}) {
  const { ref, visible } = useFadeIn({
    ...(threshold !== undefined ? { threshold } : {}),
    ...(rootMargin !== undefined ? { rootMargin } : {}),
  });

  const cssVars = {
    ...(y !== undefined ? { '--nv-fade-y': `${y}px` } : {}),
    ...(duration !== undefined ? { '--nv-fade-dur': `${duration}ms` } : {}),
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
  };

  return (
    <Tag
      ref={ref}
      className={`nv-fade ${variant === 'scale' ? 'nv-fade--scale' : ''} ${visible ? 'nv-fade--visible' : ''} ${className}`.trim()}
      style={{ ...cssVars, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
