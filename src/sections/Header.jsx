import { ArrowRight, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils.js';

const navItems = [
  { label: 'About', to: '/#about' },
  { label: 'Journey', to: '/#work' },
  { label: 'Work', to: '/#showcase' },
  { label: 'Contact', to: '/#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const rafRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 18);
        rafRef.current = null;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Close on navigation, so tapping a link never leaves the panel hanging open.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-[900ms]',
        isScrolled ? 'px-4 pt-4 sm:px-6' : 'px-6 pt-6 sm:px-10',
      )}
    >
      <div
        className={cn(
          'mx-auto transition-all duration-[900ms]',
          isScrolled || menuOpen
            ? 'max-w-auto rounded-3xl bg-[#07070a]/70 px-6 py-2.5 backdrop-blur-2xl sm:px-12 sm:py-3 lg:rounded-full lg:bg-[#07070a]/20'
            : 'max-w-none',
        )}
      >
        <nav aria-label="Primary navigation" className="flex items-center justify-between gap-4">
          <Link to="/" className="group leading-none shrink-0" aria-label="Mohamed Ncib home">
            <span className="block text-sm font-semibold uppercase tracking-[0.34em] text-foreground">
              Mohamed Ncib
            </span>
            <span className="mt-0.5 block text-[0.55rem] font-normal uppercase tracking-[0.28em] text-muted-foreground">
              Product Strategist
            </span>
          </Link>

          {/* Desktop */}
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
                'group flex items-center justify-center rounded-full transition-all duration-[900ms]',
                isScrolled
                  ? 'h-8 w-8 bg-[#2F0F44] hover:scale-110 hover:shadow-lg hover:shadow-[#2F0F40]/60'
                  : 'gap-2 bg-[rgb(148_129_158_/_16%)] px-4 py-1.5 hover:scale-105 hover:bg-[rgb(148_129_158_/_28%)] hover:shadow-lg hover:shadow-[rgb(148_129_158_/_20%)] sm:px-5 sm:py-2',
              )}
            >
              <span
                className={cn(
                  'text-sm font-semibold text-white transition-all duration-[900ms]',
                  isScrolled ? 'hidden' : 'inline',
                )}
              >
                Get in touch
              </span>
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full">
                <ArrowRight
                  className="h-3 w-3 text-white transition-transform duration-[900ms] group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-xl transition hover:border-white/25 hover:text-white lg:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {/* Mobile panel */}
        <div
          id="mobile-nav"
          hidden={!menuOpen}
          className="overflow-hidden border-t border-white/[0.07] pt-4 lg:hidden"
        >
          <ul className="grid gap-1 pb-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block rounded-xl px-3 py-2.5 text-base font-medium text-white/65 transition hover:bg-white/[0.05] hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/#contact"
            className="mb-2 flex items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-[rgb(22_10_27)] px-6 py-3 text-sm font-semibold text-white/90 shadow-[0_0_30px_-8px_#7d5493] transition hover:brightness-125"
          >
            Get in touch
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </header>
  );
}
