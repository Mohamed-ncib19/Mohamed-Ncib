import { motion } from 'motion/react';
import { Download, ExternalLink, X } from 'lucide-react';

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
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#9D4EDD] to-[#B57EFF] text-xs font-bold text-white shadow-[0_0_12px_-4px_rgb(157_78_221_/_0.5)]">
            CV
          </div>

          <div className="flex-1 min-w-0">
            <p className="truncate text-sm font-medium text-white/80">Mohamed_Ncib_Resume_English.pdf</p>
            <p className="text-[0.65rem] font-mono text-white/25">PDF document</p>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={pdfUrl}
              download="Mohamed_Ncib_Resume_English.pdf"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/40 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white/70"
              title="Download"
            >
              <Download className="h-3.5 w-3.5" />
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/40 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white/70"
              title="Open in new tab"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/40 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white/70"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <div className="flex-1 overflow-hidden bg-[#1a1a24]">
          <iframe
            src={pdfUrl}
            className="h-full w-full"
            title="CV — Mohamed Ncib"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
