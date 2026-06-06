import { motion, useMotionValue } from 'motion/react';
import { useState } from 'react';

function Ripple({ x, y, onComplete }) {
  return (
    <motion.span
      initial={{ scale: 0, opacity: 0.5 }}
      animate={{ scale: 4, opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      onAnimationComplete={onComplete}
      style={{ left: x, top: y }}
      className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20"
    />
  );
}

export default function RippleButton({ children, className, ...props }) {
  const [ripples, setRipples] = useState([]);
  const key = useMotionValue(0);

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { id, x, y }]);
  };

  const removeRipple = (id) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={addRipple}
      className={`group relative overflow-hidden rounded-full font-semibold ${className}`}
      {...props}
    >
      {children}
      {ripples.map((r) => (
        <Ripple key={r.id} x={r.x} y={r.y} onComplete={() => removeRipple(r.id)} />
      ))}
    </motion.button>
  );
}
