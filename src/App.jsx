import { AnimatePresence, motion } from 'motion/react';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react';
import Background from './components/Background.jsx';
import CursorFollower from './components/CursorFollower.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import Header from './sections/Header.jsx';
import Footer from './sections/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

/** Minimum time the loader stays up, so it never flashes on a fast connection. */
const MIN_LOADER_MS = 450;
/** Hard cap, so a stalled font or image can never trap the visitor behind the loader. */
const MAX_LOADER_MS = 2500;

function ScrollManager() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (hash) {
        const el = document.getElementById(hash.replace('#', ''));
        if (el) {
          lenis?.scrollTo(el, { offset: 0 });
        }
        return;
      }
      lenis?.scrollTo(0, { offset: 0 });
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [pathname, hash, lenis]);

  return null;
}

function PageFallback() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-[55vh] items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#9D4EDD]" style={{ animationDelay: '0s' }} />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#9D4EDD]" style={{ animationDelay: '0.1s' }} />
          <span className="h-2 w-2 animate-bounce rounded-full bg-[#9D4EDD]" style={{ animationDelay: '0.2s' }} />
        </div>
        <p className="text-xs font-mono uppercase tracking-widest text-white/20">Loading</p>
      </div>
    </motion.div>
  );
}

/**
 * Resolves once the page is genuinely usable — fonts settled and the window load
 * event fired — floored by MIN_LOADER_MS and capped by MAX_LOADER_MS.
 */
function useAppReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const startedAt = performance.now();

    const finish = () => {
      if (cancelled) return;
      const elapsed = performance.now() - startedAt;
      const remaining = Math.max(0, MIN_LOADER_MS - elapsed);
      window.setTimeout(() => {
        if (!cancelled) setReady(true);
      }, remaining);
    };

    const windowLoaded =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }));

    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    const cap = new Promise((resolve) => window.setTimeout(resolve, MAX_LOADER_MS));

    Promise.race([Promise.all([windowLoaded, fontsReady]), cap]).then(finish);

    return () => {
      cancelled = true;
    };
  }, []);

  return ready;
}

export default function App() {
  const ready = useAppReady();

  return (
    <>
      <AnimatePresence>{!ready && <LoadingScreen />}</AnimatePresence>

      <ReactLenis root>
        <div className="relative min-h-screen overflow-x-hidden text-foreground">
          <Background />
          <CursorFollower />
          <a
            href="#main-content"
            className="sr-only z-[100] rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <ScrollManager />
          <ScrollProgress />
          <Header />
          <main id="main-content" className="relative z-10">
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ReactLenis>
    </>
  );
}
