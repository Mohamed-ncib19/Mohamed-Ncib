import { ArrowUpRight } from 'lucide-react';
import Card from '../components/Card.jsx';
import Chip from '../components/Chip.jsx';
import Reveal from '../components/Reveal.jsx';
import Section from '../components/Section.jsx';
import { posts } from '../data/posts.js';

export default function Journal() {
  return (
    <Section
      id="journal"
      eyebrow="Journal"
      title="Thinking in public, shipping in private."
      description="Short notes on product decisions, design philosophy, and what happens when data meets craft. A growing trail of thinking."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Reveal key={post.title} delay={index * 0.05}>
            <Card as="article" className="group h-full p-6 transition hover:-translate-y-1 hover:border-secondary/40">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">{post.date}</p>
              <h3 className="mt-5 font-display text-3xl font-semibold leading-none tracking-[-0.055em]">{post.title}</h3>
              <p className="mt-5 leading-7 text-muted-foreground">{post.summary}</p>
              <div className="mt-7 flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Chip key={tag} variant="muted" className="normal-case tracking-normal">
                      {tag}
                    </Chip>
                  ))}
                </div>
                <ArrowUpRight className="h-4 w-4 text-secondary transition group-hover:rotate-12" aria-hidden="true" />
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
