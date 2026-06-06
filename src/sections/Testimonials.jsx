import { Quote } from 'lucide-react';
import Card from '../components/Card.jsx';
import Reveal from '../components/Reveal.jsx';
import Section from '../components/Section.jsx';
import { testimonials } from '../data/testimonials.js';

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Proof"
      title="Trust is built on results, not claims."
      description="Placeholder cards until real collaborators approve their words. Nothing is fabricated — every quote here will be earned."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={index * 0.06}>
            <Card className="flex h-full flex-col p-7">
              <Quote className="mb-8 h-8 w-8 text-secondary" aria-hidden="true" />
              <blockquote className="flex-1 text-lg leading-8 text-muted-foreground">{testimonial.quote}</blockquote>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-5">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-secondary/10 font-semibold text-secondary">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
