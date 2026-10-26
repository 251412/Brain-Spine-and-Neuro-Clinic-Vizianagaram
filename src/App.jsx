import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { IntroAnimation } from './components/IntroAnimation';
import { PageTransition } from './components/PageTransition';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AlertCircle } from 'lucide-react';

// Direct imports for instant rendering and perfectly synchronized page transitions
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Specialities } from './pages/Specialities';
import { SpecialityDetail } from './pages/SpecialityDetail';
import { Doctors } from './pages/Doctors';
import { BookAppointment } from './pages/BookAppointment';
import { EmergencyCare } from './pages/EmergencyCare';
import { Gallery } from './pages/Gallery';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { ContactUs } from './pages/ContactUs';

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
      {/* Brain, Spine & Neuro Element Cinematic Page Transition (Only on route navigation) */}
      <PageTransition />

      {/* 3. Smooth Cinematic Page Container Transition */}
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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/specialities" element={<Specialities />} />
            <Route path="/specialities/:id" element={<SpecialityDetail />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointment" element={<BookAppointment />} />
            <Route path="/emergency" element={<EmergencyCare />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/locations" element={<ContactUs />} />
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
      <div className="flex flex-col min-h-screen w-full min-w-0 overflow-x-clip bg-[#FCFAF5]">
        <Navbar />
        <main className="flex-1 w-full min-w-0">
          <ErrorBoundary>
            <AppRoutes />
          </ErrorBoundary>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;

