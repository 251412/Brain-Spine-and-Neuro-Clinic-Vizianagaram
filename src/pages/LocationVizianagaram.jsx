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
  Award, 
  Sparkles, 
  HelpCircle,
  ArrowRight,
  Stethoscope,
  Activity
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { PageHero } from '../components/PageHero';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal';
import { SITE_URL, getPhysicianSchema, getClinicSchema, getFAQSchema } from '../data/seoSchemas';
import { seoServices } from '../data/seoServicesData';

export const LocationVizianagaram = () => {
  const { language } = useLanguage();
  const { settings, doctors } = useClinicData();
  const leadDoctor = doctors[0] || {};
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqs = [
    {
      qEn: "Where is Dr. Reddi Sankara Rao's clinic located in Vizianagaram?",
      qTe: "విజయనగరంలో డా. రెడ్డి శంకర రావు గారి క్లినిక్ ఎక్కడ ఉంది?",
      aEn: "The main clinic is conveniently located at Gumchi Junction, Sankaramatam Road (Kota Junction), Vizianagaram – 535002, Andhra Pradesh. It is easily accessible by bus, auto, and personal vehicles with ample patient parking and 24x7 emergency drop-off.",
      aTe: "ప్రధాన క్లినిక్ విజయనగరంలోని గుమ్చి జంక్షన్, శంకరమఠం రోడ్ (కోట జంక్షన్), పిన్‌కోడ్ 535002 వద్ద ఉంది. ఇది RTC బస్టాండ్ మరియు రైల్వే స్టేషన్ నుండి సులభంగా చేరుకోగల ప్రధాన కూడలిలో ఉంది."
    },
    {
      qEn: "What are the OPD consultation timings in Vizianagaram?",
      qTe: "విజయనగరంలో డాక్టర్ గారి ఓపీ సంప్రదింపు సమయాలు ఏమిటి?",
      aEn: "Regular outpatient (OPD) consultations run Monday through Saturday from 09:30 AM to 06:30 PM. Emergency head injury, trauma, and acute neurosurgical cases are received and treated 24 hours a day, 7 days a week.",
      aTe: "సాధారణ ఓపీ సంప్రదింపులు సోమవారం నుండి శనివారం వరకు ఉదయం 09:30 నుండి సాయంత్రం 06:30 వరకు ఉంటాయి. అత్యవసర తల గాయాలు మరియు న్యూరో కేసులకు 24 గంటలూ వైద్య సదుపాయం ఉంటుంది."
    },
    {
      qEn: "What spine and brain surgeries are performed in Vizianagaram?",
      qTe: "విజయనగరంలో ఏయే శస్త్రచికిత్సలు నిర్వహించబడతాయి?",
      aEn: "Dr. Rao performs Endoscopic Lumbar Discectomy (stitchless keyhole spine surgery), microscopic slip disc surgery, brain tumor resections, microvascular decompression for trigeminal neuralgia, VP shunt surgery, and acute emergency craniotomies for brain hemorrhage and trauma.",
      aTe: "ఎండోస్కోపిక్ కీహోల్ లంబార్ డిస్సెక్టమీ (కుట్లు లేని స్పైన్ సర్జరీ), స్లిప్ డిస్క్ చికిత్స, బ్రెయిన్ ట్యూమర్ సర్జరీలు, ముఖం నొప్పికి MVD సర్జరీ, VP షంట్ మరియు తల గాయాల అత్యవసర ఆపరేషన్లు విజయనగరంలోనే అత్యాధునిక ప్రమాణాలతో నిర్వహించబడతాయి."
    },
    {
      qEn: "Do I need an appointment before visiting the Vizianagaram clinic?",
      qTe: "విజయనగరం క్లినిక్‌కు వచ్చే ముందు అపాయింట్‌మెంట్ తీసుకోవడం తప్పనిసరిగా ఉండాలా?",
      aEn: "Prior appointment booking is highly recommended to minimize waiting times and ensure slot availability. However, acute emergency cases and accident trauma are accepted immediately without prior booking.",
      aTe: "వేచి ఉండే సమయాన్ని తగ్గించుకోవడానికి ముందుగా అపాయింట్‌మెంట్ బుక్ చేసుకోవడం మంచిది. అత్యవసర కేసులు మరియు ప్రమాద బాధితులకు ఎలాంటి ముందస్తు బుకింగ్ లేకుండా తక్షణ చికిత్స అందించబడుతుంది."
    }
  ];

  const pageCanonical = `${SITE_URL}/neurosurgeon-in-vizianagaram/`;
  const schemaList = [
    getPhysicianSchema(leadDoctor),
    getClinicSchema(),
    getFAQSchema(faqs.map(f => ({ question: f.qEn, answer: f.aEn })))
  ];

  return (
    <div className="min-h-screen bg-[#FCFAF5]">
      <SeoHelmet
        title="Neurosurgeon in Vizianagaram | Dr. Reddi Sankara Rao"
        description="Consult Dr. Reddi Sankara Rao, Senior Consultant Neurosurgeon in Vizianagaram at Gumchi Junction Clinic. Expert brain, spine, slip disc & 24x7 trauma care."
        canonicalUrl={pageCanonical}
        schema={schemaList}
        breadcrumbs={[
          { label: language === 'te' ? 'లొకేషన్స్' : 'Locations', to: '/contact' },
          { label: 'Vizianagaram', url: pageCanonical }
        ]}
      />

      <PageHero
        badge={language === 'te' ? 'ప్రధాన క్లినిక్ • విజయనగరం' : 'Main Center of Excellence • Vizianagaram'}
        badgeIcon={<MapPin className="w-3.5 h-3.5 text-amber-400" />}
        title={language === 'te' ? 'విజయనగరంలో ప్రముఖ న్యూరోసర్జన్ & స్పైన్ సర్జన్' : 'Neurosurgeon in Vizianagaram – Dr. Reddi Sankara Rao'}
        subtitle={language === 'te' ? 'గుమ్చి జంక్షన్ క్లినిక్ – అత్యాధునిక బ్రెయిన్, స్పైన్ & న్యూరో కేర్' : 'Brain Spine & Neuro Clinic – Gumchi Junction, Sankaramatam Road'}
        description={language === 'te'
          ? 'బెంగళూరు నారాయణ హృదయాలయంలో శిక్షణ పొందిన డా. రెడ్డి శంకర రావు గారి పర్యవేక్షణలో మెదడు, వెన్నెముక మరియు నరాల సమస్యలకు అంతర్జాతీయ స్థాయి వైద్య సేవలు.'
          : 'Leading neurosurgical and spine care in Vizianagaram by Dr. Reddi Sankara Rao. Advanced microscopic brain surgeries, stitchless endoscopic spine procedures, and 24x7 trauma protocols.'}
        breadcrumbs={[{ label: 'Neurosurgeon in Vizianagaram' }]}
        bgImage="/images/clinic-exterior-pks.jpg"
      />

      {/* Main Clinic Header & Contact Actions */}
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-12 sm:py-16 space-y-12">
        
        {/* Authority Doctor Card */}
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-xl shadow-amber-500/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-3xl overflow-hidden border-4 border-amber-200 shadow-xl bg-slate-900">
                <img
                  src="/images/dr-reddi-sankara-rao.jpg"
                  alt="Dr. Reddi Sankara Rao - Neurosurgeon in Vizianagaram"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                <span>APMC / 85415 • Narayana Hrudayalaya Bengaluru Alumnus</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {language === 'te' ? 'డా. రెడ్డి శంకర రావు' : 'Dr. Reddi Sankara Rao'}
              </h2>
              <p className="text-sm sm:text-base font-bold text-amber-800">
                {language === 'te'
                  ? 'వ్యవస్థాపకులు & చీఫ్ న్యూరోసర్జన్ – బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్, విజయనగరం'
                  : 'Founder & Senior Consultant Neurosurgeon – Brain Spine & Neuro Clinic, Vizianagaram'}
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {language === 'te'
                  ? 'డాక్టర్ రెడ్డి శంకర రావు గారు విజయనగరం మరియు పరిసర జిల్లాల ప్రజలకు మెట్రో స్థాయి అత్యాధునిక శస్త్రచికిత్సా నైపుణ్యాన్ని అందిస్తున్నారు. నైతిక వైద్య ప్రమాణాలు, శస్త్రచికిత్సా ఖచ్చితత్వంతో వేలాది మంది రోగులకు విజయవంతమైన చికిత్స అందించారు.'
                  : 'Dr. Reddi Sankara Rao brings over 11 years of surgical experience in complex neurosurgery to Vizianagaram. His clinical ethos focuses on ethical consultation, prioritizing conservative non-surgical management whenever possible and employing microscopic and keyhole endoscopic techniques when surgical intervention is required.'}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'te' ? 'అపాయింట్‌మెంట్ బుక్ చేయండి' : 'Book Vizianagaram Appointment'}</span>
                </Link>

                <a
                  href="tel:9908981669"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-amber-50 text-slate-900 font-bold text-xs sm:text-sm border border-amber-300 shadow-xs transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-amber-700" />
                  <span>Call: +91 99089 81669</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Location Details & Interactive Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-black uppercase text-amber-800 tracking-wider">
                {language === 'te' ? 'క్లినిక్ సమాచారం' : 'Primary Hospital Center'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Gumchi Junction Main Clinic
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Address:</strong>
                  <p>Gumchi Junction, Sankaramatam Road (Kota Junction), Vizianagaram, Andhra Pradesh – 535002</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Consultation Timings:</strong>
                  <p>Monday – Saturday: 09:30 AM – 06:30 PM</p>
                  <span className="inline-block mt-1 font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded text-[11px] border border-rose-200">
                    24×7 Emergency Trauma & Stroke Response
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <PhoneCall className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Direct Telephone:</strong>
                  <p className="font-bold text-slate-900">+91 99089 81669 / +91 92814 00151</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-amber-200/80">
              <a
                href={settings.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl font-black text-xs bg-slate-950 hover:bg-slate-900 text-amber-300 flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>Open in Google Maps & Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Google Maps Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-amber-300 shadow-md min-h-[350px] bg-slate-100 relative">
            <iframe
              title="Dr. Reddi Sankara Rao Clinic Vizianagaram Location"
              src={settings.mapEmbedUrl}
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>

        </div>

        {/* Brain & Spine Conditions Treated in Vizianagaram */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 text-amber-600" />
              <span>Specialised Services in Vizianagaram</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Conditions Evaluated & Treated at Vizianagaram Center
            </h3>
            <p className="text-slate-600 text-sm">
              Explore specialized condition guides and schedule focused consultations with Dr. Reddi Sankara Rao.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {seoServices.map((svc) => (
              <Link
                key={svc.slug}
                to={`/${svc.slug}/`}
                className="p-4 rounded-2xl bg-white border border-amber-200/80 hover:border-amber-400 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 block w-fit mb-2">
                    {svc.category}
                  </span>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-amber-800 transition-colors">
                    {language === 'te' ? svc.titleTe : svc.titleEn}
                  </h4>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-amber-700">
                  <span>{language === 'te' ? 'వివరాలు' : 'Learn More'}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Vizianagaram Consultation FAQs */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Vizianagaram Clinic FAQs</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Frequently Asked Questions – Vizianagaram Consultations
          </h3>

          <div className="space-y-3 pt-2">
            {faqs.map((faq, idx) => {
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

