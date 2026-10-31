import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Heart, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  Brain,
  Calendar,
  PhoneCall,
  GraduationCap,
  Microscope
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { ClinicLocationCard } from '../components/ClinicLocationCard';
import { PageHero } from '../components/PageHero';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal';

export const AboutUs = () => {
  const { language, t } = useLanguage();
  const { settings } = useClinicData();

  return (
    <div className="min-h-screen bg-[#FCFAF5]">
      <SeoHelmet 
        title={language === 'te' ? 'మా గురించి - డా. రెడ్డి శంకర రావు | బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్' : 'About Us - Dr. Reddi Sankara Rao | Brain Spine & Neuro Clinic'}
        description="Dr. Reddi Sankara Rao, Senior Consultant Neurosurgeon in Vizianagaram. Advanced Brain & Spine Surgical Care with Precision and Compassion. Narayana Hrudayalaya trained."
      />

      {/* Hero Banner (Full-Width Premium Dark Navy Medical Hero with Gold Accent & Breadcrumbs) */}
      <PageHero
        badge={language === 'te' ? 'నారాయణ హృదయాలయ బెంగళూరు పూర్వ విద్యార్థి' : 'Trained at Premier Institutions (Narayana Hrudayalaya, Bengaluru)'}
        title={language === 'te' ? 'డా. రెడ్డి శంకర రావు' : 'Dr. Reddi Sankara Rao'}
        subtitle={language === 'te' ? 'సీనియర్ కన్సల్టెంట్ న్యూరో సర్జన్ - విజయనగరం' : 'Senior Consultant Neurosurgeon in Vizianagaram'}
        description={language === 'te' 
          ? 'ఖచ్చితత్వం మరియు కారుణ్యంతో అత్యాధునిక మెదడు & వెన్నెముక శస్త్రచికిత్స సంరక్షణ' 
          : 'Advanced Brain & Spine Surgical Care with Precision and Compassion'}
        breadcrumbs={[{ label: language === 'te' ? 'మా గురించి' : 'About Us' }]}
        bgImage="/images/facility-ot.jpg"
      />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-12 sm:py-16 space-y-16 sm:space-y-24">
        
        {/* Doctor Spotlight Card (Exact format & content from user image 2, with doctor photo from image 3) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-amber-400/40 shadow-xl shadow-amber-500/5 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Doctor Photo (Image 3) with 11+ Years Badge */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal direction="left" distance={32}>
                <div className="relative rounded-3xl overflow-hidden border-4 border-amber-100 shadow-2xl bg-slate-900 group">
                  <img
                    src="/images/dr-reddi-sankara-rao.jpg"
                    alt="Dr. Reddi Sankara Rao - Senior Consultant Neurosurgeon"
                    className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  />

                  {/* Floating Experience Badge with Gold Accent */}
                  <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:left-5 p-3.5 sm:p-4 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-amber-400/40 shadow-2xl flex items-center gap-3.5 text-white">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black flex items-center justify-center shrink-0 shadow-md">
                      <Brain className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-base sm:text-lg font-black text-white leading-tight">
                        11+ Years Experience
                      </div>
                      <div className="text-xs font-bold text-amber-400">
                        Complex Neurosurgery
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Doctor Biography & Content */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal direction="right" distance={32}>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-300 mb-2">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>APMC / 85415 (Andhra Pradesh Medical Council Verified)</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {language === 'te' ? 'డా. రెడ్డి శంకర రావు' : 'Dr. Reddi Sankara Rao'}
                  </h2>
                  <p className="text-base sm:text-lg font-bold text-amber-700 mt-1">
                    {language === 'te' ? 'సీనియర్ కన్సల్టెంట్ న్యూరో సర్జన్' : 'Senior Consultant Neurosurgeon'}
                  </p>
                </div>

                {/* Bio Paragraphs */}
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mt-4">
                  <p>
                    {language === 'te' ? (
                      <>
                        <strong>డాక్టర్ రెడ్డి శంకర రావు</strong> గారు విజయనగరంలో <strong>సాయి శంకరరావు బ్రెయిన్, స్పైన్ & న్యూరో క్లినిక్</strong> వ్యవస్థాపకులు. బెంగళూరులోని ప్రతిష్టాత్మక <strong>నారాయణ హృదయాలయ</strong> వంటి అగ్రగామి సంస్థలలో న్యూరో సర్జరీలో విశేష శిక్షణ మరియు అనుభవం పొంది, మెట్రో స్థాయి అత్యాధునిక శస్త్రచికిత్సా నైపుణ్యాన్ని విజయనగరం ప్రాంత ప్రజలకు అందుబాటులోకి తెచ్చారు.
                      </>
                    ) : (
                      <>
                        <strong>Dr. Reddi Sankara Rao</strong> is the founder of <strong>Sai Sankararao Brain, Spine & Neuro Clinic</strong> in Vizianagaram. With a distinguished background in neurosurgery from premier institutions like <strong>Narayana Hrudayalaya, Bengaluru</strong>, Dr. Rao brings metro-level surgical expertise to the district of Vizianagaram.
                      </>
                    )}
                  </p>

                  <p>
                    {language === 'te' ? (
                      <>
                        ఆయన వైద్య విధానం <strong>నైతిక వైద్య ప్రమాణాలు, రోగి-కేంద్రీకృత సంరక్షణ మరియు శస్త్రచికిత్సా ఖచ్చితత్వం</strong> అనే పునాదులపై ఆధారపడింది. డాక్టర్ రావు గారు మైక్రోస్కోపిక్ మరియు ఎండోస్కోపిక్ (కీహోల్) ఆధునిక పద్ధతులలో ప్రత్యేక నైపుణ్యం కలిగి, రోగులు వేగంగా కోలుకునేలా అత్యంత ఆధునిక మినిమల్లీ ఇన్వాసివ్ విధానాల ద్వారా చికిత్స అందిస్తారు.
                      </>
                    ) : (
                      <>
                        His practice is built on the pillars of <strong>ethical medical practice, patient-centric care, and surgical precision</strong>. Dr. Rao specializes in both microscopic and endoscopic (keyhole) procedures, ensuring that patients receive the most advanced minimally invasive treatments available today.
                      </>
                    )}
                  </p>

                  <p>
                    {language === 'te' ? (
                      <>
                        స్థానిక ప్రజలకు సేవ చేయాలనే సంకల్పంతో, అత్యాధునిక నాణ్యమైన మెదడు మరియు వెన్నెముక సంరక్షణను అందరికీ అందుబాటులో మరియు న్యాయమైన ఖర్చుతో అందిస్తున్నారు. తద్వారా సంక్లిష్టమైన లేదా అత్యవసర శస్త్రచికిత్సల కోసం రోగులు సుదూర మెట్రో నగరాలకు ప్రయాణించాల్సిన అవసరాన్ని తొలగించారు.
                      </>
                    ) : (
                      <>
                        Passionate about serving his community, he ensures that high-quality brain and spine care is accessible and affordable, eliminating the need for patients to travel to distant cities for critical surgeries.
                      </>
                    )}
                  </p>
                </div>

                {/* Action Buttons with Logo Palette */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100 mt-6">
                  <Link
                    to={`/appointment?doctor=${encodeURIComponent('Dr. Reddi Sankara Rao')}`}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/35 transition-all transform active:scale-95"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{language === 'te' ? 'అపాయింట్‌మెంట్ బుక్ చేయండి' : 'Book Appointment'}</span>
                  </Link>

                  <a
                    href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-black text-sm bg-white hover:bg-amber-50 text-slate-950 border-2 border-amber-500 shadow-xs hover:shadow transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-amber-600" />
                    <span>{language === 'te' ? 'ఇప్పుడే కాల్ చేయండి' : 'Call Now'}</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>

        {/* Clinical Qualifications & Key Specialties Grid */}
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
          <ScrollStaggerItem direction="up" distance={28}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/60 shadow-sm space-y-3 hover:shadow-md transition-shadow h-full">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                {language === 'te' ? 'విద్యార్హతలు & శిక్షణ' : 'Premier Credentials'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                MBBS, MS, MCh (Neurosurgery). Trained at <strong>Narayana Hrudayalaya, Bengaluru</strong>, specializing in complex cranial micro-dissections and advanced spinal instrumentation.
              </p>
            </div>
          </ScrollStaggerItem>

          <ScrollStaggerItem direction="up" distance={28}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/60 shadow-sm space-y-3 hover:shadow-md transition-shadow h-full">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center">
                <Microscope className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                {language === 'te' ? 'కీహోల్ & మైక్రోసర్జరీ' : 'Minimally Invasive Techniques'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pioneering keyhole microscopic & endoscopic approaches that preserve healthy brain and muscle tissues, minimizing postoperative pain and hospital stay.
              </p>
            </div>
          </ScrollStaggerItem>

          <ScrollStaggerItem direction="up" distance={28}>
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/60 shadow-sm space-y-3 hover:shadow-md transition-shadow h-full">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60 flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-lg">
                {language === 'te' ? 'నైతిక & కారుణ్య వైద్యం' : 'Ethical, Patient-First Care'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every surgical recommendation is backed by strict clinical necessity. Exhaustive conservative therapies are explored first before considering surgery.
              </p>
            </div>
          </ScrollStaggerItem>
        </ScrollStagger>

        {/* Hospital Mission, Vision & Core Values */}
        <section className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <ScrollReveal direction="left" distance={28}>
              <div className="bg-gradient-to-br from-amber-50/70 to-white rounded-3xl p-8 sm:p-10 border border-amber-200/80 shadow-xs space-y-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black flex items-center justify-center shadow-md">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {t.about.missionTitle}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {language === 'te'
                    ? 'విజయనగరం మరియు ఉత్తరాంధ్ర ప్రజలకు ప్రపంచ స్థాయి న్యూరో మరియు వెన్నెముక శస్త్రచికిత్స సేవలను ఖచ్చితత్వం, నైతికత మరియు అత్యంత కారుణ్యంతో అందుబాటులోకి తేవడమే మా ధ్యేయం.'
                    : 'To provide compassionate, evidence-based, and world-class neurological and spine surgical care to the people of Vizianagaram and North Andhra, eliminating the need to travel far for advanced care.'}
                </p>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal direction="right" distance={28}>
              <div className="bg-gradient-to-br from-[#060D1A] to-[#0f1d38] text-white rounded-3xl p-8 sm:p-10 border border-amber-500/30 shadow-xs space-y-4 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-black flex items-center justify-center shadow-md">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-amber-400">
                  {t.about.visionTitle}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {language === 'te'
                    ? 'అత్యాధునిక సాంకేతికత, నైతిక రోగ నిర్ధారణ మరియు విజయవంతమైన శస్త్రచికిత్సా ఫలితాలలో ప్రాంతీయ అగ్రగామి సూపర్-స్పెషాలిటీ న్యూరో కేర్ సెంటర్‌గా నిలవడం.'
                    : 'To be the regional benchmark for precision brain and spine care, where ethical clinical judgment and cutting-edge surgical innovation merge for superior patient outcomes.'}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Values */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6">
            <ScrollReveal direction="up" distance={20}>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {t.about.valuesTitle}
              </h3>
            </ScrollReveal>

            <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
              {t.about.values.map((val, idx) => (
                <ScrollStaggerItem key={idx} direction="up" distance={24}>
                  <div className="p-5 rounded-2xl bg-amber-50/40 border border-amber-200/60 space-y-2 h-full">
                    <div className="text-amber-900 font-bold text-base flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600" />
                      <span>{val.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </ScrollStaggerItem>
              ))}
            </ScrollStagger>
          </div>
        </section>

        {/* Patient Care Approach */}
        <ScrollReveal direction="zoom" distance={24}>
          <section className="bg-gradient-to-r from-slate-950 via-[#071120] to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6 border border-amber-500/20">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-bold border border-amber-500/30">
                <Activity className="w-4 h-4 text-amber-400" />
                <span>{language === 'te' ? 'మా రోగి సంరక్షణా విధానం' : 'Multidisciplinary Clinical Protocol'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {t.about.careApproachTitle}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.about.careApproachDesc}
              </p>
            </div>

            <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4" staggerDelay={0.08}>
              <ScrollStaggerItem direction="up" distance={20}>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/20 space-y-1.5 h-full">
                  <div className="text-amber-400 font-black text-sm">1. Meticulous Exam</div>
                  <p className="text-xs text-slate-400">Deep clinical neurological testing before ordering any imaging.</p>
                </div>
              </ScrollStaggerItem>

              <ScrollStaggerItem direction="up" distance={20}>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/20 space-y-1.5 h-full">
                  <div className="text-amber-400 font-black text-sm">2. 3T High-Field Scans</div>
                  <p className="text-xs text-slate-400">Sub-millimeter visualization to prevent diagnostic ambiguity.</p>
                </div>
              </ScrollStaggerItem>

              <ScrollStaggerItem direction="up" distance={20}>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/20 space-y-1.5 h-full">
                  <div className="text-amber-400 font-black text-sm">3. Conservative First</div>
                  <p className="text-xs text-slate-400">Exhaustive medical and rehabilitative therapies before surgery is ever discussed.</p>
                </div>
              </ScrollStaggerItem>

              <ScrollStaggerItem direction="up" distance={20}>
                <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/20 space-y-1.5 h-full">
                  <div className="text-amber-400 font-black text-sm">4. Keyhole Precision</div>
                  <p className="text-xs text-slate-400">When surgery is essential, minimally invasive techniques protect healthy tissue.</p>
                </div>
              </ScrollStaggerItem>
            </ScrollStagger>
          </section>
        </ScrollReveal>

        {/* Facilities Preview */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <ScrollReveal direction="up" distance={20}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {t.home.facilitiesHeading}
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  {t.home.facilitiesSubheading}
                </p>
              </div>
              <Link
                to="/gallery"
                className="text-xs font-bold text-amber-800 hover:text-amber-950 inline-flex items-center gap-1"
              >
                <span>{language === 'te' ? 'గ్యాలరీలో చిత్రాలు చూడండి' : 'View Facility Gallery'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.14}>
            <ScrollStaggerItem direction="up" distance={26}>
              <div className="rounded-2xl overflow-hidden border border-slate-200 relative group h-full">
                <img
                  src="/images/facility-mri.jpg"
                  alt="High-Field MRI Neuro Suite"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h4 className="font-bold text-base">High-Field 3-Tesla MRI Neuro Suite</h4>
                    <p className="text-xs text-slate-300 mt-1">Sub-millimeter imaging for stroke, cranial tumours & disc herniation</p>
                  </div>
                </div>
              </div>
            </ScrollStaggerItem>

            <ScrollStaggerItem direction="up" distance={26}>
              <div className="rounded-2xl overflow-hidden border border-slate-200 relative group h-full">
                <img
                  src="/images/facility-ot.jpg"
                  alt="Microsurgical neurosurgery operation theatre with robotic microscope"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h4 className="font-bold text-base">Microsurgical & Navigation Theatre</h4>
                    <p className="text-xs text-slate-300 mt-1">Intraoperative neuro-monitoring for cranial and spinal cord safety</p>
                  </div>
                </div>
              </div>
            </ScrollStaggerItem>
          </ScrollStagger>
        </section>

        {/* Main Clinic Location Card Section */}
        <ScrollReveal direction="zoom" distance={24}>
          <section className="space-y-4">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                {language === 'te' ? 'ఆసుపత్రి చిరునామా & సంప్రదింపులు' : 'Hospital Address & Location'}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {language === 'te' ? 'ప్రధాన క్లినిక్ - విజయనగరం' : 'Our Main Clinic in Vizianagaram'}
              </h3>
            </div>
            <div className="max-w-2xl mx-auto">
              <ClinicLocationCard />
            </div>
          </section>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default AboutUs;
