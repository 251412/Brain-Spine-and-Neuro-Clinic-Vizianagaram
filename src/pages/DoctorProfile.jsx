import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  GraduationCap, 
  Award, 
  Calendar, 
  PhoneCall, 
  Brain, 
  Activity
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { PageHero } from '../components/PageHero';
import { ScrollReveal } from '../components/ScrollReveal';
import { SITE_URL, getPhysicianSchema, getClinicSchema } from '../data/seoSchemas';

export const DoctorProfile = () => {
  const { language } = useLanguage();
  const { settings, doctors } = useClinicData();
  const doctor = doctors[0] || {};

  const pageCanonical = `${SITE_URL}/dr-reddi-sankara-rao/`;
  const schemaList = [
    getPhysicianSchema(doctor),
    getClinicSchema()
  ];

  const surgicalExpertise = [
    {
      titleEn: "Complex Cranial Microsurgery & Brain Tumours",
      titleTe: "సంక్లిష్ట మెదడు శస్త్రచికిత్సలు & బ్రెయిన్ ట్యూమర్స్",
      descEn: "Microscopic resection of gliomas, meningiomas, acoustic neuromas, and pituitary adenomas preserving eloquent cortical pathways."
    },
    {
      titleEn: "Minimally Invasive Spine Surgery (MISS)",
      titleTe: "మినిమల్లీ ఇన్వాసివ్ స్పైన్ సర్జరీ (MISS)",
      descEn: "Sub-centimeter tubular decompression and stabilization for lumbar canal stenosis, spondylolisthesis, and spinal trauma."
    },
    {
      titleEn: "Endoscopic Lumbar Discectomy (Keyhole / Stitchless)",
      titleTe: "ఎండోస్కోపిక్ లంబార్ డిస్సెక్టమీ (కుట్లు లేని కీహోల్ సర్జరీ)",
      descEn: "Full-endoscopic spinal disc decompression through an 8mm cannula under local anesthesia with same-day ambulation."
    },
    {
      titleEn: "Microvascular Decompression (MVD)",
      titleTe: "మైక్రోవాస్కులర్ డీకంప్రెషన్ (MVD)",
      descEn: "Curative micro-separation of compressing blood vessels from the trigeminal nerve root for intractable facial neuralgia."
    },
    {
      titleEn: "Acute Neuro-Trauma & Emergency Care",
      titleTe: "అత్యవసర న్యూరో-ట్రామా & తల గాయాలు",
      descEn: "Emergency craniotomy and decompressive craniectomy for traumatic brain injuries, EDH, SDH, and cerebral contusions."
    },
    {
      titleEn: "Pediatric Neurosurgery & Hydrocephalus",
      titleTe: "పీడియాట్రిక్ న్యూరోసర్జరీ & హైడ్రోసెఫాలస్",
      descEn: "Ventriculoperitoneal (VP) shunt placement and Endoscopic Third Ventriculostomy (ETV) for congenital and adult CSF disorders."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCFAF5]">
      <SeoHelmet
        title="Dr. Reddi Sankara Rao | Neurosurgeon & Brain Spine Surgeon"
        description="Comprehensive profile of Dr. Reddi Sankara Rao, Senior Consultant Neurosurgeon in Vizianagaram. Narayana Hrudayalaya trained, APMC verified, 11+ years experience."
        canonicalUrl={pageCanonical}
        schema={schemaList}
        breadcrumbs={[
          { label: language === 'te' ? 'వైద్యులు' : 'Specialists', to: '/doctors' },
          { label: 'Dr. Reddi Sankara Rao', url: pageCanonical }
        ]}
      />

      <PageHero
        badge={language === 'te' ? 'వైద్యుల ప్రొఫైల్' : 'Professional Profile'}
        badgeIcon={<Award className="w-3.5 h-3.5 text-amber-400" />}
        title={language === 'te' ? 'డా. రెడ్డి శంకర రావు' : 'Dr. Reddi Sankara Rao'}
        subtitle={language === 'te' ? 'చీఫ్ న్యూరో సర్జన్ & స్పైన్ కేర్ స్పెషలిస్ట్' : 'Chief Neurosurgeon & Spine Care Specialist'}
        description={language === 'te'
          ? 'నారాయణ హృదయాలయ బెంగళూరు పూర్వ విద్యార్థి, APMC ధృవీకరించిన సీనియర్ న్యూరోసర్జన్. మెదడు మరియు వెన్నెముక శస్త్రచికిత్సలలో 11 సంవత్సరాలకు పైగా విశేష అనుభవం.'
          : 'MBBS, MS, MCh (Neurosurgery) – Narayana Hrudayalaya, Bengaluru. Bringing world-class cranial microsurgery and stitchless endoscopic spine care to North Coastal Andhra Pradesh.'}
        breadcrumbs={[{ label: 'Dr. Reddi Sankara Rao' }]}
        bgImage="/images/facility-ot.jpg"
      />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-12 sm:py-16 space-y-12">
        
        {/* Core Profile Banner with Verified Credentials */}
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-xl shadow-amber-500/5 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Doctor Portrait */}
            <div className="lg:col-span-5 text-center">
              <div className="relative rounded-3xl overflow-hidden border-4 border-amber-200 shadow-2xl bg-slate-900 group max-w-sm mx-auto">
                <img
                  src="/images/dr-reddi-sankara-rao.jpg"
                  alt="Dr. Reddi Sankara Rao - Neurosurgeon in Vizianagaram"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-amber-400/40 text-white flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div className="text-left text-xs">
                    <span className="font-extrabold block text-white">11+ Years Experience</span>
                    <span className="text-amber-400 font-semibold">Brain & Spine Surgery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Credentials Table & Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold border border-emerald-300 mb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Verified Medical Specialist • APMC / 85415</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {language === 'te' ? 'డా. రెడ్డి శంకర రావు' : 'Dr. Reddi Sankara Rao'}
                </h1>
                <p className="text-base sm:text-lg font-bold text-amber-800 mt-1">
                  Founder & Senior Consultant Neurosurgeon
                </p>
              </div>

              {/* Verified Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-[#FCFAF5] border border-amber-200/80 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Qualifications</span>
                  <p className="font-bold text-slate-900">MBBS, MS, MCh (Neurosurgery)</p>
                  <p className="text-xs text-amber-800 font-medium">Narayana Hrudayalaya, Bengaluru</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FCFAF5] border border-amber-200/80 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Registration</span>
                  <p className="font-bold text-slate-900">APMC / 85415</p>
                  <p className="text-xs text-emerald-700 font-medium">Andhra Pradesh Medical Council (Verified)</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FCFAF5] border border-amber-200/80 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Specializations</span>
                  <p className="font-bold text-slate-900">Cranial Microsurgery & Spine Surgery</p>
                  <p className="text-xs text-slate-600">Endoscopic Keyhole Discectomy</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FCFAF5] border border-amber-200/80 space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Practice Locations</span>
                  <p className="font-bold text-slate-900">Vizianagaram & Bobbili</p>
                  <p className="text-xs text-slate-600">Gumchi Junction (Main) & RTC Complex</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{language === 'te' ? 'అపాయింట్‌మెంట్ బుక్ చేయండి' : 'Book Consultation'}</span>
                </Link>

                <a
                  href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-amber-50 text-slate-900 font-bold text-xs sm:text-sm border border-amber-300 shadow-xs transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-amber-700" />
                  <span>Call: +91 {settings.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Detailed Professional Biography */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-200/80 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
              <span>Medical Background & Clinical Ethos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              About Dr. Reddi Sankara Rao
            </h2>
          </div>

          <div className="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              Dr. Reddi Sankara Rao is the founder and Chief Neurosurgeon of Brain Spine & Neuro Clinic in Vizianagaram. Having completed his MCh in Neurosurgery at the nationally acclaimed <strong>Narayana Hrudayalaya, Bengaluru</strong>, Dr. Rao received rigorous surgical training under pioneering neurosurgeons, mastering the full spectrum of microscopic cranial navigation, complex spinal reconstructions, and emergency neuro-trauma protocols.
            </p>
            <p>
              Driven by a deep commitment to bring modern, metropolitan-grade healthcare to his home region, Dr. Rao established the clinic in Vizianagaram to ensure that local patients no longer need to travel hundreds of kilometers for precision neurosurgery. His clinical philosophy centers on ethical transparency: thorough patient counseling, clear diagnostic explanations, and an unyielding commitment to exhausting non-surgical therapies before contemplating surgery.
            </p>
            <p>
              When surgical intervention is required, Dr. Rao utilizes modern minimally invasive and endoscopic techniques, including stitchless Endoscopic Lumbar Discectomy for slip disc and sciatica, minimizing tissue trauma and enabling patients to walk comfortably within hours of surgery.
            </p>
          </div>
        </div>

        {/* Surgical Expertise Grid */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5 text-amber-600" />
              <span>Areas of Surgical Mastery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Specialized Surgical Expertise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {surgicalExpertise.map((exp, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-amber-200/80 shadow-xs space-y-2.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 font-black text-sm flex items-center justify-center">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-base">
                  {language === 'te' ? exp.titleTe : exp.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {exp.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Locations & Timings Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                Main Clinic (Vizianagaram)
              </span>
              <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                24×7 Emergency
              </span>
            </div>
            <h3 className="text-xl font-black text-slate-900">Gumchi Junction Clinic</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gumchi Junction, Sankaramatam Road (Kota Junction), Vizianagaram – 535002
            </p>
            <div className="text-xs space-y-1 text-slate-700 font-medium">
              <p>• Mon – Sat: 09:30 AM – 06:30 PM</p>
              <p>• 24×7 Emergency Trauma Response</p>
              <p>• Phone: +91 99089 81669 / +91 92814 00151</p>
            </div>
            <Link
              to="/neurosurgeon-in-vizianagaram/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 pt-2"
            >
              <span>Explore Vizianagaram Location Page →</span>
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-300 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-slate-800 bg-slate-100 px-3 py-1 rounded-full">
                Branch Clinic (Bobbili)
              </span>
              <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                Tue & Fri
              </span>
            </div>
            <h3 className="text-xl font-black text-slate-900">Bobbili Branch Center</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Opp RTC Complex Ingate, beside Choudhary Bar & Restaurant, Bobbili – 535558
            </p>
            <div className="text-xs space-y-1 text-slate-700 font-medium">
              <p>• Tuesday: 04:00 PM – 09:00 PM</p>
              <p>• Friday: 04:00 PM – 09:00 PM</p>
              <p>• Phone: +91 99511 42275</p>
            </div>
            <Link
              to="/neurosurgeon-in-bobbili/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 pt-2"
            >
              <span>Explore Bobbili Location Page →</span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};
