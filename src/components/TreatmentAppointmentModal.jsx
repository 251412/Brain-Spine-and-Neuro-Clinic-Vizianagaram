import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  PhoneCall, 
  Sparkles,
  Stethoscope,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';

export const TreatmentAppointmentModal = ({ 
  isOpen, 
  onClose, 
  treatment, 
  speciality 
}) => {
  const { language } = useLanguage();
  const { settings, addAppointment } = useClinicData();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredBranch: 'gumchi-junction',
    preferredDate: '',
    preferredTime: 'Morning (09:00 AM - 01:00 PM)',
    reason: '',
    consent: true
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedAppointment, setSubmittedAppointment] = useState(null);

  if (!isOpen || !treatment) return null;

  const treatmentTitle = language === 'te' 
    ? (treatment.nameTe || treatment.nameEn) 
    : treatment.nameEn;
  const treatmentDesc = language === 'te' 
    ? (treatment.descTe || treatment.descEn) 
    : treatment.descEn;
  const specialityTitle = speciality 
    ? (language === 'te' ? speciality.nameTe : speciality.nameEn) 
    : '';

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = language === 'te' 
        ? 'దయచేసి రోగి పూర్తి పేరు నమోదు చేయండి (కనీసం 3 అక్షరాలు).' 
        : 'Please enter patient full name (at least 3 characters).';
    }

    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = language === 'te' 
        ? 'దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి.' 
        : 'Please enter a valid 10-digit mobile number.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = language === 'te' 
          ? 'దయచేసి సరైన ఈమెయిల్ నమోదు చేయండి.' 
          : 'Please enter a valid email address.';
      }
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = language === 'te' 
        ? 'దయచేసి అపాయింట్‌మెంట్ తేదీని ఎంచుకోండి.' 
        : 'Please select an appointment date.';
    } else {
      const selected = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = language === 'te' 
          ? 'తేదీ ఈ రోజు లేదా భవిష్యత్తు తేదీ అయి ఉండాలి.' 
          : 'Appointment date must be today or a future date.';
      }
    }

    if (!formData.consent) {
      newErrors.consent = language === 'te' 
        ? 'దయచేసి నిబంధనలను అంగీకరించండి.' 
        : 'Please accept consent to proceed.';
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
    if (!validate()) return;

    setIsSubmitting(true);

    const branchLabel = formData.preferredBranch === 'gumchi-junction'
      ? 'Gumchi Junction Clinic (Main Clinic, Vizianagaram)'
      : 'Bobbili Branch Clinic (Opp RTC Complex)';

    const waNum = settings.whatsappNumber ? settings.whatsappNumber.replace(/[^0-9]/g, '') : '919347455187';
    const cleanWaNum = waNum.startsWith('91') ? waNum : `91${waNum}`;

    const formattedMessage = `*New Appointment Request: ${treatment.nameEn}*
Brain Spine & Neuro Clinic

👤 *Patient Name:* ${formData.fullName.trim()}
📞 *Mobile:* ${formData.phone.trim()}
🏥 *Selected Clinic:* ${branchLabel}
🩺 *Speciality:* ${speciality?.nameEn || 'Neurosurgery'}
🔬 *Specific Treatment:* ${treatment.nameEn}
📅 *Preferred Date:* ${formData.preferredDate}
⏰ *Preferred Slot:* ${formData.preferredTime}
📝 *Symptoms / Medical Notes:* ${formData.reason.trim() || 'Consultation & Clinical Evaluation'}

Please confirm the slot availability and doctor schedule. Thank you.`;

    const waUrl = `https://wa.me/${cleanWaNum}?text=${encodeURIComponent(formattedMessage)}`;

    setTimeout(() => {
      const createdRecord = addAppointment({
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || null,
        specialityOrDoctor: `${speciality?.nameEn || 'Neurosurgery'} • ${treatment.nameEn}`,
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        preferredBranch: formData.preferredBranch,
        treatmentId: treatment.id,
        treatmentName: treatment.nameEn,
        reason: formData.reason.trim() || null,
        consentGiven: true
      });

      // Open WhatsApp click-to-chat
      window.open(waUrl, '_blank', 'noopener,noreferrer');

      setIsSubmitting(false);
      setSubmittedAppointment({
        ...createdRecord,
        waUrl,
        branchLabel
      });
    }, 400);
  };

  const handleResetAndClose = () => {
    setSubmittedAppointment(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      preferredBranch: 'gumchi-junction',
      preferredDate: '',
      preferredTime: 'Morning (09:00 AM - 01:00 PM)',
      reason: '',
      consent: true
    });
    setErrors({});
    onClose();
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border-2 border-amber-300 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-5 sm:p-6 border-b border-amber-500/30">
          <button
            type="button"
            onClick={handleResetAndClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="pr-10 space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{specialityTitle || (language === 'te' ? 'వైద్య విభాగం' : 'Clinical Speciality')}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {language === 'te' ? 'అపాయింట్‌మెంట్ బుకింగ్' : 'Book Appointment for'}
            </h2>
            <p className="text-amber-400 font-bold text-base sm:text-lg">
              {treatmentTitle}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Treatment Brief Info Card */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-xs sm:text-sm text-slate-700 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <Stethoscope className="w-4 h-4 text-amber-700" />
                {language === 'te' ? 'చికిత్సా వివరాలు:' : 'Procedure Overview:'}
              </span>
              {treatment.category && (
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white border border-amber-300 text-amber-900">
                  {language === 'te' ? (treatment.categoryTe || treatment.category) : treatment.category}
                </span>
              )}
            </div>
            <p className="leading-relaxed text-slate-600">
              {treatmentDesc}
            </p>
          </div>

          {submittedAppointment ? (
            /* Success confirmation screen */
            <div className="text-center py-6 px-4 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500 to-green-400 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  {language === 'te' ? 'అపాయింట్‌మెంట్ అభ్యర్థన నమోదు చేయబడింది!' : 'Appointment Request Registered!'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  {language === 'te'
                    ? 'మీ అపాయింట్‌మెంట్ వివరాలు క్లినిక్ రిసెప్షన్‌కు చేరాయి. నిర్ధారణ కొరకు వాట్సాప్ తెరవబడింది.'
                    : 'Your consultation request has been logged. WhatsApp has been opened to connect directly with the reception desk.'}
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left max-w-md mx-auto text-xs sm:text-sm space-y-2">
                <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                  <span className="text-slate-500">{language === 'te' ? 'రోగి పేరు' : 'Patient Name'}:</span>
                  <span className="font-bold text-slate-900">{submittedAppointment.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                  <span className="text-slate-500">{language === 'te' ? 'ఫోన్ నంబర్' : 'Phone'}:</span>
                  <span className="font-bold text-slate-900">{submittedAppointment.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                  <span className="text-slate-500">{language === 'te' ? 'చికిత్స' : 'Treatment'}:</span>
                  <span className="font-bold text-amber-800">{submittedAppointment.treatmentName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200/80 pb-1.5">
                  <span className="text-slate-500">{language === 'te' ? 'తేదీ & సమయం' : 'Date & Slot'}:</span>
                  <span className="font-bold text-slate-900">{submittedAppointment.preferredDate} ({submittedAppointment.preferredTime.split(' ')[0]})</span>
                </div>
                <div className="flex justify-between pt-0.5">
                  <span className="text-slate-500">{language === 'te' ? 'క్లినిక్' : 'Clinic'}:</span>
                  <span className="font-bold text-slate-900 text-right">{submittedAppointment.branchLabel}</span>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={submittedAppointment.waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{language === 'te' ? 'వాట్సాప్ సందేశం పంపండి' : 'Open WhatsApp Chat'}</span>
                </a>
                
                <a
                  href={`tel:${formData.preferredBranch === 'bobbili-branch' ? '9951142275' : '9908981669'}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-amber-600" />
                  <span>{language === 'te' ? 'క్లినిక్ హెల్ప్‌లైన్ కాల్ చేయండి' : 'Call Reception'}</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline"
                >
                  {language === 'te' ? 'ఈ విండో మూసివేయండి' : 'Close this window'}
                </button>
              </div>
            </div>
          ) : (
            /* Patient Details Form */
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <User className="w-4 h-4 text-amber-600" />
                <span>{language === 'te' ? 'రోగి సమాచారం నమోదు చేయండి' : 'Enter Patient Details'}</span>
              </h3>

              {/* Full Name & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {language === 'te' ? 'రోగి పూర్తి పేరు' : 'Full Name of Patient'} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder={language === 'te' ? 'ఉదా: రమేష్ కుమార్' : 'e.g. Ramesh Kumar'}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName 
                          ? 'border-red-400 focus:ring-red-300' 
                          : 'border-slate-300 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.fullName}</p>
                  )}
                </div>

                {/* Mobile Phone */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {language === 'te' ? 'మొబైల్ ఫోన్ నంబర్' : 'Mobile Phone Number'} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={language === 'te' ? 'ఉదా: 9876543210' : 'e.g. 9876543210'}
                      maxLength={10}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone 
                          ? 'border-red-400 focus:ring-red-300' 
                          : 'border-slate-300 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Clinic Branch & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Preferred Clinic Location */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {language === 'te' ? 'క్లినిక్ లొకేషన్ ఎంచుకోండి' : 'Preferred Clinic Location'} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <select
                      name="preferredBranch"
                      value={formData.preferredBranch}
                      onChange={handleChange}
                      className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none appearance-none"
                    >
                      <option value="gumchi-junction">
                        {language === 'te' ? 'గుమ్చి జంక్షన్ క్లినిక్ (ప్రధాన శాఖ, విజయనగరం)' : 'Gumchi Junction Clinic (Main Clinic, Vizianagaram)'}
                      </option>
                      <option value="bobbili-branch">
                        {language === 'te' ? 'బొబ్బిలి బ్రాంచ్ క్లినిక్ (RTC కాంప్లెక్స్ ఎదురుగా)' : 'Bobbili Branch Clinic (Opp RTC Complex)'}
                      </option>
                    </select>
                  </div>
                </div>

                {/* Email (Optional) */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {language === 'te' ? 'ఈమెయిల్ అడ్రస్ (ఐచ్ఛికం)' : 'Email Address (Optional)'}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="patient@example.com"
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.email 
                          ? 'border-red-400 focus:ring-red-300' 
                          : 'border-slate-300 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Preferred Date & Time Window Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Preferred Date */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {language === 'te' ? 'అపాయింట్‌మెంట్ తేదీ' : 'Preferred Appointment Date'} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="date"
                      name="preferredDate"
                      min={todayStr}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 transition-all ${
                        errors.preferredDate 
                          ? 'border-red-400 focus:ring-red-300' 
                          : 'border-slate-300 focus:border-amber-500 focus:ring-amber-200'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.preferredDate}</p>
                  )}
                </div>

                {/* Time Window */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    {language === 'te' ? 'అనుకూల సమయం (స్లాట్)' : 'Preferred Time Slot'}
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full pl-9 pr-8 py-2.5 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none appearance-none"
                    >
                      <option value="Morning (09:00 AM - 01:00 PM)">
                        {language === 'te' ? 'ఉదయం (09:00 AM - 01:00 PM)' : 'Morning (09:00 AM - 01:00 PM)'}
                      </option>
                      <option value="Evening (04:00 PM - 08:00 PM)">
                        {language === 'te' ? 'సాయంత్రం (04:00 PM - 08:00 PM)' : 'Evening (04:00 PM - 08:00 PM)'}
                      </option>
                      <option value="Emergency Evaluation (Immediate)">
                        {language === 'te' ? 'అత్యవసర మూల్యాంకనం (Immediate)' : 'Emergency Evaluation (Immediate)'}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Symptoms / Medical Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1">
                  {language === 'te' ? 'లక్షణాలు / మునుపటి నివేదికల వివరాలు (ఐచ్ఛికం)' : 'Symptoms / Relevant History (Optional)'}
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <textarea
                    name="reason"
                    rows={2}
                    value={formData.reason}
                    onChange={handleChange}
                    placeholder={
                      language === 'te'
                        ? 'లక్షణాలు లేదా సమస్య వ్యవధిని క్లుప్తంగా వివరించండి (ఉదా: 2 వారాలుగా తీవ్ర నడుము నొప్పి, ఎడమ కాలు తిమ్మిర్లు)...'
                        : 'Describe your symptoms or reports (e.g. chronic sciatica, headache duration, previous MRI/CT details)...'
                    }
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 focus:outline-none"
                  />
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-0.5 rounded text-amber-600 focus:ring-amber-500 border-slate-300"
                  />
                  <span>
                    {language === 'te'
                      ? 'నేను ఇచ్చిన వివరాలు డాక్టర్ మరియు క్లినిక్ రిసెప్షన్ సంప్రదింపుల కోసం అని అంగీకరిస్తున్నాను.'
                      : 'I consent to sharing these clinical details with Brain, Spine & Neuro Clinic reception to schedule an outpatient evaluation.'}
                  </span>
                </label>
                {errors.consent && (
                  <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.consent}</p>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl font-black text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <Calendar className="w-4 h-4" />
                  <span>
                    {isSubmitting 
                      ? (language === 'te' ? 'నమోదు అవుతోంది...' : 'Confirming Request...')
                      : (language === 'te' ? 'అపాయింట్‌మెంట్ బుక్ చేయండి & వాట్సాప్ తెరవండి' : 'Confirm & Book via WhatsApp')}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
                >
                  {language === 'te' ? 'రద్దు చేయి' : 'Cancel'}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>
                  {language === 'te'
                    ? '24×7 అత్యవసర సేవలకు నేరుగా 9908981669 కు కాల్ చేయవచ్చు.'
                    : 'For 24×7 neuro-emergencies, you may call directly at 9908981669.'}
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
