import { AnimatePresence } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import Card from '../components/Card.jsx';
import ProjectCreationFlow from '../components/ProjectCreationFlow.jsx';
import Reveal from '../components/Reveal.jsx';
import { profile } from '../data/profile.js';

const iconMap = {
  Email: Mail,
  LinkedIn: Linkedin,
  GitHub: Github,
  WhatsApp: MessageCircle,
};

export default function Contact() {
  const [flowOpen, setFlowOpen] = useState(false);

  return (
    <section id="contact" className="section-shell scroll-mt-24">
      <Reveal>
        <p className="eyebrow mb-4">Contact</p>
        <h2 className="section-title max-w-3xl">Got an idea worth building?</h2>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <Card className="group relative flex h-full flex-col items-center justify-center overflow-hidden p-6 text-center sm:p-8">
            <div className="pointer-events-none absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[#9D4EDD]/5 blur-3xl transition-all duration-1000 group-hover:scale-150 group-hover:bg-[#9D4EDD]/10" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-[#2F0F40]/10 blur-3xl transition-all duration-1000 group-hover:scale-150 group-hover:bg-[#2F0F40]/20" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-6 flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[#4ADE80] shadow-[0_0_8px_#4ADE80]" />
                <span className="text-xs font-mono font-medium uppercase tracking-widest text-white/30">Ready to deploy</span>
              </div>

              <p className="font-display text-[clamp(1.75rem,4vw,2.5rem)] font-medium leading-[1.1] tracking-[-0.04em] text-white">
                Start your project
              </p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/40">
                Define your archetype, set your mission, and deploy your vision in under 2 minutes.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                {['Startup', 'Ecommerce', 'Creative', 'Enterprise'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 text-[0.65rem] font-mono font-medium uppercase tracking-widest text-white/25 transition group-hover:border-white/10 group-hover:text-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setFlowOpen(true)}
                className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-[rgb(22_10_27)] px-7 py-3 text-sm font-semibold text-white/90 shadow-[0_0_40px_-6px_#7d5493] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.12)] backdrop-blur-xl transition-all duration-300 hover:brightness-125 hover:-translate-y-0.5 hover:shadow-[0_0_60px_-4px_#7d5493]"
              >
                Let&apos;s build an experience
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="flex h-full flex-col p-6 sm:p-8">
            <p className="eyebrow mb-6">Connect</p>
            <div className="grid grow gap-3">
              {profile.socials.map((social) => {
                const Icon = iconMap[social.label] || MessageCircle;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-4 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.08)] transition hover:border-secondary/40 hover:bg-white/[0.07]"
                  >
                    <span className="flex items-center gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary/10 text-secondary transition group-hover:bg-secondary group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-semibold">{social.label}</span>
                    </span>
                    <span className="text-sm text-muted-foreground transition group-hover:text-secondary">{social.href.startsWith('mailto') ? 'Send' : 'Open'}</span>
                  </a>
                );
              })}
            </div>
          </Card>
        </Reveal>
      </div>

      <AnimatePresence>
        {flowOpen && <ProjectCreationFlow onClose={() => setFlowOpen(false)} />}
      </AnimatePresence>
    </section>
  );
}
