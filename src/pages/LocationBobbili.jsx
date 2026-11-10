import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  Calendar, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Navigation, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Info
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { PageHero } from '../components/PageHero';
import { ScrollReveal } from '../components/ScrollReveal';
import { SITE_URL, getPhysicianSchema, getClinicSchema, getFAQSchema } from '../data/seoSchemas';

export const LocationBobbili = () => {
  const { language } = useLanguage();
  const { doctors } = useClinicData();
  const leadDoctor = doctors[0] || {};
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const bobbiliFaqs = [
    {
      qEn: "When does Dr. Reddi Sankara Rao consult patients in Bobbili?",
      qTe: "డా. రెడ్డి శంకర రావు గారు బొబ్బిలిలో ఎప్పుడు రోగులను చూస్తారు?",
      aEn: "Dr. Reddi Sankara Rao conducts regular outpatient consultations at the Bobbili Branch Clinic every Tuesday and Friday between 04:00 PM and 09:00 PM.",
      aTe: "డా. రెడ్డి శంకర రావు గారు ప్రతి మంగళవారం మరియు శుక్రవారం సాయంత్రం 4:00 గంటల నుండి రాత్రి 9:00 గంటల వరకు బొబ్బిలి బ్రాంచ్ క్లినిక్‌లో అందుబాటులో ఉంటారు."
    },
    {
      qEn: "What is the exact location of the Bobbili clinic?",
      qTe: "బొబ్బిలి క్లినిక్ ఎక్కడ ఉంది?",
      aEn: "The clinic is situated Opp RTC Complex Ingate, beside Choudhary Bar & Restaurant, Bobbili, Andhra Pradesh – 535558. It is conveniently located directly adjacent to the main transit hub.",
      aTe: "క్లినిక్ బొబ్బిలిలోని RTC బస్టాండ్ కాంప్లెక్స్ ఇన్‌గేట్ ఎదురుగా, చౌదరి బార్ & రెస్టారెంట్ పక్కన ఉంది."
    },
    {
      qEn: "Are surgeries performed at the Bobbili clinic?",
      qTe: "బొబ్బిలి క్లినిక్‌లో ఆపరేషన్లు చేస్తారా?",
      aEn: "No. The Bobbili facility functions strictly as a dedicated Outpatient Consultation & Follow-Up Clinic. Patients undergo detailed clinical evaluations, MRI reviews, and conservative medical management in Bobbili. If surgical procedures (such as endoscopic discectomy or cranial surgery) or 24/7 emergency care are indicated, they are scheduled and performed at the fully equipped Main Center in Vizianagaram.",
      aTe: "లేదు. బొబ్బిలి బ్రాంచ్ కేవలం అవుట్‌పేషెంట్ (OPD) సంప్రదింపులు, రోగ నిర్ధారణ మరియు ఫాలో-అప్ చెకప్‌ల కోసం మాత్రమే పనిచేస్తుంది. సర్జరీ లేదా అత్యవసర చికిత్స అవసరమైనప్పుడు రోగులకు విజయనగరంలోని ప్రధాన ఆసుపత్రిలో శస్త్రచికిత్స నిర్వహిస్తారు."
    },
    {
      qEn: "How can I book an appointment for Bobbili clinic?",
      qTe: "బొబ్బిలి క్లినిక్ కోసం అపాయింట్‌మెంట్ ఎలా బుక్ చేసుకోవాలి?",
      aEn: "You can book an appointment by calling the Bobbili direct reception helpline at +91 99511 42275 or the main clinic number at +91 99089 81669, or by submitting an appointment request online through this website.",
      aTe: "మీరు బొబ్బిలి క్లినిక్ హెల్ప్‌లైన్ నంబర్ +91 99511 42275 లేదా +91 99089 81669 కు కాల్ చేయడం ద్వారా లేదా ఈ వెబ్‌సైట్‌లోని ఆన్‌లైన్ బుకింగ్ ఫారమ్ ద్వారా అపాయింట్‌మెంట్ పొందవచ్చు."
    }
  ];

  const pageCanonical = `${SITE_URL}/neurosurgeon-in-bobbili/`;
  const schemaList = [
    getPhysicianSchema(leadDoctor),
    getClinicSchema(),
    getFAQSchema(bobbiliFaqs.map(f => ({ question: f.qEn, answer: f.aEn })))
  ];

  return (
    <div className="min-h-screen bg-[#FCFAF5]">
      <SeoHelmet
        title="Neurosurgeon in Bobbili | Dr. Reddi Sankara Rao"
        description="Expert neurosurgery consultation in Bobbili by Dr. Reddi Sankara Rao every Tuesday and Friday (4 PM - 9 PM) at RTC Complex Ingate branch. Spine & brain care."
        canonicalUrl={pageCanonical}
        schema={schemaList}
        breadcrumbs={[
          { label: language === 'te' ? 'లొకేషన్స్' : 'Locations', to: '/contact' },
          { label: 'Bobbili', url: pageCanonical }
        ]}
      />

      <PageHero
        badge={language === 'te' ? 'ఓపీ కన్సల్టేషన్ బ్రాంచ్ • బొబ్బిలి' : 'Outpatient Consultation Branch • Bobbili'}
        badgeIcon={<Clock className="w-3.5 h-3.5 text-amber-400" />}
        title={language === 'te' ? 'బొబ్బిలిలో నిపుణులైన న్యూరోసర్జన్ సంప్రదింపులు' : 'Neurosurgeon in Bobbili – Dr. Reddi Sankara Rao'}
        subtitle={language === 'te' ? 'ప్రతి మంగళవారం & శుక్రవారం సాయంత్రం 4 PM – 9 PM' : 'Weekly Specialist Consultations: Tuesdays & Fridays (4 PM – 9 PM)'}
        description={language === 'te'
          ? 'బొబ్బిలి మరియు పరిసర ప్రాంతాల ప్రజల సౌకర్యార్థం డా. రెడ్డి శంకర రావు గారి ప్రత్యేక ఓపీ సంప్రదింపులు RTC బస్టాండ్ కాంప్లెక్స్ ఎదురుగా లభ్యం.'
          : 'Providing accessible, metro-trained brain and spine surgical consultations directly to patients in Bobbili, Parvathipuram, and neighboring areas.'}
        breadcrumbs={[{ label: 'Neurosurgeon in Bobbili' }]}
        bgImage="/images/clinic-bobbili-exterior.jpg"
      />

      {/* Important Clinical Nature Clarification Alert */}
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 pt-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border-2 border-amber-300 text-slate-800 text-xs sm:text-sm flex items-start gap-3.5 shadow-xs">
          <Info className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="font-extrabold text-amber-950 block">
              {language === 'te' ? 'ముఖ్య గమనిక: బొబ్బిలి క్లినిక్ సేవల వివరాలు' : 'Service Notice: Bobbili Branch Consultation Clinic'}
            </strong>
            <p className="text-slate-700 leading-relaxed">
              {language === 'te'
                ? 'బొబ్బిలి బ్రాంచ్ అనేది ప్రత్యేక ఔట్ పేషెంట్ (OPD) సంప్రదింపు కేంద్రం. డాక్టర్ గారు ప్రతి మంగళవారం మరియు శుక్రవారం సాయంత్రం 4 నుండి 9 గంటల వరకు ఇక్కడ పేషెంట్లను నేరుగా చూస్తారు. అత్యవసర కేసులు, అధునాతన శస్త్రచికిత్సలు మరియు 24/7 అత్యవసర సేవలు విజయనగరం ప్రధాన క్లినిక్‌లో అందించబడతాయి.'
                : 'The Bobbili Branch operates specifically as an Outpatient (OPD) Evaluation & Follow-up Clinic on Tuesdays and Fridays (4 PM – 9 PM). Non-surgical care, MRI reviews, and specialist second opinions are conducted here. Surgical procedures, day-care endoscopic discectomies, and 24x7 emergency trauma cases are accommodated at our Main Surgical Center in Vizianagaram.'}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-10 sm:py-14 space-y-12">
        
        {/* Doctor Spotlight */}
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-xl shadow-amber-500/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-3xl overflow-hidden border-4 border-amber-200 shadow-xl bg-slate-900">
                <img
                  src="/images/dr-reddi-sankara-rao.jpg"
                  alt="Dr. Reddi Sankara Rao - Neurosurgeon in Bobbili"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>Narayana Hrudayalaya Alumnus • 11+ Years Experience</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {language === 'te' ? 'డా. రెడ్డి శంకర రావు – బొబ్బిలి సంప్రదింపులు' : 'Consult Dr. Reddi Sankara Rao in Bobbili'}
              </h2>
              <p className="text-sm font-bold text-amber-800">
                MBBS, MS, MCh (Neurosurgery) • APMC / 85415 Verified
              </p>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                {language === 'te'
                  ? 'బొబ్బిలి ప్రాంత రోగులు మెదడు, వెన్నెముక లేదా నరాల సమస్యల కోసం దూర ప్రాంతాలకు వెళ్లకుండా, స్థానికంగానే నారాయణ హృదయాలయ నిపుణుల సలహాలు పొందేందుకు ఈ బ్రాంచ్ స్థాపించబడింది. సయాటికా, స్లిప్ డిస్క్, మెడ నొప్పి మరియు నరాల ఒత్తిడి సమస్యలకు ఇక్కడ పూర్తి పరీక్షలు నిర్వహించబడతాయి.'
                  : 'Patients from Bobbili, Salur, Badangi, and Parvathipuram Manyam can now access top-tier neurosurgical consultation without traveling to distant metropolitan centers. Dr. Rao personally reviews your MRI reports, symptoms, and functional limitations to formulate targeted treatment plans.'}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'te' ? 'బొబ్బిలి అపాయింట్‌మెంట్ బుక్ చేయండి' : 'Book Bobbili Consultation Slot'}</span>
                </Link>

                <a
                  href="tel:9951142275"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-amber-50 text-slate-900 font-bold text-xs sm:text-sm border border-amber-300 shadow-xs transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-amber-700" />
                  <span>Call: +91 99511 42275</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Bobbili Clinic Details & Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-black uppercase text-amber-800 tracking-wider">
                Bobbili Branch Center
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Opp RTC Complex Ingate
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Location Address:</strong>
                  <p>Opp RTC Complex Ingate, beside Choudhary Bar & Restaurant, Bobbili, Andhra Pradesh – 535558</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Consultation Timings:</strong>
                  <p className="font-bold text-slate-900">Tuesday: 04:00 PM – 09:00 PM</p>
                  <p className="font-bold text-slate-900">Friday: 04:00 PM – 09:00 PM</p>
                  <p className="text-slate-500 text-xs mt-0.5">Prior booking recommended</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PhoneCall className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Contact Telephone:</strong>
                  <p className="font-bold text-slate-900">+91 99511 42275 / +91 99089 81669</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-amber-200/80">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Opp+RTC+Complex+Ingate+beside+Choudhary+Bar+and+Restaurant+Bobbili"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-black text-xs bg-slate-950 hover:bg-slate-900 text-amber-300 flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Get Directions to Bobbili Clinic</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-amber-300 shadow-md min-h-[350px] bg-slate-100 relative">
            <iframe
              title="Dr. Reddi Sankara Rao Bobbili Branch Location"
              src="https://maps.google.com/maps?q=Opp+RTC+Complex+Ingate,+beside+Choudhary+Bar+%26+Restaurant,+Bobbili,+Andhra+Pradesh,+India&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>

        {/* Conditions Consulted in Bobbili */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              {language === 'te' ? 'బొబ్బిలి క్లినిక్‌లో సంప్రదించగల వ్యాధులు' : 'Services & Conditions Evaluated at Bobbili'}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Receive expert medical opinions, non-surgical prescriptions, and post-surgery checkups in Bobbili.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-800">
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Sciatica & Lower Back Pain</span>
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Slip Disc (Lumbar & Cervical)</span>
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Cervical Spondylosis & Neck Pain</span>
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Brain Tumour Diagnosis & Second Opinions</span>
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Trigeminal Neuralgia Facial Pain</span>
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Stroke Follow-up & Epilepsy Care</span>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Bobbili Consultation FAQs</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Frequently Asked Questions – Bobbili Branch
          </h3>

          <div className="space-y-3 pt-2">
            {bobbiliFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="rounded-2xl border border-amber-200/80 bg-[#FCFAF5] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                  >
                    <span>{language === 'te' ? faq.qTe : faq.qEn}</span>
                    <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-amber-200/50 bg-white">
                      <p>{language === 'te' ? faq.aTe : faq.aEn}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
