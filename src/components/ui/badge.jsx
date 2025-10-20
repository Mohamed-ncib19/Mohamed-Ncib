import React from 'react';
import { cn } from '../../lib/utils';

const badgeVariants = {
  default: 'border-transparent bg-purple-600 text-white hover:bg-purple-700',
  secondary: 'border-transparent bg-gray-700 text-gray-100 hover:bg-gray-600',
  outline: 'text-gray-300 border-gray-600 hover:bg-gray-800',
  success: 'border-transparent bg-green-600 text-white hover:bg-green-700',
};

const Badge = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2',
        badgeVariants[variant],
        className
      )}
      {...props}
    />
  );
});

Badge.displayName = 'Badge';

export { Badge };
