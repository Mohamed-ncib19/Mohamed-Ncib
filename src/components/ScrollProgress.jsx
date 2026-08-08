import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const updateProgress = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll <= 0 ? 0 : scrollY / maxScroll;
      bar.style.transform = `scaleX(${progress})`;
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        updateProgress();
        rafRef.current = null;
      });
    };

    const onResize = updateProgress;

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-accent"
      style={{ transform: 'scaleX(0)' }}
    />
  );
}