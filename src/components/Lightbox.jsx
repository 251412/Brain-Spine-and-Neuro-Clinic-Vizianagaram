import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Lightbox = ({ 
  isOpen, 
  images = [], 
  currentIndex = 0, 
  onClose, 
  onPrev, 
  onNext 
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex];
  const itemImages = (currentItem?.images && currentItem.images.length > 0)
    ? currentItem.images
    : (currentItem?.id === 'gal-1'
      ? ['/images/clinic-exterior-pks.jpg', '/images/clinic-interior-reception.jpg']
      : currentItem?.id === 'gal-2'
        ? ['/images/equipment-ot-1.jpg', '/images/equipment-ot-2.jpg', '/images/equipment-ot-3.jpg']
        : [currentItem?.image]);

  const [subIdx, setSubIdx] = React.useState(0);

  React.useEffect(() => {
    setSubIdx(0);
  }, [currentIndex]);

  const activeImage = itemImages[subIdx] || currentItem?.image;
  const displayTitle = currentItem?.id === 'gal-1'
    ? (language === 'te' ? 'క్లినిక్ ఇమేజ్' : 'Clinic image')
    : currentItem?.id === 'gal-2'
      ? (language === 'te' ? 'ఎక్విప్‌మెంట్ ఇమేజెస్' : 'Equipment images')
      : (language === 'te' ? currentItem?.titleTe : currentItem?.titleEn);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-4 z-50 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={onNext}
          className="absolute right-4 z-50 p-3 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image & Caption Container */}
      <div className="max-w-5xl max-h-[90vh] flex flex-col items-center justify-center">
        <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
          <img
            src={activeImage}
            alt={displayTitle}
            className="max-h-[70vh] w-auto object-contain mx-auto transition-all duration-300"
          />

          {/* Sub-image Switcher for cards with multiple images */}
          {itemImages.length > 1 && (
            <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2 z-10">
              {itemImages.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setSubIdx(dotIdx)}
                  className={`h-2 rounded-full transition-all ${
                    subIdx === dotIdx
                      ? 'w-6 bg-amber-400 shadow-[0_0_8px_#C99524]'
                      : 'w-2 bg-white/60 hover:bg-white'
                  }`}
                  aria-label={`Switch to image ${dotIdx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <h4 className="text-white font-bold text-base sm:text-lg">
            {displayTitle}
          </h4>
          <p className="text-slate-300 text-xs sm:text-sm mt-1">
            {language === 'te' ? currentItem?.captionTe : currentItem?.captionEn}
          </p>
          <div className="mt-2 text-xs text-slate-400">
            {currentIndex + 1} / {images.length} {itemImages.length > 1 ? `(Photo ${subIdx + 1} of ${itemImages.length})` : ''}
          </div>
        </div>
      </div>
    </div>
  );
};
