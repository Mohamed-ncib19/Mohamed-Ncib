import { cn } from '../lib/utils';

export default function Card({ as: Component = 'div', className, ...props }) {
  return <Component className={cn('glass-panel rounded-[1.75rem]', className)} {...props} />;
}
