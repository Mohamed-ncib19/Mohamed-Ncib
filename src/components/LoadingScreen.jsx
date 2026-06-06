import { motion } from 'motion/react';

export default function LoadingScreen({ onFinish }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07070a]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col items-center"
      >
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full bg-[#9D4EDD]/20 blur-3xl"
        />

        <span className="relative font-display text-5xl font-medium tracking-[-0.06em] text-white sm:text-7xl">
          MN
        </span>

        <div className="relative mt-6 h-[2px] w-24 overflow-hidden rounded-full bg-white/[0.06]">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '400%' }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="h-full w-1/4 rounded-full bg-gradient-to-r from-transparent via-[#9D4EDD] to-transparent"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
