import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { Lightbox } from '../components/Lightbox';
import { PageHero } from '../components/PageHero';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal';
import { CardImageSlideshow } from '../components/CardImageSlideshow';

export const Gallery = () => {
  const { language, t } = useLanguage();
  const { gallery } = useClinicData();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const categories = [
    { id: 'all', label: t.gallery.categories.all },
    { id: 'interiors', label: t.gallery.categories.interiors },
    { id: 'facilities', label: t.gallery.categories.facilities },
    { id: 'camps', label: t.gallery.categories.camps },
    { id: 'events', label: t.gallery.categories.events },
  ];

  const filteredItems = selectedCategory === 'all'
    ? gallery
    : gallery.filter((item) => item.category === selectedCategory);

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(-1);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  // Curated related images for automatic in-card slideshow
  const getCardImages = (item) => {
    if (item.id === 'gal-1') {
      return ['/images/clinic-exterior-pks.jpg', '/images/clinic-interior-reception.jpg'];
    }
    if (item.id === 'gal-2') {
      return [
        '/images/equipment-ot-1.jpg',
        '/images/equipment-ot-2.jpg',
        '/images/equipment-ot-3.jpg'
      ];
    }
    if (item.id === 'gal-3') {
      return [
        '/images/speciality-treatment-1.jpg',
        '/images/speciality-treatment-2.jpg',
        '/images/speciality-treatment-3.jpg',
        '/images/speciality-treatment-4.jpg'
      ];
    }
    if (item.images && item.images.length > 0) return item.images;

    const categoryExtras = {
      interiors: ['/images/clinic-exterior-pks.jpg', '/images/clinic-interior-reception.jpg'],
      facilities: [
        '/images/equipment-ot-1.jpg',
        '/images/equipment-ot-2.jpg',
        '/images/equipment-ot-3.jpg'
      ],
      camps: ['/images/health-camp.jpg', '/images/clinic-bobbili-exterior.jpg', '/images/dr-reddi-sankara-rao.jpg'],
      events: ['/images/health-camp.jpg', '/images/clinic-exterior-pks.jpg', '/images/doctor-banner.png']
    };

    const pool = categoryExtras[item.category] || ['/images/equipment-ot-1.jpg', '/images/equipment-ot-2.jpg', '/images/equipment-ot-3.jpg'];
    return [item.image, ...pool.filter((img) => img !== item.image)].slice(0, 4);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF5]">
      <SeoHelmet 
        title={language === 'te' ? 'క్లినిక్ మరియు సదుపాయాల గ్యాలరీ - బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్' : 'Clinic & Facility Gallery - Brain Spine & Neuro Clinic'}
        description="Explore our clinic consultation suites, advanced 3T MRI radiology suite, microsurgical operating theatre, and community health camps."
      />

      {/* Hero Banner with Glowing Accent */}
      <PageHero
        badge={language === 'te' ? 'సదుపాయాలు & మౌలిక వసతులు' : 'Visual Tour & Infrastructure'}
        badgeIcon={<ImageIcon className="w-3.5 h-3.5 text-amber-400 drop-shadow-[0_0_8px_rgba(201,149,36,0.8)]" />}
        title={language === 'te' ? 'మా సదుపాయాలు & గ్యాలరీ' : 'Our Facilities & Gallery'}
        subtitle={language === 'te' ? 'రోగుల సౌకర్యార్థం రూపొందించిన అత్యాధునిక వసతులు' : 'Modern Facilities Designed Around Patient Care'}
        description={language === 'te'
          ? 'మా సంప్రదింపు సూట్లు, 3T MRI రేడియాలజీ విభాగం, మాడ్యులర్ న్యూరోసర్జికల్ ఆపరేషన్ థియేటర్ మరియు ఉచిత వైద్య శిబిరాల దృశ్య సమాహారం.'
          : 'A visual tour of our clinical consultation suites, 3T MRI diagnostics, modular neurosurgical operating theatre, and community outreach health camps.'}
        breadcrumbs={[{ label: language === 'te' ? 'గ్యాలరీ' : 'Facilities & Gallery' }]}
        bgImage="/images/facility-mri.jpg"
      />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-10 sm:py-16 space-y-10">

        {/* Category Filter Pills & Header */}
        <div className="space-y-6">
          <ScrollReveal direction="up" distance={20}>
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-300/80 px-3.5 py-1 rounded-full shadow-xs">
                {language === 'te' ? 'ఇంటరాక్టివ్ కార్డ్ స్లైడ్‌షో' : 'Interactive Multi-Angle Showcase'}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                {language === 'te' ? 'పూర్తి గ్యాలరీ సమాహారం' : 'Explore All Clinic Spaces'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                {language === 'te' 
                  ? 'ప్రతి కార్డ్ ఆటోమేటిక్‌గా బహుళ కోణాలను ప్రదర్శిస్తుంది. పూర్తి పరిమాణంలో చూడటానికి కార్డ్ పై క్లిక్ చేయండి.' 
                  : 'Each facility card features an automated multi-view slideshow. Click any image to launch full-resolution lightbox view.'}
              </p>
            </div>
          </ScrollReveal>

          {/* Category Filters with Glowing Active Pill */}
          <ScrollReveal direction="up" distance={16} delay={0.05}>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 shadow-[0_0_20px_rgba(201,149,36,0.45)] border border-amber-400 scale-105'
                      : 'bg-white text-slate-700 hover:bg-amber-50 hover:text-amber-950 border border-amber-200/80 shadow-xs hover:border-amber-400'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Gallery Grid with Automatic In-Card Slideshow */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-amber-200 text-slate-500 text-sm">
            {t.common.noResults}
          </div>
        ) : (
          <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.08}>
            {filteredItems.map((item, idx) => (
              <ScrollStaggerItem key={item.id} direction="up" distance={24} className="h-full">
                <div
                  className="group rounded-3xl overflow-hidden bg-white border-2 border-amber-300/80 shadow-md shadow-amber-500/10 hover:shadow-2xl hover:shadow-amber-500/30 hover:border-amber-500 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  {/* Automatic In-Card Slideshow */}
                  <CardImageSlideshow
                    images={getCardImages(item)}
                    alt={language === 'te' ? item.titleTe : item.titleEn}
                    onOpenLightbox={() => handleOpenLightbox(idx)}
                    cardIndex={idx}
                    intervalMs={4200}
                    className="h-64 sm:h-72"
                  />

                  {/* Card Description & Meta */}
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="capitalize text-amber-800 font-extrabold text-[11px] px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg group-hover:text-amber-800 transition-colors leading-snug">
                        {item.id === 'gal-1' 
                          ? (language === 'te' ? 'క్లినిక్ ఇమేజ్' : 'Clinic image') 
                          : item.id === 'gal-2'
                            ? (language === 'te' ? 'ఎక్విప్‌మెంట్ ఇమేజెస్' : 'Equipment images')
                            : item.id === 'gal-3'
                              ? (language === 'te' ? 'స్పెషాలిటీస్ & ట్రీట్‌మెంట్స్ ఇమేజెస్' : 'Specialities & Treatments images')
                              : (language === 'te' ? item.titleTe : item.titleEn)}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                        {language === 'te' ? item.captionTe : item.captionEn}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-amber-100 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-bold text-slate-500">
                        Dr. Reddi Sankara Rao Clinic
                      </span>
                      <button
                        type="button"
                        onClick={() => handleOpenLightbox(idx)}
                        className="text-amber-700 font-bold hover:text-amber-950 text-xs flex items-center gap-1 group/btn"
                      >
                        <span>View Photos</span>
                        <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        )}
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxIndex >= 0}
        images={filteredItems}
        currentIndex={lightboxIndex}
        onClose={handleCloseLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default Gallery;
