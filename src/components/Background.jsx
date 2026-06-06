import { motion, useReducedMotion } from 'motion/react';

const bokehBlobs = [
  { x: '15%', y: '20%', w: 400, h: 400, color: 'rgb(157 78 221 / 0.08)', delay: 0 },
  { x: '75%', y: '15%', w: 350, h: 350, color: 'rgb(139 92 246 / 0.06)', delay: -2 },
  { x: '55%', y: '55%', w: 500, h: 500, color: 'rgb(181 126 255 / 0.06)', delay: -4 },
  { x: '30%', y: '70%', w: 300, h: 300, color: 'rgb(99 102 241 / 0.04)', delay: -1 },
  { x: '85%', y: '65%', w: 280, h: 280, color: 'rgb(168 85 247 / 0.05)', delay: -3 },
];

const particles = Array.from({ length: 30 }, (_, i) => ({
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

      {bokehBlobs.map((blob) => (
        <motion.div
          key={blob.x}
          className="absolute rounded-full blur-[120px]"
          style={{
            left: blob.x,
            top: blob.y,
            width: blob.w,
            height: blob.h,
            background: blob.color,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 12, -8, 6, 0],
                  y: [0, -10, -20, -8, 0],
                  scale: [1, 1.04, 0.97, 1.02, 1],
                }
          }
          transition={{
            duration: 12,
            delay: -blob.delay || 0,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0,
            animation: shouldReduceMotion ? 'none' : `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
