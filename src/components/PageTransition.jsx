import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const PageTransition = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  // Track previous path so transition NEVER triggers on initial website open / first mount
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    // Avoid triggering on initial website opening (IntroAnimation handles first load)
    if (prevPathRef.current === location.pathname) {
      return;
    }

    prevPathRef.current = location.pathname;

    // Trigger transition overlay strictly on subsequent page-to-page navigation
    setIsTransitioning(true);

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="brain-spine-page-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99998] flex items-center justify-center bg-[#060D1A]/95 backdrop-blur-md pointer-events-none select-none overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label="Loading page transition"
        >
          {/* Top Golden Laser Progress Line on Route Transition */}
          <motion.div
            initial={{ scaleX: 0, transformOrigin: '0% 50%' }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-amber-600 via-yellow-300 to-amber-500 shadow-[0_0_20px_rgba(201,149,36,1),0_0_8px_rgba(255,255,255,0.9)]"
          />

          {/* Radial Ambient Gold Glow in background */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-[#C99524]/30 via-[#F5E7BF]/15 to-transparent blur-3xl pointer-events-none animate-pulse" />

          {/* Concentric Pulsing Golden Neural Waves */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0.8 }}
            animate={{ scale: [0.6, 1.4, 2.0], opacity: [0.8, 0.3, 0] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeOut' }}
            className="absolute w-44 h-44 rounded-full border-2 border-amber-400/40 pointer-events-none"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0.7 }}
            animate={{ scale: [0.8, 1.6, 2.3], opacity: [0.7, 0.25, 0] }}
            transition={{ duration: 1.1, delay: 0.25, repeat: Infinity, ease: 'easeOut' }}
            className="absolute w-44 h-44 rounded-full border border-[#C99524]/30 pointer-events-none"
          />

          {/* Central Brain, Spine & Neuro Element Container */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 space-y-4 max-w-md">
            
            {/* Golden Emblem with radiant aura - 100% transparent */}
            <motion.div
              initial={{ scale: 0.75, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 1.08, opacity: 0, y: -10 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center bg-transparent"
            >
              <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-2xl transform scale-125 pointer-events-none" />
              <img
                src="/images/clinic-emblem-isolated.png"
                alt="Brain Spine & Neuro Clinic"
                className="w-24 h-24 sm:w-28 sm:h-28 object-contain relative z-10 drop-shadow-[0_0_25px_rgba(201,149,36,0.95)] bg-transparent select-none"
              />
            </motion.div>

            {/* Glowing Golden Laser Synapse Line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ scaleX: 0.5, opacity: 0 }}
              transition={{ duration: 0.42, delay: 0.1, ease: 'easeOut' }}
              className="h-[2px] w-48 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_12px_rgba(201,149,36,0.9)]"
            />

            {/* Clinic Title & Neuro Elements */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35, delay: 0.12 }}
              className="space-y-1"
            >
              <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] uppercase text-amber-400 block drop-shadow-xs">
                Brain • Spine • Neuro
              </span>
              <h2 className="text-lg sm:text-xl font-black text-white tracking-tight uppercase">
                Brain, Spine & Neuro Clinic
              </h2>
              <p className="text-xs text-amber-200/80 font-medium tracking-wider">
                Vizianagaram • Care • Compassion • Cure
              </p>
            </motion.div>

            {/* Subtle animated loader pulse */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center gap-1.5 pt-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_#C99524]" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 shadow-[0_0_6px_#F5E7BF]" />
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_6px_#C99524]" />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
