import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import Chip from '../components/Chip.jsx';
import Reveal from '../components/Reveal.jsx';
import { projects } from '../data/projects.js';
import NotFound from './NotFound.jsx';

const narrativeSections = [
  { key: 'problem', label: 'Problem' },
  { key: 'approach', label: 'Approach' },
  { key: 'solution', label: 'Solution' },
  { key: 'outcome', label: 'Outcome' },
];

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <article className="container pb-20 pt-36 sm:pt-44">
      <Button as={Link} to="/#work" variant="ghost" className="mb-10 pl-0 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to work
      </Button>

      <header className="grid gap-10 lg:grid-cols-[1fr_0.48fr] lg:items-end">
        <div>
          <Chip variant="accent" className="mb-6">
            {project.eyebrow}
          </Chip>
          <h1 className="display-title max-w-5xl">{project.title}</h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-muted-foreground">{project.summary}</p>
        </div>
        <Card className="p-6">
          <dl className="grid gap-5 text-sm">
            <div>
              <dt className="font-mono uppercase tracking-[0.2em] text-muted-foreground">Role</dt>
              <dd className="mt-2 font-semibold">{project.role}</dd>
            </div>
            <div>
              <dt className="font-mono uppercase tracking-[0.2em] text-muted-foreground">Year</dt>
              <dd className="mt-2 font-semibold">{project.year}</dd>
            </div>
            <div>
              <dt className="font-mono uppercase tracking-[0.2em] text-muted-foreground">Type</dt>
              <dd className="mt-2 font-semibold">{project.type}</dd>
            </div>
          </dl>
        </Card>
      </header>

      <Reveal className="mt-12 overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/[0.05] p-3 shadow-editorial">
        {project.image ? (
          <img src={project.image} alt={project.imageAlt} loading="eager" className="aspect-[16/9] w-full rounded-[1.65rem] object-cover" />
        ) : (
          <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-[1.65rem] bg-muted/40">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#9D4EDD]/25 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-16 left-12 h-52 w-52 rounded-full bg-[#6B2FB8]/20 blur-3xl" aria-hidden="true" />
            <div className="relative text-center">
              <p className="text-[clamp(3rem,8vw,7rem)] font-semibold leading-none tracking-[-0.08em] text-secondary/80">
                {project.visual?.value}
              </p>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
                {project.visual?.caption}
              </p>
            </div>
          </div>
        )}
      </Reveal>

      <section className="mt-10 grid gap-4 sm:grid-cols-3" aria-label="Project metrics">
        {project.metrics.map((metric) => (
          <Card key={metric.label} className="p-6">
            <p className="font-display text-4xl font-semibold tracking-[-0.06em] text-secondary">{metric.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">{metric.label}</p>
          </Card>
        ))}
      </section>

      <section className="mt-16 grid gap-5 lg:grid-cols-4" aria-label="Case study narrative">
        {narrativeSections.map((section, index) => (
          <Reveal key={section.key} delay={index * 0.05}>
            <Card className="h-full p-6">
              <p className="eyebrow mb-5">{section.label}</p>
              <p className="leading-8 text-muted-foreground">{project[section.key]}</p>
            </Card>
          </Reveal>
        ))}
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[0.72fr_1fr]">
        <div>
          <p className="eyebrow mb-4">Artifacts</p>
          <h2 className="section-title">Screenshots need real evidence.</h2>
          <p className="mt-6 leading-8 text-muted-foreground">
            PLACEHOLDER gallery. Replace these images with approved project artifacts, user-flow diagrams, research notes, and outcome screenshots.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links?.map((link) => (
              <Button key={link.href} as="a" href={link.href} target="_blank" rel="noreferrer" variant="secondary">
                {link.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            ))}
          </div>
        </div>
        {project.gallery && project.gallery.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            {project.gallery.map((image, index) => (
              <Card key={`${project.slug}-${image}`} className="overflow-hidden p-3">
                <img
                  src={image}
                  alt={`PLACEHOLDER gallery artifact ${index + 1} for ${project.title}. Replace with verified project artifact.`}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-[1.35rem] object-cover"
                />
              </Card>
            ))}
          </div>
        )}
      </section>
    </article>
  );
}
