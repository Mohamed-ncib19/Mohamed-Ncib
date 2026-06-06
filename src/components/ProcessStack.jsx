import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'motion/react';

const steps = [
  { label: 'Discover', description: 'Uncover user needs, pain points, and opportunities to define the problem space.', color: '#8b5cf6' },
  { label: 'Research', description: 'Analyze behaviors, market data, and competitive landscape.', color: '#7c3aed' },
  { label: 'Strategy', description: 'Define the vision, roadmap, and measurable success criteria.', color: '#6d28d9' },
  { label: 'Design', description: 'Craft interactions and interfaces that feel intuitive and intentional.', color: '#5b21b6' },
  { label: 'Create', description: 'Build high-fidelity prototypes and production-ready front-end.', color: '#4c1d95' },
  { label: 'Test', description: 'Validate assumptions, iterate quickly, and refine the experience.', color: '#3b0764' },
  { label: 'Launch', description: 'Ship, monitor, and evolve — the product is never truly finished.', color: '#2e1065' },
];

const CARD_W = 520;
const GAP = 32;
const ENTRY = 0.12;

export default function ProcessStack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const [snappedIndex, setSnappedIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      const adjusted = Math.max(0, v - ENTRY) / (1 - ENTRY);
      const idx = Math.round(adjusted * (steps.length - 1));
      setSnappedIndex(Math.max(0, Math.min(steps.length - 1, idx)));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const xTarget = -(snappedIndex * (CARD_W + GAP));
  const xRaw = useMotionValue(0);
  const x = useSpring(xRaw, { stiffness: 120, damping: 25 });

  useEffect(() => {
    xRaw.set(xTarget);
  }, [xTarget]);

  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const pointerEvents = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], ['none', 'auto', 'auto', 'none']);
  const titleOpacity = useTransform(scrollYProgress, [0, ENTRY * 0.6, ENTRY * 1.1], [1, 1, 0]);
  const titleW = useTransform(scrollYProgress, [0, ENTRY * 0.6, ENTRY * 1.1], ['380px', '380px', '0px']);

  return (
    <section ref={container} className="relative z-10 h-[550vh]">
      <motion.div
        style={{ opacity, pointerEvents }}
        className="fixed inset-0 flex flex-col bg-[#07070a]"
      >
        <div className="flex h-full items-center">
          <motion.div
            style={{ width: titleW, opacity: titleOpacity }}
            className="flex-shrink-0 overflow-hidden"
          >
            <div className="ml-9 w-auto">
              <p className="eyebrow">Process</p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-medium tracking-[-0.04em] text-white mt-2 leading-tight">
                From idea to launch
              </h2>
            </div>
          </motion.div>

          <div className="overflow-hidden flex-1">
            <motion.div style={{ x }} className="flex gap-8">
              {steps.map((step, i) => (
                <Card key={step.label} index={i} step={step} active={i === snappedIndex} />
              ))}
            </motion.div>
          </div>
        </div>

        <ProgressDots total={steps.length} activeIndex={snappedIndex} />
      </motion.div>
    </section>
  );
}

function Card({ index, step, active }) {
  return (
    <motion.div
      animate={{
        scale: active ? 1 : 0.88,
        opacity: active ? 1 : 0.25,
        x: active ? 0 : 30,
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex-shrink-0 w-[85vw] sm:w-[400px] lg:w-[520px] h-[300px] sm:h-[360px] lg:h-[420px] rounded-2xl p-0 flex flex-col relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/[0.06] rounded-2xl border border-white/[0.08]" />

      <div
        style={{ backgroundColor: step.color }}
        className="absolute left-0 top-0 bottom-0 w-[3px]"
      />

      <motion.div
        animate={{ opacity: active ? 0.12 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ backgroundColor: step.color }}
        className="absolute inset-0 rounded-2xl"
      />

      <div className="relative flex-1 flex flex-col justify-center px-10 sm:px-14 lg:px-16 py-12">
        <div className="flex items-center gap-3 mb-6">
          <motion.span
            animate={{ opacity: active ? 0.7 : 0.3 }}
            className="font-display text-xs font-medium tracking-[0.15em] uppercase text-white/60"
          >
            Step {String(index + 1).padStart(2, '0')}
          </motion.span>
          <div
            style={{ backgroundColor: step.color }}
            className="w-1.5 h-1.5 rounded-full"
          />
        </div>

        <h3 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-medium tracking-[-0.04em] leading-[1.1] text-white">
          {step.label}
        </h3>

        <div
          style={{ backgroundColor: step.color }}
          className="w-8 h-[2px] rounded-full mt-5 mb-5"
        />

        <p className="text-sm leading-6 text-white/65 sm:text-base sm:leading-7 max-w-[32ch]">
          {step.description}
        </p>
      </div>

      <motion.div
        animate={{ opacity: active ? 0.2 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full blur-[80px] pointer-events-none"
        style={{ backgroundColor: step.color }}
      />
    </motion.div>
  );
}

function ProgressDots({ total, activeIndex }) {
  return (
    <div className="flex justify-center gap-3 pb-14">
      {Array.from({ length: total }, (_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: i === activeIndex ? 1 : 0.2,
            width: i === activeIndex ? 32 : 8,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-1 rounded-full bg-white/80"
        />
      ))}
    </div>
  );
}
