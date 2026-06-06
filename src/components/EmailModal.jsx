import { motion } from 'motion/react';
import { Check, Loader, Send, X } from 'lucide-react';
import { useState } from 'react';

const RECIPIENT = 'mohamed.ncib@polytechnicien.tn';

export default function EmailModal({ onClose }) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const canSend = message.trim().length > 0;

  const sendViaMailto = () => {
    const subj = encodeURIComponent(subject.trim() || 'Portfolio inquiry');
    const body = encodeURIComponent(message.trim());
    window.open(`mailto:${RECIPIENT}?subject=${subj}&body=${body}`, '_blank');
  };

  const handleSend = async () => {
    if (!canSend || sending || sent) return;
    setSending(true);
    setError('');

    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (formspreeEndpoint && !formspreeEndpoint.includes('PLACEHOLDER')) {
      try {
        const res = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            subject: subject.trim() || 'Portfolio inquiry',
            message: message.trim(),
            _replyto: RECIPIENT,
          }),
        });
        if (!res.ok) throw new Error('Formspree failed');
        setSent(true);
        setSending(false);
        return;
      } catch {
        // fall through to mailto
      }
    }

    sendViaMailto();
    setSent(true);
    setSending(false);
  };

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
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/[0.08] bg-[#07070a]/95 shadow-[0_0_80px_-20px_rgb(157_78_221_/_0.3)] backdrop-blur-2xl"
      >
        {sent ? (
          <div className="flex flex-col items-center px-8 py-16 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#9D4EDD] to-[#B57EFF] shadow-[0_0_40px_-10px_rgb(157_78_221_/_0.5)]">
              <Check className="h-7 w-7 text-white" />
            </div>
            <p className="font-display text-2xl font-medium tracking-[-0.03em] text-white">Message sent</p>
            <p className="mt-1.5 text-sm text-white/40">I will get back to you within 24 hours.</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 w-full max-w-[200px] rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white/70 transition hover:border-white/30 hover:bg-white/[0.09] hover:text-white"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
              <p className="font-display text-sm font-medium tracking-[-0.02em] text-white/70">New message</p>
              <button
                type="button"
                onClick={onClose}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/40 transition hover:border-white/20 hover:text-white/70"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="px-5 py-4">
              <div className="flex items-center gap-3 border-b border-white/[0.06] pb-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#9D4EDD] to-[#B57EFF] text-xs font-bold text-white">
                  MN
                </span>
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-medium text-white">Mohamed Ncib</p>
                  <p className="truncate text-xs text-white/35">{RECIPIENT}</p>
                </div>
                <span className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[0.65rem] font-mono font-medium uppercase tracking-wider text-white/25">
                  To
                </span>
              </div>

              <div className="border-b border-white/[0.06] py-3">
                <input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/20"
                  autoFocus
                />
              </div>

              <div className="pt-3">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  rows="7"
                  className="w-full resize-none bg-transparent text-sm leading-relaxed text-white outline-none placeholder:text-white/20"
                />
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[0.65rem] font-mono text-white/15">{message.length} chars</span>
                  {error && <span className="text-[0.65rem] text-red-400">{error}</span>}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] px-5 py-3.5">
              <button
                type="button"
                onClick={onClose}
                className="rounded-full px-4 py-2 text-xs font-medium text-white/40 transition hover:text-white/70"
              >
                Discard
              </button>
              <button
                type="button"
                disabled={!canSend || sending}
                onClick={handleSend}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all duration-300 ${
                  canSend && !sending
                    ? 'bg-[#2F0F40] text-white shadow-[0_0_20px_-8px_rgba(47,15,64,0.6)] hover:brightness-125 hover:-translate-y-0.5'
                    : 'border border-white/10 bg-white/[0.04] text-white/20 cursor-not-allowed'
                }`}
              >
                {sending ? (
                  <Loader className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <>
                    Send <Send className="h-3.5 w-3.5" />
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
