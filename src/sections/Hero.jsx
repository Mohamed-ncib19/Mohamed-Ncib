import { AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import ProjectCreationFlow from '../components/ProjectCreationFlow.jsx';
import { profile } from '../data/profile.js';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [flowOpen, setFlowOpen] = useState(false);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.07, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#07070a]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-lg lg:blur-none"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}Hero.png)` }}
      />
      <div className="absolute inset-0 bg-[#07070a]/30 lg:bg-transparent" />

      <div className="relative z-10 flex w-full grow flex-col px-6 pb-6 pt-28 sm:px-10 sm:pb-10 sm:pt-32">
        <motion.div
          variants={container}
          initial={shouldReduceMotion ? false : 'hidden'}
          animate={shouldReduceMotion ? undefined : 'show'}
          className="flex grow flex-col"
        >
          <div className="flex grow flex-col items-center justify-center lg:items-start">
            <motion.p variants={item} className="font-mono text-sm font-medium uppercase tracking-[0.28em] text-white/60">
              Hey, I&apos;m a
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-2 max-w-5xl text-center font-display text-[clamp(3rem,9vw,7rem)] font-medium leading-[0.9] tracking-[-0.07em] text-white lg:text-left"
            >
              Product<br />Designer
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-center text-base leading-7 text-white/60 sm:text-lg sm:leading-8 lg:text-left"
            >
              Turning raw ideas into scalable digital products. I merge user psychology with market
              strategy and agile management to build experiences that convert.
            </motion.p>

            <motion.div variants={item} className="mt-8">
              <button
                onClick={() => setFlowOpen(true)}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-[rgb(22_10_27)] px-7 py-3 text-sm font-semibold text-white/90 shadow-[0_0_40px_-6px_#7d5493] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.12)] backdrop-blur-xl transition-all duration-300 hover:brightness-125 hover:-translate-y-0.5 hover:shadow-[0_0_60px_-4px_#7d5493]"
              >
                Let&apos;s build an experience
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </motion.div>
          </div>

          <div className="mt-auto grid grid-cols-2 gap-8 text-center sm:grid-cols-4 sm:gap-12 lg:text-left">
            {profile.pillars.map((p) => (
              <motion.div key={p.number} variants={item}>
                <span className="font-mono text-xs font-semibold text-secondary">#{p.number}</span>
                <h3 className="mt-2 font-display text-sm font-semibold tracking-[-0.03em] text-white/90 sm:text-base">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-xs leading-5 text-white/50">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {flowOpen && <ProjectCreationFlow onClose={() => setFlowOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
