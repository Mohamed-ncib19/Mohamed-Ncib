import { cn } from '../lib/utils';
import Reveal from './Reveal.jsx';

export default function Section({ id, eyebrow, title, description, children, className, headerClassName }) {
  return (
    <section id={id} className={cn('section-shell scroll-mt-24', className)}>
      {(eyebrow || title || description) && (
        <Reveal className={cn('mb-12 grid gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-end', headerClassName)}>
          <div>
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {title && <h2 className="section-title max-w-4xl">{title}</h2>}
          </div>
          {description && <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">{description}</p>}
        </Reveal>
      )}
      {children}
    </section>
  );
}
