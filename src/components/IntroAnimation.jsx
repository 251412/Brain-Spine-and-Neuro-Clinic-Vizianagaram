import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ChevronRight } from 'lucide-react';

export const IntroAnimation = ({ onFinish }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user already saw the intro in this browsing session
    const hasSeen = sessionStorage.getItem('clinic_intro_seen');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasSeen || prefersReducedMotion) {
      if (onFinish) onFinish();
      return;
    }

    setIsVisible(true);

    // Auto complete after 3.2s
    const timer = setTimeout(() => {
      handleDismiss();
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('clinic_intro_seen', 'true');
    setIsVisible(false);
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 450);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#060D1A] text-white overflow-hidden p-6 select-none"
        role="dialog"
        aria-label="Welcome to Brain Spine & Neuro Clinic"
        onClick={handleDismiss}
      >
        {/* Ambient Gold Radial Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-gradient-to-tr from-[#C99524]/25 via-[#F5E7BF]/12 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#C99524]/12 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#A87512]/15 rounded-full blur-2xl pointer-events-none" />

        {/* Top Bar: Emergency Quick Access & Skip Intro Button */}
        <div 
          className="w-full max-w-5xl flex items-center justify-between relative z-20 pt-2"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Emergency 24x7 Call Link - Emergency care is never blocked */}
          <a
            href="tel:9908981669"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-950/70 border border-rose-500/50 text-rose-300 text-xs font-semibold hover:bg-rose-900 transition-all shadow-md"
            title="Immediate Emergency Hotline"
          >
            <Phone className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
            <span>24×7 Emergency: 9908981669</span>
          </a>

          {/* Skip Intro Button */}
          <button
            type="button"
            onClick={handleDismiss}
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-[#E8D6A5]/50 text-[#F5E7BF] text-xs font-bold transition-all backdrop-blur-md active:scale-95 shadow-md"
            aria-label="Skip Introduction"
          >
            <span>Skip Intro</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Central Stage: The Ornate Golden Emblem Reveal */}
        <div className="relative z-10 my-auto flex flex-col items-center text-center max-w-xl w-full px-4">
          
          {/* The Ornate Golden Emblem with Ambient Halo */}
          <div className="relative mb-6 flex items-center justify-center">
            {/* Pulsing Concentric Golden Orbital Rings */}
            <motion.div
              className="absolute -inset-4 rounded-full border border-[#C99524]/30 pointer-events-none"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.95, 1.15, 0.95], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -inset-8 rounded-full border border-[#F5E7BF]/20 pointer-events-none"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.35, 0.1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />

            {/* Glowing Golden Medallion Focal Point */}
            <motion.div
              initial={{ opacity: 0, scale: 0.78, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center"
            >
              <picture>
                <source srcSet="/images/clinic-emblem-square.webp" type="image/webp" />
                <img
                  src="/images/clinic-emblem-square.png"
                  alt="Brain Spine & Neuro Clinic Official Emblem"
                  className="w-full h-full object-contain drop-shadow-[0_18px_38px_rgba(201,149,36,0.45)]"
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>

              {/* Subtle Ambient Shimmer Glint */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none rounded-full"
                initial={{ opacity: 0, rotate: -25 }}
                animate={{ opacity: [0, 0.6, 0], rotate: 25 }}
                transition={{ duration: 1.8, delay: 0.8, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          {/* Clinic Name Reveal Directly Below Logo */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-[#F5E7BF] to-amber-200 bg-clip-text text-transparent font-sans"
          >
            Brain, Spine & Neuro Clinic
          </motion.h1>

          {/* Vizianagaram City Title Directly Below */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-sm sm:text-base md:text-lg font-black uppercase tracking-[0.22em] text-[#C99524] mt-1.5"
          >
            Vizianagaram
          </motion.p>

          {/* Doctor Name & Senior Speciality */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-xs sm:text-sm font-semibold text-slate-300 mt-2"
          >
            Dr. Reddi Sankara Rao • Senior Consultant Neurosurgeon
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="text-[11px] sm:text-xs text-slate-400 mt-0.5"
          >
            MCh Neurosurgery (Narayana Hrudayalaya, Bengaluru)
          </motion.p>

          {/* Elegant Progress / Pulse Bar */}
          <div className="w-44 h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#C99524] via-[#F5E7BF] to-[#A87512] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </div>

        </div>

        {/* Minimalist Footnote */}
        <div className="relative z-10 pb-2 text-center">
          <p className="text-[11px] text-slate-400 tracking-wider uppercase font-semibold">
            Tap anywhere to enter website • Vizianagaram
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroAnimation;
