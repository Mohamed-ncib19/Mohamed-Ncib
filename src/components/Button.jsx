import { cn } from '../lib/utils';

const variants = {
  primary:
    'bg-gradient-to-r from-[#6B2FB8] via-[#9D4EDD] to-[#B57EFF] text-white shadow-glow hover:-translate-y-0.5 hover:brightness-110',
  secondary:
    'border border-white/15 bg-white/[0.06] text-foreground shadow-[inset_0_1px_0_rgb(255_255_255_/_0.12)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-secondary/50 hover:bg-white/[0.09]',
  ghost: 'text-foreground hover:bg-white/[0.07]',
};

const sizes = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-5 text-sm',
  lg: 'h-14 px-7 text-base',
};

export default function Button({ as: Component = 'button', variant = 'primary', size = 'md', className, ...props }) {
  const buttonProps = Component === 'button' ? { type: 'button', ...props } : props;

  return (
    <Component
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition duration-300 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...buttonProps}
    />
  );
}
