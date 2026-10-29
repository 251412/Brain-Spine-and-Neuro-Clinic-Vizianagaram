import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Stethoscope, 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  AlertTriangle, 
  X, 
  MapPin,
  ExternalLink,
  Sparkles,
  Check,
  Sunrise,
  Sun,
  Moon,
  Building2,
  Copy,
  MessageCircle,
  Activity,
  ArrowRight,
  Navigation,
  PhoneCall,
  Star,
  QrCode
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { VerificationBadge } from '../components/VerificationBadge';
import { PageHero } from '../components/PageHero';
import { ScrollReveal } from '../components/ScrollReveal';

export const BookAppointment = () => {
  const { language, t } = useLanguage();
  const { settings, doctors, specialities, clinicLocations, addAppointment } = useClinicData();
  const [searchParams] = useSearchParams();

  // Branch Selection State (Gumchi Junction vs Bobbili Branch)
  const [selectedBranch, setSelectedBranch] = useState(() => {
    return searchParams.get('branch') || 'gumchi-junction';
  });

  // Selected Speciality Pill Filter
  const [selectedCategoryTab, setSelectedCategoryTab] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    specialityOrDoctor: '',
    preferredDate: '',
    preferredTime: 'Morning (09:00 AM - 01:00 PM)',
    reason: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedAppointment, setSubmittedAppointment] = useState(null);
  const [copiedPass, setCopiedPass] = useState(false);

  // Time Slots with custom icons & visual metadata
  const timeSlots = [
    {
      id: 'Morning (09:00 AM - 01:00 PM)',
      titleEn: 'Morning Slot',
      titleTe: 'ఉదయం స్లాట్',
      time: '09:00 AM – 01:00 PM',
      descEn: 'Fresh Consultations',
      descTe: 'ఉదయపు సంప్రదింపులు',
      icon: Sunrise
    },
    {
      id: 'Afternoon (02:00 PM - 05:00 PM)',
      titleEn: 'Afternoon Slot',
      titleTe: 'మధ్యాహ్నం స్లాట్',
      time: '02:00 PM – 05:00 PM',
      descEn: 'Mid-Day OPD',
      descTe: 'మధ్యాహ్న సమయం',
      icon: Sun
    },
    {
      id: 'Evening (05:00 PM - 08:00 PM)',
      titleEn: 'Evening Slot',
      titleTe: 'సాయంత్రం స్లాట్',
      time: '05:00 PM – 08:00 PM',
      descEn: 'Post-Work OPD',
      descTe: 'సాయంత్రం సమయం',
      icon: Moon
    }
  ];

  // Quick symptom tags that patients can click to toggle into reason box
  const quickSymptoms = [
    { id: 'back-pain', labelEn: 'Chronic Back Pain', labelTe: 'తీవ్ర నడుము నొప్పి' },
    { id: 'sciatica', labelEn: 'Sciatica / Leg Numbness', labelTe: 'తుంటి నొప్పి / కాళ్ల తిమ్మిర్లు' },
    { id: 'headache', labelEn: 'Severe Migraine / Headache', labelTe: 'తీవ్ర తలనొప్పి' },
    { id: 'neck-pain', labelEn: 'Neck & Arm Radiation', labelTe: 'మెడ & చేతి నొప్పి' },
    { id: 'vertigo', labelEn: 'Vertigo / Dizziness', labelTe: 'తల తిరగడం' },
    { id: 'opinion', labelEn: 'Second Surgical Opinion', labelTe: 'సర్జికల్ సెకండ్ ఒపీనియన్' }
  ];

  // Speciality Quick-Pills
  const specialityChips = [
    { id: 'all', labelEn: 'All Services', labelTe: 'అన్ని సేవలు', icon: '🩺' },
    { id: 'neurosurgery', labelEn: 'Neurosurgery', labelTe: 'న్యూరో సర్జరీ', icon: '🔬' },
    { id: 'spine-care', labelEn: 'Spine Care', labelTe: 'వెన్నెముక సంరక్షణ', icon: '🦴' },
    { id: 'neurology', labelEn: 'Neurology', labelTe: 'న్యూరాలజీ', icon: '🧠' },
    { id: 'stroke-care', labelEn: 'Stroke Care', labelTe: 'స్ట్రోక్ కేర్', icon: '⚡' },
    { id: 'brain-tumour-care', labelEn: 'Brain Tumour', labelTe: 'బ్రెయిన్ ట్యూమర్', icon: '🎯' },
    { id: 'pediatric-neurosurgery', labelEn: 'Pediatric Neuro', labelTe: 'పీడియాట్రిక్', icon: '🧸' },
    { id: 'neuro-trauma', labelEn: 'Neuro Trauma', labelTe: 'న్యూరో ట్రామా', icon: '🛡️' }
  ];

  // Check URL query params for pre-selection
  useEffect(() => {
    const docParam = searchParams.get('doctor');
    const specParam = searchParams.get('speciality');
    const treatParam = searchParams.get('treatment');
    const branchParam = searchParams.get('branch');

    if (branchParam) {
      setSelectedBranch(branchParam);
    }

    if (treatParam) {
      setFormData((prev) => ({ 
        ...prev, 
        specialityOrDoctor: specParam ? `${specParam} • ${treatParam}` : treatParam,
        reason: prev.reason || `Consultation request for ${treatParam}`
      }));
      if (specParam) setSelectedCategoryTab(specParam.toLowerCase().replace(/\s+/g, '-'));
    } else if (docParam) {
      setFormData((prev) => ({ ...prev, specialityOrDoctor: docParam }));
    } else if (specParam) {
      setFormData((prev) => ({ ...prev, specialityOrDoctor: specParam }));
      setSelectedCategoryTab(specParam.toLowerCase().replace(/\s+/g, '-'));
    }
  }, [searchParams]);

  // Active Clinic Branch object
  const activeBranch = useMemo(() => {
    if (!clinicLocations || clinicLocations.length === 0) {
      return {
        id: 'gumchi-junction',
        nameEn: 'Gumchi Junction Clinic',
        nameTe: 'గుమ్చి జంక్షన్ క్లినిక్',
        addressEn: settings.address,
        addressTe: settings.addressTe || settings.address,
        phone: settings.phone,
        timingsEn: '24×7 Emergency Available • Daily OPD',
        timingsTe: '24×7 అత్యవసరం • రోజువారీ సంప్రదింపులు'
      };
    }
    return clinicLocations.find(loc => loc.id === selectedBranch) || clinicLocations[0];
  }, [clinicLocations, selectedBranch, settings]);

  // Handle Quick Symptom Tag Click
  const toggleSymptom = (label) => {
    setFormData((prev) => {
      const current = prev.reason.trim();
      if (!current) {
        return { ...prev, reason: label };
      }
      if (current.includes(label)) {
        const cleaned = current
          .replace(new RegExp(`,?\\s*${label}`, 'g'), '')
          .replace(/^,\s*/, '')
          .trim();
        return { ...prev, reason: cleaned };
      }
      return { ...prev, reason: `${current}, ${label}` };
    });
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = t.appointment.validation.nameRequired;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = t.appointment.validation.phoneRequired;
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = t.appointment.validation.emailInvalid;
      }
    }

    if (!formData.specialityOrDoctor) {
      newErrors.specialityOrDoctor = t.appointment.validation.specialityRequired;
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = t.appointment.validation.dateRequired;
    } else {
      const selected = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = t.appointment.validation.dateFuture;
      }
    }

    if (!formData.consent) {
      newErrors.consent = t.appointment.validation.consentRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Submit Handler -> Formats Rich WhatsApp Message
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const waNum = settings.whatsappNumber ? settings.whatsappNumber.replace(/[^0-9]/g, '') : '919347455187';
    const cleanWaNum = waNum.startsWith('91') ? waNum : `91${waNum}`;

    const branchName = language === 'te' ? activeBranch.nameTe : activeBranch.nameEn;

    const formattedMessage = `*Online Outpatient Appointment Request*
🏥 *Clinic Center:* ${branchName}
👨‍⚕️ *Doctor:* Dr. Reddi Sankara Rao, M.Ch (Neurosurgery)
━━━━━━━━━━━━━━━━━━━━
👤 *Patient Name:* ${formData.fullName.trim()}
📱 *Contact Number:* ${formData.phone.trim()}
${formData.email.trim() ? `📧 *Email Address:* ${formData.email.trim()}\n` : ''}🩺 *Speciality / Treatment:* ${formData.specialityOrDoctor}
📅 *Preferred Date:* ${formData.preferredDate}
⏰ *Preferred Time Slot:* ${formData.preferredTime}
📝 *Reason / Symptoms:* ${formData.reason.trim() || 'General Neurological & Spine Clinical Evaluation'}
━━━━━━━━━━━━━━━━━━━━
Please check schedule availability and confirm the appointment token. Thank you!`;

    const waUrl = `https://wa.me/${cleanWaNum}?text=${encodeURIComponent(formattedMessage)}`;

    setTimeout(() => {
      const createdRecord = addAppointment({
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || null,
        branch: branchName,
        specialityOrDoctor: formData.specialityOrDoctor,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        reason: formData.reason.trim() || null,
        consentGiven: true
      });

      // Launch WhatsApp chat
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      setIsSubmitting(false);
      setSubmittedAppointment({
        ...createdRecord,
        branchName,
        waUrl
      });
    }, 600);
  };

  const copyAppointmentText = () => {
    if (!submittedAppointment) return;
    const text = `Appointment Request ID: ${submittedAppointment.id}\nPatient: ${submittedAppointment.fullName}\nClinic: ${submittedAppointment.branchName}\nSpeciality: ${submittedAppointment.specialityOrDoctor}\nSlot: ${submittedAppointment.preferredDate} (${submittedAppointment.preferredTime})`;
    navigator.clipboard.writeText(text);
    setCopiedPass(true);
    setTimeout(() => setCopiedPass(false), 2500);
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-[#FCFAF5] relative overflow-hidden">
      <SeoHelmet 
        title={language === 'te' ? 'అపాయింట్‌మెంట్ బుకింగ్ - బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్' : 'Book an Appointment - Brain Spine & Neuro Clinic'}
        description="Book an outpatient appointment with Dr. Reddi Sankara Rao, M.Ch (Neurosurgery) for brain, spine, and neurological consultations in Vizianagaram and Bobbili."
      />

      {/* Hero Banner */}
      <PageHero
        badge={language === 'te' ? 'ఓపీడీ సంప్రదింపుల బుకింగ్' : 'Official Outpatient Consultation Desk'}
        badgeIcon={<Calendar className="w-3.5 h-3.5 text-amber-400" />}
        title={language === 'te' ? 'అపాయింట్‌మెంట్ బుకింగ్' : 'Book an Appointment'}
        subtitle={language === 'te' ? 'డా. రెడ్డి శంకర రావు గారితో సంప్రదింపుల సమయాన్ని సులభంగా బుక్ చేసుకోండి' : 'Schedule a Comprehensive Consultation with Dr. Reddi Sankara Rao'}
        description={language === 'te'
          ? 'గుమ్చి జంక్షన్ (విజయనగరం) లేదా బొబ్బిలి బ్రాంచ్‌లో మీ అనుకూలమైన తేదీ మరియు సమయ స్లాట్‌ను ఎంచుకోండి. వివరాలు పూరించి తక్షణ వాట్సాప్ నిర్ధారణ పొందండి.'
          : 'Choose your preferred clinic branch, date, and morning/evening slot. Submit to connect directly with the clinic reception desk on WhatsApp.'}
        breadcrumbs={[{ label: language === 'te' ? 'అపాయింట్‌మెంట్ బుకింగ్' : 'Book Appointment' }]}
        bgImage="/images/facility-ot.jpg"
      />

      {/* 4 Feature Trust Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-8 sm:pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white/80 backdrop-blur-xs p-3.5 sm:p-4 rounded-2xl border border-amber-200/70 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Stethoscope className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-black text-slate-900 leading-tight">M.Ch Specialist</div>
              <div className="text-[11px] text-slate-500">Narayana Hrudayalaya Alumnus</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs p-3.5 sm:p-4 rounded-2xl border border-amber-200/70 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-black text-slate-900 leading-tight">Instant WhatsApp</div>
              <div className="text-[11px] text-slate-500">Fast 30-Min Reception Response</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs p-3.5 sm:p-4 rounded-2xl border border-amber-200/70 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-black text-slate-900 leading-tight">2 Clinic Centers</div>
              <div className="text-[11px] text-slate-500">Vizianagaram & Bobbili</div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xs p-3.5 sm:p-4 rounded-2xl border border-amber-200/70 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-black text-slate-900 leading-tight">100% Confidential</div>
              <div className="text-[11px] text-slate-500">Protected Clinical Data</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Studio Booking Experience (Desktop: 2 Columns / Mobile: Stacked) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* ========================================================= */}
          {/* LEFT COLUMN (4 Cols): DOCTOR SPOTLIGHT & LIVE DIGITAL PASS */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            
            {/* Doctor Spotlight Card */}
            <ScrollReveal direction="up" delay={0.05}>
              <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-amber-300/80 shadow-lg shadow-amber-500/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border-2 border-amber-500 shrink-0 shadow-md">
                    <img 
                      src="/images/dr-reddi-sankara-rao.jpg" 
                      alt="Dr. Reddi Sankara Rao" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" title="Verified Available" />
                  </div>

                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black uppercase tracking-wider border border-amber-300">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                      <span>{language === 'te' ? 'చీఫ్ న్యూరో సర్జన్' : 'Chief Neurosurgeon'}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">
                      {language === 'te' ? 'డా. రెడ్డి శంకర రావు' : 'Dr. Reddi Sankara Rao'}
                    </h3>
                    <p className="text-xs text-amber-800 font-bold">
                      MBBS, MS, M.Ch (Neurosurgery)
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      Narayana Hrudayalaya Bengaluru • APMC 48219
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-amber-100 grid grid-cols-2 gap-3 text-center">
                  <div className="bg-amber-50/60 rounded-xl p-2 border border-amber-200/60">
                    <div className="text-xs sm:text-sm font-black text-amber-900">11+ Years</div>
                    <div className="text-[10px] text-slate-600 font-medium">Surgical Experience</div>
                  </div>
                  <div className="bg-amber-50/60 rounded-xl p-2 border border-amber-200/60">
                    <div className="text-xs sm:text-sm font-black text-emerald-800">⭐ 5.0 Rating</div>
                    <div className="text-[10px] text-slate-600 font-medium">Google Verified</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* LIVE DIGITAL OPD APPOINTMENT PASS (Real-Time Visual Boarding Pass) */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-6 border-2 border-amber-400/60 shadow-2xl shadow-amber-500/10 relative overflow-hidden space-y-4">
                
                {/* Subtle Luxury Embellishment */}
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* Pass Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                      Live Digital OPD Pass
                    </span>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
                    TOKEN: OPD-9908
                  </span>
                </div>

                {/* Patient & Clinic Live Echo */}
                <div className="space-y-3">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Patient Name
                    </span>
                    <span className="text-base sm:text-lg font-black text-white tracking-wide block truncate">
                      {formData.fullName.trim() || (language === 'te' ? 'రోగి పేరు (ఇక్కడ కనిపిస్తుంది)' : 'Your Name Will Appear Here')}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Clinic Center
                      </span>
                      <span className="font-bold text-amber-300 block truncate">
                        {language === 'te' ? activeBranch.nameTe : activeBranch.nameEn}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Preferred Slot
                      </span>
                      <span className="font-bold text-slate-200 block truncate">
                        {formData.preferredTime.split(' ')[0]} Slot
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Appointment Date
                      </span>
                      <span className="font-bold text-amber-200 block">
                        {formData.preferredDate || 'Choose Date Below'}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Speciality / Reason
                      </span>
                      <span className="font-bold text-slate-300 block truncate">
                        {formData.specialityOrDoctor || 'Consultation Request'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Perforated Ticket Divider with Notches */}
                <div className="relative py-2">
                  <div className="border-t border-dashed border-slate-700 w-full" />
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FCFAF5] rounded-full" />
                  <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#FCFAF5] rounded-full" />
                </div>

                {/* Pass Footer: Barcode & WhatsApp Express Routing */}
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-6 h-6 text-amber-400 shrink-0" />
                    <span className="text-[10px] leading-tight text-slate-400">
                      ⚡ Express Routing to Reception Desk on WhatsApp
                    </span>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800">
                    Direct Slot
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Urgent Call-Out */}
            <div className="p-4 rounded-2xl bg-amber-100/70 border border-amber-300/80 flex items-center justify-between text-xs text-amber-950">
              <div className="space-y-0.5">
                <span className="font-black block">Need Immediate Emergency Assistance?</span>
                <span className="text-slate-600 text-[11px]">24×7 Trauma Helpline in Vizianagaram</span>
              </div>
              <a
                href={`tel:${settings.phone ? settings.phone.replace(/[^0-9]/g, '') : '9908981669'}`}
                className="shrink-0 px-3 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black text-xs shadow-xs transition-colors flex items-center gap-1"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN (7 Cols): CREATIVE INTERACTIVE BOOKING FORM */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={0.08}>
              <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-300 shadow-xl shadow-amber-500/10 space-y-8 relative">
                
                {/* Form Top Title Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-amber-100">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-black border border-amber-300/80 mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>{language === 'te' ? 'ఆన్‌లైన్ ఓపీడీ రిక్వెస్ట్' : 'Online OPD Booking Studio'}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {language === 'te' ? 'అపాయింట్‌మెంట్ వివరాలు నమోదు చేయండి' : 'Request Your Clinical Appointment'}
                    </h2>
                  </div>
                  <VerificationBadge isVerified={true} customLabelEn="Official Clinic Desk" customLabelTe="అధికారిక క్లినిక్ డెస్క్" />
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-7">
                  
                  {/* ======================================================= */}
                  {/* STEP 1: INTERACTIVE CLINIC BRANCH SELECTOR              */}
                  {/* ======================================================= */}
                  <div className="space-y-3">
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-amber-600" />
                      <span>1. {language === 'te' ? 'క్లినిక్ లొకేషన్ ఎంచుకోండి' : 'Choose Clinic Location'}</span>
                      <span className="text-rose-500">*</span>
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Branch 1: Gumchi Junction Main Clinic */}
                      <div
                        onClick={() => setSelectedBranch('gumchi-junction')}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                          selectedBranch === 'gumchi-junction'
                            ? 'border-amber-500 bg-amber-50/70 shadow-md shadow-amber-500/10 ring-2 ring-amber-300'
                            : 'border-slate-200 hover:border-amber-300 bg-white'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="inline-block px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wide mb-1 shadow-2xs">
                              {language === 'te' ? 'ప్రధాన క్లినిక్' : 'Main Center'}
                            </span>
                            <h4 className="font-black text-sm text-slate-900">
                              Gumchi Junction Clinic
                            </h4>
                            <p className="text-xs text-slate-600 leading-tight mt-1">
                              Sankaramatam Road (Kota Junction), Vizianagaram
                            </p>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                            selectedBranch === 'gumchi-junction'
                              ? 'border-amber-600 bg-amber-500 text-slate-950'
                              : 'border-slate-300'
                          }`}>
                            {selectedBranch === 'gumchi-junction' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                        <div className="pt-2 mt-2 border-t border-amber-200/60 flex items-center gap-1.5 text-[11px] font-bold text-amber-800">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>24×7 Emergency • Daily Consultations</span>
                        </div>
                      </div>

                      {/* Branch 2: Bobbili Branch Clinic */}
                      <div
                        onClick={() => setSelectedBranch('bobbili-branch')}
                        className={`p-4 rounded-2xl border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                          selectedBranch === 'bobbili-branch'
                            ? 'border-amber-500 bg-amber-50/70 shadow-md shadow-amber-500/10 ring-2 ring-amber-300'
                            : 'border-slate-200 hover:border-amber-300 bg-white'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="inline-block px-2 py-0.5 rounded-full bg-slate-900 text-amber-400 font-black text-[10px] uppercase tracking-wide mb-1 shadow-2xs">
                              {language === 'te' ? 'బ్రాంచ్ క్లినిక్' : 'Branch OPD'}
                            </span>
                            <h4 className="font-black text-sm text-slate-900">
                              Bobbili Branch Clinic
                            </h4>
                            <p className="text-xs text-slate-600 leading-tight mt-1">
                              Opp RTC Complex Ingate, beside Choudhary Bar, Bobbili
                            </p>
                          </div>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                            selectedBranch === 'bobbili-branch'
                              ? 'border-amber-600 bg-amber-500 text-slate-950'
                              : 'border-slate-300'
                          }`}>
                            {selectedBranch === 'bobbili-branch' && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                        </div>
                        <div className="pt-2 mt-2 border-t border-amber-200/60 flex items-center gap-1.5 text-[11px] font-bold text-amber-800">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          <span>Tue & Fri: 4:00 PM – 9:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ======================================================= */}
                  {/* STEP 2: SPECIALITY CHIPS & PROCEDURE SELECTOR           */}
                  {/* ======================================================= */}
                  <div className="space-y-3">
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <Stethoscope className="w-4 h-4 text-amber-600" />
                      <span>2. {language === 'te' ? 'స్పెషాలిటీ లేదా చికిత్సను ఎంచుకోండి' : 'Select Speciality or Treatment'}</span>
                      <span className="text-rose-500">*</span>
                    </label>

                    {/* Quick Speciality Pill Chips */}
                    <div className="flex flex-wrap gap-2 pt-0.5">
                      {specialityChips.map((chip) => {
                        const isSelected = selectedCategoryTab === chip.id || formData.specialityOrDoctor.toLowerCase().includes(chip.labelEn.toLowerCase());
                        return (
                          <button
                            key={chip.id}
                            type="button"
                            onClick={() => {
                              setSelectedCategoryTab(chip.id);
                              if (chip.id !== 'all') {
                                setFormData((prev) => ({ ...prev, specialityOrDoctor: chip.labelEn }));
                                if (errors.specialityOrDoctor) setErrors(e => ({ ...e, specialityOrDoctor: undefined }));
                              }
                            }}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 ${
                              isSelected
                                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-sm ring-2 ring-amber-300 font-black'
                                : 'bg-slate-100 hover:bg-amber-100/60 text-slate-700 border border-slate-200'
                            }`}
                          >
                            <span>{chip.icon}</span>
                            <span>{language === 'te' ? chip.labelTe : chip.labelEn}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Rich Dropdown with Full Optgroups */}
                    <div className="relative mt-2">
                      <Stethoscope className="w-4 h-4 text-amber-600 absolute left-3.5 top-3.5 pointer-events-none" />
                      <select
                        id="specialityOrDoctor"
                        name="specialityOrDoctor"
                        value={formData.specialityOrDoctor}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 transition-all font-medium ${
                          errors.specialityOrDoctor
                            ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                            : 'border-slate-300 focus:ring-amber-200 focus:border-amber-500 shadow-xs'
                        }`}
                      >
                        <option value="">-- {t.appointment.selectSpecialityOrDoctor} --</option>
                        <optgroup label="Consultant Specialists">
                          {doctors.map((doc) => (
                            <option key={doc.id} value={doc.nameEn}>
                              {language === 'te' ? `${doc.nameTe} (${doc.titleTe})` : `${doc.nameEn} - ${doc.titleEn}`}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label={language === 'te' ? 'క్లినికల్ విభాగాలు' : 'Clinical Specialities'}>
                          {specialities.map((spec) => (
                            <option key={spec.id} value={spec.nameEn}>
                              {language === 'te' ? spec.nameTe : spec.nameEn}
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label={language === 'te' ? 'ప్రత్యేక శస్త్రచికిత్సలు & చికిత్సలు' : 'Specialized Procedures & Surgeries'}>
                          {specialities.flatMap((spec) => 
                            (spec.treatmentsList || []).map((t) => (
                              <option key={`${spec.id}-${t.id}`} value={`${spec.nameEn} • ${t.nameEn}`}>
                                {language === 'te' ? `${t.nameTe} (${spec.nameEn})` : `${t.nameEn} (${spec.nameEn})`}
                              </option>
                            ))
                          )}
                        </optgroup>
                      </select>
                    </div>
                    {errors.specialityOrDoctor && (
                      <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.specialityOrDoctor}</span>
                      </p>
                    )}
                  </div>

                  {/* ======================================================= */}
                  {/* STEP 3: PREFERRED DATE & TIME WINDOW (VISUAL CARDS)     */}
                  {/* ======================================================= */}
                  <div className="space-y-3">
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span>3. {language === 'te' ? 'తేదీ & సమయ స్లాట్ ఎంచుకోండి' : 'Choose Date & Time Window'}</span>
                      <span className="text-rose-500">*</span>
                    </label>

                    {/* Preferred Date Picker */}
                    <div className="space-y-1">
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-amber-600 absolute left-3.5 top-3.5" />
                        <input
                          type="date"
                          id="preferredDate"
                          name="preferredDate"
                          min={todayStr}
                          value={formData.preferredDate}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 transition-all font-bold ${
                            errors.preferredDate
                              ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                              : 'border-slate-300 focus:ring-amber-200 focus:border-amber-500 shadow-xs'
                          }`}
                        />
                      </div>
                      {errors.preferredDate && (
                        <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.preferredDate}</span>
                        </p>
                      )}
                    </div>

                    {/* 3 Visual Time Slot Chips (No Plain Dropdown!) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                      {timeSlots.map((slot) => {
                        const Icon = slot.icon;
                        const isSelected = formData.preferredTime === slot.id;
                        return (
                          <button
                            key={slot.id}
                            type="button"
                            onClick={() => setFormData((prev) => ({ ...prev, preferredTime: slot.id }))}
                            className={`p-3 rounded-2xl border-2 transition-all text-left flex flex-col justify-between active:scale-98 cursor-pointer ${
                              isSelected
                                ? 'border-amber-500 bg-gradient-to-br from-amber-50 to-amber-100/50 shadow-sm ring-2 ring-amber-300'
                                : 'border-slate-200 hover:border-amber-200 bg-white'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                                <Icon className="w-4 h-4 text-amber-600" />
                              </div>
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                isSelected ? 'border-amber-600 bg-amber-500 text-slate-950' : 'border-slate-300'
                              }`}>
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </div>
                            <div className="mt-2">
                              <div className="text-xs font-black text-slate-900">
                                {language === 'te' ? slot.titleTe : slot.titleEn}
                              </div>
                              <div className="text-[11px] font-bold text-amber-800">
                                {slot.time}
                              </div>
                              <div className="text-[10px] text-slate-500">
                                {language === 'te' ? slot.descTe : slot.descEn}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* ======================================================= */}
                  {/* STEP 4: PATIENT DETAILS & QUICK SYMPTOM CHIPS           */}
                  {/* ======================================================= */}
                  <div className="space-y-4 pt-1">
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                      <User className="w-4 h-4 text-amber-600" />
                      <span>4. {language === 'te' ? 'రోగి సమాచారం' : 'Patient Information'}</span>
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="fullName" className="block text-xs font-bold text-slate-700">
                          {t.appointment.fullName} <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder={t.appointment.fullNamePlaceholder}
                            disabled={isSubmitting}
                            className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm text-slate-800 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all font-medium ${
                              errors.fullName
                                ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                                : 'border-slate-300 focus:ring-amber-200 focus:border-amber-500 shadow-xs'
                            }`}
                          />
                        </div>
                        {errors.fullName && (
                          <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      {/* Mobile Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="block text-xs font-bold text-slate-700">
                          {t.appointment.phone} <span className="text-rose-500">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t.appointment.phonePlaceholder}
                            disabled={isSubmitting}
                            className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm text-slate-800 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all font-medium ${
                              errors.phone
                                ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                                : 'border-slate-300 focus:ring-amber-200 focus:border-amber-500 shadow-xs'
                            }`}
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email (Optional) */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-bold text-slate-700">
                        {t.appointment.email}
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t.appointment.emailPlaceholder}
                          disabled={isSubmitting}
                          className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm text-slate-800 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all font-medium ${
                            errors.email
                              ? 'border-rose-400 focus:ring-rose-200'
                              : 'border-slate-300 focus:ring-amber-200 focus:border-amber-500 shadow-xs'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Reason for Visit / Symptoms with Quick-Tags */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label htmlFor="reason" className="block text-xs font-bold text-slate-700">
                          {t.appointment.reason}
                        </label>
                        <span className="text-[11px] text-amber-800 font-bold">
                          {language === 'te' ? 'లక్షణాలను ఎంచుకోండి ↓' : 'Tap to add symptoms ↓'}
                        </span>
                      </div>

                      {/* Creative Quick Symptom Chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {quickSymptoms.map((sym) => {
                          const label = language === 'te' ? sym.labelTe : sym.labelEn;
                          const isPicked = formData.reason.includes(label);
                          return (
                            <button
                              key={sym.id}
                              type="button"
                              onClick={() => toggleSymptom(label)}
                              className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition-all active:scale-95 flex items-center gap-1 ${
                                isPicked
                                  ? 'bg-amber-500 text-slate-950 font-black shadow-xs ring-1 ring-amber-400'
                                  : 'bg-slate-100 hover:bg-amber-100/60 text-slate-700 border border-slate-200'
                              }`}
                            >
                              <span>{isPicked ? '✓' : '+'}</span>
                              <span>{label}</span>
                            </button>
                          );
                        })}
                      </div>

                      <textarea
                        id="reason"
                        name="reason"
                        rows="3"
                        value={formData.reason}
                        onChange={handleChange}
                        placeholder={t.appointment.reasonPlaceholder}
                        disabled={isSubmitting}
                        className="w-full p-3.5 rounded-2xl border border-slate-300 text-sm text-slate-800 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500 transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  {/* ======================================================= */}
                  {/* STEP 5: PRIVACY CONSENT & GLOWING ACTION BUTTONS        */}
                  {/* ======================================================= */}
                  <div className="space-y-4 pt-2">
                    <label className="flex items-start gap-3 cursor-pointer p-3 rounded-2xl bg-amber-50/40 border border-amber-200/60">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="mt-0.5 w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500 shrink-0"
                      />
                      <span className="text-xs text-slate-600 leading-relaxed font-medium">
                        {t.appointment.consentLabel} <span className="text-rose-500 font-bold">*</span>
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.consent}</span>
                      </p>
                    )}

                    {/* Primary Submit Button: High-Aesthetic Gold Shimmer */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full py-4 px-6 rounded-2xl font-black text-sm sm:text-base bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-xl shadow-amber-500/25 active:scale-98 transition-all flex items-center justify-center gap-3 overflow-hidden cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {/* Shimmer sweep animation */}
                      <span className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out" />
                      
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Preparing Appointment Request...</span>
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-5 h-5 text-slate-950 fill-current" />
                          <span>
                            {language === 'te' 
                              ? 'వాట్సాప్ ద్వారా అపాయింట్‌మెంట్ నిర్ధారించండి' 
                              : 'Request Appointment via WhatsApp'}
                          </span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    {/* Secondary Direct Call Button */}
                    <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
                      <span className="font-medium">Prefer telephone booking?</span>
                      <a
                        href={`tel:${settings.phone ? settings.phone.replace(/[^0-9]/g, '') : '9908981669'}`}
                        className="inline-flex items-center gap-1.5 font-bold text-amber-800 hover:text-amber-950 underline"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                        <span>Call Reception: {settings.phone}</span>
                      </a>
                    </div>
                  </div>

                </form>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Appointment WhatsApp Confirmation Modal with Digital Pass */}
      {submittedAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border-2 border-amber-300 shadow-2xl space-y-5 relative">
            <button
              type="button"
              onClick={() => setSubmittedAppointment(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="text-center space-y-1.5">
              <span className="inline-block px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-900 font-black text-xs uppercase tracking-wide">
                Request Recorded Successfully
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                {language === 'te' ? 'అపాయింట్‌మెంట్ అభ్యర్థన సిద్ధమైంది!' : 'Appointment Request Prepared!'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                {language === 'te'
                  ? 'మీ అపాయింట్‌మెంట్ వివరాలతో వాట్సాప్ ఓపెన్ చేయబడింది. దయచేసి వాట్సాప్‌లో "Send" నొక్కండి.'
                  : 'WhatsApp has opened with your appointment request. Tap "Send" in WhatsApp to dispatch it directly to clinic reception.'}
              </p>
            </div>

            {/* Generated Pass Summary */}
            <div className="bg-[#FCFAF5] p-4 rounded-2xl border border-amber-200 text-xs space-y-2 text-slate-700">
              <div className="flex justify-between pb-2 border-b border-amber-100">
                <span className="text-slate-500 font-medium">Request Token:</span>
                <span className="font-mono font-bold text-amber-900">{submittedAppointment.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Patient:</span>
                <span className="font-bold text-slate-900">{submittedAppointment.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Center:</span>
                <span className="font-bold text-amber-800">{submittedAppointment.branchName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Specialist:</span>
                <span className="font-semibold">{submittedAppointment.specialityOrDoctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Date & Slot:</span>
                <span className="font-semibold text-slate-900">
                  {submittedAppointment.preferredDate} ({submittedAppointment.preferredTime})
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-1">
              {submittedAppointment.waUrl && (
                <a
                  href={submittedAppointment.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-black text-xs shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Re-open WhatsApp Chat</span>
                </a>
              )}

              <button
                type="button"
                onClick={copyAppointmentText}
                className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
              >
                {copiedPass ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                <span>{copiedPass ? 'Details Copied!' : 'Copy Summary'}</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setSubmittedAppointment(null)}
              className="w-full py-2.5 text-center text-xs text-slate-500 hover:text-slate-800 font-medium"
            >
              Close & Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookAppointment;
