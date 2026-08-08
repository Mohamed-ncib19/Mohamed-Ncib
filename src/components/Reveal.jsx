import { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

export default function Reveal({ children, className, as = 'div', delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Component = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setVisible(true); return; }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Component
      ref={ref}
      className={cn(
        'reveal',
        visible ? 'reveal-visible' : 'reveal-hidden',
        `reveal-${direction}`,
        className
      )}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </Component>
  );
}