import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  PhoneCall, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Activity, 
  Award, 
  HelpCircle,
  MapPin,
  Clock,
  Sparkles,
  Stethoscope,
  Brain
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { PageHero } from '../components/PageHero';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal';
import { seoServices } from '../data/seoServicesData';
import { 
  SITE_URL, 
  getPhysicianSchema, 
  getClinicSchema, 
  getFAQSchema, 
  getMedicalProcedureSchema, 
  getMedicalConditionSchema 
} from '../data/seoSchemas';

export const ServicePage = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const { settings, doctors } = useClinicData();
  const leadDoctor = doctors[0] || {};
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const service = seoServices.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/specialities" replace />;
  }

  const title = language === 'te' ? service.titleTe : service.titleEn;
  const seoTitle = language === 'te' ? service.seoTitleTe : service.seoTitleEn;
  const metaDesc = language === 'te' ? service.metaDescriptionTe : service.metaDescriptionEn;
  const h1Text = language === 'te' ? service.h1Te : service.h1En;
  const intro = language === 'te' ? service.introTe : service.introEn;
  const whatIs = language === 'te' ? service.whatIsTe : service.whatIsEn;
  const symptoms = language === 'te' ? service.symptomsTe : service.symptomsEn;
  const causes = language === 'te' ? service.causesTe : service.causesEn;
  const diagnosis = language === 'te' ? service.diagnosisTe : service.diagnosisEn;
  const treatments = language === 'te' ? service.treatmentsTe : service.treatmentsEn;
  const whenToConsult = language === 'te' ? service.whenToConsultTe : service.whenToConsultEn;
  const faqs = language === 'te' ? service.faqsTe : service.faqsEn;

  // Find related treatment objects
  const relatedList = (service.relatedTreatments || [])
    .map((rSlug) => seoServices.find((s) => s.slug === rSlug))
    .filter(Boolean);

  // Schema generation
  const pageCanonical = `${SITE_URL}/${service.slug}/`;
  const schemaList = [
    getPhysicianSchema(leadDoctor),
    getClinicSchema(),
    getMedicalProcedureSchema({
      name: service.titleEn,
      description: service.metaDescriptionEn,
      procedureType: service.category.includes('Surgery') ? 'SurgicalProcedure' : 'MedicalTherapy',
      bodyLocation: service.category.includes('Brain') ? 'Brain' : 'Spine',
      url: pageCanonical
    }),
    getMedicalConditionSchema({
      name: service.titleEn,
      description: service.whatIsEn,
      possibleTreatment: service.treatmentsEn,
      url: pageCanonical
    }),
    getFAQSchema(service.faqsEn)
  ];

  return (
    <div className="min-h-screen bg-[#FCFAF5]">
      <SeoHelmet
        title={seoTitle}
        description={metaDesc}
        canonicalUrl={pageCanonical}
        schema={schemaList}
        breadcrumbs={[
          { label: language === 'te' ? 'సేవలు & చికిత్సలు' : 'Treatments & Services', to: '/specialities' },
          { label: title, url: pageCanonical }
        ]}
      />

      {/* Page Hero with single H1 heading */}
      <PageHero
        badge={language === 'te' ? 'నిపుణుల వైద్య సంరక్షణ' : service.badge}
        badgeIcon={<Stethoscope className="w-3.5 h-3.5 text-amber-400" />}
        title={h1Text}
        subtitle={language === 'te' ? 'డా. రెడ్డి శంకర రావు – సీనియర్ కన్సల్టెంట్ న్యూరో సర్జన్' : 'Dr. Reddi Sankara Rao – Senior Consultant Neurosurgeon, Vizianagaram'}
        description={intro}
        breadcrumbs={[
          { label: language === 'te' ? 'సేవలు' : 'Specialities', to: '/specialities' },
          { label: title }
        ]}
        bgImage="/images/facility-ot.jpg"
      />

      {/* Quick Call & Appointment Action Bar */}
      <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 py-3.5 px-4 text-slate-950 font-bold border-b border-amber-600 shadow-md">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <Sparkles className="w-4 h-4 text-slate-950 shrink-0" />
            <span>
              {language === 'te'
                ? `డా. రెడ్డి శంకర రావు గారి వద్ద ${title} కొరకు సంప్రదించండి`
                : `Consult Dr. Reddi Sankara Rao for ${service.titleEn} in Vizianagaram`}
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-slate-950 text-amber-300 hover:text-white transition-all text-xs font-black shadow-xs"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{language === 'te' ? 'కాల్ చేయండి: 9908981669' : 'Call: 9908981669'}</span>
            </a>

            <Link
              to={`/appointment?treatment=${encodeURIComponent(service.titleEn)}`}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-white text-slate-950 hover:bg-slate-100 transition-all text-xs font-black shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-700" />
              <span>{language === 'te' ? 'అపాయింట్‌మెంట్ బుక్ చేయండి' : 'Book Consultation'}</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Clinical Content (8 Columns) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* 1. What is the Condition? */}
            <ScrollReveal direction="up" distance={20}>
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  <Activity className="w-3.5 h-3.5 text-amber-600" />
                  <span>{language === 'te' ? 'సమస్య వివరణ' : 'Medical Overview'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {language === 'te' ? `${title} అంటే ఏమిటి?` : `What is ${service.titleEn}?`}
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {whatIs}
                </p>
              </section>
            </ScrollReveal>

            {/* 2. Common Signs and Symptoms */}
            <ScrollReveal direction="up" distance={20}>
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>{language === 'te' ? 'లక్షణాలు' : 'Clinical Presentation'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {language === 'te' ? 'సాధారణ సంకేతాలు మరియు లక్షణాలు' : `Common Signs and Symptoms`}
                </h2>
                <ul className="space-y-3 pt-2">
                  {symptoms.map((sym, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-rose-600" />
                      </div>
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* 3. Causes and Risk Factors */}
            <ScrollReveal direction="up" distance={20}>
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  <Brain className="w-3.5 h-3.5 text-amber-600" />
                  <span>{language === 'te' ? 'కారణాలు' : 'Etiology & Risk Factors'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {language === 'te' ? 'కారణాలు మరియు ప్రమాద కారకాలు' : `Causes and Risk Factors`}
                </h2>
                <ul className="space-y-3 pt-2">
                  {causes.map((cause, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                      <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        {idx + 1}
                      </div>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </ScrollReveal>

            {/* 4. Diagnosis and Evaluation */}
            <ScrollReveal direction="up" distance={20}>
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  <Stethoscope className="w-3.5 h-3.5 text-amber-600" />
                  <span>{language === 'te' ? 'రోగ నిర్ధారణ' : 'Diagnostic Protocol'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {language === 'te' ? 'రోగ నిర్ధారణ & పరీక్షలు' : `Diagnosis and Evaluation Protocol`}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {diagnosis.map((diag, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/70 space-y-1.5">
                      <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Step {idx + 1}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {diag}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* 5. Available Treatment Options */}
            <ScrollReveal direction="up" distance={20}>
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  <span>{language === 'te' ? 'చికిత్సా విధానాలు' : 'Treatment Protocols'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {language === 'te' ? 'అందుబాటులో ఉన్న చికిత్సా ఎంపికలు' : `Available Treatment Options`}
                </h2>
                <div className="space-y-3.5 pt-2">
                  {treatments.map((treat, idx) => (
                    <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-[#FCFAF5] border border-amber-200/80 flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-sm flex items-center justify-center shrink-0 shadow-xs">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-slate-800 text-sm sm:text-base font-semibold leading-relaxed">
                          {treat}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* 6. When to Consult a Neurosurgeon (Red Flags) */}
            <ScrollReveal direction="up" distance={20}>
              <section className="bg-rose-50/70 rounded-3xl p-6 sm:p-8 border-2 border-rose-300 shadow-sm space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                  <span>{language === 'te' ? 'అత్యవసర హెచ్చరిక' : 'Red Flag Warning'}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {language === 'te' ? 'న్యూరోసర్జన్‌ను ఎప్పుడు సంప్రదించాలి?' : 'When to Consult a Neurosurgeon'}
                </h2>
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-medium">
                  {whenToConsult}
                </p>
                <div className="pt-2">
                  <a
                    href="tel:9908981669"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>{language === 'te' ? 'అత్యవసర కాల్: 9908981669' : 'Emergency 24x7: 9908981669'}</span>
                  </a>
                </div>
              </section>
            </ScrollReveal>

            {/* 7. FAQs Accordion */}
            <ScrollReveal direction="up" distance={20}>
              <section className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>{language === 'te' ? 'తరచుగా అడిగే ప్రశ్నలు' : 'Patient FAQs'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {language === 'te' ? `${title} – సాధారణ సందేహాలు` : `Frequently Asked Questions about ${service.titleEn}`}
                </h2>
                <div className="space-y-3 pt-2">
                  {faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-amber-200/80 bg-[#FCFAF5] overflow-hidden transition-all duration-200"
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                          className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span className="flex-1 hover:text-amber-800 transition-colors">
                            {faq.q}
                          </span>
                          <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </div>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-amber-200/50 bg-white">
                            <p>{faq.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </ScrollReveal>

          </div>

          {/* Sidebar (4 Columns): Doctor Profile, Booking Card, Locations, Related Treatments */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Doctor Profile Card */}
            <div className="bg-white rounded-3xl p-6 border-2 border-amber-300 shadow-xl shadow-amber-500/5 text-center space-y-4 sticky top-24">
              <div className="relative w-36 h-36 mx-auto rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md bg-slate-900">
                <img
                  src="/images/dr-reddi-sankara-rao.jpg"
                  alt="Dr. Reddi Sankara Rao - Senior Consultant Neurosurgeon"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold border border-amber-300 mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                  <span>APMC / 85415 Verified</span>
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  {language === 'te' ? 'డా. రెడ్డి శంకర రావు' : 'Dr. Reddi Sankara Rao'}
                </h3>
                <p className="text-xs font-bold text-amber-700 mt-0.5">
                  MBBS, MS, MCh (Neurosurgery)
                </p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Narayana Hrudayalaya Bengaluru Alumnus
                </p>
                <p className="text-xs text-slate-600 mt-2 font-semibold">
                  {language === 'te'
                    ? '11+ సంవత్సరాల న్యూరో & స్పైన్ సర్జికల్ నైపుణ్యం'
                    : '11+ Years of Surgical Experience in Brain & Spine Care'}
                </p>
              </div>

              <div className="pt-3 border-t border-amber-200/80 space-y-2.5">
                <Link
                  to={`/appointment?treatment=${encodeURIComponent(service.titleEn)}`}
                  className="w-full py-3 px-4 rounded-xl font-black text-xs bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'te' ? 'అపాయింట్‌మెంట్ బుక్ చేయండి' : 'Book Consultation'}</span>
                </Link>

                <a
                  href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-white hover:bg-amber-50 text-slate-900 border border-amber-300 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
                  <span>{language === 'te' ? 'కాల్ చేయండి: 9908981669' : 'Call: +91 99089 81669'}</span>
                </a>

                <Link
                  to="/dr-reddi-sankara-rao/"
                  className="inline-block text-xs font-bold text-amber-800 hover:text-amber-950 underline pt-1"
                >
                  {language === 'te' ? 'డాక్టర్ పూర్తి ప్రొఫైల్ చూడండి →' : 'View Full Doctor Biography →'}
                </Link>
              </div>

              {/* Clinic Locations Snapshot */}
              <div className="pt-4 border-t border-amber-200/80 text-left space-y-3">
                <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{language === 'te' ? 'క్లినిక్ చిరునామా' : 'Clinic Locations'}</span>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs space-y-1">
                  <div className="font-bold text-slate-900 flex items-center justify-between">
                    <span>Vizianagaram (Main Clinic)</span>
                    <span className="text-[10px] bg-amber-200/90 text-amber-950 px-1.5 py-0.2 rounded font-bold">24×7</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-snug">
                    Gumchi Junction, Sankaramatam Road, Vizianagaram – 535002
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs space-y-1">
                  <div className="font-bold text-slate-900 flex items-center justify-between">
                    <span>Bobbili Branch</span>
                    <span className="text-[10px] bg-slate-200 text-slate-800 px-1.5 py-0.2 rounded font-bold">Tue & Fri</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-snug">
                    Opp RTC Complex Ingate, Bobbili (4 PM – 9 PM)
                  </p>
                </div>
              </div>

              {/* Related Treatments Navigation */}
              {relatedList.length > 0 && (
                <div className="pt-4 border-t border-amber-200/80 text-left space-y-2.5">
                  <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                    {language === 'te' ? 'సంబంధిత చికిత్సలు' : 'Related Treatments'}
                  </div>
                  <ul className="space-y-1.5 text-xs">
                    {relatedList.map((rel) => (
                      <li key={rel.slug}>
                        <Link
                          to={`/${rel.slug}/`}
                          className="flex items-center justify-between py-1.5 px-2.5 rounded-lg hover:bg-amber-100/60 text-slate-700 hover:text-amber-950 transition-colors group font-medium"
                        >
                          <span className="line-clamp-1">{language === 'te' ? rel.titleTe : rel.titleEn}</span>
                          <ArrowRight className="w-3 h-3 text-amber-600 group-hover:translate-x-1 transition-transform shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

