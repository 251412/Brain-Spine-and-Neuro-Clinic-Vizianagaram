import React, { useState, useEffect } from 'react';
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
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { VerificationBadge } from '../components/VerificationBadge';
import { PageHero } from '../components/PageHero';
import { ScrollReveal } from '../components/ScrollReveal';

export const BookAppointment = () => {
  const { language, t } = useLanguage();
  const { settings, doctors, specialities, addAppointment } = useClinicData();
  const [searchParams] = useSearchParams();

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

  // Check URL query params for pre-selection
  useEffect(() => {
    const docParam = searchParams.get('doctor');
    const specParam = searchParams.get('speciality');
    const treatParam = searchParams.get('treatment');

    if (treatParam) {
      setFormData((prev) => ({ 
        ...prev, 
        specialityOrDoctor: specParam ? `${specParam} • ${treatParam}` : treatParam,
        reason: prev.reason || `Consultation request for ${treatParam}`
      }));
    } else if (docParam) {
      setFormData((prev) => ({ ...prev, specialityOrDoctor: docParam }));
    } else if (specParam) {
      setFormData((prev) => ({ ...prev, specialityOrDoctor: specParam }));
    }
  }, [searchParams]);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const waNum = settings.whatsappNumber ? settings.whatsappNumber.replace(/[^0-9]/g, '') : '919347455187';
    const cleanWaNum = waNum.startsWith('91') ? waNum : `91${waNum}`;

    const formattedMessage = `Hello, I would like to request an appointment at Brain, Spine & Neuro Clinic, Vizianagaram.

Patient Name: ${formData.fullName.trim()}
Contact Number: ${formData.phone.trim()}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Reason for Consultation: ${formData.reason.trim() || 'General Neurological Evaluation'}

Please let me know the available appointment slot and confirm my booking.

Thank you.`;

    const waUrl = `https://wa.me/${cleanWaNum}?text=${encodeURIComponent(formattedMessage)}`;

    setTimeout(() => {
      const createdRecord = addAppointment({
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || null,
        specialityOrDoctor: formData.specialityOrDoctor,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        reason: formData.reason.trim() || null,
        consentGiven: true
      });

      // Open WhatsApp click-to-chat in new tab/app
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      setIsSubmitting(false);
      setSubmittedAppointment({
        ...createdRecord,
        waUrl
      });

      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        specialityOrDoctor: '',
        preferredDate: '',
        preferredTime: 'Morning (09:00 AM - 01:00 PM)',
        reason: '',
        consent: false
      });
    }, 500);
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-[#FCFAF5]">
      <SeoHelmet 
        title={language === 'te' ? 'అపాయింట్‌మెంట్ బుకింగ్ - బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్' : 'Book an Appointment - Brain Spine & Neuro Clinic'}
        description="Submit an outpatient appointment request for neurological evaluation or spine consultation. Frontend prototype demo."
      />

      {/* Hero Banner */}
      <PageHero
        badge={language === 'te' ? 'ఓపీడీ సంప్రదింపుల బుకింగ్' : 'Outpatient Consultation Booking'}
        badgeIcon={<Calendar className="w-3.5 h-3.5 text-amber-400" />}
        title={language === 'te' ? 'అపాయింట్‌మెంట్ బుకింగ్' : 'Book an Appointment'}
        subtitle={language === 'te' ? 'డా. రెడ్డి శంకర రావు గారితో సంప్రదింపుల సమయాన్ని నిర్ణయించుకోండి' : 'Schedule a Comprehensive Consultation with Dr. Reddi Sankara Rao'}
        description={language === 'te'
          ? 'విజయనగరంలోని గుమ్చి జంక్షన్ క్లినిక్‌లో ఉదయం లేదా సాయంత్రం సంప్రదింపుల సమయాన్ని ఎంచుకోండి.'
          : 'Choose your preferred date, morning or evening slot for clinical evaluation at Gumchi Junction, Vizianagaram.'}
        breadcrumbs={[{ label: language === 'te' ? 'అపాయింట్‌మెంట్ బుకింగ్' : 'Book Appointment' }]}
        bgImage="/images/facility-ot.jpg"
      />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 py-10 sm:py-14 space-y-8">

        {/* Main Form Card */}
        <ScrollReveal direction="up" delay={0.08}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-200/70 shadow-lg shadow-amber-500/5">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center justify-between">
              <span>{t.appointment.formCardTitle}</span>
              <VerificationBadge isVerified={true} customLabelEn="Official Clinic Desk" customLabelTe="అధికారిక క్లినిక్ డెస్క్" />
            </h2>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="block text-xs font-semibold text-slate-700">
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
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-300 focus:ring-amber-200 focus:border-amber-500'
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
                <label htmlFor="phone" className="block text-xs font-semibold text-slate-700">
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
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.phone
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-300 focus:ring-amber-200 focus:border-amber-500'
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

              {/* Email (Optional) */}
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-semibold text-slate-700">
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
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-400 focus:ring-rose-200'
                        : 'border-slate-300 focus:ring-amber-200 focus:border-amber-500'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Speciality or Doctor */}
              <div className="space-y-1.5">
                <label htmlFor="specialityOrDoctor" className="block text-xs font-semibold text-slate-700">
                  {t.appointment.specialityOrDoctor} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <select
                    id="specialityOrDoctor"
                    name="specialityOrDoctor"
                    value={formData.specialityOrDoctor}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.specialityOrDoctor
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-300 focus:ring-amber-200 focus:border-amber-500'
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

              {/* Preferred Date */}
              <div className="space-y-1.5">
                <label htmlFor="preferredDate" className="block text-xs font-semibold text-slate-700">
                  {t.appointment.preferredDate} <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    min={todayStr}
                    value={formData.preferredDate}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 transition-all ${
                      errors.preferredDate
                        ? 'border-rose-400 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-300 focus:ring-amber-200 focus:border-amber-500'
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

              {/* Preferred Time Window */}
              <div className="space-y-1.5">
                <label htmlFor="preferredTime" className="block text-xs font-semibold text-slate-700">
                  {t.appointment.preferredTime}
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500 transition-all"
                  >
                    <option value="Morning (09:00 AM - 01:00 PM)">{t.appointment.timeMorning}</option>
                    <option value="Afternoon (02:00 PM - 05:00 PM)">{t.appointment.timeAfternoon}</option>
                    <option value="Evening (05:00 PM - 08:00 PM)">{t.appointment.timeEvening}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Reason for Visit */}
            <div className="space-y-1.5">
              <label htmlFor="reason" className="block text-xs font-semibold text-slate-700">
                {t.appointment.reason}
              </label>
              <textarea
                id="reason"
                name="reason"
                rows="3"
                value={formData.reason}
                onChange={handleChange}
                placeholder={t.appointment.reasonPlaceholder}
                disabled={isSubmitting}
                className="w-full p-3.5 rounded-xl border border-slate-300 text-sm text-slate-800 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500 transition-all"
              />
            </div>

            {/* Privacy & Demo Consent Checkbox */}
            <div className="space-y-1">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="mt-1 w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500 shrink-0"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  {t.appointment.consentLabel} <span className="text-rose-500">*</span>
                </span>
              </label>
              {errors.consent && (
                <p className="text-xs text-rose-600 flex items-center gap-1 pl-7">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{errors.consent}</span>
                </p>
              )}
            </div>

            {/* Submit Button (Triggers validation & opens WhatsApp prefilled message) */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 disabled:opacity-60 disabled:cursor-not-allowed transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    <span>Preparing WhatsApp Request...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Request Appointment via WhatsApp</span>
                  </>
                )}
              </button>
              <p className="text-xs text-slate-500">
                {language === 'te' 
                  ? 'సమర్పించిన తర్వాత, అపాయింట్‌మెంట్ వివరాలతో వాట్సాప్ ఓపెన్ అవుతుంది. దయచేసి క్లినిక్ నిర్ధారణ కొరకు మెసేజ్ పంపండి.' 
                  : 'Submitting will open WhatsApp with your prefilled appointment request to send to our clinic desk for confirmation.'}
              </p>
            </div>
          </form>
        </div>
        </ScrollReveal>

        {/* Clinic Reception & Location Information Section */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="bg-white rounded-3xl p-6 border-2 border-amber-300/60 space-y-3 shadow-md shadow-amber-500/5">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>{language === 'te' ? 'ప్రధాన క్లినిక్ సమాచారం (Gumchi Junction Clinic)' : 'Main Clinic Reception & Location'}</span>
              </h3>
              <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-300">
                Vizianagaram – 535002
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">Gumchi Junction Clinic:</strong>
                  <span>{settings.address}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900 font-semibold">24×7 Direct Helpline:</strong>
                  <a href={`tel:${settings.phone}`} className="text-amber-700 hover:text-amber-900 font-black text-sm tracking-wide">
                    {settings.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Appointment WhatsApp Confirmation Modal */}
      {submittedAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-amber-200 shadow-2xl space-y-5 relative">
            <button
              type="button"
              onClick={() => setSubmittedAppointment(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-slate-900">
                {language === 'te' ? 'అపాయింట్‌మెంట్ అభ్యర్థన సిద్ధమైంది' : 'Appointment Request Initiated'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'te'
                  ? 'మీ అపాయింట్‌మెంట్ వివరాలతో వాట్సాప్ ఓపెన్ చేయబడింది. దయచేసి వాట్సాప్‌లో వివరాలను సమీక్షించి, "Send" బటన్ నొక్కండి.'
                  : 'WhatsApp has opened with your prefilled appointment request. Please review and tap "Send" in WhatsApp to deliver your request to clinic reception.'}
              </p>
            </div>

            {/* Critical Confirmation Notice */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 text-xs space-y-1.5">
              <div className="font-bold flex items-center gap-1.5 text-amber-900">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Notice: Appointment Confirmation Pending</span>
              </div>
              <p className="leading-relaxed text-amber-900">
                {language === 'te'
                  ? 'ముఖ్య గమనిక: వాట్సాప్ ఓపెన్ అయినంత మాత్రాన అపాయింట్‌మెంట్ నిర్ధారించబడదు. క్లినిక్ సిబ్బంది లభ్యతను పరిశీలించి మీకు నిర్ధారణ సమయం పంపిన తర్వాతే బుకింగ్ ఖరారవుతుంది.'
                  : 'Please note: Your appointment is NOT confirmed merely because WhatsApp opened. The clinic team will review schedule availability and reply with your confirmed slot.'}
              </p>
            </div>

            {/* Stored Record Summary */}
            <div className="bg-[#FCFAF5] p-4 rounded-xl border border-amber-200/80 text-xs space-y-1.5 text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">{t.appointment.successModal.requestId}:</span>
                <span className="font-mono font-bold text-amber-800">{submittedAppointment.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Patient:</span>
                <span className="font-semibold">{submittedAppointment.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Specialist:</span>
                <span className="font-semibold">{submittedAppointment.specialityOrDoctor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Preferred Slot:</span>
                <span className="font-semibold">{submittedAppointment.preferredDate} ({submittedAppointment.preferredTime})</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
              {submittedAppointment.waUrl && (
                <a
                  href={submittedAppointment.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Re-open WhatsApp Chat</span>
                </a>
              )}

              <button
                type="button"
                onClick={() => setSubmittedAppointment(null)}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-all"
              >
                Close & Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
