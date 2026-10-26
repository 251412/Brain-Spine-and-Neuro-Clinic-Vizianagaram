import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { VerificationBadge } from './VerificationBadge';
import { useLanguage } from '../context/LanguageContext';

export const HeroAnimatedLogo = () => {
  const { language } = useLanguage();
  const containerRef = useRef(null);
  
  // Initialize state directly from media query
  const [isReducedMotion, setIsReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  // Listen for reduced motion preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Smooth mouse-tracking 3D tilt values for desktop
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-200, 200], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-6, 6]), springConfig);

  const handleMouseMove = (e) => {
    if (isReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Pre-calculated golden light particles with natural radial dispersion
  const particles = useMemo(() => [
    { id: 1, top: '22%', left: '16%', size: 4, dx: -8, dy: -28, delay: 0.2, duration: 4.8 },
    { id: 2, top: '15%', left: '72%', size: 5, dx: 12, dy: -34, delay: 1.1, duration: 5.2 },
    { id: 3, top: '35%', left: '88%', size: 3.5, dx: 10, dy: -24, delay: 2.3, duration: 4.5 },
    { id: 4, top: '65%', left: '86%', size: 4.5, dx: 8, dy: -30, delay: 0.7, duration: 5.0 },
    { id: 5, top: '78%', left: '74%', size: 3, dx: -6, dy: -26, delay: 1.8, duration: 4.2 },
    { id: 6, top: '85%', left: '46%', size: 5, dx: 4, dy: -32, delay: 2.9, duration: 5.5 },
    { id: 7, top: '76%', left: '22%', size: 3.5, dx: -10, dy: -28, delay: 0.4, duration: 4.6 },
    { id: 8, top: '55%', left: '12%', size: 4, dx: -12, dy: -30, delay: 1.5, duration: 5.1 },
    { id: 9, top: '30%', left: '26%', size: 3, dx: 6, dy: -22, delay: 2.7, duration: 4.4 },
    { id: 10, top: '18%', left: '48%', size: 4, dx: -5, dy: -35, delay: 3.2, duration: 4.9 },
    { id: 11, top: '68%', left: '32%', size: 3.5, dx: 8, dy: -26, delay: 0.9, duration: 4.7 },
  ], []);

  return (
    <div 
      className="w-full flex flex-col items-center justify-center relative select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 
        MAIN LOGO STAGE
        - Completely transparent background
        - Zero dark containers, colored cards, or solid boxes
        - Blends organically into the white / warm ivory hero
      */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[440px] lg:max-w-[480px] xl:max-w-[510px] aspect-square flex items-center justify-center"
        style={{ perspective: 1000 }}
      >
        
        {/* Layer 0: Ambient Golden Aura (Soft, transparent radial glow) */}
        <div 
          className="absolute inset-[-6%] rounded-full pointer-events-none animate-emblem-aura"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.20) 0%, rgba(245, 211, 107, 0.11) 32%, rgba(212, 175, 55, 0.03) 54%, transparent 72%)',
          }}
          aria-hidden="true"
        />

        {/* Layer 1A: Gentle Pulsing Light Ring 1 */}
        <div 
          className="absolute w-[72%] h-[72%] rounded-full border border-amber-400/30 animate-emblem-pulse-1 pointer-events-none"
          aria-hidden="true"
        />

        {/* Layer 1B: Gentle Pulsing Light Ring 2 (Staggered) */}
        <div 
          className="absolute w-[86%] h-[86%] rounded-full border border-amber-300/20 animate-emblem-pulse-2 pointer-events-none"
          aria-hidden="true"
        />

        {/* Layer 1C: Sacred Geometry Halo Rings (Rotating transparent SVGs) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          {/* Clockwise rotating dashed ring with compass nodes */}
          <svg 
            viewBox="0 0 500 500" 
            className="w-[96%] h-[96%] animate-emblem-rotate-cw text-amber-500/30 overflow-visible"
          >
            {/* Outer delicate orbital ring */}
            <circle 
              cx="250" 
              cy="250" 
              r="228" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1.2" 
              strokeDasharray="6 8" 
              opacity="0.4"
            />
            {/* 4 Sacred Cardinal Accent Diamonds (N, S, E, W) */}
            <polygon points="250,16 254,22 250,28 246,22" fill="#d4af37" opacity="0.65" />
            <polygon points="250,472 254,478 250,484 246,478" fill="#d4af37" opacity="0.65" />
            <polygon points="16,250 22,254 28,250 22,246" fill="#d4af37" opacity="0.65" />
            <polygon points="472,250 478,254 484,250 478,246" fill="#d4af37" opacity="0.65" />
          </svg>

          {/* Counter-clockwise rotating inner harmonic ring */}
          <svg 
            viewBox="0 0 500 500" 
            className="absolute w-[82%] h-[82%] animate-emblem-rotate-ccw text-amber-400/25 overflow-visible"
          >
            <circle 
              cx="250" 
              cy="250" 
              r="195" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.8" 
              strokeDasharray="3 6" 
              opacity="0.35"
            />
            {/* 4 Diagonal Cardinal Accent Pips */}
            <circle cx="112" cy="112" r="2.5" fill="#f59e0b" opacity="0.5" />
            <circle cx="388" cy="112" r="2.5" fill="#f59e0b" opacity="0.5" />
            <circle cx="112" cy="388" r="2.5" fill="#f59e0b" opacity="0.5" />
            <circle cx="388" cy="388" r="2.5" fill="#f59e0b" opacity="0.5" />
          </svg>
        </div>

        {/* Layer 2: Delicate Light Particles */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full"
              style={{
                top: p.top,
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: 'radial-gradient(circle, #fef08a 0%, #f59e0b 60%, transparent 100%)',
                boxShadow: '0 0 8px rgba(251, 191, 36, 0.7)',
                animation: `emblem-particle-float ${p.duration}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
                '--p-dx': `${p.dx}px`,
                '--p-dy': `${p.dy}px`,
              }}
            />
          ))}
        </div>

        {/* 
          Layer 3: The Golden Emblem (Main Focal Point)
          - Subtle 3D tilt tracking cursor on desktop
          - Smooth perpetual floating movement
          - Realistic drop-shadow giving cast-gold 3D elevation
          - Masked shimmer sweep confined purely to the emblem
        */}
        <motion.div 
          className="relative w-[88%] h-[88%] flex items-center justify-center"
          style={isReducedMotion ? {} : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        >
          <div className="relative w-full h-full flex items-center justify-center animate-emblem-float">
            
            {/* The Transparent Emblem Image */}
            <picture>
              <source srcSet="/images/clinic-emblem-square.webp" type="image/webp" />
              <img
                src="/images/clinic-emblem-square.png"
                alt="Brain Spine & Neuro Clinic Official Emblem"
                className="w-full h-full object-contain pointer-events-auto transition-transform duration-300"
                style={{
                  filter: 'drop-shadow(0 20px 32px rgba(184, 142, 31, 0.25)) drop-shadow(0 6px 14px rgba(0, 0, 0, 0.08))',
                  WebkitFilter: 'drop-shadow(0 20px 32px rgba(184, 142, 31, 0.25)) drop-shadow(0 6px 14px rgba(0, 0, 0, 0.08))',
                }}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="540"
                height="540"
              />
            </picture>

            {/* 
              Layer 4: Subtle Golden Luster Shimmer Sweep
              Masked strictly to the emblem shape so the light beam NEVER spills onto the background
            */}
            <div 
              className="absolute inset-0 pointer-events-none overflow-hidden"
              style={{
                maskImage: 'url(/images/clinic-emblem-square.webp)',
                WebkitMaskImage: 'url(/images/clinic-emblem-square.webp)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
              aria-hidden="true"
            >
              <div 
                className="w-full h-full animate-emblem-shimmer"
                style={{
                  background: 'linear-gradient(110deg, transparent 35%, rgba(255, 255, 255, 0.45) 50%, rgba(254, 240, 138, 0.3) 55%, transparent 68%)',
                }}
              />
            </div>

          </div>
        </motion.div>

      </div>

      {/* 
        Subtle Trust & Clinic Motto Pill
        - Anchors the floating emblem cleanly
        - Uses light translucent glass styling (no dark boxes)
      */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-2 sm:mt-3 flex flex-col items-center text-center space-y-1.5 z-10"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/90 border border-amber-300/80 shadow-xs backdrop-blur-sm text-slate-900 transition-all hover:bg-amber-100/80">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span className="text-xs font-black tracking-wide text-amber-950 uppercase">
            Care • Compassion • Cure
          </span>
          <VerificationBadge isVerified={true} variant="compact" />
        </div>
        <p className="text-[11px] sm:text-xs font-semibold text-slate-500">
          {language === 'te' 
            ? 'అత్యాధునిక న్యూరో & స్పైన్ చికిత్స • విజయనగరం' 
            : 'Advanced Brain, Spine & Neurological Care • Vizianagaram'}
        </p>
      </motion.div>
    </div>
  );
};
