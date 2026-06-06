import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Chip from '../components/Chip.jsx';
import Reveal from '../components/Reveal.jsx';
import { projects } from '../data/projects.js';
import { cn } from '../lib/utils.js';

export default function Work() {
  const [expanded, setExpanded] = useState(null);

  const toggleProject = (slug) => {
    setExpanded((prev) => (prev === slug ? null : slug));
  };

  return (
    <section id="work" className="section-shell scroll-mt-24">
      <Reveal>
        <p className="eyebrow mb-4">Work</p>
        <h2 className="section-title max-w-3xl">Selected projects</h2>
      </Reveal>

      <div className="mt-12 space-y-1">
        {projects.map((project, index) => {
          const isOpen = expanded === project.slug;

          return (
            <Reveal key={project.slug} delay={index * 0.06}>
              <div
                className={cn(
                  'rounded-2xl border border-transparent transition-all duration-500 cursor-pointer',
                  isOpen
                    ? 'border-white/[0.1] bg-white/[0.04]'
                    : 'hover:border-white/[0.06] hover:bg-white/[0.015]',
                )}
              >
                <button
                  onClick={() => toggleProject(project.slug)}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7"
                >
                  <span className="font-mono text-xs font-semibold tracking-wider text-white/20 sm:text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-1 min-w-0">
                    <p className="font-display text-base font-medium tracking-[-0.03em] text-white transition-colors sm:text-lg">
                      {project.title}
                    </p>
                    <div className="mt-0.5 flex items-center gap-2 text-xs text-white/30">
                      <span>{project.year}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{project.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="hidden gap-1.5 sm:flex">
                      {project.tags.slice(0, 2).map((tag) => (
                        <Chip key={tag} variant="muted" className="normal-case tracking-normal text-[0.6rem]">
                          {tag}
                        </Chip>
                      ))}
                    </div>
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 text-white/30 transition-transform duration-500 shrink-0',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </div>
                </button>

                <div
                  className={cn(
                    'overflow-hidden transition-all duration-500 ease-[0.22,1,0.36,1]',
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
                  )}
                >
                  <div className="border-t border-white/[0.06] px-5 pb-6 pt-5 sm:px-7 sm:pb-7">
                    <div className="grid gap-6 sm:grid-cols-[1fr_auto]">
                      <div className="space-y-4">
                        <p className="text-sm leading-7 text-white/60">{project.summary}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <Chip key={tag} variant="muted" className="normal-case tracking-normal">
                              {tag}
                            </Chip>
                          ))}
                        </div>
                        {project.role && (
                          <p className="text-xs text-white/25">
                            <span className="font-semibold text-white/40">Role:</span> {project.role}
                          </p>
                        )}
                      </div>

                      <Link
                        to={`/work/${project.slug}`}
                        className="inline-flex h-10 items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-5 text-xs font-semibold text-white/60 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white sm:self-start"
                      >
                        View project &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
