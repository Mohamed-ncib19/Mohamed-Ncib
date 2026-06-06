import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils.js';

const navItems = [
  { label: 'About', to: '/#about' },
  { label: 'Work', to: '/#work' },
  { label: 'Contact', to: '/#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={cn(
      'fixed inset-x-0 top-0 z-50 transition-all duration-900',
      isScrolled ? 'px-4 pt-4 sm:px-6' : 'px-6 pt-6 sm:px-10',
    )}>
      <div className={cn(
        'mx-auto transition-all duration-900',
        isScrolled
          ? 'max-w-auto rounded-full bg-[#07070a]/20 px-8 py-2.5 backdrop-blur-2xl sm:px-12 sm:py-3'
          : 'max-w-none',
      )}>
        <nav aria-label="Primary navigation" className="flex items-center justify-center lg:justify-between">
          <Link to="/" className="group leading-none shrink-0" aria-label="Mohamed Ncib home">
            <span className="block text-sm font-semibold uppercase tracking-[0.34em] text-foreground">Mohamed Ncib</span>
            <span className="mt-0.5 block text-[0.55rem] font-normal uppercase tracking-[0.28em] text-muted-foreground">Product designer</span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              className={cn(
                'group flex items-center justify-center rounded-full transition-all duration-900',
                isScrolled
                  ? 'h-8 w-8 bg-[#2F0F44] hover:scale-110 hover:shadow-lg hover:shadow-[#2F0F40]/60'
                  : 'gap-2 bg-[rgb(148_129_158_/_16%)] px-4 py-1.5 hover:scale-105 hover:bg-[rgb(148_129_158_/_28%)] hover:shadow-lg hover:shadow-[rgb(148_129_158_/_20%)] sm:px-5 sm:py-2',
              )}
            >
              <span className={cn(
                'text-sm font-semibold text-white transition-all duration-900',
                isScrolled ? 'hidden' : 'inline',
              )}>
                Get in touch
              </span>
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full">
                <ArrowRight className="h-3 w-3 text-white transition-transform duration-900 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
