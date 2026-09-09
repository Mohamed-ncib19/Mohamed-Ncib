import { AnimatePresence } from 'motion/react';
import { FileText } from 'lucide-react';
import { useState } from 'react';
import Chip from '../components/Chip.jsx';
import PDFViewerModal from '../components/PDFViewerModal.jsx';
import Reveal from '../components/Reveal.jsx';
import ProcessTimeline from '../components/ProcessTimeline.jsx';
import { profile } from '../data/profile.js';

export default function About() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <>
      <section id="about" className="section-shell scroll-mt-24">
        {/* Bio + portrait */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="eyebrow mb-3">About</p>
              <h2 className="font-display text-3xl font-medium tracking-[-0.04em] text-white sm:text-4xl">
                {profile.name}
              </h2>
              <p className="mt-1 text-base text-white/50">{profile.role}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                {profile.bio}
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-6 flex flex-wrap gap-2">
              {profile.areas.map((area) => (
                <Chip key={area} variant="vivid" dot>{area}</Chip>
              ))}
            </Reveal>
            <Reveal delay={0.12} className="mt-5">
              <button
                onClick={() => setCvOpen(true)}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-[rgb(22_10_27)] px-5 py-2.5 text-sm font-semibold text-white/85 shadow-[0_0_30px_-8px_#7d5493] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.12)] backdrop-blur-xl transition-all duration-300 hover:brightness-125 hover:-translate-y-0.5 hover:shadow-[0_0_50px_-4px_#7d5493]"
              >
                <FileText className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                View CV
              </button>
            </Reveal>
          </div>

          <Reveal delay={0.06} className="order-1 lg:order-2">
            <div
              className="h-48 w-full rounded-2xl border border-white/[0.06] bg-cover bg-center shadow-[0_30px_80px_-45px_rgb(157_78_221_/_0.9)] sm:h-64 lg:h-[26rem]"
              style={{ backgroundImage: `url(${import.meta.env.BASE_URL}Hero.webp)` }}
              role="img"
              aria-label="Portrait of Mohamed Ncib"
            />
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={0.14}>
          <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-10">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-secondary">{stat.value}</p>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">{stat.label}</p>
                <p className="mt-1 max-w-xs text-sm leading-5 text-white/40">{stat.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <ProcessTimeline />

      <AnimatePresence>
        {cvOpen && (
          <PDFViewerModal
            pdfUrl={profile.cv.href}
            onClose={() => setCvOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
