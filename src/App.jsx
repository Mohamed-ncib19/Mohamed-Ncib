import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import Background from './components/Background.jsx';
import Header from './sections/Header.jsx';
import Footer from './sections/Footer.jsx';
import Home from './pages/Home.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';

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
    <div className="container flex min-h-[55vh] items-center justify-center py-24 text-muted-foreground">
      Loading portfolio section...
    </div>
  );
}

export default function App() {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen overflow-x-hidden text-foreground">
      <Background />
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
  );
}
