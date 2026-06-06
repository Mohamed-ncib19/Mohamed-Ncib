import { motion } from 'motion/react';
import { ArrowLeft, Check, ChevronRight, Loader, Send, X } from 'lucide-react';
import { useState } from 'react';
import { createNotionPage } from '../lib/notion.js';

const archetypes = [
  { id: 'startup', label: 'Startup Founder', tag: 'Builder', desc: 'Growth. Speed. Validation.', emoji: '🚀' },
  { id: 'ecommerce', label: 'Ecommerce Brand', tag: 'Seller', desc: 'Conversions. Journey. Scale.', emoji: '🛒' },
  { id: 'business', label: 'Business Owner', tag: 'Operator', desc: 'Automation. Efficiency. ROI.', emoji: '⚙️' },
  { id: 'creative', label: 'Creative Brand', tag: 'Creator', desc: 'Identity. Presence. Impact.', emoji: '🎨' },
];

const objectives = [
  { id: 'revenue', label: 'Increase Revenue', emoji: '📈' },
  { id: 'automate', label: 'Automate Operations', emoji: '⚡' },
  { id: 'launch', label: 'Launch Faster', emoji: '🚀' },
  { id: 'ux', label: 'Improve User Experience', emoji: '✨' },
];

const resources = [
  { id: 'explorer', label: 'Explorer', desc: '$500 – $2,000' },
  { id: 'builder', label: 'Builder', desc: '$2,000 – $5,000' },
  { id: 'scale', label: 'Scale', desc: '$5,000 – $15,000' },
  { id: 'enterprise', label: 'Enterprise', desc: '$15,000+' },
];

const timelines = [
  { id: 'immediate', label: 'Immediate', desc: 'Ready to go' },
  { id: '30days', label: 'Within 30 Days', desc: 'Need it soon' },
  { id: 'quarter', label: 'This Quarter', desc: 'Planning ahead' },
  { id: 'flexible', label: 'Flexible', desc: 'No rush' },
];

const steps = [
  { key: 'name', title: 'Name Your Creation', subtitle: 'What is your project called?', icon: '✦' },
  { key: 'archetype', title: 'Choose Your Class', subtitle: 'Select the archetype that fits your project', icon: '🚀' },
  { key: 'objective', title: 'Define Your Mission', subtitle: 'What is the primary objective?', icon: '📈' },
  { key: 'resources', title: 'Allocate Resources', subtitle: 'Set your investment tier', icon: '💰' },
  { key: 'timeline', title: 'Set Deployment Window', subtitle: 'When do you want to launch?', icon: '⏱' },
  { key: 'contact', title: 'Register Identity', subtitle: 'Leave your contact to deploy', icon: '📞' },
];

const a = (id) => archetypes.find((x) => x.id === id);
const o = (id) => objectives.find((x) => x.id === id);
const r = (id) => resources.find((x) => x.id === id);
const t = (id) => timelines.find((x) => x.id === id);

