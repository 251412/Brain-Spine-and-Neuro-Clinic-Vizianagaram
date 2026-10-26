import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  HelpCircle, 
  FileCheck,
  Stethoscope
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { PageHero } from '../components/PageHero';
import { ScrollReveal } from '../components/ScrollReveal';

export const SpecialityDetail = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const { specialities } = useClinicData();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const speciality = specialities.find((s) => s.id === id);

  if (!speciality) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm max-w-md space-y-4">
          <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
          <h2 className="text-xl font-bold text-slate-900">
            {language === 'te' ? 'స్పెషాలిటీ కనుగొనబడలేదు' : 'Speciality Not Found'}
          </h2>
          <p className="text-slate-600 text-sm">
            {language === 'te' 
              ? 'కోరిన వైద్య విభాగం అందుబాటులో లేదు లేదా తొలగించబడింది.' 
              : 'The requested clinical speciality could not be located.'}
          </p>
          <Link
            to="/specialities"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-bold hover:from-amber-400 hover:to-amber-500 text-sm shadow-sm shadow-amber-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.common.backToList}</span>
          </Link>
        </div>
      </div>
    );
  }

  const conditions = language === 'te' ? speciality.conditionsTe : speciality.conditionsEn;
  const treatments = language === 'te' ? speciality.treatmentsTe : speciality.treatmentsEn;
  const title = language === 'te' ? speciality.nameTe : speciality.nameEn;
  const shortDesc = language === 'te' ? speciality.shortDescTe : speciality.shortDescEn;
  const education = language === 'te' ? speciality.patientEducationTe : speciality.patientEducationEn;

  return (
    <div className="min-h-screen bg-[#FCFAF5]">
      <SeoHelmet 
        title={`${title} - Brain Spine & Neuro Clinic`}
        description={shortDesc}
      />

      {/* Hero Banner */}
      <PageHero
        badge={language === 'te' ? 'ప్రత్యేక క్లినికల్ విభాగం' : 'Specialised Clinical Department'}
        badgeIcon={<Stethoscope className="w-3.5 h-3.5 text-amber-400" />}
        title={title}
        subtitle={language === 'te' ? 'సమగ్ర రోగ నిర్ధారణ & శస్త్రచికిత్స సంరక్షణ' : 'Advanced Diagnosis & Comprehensive Surgical Care'}
        description={shortDesc}
        breadcrumbs={[
          { label: language === 'te' ? 'స్పెషాలిటీలు' : 'Specialities', to: '/specialities' },
          { label: title }
        ]}
        bgImage={speciality.image || '/images/facility-ot.jpg'}
      />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-10 sm:py-14 space-y-10">
        {/* Back Link */}
        <div>
          <Link
            to="/specialities"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-amber-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.common.backToList}</span>
          </Link>
        </div>

        {/* Featured Image & Quick Action Card */}
        <ScrollReveal direction="zoom" delay={0.05}>
          <div className="bg-white rounded-3xl overflow-hidden border-2 border-amber-200/70 shadow-lg shadow-amber-500/5">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
              <img 
                src={speciality.image || `/images/speciality-${speciality.id}.webp`}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-black/30" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
                <div className="text-white space-y-1">
                  <p className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Clinical Discipline</p>
                  <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
                </div>
                <Link
                  to={`/appointment?speciality=${encodeURIComponent(speciality.nameEn)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.specialities.bookSpecialityCta}</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Conditions Addressed & Available Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Conditions Addressed */}
          <ScrollReveal direction="left" delay={0.08} className="h-full">
            <div className="bg-white rounded-3xl p-8 border border-amber-200/60 shadow-xs space-y-4 h-full">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-amber-600" />
                <span>{t.specialities.conditionsAddressed}</span>
              </h2>
              <ul className="space-y-3 text-sm text-slate-700">
                {conditions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Available Treatments */}
          <ScrollReveal direction="right" delay={0.08} className="h-full">
            <div className="bg-white rounded-3xl p-8 border border-amber-200/60 shadow-xs space-y-4 h-full">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-amber-600" />
                <span>{t.specialities.treatmentInfo}</span>
              </h2>
              <ul className="space-y-3 text-sm text-slate-700">
                {treatments.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Patient Educational Guide */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-gradient-to-br from-amber-50/70 via-white to-amber-50/40 rounded-3xl p-8 sm:p-10 border border-amber-200/80 shadow-xs space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              {t.specialities.patientEducation}
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {education}
            </p>
          </div>
        </ScrollReveal>

        {/* Frequently Asked Questions */}
        {speciality.faqs && speciality.faqs.length > 0 && (
          <ScrollReveal direction="up" delay={0.12}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-600" />
                <span>{t.specialities.faqTitle}</span>
              </h2>

              <div className="space-y-3">
                {speciality.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  const question = language === 'te' ? faq.qTe : faq.qEn;
                  const answer = language === 'te' ? faq.aTe : faq.aEn;

                  return (
                    <div 
                      key={idx}
                      className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                        className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm hover:bg-slate-50 transition-colors"
                      >
                        <span>{question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-amber-600 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Bottom Consultation Banner */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-gradient-to-r from-[#060D1A] via-[#0B1629] to-[#060D1A] text-white rounded-3xl p-8 sm:p-10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {t.specialities.needConsultation}
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-lg">
                {language === 'te'
                  ? 'మా నిపుణులతో నేరుగా చర్చించి ఖచ్చితమైన నిర్ధారణ పొందండి.'
                  : 'Consult our qualified clinical team for an ethical, second-opinion evaluation.'}
              </p>
            </div>

            <Link
              to={`/appointment?speciality=${encodeURIComponent(speciality.nameEn)}`}
              className="px-8 py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 transition-all shrink-0 shadow-lg shadow-amber-500/25 active:scale-95"
            >
              {t.common.bookConsultation}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
