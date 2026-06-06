import { AnimatePresence } from 'motion/react';
import { FileText } from 'lucide-react';
import { useState } from 'react';
import Chip from '../components/Chip.jsx';
import PDFViewerModal from '../components/PDFViewerModal.jsx';
import Reveal from '../components/Reveal.jsx';
import ProcessStack from '../components/ProcessStack.jsx';
import { profile } from '../data/profile.js';

export default function About() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <>
      <section id="about" className="section-shell scroll-mt-24">
        {/* Image — mobile only */}
        <div className="lg:hidden">
          <div
            className="mb-8 h-48 w-full rounded-2xl border border-white/[0.06] bg-cover bg-center"
            style={{ backgroundImage: `url(${import.meta.env.BASE_URL}Hero.png)` }}
          />
        </div>

        {/* Bio + chips */}
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <div>
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
            <Reveal delay={0.12} className="mt-4">
              <button
                onClick={() => setCvOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-semibold text-white/70 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.12)] backdrop-blur-xl transition hover:border-secondary/50 hover:bg-white/[0.09] hover:-translate-y-0.5"
              >
                <FileText className="h-3.5 w-3.5" />
                View CV
              </button>
            </Reveal>
          </div>
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

      <ProcessStack />

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