function PuzzleTiles({ currentStep, hasValue }) {
  const tileData = [
    { icon: '✦', label: 'Name' },
    { icon: '🚀', label: 'Class' },
    { icon: '📈', label: 'Mission' },
    { icon: '💰', label: 'Budget' },
    { icon: '⏱', label: 'Timeline' },
  ];

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2">
      {tileData.map((tile, i) => {
        const filled = hasValue[i];
        const isCurrent = i === currentStep;

        return (
          <div key={i} className="flex items-center gap-1 sm:gap-2">
            <motion.div
              initial={false}
              animate={
                filled
                  ? { scale: 1, opacity: 1 }
                  : isCurrent
                    ? { scale: [1, 1.06, 1], opacity: 1 }
                    : { scale: 0.92, opacity: 0.35 }
              }
              transition={
                filled
                  ? { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                  : isCurrent
                    ? { repeat: Infinity, duration: 2, ease: 'easeInOut' }
                    : { duration: 0.3 }
              }
              className={`relative flex h-10 w-10 items-center justify-center rounded-xl text-base transition-colors duration-500 sm:h-12 sm:w-12 sm:text-lg ${
                filled
                  ? 'bg-gradient-to-br from-[#6B2FB8] to-[#9D4EDD] shadow-[0_0_20px_-5px_rgb(157_78_221_/_0.5)]'
                  : isCurrent
                    ? 'border border-[#9D4EDD]/50 bg-[#9D4EDD]/10 shadow-[0_0_20px_-10px_rgb(157_78_221_/_0.3)]'
                    : 'border border-white/[0.08] bg-white/[0.02]'
              }`}
            >
              {filled ? (
                <span>{tile.icon}</span>
              ) : (
                <span className={isCurrent ? 'text-white/60' : 'text-white/20'}>
                  {tile.icon}
                </span>
              )}
            </motion.div>

            {i < tileData.length - 1 && (
              <motion.div
                initial={false}
                animate={filled ? { opacity: 1, scaleX: 1 } : { opacity: 0.2, scaleX: 0.8 }}
                className={`h-[2px] w-4 rounded-full transition-colors duration-500 sm:w-6 ${
                  filled ? 'bg-gradient-to-r from-[#9D4EDD] to-[#B57EFF]' : 'bg-white/15'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function SelectCard({ selected, onClick, children, dim }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
        selected
          ? 'border-[#B57EFF]/50 bg-[#9D4EDD]/10 shadow-[0_0_40px_-15px_rgb(157_78_221_/_0.6)]'
          : dim
            ? 'border-white/[0.04] bg-white/[0.015] opacity-40'
            : 'border-white/[0.07] bg-white/[0.025] hover:border-white/15 hover:bg-white/[0.05]'
      }`}
    >
      {children}
    </button>
  );
}

function SuccessCard({ projectName, archetype: aid, objective: oid, resource: rid, timeline: tid, contact, contactType, onReset }) {
  const items = [
    { label: 'Project', value: projectName },
    { label: 'Class', value: a(aid)?.label },
    { label: 'Mission', value: o(oid)?.label },
    { label: 'Resources', value: r(rid)?.label },
    { label: 'Timeline', value: t(tid)?.label },
    { label: 'Contact', value: contact, sub: contactType === 'email' ? '✉' : '📞' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-white/[0.08] bg-[#07070a]/95 shadow-[0_0_80px_-20px_rgb(157_78_221_/_0.3)]"
    >
      <div className="p-6 sm:p-8">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#9D4EDD] to-[#B57EFF] shadow-[0_0_40px_-10px_rgb(157_78_221_/_0.5)]">
          <Send className="h-6 w-6 text-white" />
        </div>

        <h3 className="text-center font-display text-2xl font-medium tracking-[-0.03em] text-white">Project Forged</h3>
        <p className="mt-1 text-center text-sm text-white/40">I will wait for your call.</p>

        <div className="mx-auto my-6 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
          <div className="grid gap-3">
            {items.map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider text-white/30">{item.label}</span>
                <span className="flex items-center gap-1.5 text-sm text-white/85">
                  {item.sub && <span>{item.sub}</span>}
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mb-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#4ADE80]/20 bg-[#4ADE80]/8 px-4 py-2.5">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4ADE80] text-[10px] font-bold text-black">✓</span>
          <span className="text-sm font-semibold text-[#4ADE80]">Response: &lt; 24 Hours</span>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="w-full rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white/30 hover:bg-white/[0.09] hover:text-white"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
}

export default function ProjectCreationFlow({ onClose }) {
  const [step, setStep] = useState(0);
  const [projectName, setProjectName] = useState('');
  const [archetype, setArchetype] = useState('');
  const [objective, setObjective] = useState('');
  const [resource, setResource] = useState('');
  const [timeline, setTimeline] = useState('');
  const [contact, setContact] = useState('');
  const [contactType, setContactType] = useState('email');
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const hasValue = [
    projectName.trim().length > 0,
    !!archetype,
    !!objective,
    !!resource,
    !!timeline,
  ];

  const canAdvance = () => {
    switch (step) {
      case 0: return projectName.trim().length > 0;
      case 1: return !!archetype;
      case 2: return !!objective;
      case 3: return !!resource;
      case 4: return !!timeline;
      case 5: return contact.trim().length > 0;
      default: return false;
    }
  };

  const advance = () => {
    if (!canAdvance()) return;
    if (step < steps.length - 1) {
      setStep((s) => s + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (submitting || done) return;
    setSubmitting(true);
    setError('');

    const payload = {
      projectName: projectName.trim(),
      archetype: archetypes.find((a) => a.id === archetype)?.label || archetype,
      objective: objectives.find((o) => o.id === objective)?.label || objective,
      resources: resources.find((r) => r.id === resource)?.label || resource,
      timeline: timelines.find((t) => t.id === timeline)?.label || timeline,
      contact: contact.trim(),
      contactType,
    };

    try {
      await createNotionPage(payload);
      setDone(true);
    } catch (err) {
      setError(err.message || 'Failed to submit. Please try again.');
      setSubmitting(false);
    }
  };

  const reset = () => {
    setStep(0);
    setProjectName('');
    setArchetype('');
    setObjective('');
    setResource('');
    setTimeline('');
    setContact('');
    setContactType('email');
    setSubmitting(false);
    setDone(false);
    setError('');
    onClose();
  };

  const renderStep = () => {
    const s = steps[step];

    switch (s.key) {
      case 'name':
        return (
          <div className="py-6">
            <label className="relative block">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-lg text-white/15">✦</span>
              <input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="e.g. Nexa, Vault, Aether..."
                onKeyDown={(e) => e.key === 'Enter' && advance()}
                className="h-16 w-full rounded-2xl border border-white/[0.07] bg-white/[0.02] pl-12 pr-5 text-xl font-display font-medium tracking-[-0.02em] text-white outline-none transition focus:border-[#9D4EDD]/40 focus:bg-white/[0.04] placeholder:text-white/15"
                autoFocus
              />
            </label>
          </div>
        );

      case 'archetype':
        return (
          <div className="grid gap-3">
            {archetypes.map((a) => (
              <SelectCard key={a.id} selected={archetype === a.id} onClick={() => setArchetype(a.id)}>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05] text-2xl">{a.emoji}</span>
                  <div className="flex-1">
                    <p className="font-semibold text-white">{a.label}</p>
                    <p className="text-sm text-white/40">{a.desc}</p>
                  </div>
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full transition-all duration-300 ${archetype === a.id ? 'bg-[#9D4EDD] shadow-[0_0_12px_-2px_rgb(157_78_221_/_0.6)]' : 'border border-white/15'}`}>
                    {archetype === a.id && <Check className="h-3.5 w-3.5 text-white" />}
                  </span>
                </div>
              </SelectCard>
            ))}
          </div>
        );

      case 'objective':
        return (
          <div className="grid grid-cols-2 gap-3">
            {objectives.map((obj) => (
              <SelectCard key={obj.id} selected={objective === obj.id} onClick={() => setObjective(obj.id)}>
                <div className="flex flex-col items-center gap-2 py-2 text-center">
                  <span className="text-3xl">{obj.emoji}</span>
                  <p className="text-sm font-semibold text-white">{obj.label}</p>
                </div>
              </SelectCard>
            ))}
          </div>
        );

      case 'resources':
        return (
          <div className="grid grid-cols-2 gap-3">
            {resources.map((res) => (
              <SelectCard key={res.id} selected={resource === res.id} onClick={() => setResource(res.id)}>
                <div className="py-2 text-center">
                  <p className="text-xl font-bold tracking-[-0.03em] text-white">{res.label}</p>
                  <p className="mt-1 text-sm text-white/35">{res.desc}</p>
                </div>
              </SelectCard>
            ))}
          </div>
        );

      case 'timeline':
        return (
          <div className="grid grid-cols-2 gap-3">
            {timelines.map((tl) => (
              <SelectCard key={tl.id} selected={timeline === tl.id} onClick={() => setTimeline(tl.id)}>
                <div className="py-2 text-center">
                  <p className="text-sm font-semibold text-white">{tl.label}</p>
                  <p className="mt-0.5 text-xs text-white/35">{tl.desc}</p>
                </div>
              </SelectCard>
            ))}
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-4">
            <p className="text-sm text-white/40">How should we reach you?</p>
            <div className="flex gap-2">
              {['email', 'phone'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => { setContactType(type); setContact(''); }}
                  className={`flex-1 rounded-xl border py-3 text-center text-sm font-semibold transition-all duration-300 ${
                    contactType === type
                      ? 'border-[#9D4EDD]/50 bg-[#9D4EDD]/10 text-white shadow-[0_0_20px_-10px_rgb(157_78_221_/_0.4)]'
                      : 'border-white/[0.07] bg-white/[0.025] text-white/40 hover:border-white/15'
                  }`}
                >
                  {type === 'email' ? '✉  Email' : '📞  Phone'}
                </button>
              ))}
            </div>
            <label className="relative block">
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={contactType === 'email' ? 'your@email.com' : '+1 234 567 890'}
                onKeyDown={(e) => e.key === 'Enter' && advance()}
                className="h-14 w-full rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 text-base text-white outline-none transition focus:border-[#9D4EDD]/40 focus:bg-white/[0.04] placeholder:text-white/15"
                autoFocus
              />
            </label>
          </div>
        );

      default:
        return null;
    }
  };

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={reset} />
        <SuccessCard
          projectName={projectName}
          archetype={archetype}
          objective={objective}
          resource={resource}
          timeline={timeline}
          contact={contact}
          contactType={contactType}
          onReset={reset}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 30 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#07070a]/95 shadow-[0_0_80px_-20px_rgb(157_78_221_/_0.3)] backdrop-blur-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4 sm:px-8">
          <p className="text-sm font-display font-medium tracking-[-0.02em] text-white/70">
            Tier <span className="text-[#9D4EDD]">{step + 1}</span> of {steps.length}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/40 transition hover:border-white/20 hover:text-white/70"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8">
          <div className="space-y-6">
            <PuzzleTiles currentStep={step} hasValue={hasValue} />

            <motion.div key={step} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
              <p className="font-display text-2xl font-medium tracking-[-0.03em] text-white">{steps[step].title}</p>
              <p className="mb-5 mt-1 text-sm text-white/40">{steps[step].subtitle}</p>
              {renderStep()}
              {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/[0.06] px-6 py-5 sm:px-8">
          <button
            type="button"
            disabled={step === 0}
            onClick={() => setStep((s) => s - 1)}
            className={`inline-flex items-center gap-1 rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
              step > 0
                ? 'border-white/10 bg-white/[0.04] text-white/50 hover:border-white/20 hover:text-white'
                : 'border-white/[0.04] text-white/15 cursor-not-allowed'
            }`}
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back
          </button>
          <button
            type="button"
            disabled={!canAdvance()}
            onClick={advance}
            className={`inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-semibold transition-all duration-300 ${
              canAdvance()
                ? 'bg-gradient-to-r from-[#6B2FB8] via-[#9D4EDD] to-[#B57EFF] text-white shadow-[0_0_30px_-12px_rgb(157_78_221_/_0.6)] hover:brightness-110 hover:-translate-y-0.5'
                : 'border border-white/10 bg-white/[0.04] text-white/20 cursor-not-allowed'
            }`}
          >
            {step === steps.length - 1 ? (
              <>Deploy Project <Send className="h-4 w-4" /></>
            ) : (
              <span className="flex items-center gap-1.5">
                {step === 0 ? 'Name Your Creation' : step === 1 ? 'Select Class' : step === 2 ? 'Define Mission' : step === 3 ? 'Allocate' : step === 4 ? 'Set Timeline' : ''}
                <ChevronRight className="h-4 w-4" />
              </span>
            )}
          </button>
        </div>

        {submitting && !done && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}>
              <Loader className="h-8 w-8 text-[#9D4EDD]" />
            </motion.div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
