import { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import { workCapabilities, workCategories } from '../data/work.js';

function ProjectCard({ project, accent, featured = false }) {
  return (
    <article
      className="work-card group flex h-full flex-col rounded-2xl p-6 sm:p-7"
      style={{ '--accent': accent }}
    >
      <div className="work-card__glow" aria-hidden="true" />
      <div className="relative flex h-full flex-col">
        <span className="work-card__kind font-mono text-[0.6rem] font-semibold uppercase tracking-[0.18em]">
          {project.kind}
        </span>
        <h4 className={`mt-3 font-display font-medium tracking-[-0.035em] text-white ${featured ? 'text-2xl sm:text-[1.9rem] sm:leading-[1.15]' : 'text-xl'}`}>
          {project.name}
        </h4>
        <p className={`mt-3 text-[0.95rem] leading-7 text-white/55 ${featured ? 'max-w-2xl sm:text-base sm:leading-8' : ''}`}>
          {project.summary}
        </p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label={`${project.name} scope`}>
          {project.facets.map((facet) => (
            <li key={facet} className="work-facet">
              <span className="work-facet__dot" aria-hidden="true" />
              {facet}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Showcase() {
  const [active, setActive] = useState(0);
  const railRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const category = workCategories[active];

  const scrollToTab = useCallback((index) => {
    const rail = railRef.current;
    if (!rail) return;
    const tab = rail.querySelector(`[data-index="${index}"]`);
    if (!tab) return;
    tab.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', inline: 'center', block: 'nearest' });
  }, [reduceMotion]);

  useEffect(() => {
    scrollToTab(active);
  }, [active, scrollToTab]);

  const goNext = useCallback(() => {
    setActive((prev) => (prev + 1) % workCategories.length);
  }, []);

  const goPrev = useCallback(() => {
    setActive((prev) => (prev - 1 + workCategories.length) % workCategories.length);
  }, []);

  return (
    <section id="showcase" className="section-shell scroll-mt-24">
      <Reveal className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-12">
        <div>
          <p className="eyebrow mb-4">Selected work</p>
          <h2 className="section-title">What I build</h2>
        </div>
        <ul className="flex flex-wrap gap-2 lg:justify-end lg:pb-2" aria-label="Capabilities">
          {workCapabilities.map((capability) => (
            <li key={capability} className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3.5 py-1.5 font-mono text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white/40 transition-colors duration-300 hover:border-white/15 hover:text-white/70">
              {capability}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-10">
          <div className="relative">
            <div
              ref={railRef}
              role="tablist"
              aria-label="Work categories"
              className="-mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-3 lg:mx-0 lg:gap-3 lg:overflow-x-auto lg:px-0 lg:pb-0"
            >
              {workCategories.map((item, i) => {
                const selected = i === active;
                return (
                  <button
                    key={item.id}
                    data-index={i}
                    type="button"
                    role="tab"
                    id={`work-tab-${item.id}`}
                    aria-selected={selected}
                    aria-controls={`work-panel-${item.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    style={{ '--accent': item.accent }}
                    className={`work-tab shrink-0 snap-start text-left transition-all duration-300 ${
                      selected ? 'is-active' : ''
                    }`}
                  >
                    <span className="work-tab__bar" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="work-tab__index font-mono text-[0.62rem] font-semibold tracking-[0.16em]">
                        {item.index}
                      </span>
                      <span className="mt-1 block whitespace-nowrap text-[0.92rem] font-medium leading-snug tracking-[-0.02em]">
                        {item.label}
                      </span>
                      <span className="mt-1 hidden text-xs text-white/30 lg:block">{item.meta}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="pointer-events-none mt-4 flex items-center justify-end gap-2 lg:mt-6">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous category"
                className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition hover:border-white/25 hover:text-white lg:h-10 lg:w-10"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next category"
                className="pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 transition hover:border-white/25 hover:text-white lg:h-10 lg:w-10"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            role="tabpanel"
            id={`work-panel-${category.id}`}
            aria-labelledby={`work-tab-${category.id}`}
            tabIndex={-1}
            className="mt-8"
          >
            <motion.div
              key={category.id}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                className="max-w-2xl border-l-2 pl-4 text-[0.95rem] leading-7 text-white/50"
                style={{ borderColor: `rgb(${category.accent} / 0.4)` }}
              >
                {category.lede}
              </p>
              <div
                className={`mt-7 grid gap-4 sm:gap-5 ${
                  category.projects.length > 1 ? 'sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2' : ''
                }`}
              >
                {category.projects.map((project) => (
                  <ProjectCard
                    key={project.name}
                    project={project}
                    accent={category.accent}
                    featured={category.featured}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative mt-16 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-7 sm:p-9 lg:p-12">
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full"
            style={{ background: 'radial-gradient(circle, rgb(157 78 221 / 0.2) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full"
            style={{ background: 'radial-gradient(circle, rgb(47 15 64 / 0.28) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <p className="max-w-2xl font-display text-[clamp(1.4rem,3vw,2.1rem)] font-medium leading-[1.25] tracking-[-0.04em] text-white">
              Have a complex process or idea that could be turned into a digital product?
            </p>
            <Link
              to="/#contact"
              className="group inline-flex shrink-0 items-center gap-2.5 self-start rounded-full border border-white/[0.08] bg-[rgb(22_10_27)] px-7 py-3.5 text-sm font-semibold text-white/90 shadow-[0_0_40px_-6px_#7d5493] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:brightness-125 hover:shadow-[0_0_60px_-4px_#7d5493] lg:self-auto"
            >
              Let&apos;s build it
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
