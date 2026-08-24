import { useEffect, useRef } from 'react';

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

/**
 * Gives a modal the behaviour people expect from one: Escape closes it, Tab
 * stays inside it, the page behind stops scrolling, and focus returns to
 * whatever opened it.
 *
 * Returns a ref to attach to the dialog element.
 */
export default function useModal(onClose) {
  const containerRef = useRef(null);
  const closeRef = useRef(onClose);

  // Keep the latest handler without re-running the effect (and so without
  // re-stealing focus) every time the parent re-renders.
  useEffect(() => {
    closeRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const container = containerRef.current;
    const previouslyFocused = document.activeElement;

    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    const focusables = () =>
      Array.from(container?.querySelectorAll(FOCUSABLE) || []).filter(
        (el) => el.offsetParent !== null || el === document.activeElement,
      );

    const first = focusables()[0];
    (first || container)?.focus?.({ preventScroll: true });

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        closeRef.current?.();
        return;
      }

      if (e.key !== 'Tab') return;

      const items = focusables();
      if (items.length === 0) {
        e.preventDefault();
        return;
      }

      const firstItem = items[0];
      const lastItem = items[items.length - 1];

      if (e.shiftKey && document.activeElement === firstItem) {
        e.preventDefault();
        lastItem.focus();
      } else if (!e.shiftKey && document.activeElement === lastItem) {
        e.preventDefault();
        firstItem.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown, true);

    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, []);

  return containerRef;
}
