import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * PageHero - Unified Royal Gold & Obsidian Dark Medical Hero Banner
 * 
 * Colors precisely match the official clinic emblem & logo:
 * - Obsidian Midnight Base: #060D1A / #0E1726
 * - Royal Antique Gold: #D4AF37 / #FFB800 / #C59822
 * - Crisp White Typography: #FFFFFF
 * - Warm Supporting Text: #CBD5E1 (Slate-300)
 */
export const PageHero = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  description,
  breadcrumbs = [],
  bgImage,
  align = 'center',
  children,
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <section 
      className={`relative w-full overflow-hidden bg-[#060D1A] text-white py-14 sm:py-20 lg:py-24 border-b border-amber-500/30 ${className}`}
      style={{
        background: 'linear-gradient(180deg, #060D1A 0%, #0E1726 50%, #060D1A 100%)'
      }}
    >
      {/* 1. Ambient Golden Radiance (Derived from Clinic Emblem) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 75% 60% at 50% 30%, rgba(212, 175, 55, 0.16) 0%, rgba(6, 13, 26, 0) 75%)'
        }}
      />
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 pointer-events-none rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
      />
      <div 
        className="absolute -bottom-10 left-10 w-96 h-96 pointer-events-none rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #C59822 0%, transparent 70%)' }}
      />

      {/* 2. Optional Low-Contrast Dark Medical Backdrop (Free of baked-in text) */}
      {bgImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-luminosity pointer-events-none"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
      )}

      {/* 3. Subtle Gold Neurological Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212, 175, 55, 0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.10) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* 4. Abstract Neural Network & Synapse Vectors in Emblem Gold */}
      <svg 
        className="absolute -left-12 top-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 text-amber-500/20 pointer-events-none hidden md:block" 
        viewBox="0 0 400 400" 
        fill="none"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
        <circle cx="200" cy="200" r="90" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="40" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M60 200 L110 150 L200 200 L290 150 L340 200" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
        <path d="M110 150 L200 90 L290 150" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M110 250 L200 310 L290 250" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="110" cy="150" r="5" fill="#C59822" />
        <circle cx="290" cy="150" r="5" fill="#C59822" />
        <circle cx="200" cy="90" r="4" fill="#FFB800" fillOpacity="0.8" />
        <circle cx="200" cy="200" r="6" fill="#D4AF37" />
        <circle cx="200" cy="310" r="4" fill="#FFB800" fillOpacity="0.8" />
      </svg>

      <svg 
        className="absolute -right-12 top-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 text-amber-500/20 pointer-events-none hidden md:block" 
        viewBox="0 0 400 400" 
        fill="none"
        aria-hidden="true"
      >
        <path d="M50 80 Q200 140 350 80" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
        <path d="M50 200 Q200 260 350 200" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
        <path d="M50 320 Q200 380 350 320" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.4" />
        <circle cx="120" cy="115" r="4" fill="#FFB800" fillOpacity="0.8" />
        <circle cx="280" cy="115" r="4" fill="#C59822" />
        <circle cx="200" cy="235" r="5" fill="#D4AF37" />
        <circle cx="140" cy="350" r="4" fill="#C59822" />
        <circle cx="260" cy="350" r="4" fill="#FFB800" fillOpacity="0.8" />
      </svg>

      {/* 5. Inner Content Container (Full-width responsive padding, centered) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        
        {/* Breadcrumb Navigation */}
        {breadcrumbs.length > 0 && (
          <nav 
            aria-label="Breadcrumb"
            className={`flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs sm:text-sm text-amber-200/80 mb-6 ${
              isCenter ? 'justify-center' : 'justify-start'
            }`}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors py-1 px-2 rounded-md hover:bg-white/5"
            >
              <HomeIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>Home</span>
            </Link>
            
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <React.Fragment key={idx}>
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/60 shrink-0" />
                  {crumb.to && !isLast ? (
                    <Link 
                      to={crumb.to} 
                      className="hover:text-white transition-colors py-1 px-2 rounded-md hover:bg-white/5"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="font-semibold text-amber-300 py-1 px-2">
                      {crumb.label}
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        )}

        {/* Content Box */}
        <div className={`space-y-4 sm:space-y-5 ${isCenter ? 'text-center mx-auto max-w-4xl' : 'text-left max-w-3xl'}`}>
          
          {/* Optional Badge with Glowing Ring */}
          {badge && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-300 text-xs sm:text-sm font-bold border border-amber-400/40 backdrop-blur-md shadow-[0_0_15px_rgba(201,149,36,0.3)] ${
                isCenter ? 'mx-auto' : ''
              }`}
            >
              {badgeIcon ? (
                badgeIcon
              ) : (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                </span>
              )}
              <span>{badge}</span>
            </motion.div>
          )}

          {/* Page Heading */}
          {title && (
            <motion.h1 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-md leading-[1.15]"
            >
              {title}
            </motion.h1>
          )}

          {/* Gold Subtitle */}
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#FFB800] tracking-wide drop-shadow-xs"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Description */}
          {description && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal ${
                isCenter ? 'max-w-3xl mx-auto' : 'max-w-2xl'
              }`}
            >
              {description}
            </motion.p>
          )}

          {/* Optional Extra Elements (Buttons, search, etc.) */}
          {children && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2"
            >
              {children}
            </motion.div>
          )}

        </div>
      </div>

      {/* 6. Radiant Golden Hairline Divider with glowing aura */}
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFB800] to-transparent shadow-[0_0_14px_rgba(255,184,0,0.85)] pointer-events-none" />
      
      {/* Subtle Bottom Medical Wave */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden leading-none pointer-events-none opacity-15">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-4 text-slate-50"
          fill="currentColor"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};
