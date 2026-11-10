import React from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  Calendar, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Navigation, 
  CheckCircle2, 
  Sparkles,
  Building2,
  Stethoscope,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { PageHero } from '../components/PageHero';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal';
import { SITE_URL, getClinicSchema, getPhysicianSchema } from '../data/seoSchemas';

export const Branches = () => {
  const { language } = useLanguage();
  const { settings, doctors } = useClinicData();
  const leadDoctor = doctors[0] || {};

  const branchesData = [
    {
      id: 'vizianagaram',
      nameEn: 'Vizianagaram Main Branch (Gumchi Junction)',
      nameTe: 'విజయనగరం ప్రధాన కేంద్రం (గుమ్చి జంక్షన్)',
      tagEn: 'Main Hospital & 24/7 Surgical Center',
      tagTe: 'ప్రధాన ఆసుపత్రి & 24/7 శస్త్రచికిత్స కేంద్రం',
      tagColor: 'from-amber-500 to-amber-600',
      badgeText: '24x7 Emergency Care',
      image: '/images/clinic-gumchi-exterior.jpg',
      imageFallback: '/images/facility-ot.jpg',
      addressEn: 'Gumchi Junction, Sankaramatam Road (Kota Junction), Vizianagaram – 535002, Andhra Pradesh',
      addressTe: 'గుమ్చి జంక్షన్, శంకరమఠం రోడ్ (కోట జంక్షన్), విజయనగరం – 535002, ఆంధ్రప్రదేశ్',
      timingsEn: 'Mon – Sat: 09:30 AM – 06:30 PM (24x7 Emergency Craniotomy & Trauma Support)',
      timingsTe: 'సోమ – శని: ఉదయం 09:30 – సాయంత్రం 06:30 (24x7 అత్యవసర సర్జరీ సేవలు)',
      phone: '+91 99089 81669',
      phoneRaw: '9908981669',
      altPhone: '+91 92814 00151',
      detailsUrl: '/neurosurgeon-in-vizianagaram/',
      mapsUrl: settings.googleMapsUrl || 'https://maps.google.com/?q=Gumchi+Junction+Vizianagaram',
      highlightsEn: [
        'Advanced Minimally Invasive & Endoscopic Spine Surgery',
        'Complex Brain Tumor Microsurgery & VP Shunts',
        '24x7 Acute Head Injury, Trauma & Craniotomy Facility',
        'Full Inpatient, Post-Op ICU & Diagnostic Coordination'
      ],
      highlightsTe: [
        'అత్యాధునిక ఎండోస్కోపిక్ & మైక్రోస్కోపిక్ వెన్నెముక సర్జరీలు',
        'బ్రెయిన్ ట్యూమర్ మరియు క్లిష్టమైన మెదడు శస్త్రచికిత్సలు',
        '24/7 అత్యవసర తల గాయాల సంరక్షణ మరియు ట్రామా విభాగం',
        'ఇన్‌పేషెంట్, పోస్ట్-ఆపరేటివ్ ICU మరియు రోగ నిర్ధారణ సేవలు'
      ]
    },
    {
      id: 'bobbili',
      nameEn: 'Bobbili Consultation Branch (RTC Complex)',
      nameTe: 'బొబ్బిలి కన్సల్టేషన్ బ్రాంచ్ (RTC కాంప్లెక్స్ ఎదురుగా)',
      tagEn: 'Dedicated Outpatient Consultation Clinic',
      tagTe: 'ప్రత్యేక అవుట్‌పేషెంట్ సంప్రదింపుల క్లినిక్',
      tagColor: 'from-blue-600 to-cyan-600',
      badgeText: 'Tue & Fri OPD Consultations',
      image: '/images/clinic-bobbili-exterior.jpg',
      imageFallback: '/images/hero.jpg',
      addressEn: 'Opp RTC Complex Ingate, beside Choudhary Bar & Restaurant, Bobbili – 535558, Vizianagaram Dist, AP',
      addressTe: 'RTC కాంప్లెక్స్ ఇన్‌గేట్ ఎదురుగా, చౌదరి బార్ & రెస్టారెంట్ పక్కన, బొబ్బిలి – 535558, విజయనగరం జిల్లా, ఆం.ప్ర.',
      timingsEn: 'Every Tuesday & Friday: 04:00 PM – 09:00 PM (Prior Appointment Advised)',
      timingsTe: 'ప్రతి మంగళవారం & శుక్రవారం: సాయంత్రం 04:00 – రాత్రి 09:00 (ముందస్తు బుకింగ్)',
      phone: '+91 99089 81669',
      phoneRaw: '9908981669',
      altPhone: null,
      detailsUrl: '/neurosurgeon-in-bobbili/',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Opp+RTC+Complex+Ingate+Bobbili+Andhra+Pradesh',
      highlightsEn: [
        'Expert Neurological Clinical Evaluations & Second Opinions',
        'MRI, CT Scan Review & Non-Surgical Medical Management',
        'Sciatica, Slip Disc, Cervical Spondylosis & Headache Consults',
        'Direct Surgical Planning & Follow-Up in Vizianagaram Main Center'
      ],
      highlightsTe: [
        'నిపుణులచే క్లినికల్ న్యూరో పరీక్షలు మరియు రెండవ అభిప్రాయం',
        'MRI & CT స్కాన్ సమీక్ష మరియు మందులతో నయం చేసే పద్ధతులు',
        'సయాటికా, స్లిప్ డిస్క్, మెడ నొప్పి & తలనొప్పి సంప్రదింపులు',
        'విజయనగరం మెయిన్ సెంటర్‌లో శస్త్రచికిత్స ప్రణాళిక మరియు ఫాలో-అప్'
      ]
    }
  ];

  return (
    <>
      <SeoHelmet
        title="Brain Spine & Neuro Clinic – Our Branches | Dr. Reddi Sankara Rao"
        description="Visit Dr. Reddi Sankara Rao at Brain Spine & Neuro Clinic branches in Vizianagaram (Gumchi Junction) and Bobbili (Opp RTC Complex). Comprehensive brain, spine and neuro consultations."
        canonical={`${SITE_URL}/branches/`}
        keywords="brain spine and neuro clinic branches, neurosurgeon in vizianagaram, neurosurgeon in bobbili, dr reddi sankara rao branches, clinic locations vizianagaram bobbili"
        schema={[
          getClinicSchema(),
          getPhysicianSchema(leadDoctor)
        ]}
      />

      <PageHero
        badge={language === 'te' ? 'మా క్లినిక్ శాఖలు' : 'Our Clinic Locations'}
        title={
          language === 'te'
            ? 'విజయనగరం & బొబ్బిలి శాఖలు'
            : 'Brain Spine & Neuro Clinic Branches'
        }
        subtitle={
          language === 'te'
            ? 'డా. రెడ్డి శంకర రావు గారి అనుభవజ్ఞులైన మెదడు, వెన్నెముక మరియు నాడీ వైద్య సేవలు విజయనగరం ప్రధాన ఆసుపత్రి మరియు బొబ్బిలి కన్సల్టేషన్ సెంటర్‌లో అందుబాటులో ఉన్నాయి.'
            : 'Access world-class neurosurgical care and spine consultations across our flagship Vizianagaram Surgical Center and Bobbili Outpatient Branch.'
        }
        bgImage="/images/clinic-gumchi-exterior.jpg"
      />

      {/* Main Content */}
      <section className="py-14 sm:py-20 bg-[#FCFAF5]">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 max-w-7xl mx-auto">
          
          {/* Header intro */}
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
              <Building2 className="w-4 h-4 text-amber-600" />
              <span>{language === 'te' ? 'రెండు అనుకూల కేంద్రాలు' : 'Two Convenient Locations'}</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#242424] tracking-tight font-serif">
              {language === 'te'
                ? 'మీకు సమీపంలోని బ్రాంచ్‌ను ఎంచుకోండి'
                : 'Select Your Nearest Consultation Center'}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {language === 'te'
                ? 'విజయనగరంలోని ప్రధాన కేంద్రంలో పూర్తిస్థాయి అధునాతన ఆపరేషన్ థియేటర్ మరియు 24 గంటల అత్యవసర సేవలు అందుబాటులో ఉండగా, బొబ్బిలిలో ప్రత్యేక వారపు ఓపీ సంప్రదింపులు నిర్వహించబడతాయి.'
                : 'Our Vizianagaram flagship operates as a full-fledged surgical facility with 24x7 emergency neurotrauma care, while our Bobbili branch provides accessible outpatient evaluations and post-op follow-ups.'}
            </p>
          </ScrollReveal>

          {/* Branch Cards Grid */}
          <ScrollStagger className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16" staggerDelay={0.12}>
            {branchesData.map((branch) => (
              <ScrollStaggerItem key={branch.id} className="h-full">
                <article className="bg-white rounded-3xl border-2 border-amber-200/90 hover:border-amber-400 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group">
                  
                  {/* Image container */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                    <img 
                      src={branch.image}
                      alt={language === 'te' ? branch.nameTe : branch.nameEn}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = branch.imageFallback;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md bg-gradient-to-r from-amber-600 to-amber-700 border border-amber-300/40 backdrop-blur-xs">
                        <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                        <span>{branch.badgeText}</span>
                      </span>
                    </div>

                    {/* Overlay Title */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-amber-300 text-xs font-bold uppercase tracking-wider block mb-1">
                        {language === 'te' ? branch.tagTe : branch.tagEn}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-black text-white font-serif tracking-tight drop-shadow-md">
                        {language === 'te' ? branch.nameTe : branch.nameEn}
                      </h2>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    
                    {/* Location & Timings Details */}
                    <div className="space-y-4">
                      {/* Address */}
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 shrink-0 mt-0.5">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                            {language === 'te' ? 'పూర్తి చిరునామా' : 'Full Address'}
                          </p>
                          <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                            {language === 'te' ? branch.addressTe : branch.addressEn}
                          </p>
                        </div>
                      </div>

                      {/* Consultation Timings */}
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 shrink-0 mt-0.5">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                            {language === 'te' ? 'సంప్రదింపు సమయాలు' : 'Consultation Timings'}
                          </p>
                          <p className="text-sm font-semibold text-slate-800 leading-relaxed">
                            {language === 'te' ? branch.timingsTe : branch.timingsEn}
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start gap-3">
                        <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 shrink-0 mt-0.5">
                          <PhoneCall className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                            {language === 'te' ? 'అపాయింట్‌మెంట్ ఫోన్ నంబర్' : 'Direct Helpline'}
                          </p>
                          <p className="text-sm font-bold text-slate-900">
                            <a 
                              href={`tel:${branch.phoneRaw}`} 
                              className="text-amber-800 hover:text-amber-600 transition-colors"
                            >
                              {branch.phone}
                            </a>
                            {branch.altPhone && (
                              <span className="text-slate-500 text-xs font-normal ml-2">
                                / <a href="tel:9281400151" className="hover:text-amber-600">{branch.altPhone}</a>
                              </span>
                            )}
                          </p>
                        </div>
                      </div>

                      {/* Key Clinical Features */}
                      <div className="pt-2 border-t border-slate-100">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                          {language === 'te' ? 'ముఖ్య సేవలు & ప్రత్యేకతలు' : 'Branch Highlights'}
                        </p>
                        <ul className="space-y-2">
                          {(language === 'te' ? branch.highlightsTe : branch.highlightsEn).map((h, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action Buttons: View Details & Get Directions */}
                    <div className="pt-4 border-t border-slate-100 space-y-2.5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link
                          to={branch.detailsUrl}
                          className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-black bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/40 border border-amber-300 transition-all text-center"
                        >
                          <span>{language === 'te' ? 'పూర్తి వివరాలు చూడండి' : 'View Branch Details'}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>

                        <a
                          href={branch.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 transition-all text-center"
                        >
                          <Navigation className="w-4 h-4 text-amber-400" />
                          <span>{language === 'te' ? 'దిశలు పొందండి' : 'Get Directions'}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                        </a>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5 pt-1">
                        <a
                          href={`tel:${branch.phoneRaw}`}
                          className="py-2 px-3 rounded-lg text-xs font-bold text-center bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors flex items-center justify-center gap-1.5"
                        >
                          <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
                          <span>{language === 'te' ? 'కాల్ చేయండి' : 'Call Now'}</span>
                        </a>

                        <Link
                          to="/appointment"
                          className="py-2 px-3 rounded-lg text-xs font-bold text-center bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 transition-colors flex items-center justify-center gap-1.5"
                        >
                          <Calendar className="w-3.5 h-3.5 text-amber-600" />
                          <span>{language === 'te' ? 'అపాయింట్‌మెంట్' : 'Book Visit'}</span>
                        </Link>
                      </div>
                    </div>

                  </div>
                </article>
              </ScrollStaggerItem>
            ))}
          </ScrollStagger>

          {/* Quick Comparison Note */}
          <ScrollReveal className="bg-gradient-to-br from-amber-50 via-white to-amber-50/60 rounded-3xl border border-amber-200 p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-left space-y-1 sm:max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block">
                  {language === 'te' ? 'రోగులకు గమనిక' : 'Clinical Logistics Notice'}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-serif">
                  {language === 'te'
                    ? 'శస్త్రచికిత్సలు మరియు అత్యవసర సేవల కొరకు'
                    : 'Surgeries & 24x7 Emergency Services'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {language === 'te'
                    ? 'బొబ్బిలి బ్రాంచ్ ఓపీడీ సంప్రదింపుల కోసం ప్రత్యేకించబడింది. శస్త్రచికిత్సలు, అధునాతన ఎండోస్కోపిక్ వెన్నెముక సర్జరీలు మరియు 24 గంటల ఎమర్జెన్సీ చికిత్సలు విజయనగరం ప్రధాన ఆసుపత్రిలో నిర్వహించబడతాయి.'
                    : 'The Bobbili clinic functions strictly for outpatient evaluations. Advanced endoscopic spine procedures, brain surgery, and round-the-clock neurotrauma care are performed at our fully equipped Vizianagaram main hospital.'}
                </p>
              </div>

              <Link
                to="/appointment"
                className="shrink-0 inline-flex items-center gap-2 py-3 px-6 rounded-xl text-sm font-black bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 shadow-md shadow-amber-500/25 hover:shadow-lg hover:shadow-amber-500/40 border border-amber-300 transition-all whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>{language === 'te' ? 'ఆన్‌లైన్ బుకింగ్' : 'Book Consultation'}</span>
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </>
  );
};

export default Branches;
