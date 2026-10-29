import React from 'react';
import { Activity, PhoneCall, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { SpecialityCard } from '../components/SpecialityCard';
import { PageHero } from '../components/PageHero';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal';

export const Specialities = () => {
  const { language, t } = useLanguage();
  const { specialities } = useClinicData();

  return (
    <div className="min-h-screen bg-[#FCFAF5]">
      <SeoHelmet 
        title={language === 'te' 
          ? 'స్పెషాలిటీలు & చికిత్సలు - బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్' 
          : 'Specialities & Treatments - Brain Spine & Neuro Clinic'}
        description="Comprehensive clinical care across Neurology, Neurosurgery, Spine Care, Stroke, Brain Tumour Care, Epilepsy, and Chronic Nerve Pain."
      />

      {/* Hero Banner */}
      <PageHero
        badge={language === 'te' ? 'ప్రత్యేక క్లినికల్ విభాగాలు' : 'Comprehensive Clinical Disciplines'}
        badgeIcon={<Activity className="w-3.5 h-3.5 text-amber-400" />}
        title={language === 'te' ? 'స్పెషాలిటీలు & చికిత్సలు' : 'Specialities & Treatments'}
        subtitle={language === 'te' 
          ? 'మెదడు, వెన్నెముక మరియు నాడీ సంబంధిత వ్యాధులకు సమగ్ర సంరక్షణ' 
          : 'Comprehensive Care for Brain, Spine & Neurological Conditions'}
        description={language === 'te'
          ? 'డా. రెడ్డి శంకర రావు పర్యవేక్షణలో మెదడు, వెన్నెముక మరియు నరాల సమస్యలకు అత్యాధునిక శస్త్రచికిత్స మరియు వైద్య చికిత్సలు. చికిత్సా విధానాలు చూడటానికి ఏదైనా కార్డ్‌పై "Learn More" క్లిక్ చేయండి.'
          : 'Advanced surgical and clinical care across brain disorders, spine surgery, stroke protocols, epilepsy, and chronic nerve pain. Click "Learn More" on any card below to view all dedicated procedures and book consultations.'}
        breadcrumbs={[{ label: language === 'te' ? 'స్పెషాలిటీలు & చికిత్సలు' : 'Specialities & Treatments' }]}
        bgImage="/images/facility-ot.jpg"
      />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-12 sm:py-16 space-y-14">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{language === 'te' ? 'మా క్లినికల్ విభాగాలు' : 'Our Specialities'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              {language === 'te' 
                ? 'వైద్య విభాగాలు & ప్రత్యేక శస్త్రచికిత్సలు' 
                : 'Clinical Disciplines & Surgical Specialities'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {language === 'te'
                ? 'కింది కార్డ్‌లలో ఏదైనా విభాగంపై "వివరాలు & చికిత్సలు చూడండి" (Learn More) నొక్కడం ద్వారా ఆ విభాగానికి సంబంధించిన అన్ని ప్రత్యేక శస్త్రచికిత్సలు, చికిత్సా వివరాలు మరియు అపాయింట్‌మెంట్ బుకింగ్ ఆప్షన్లను చూడవచ్చు.'
                : 'Click "Learn More & Treatments" on any speciality below to explore the detailed list of advanced procedures, clinical descriptions, and direct patient appointment booking.'}
            </p>
          </div>
        </ScrollReveal>

        {/* 7 Specialities Grid (3 Columns) */}
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
          {specialities.map((speciality) => (
            <ScrollStaggerItem key={speciality.id} direction="up" distance={28} className="h-full">
              <SpecialityCard speciality={speciality} />
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>

        {/* Bottom 24/7 Helpline Banner */}
        <ScrollReveal direction="up" delay={0.12}>
          <section className="bg-gradient-to-r from-[#060D1A] via-[#0B1629] to-[#060D1A] text-white rounded-3xl p-8 sm:p-10 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'te' ? '24×7 అత్యవసర న్యూరో సర్జికల్ కేర్' : '24×7 Emergency Neurosurgical Care'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {language === 'te' 
                  ? 'తక్షణ వైద్య సహాయం లేదా అపాయింట్‌మెంట్ అవసరమా?' 
                  : 'Need Immediate Clinical Assistance or Second Opinion?'}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                {language === 'te'
                  ? 'మా విజయనగరం గుమ్చి జంక్షన్ క్లినిక్ లేదా బొబ్బిలి బ్రాంచ్‌లో సంప్రదింపుల కోసం రిసెప్షన్‌కు నేరుగా కాల్ చేయండి.'
                  : 'Reach our clinical reception at Gumchi Junction (Vizianagaram) or Bobbili Branch for direct scheduling and emergency evaluations.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="tel:9908981669"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>9908981669 (Call 24×7)</span>
              </a>

              <a
                href="tel:9951142275"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>9951142275 (Bobbili)</span>
              </a>
            </div>
          </section>
        </ScrollReveal>

      </div>
    </div>
  );
};
