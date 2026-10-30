import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Activity, 
  Award, 
  FileText, 
  Clock, 
  PhoneCall,
  Sparkles,
  GraduationCap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { SpecialityCard } from '../components/SpecialityCard';
import { OurLocationsSection } from '../components/OurLocationsSection';
import { GoogleReviewsSection } from '../components/GoogleReviewsSection';
import { HeroAnimatedLogo } from '../components/HeroAnimatedLogo';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal';

export const Home = () => {
  const { language, t } = useLanguage();
  const { settings, doctors, specialities, facilities, blogArticles } = useClinicData();
  const leadDoctor = doctors[0] || {};

  return (
    <div className="min-h-screen bg-slate-50">
      <SeoHelmet 
        title={language === 'te' ? 'హోమ్ - అత్యాధునిక న్యూరో & స్పైన్ క్లినిక్' : 'Home - Advanced Brain, Spine & Neurological Care'}
        description="Brain Spine & Neuro Clinic provides precision neurological diagnostics, spine surgery, stroke protocols, and pain care with patient-first ethics."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/70 via-white to-amber-50/30 pt-12 pb-20 lg:pt-16 lg:pb-28">
        <div className="absolute inset-0 subtle-gold-grid opacity-80 pointer-events-none" />
        
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-100/95 to-amber-50 text-amber-950 text-xs font-bold border border-amber-300 shadow-[0_0_15px_rgba(201,149,36,0.3)]">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping shadow-[0_0_6px_#C99524]" />
                <span>{language === 'te' ? 'అత్యాధునిక బ్రెయిన్, స్పైన్ & న్యూరో కేర్ సెంటర్ • విజయనగరం' : 'Brain, Spine & Neuro Center • Vizianagaram'}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                {t.home.heroTitle}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {t.home.heroSubtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-[0_0_24px_rgba(201,149,36,0.5)] border border-amber-300/80 transition-all transform active:scale-95"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>{t.home.heroCtaPrimary}</span>
                </Link>

                <Link
                  to="/specialities"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white hover:bg-amber-50/80 text-slate-900 border-2 border-amber-400/70 hover:border-amber-600 shadow-sm shadow-amber-500/10 transition-all"
                >
                  <span>{t.home.heroCtaSecondary}</span>
                  <ArrowRight className="w-4 h-4 text-amber-700" />
                </Link>
              </div>

              {/* Trust & Clinical Transparency Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-amber-200/80">
                <div className="space-y-0.5">
                  <div className="text-lg sm:text-xl font-extrabold text-amber-700 drop-shadow-[0_0_8px_rgba(201,149,36,0.25)]">{t.home.quickStats.stat1Val}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.home.quickStats.stat1Label}</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-lg sm:text-xl font-extrabold text-amber-800 drop-shadow-[0_0_8px_rgba(201,149,36,0.25)]">{t.home.quickStats.stat2Val}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.home.quickStats.stat2Label}</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-lg sm:text-xl font-extrabold text-slate-900">3-Tesla MRI</div>
                  <div className="text-xs text-slate-500 font-medium">{t.home.quickStats.stat3Label}</div>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Column: Premium Animated Logo (100% Transparent Background) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative flex items-center justify-center py-4 lg:py-0"
            >
              <HeroAnimatedLogo />
            </motion.div>


          </div>
        </div>
      </section>

      {/* Founder & Chief Neurosurgeon Prestige Showcase - Directly Below Hero */}
      <section className="py-12 sm:py-20 bg-[#FCFAF5] border-b border-[#E8D6A5]/60">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          
          {/* Subtle Top Category Header */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#242424] bg-[#F5E7BF]/70 px-3.5 py-1.5 rounded-full border border-[#E8D6A5] shadow-2xs">
              <Award className="w-4 h-4 text-[#C99524] shrink-0" />
              <span>{language === 'te' ? 'క్లినిక్ వ్యవస్థాపకులు & చీఫ్ న్యూరోసర్జన్' : 'Clinic Founder & Chief Neurosurgeon'}</span>
            </div>
            <Link
              to="/doctors"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A87512] hover:text-[#C99524] transition-colors group"
            >
              <span>{language === 'te' ? 'వైద్యుల విభాగాలు' : 'Clinical Specialties'}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Prestige Two-Tone Founder Banner Container */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-[#C99524]/10 border-2 border-[#E8D6A5]"
          >
            
            {/* Desktop Overlapping Cutout Portrait (Anchored to bottom on desktop, spans across white and warm champagne zones) */}
            <div className="hidden lg:flex absolute left-4 xl:left-8 bottom-0 z-20 w-[350px] xl:w-[390px] items-end justify-center pointer-events-none select-none">
              {/* Soft Ambient Radial Gold Glow behind the portrait */}
              <div className="absolute inset-0 -bottom-8 bg-gradient-to-t from-[#C99524]/20 via-[#F5E7BF]/35 to-transparent blur-3xl rounded-full scale-110 pointer-events-none" />
              
              {/* Floating Doctor Portrait (Original transparency preserved) */}
              <motion.img
                src="/images/dr-reddi-sankara-rao-portrait.webp"
                alt={language === 'te' ? `${leadDoctor.nameTe || 'డా. రెడ్డి శంకర రావు'} - వ్యవస్థాపకులు` : `${leadDoctor.nameEn || 'Dr. Reddi Sankara Rao'} - Founder`}
                animate={{ y: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="w-full h-auto max-h-[510px] xl:max-h-[540px] object-contain object-bottom drop-shadow-[0_18px_32px_rgba(201,149,36,0.25)] relative z-10"
              />
            </div>

            {/* TOP SECTION: Pure White Background */}
            <div className="bg-white pt-7 sm:pt-8 lg:pt-12 pb-4 sm:pb-6 px-5 sm:px-10 lg:pl-[390px] xl:pl-[430px] lg:pr-12">
              <div className="space-y-1 sm:space-y-1.5 text-center lg:text-left">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-[#242424] font-normal tracking-tight">
                  {language === 'te' ? 'వ్యవస్థాపకులు' : 'Founder'}
                </h2>
                
                <h3 className="font-serif italic text-xl sm:text-2xl text-[#A87512] font-bold pt-0.5 sm:pt-1">
                  {language === 'te' ? (leadDoctor.nameTe || 'డా. రెడ్డి శంకర రావు') : (leadDoctor.nameEn || 'Dr. Reddi Sankara Rao')}
                </h3>
                
                <p className="font-serif italic text-xs sm:text-sm md:text-[15px] text-[#686868] font-medium">
                  {language === 'te' 
                    ? 'వ్యవస్థాపకులు, ఛైర్మన్ & డైరెక్టర్ – న్యూరోసైన్సెస్' 
                    : 'Founder, Chairman and Director – Neurosciences'}
                </p>
                
                <p className="font-serif italic text-[11px] sm:text-xs md:text-sm text-[#A87512] font-medium">
                  {language === 'te' 
                    ? 'సాయి శంకరరావు బ్రెయిన్, స్పైన్ & న్యూరో క్లినిక్ – విజయనగరం' 
                    : 'Sai Sankararao Brain, Spine & Neuro Clinic – Vizianagaram'}
                </p>
              </div>

              {/* Mobile / Tablet Dedicated Doctor Portrait Showcase */}
              <div className="lg:hidden mt-5 sm:mt-6 -mb-4 text-center relative">
                {/* Soft Ambient Radial Gold Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#C99524]/35 via-[#F5E7BF]/45 to-transparent blur-3xl rounded-full scale-125 pointer-events-none animate-pulse" />
                
                <div className="relative inline-block w-full max-w-[260px] sm:max-w-[300px] mx-auto">
                  <motion.img
                    src="/images/dr-reddi-sankara-rao-portrait.webp"
                    alt={language === 'te' ? (leadDoctor.nameTe || 'డా. రెడ్డి శంకర రావు') : (leadDoctor.nameEn || 'Dr. Reddi Sankara Rao')}
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    className="w-full h-auto max-h-[340px] sm:max-h-[380px] object-contain drop-shadow-[0_18px_36px_rgba(201,149,36,0.4)] relative z-10"
                  />
                </div>
              </div>
            </div>

            {/* BOTTOM SECTION: Warm Champagne Band (#F5E7BF/35) */}
            <div className="bg-[#F5E7BF]/30 border-t border-[#E8D6A5] pt-6 sm:pt-7 pb-7 sm:pb-9 px-5 sm:px-10 lg:pl-[390px] xl:pl-[430px] lg:pr-12">
              
              {/* Essential High-Impact Clinical Authority */}
              <p className="text-[#242424] font-semibold text-xs sm:text-sm md:text-[16px] leading-relaxed text-center lg:text-left">
                {language === 'te'
                  ? 'నారాయణ హృదయాలయ (బెంగళూరు) పూర్వ విద్యార్థి & APMC నమోదిత నిపుణులు అయిన డాక్టర్ రెడ్డి శంకర రావు గారు, సంక్లిష్టమైన క్రేనియల్ మైక్రోసర్జరీ, మినిమల్లీ ఇన్వాసివ్ స్పైన్ సర్జరీ (MISS), కీహోల్ ఎండోస్కోపిక్ ప్రక్రియలు మరియు న్యూరో-ట్రామా కేర్‌లో ప్రత్యేక నిపుణులు.'
                  : 'A Narayana Hrudayalaya Bengaluru Alumnus and APMC Registered Specialist, Dr. Reddi Sankara Rao is an authority on complex cranial microsurgery, minimally invasive spine surgery (MISS), keyhole endoscopic procedures, and acute neuro-trauma care.'}
              </p>

              {/* Modern Credential Chips */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 mt-4 pt-3.5 border-t border-[#E8D6A5]/80 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white font-semibold text-[#242424] border border-[#E8D6A5] shadow-2xs hover:border-[#C99524] transition-all">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C99524]" />
                  <span>APMC / 48219 Verified</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white font-semibold text-[#242424] border border-[#E8D6A5] shadow-2xs hover:border-[#C99524] transition-all">
                  <GraduationCap className="w-3.5 h-3.5 text-[#C99524]" />
                  <span>Narayana Hrudayalaya Bengaluru</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-rose-50 font-bold text-rose-800 border border-rose-200 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                  <span>24×7 Trauma Response</span>
                </span>
              </div>

              {/* Action Buttons & Link (WhatsApp Removed) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-5 pt-3.5 border-t border-[#E8D6A5]/80">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full sm:w-auto">
                  {/* Primary CTA: Book Consultation */}
                  <Link
                    to={`/appointment?doctor=${encodeURIComponent('Dr. Reddi Sankara Rao')}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md hover:-translate-y-0.5 active:scale-95 transition-all text-center"
                  >
                    <Calendar className="w-4 h-4 text-slate-950 shrink-0" />
                    <span>{language === 'te' ? 'అపాయింట్‌మెంట్ బుక్ చేయండి' : 'Book Consultation'}</span>
                  </Link>

                  {/* Secondary CTA: Call Clinic */}
                  <a
                    href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white hover:bg-amber-50 text-[#242424] border border-[#E8D6A5] shadow-2xs hover:-translate-y-0.5 active:scale-95 transition-all text-center"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#C99524] shrink-0" />
                    <span>{language === 'te' ? 'కాల్ చేయండి' : 'Call Clinic'}</span>
                  </a>
                </div>

                {/* Explore Founder Profile Link */}
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs sm:text-sm md:text-base font-bold text-[#A87512] hover:text-[#C99524] transition-colors group pt-2 sm:pt-0"
                >
                  <span>{language === 'te' ? 'వ్యవస్థాపకుల ప్రొఫైల్ చూడండి' : 'Explore Founder Profile'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 text-[#C99524]" />
                </Link>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Specialities Section */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <ScrollReveal direction="up" distance={24}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                  <Activity className="w-4 h-4 text-amber-600" />
                  <span>{language === 'te' ? 'వైద్య విభాగాలు' : 'Clinical Departments'}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {t.home.specialitiesHeading}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2">
                  {t.home.specialitiesSubheading}
                </p>
              </div>

              <Link
                to="/specialities"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-950 self-start md:self-end"
              >
                <span>{t.common.viewAll}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Speciality Grid (Strictly 3 Cards on Home Page per user request) */}
          <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.12}>
            {specialities.slice(0, 3).map((spec) => (
              <ScrollStaggerItem key={spec.id} direction="up" distance={28}>
                <SpecialityCard speciality={spec} />
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </div>
      </section>

      {/* Facilities & Equipment Section */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <ScrollReveal direction="up" distance={24}>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {t.home.facilitiesHeading}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                {t.home.facilitiesSubheading}
              </p>
            </div>
          </ScrollReveal>

          <ScrollStagger className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.12}>
            {facilities.map((facility) => (
              <ScrollStaggerItem key={facility.id} direction="up" distance={28} className="h-full">
                <div 
                  className="group rounded-3xl overflow-hidden bg-white border-2 border-amber-300/80 shadow-md shadow-amber-500/10 hover:shadow-2xl hover:shadow-amber-500/30 hover:border-amber-500 transition-all duration-300 flex flex-col justify-between h-full"
                >
                  <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-900">
                    <img
                      src={facility.image}
                      alt={language === 'te' ? facility.nameTe : facility.nameEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 sm:p-7 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2 group-hover:text-amber-800 transition-colors">
                        {language === 'te' ? facility.nameTe : facility.nameEn}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {language === 'te' ? facility.descTe : facility.descEn}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-amber-100 flex items-center justify-between text-xs">
                      <span className="text-[11px] font-bold text-amber-700">Advanced Neuro Care</span>
                      <Link to="/gallery" className="text-amber-800 font-extrabold hover:text-amber-950 inline-flex items-center gap-1">
                        <span>Tour Space</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </div>
      </section>

      {/* Premium Google Reviews Marquee Section (What Our Patients Say) */}
      <ScrollReveal direction="up" distance={28}>
        <GoogleReviewsSection id="reviews" />
      </ScrollReveal>

      {/* Latest Health Articles Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <ScrollReveal direction="up" distance={24}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 uppercase tracking-wider mb-2">
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span>{language === 'te' ? 'వైద్య విద్యా వ్యాసాలు' : 'Patient Education'}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {t.home.articlesHeading}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-2">
                  {t.home.articlesSubheading}
                </p>
              </div>

              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-950"
              >
                <span>{t.common.viewAll}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {blogArticles.slice(0, 3).map((article) => (
              <ScrollStaggerItem key={article.id} direction="up" distance={28}>
                <article 
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="px-2.5 py-1 rounded-full bg-amber-50 text-amber-900 font-semibold border border-amber-200">
                        {language === 'te' ? article.categoryTe : article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base mb-2 line-clamp-2 hover:text-amber-800 transition-colors">
                      <Link to={`/blog/${article.slug}`}>
                        {language === 'te' ? article.titleTe : article.titleEn}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {language === 'te' ? article.summaryTe : article.summaryEn}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">By {article.author}</span>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="font-bold text-amber-800 hover:text-amber-950 inline-flex items-center gap-1"
                    >
                      <span>{t.common.readMore}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </div>
      </section>

      {/* Our Locations Section (Gumchi Junction & Bobbili Branch with Interactive Map) */}
      <ScrollReveal direction="up" distance={28}>
        <OurLocationsSection id="locations" />
      </ScrollReveal>

      {/* Appointment CTA Banner */}
      <ScrollReveal direction="zoom" distance={24}>
        <section className="bg-gradient-to-r from-[#060d1a] via-[#0f1d33] to-[#060d1a] text-white py-16 border-t-2 border-amber-500/40 relative overflow-hidden rounded-2xl mx-4 sm:mx-6 lg:mx-10 xl:mx-14 my-8">
          <div className="absolute inset-0 subtle-gold-grid opacity-30 pointer-events-none" />
          <div className="w-full px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-6 relative">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Advanced Surgical Excellence</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {language === 'te'
                  ? 'మీ న్యూరో లేదా వెన్నెముక సంప్రదింపులను బుక్ చేసుకోండి'
                  : 'Schedule a Comprehensive Neurological Evaluation'}
              </h2>
              <p className="text-amber-100/80 text-sm max-w-xl">
                {language === 'te'
                  ? 'నైతికమైన మరియు రోగి-కేంద్రీకృత వైద్య సంరక్షణ కోసం డాక్టర్ రెడ్డి శంకర రావు గారి అపాయింట్‌మెంట్ పొందండి.'
                  : 'Request an outpatient consultation slot with Dr. Reddi Sankara Rao at Gumchi Junction Clinic, Vizianagaram.'}
              </p>
            </div>

            <Link
              to="/appointment"
              className="px-8 py-4 rounded-xl font-black text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-xl shadow-amber-500/30 transition-transform active:scale-95 shrink-0 border border-amber-300/80"
            >
              {t.nav.bookNow}
            </Link>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};
