import { cn } from '../lib/utils';

const variants = {
  default:
    'border-white/[0.08] bg-white/[0.04] text-muted-foreground shadow-[inset_0_1px_0_rgb(255_255_255_/_0.06)]',
  accent:
    'border-secondary/20 bg-secondary/[0.06] text-secondary shadow-[0_0_30px_-18px_rgb(181_126_255_/_0.9)]',
  muted:
    'border-white/[0.06] bg-white/[0.025] text-muted-foreground',
  vivid:
    'border-secondary/25 bg-gradient-to-br from-secondary/[0.08] to-secondary/[0.03] text-secondary shadow-[0_0_30px_-18px_rgb(181_126_255_/_1)]',
};

export default function Chip({ children, variant = 'default', dot, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]',
        variants[variant],
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden="true" />}
      {children}
    </span>
  );
}
