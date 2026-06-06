import { motion } from 'motion/react';
import { X } from 'lucide-react';

export default function PDFViewerModal({ pdfUrl, onClose }) {
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
        className="relative flex h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#07070a]/95 shadow-[0_0_80px_-20px_rgb(157_78_221_/_0.3)] backdrop-blur-2xl"
      >
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3.5">
          <p className="font-display text-sm font-medium tracking-[-0.02em] text-white/70">CV — Mohamed Ncib</p>
          <button
            type="button"
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/40 transition hover:border-white/20 hover:text-white/70"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>

        <iframe
          src={pdfUrl}
          className="h-full w-full bg-white"
          title="CV — Mohamed Ncib"
        />
      </motion.div>
    </motion.div>
  );
}
