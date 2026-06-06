import { AnimatePresence, motion } from 'motion/react';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Background from './components/Background.jsx';
import CursorFollower from './components/CursorFollower.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import Header from './sections/Header.jsx';
import Footer from './sections/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const CaseStudy = lazy(() => import('./pages/CaseStudy.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      if (hash) {
        document.getElementById(hash.replace('#', ''))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 80);

    return () => window.clearTimeout(timeout);
  }, [pathname, hash]);

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

export default function App() {
  const [ready, setReady] = useState(false);
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    const minTime = setTimeout(() => setReady(true), 1800);
    return () => clearTimeout(minTime);
  }, []);

  const handleLoadingFinish = () => {
    setLoadingDone(true);
  };

  const showLoading = !ready || !loadingDone;

  return (
    <>
      <AnimatePresence>
        {showLoading && <LoadingScreen onFinish={handleLoadingFinish} />}
      </AnimatePresence>

      <div style={{ visibility: showLoading ? 'hidden' : 'visible' }}>
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
                  <Route path="/work/:slug" element={<CaseStudy />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
        </ReactLenis>
      </div>
    </>
  );
}
