import { motion } from 'motion/react';

export default function LiquidButton({ children, className, ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={`group relative overflow-hidden rounded-full font-semibold ${className}`}
      {...props}
    >
      <motion.span
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'bottom' }}
        className="absolute inset-0 rounded-full bg-white/[0.07]"
      />
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
      </span>
    </motion.button>
  );
}
