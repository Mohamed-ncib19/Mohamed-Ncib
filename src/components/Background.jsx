import { useReducedMotion } from 'motion/react';

const bokehBlobs = [
  { x: '15%', y: '20%', w: 320, h: 320, gradient: 'radial-gradient(circle, rgb(157 78 221 / 0.18) 0%, transparent 70%)', delay: 0, animation: 'bokeh-drift-1' },
  { x: '75%', y: '15%', w: 280, h: 280, gradient: 'radial-gradient(circle, rgb(139 92 246 / 0.14) 0%, transparent 70%)', delay: -2, animation: 'bokeh-drift-2' },
  { x: '55%', y: '55%', w: 360, h: 360, gradient: 'radial-gradient(circle, rgb(181 126 255 / 0.12) 0%, transparent 70%)', delay: -4, animation: 'bokeh-drift-3' },
];

const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 8,
  duration: Math.random() * 6 + 5,
}));

export default function Background() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 dot-grid" />

      {bokehBlobs.map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full will-change-transform"
          style={{
            left: blob.x,
            top: blob.y,
            width: blob.w,
            height: blob.h,
            background: blob.gradient,
            transform: 'translateZ(0)',
            animation: shouldReduceMotion ? 'none' : `${blob.animation} ${12}s ease-in-out ${-blob.delay || 0}s infinite`,
            contain: 'paint',
          }}
        />
      ))}

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white will-change-transform"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0,
            transform: 'translateZ(0)',
            animation: shouldReduceMotion ? 'none' : `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}