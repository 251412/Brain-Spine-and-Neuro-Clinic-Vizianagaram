import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { MobileStickyActionBar } from './components/MobileStickyActionBar';
import { IntroAnimation } from './components/IntroAnimation';
import { PageTransition } from './components/PageTransition';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AlertCircle, Loader2 } from 'lucide-react';

// Always-eager: core shell pages (small, needed immediately)
import { Home } from './pages/Home';
import { seoServices } from './data/seoServicesData';

// Lazy-loaded: heavy or infrequently visited pages
const AboutUs            = lazy(() => import('./pages/AboutUs').then(m => ({ default: m.AboutUs })));
const Specialities       = lazy(() => import('./pages/Specialities').then(m => ({ default: m.Specialities })));
const SpecialityDetail   = lazy(() => import('./pages/SpecialityDetail').then(m => ({ default: m.SpecialityDetail })));
const Doctors            = lazy(() => import('./pages/Doctors').then(m => ({ default: m.Doctors })));
const DoctorProfile      = lazy(() => import('./pages/DoctorProfile').then(m => ({ default: m.DoctorProfile })));
const LocationVizianagaram = lazy(() => import('./pages/LocationVizianagaram').then(m => ({ default: m.LocationVizianagaram })));
const LocationBobbili    = lazy(() => import('./pages/LocationBobbili').then(m => ({ default: m.LocationBobbili })));
const ServicePage        = lazy(() => import('./pages/ServicePage').then(m => ({ default: m.ServicePage })));
const BookAppointment    = lazy(() => import('./pages/BookAppointment').then(m => ({ default: m.BookAppointment })));
const EmergencyCare      = lazy(() => import('./pages/EmergencyCare').then(m => ({ default: m.EmergencyCare })));
const Gallery            = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Blog               = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const BlogPost           = lazy(() => import('./pages/BlogPost').then(m => ({ default: m.BlogPost })));
const ContactUs          = lazy(() => import('./pages/ContactUs').then(m => ({ default: m.ContactUs })));
const AdminPortal        = lazy(() => import('./pages/AdminPortal').then(m => ({ default: m.AdminPortal })));

// Shared page-level loading fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <Loader2 className="w-8 h-8 text-[#C99524] animate-spin" />
  </div>
);

const NotFound = () => (
  <div className="min-h-[70vh] flex items-center justify-center bg-[#FCFAF5] p-6 text-center">
    <div className="bg-white p-8 rounded-3xl border border-[#E8D6A5] shadow-sm max-w-md space-y-4">
      <AlertCircle className="w-12 h-12 text-[#C99524] mx-auto" />
      <h2 className="text-2xl font-bold text-[#242424]">Page Not Found</h2>
      <p className="text-[#686868] text-sm">
        The requested medical page could not be found or has been relocated.
      </p>
      <Link
        to="/"
        className="inline-block px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-bold text-sm hover:from-amber-400 hover:to-amber-500 shadow-sm shadow-amber-500/20 transition-all"
      >
        Return to Homepage
      </Link>
    </div>
  </div>
);


