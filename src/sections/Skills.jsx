import { useEffect, useRef, useState } from 'react';
import Card from '../components/Card.jsx';
import Chip from '../components/Chip.jsx';
import Section from '../components/Section.jsx';
import { skillGroups } from '../data/skills.js';

function SkillBar({ name, level }) {
  const barRef = useRef(null);
  const [filled, setFilled] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true);
      setFilled(true);
      return;
    }

    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -20% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4 text-sm font-semibold">
        <span>{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
        <div
          ref={barRef}
          className="h-full rounded-full bg-secondary"
          style={{
            width: reduced || filled ? `${level}%` : '0%',
            transition: 'width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="Design craft with engineering depth."
      description="Three layers that define a product-capable designer: what you understand, what you design, and what you can ship."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.title}>
            <Card className="skill-group-card h-full p-6 sm:p-7">
              <p className="eyebrow mb-4">0{groupIndex + 1}</p>
              <h3 className="font-display text-3xl font-semibold tracking-[-0.055em]">{group.title}</h3>
              <p className="mt-4 leading-7 text-muted-foreground">{group.description}</p>
              <div className="mt-8 space-y-5">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <Chip key={tool} variant="muted" className="normal-case tracking-normal">
                    {tool}
                  </Chip>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
