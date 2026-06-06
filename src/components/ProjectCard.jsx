import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from './Card.jsx';
import Chip from './Chip.jsx';

export default function ProjectCard({ project }) {
  return (
    <Card className="group overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-glow">
      <Link to={`/work/${project.slug}`} className="block focus-visible:ring-inset">
        <div className="relative aspect-[1.35] overflow-hidden bg-muted/40">
          {project.image ? (
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
            />
          ) : (
            <div className="flex h-full flex-col justify-between overflow-hidden p-7">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#9D4EDD]/30 blur-3xl transition duration-700 group-hover:bg-[#B57EFF]/35" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-[#6B2FB8]/25 blur-3xl" aria-hidden="true" />
              <p className="eyebrow relative">{project.visual?.label}</p>
              <div className="relative">
                <p className="accent-shimmer-auto text-[clamp(2.4rem,7vw,5.8rem)] font-semibold leading-none tracking-[-0.08em]">
                  {project.visual?.value}
                </p>
                <p className="mt-4 max-w-sm text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
                  {project.visual?.caption}
                </p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/82 via-background/10 to-transparent" />
          <Chip variant="accent" className="absolute left-4 top-4 bg-background/80 backdrop-blur">
            {project.eyebrow}
          </Chip>
        </div>
        <div className="space-y-5 p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {project.year} / {project.type}
              </p>
              <h3 className="font-display text-3xl font-semibold leading-none tracking-[-0.055em]">
                {project.title}
              </h3>
            </div>
            <span className="rounded-full border border-white/15 bg-white/[0.05] p-3 text-secondary transition group-hover:rotate-12 group-hover:border-secondary/50">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
          <p className="leading-7 text-muted-foreground">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Chip key={tag} variant="muted" className="normal-case tracking-normal">
                {tag}
              </Chip>
            ))}
          </div>
        </div>
      </Link>
    </Card>
  );
}
