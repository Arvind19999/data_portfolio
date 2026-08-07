import { useInView } from '../hooks/useInView';

/**
 * Wraps children in a fade-and-rise that plays once on scroll.
 * `delay` is in milliseconds and staggers items within a group.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
