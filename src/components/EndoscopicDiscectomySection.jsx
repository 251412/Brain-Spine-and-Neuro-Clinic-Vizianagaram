import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  PhoneCall, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Activity, 
  ShieldCheck, 
  Zap, 
  HeartPulse, 
  AlertCircle,
  Eye,
  Check,
  ArrowRight,
  Stethoscope,
  BadgeCheck,
  X,
  User,
  Phone,
  FileText,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { ScrollReveal } from './ScrollReveal';

export const EndoscopicDiscectomySection = () => {
  const { language } = useLanguage();
  const isTe = language === 'te';

  const clinicData = useClinicData();
  const addAppointment = clinicData?.addAppointment;

  // Modal State for Simple & Effective Booking
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState('form'); // 'form' or 'success'
  const [bookingForm, setBookingForm] = useState({
    fullName: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (09:30 AM – 01:30 PM)',
    mriStatus: 'Yes, I have an MRI report ready',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmittedData, setLastSubmittedData] = useState(null);

  const todayString = new Date().toISOString().split('T')[0];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isBookingModalOpen) {
        setIsBookingModalOpen(false);
      }
    };
    if (isBookingModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isBookingModalOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!bookingForm.fullName.trim() || bookingForm.fullName.trim().length < 3) {
      newErrors.fullName = isTe ? 'దయచేసి మీ పూర్తి పేరును నమోదు చేయండి.' : 'Please enter your full name (at least 3 characters).';
    }

    const cleanPhone = bookingForm.phone.replace(/[\s-]/g, '');
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = isTe ? 'సరైన 10 అంకెల మొబైల్ నంబర్‌ను నమోదు చేయండి.' : 'Please enter a valid 10-digit mobile number.';
    }

    if (!bookingForm.preferredDate) {
      newErrors.preferredDate = isTe ? 'దయచేసి తేదీని ఎంచుకోండి.' : 'Please select a preferred date.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    const formattedMessage = `🏥 *New Consultation Request for Endoscopic Lumbar Discectomy*
*Clinic:* Brain Spine & Neuro Clinic, Vizianagaram
*Doctor:* Dr. Reddi Sankara Rao (MCh Neurosurgery)
*Specialized Package:* ₹50,000 All-Inclusive (Keyhole / Stitchless)

👤 *Patient Name:* ${bookingForm.fullName.trim()}
📞 *Phone Number:* ${bookingForm.phone.trim()}
📅 *Preferred Date:* ${bookingForm.preferredDate}
⏰ *Preferred Time:* ${bookingForm.preferredTime}
📋 *MRI / Scan Report:* ${bookingForm.mriStatus}
📝 *Symptoms / Notes:* ${bookingForm.notes.trim() || 'Severe slip disc / sciatica back pain evaluation'}

Please confirm appointment availability with Dr. Reddi Sankara Rao. Thank you!`;

    const cleanWaNum = '919908981669';
    const waUrl = `https://wa.me/${cleanWaNum}?text=${encodeURIComponent(formattedMessage)}`;

    if (addAppointment) {
      addAppointment({
        fullName: bookingForm.fullName.trim(),
        phone: bookingForm.phone.trim(),
        selectedDoctor: 'Dr. Reddi Sankara Rao',
        department: 'Spine Care',
        specialityOrDoctor: 'Spine Care - Dr. Reddi Sankara Rao',
        preferredDate: bookingForm.preferredDate,
        preferredTime: bookingForm.preferredTime,
        reason: `Endoscopic Lumbar Discectomy (₹50,000 Package) - MRI: ${bookingForm.mriStatus}. Notes: ${bookingForm.notes.trim() || 'None'}`,
        consentGiven: true
      });
    }

    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = waUrl;
    } else {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }

    setIsSubmitting(false);
    setLastSubmittedData({ ...bookingForm, waUrl });
    setModalStep('success');
  };

  const handleOpenModal = () => {
    setModalStep('form');
    setErrors({});
    setIsBookingModalOpen(true);
  };

  // State to manage FAQ accordion expansion
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(prev => prev === idx ? -1 : idx);
  };

  const steps = [
    {
      num: 1,
      titleEn: "Small Incision",
      titleTe: "చిన్న కోత",
      descEn: "Only 8mm micro incision made in the back without cutting muscles",
      descTe: "వీపు భాగంలో కండరాలను కత్తిరించకుండా కేవలం 8 మి.మీ చిన్న సూక్ష్మ రంధ్రం చేస్తారు",
      icon: Zap
    },
    {
      num: 2,
      titleEn: "Endoscope Insertion",
      titleTe: "ఎండోస్కోప్ ప్రవేశం",
      descEn: "Thin tube with high-definition camera inserted to directly visualize the pinched nerve",
      descTe: "హై-డెఫినిషన్ కెమెరాతో కూడిన సన్నని ట్యూబ్ ద్వారా నొక్కుకుపోయిన నాడిని నేరుగా వీక్షిస్తారు",
      icon: Eye
    },
    {
      num: 3,
      titleEn: "Disc Removal",
      titleTe: "డిస్క్ తొలగింపు",
      descEn: "Herniated disc fragment carefully extracted using specialized micro-instruments",
      descTe: "ప్రత్యేక మైక్రో పరికరాలతో నరాన్ని నొక్కుతున్న సమస్యాత్మక డిస్క్ భాగాన్ని తొలగిస్తారు",
      icon: CheckCircle2
    },
    {
      num: 4,
      titleEn: "Quick Recovery",
      titleTe: "వేగవంతమైన రికవరీ",
      descEn: "Patient walks comfortably within 6 hours, returns home in 1–2 days",
      descTe: "ఆపరేషన్ అయిన 6 గంటల్లోనే రోగి లేచి నడుస్తారు, 1-2 రోజుల్లో డిశ్చార్జ్ అవుతారు",
      icon: HeartPulse
    }
  ];

  const benefits = [
    {
      titleEn: "Small 8mm incision – minimal scarring",
      titleTe: "కేవలం 8 మి.మీ కోత – మచ్చలు కనిపించవు"
    },
    {
      titleEn: "Less muscle damage and tissue trauma",
      titleTe: "కండరాలు మరియు కణజాలానికి అత్యంత తక్కువ నష్టం"
    },
    {
      titleEn: "Reduced post-operative pain",
      titleTe: "ఆపరేషన్ తర్వాత నొప్పి అత్యల్పం"
    },
    {
      titleEn: "Walk within 6 hours of surgery",
      titleTe: "శస్త్రచికిత్స జరిగిన 6 గంటల్లోనే నడక ప్రారంభం"
    },
    {
      titleEn: "Discharge in 24–48 hours",
      titleTe: "24 నుండి 48 గంటల్లో ఆసుపత్రి నుండి డిశ్చార్జ్"
    },
    {
      titleEn: "Return to work in 2–3 weeks",
      titleTe: "2 నుండి 3 వారాల్లో సాధారణ ఉద్యోగ విధుల్లోకి"
    },
    {
      titleEn: "Local anesthesia option available",
      titleTe: "లోకల్ అనస్థీషియా ఆప్షన్ అందుబాటులో ఉంది"
    },
    {
      titleEn: "Lower infection risk",
      titleTe: "ఇన్ఫెక్షన్ మరియు సమస్యల ప్రమాదం చాలా తక్కువ"
    },
    {
      titleEn: "Faster overall recovery",
      titleTe: "సంపూర్ణ సాధారణ జీవితానికి అతి వేగవంతమైన రికవరీ"
    }
  ];

  const packageItems = [
    {
      en: "Pre-operative consultations & investigations",
      te: "ఆపరేషన్ పూర్వ సంప్రదింపులు & ప్రాథమిక పరీక్షలు"
    },
    {
      en: "Complete endoscopic surgery procedure",
      te: "పూర్తి ఎండోస్కోపిక్ సర్జరీ ప్రక్రియ"
    },
    {
      en: "Anesthesia charges & OT utilization",
      te: "అనస్థీషియా & అధునాతన ఆపరేషన్ థియేటర్ ఛార్జీలు"
    },
    {
      en: "Hospital room stay (24–48 hours)",
      te: "ఆసుపత్రి గది వసతి (24–48 గంటల బస)"
    },
    {
      en: "Post-operative medications & surgical dressings",
      te: "ఆపరేషన్ అనంతర మందులు & డ్రెస్సింగ్"
    },
    {
      en: "Follow-up clinical consultations with Dr. Reddi Sankara Rao",
      te: "డాక్టర్ రెడ్డి శంకర రావు గారితో ఫాలో-అప్ కన్సల్టేషన్లు"
    },
    {
      en: "Physiotherapy & spine ergonomic rehabilitation guidance",
      te: "ఫిజియోథెరపీ & వెన్నెముక భంగిమ రక్షణ మార్గదర్శకాలు"
    }
  ];

  const symptoms = [
    {
      titleEn: "Lower back pain radiating to legs",
      titleTe: "నడుము నుండి కాళ్ళ వరకు పాకే తీవ్రమైన నొప్పి (సయాటికా)",
      tag: "Sciatica"
    },
    {
      titleEn: "Numbness or tingling in legs or feet",
      titleTe: "కాళ్ళు లేదా పాదాలలో తిమ్మిర్లు, సూదులు గుచ్చినట్లు ఉండటం",
      tag: "Paresthesia"
    },
    {
      titleEn: "Weakness in leg & foot muscles",
      titleTe: "నడవడానికి కాళ్ళ కండరాలలో పటుత్వం తగ్గడం (బలహీనత)",
      tag: "Motor Deficit"
    },
    {
      titleEn: "Pain that worsens with sitting or bending",
      titleTe: "కూర్చున్నప్పుడు లేదా ముందుకు వంగినప్పుడు నొప్పి పెరగడం",
      tag: "Mechanical Strain"
    }
  ];

  const faqs = [
    {
      qEn: "What is a slip disc?",
      qTe: "స్లిప్ డిస్క్ అంటే ఏమిటి?",
      aEn: "A slip disc (herniated disc) occurs when the soft, gel-like cushion between your spinal bones bulges outward through a tear in its outer ring, directly pinching the adjacent spinal nerve roots and causing severe radiating pain down the legs.",
      aTe: "వెన్నెముక ఎముకల మధ్య ఉండే కుషన్ లాంటి జెల్ డిస్క్ తన స్థానం నుండి బయటకు పొడుచుకు వచ్చి సమీపంలోని సున్నితమైన నరాలపై తీవ్రమైన ఒత్తిడిని కలిగించడాన్ని 'స్లిప్ డిస్క్' అంటారు. దీనివల్ల నడుము నుండి కాలి చివరి దాకా తీవ్రమైన నొప్పి వస్తుంది."
    },
    {
      qEn: "How long does the surgery take?",
      qTe: "ఈ శస్త్రచికిత్సకు ఎంత సమయం పడుతుంది?",
      aEn: "The endoscopic procedure typically takes 45 to 90 minutes, depending on the severity of disc herniation, patient anatomy, and whether single or multiple disc levels are being decompressed.",
      aTe: "ఈ ఎండోస్కోపిక్ ప్రక్రియ సాధారణంగా 45 నుండి 90 నిమిషాల సమయం తీసుకుంటుంది. రోగి సమస్య తీవ్రతను బట్టి సమయం ఆధారపడి ఉంటుంది."
    },
    {
      qEn: "When can I walk after surgery?",
      qTe: "సర్జరీ తర్వాత నేను ఎప్పుడు నడవగలను?",
      aEn: "Most patients can get out of bed and walk comfortably within 6 hours after surgery with minimal assistance, as the back muscles are dilated rather than cut.",
      aTe: "ఈ పద్ధతిలో కండరాలను కత్తిరించకుండా కేవలం చిన్న రంధ్రం ద్వారా చేస్తారు కాబట్టి, ఆపరేషన్ పూర్తయిన 6 గంటల్లోనే రోగులు సులభంగా నడవగలుగుతారు."
    },
    {
      qEn: "Is the procedure painful?",
      qTe: "ఈ ప్రక్రియ చాలా బాధాకరంగా ఉంటుందా?",
      aEn: "No. The procedure is performed under precision anesthesia, so you will feel no pain during surgery. Post-operative discomfort is remarkably low compared to conventional open spine operations.",
      aTe: "లేదు. సర్జరీ సమయంలో అనస్థీషియా ఇవ్వడం వల్ల ఎలాంటి నొప్పి తెలియదు. సాంప్రదాయ ఓపెన్ సర్జరీలతో పోలిస్తే ఆపరేషన్ తర్వాత కూడా నొప్పి చాలా తక్కువగా ఉంటుంది."
    },
    {
      qEn: "What is the success rate?",
      qTe: "ఈ శస్త్రచికిత్స విజయవంతమయ్యే శాతం (సక్సెస్ రేట్) ఎంత?",
      aEn: "Endoscopic lumbar discectomy (Keyhole / Stitchless) boasts an exceptional success rate of over 90% in properly diagnosed and selected clinical candidates, providing rapid relief from nerve compression.",
      aTe: "సరైన రోగ నిర్ధారణ చేయబడిన రోగులలో ఎండోస్కోపిక్ లంబార్ డిసెక్టమీ (కీహోల్) సక్సెస్ రేట్ 90% కంటే ఎక్కువగా ఉంది. ఇది నరాల ఒత్తిడి నుండి తక్షణ ఉపశమనం ఇస్తుంది."
    },
    {
      qEn: "Will my back pain return?",
      qTe: "భవిష్యత్తులో నడుము నొప్పి మళ్లీ వచ్చే అవకాశం ఉందా?",
      aEn: "With proper post-operative physical rehabilitation, ergonomic spine habits, and weight management, the recurrence rate is exceptionally low (less than 5%).",
      aTe: "డాక్టర్ సూచించిన వ్యాయామాలు, సరైన భంగిమలు మరియు జీవనశైలి జాగ్రత్తలు పాటించడం వల్ల సమస్య మళ్లీ తిరగబెట్టే అవకాశం 5% కంటే తక్కువ."
    }
  ];

  return (
    <section 
      id="endoscopic-discectomy" 
      className="relative rounded-3xl overflow-hidden border-2 border-amber-300/80 shadow-2xl shadow-amber-500/10 bg-gradient-to-b from-[#0A1324] via-[#0F1D36] to-[#0A1324] text-white my-6"
    >
      {/* Decorative Gold & Neural Glow Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-amber-500/15 via-yellow-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-sky-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 subtle-gold-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 p-6 sm:p-10 lg:p-12 space-y-12">
        
        {/* ========================================================= */}
        {/* HERO TITLE & PRICING HEADER                                */}
        {/* ========================================================= */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-amber-500/20">
            <div className="space-y-4 max-w-3xl">
              {/* Gold Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-amber-500/10 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  {isTe 
                    ? 'అత్యాధునిక మినిమల్లీ ఇన్వాసివ్ స్పైన్ సర్జరీ' 
                    : 'Advanced Minimally Invasive Slip Disc Surgery'}
                </span>
              </div>

              {/* Main Heading */}
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  {isTe ? 'ఎండోస్కోపిక్ లంబార్ డిసెక్టమీ' : 'Endoscopic Lumbar Discectomy'}
                </h2>
                <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent mt-1">
                  {isTe ? '(కీహోల్ / కుట్లు లేని ఆధునిక చికిత్స)' : '(Keyhole / Stitchless Surgery)'}
                </p>
              </div>

              {/* Tagline / Authority Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isTe ? 'కేవలం 8 మి.మీ కోత' : 'Only 8mm Incision'}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isTe ? '6 గంటల్లో నడక' : 'Walk in 6 Hours'}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 font-semibold">
                  <BadgeCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isTe ? '90%+ సక్సెస్ రేట్' : '90%+ Success Rate'}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 font-semibold">
                  <HeartPulse className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isTe ? 'తక్కువ నొప్పి • వేగవంతమైన రికవరీ' : 'Minimal Scarring & Pain'}</span>
                </span>
              </div>
            </div>

            {/* Featured Price Card */}
            <div className="relative shrink-0 w-full sm:w-auto">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-amber-600/20 border-2 border-amber-400/50 backdrop-blur-md shadow-xl shadow-amber-500/15 text-center flex flex-col items-center justify-center min-w-[260px] group hover:border-amber-300 transition-all">
                <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">
                  {isTe ? 'ప్రారంభ సమగ్ర ప్యాకేజీ ధర' : 'Starting From'}
                </span>
                <div className="flex items-baseline justify-center gap-1 my-1">
                  <span className="text-4xl sm:text-5xl font-black text-amber-300 tracking-tight drop-shadow-md">
                    ₹50,000
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-200 text-xs font-bold">
                  <Check className="w-3.5 h-3.5 text-amber-300" />
                  <span>{isTe ? 'ఆల్-ఇన్‌క్లూజివ్ ప్యాకేజీ' : 'All-inclusive package'}</span>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-400/20 w-full">
                  <button
                    type="button"
                    onClick={handleOpenModal}
                    className="w-full py-3 px-4 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30 active:scale-95 transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-slate-950" />
                    <span>{isTe ? 'అపాయింట్‌మెంట్ బుక్ చేయండి' : 'Book Consultation'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ========================================================= */}
        {/* WHAT IS A SLIP DISC? & ANATOMY SECTION                    */}
        {/* ========================================================= */}
        <ScrollReveal direction="up" delay={0.08}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left 7 Cols: Medical Explanation & Symptoms */}
            <div className="lg:col-span-7 bg-white/[0.04] rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-sm space-y-6 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
                  <Stethoscope className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isTe ? 'క్లినికల్ సమాచారం' : 'Clinical Understanding'}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {isTe ? 'స్లిప్ డిస్క్ (Slip Disc) అంటే ఏమిటి?' : 'What is a Slip Disc?'}
                </h3>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-3">
                  {isTe 
                    ? 'స్లిప్ డిస్క్ (వైద్య పరిభాషలో హెర్నియేటెడ్ డిస్క్) అంటే వెన్నెముక ఎముకల మధ్య ఉండే కుషన్ లాంటి జెల్ డిస్క్ బయట ఉండే రక్షణ పొర చిట్లి, అందులోని మృదువైన కేంద్ర భాగం బయటకు నెట్టబడటం.' 
                    : 'A slip disc, medically known as a herniated disc, occurs when the soft, gel-like center of a spinal disc pushes through a crack in the tougher outer layer.'}
                </p>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-2.5">
                  {isTe
                    ? 'మన వెన్నెముక ఒకదానిపై ఒకటి పేర్చబడిన ఎముకల (వెర్టెబ్రే)తో నిర్మించబడింది. ప్రతి రెండు ఎముకల మధ్య ఉండే డిస్క్ ఒక షాక్ అబ్జార్బర్‌గా పనిచేస్తుంది. ఈ డిస్క్ తన స్థానం తప్పి లేదా చిట్లి బయటకు వచ్చినప్పుడు, అది సమీపంలోని వెన్నుపాము నరాలపై తీవ్రమైన ఒత్తిడి తెస్తుంది.'
                    : 'Your spine is made up of bones (vertebrae) stacked on top of each other. Between each vertebra is a cushion-like disc that acts as a shock absorber. When this disc slips out of place or ruptures, it can press on nearby nerves.'}
                </p>
              </div>

              {/* Symptoms Grid */}
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-amber-300 mb-3 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isTe ? 'ముఖ్యమైన రోగ లక్షణాలు:' : 'Common Symptoms Include:'}</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {symptoms.map((symp, sIdx) => (
                    <div 
                      key={sIdx}
                      className="p-3.5 rounded-2xl bg-white/[0.05] border border-amber-300/20 hover:border-amber-400/40 transition-colors flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-100 block leading-snug">
                          {isTe ? symp.titleTe : symp.titleEn}
                        </span>
                        <span className="text-[10px] text-amber-300/80 uppercase tracking-wider font-bold mt-0.5 block">
                          {symp.tag}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Visual Spine Anatomy Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#12223D] via-[#0E1A30] to-[#0A1324] rounded-3xl p-6 sm:p-8 border-2 border-amber-400/30 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    {isTe ? 'వెన్నెముక అనాటమీ' : 'Spine Anatomy'}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Precision Microsurgery
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-white">
                  {isTe 
                    ? 'ఎండోస్కోపిక్ విధానం ఎలా కాపాడుతుంది?' 
                    : 'Targeted Keyhole Relief at Nerve Root'}
                </h4>

                {/* High-Resolution Spine Anatomical Model Photograph */}
                <div className="relative rounded-2xl overflow-hidden border border-amber-400/30 bg-[#060D1A] group shadow-xl">
                  <img 
                    src="/images/spine-anatomy-model.jpg" 
                    alt={isTe ? "వెన్నెముక మరియు స్లిప్ డిస్క్ మోడల్" : "Lumbar Spine Disc & Nerve Anatomy Model"} 
                    className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1324]/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Anatomical Overlay Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-[11px] font-bold text-amber-300 border border-amber-400/30 shadow-sm">
                      {isTe ? 'వెర్టెబ్రా & డిస్క్ అనాటమీ' : 'Vertebra & Disc Model'}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 text-[10px] font-black shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-slate-950" />
                      <span>{isTe ? 'ఎల్లో నెర్వ్ రూట్ & డిస్క్' : 'Nerve Root & Disc'}</span>
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-amber-200 text-xs leading-relaxed">
                  <p className="font-semibold">
                    {isTe 
                      ? '💡 కేవలం 8 మి.మీ ఎండోస్కోప్ ద్వారా నేరుగా నరాన్ని నొక్కుతున్న హెర్నియేటెడ్ భాగాన్ని మాత్రమే తొలగిస్తారు. వెన్నెముక ఎముకలు లేదా కండరాలకు ఎలాంటి హానీ జరగదు.'
                      : '💡 The 8mm keyhole endoscope reaches precisely the pinched nerve fragment without stripping back muscles or removing healthy spinal bone.'}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* ========================================================= */}
        {/* HOW ENDOSCOPIC SURGERY WORKS (4 STEPS)                    */}
        {/* ========================================================= */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-400/30">
                {isTe ? 'చికిత్సా విధానం' : 'Surgical Protocol'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {isTe 
                  ? 'ఎండోస్కోపిక్ (కీహోల్) సర్జరీ ఎలా పనిచేస్తుంది?' 
                  : 'How Endoscopic (Keyhole) Surgery Works'}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                {isTe 
                  ? '4 సులభమైన దశలలో సంపూర్ణ నడుము నొప్పి విముక్తి' 
                  : 'A 4-step precision microsurgical approach to rapid recovery'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div 
                    key={step.num}
                    className="p-6 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-amber-400/60 transition-all duration-300 relative group flex flex-col justify-between shadow-lg hover:-translate-y-1"
                  >
                    <div>
                      {/* Top Step Number Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black text-base flex items-center justify-center shadow-md shadow-amber-500/20 group-hover:scale-110 transition-transform">
                          {step.num}
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/5 text-amber-400 flex items-center justify-center">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                        {isTe ? step.titleTe : step.titleEn}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {isTe ? step.descTe : step.descEn}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <span>{isTe ? `దశ 0${step.num}` : `Phase 0${step.num}`}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* ========================================================= */}
        {/* WHY CHOOSE ENDOSCOPIC SURGERY? (9 BENEFITS)               */}
        {/* ========================================================= */}
        <ScrollReveal direction="up" delay={0.12}>
          <div className="bg-gradient-to-br from-[#101E36] to-[#0A1324] rounded-3xl p-6 sm:p-10 border border-amber-400/25 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                {isTe ? 'అగ్రశ్రేణి ప్రయోజనాలు' : 'Patient Advantages'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {isTe 
                  ? 'ఎండోస్కోపిక్ సర్జరీని ఎందుకు ఎంచుకోవాలి?' 
                  : 'Why Choose Endoscopic Surgery?'}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                {isTe
                  ? 'సాంప్రదాయ ఓపెన్ సర్జరీల కంటే 9 అద్భుతమైన ప్రయోజనాలు'
                  : '9 clinically proven benefits over traditional open spine operations'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, bIdx) => (
                <div 
                  key={bIdx}
                  className="p-4 rounded-2xl bg-white/[0.04] border border-amber-400/20 hover:border-amber-400/50 hover:bg-white/[0.07] transition-all flex items-center gap-3.5"
                >
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 font-bold text-sm">
                    <Check className="w-4 h-4 text-amber-300" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 leading-snug">
                    {isTe ? benefit.titleTe : benefit.titleEn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ========================================================= */}
        {/* TRANSPARENT PRICING & INCLUSIONS                          */}
        {/* ========================================================= */}
        <ScrollReveal direction="up" delay={0.14}>
          <div className="bg-gradient-to-r from-[#0C172E] via-[#122345] to-[#0C172E] rounded-3xl p-6 sm:p-10 border-2 border-amber-400/40 shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-amber-400/20">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  {isTe ? 'పారదర్శక ధరల విధానం' : 'Transparent Pricing'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {isTe ? 'ఆల్-ఇన్‌క్లూజివ్ సమగ్ర ప్యాకేజీ' : 'All-Inclusive Package Details'}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  {isTe 
                    ? 'ఎలాంటి దాగివున్న రుసుములు లేవు. రోగి సంక్షేమమే మా ప్రాధాన్యత.' 
                    : 'Clear, ethical, and upfront clinical packages with zero hidden costs.'}
                </p>
              </div>

              <div className="flex items-center gap-4 bg-black/40 px-6 py-4 rounded-2xl border border-amber-400/40">
                <div className="text-right">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                    {isTe ? 'ప్యాకేజీ ధర' : 'Fixed Package Cost'}
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-amber-300">
                    ₹50,000
                  </span>
                </div>
              </div>
            </div>

            {/* Inclusions List */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-amber-300 mb-4 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>{isTe ? 'ఈ ప్యాకేజీలో ఏమేమి ఉంటాయి (Package Includes):' : 'Package Includes:'}</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {packageItems.map((item, pIdx) => (
                  <div 
                    key={pIdx}
                    className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                      {isTe ? item.te : item.en}
                    </span>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="mt-5 p-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 text-[11px] sm:text-xs">
                <span>
                  {isTe 
                    ? '*రోగి నిర్దిష్ట శారీరక ఆరోగ్య పరిస్థితి, ఇతర వైద్య సమస్యలు (కో-మార్బిడిటీలు) మరియు అదనపు ప్రత్యేక అవసరాలను బట్టి తుది ఆసుపత్రి ఖర్చులో స్వల్ప మార్పులు ఉండవచ్చు.' 
                    : '*Final cost may vary based on individual patient conditions, systemic comorbidities, and additional clinical requirements.'}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ========================================================= */}
        {/* FREQUENTLY ASKED QUESTIONS (ACCORDION)                    */}
        {/* ========================================================= */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30">
                {isTe ? 'తరచుగా అడిగే ప్రశ్నలు' : 'Patient FAQ'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {isTe 
                  ? 'స్లిప్ డిస్క్ & ఎండోస్కోపిక్ సర్జరీ సందేహాలు' 
                  : 'Frequently Asked Questions'}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm">
                {isTe
                  ? 'రోగులు సర్వసాధారణంగా అడిగే ప్రశ్నలకు నిపుణుల సమాధానాలు'
                  : 'Clear medical answers regarding procedure timelines, pain, walking, and recovery'}
              </p>
            </div>

            <div className="space-y-3 max-w-4xl mx-auto">
              {faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div 
                    key={fIdx}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(fIdx)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 hover:bg-white/[0.06] transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-sm sm:text-base text-white">
                        {isTe ? faq.qTe : faq.qEn}
                      </span>
                      <div className="w-7 h-7 rounded-full bg-white/10 text-amber-400 flex items-center justify-center shrink-0">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                        {isTe ? faq.aTe : faq.aEn}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* ========================================================= */}
        {/* BOTTOM CALL TO ACTION: BOOK & EMERGENCY CALL              */}
        {/* ========================================================= */}
        <ScrollReveal direction="up" delay={0.16}>
          <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-amber-500/25 via-yellow-400/20 to-amber-500/25 border-2 border-amber-400/60 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/30 text-amber-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>{isTe ? 'నడుము నొప్పి విముక్తి' : 'Compassionate Clinical Care'}</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {isTe 
                  ? 'నడుము నొప్పి & సయాటికా నుండి ఉపశమనం పొందాలనుకుంటున్నారా?' 
                  : 'Ready to Get Relief from Back Pain?'}
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                {isTe
                  ? 'ఎండోస్కోపిక్ సర్జరీ మీ వెన్నెముక సమస్యకు సరైన పరిష్కారమా కాదా అని తెలుసుకోవడానికి డాక్టర్ రెడ్డి శంకర రావు గారితో అపాయింట్‌మెంట్ షెడ్యూల్ చేయండి.'
                  : 'Schedule a consultation with Dr. Reddi Sankara Rao to discuss if stitchless endoscopic surgery is right for you.'}
              </p>
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0 w-full lg:w-auto">
              {/* Primary: Book Consultation */}
              <button
                type="button"
                onClick={handleOpenModal}
                className="px-7 py-3.5 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2 transition-all active:scale-95 text-center cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>{isTe ? 'అపాయింట్‌మెంట్ బుక్ చేయండి' : 'Book Consultation'}</span>
              </button>

              {/* Secondary: Emergency Call 24x7 (Good way) */}
              <a
                href="tel:9908981669"
                className="px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm bg-rose-600 hover:bg-rose-500 text-white shadow-xl shadow-rose-600/30 flex items-center justify-center gap-2 transition-all active:scale-95 border border-rose-400/40 animate-pulse hover:animate-none text-center"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>{isTe ? 'అత్యవసర కాల్: 99089 81669' : 'Emergency Call: 99089 81669'}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* ========================================================= */}
      {/* DEDICATED BOOKING MODAL (SIMPLE & EFFECTIVE)              */}
      {/* ========================================================= */}
      {isBookingModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
          onClick={() => setIsBookingModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-xl bg-gradient-to-b from-[#0F1D36] via-[#0C172E] to-[#0A1324] border-2 border-amber-400/60 rounded-3xl p-5 sm:p-7 text-white shadow-2xl shadow-amber-500/25 my-6 overflow-hidden max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Modal Header */}
            <div className="relative z-10 flex items-start justify-between gap-4 pb-3.5 border-b border-amber-400/25">
              <div className="space-y-1 text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-400/20 border border-amber-400/30 text-amber-300 text-[11px] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{isTe ? 'అత్యాధునిక కీహోల్ స్పైన్ సర్జరీ' : 'Minimally Invasive Spine Surgery'}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {isTe ? 'ఎండోస్కోపిక్ లంబార్ డిసెక్టమీ కన్సల్టేషన్' : 'Endoscopic Lumbar Discectomy'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {isTe 
                    ? 'డాక్టర్ రెడ్డి శంకర రావు (MCh న్యూరో సర్జరీ) గారితో అపాయింట్‌మెంట్' 
                    : 'Consultation with Dr. Reddi Sankara Rao, MCh Neurosurgery'}
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsBookingModalOpen(false)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Procedure & Transparent Pricing Highlight Card */}
            <div className="relative z-10 my-3.5 p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-amber-500/15 border border-amber-400/35 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-amber-300 text-sm">
                    {isTe ? 'ఆల్-ఇన్‌క్లూజివ్ ప్యాకేజీ' : 'All-Inclusive Package'}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-200 text-[10px] font-bold">
                    {isTe ? 'కుట్లు లేని ఆపరేషన్' : 'Stitchless / 8mm'}
                  </span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {isTe 
                    ? 'సర్జరీ, అనస్థీషియా, 24-48 గంటల రూమ్ బస, మందులు మరియు ఫాలో-అప్ అన్నీ కలుపుకొని' 
                    : 'Includes surgery, anesthesia, 24-48h stay, medications & follow-up consultations'}
                </p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                  {isTe ? 'ప్యాకేజీ ధర' : 'Fixed Cost'}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-amber-300">
                  ₹50,000
                </span>
              </div>
            </div>

            {modalStep === 'form' ? (
              <form onSubmit={handleFormSubmit} className="relative z-10 space-y-3.5 text-left">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-200">
                    {isTe ? 'రోగి పూర్తి పేరు' : 'Patient Full Name'} <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      name="fullName"
                      value={bookingForm.fullName}
                      onChange={handleInputChange}
                      placeholder={isTe ? 'ఉదా. రమేష్ వర్మ' : 'e.g. Ramesh Varma'}
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white/10 border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                        errors.fullName ? 'border-rose-400 bg-rose-500/10' : 'border-white/20'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-200">
                    {isTe ? 'మొబైల్ / వాట్సాప్ నంబర్' : 'Mobile / WhatsApp Phone Number'} <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      name="phone"
                      value={bookingForm.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white/10 border text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                        errors.phone ? 'border-rose-400 bg-rose-500/10' : 'border-white/20'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Preferred Date & Time Slot Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-200">
                      {isTe ? 'అనుకూలమైన తేదీ' : 'Preferred Date'} <span className="text-rose-400">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <input
                        type="date"
                        name="preferredDate"
                        min={todayString}
                        value={bookingForm.preferredDate}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-3 py-2 rounded-xl bg-white/10 border text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50 ${
                          errors.preferredDate ? 'border-rose-400 bg-rose-500/10' : 'border-white/20'
                        }`}
                      />
                    </div>
                    {errors.preferredDate && (
                      <p className="text-xs text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.preferredDate}</span>
                      </p>
                    )}
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-200">
                      {isTe ? 'అనుకూల సమయం (Slot)' : 'Preferred Time Slot'}
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                      <select
                        name="preferredTime"
                        value={bookingForm.preferredTime}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-2 rounded-xl bg-slate-900 border border-white/20 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                      >
                        <option value="Morning (09:30 AM – 01:30 PM)">
                          {isTe ? 'ఉదయం (09:30 AM – 01:30 PM)' : 'Morning (09:30 AM – 01:30 PM)'}
                        </option>
                        <option value="Evening (04:30 PM – 07:30 PM)">
                          {isTe ? 'సాయంత్రం (04:30 PM – 07:30 PM)' : 'Evening (04:30 PM – 07:30 PM)'}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* MRI / Scan Status */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-200">
                    {isTe ? 'మీ వద్ద MRI లేదా స్పైనల్ స్కాన్ రిపోర్ట్ ఉందా?' : 'Do you have an MRI / Spine Scan Report?'}
                  </label>
                  <select
                    name="mriStatus"
                    value={bookingForm.mriStatus}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/20 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                  >
                    <option value="Yes, I have an MRI report ready">
                      {isTe ? 'అవును, నా వద్ద తాజా MRI రిపోర్ట్ సిద్ధంగా ఉంది' : 'Yes, I have an MRI report ready'}
                    </option>
                    <option value="Need MRI prescription / guidance from Doctor">
                      {isTe ? 'లేదు, డాక్టర్ గారి సలహా & ప్రిస్క్రిప్షన్ అవసరం' : 'No, need MRI prescription / guidance from Doctor'}
                    </option>
                    <option value="Old scan report (>6 months)">
                      {isTe ? 'పాత స్కాన్ రిపోర్ట్ ఉంది (6 నెలల క్రితం)' : 'Old scan report (>6 months)'}
                    </option>
                  </select>
                </div>

                {/* Symptoms / Notes */}
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-200">
                    {isTe ? 'ప్రస్తుత సమస్య / నొప్పి వివరాలు (ఐచ్ఛికం)' : 'Current Symptoms / Pain Location (Optional)'}
                  </label>
                  <textarea
                    name="notes"
                    rows="2"
                    value={bookingForm.notes}
                    onChange={handleInputChange}
                    placeholder={isTe ? 'ఉదా. ఎడమ కాలిలోకి లాగుతున్న తీవ్రమైన నడుము నొప్పి, తిమ్మిర్లు...' : 'e.g. Severe lower back pain radiating down left leg, numbness in foot...'}
                    className="w-full px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 space-y-2.5">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl font-black text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 active:scale-98 transition-all cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-slate-950" />
                    <span>
                      {isTe 
                        ? 'కన్సల్టేషన్ నిర్ధారించండి (వాట్సాప్ ద్వారా)' 
                        : 'Confirm & Book via WhatsApp'}
                    </span>
                  </button>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 text-xs text-slate-400">
                    <a
                      href="tel:9908981669"
                      className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-bold transition-colors"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isTe ? 'తక్షణ కాల్: 99089 81669' : 'Instant Phone Booking: 99089 81669'}</span>
                    </a>

                    <Link
                      to={`/appointment?doctor=${encodeURIComponent('Dr. Reddi Sankara Rao')}&treatment=${encodeURIComponent('Endoscopic Lumbar Discectomy')}`}
                      onClick={() => setIsBookingModalOpen(false)}
                      className="text-slate-400 hover:text-white transition-colors underline"
                    >
                      {isTe ? 'పూర్తి వెబ్ ఫారమ్ తెరవండి →' : 'Or open full form →'}
                    </Link>
                  </div>
                </div>
              </form>
            ) : (
              /* Success Confirmation View */
              <div className="relative z-10 py-5 text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl sm:text-2xl font-black text-white">
                    {isTe ? 'అపాయింట్‌మెంట్ అభ్యర్థన విజయవంతంగా పంపబడింది!' : 'Consultation Request Initiated!'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                    {isTe
                      ? 'ఎండోస్కోపిక్ లంబార్ డిసెక్టమీ కన్సల్టేషన్ వివరాలు సిద్ధమయ్యాయి. క్లినిక్ అధికారిక వాట్సాప్ విండో ఓపెన్ చేయబడింది.'
                      : 'Your consultation details for Endoscopic Lumbar Discectomy have been sent to our clinic desk via WhatsApp.'}
                  </p>
                </div>

                {lastSubmittedData && (
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-left text-xs space-y-1.5 max-w-md mx-auto text-slate-200">
                    <div className="flex justify-between">
                      <span className="text-slate-400">{isTe ? 'రోగి పేరు:' : 'Patient Name:'}</span>
                      <strong className="text-white">{lastSubmittedData.fullName}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{isTe ? 'తేదీ & సమయం:' : 'Date & Slot:'}</span>
                      <strong className="text-amber-300">{lastSubmittedData.preferredDate} ({lastSubmittedData.preferredTime})</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{isTe ? 'సర్జరీ ప్యాకేజీ:' : 'Package:'}</span>
                      <strong className="text-white">₹50,000 (All-Inclusive)</strong>
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  {lastSubmittedData?.waUrl && (
                    <a
                      href={lastSubmittedData.waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-md transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{isTe ? 'వాట్సాప్ మళ్లీ తెరవండి' : 'Open WhatsApp Again'}</span>
                    </a>
                  )}

                  <a
                    href="tel:9908981669"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center gap-2 transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                    <span>9908981669</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsBookingModalOpen(false)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all cursor-pointer"
                  >
                    <span>{isTe ? 'పూర్తయింది (Close)' : 'Done'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default EndoscopicDiscectomySection;
