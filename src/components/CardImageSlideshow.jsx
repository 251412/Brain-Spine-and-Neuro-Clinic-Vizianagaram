import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const CardImageSlideshow = ({
  images = [],
  alt = 'Clinic visual',
  onOpenLightbox,
  cardIndex = 0,
  intervalMs = 4200,
  className = 'h-60 sm:h-64'
}) => {
  const slideImages = images.length > 0 ? images : ['/images/facility-ot.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Stagger initial rotation based on cardIndex so cards don't rotate simultaneously
  // Auto-slide continues seamlessly
  useEffect(() => {
    if (slideImages.length <= 1) return;

    const initialDelay = (cardIndex % 4) * 800;
    let timer;

    const startTimer = setTimeout(() => {
      timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slideImages.length);
      }, intervalMs);
    }, initialDelay);

    return () => {
      clearTimeout(startTimer);
      if (timer) clearInterval(timer);
    };
  }, [slideImages.length, cardIndex, intervalMs]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : slideImages.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % slideImages.length);
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-slate-950 group select-none ${className}`}
      onClick={() => onOpenLightbox && onOpenLightbox(currentIndex)}
    >
      {/* Smooth Cross-fading Slides */}
      <AnimatePresence mode="wait">
        <motion.img
          key={slideImages[currentIndex]}
          src={slideImages[currentIndex]}
          alt={`${alt} - Slide ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </AnimatePresence>

      {/* Subtle Dark Vignette & Hover Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none group-hover:from-slate-950/80 transition-all" />

      {/* Center Expand / View Icon on Hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="p-3 rounded-full bg-white/95 text-slate-950 shadow-xl shadow-black/40 border border-amber-300/80 transform group-hover:scale-110 transition-transform">
          <Eye className="w-5 h-5 text-amber-600" />
        </span>
      </div>

      {/* Manual Prev/Next Arrow Controls (Visible on mobile, appear on hover on desktop) */}
      {slideImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-black/95 text-white border border-amber-400/60 flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all z-20 hover:scale-110 active:scale-95 shadow-[0_0_12px_rgba(201,149,36,0.5)]"
            aria-label="Previous image in card slideshow"
          >
            <ChevronLeft className="w-4 h-4 text-amber-300" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-black/95 text-white border border-amber-400/60 flex items-center justify-center opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-all z-20 hover:scale-110 active:scale-95 shadow-[0_0_12px_rgba(201,149,36,0.5)]"
            aria-label="Next image in card slideshow"
          >
            <ChevronRight className="w-4 h-4 text-amber-300" />
          </button>
        </>
      )}

      {/* Slide Pagination Indicator Dots */}
      {slideImages.length > 1 && (
        <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 z-20 pointer-events-none">
          {slideImages.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(dotIdx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 pointer-events-auto ${
                currentIndex === dotIdx
                  ? 'w-5 bg-gradient-to-r from-amber-400 to-yellow-300 shadow-[0_0_10px_rgba(201,149,36,1)]'
                  : 'w-1.5 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Jump to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardImageSlideshow;
