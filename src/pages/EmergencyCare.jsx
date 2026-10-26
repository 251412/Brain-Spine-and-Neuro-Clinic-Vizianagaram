import React from 'react';
import { 
  AlertTriangle, 
  PhoneCall, 
  Clock, 
  MapPin, 
  Activity, 
  ShieldAlert, 
  Zap, 
  AlertCircle,
  Ambulance,
  HeartPulse,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { VerificationBadge } from '../components/VerificationBadge';
import { PageHero } from '../components/PageHero';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal';

export const EmergencyCare = () => {
  const { language, t } = useLanguage();
  const { settings } = useClinicData();

  return (
    <div className="min-h-screen bg-[#FCFAF5]">
      <SeoHelmet 
        title={language === 'te' ? 'అత్యవసర సంరక్షణ & సూచనలు - బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్' : 'Emergency Neurological & Spine Guidance - Brain Spine & Neuro Clinic'}
        description="Crucial emergency guidance for acute stroke, spinal cord red flags, head trauma, and urgent hospital care protocols."
      />

      {/* Hero Banner */}
      <PageHero
        badge={language === 'te' ? '24/7 అత్యవసర న్యూరో సంరక్షణ' : '24/7 Acute Emergency Care'}
        badgeIcon={<AlertCircle className="w-3.5 h-3.5 text-rose-400" />}
        title={language === 'te' ? 'అత్యవసర సంరక్షణ & సూచనలు' : 'Emergency Care & Protocols'}
        subtitle={language === 'te' ? 'స్ట్రోక్, వెన్నెముక గాయం & తల గాయాలకు తక్షణ మార్గదర్శనం' : 'Immediate Guidance for Stroke, Spine Trauma & Head Injury'}
        description={language === 'te'
          ? 'గోల్డెన్ అవర్ సమయం అత్యంత విలువైంది. తీవ్రమైన లక్షణాలు కనిపించిన వెంటనే 108 కు కాల్ చేయండి లేదా తక్షణ వైద్య సహాయం పొందండి.'
          : 'Time is brain. Critical emergency first-aid protocols, acute stroke signs (B.E. F.A.S.T.), and urgent hospital care guidance.'}
        breadcrumbs={[{ label: language === 'te' ? 'అత్యవసర సంరక్షణ' : 'Emergency Care' }]}
        bgImage="/images/facility-ot.jpg"
      />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-12 sm:py-16 space-y-12">

        {/* High-Alert Emergency Disclaimer Banner */}
        <ScrollReveal direction="zoom" distance={20}>
          <div className="p-6 rounded-3xl bg-rose-50 border-2 border-rose-300 text-rose-950 space-y-3 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-rose-600 text-white shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </span>
              <h2 className="text-lg sm:text-xl font-extrabold text-rose-900">
                {language === 'te' ? 'అత్యవసర హెచ్చరిక - వెంటనే చదవండి' : 'Immediate Life-Safety Advisory'}
              </h2>
            </div>
            <p className="text-sm sm:text-base leading-relaxed pl-0 sm:pl-11">
              {t.emergency.disclaimerBanner}
            </p>
            <div className="pl-0 sm:pl-11 pt-2 flex flex-wrap items-center gap-3">
              <a
                href="tel:108"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-xs transition-colors"
              >
                <PhoneCall className="w-4 h-4 animate-pulse" />
                <span>National Ambulance Emergency: 108</span>
              </a>

              <a
                href={`tel:${settings.phone ? settings.phone.replace(/[^0-9]/g, '') : '9908981669'}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-xs transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Clinic Emergency Helpline: {settings.phone}</span>
              </a>

              <span className="text-xs text-rose-800 font-medium">
                Free 24/7 Government Emergency Dispatch Across India (108)
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* B.E. F.A.S.T. Stroke Recognition Cards */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <ScrollReveal direction="up" distance={20}>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 uppercase tracking-wider mb-2">
                <Zap className="w-4 h-4" />
                <span>Stroke Recognition System</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {t.emergency.beFastTitle}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                {t.emergency.beFastSubtitle}
              </p>
            </div>
          </ScrollReveal>

          <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {t.emergency.beFastItems.map((item, idx) => (
              <ScrollStaggerItem key={idx} direction="up" distance={24}>
                <div 
                  className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-rose-300 transition-colors space-y-2 shadow-2xs h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 font-extrabold text-2xl flex items-center justify-center">
                    {item.letter}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 pt-1">
                    {item.term}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>
        </section>

        {/* Spine & Head Trauma Emergency Red Flags */}
        <ScrollReveal direction="up" distance={28}>
          <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                <span>Surgical Emergency Red Flags</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold">
                {t.emergency.redFlagsTitle}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Do not wait for outpatient consultations if any of the following critical conditions are present:
              </p>
            </div>

            <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
              {t.emergency.redFlags.map((flag, idx) => (
                <ScrollStaggerItem key={idx} direction="up" distance={20}>
                  <div className="p-6 rounded-2xl bg-slate-800/90 border border-slate-700 space-y-2 h-full">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{flag.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-7">
                      {flag.desc}
                    </p>
                  </div>
                </ScrollStaggerItem>
              ))}
            </ScrollStagger>
          </section>
        </ScrollReveal>

        {/* Clinic Emergency Status & Verified Address Placeholder */}
        <ScrollReveal direction="up" distance={24}>
          <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900">
              {t.emergency.serviceStatusTitle}
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.emergency.serviceStatusText}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-2xl bg-amber-50/30 border border-amber-200/80 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-amber-600" />
                    <span>Clinic Direct Emergency Phone Line</span>
                  </span>
                  <VerificationBadge isVerified={true} variant="compact" />
                </div>
                <a
                  href={`tel:${settings.phone ? settings.phone.replace(/[^0-9]/g, '') : '9908981669'}`}
                  className="text-lg font-black text-amber-700 hover:text-amber-900 block tracking-wide"
                >
                  {settings.emergencyPhone}
                </a>
                <p className="text-xs text-slate-600 font-medium">
                  24×7 Emergency Dispatch and Urgent Clinical Assistance in Vizianagaram.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/30 border border-amber-200/80 space-y-3 shadow-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>Main Clinic Transit & Physical Address</span>
                  </span>
                  <VerificationBadge isVerified={true} variant="compact" />
                </div>
                <p className="text-xs text-slate-800 font-medium leading-relaxed">
                  {settings.address}
                </p>
                <a
                  href={settings.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-xs font-bold text-amber-800 hover:text-amber-950 pt-1 underline"
                >
                  View Exact Map Location & Directions →
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
};
