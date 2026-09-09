import Reveal from './Reveal.jsx';

const steps = [
  { label: 'Discover', description: 'Uncover user needs, pain points, and opportunities to define the problem space.', color: '#8b5cf6' },
  { label: 'Research', description: 'Analyze behaviors, market data, and competitive landscape.', color: '#7c3aed' },
  { label: 'Strategy', description: 'Define the vision, roadmap, and measurable success criteria.', color: '#6d28d9' },
  { label: 'Design', description: 'Craft interactions and interfaces that feel intuitive and intentional.', color: '#5b21b6' },
  { label: 'Create', description: 'Build high-fidelity prototypes and production-ready front-end.', color: '#4c1d95' },
  { label: 'Test', description: 'Validate assumptions, iterate quickly, and refine the experience.', color: '#3b0764' },
  { label: 'Launch', description: 'Ship, monitor, and evolve — the product is never truly finished.', color: '#2e1065' },
];

export default function ProcessTimeline() {
  return (
    <section className="section-shell scroll-mt-24">
      <Reveal>
        <p className="eyebrow mb-4">Process</p>
        <h2 className="section-title max-w-3xl">From idea to launch</h2>
      </Reveal>

      <div className="relative mt-12">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#9D4EDD]/40 via-white/[0.08] to-transparent sm:left-1/2 sm:-translate-x-px" />

        <div className="space-y-10 sm:space-y-12">
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.08} direction={i % 2 === 0 ? 'left' : 'right'}>
              <div className="relative grid sm:grid-cols-2 sm:gap-8 lg:gap-12">
                <div className="absolute left-0 top-1.5 sm:left-1/2 sm:-translate-x-1/2">
                  <div
                    className="h-[10px] w-[10px] rounded-full border-2 bg-[#07070a] shadow-[0_0_12px_-2px_rgb(157_78_221_/_0.5)]"
                    style={{ borderColor: step.color }}
                  />
                </div>

                <div className={`pl-10 sm:pl-0 ${i % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:col-start-2 sm:pl-8'}`}>
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.05]">
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                      Step {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-medium tracking-[-0.03em] text-white sm:text-2xl">
                      {step.label}
                    </h3>
                    <div className="mt-3 mb-3 h-[2px] w-8 rounded-full sm:ml-auto transition-all duration-300" style={{ backgroundColor: step.color }} />
                    <p className="text-sm leading-6 text-white/55 sm:text-base sm:leading-7">{step.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
