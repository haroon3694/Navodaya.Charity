import { useFadeIn } from '../../hooks/useFadeIn';

/**
 * Fades and rises its children into place the first time they scroll into
 * view — a drop-in replacement for the original `data-fade` attribute.
 */
export default function FadeIn({ as: Tag = 'div', style, className = '', children, ...rest }) {
  const { ref, visible } = useFadeIn();
  return (
    <Tag
      ref={ref}
      className={`nv-fade ${visible ? 'nv-fade--visible' : ''} ${className}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}