function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <PageTransition />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 28, scale: 0.988 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.988 }}
          transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
          onAnimationStart={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          }}
          className="w-full min-w-0"
        >
          <Routes location={location}>
            {/* Homepage */}
            <Route path="/" element={<Home />} />

            {/* Core General Pages */}
            <Route path="/about" element={<Suspense fallback={<PageLoader />}><AboutUs /></Suspense>} />
            <Route path="/about/" element={<Suspense fallback={<PageLoader />}><AboutUs /></Suspense>} />
            <Route path="/specialities" element={<Suspense fallback={<PageLoader />}><Specialities /></Suspense>} />
            <Route path="/specialities/" element={<Suspense fallback={<PageLoader />}><Specialities /></Suspense>} />
            <Route path="/specialities/:id" element={<Suspense fallback={<PageLoader />}><SpecialityDetail /></Suspense>} />
            <Route path="/doctors" element={<Suspense fallback={<PageLoader />}><Doctors /></Suspense>} />
            <Route path="/doctors/" element={<Suspense fallback={<PageLoader />}><Doctors /></Suspense>} />

            {/* Doctor Profile Page */}
            <Route path="/dr-reddi-sankara-rao" element={<Suspense fallback={<PageLoader />}><DoctorProfile /></Suspense>} />
            <Route path="/dr-reddi-sankara-rao/" element={<Suspense fallback={<PageLoader />}><DoctorProfile /></Suspense>} />

            {/* Location Pages */}
            <Route path="/neurosurgeon-in-vizianagaram" element={<Suspense fallback={<PageLoader />}><LocationVizianagaram /></Suspense>} />
            <Route path="/neurosurgeon-in-vizianagaram/" element={<Suspense fallback={<PageLoader />}><LocationVizianagaram /></Suspense>} />
            <Route path="/neurosurgeon-in-bobbili" element={<Suspense fallback={<PageLoader />}><LocationBobbili /></Suspense>} />
            <Route path="/neurosurgeon-in-bobbili/" element={<Suspense fallback={<PageLoader />}><LocationBobbili /></Suspense>} />

            {/* Explicit 18 Service / Condition Pages */}
            {seoServices.map((svc) => (
              <React.Fragment key={svc.slug}>
                <Route path={`/${svc.slug}`} element={<Suspense fallback={<PageLoader />}><ServicePage /></Suspense>} />
                <Route path={`/${svc.slug}/`} element={<Suspense fallback={<PageLoader />}><ServicePage /></Suspense>} />
              </React.Fragment>
            ))}

            {/* Clinical & Appointment Actions */}
            <Route path="/appointment" element={<Suspense fallback={<PageLoader />}><BookAppointment /></Suspense>} />
            <Route path="/appointment/" element={<Suspense fallback={<PageLoader />}><BookAppointment /></Suspense>} />
            <Route path="/emergency" element={<Suspense fallback={<PageLoader />}><EmergencyCare /></Suspense>} />
            <Route path="/emergency/" element={<Suspense fallback={<PageLoader />}><EmergencyCare /></Suspense>} />
            <Route path="/gallery" element={<Suspense fallback={<PageLoader />}><Gallery /></Suspense>} />
            <Route path="/gallery/" element={<Suspense fallback={<PageLoader />}><Gallery /></Suspense>} />
            <Route path="/blog" element={<Suspense fallback={<PageLoader />}><Blog /></Suspense>} />
            <Route path="/blog/" element={<Suspense fallback={<PageLoader />}><Blog /></Suspense>} />
            <Route path="/blog/:slug" element={<Suspense fallback={<PageLoader />}><BlogPost /></Suspense>} />
            <Route path="/contact" element={<Suspense fallback={<PageLoader />}><ContactUs /></Suspense>} />
            <Route path="/contact/" element={<Suspense fallback={<PageLoader />}><ContactUs /></Suspense>} />
            <Route path="/locations" element={<Suspense fallback={<PageLoader />}><ContactUs /></Suspense>} />
            <Route path="/locations/" element={<Suspense fallback={<PageLoader />}><ContactUs /></Suspense>} />

            {/* Admin Management */}
            <Route path="/admin" element={<Suspense fallback={<PageLoader />}><AdminPortal /></Suspense>} />
            <Route path="/admin/" element={<Suspense fallback={<PageLoader />}><AdminPortal /></Suspense>} />

            {/* Dynamic slug fallback for any additional treatments */}
            <Route path="/:slug" element={<Suspense fallback={<PageLoader />}><ServicePage /></Suspense>} />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export function App() {
  return (
    <Router>
      <IntroAnimation />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full min-w-0 overflow-x-clip bg-[#FCFAF5] pb-16 lg:pb-0">
        <Navbar />
        <main className="flex-1 w-full min-w-0">
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </main>
        <Footer />
        <WhatsAppWidget />
        <MobileStickyActionBar />
      </div>
    </Router>
  );
}

export default App;
