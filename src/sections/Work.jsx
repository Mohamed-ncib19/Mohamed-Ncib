import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';

const entries = [
  {
    period: '2022 – Present',
    title: 'Freelance Web Developer',
    bullets: [
      'Built custom web applications for clients across various industries.',
      'Managed full project lifecycles from concept to deployment.',
      'Delivered solutions aligned with business goals and user needs.',
    ],
    side: 'right',
  },
  {
    period: '2025 – 2026',
    title: 'Abajim',
    bullets: [
      'Developed and optimized production features for the core platform.',
      'Participated in performance improvements and code quality initiatives.',
      'Collaborated closely with design and product teams on feature delivery.',
    ],
    side: 'left',
  },
  {
    period: 'Ongoing',
    title: 'Personal Products',
    bullets: [
      'Created and deployed real-world services from the ground up.',
      'Experimented with SaaS architectures and user-engagement platforms.',
      'Focused on scalability, clean architecture, and product-driven UX.',
    ],
    side: 'right',
  },
];

export default function Work() {
  return (
    <section id="work" className="section-shell scroll-mt-24">
      <Reveal>
        <p className="eyebrow mb-4">Journey</p>
        <h2 className="section-title max-w-3xl">My journey</h2>
      </Reveal>

      <div className="relative mt-16">
        <div className="pointer-events-none absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[#9D4EDD]/40 via-white/[0.08] to-transparent sm:left-1/2 sm:-translate-x-px" />

        <div className="space-y-16 sm:space-y-20">
          {entries.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className="relative grid sm:grid-cols-2 sm:gap-8 lg:gap-12">
                {/* Dot */}
                <div className="absolute left-0 top-1.5 sm:left-1/2 sm:-translate-x-1/2">
                  <div className="h-[10px] w-[10px] rounded-full border-2 border-[#9D4EDD] bg-[#07070a] shadow-[0_0_12px_-2px_rgb(157_78_221_/_0.5)]" />
                </div>

                {/* Date — left on mobile, alternate on desktop */}
                <div className={`pl-10 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:col-start-2 sm:pl-8'}`}>
                  <span className="inline-block rounded-full border border-white/[0.06] bg-white/[0.04] px-3.5 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-white/50 sm:text-[0.55rem]">
                    {entry.period}
                  </span>
                </div>

                {/* Content — left on mobile, alternate on desktop */}
                <div className={`mt-3 pl-10 sm:mt-0 sm:pl-0 ${i % 2 === 0 ? 'sm:row-start-1 sm:col-start-2 sm:pl-8' : 'sm:pr-8 sm:text-right'}`}>
                  <h3 className="font-display text-xl font-medium tracking-[-0.03em] text-white sm:text-2xl">
                    {entry.title}
                  </h3>

                  <ul className={`mt-4 space-y-2.5 ${i % 2 === 0 ? '' : 'sm:flex sm:flex-col sm:items-end'}`}>
                    {entry.bullets.map((bullet, bi) => (
                      <li key={bi} className={`flex gap-3 text-sm leading-6 text-white/55 sm:text-base sm:leading-7 ${i % 2 === 0 ? '' : 'sm:flex-row-reverse'}`}>
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9D4EDD]/60" />
                        <span className={i % 2 === 0 ? '' : 'sm:text-left'}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Reveal delay={0.2}>
        <div className="relative mt-20 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-[#9D4EDD]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-[#2F0F40]/20 blur-3xl" />

          <div className="relative">
            <p className="max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
              Interested in the technical details, challenges, architecture decisions, or client results?
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[rgb(22_10_27)] px-6 py-2.5 text-sm font-semibold text-white/85 shadow-[0_0_30px_-8px_#7d5493] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.12)] backdrop-blur-xl transition-all duration-300 hover:brightness-125 hover:-translate-y-0.5 hover:shadow-[0_0_50px_-4px_#7d5493]"
              >
                Let&apos;s talk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
