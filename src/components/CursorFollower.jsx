import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';

export default function CursorFollower() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[99] hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9D4EDD]/15 blur-sm lg:block"
    />
  );
}
