import React, { useState, useRef } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Users, 
  HeartHandshake, 
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GOOGLE_REVIEWS_URL, initialGoogleReviews } from '../data/defaultData';
import { ScrollReveal } from './ScrollReveal';

// Authentic Google Multicolor "G" Icon
export const GoogleGIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

// Authentic Google Wordmark with Google Brand Colors
export const GoogleWordmark = ({ className = "text-xl" }) => (
  <span className={`inline-flex items-center font-bold tracking-tight ${className}`} style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
    <span className="text-[#4285F4]">G</span>
    <span className="text-[#EA4335]">o</span>
    <span className="text-[#FBBC05]">o</span>
    <span className="text-[#4285F4]">g</span>
    <span className="text-[#34A853]">l</span>
    <span className="text-[#EA4335]">e</span>
  </span>
);

export const GoogleReviewsSection = ({ className = '', id = 'reviews' }) => {
  const { language } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const [activePageIndex, setActivePageIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const reviews = initialGoogleReviews;

  // Manual nudge navigation for circular arrow controls
  const handleManualScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setActivePageIndex((prev) => 
        direction === 'left' 
          ? Math.max(0, prev - 1) 
          : (prev + 1) % reviews.length
      );
    }
  };

  return (
    <section 
      id={id}
      className={`py-16 sm:py-24 bg-gradient-to-b from-amber-50/40 via-slate-50/60 to-white border-t border-b border-amber-200/40 relative overflow-hidden ${className}`}
    >
      {/* Background Decorative Neural Watermark Silhouette (Matching Reference Image) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 lg:w-[480px] h-[480px] opacity-[0.04] pointer-events-none select-none z-0">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full text-amber-800">
          <path d="M100 20 C60 20 30 50 30 90 C30 115 45 135 60 148 C65 152 70 165 72 178 C73 185 80 190 90 190 L110 190 C120 190 127 185 128 178 C130 165 135 152 140 148 C155 135 170 115 170 90 C170 50 140 20 100 20 Z" />
        </svg>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10 space-y-10 sm:space-y-12">
        
        {/* ========================================================= */}
        {/* SECTION HEADER + TRUST INDICATORS + GOOGLE RATING CARD     */}
        {/* ========================================================= */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left/Center: Badges & Headings */}
            <div className="text-center lg:text-left space-y-3.5 max-w-2xl">
              {/* Google Reviews Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-200/80 shadow-xs">
                <GoogleGIcon className="w-4 h-4" />
                <span className="text-xs font-bold text-slate-800 tracking-wide">
                  Google Reviews
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                <span>{language === 'te' ? 'మా రోగుల ' : 'What Our '}</span>
                <span className="text-amber-600">{language === 'te' ? 'అనుభవాలు' : 'Patients'}</span>
                <span>{language === 'te' ? ' (Reviews)' : ' Say'}</span>
              </h2>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                {language === 'te'
                  ? '"నిజమైన అనుభవాలు. సరైన సంరక్షణ. మా సమాజం విశ్వసించిన వైద్యం."'
                  : '“Real experiences. Real care. Trusted by our community.”'}
              </p>

              {/* Trust Indicator Row (Matching Reference Screenshot) */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-slate-700">
                <div className="flex items-center gap-1.5 font-bold">
                  <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <span>{language === 'te' ? 'వందలాది రోగుల విశ్వాసం' : 'Trusted by Hundreds'}</span>
                </div>

                <div className="flex items-center gap-1.5 font-bold">
                  <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  </div>
                  <span>{language === 'te' ? 'ఉన్నత రోగి సంతృప్తి' : 'High Satisfaction'}</span>
                </div>

                <div className="flex items-center gap-1.5 font-bold">
                  <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span>{language === 'te' ? 'అసలైన గూగుల్ రివ్యూలు' : 'Genuine Google Reviews'}</span>
                </div>

                <div className="flex items-center gap-1.5 font-bold">
                  <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                    <HeartHandshake className="w-3.5 h-3.5" />
                  </div>
                  <span>{language === 'te' ? 'విశ్వసనీయ వైద్య సంరక్షణ' : 'Trusted Clinical Care'}</span>
                </div>
              </div>
            </div>

            {/* Right: Google Rating Card (As in Reference Screenshot) */}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center px-6 py-4 rounded-3xl bg-white border border-amber-200/80 shadow-md shadow-amber-500/5 hover:shadow-xl hover:border-amber-400 transition-all text-center group shrink-0"
              title="Open Dr. Reddi Sankara Rao Google Reviews"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <GoogleWordmark className="text-2xl" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">5.0</span>
                <div className="flex items-center text-amber-400 text-base">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-slate-500 font-bold mt-1 group-hover:text-amber-700 transition-colors inline-flex items-center gap-1">
                <span>{language === 'te' ? '544 రోగుల సమీక్షలు' : '544 Patient Reviews'}</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>

          </div>
        </ScrollReveal>

        {/* ========================================================= */}
        {/* CONTINUOUS HORIZONTAL MARQUEE CAROUSEL (LEFT TO RIGHT)    */}
        {/* ========================================================= */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="relative group/marquee">
            
            {/* Subtle Left & Right Soft Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-20 pointer-events-none" />

            {/* Manual Previous Button (Circular) */}
            <button
              type="button"
              onClick={() => handleManualScroll('left')}
              aria-label="Previous reviews"
              className="absolute -left-3 sm:left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 border border-slate-200 shadow-lg text-slate-700 hover:text-amber-700 hover:border-amber-400 hover:bg-white flex items-center justify-center z-30 transition-all active:scale-90"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Manual Next Button (Circular) */}
            <button
              type="button"
              onClick={() => handleManualScroll('right')}
              aria-label="Next reviews"
              className="absolute -right-3 sm:right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 border border-slate-200 shadow-lg text-slate-700 hover:text-amber-700 hover:border-amber-400 hover:bg-white flex items-center justify-center z-30 transition-all active:scale-90"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Marquee Viewport & Animated Track */}
            <div 
              ref={scrollContainerRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
              tabIndex={0}
              aria-label="Patient reviews marquee. Moving continuously from left to right. Hover or focus to pause."
              className="overflow-x-hidden overflow-y-visible py-4 focus:outline-none"
            >
              {/* Animated Marquee Track: Moving LEFT TO RIGHT */}
              <div 
                className={`flex items-stretch gap-5 sm:gap-6 animate-marquee-ltr ${
                  isPaused ? 'animate-marquee-ltr-paused' : ''
                }`}
              >
                {/* Sequence 1: Full array of reviews */}
                {reviews.map((rev) => (
                  <ReviewCard key={`seq1-${rev.id}`} review={rev} language={language} />
                ))}

                {/* Sequence 2: Duplicate sequence for seamless 100% infinite loop */}
                {reviews.map((rev) => (
                  <ReviewCard key={`seq2-${rev.id}`} review={rev} language={language} />
                ))}
              </div>
            </div>

            {/* Subtle Dot Pagination Indicators */}
            <div className="pt-2 flex items-center justify-center gap-1.5">
              {reviews.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activePageIndex === idx 
                      ? 'w-6 bg-amber-500' 
                      : 'w-2 bg-amber-200'
                  }`}
                />
              ))}
            </div>

          </div>
        </ScrollReveal>

        {/* ========================================================= */}
        {/* BOTTOM CTA: VIEW ALL GOOGLE REVIEWS BUTTON                */}
        {/* ========================================================= */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="text-center pt-2">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 sm:px-9 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black border border-amber-300/80 shadow-[0_0_20px_rgba(201,149,36,0.45)] hover:from-amber-400 hover:to-amber-500 text-sm sm:text-base transition-all transform active:scale-98 group"
            >
              <GoogleGIcon className="w-5 h-5 shrink-0" />
              <span>
                {language === 'te' 
                  ? 'అన్ని గూగుల్ సమీక్షలను చూడండి (View All Google Reviews) →' 
                  : 'View All Google Reviews →'}
              </span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

// Subcomponent: Individual Review Card (Matching Reference Screenshot Design)
const ReviewCard = ({ review, language }) => {
  return (
    <div className="w-[300px] sm:w-[350px] md:w-[370px] shrink-0 bg-white rounded-3xl p-5 sm:p-6 border border-amber-200/70 shadow-md shadow-amber-500/10 hover:shadow-2xl hover:border-amber-400 hover:shadow-amber-500/25 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left select-none">
      
      <div className="space-y-3">
        {/* Card Header: Avatar + Reviewer Name + Google "G" Icon */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Avatar Initial Circle */}
            <div className={`w-10 h-10 rounded-full ${review.avatarBg} text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs`}>
              {review.initial}
            </div>
            
            <div className="leading-tight">
              <h4 className="font-extrabold text-sm sm:text-base text-slate-900 line-clamp-1">
                {language === 'te' ? review.authorTe : review.author}
              </h4>
              <p className="text-[11px] text-slate-500 font-medium">
                {review.reviewCount} {language === 'te' ? 'సమీక్షలు' : 'reviews'}
              </p>
            </div>
          </div>

          {/* Top-Right Google Logo */}
          <div className="shrink-0 p-1">
            <GoogleGIcon className="w-5 h-5" />
          </div>
        </div>

        {/* Rating Stars + Relative Timestamp */}
        <div className="flex items-center gap-2 pt-0.5">
          <div className="flex items-center text-amber-400">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-xs text-slate-400 font-medium">
            {language === 'te' ? review.relativeTimeTe : review.relativeTime}
          </span>
        </div>

        {/* Review Text Body */}
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed line-clamp-4 font-normal">
          "{language === 'te' ? review.textTe : review.text}"
        </p>
      </div>

      {/* Card Footer: Clinical Category Tag Badge */}
      <div className="pt-4 border-t border-slate-100 mt-2">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${review.tagColor}`}>
          {language === 'te' ? review.tagTe : review.tag}
        </span>
      </div>

    </div>
  );
};

export default GoogleReviewsSection;
