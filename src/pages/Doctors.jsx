import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  GraduationCap, 
  FileCheck2, 
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  PhoneCall
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { VerificationBadge } from '../components/VerificationBadge';
import { PageHero } from '../components/PageHero';
import { ScrollReveal } from '../components/ScrollReveal';

export const Doctors = () => {
  const { language, t } = useLanguage();
  const { doctors, settings } = useClinicData();

  return (
    <div className="min-h-screen bg-[#FCFAF5]">
      <SeoHelmet 
        title={language === 'te' ? 'వైద్యులు & నిపుణులు - బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్' : 'Doctors & Specialists - Brain Spine & Neuro Clinic'}
        description="Meet our senior neurosurgeons and neurologists in Vizianagaram. Board-certified clinical specialists providing ethical, evidence-based brain and spine care."
      />

      {/* Hero Banner */}
      <PageHero
        badge={language === 'te' ? 'ఆంధ్రప్రదేశ్ మెడికల్ కౌన్సిల్ ధృవీకరించిన సీనియర్ న్యూరో సర్జన్' : 'APMC Registered & Verified Neurosurgeon'}
        badgeIcon={<ShieldCheck className="w-3.5 h-3.5 text-amber-400" />}
        title={language === 'te' ? 'మా వైద్య నిపుణులు' : 'Our Medical Specialists'}
        subtitle={language === 'te' ? 'అనుభవజ్ఞులైన, నిబద్ధత గల న్యూరోసర్జికల్ నాయకత్వం' : 'Experienced, Ethical & APMC-Verified Leadership'}
        description={language === 'te'
          ? 'డా. రెడ్డి శంకర రావు (MCh Neurosurgery, Narayana Hrudayalaya) - విజయనగరంలో 11+ సంవత్సరాల నిబద్ధత గల శస్త్రచికిత్స అనుభవం.'
          : 'Consult Dr. Reddi Sankara Rao, Senior Consultant Neurosurgeon trained at Narayana Hrudayalaya, Bengaluru, dedicated to precision microneurosurgery.'}
        breadcrumbs={[{ label: language === 'te' ? 'వైద్యులు & నిపుణులు' : 'Doctors & Specialists' }]}
        bgImage="/images/facility-ot.jpg"
      />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-12 sm:py-16 space-y-12 sm:space-y-16">

        {/* Doctor Showcase Card (Single Doctor Focus) */}
        <ScrollReveal direction="up" distance={30}>
          <div className="w-full max-w-6xl mx-auto">
            {doctors.slice(0, 1).map((doc) => (
              <div 
                key={doc.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-300/80 shadow-xl space-y-8"
              >
              {/* Doctor Profile Top */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <div className="relative shrink-0">
                  <img
                    src={doc.image}
                    alt={language === 'te' ? doc.nameTe : doc.nameEn}
                    className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover object-top border-4 border-white shadow-xl ring-2 ring-amber-400"
                  />
                  <div className="absolute -bottom-2.5 -right-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 p-2 rounded-xl shadow-md border border-amber-300">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2">
                    <h2 className="font-black text-slate-900 text-2xl sm:text-3xl">
                      {language === 'te' ? doc.nameTe : doc.nameEn}
                    </h2>
                    <VerificationBadge isVerified={doc.isVerified} variant="compact" />
                  </div>

                  <p className="text-sm sm:text-base font-bold text-amber-800">
                    {language === 'te' ? doc.titleTe : doc.titleEn}
                  </p>

                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs">
                    <span className="inline-flex items-center gap-1 font-bold text-amber-950 bg-amber-100/80 px-3 py-1 rounded-full border border-amber-300/80 shadow-2xs">
                      <Award className="w-3.5 h-3.5 text-amber-600" />
                      <span>{doc.experienceYears}+ {language === 'te' ? 'సంవత్సరాల సర్జికల్ అనుభవం' : 'Years Clinical Experience'}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      <span>Narayana Hrudayalaya, Bengaluru</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bio Narrative */}
              <div className="border-t border-slate-100 pt-6 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>{language === 'te' ? doc.bioTe : doc.bioEn}</p>
              </div>

              {/* Credentials & Registration Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 bg-amber-50/60 p-5 rounded-2xl border border-amber-200/70">
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold mb-0.5">Medical Qualifications:</strong>
                    <span>{doc.qualifications}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <FileCheck2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold mb-0.5">Medical Council Registration:</strong>
                    <span>{doc.councilReg}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold mb-0.5">OPD Consultation Hours:</strong>
                    <span>{language === 'te' ? doc.opdScheduleTe : doc.opdScheduleEn}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-amber-950 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold mb-0.5">Verified Accreditation:</strong>
                    <span>{language === 'te' ? doc.verificationNoteTe : doc.verificationNoteEn}</span>
                  </div>
                </div>
              </div>

              {/* Speciality Badges */}
              {doc.specialities && (
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    {language === 'te' ? 'ప్రత్యేక శస్త్రచికిత్స విభాగాలు:' : 'Surgical Spectrum & Specialities:'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {doc.specialities.map((spec, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    to={`/appointment?doctor=${encodeURIComponent(doc.nameEn)}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/25 active:scale-95 transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{language === 'te' ? 'డాక్టర్ గారి అపాయింట్‌మెంట్' : 'Book Consultation'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-white hover:bg-amber-50 text-slate-950 border-2 border-amber-500/80 shadow-xs transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                    <span>{language === 'te' ? 'క్లినిక్ కాల్ చేయండి' : 'Call Clinic'}</span>
                  </a>
                </div>

                <span className="text-xs font-bold text-slate-600 py-2">
                  <span>Direct: +91 {settings.phone}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Clinical Second Opinion Callout */}
      <ScrollReveal direction="zoom" distance={24}>
        <div className="bg-gradient-to-br from-[#060D1A] via-[#0E1726] to-[#060D1A] rounded-3xl p-8 sm:p-12 text-white shadow-xl border-2 border-amber-500/40 space-y-6">
          <div className="max-w-2xl space-y-3">
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider border border-amber-400/40">
              {language === 'te' ? 'రెండో అభిప్రాయం' : 'Second Opinion Service'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {language === 'te'
                ? 'మెదడు లేదా వెన్నెముక శస్త్రచికిత్సపై సందేహాలు ఉన్నాయా?'
                : 'Need a Second Opinion Before Spine or Brain Surgery?'}
            </h2>
            <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed">
              {language === 'te'
                ? 'మా సీనియర్ న్యూరో సర్జన్లు మీ MRI రిపోర్టులను పరిశీలించి, శస్త్రచికిత్స ఖచ్చితంగా అవసరమా కాదా అనేది నిష్పాక్షికంగా మరియు నైతికంగా వివరిస్తారు.'
                : 'Our senior specialists provide unbiased, conservative-first clinical reviews of your MRI scans and diagnostic reports to help you make informed decisions.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 transition-all shadow-md shadow-amber-500/20"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>{t.common.bookConsultation}</span>
            </Link>

            <a
              href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-slate-800/80 hover:bg-slate-800 text-amber-200 border border-amber-500/30 transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>{settings.phone}</span>
            </a>
          </div>
        </div>
      </ScrollReveal>
      </div>
    </div>
  );
};

export default Doctors;
