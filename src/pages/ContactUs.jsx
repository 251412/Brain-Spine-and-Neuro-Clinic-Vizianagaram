import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  PhoneCall, 
  ExternalLink,
  Mail,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { VerificationBadge } from '../components/VerificationBadge';
import { OurLocationsSection } from '../components/OurLocationsSection';
import { PageHero } from '../components/PageHero';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal';

export const ContactUs = () => {
  const { language, t } = useLanguage();
  const { settings } = useClinicData();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim() || !formState.message.trim()) {
      setStatusMessage('Please fill in the required fields (Name, Phone, and Message).');
      return;
    }

    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setStatusMessage(t.contact.messageSentSuccess);
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF5]">
      <SeoHelmet 
        title={language === 'te' ? 'మమ్మల్ని సంప్రదించండి - బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్' : 'Contact Us - Brain Spine & Neuro Clinic'}
        description="Get in touch with Brain Spine & Neuro Clinic for clinical enquiries, location guidelines, and outpatient consultation schedules."
      />

      {/* Hero Banner */}
      <PageHero
        badge={language === 'te' ? 'సంప్రదింపులు & క్లినిక్ సమాచారం' : 'Consultation & Location Enquiries'}
        badgeIcon={<MessageSquare className="w-3.5 h-3.5 text-amber-400" />}
        title={language === 'te' ? 'మమ్మల్ని సంప్రదించండి' : 'Contact Us'}
        subtitle={language === 'te' ? 'సరైన వైద్య సంరక్షణ పొందడానికి మేము మీకు సహాయం చేస్తాము' : 'We Are Here to Help You Access the Right Care'}
        description={language === 'te'
          ? 'గుమ్చి జంక్షన్ మరియు బొబ్బిలి బ్రాంచ్‌లలో అపాయింట్‌మెంట్లు, క్లినిక్ చిరునామా మరియు సంప్రదింపుల కోసం మా బృందాన్ని సంప్రదించండి.'
          : 'Reach out to our clinical reception at Gumchi Junction or Bobbili Branch for consultations, directions, and specialist enquiries.'}
        breadcrumbs={[{ label: language === 'te' ? 'మమ్మల్ని సంప్రదించండి' : 'Contact Us' }]}
        bgImage="/images/facility-ot.jpg"
      />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-12 sm:py-16 space-y-12">

        {/* Contact Info Cards Grid */}
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          {/* Address */}
          <ScrollStaggerItem direction="up" distance={24}>
            <div className="bg-white rounded-3xl p-6 border-2 border-amber-200/60 shadow-xs flex flex-col justify-between space-y-4 h-full">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm">{t.contact.clinicAddressLabel}</h3>
                  <VerificationBadge isVerified={true} variant="compact" />
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {settings.address}
                </p>
              </div>
              <a
                href={settings.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950"
              >
                <span>View on Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollStaggerItem>

          {/* Phone */}
          <ScrollStaggerItem direction="up" distance={24}>
            <div className="bg-white rounded-3xl p-6 border-2 border-amber-200/60 shadow-xs flex flex-col justify-between space-y-4 h-full">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm">{t.contact.phoneLabel}</h3>
                  <VerificationBadge isVerified={true} variant="compact" />
                </div>
                <p className="text-base font-black text-amber-700 tracking-wide">
                  {settings.phone}
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                <a
                  href={`tel:${settings.phone ? settings.phone.replace(/[^0-9]/g, '') : '9908981669'}`}
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 px-3.5 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/25"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Click to Call ({settings.phone})</span>
                </a>
                <a
                  href="https://wa.me/919908981669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 px-3.5 py-2 rounded-xl transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp: +91 99089 81669</span>
                </a>
              </div>
            </div>
          </ScrollStaggerItem>

          {/* Email & Clinical Helpdesk */}
          <ScrollStaggerItem direction="up" distance={24}>
            <div className="bg-white rounded-3xl p-6 border-2 border-amber-200/60 shadow-xs flex flex-col justify-between space-y-4 h-full">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm">Clinical Email Desk</h3>
                  <VerificationBadge isVerified={true} variant="compact" />
                </div>
                <p className="text-xs text-slate-700 font-medium break-all">
                  {settings.email}
                </p>
              </div>
              <a
                href={`mailto:${settings.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950"
              >
                <span>Write to Clinic</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </ScrollStaggerItem>

          {/* Opening Hours & 24x7 */}
          <ScrollStaggerItem direction="up" distance={24}>
            <div className="bg-white rounded-3xl p-6 border-2 border-amber-200/60 shadow-xs flex flex-col justify-between space-y-4 h-full">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-600" />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-sm">{t.contact.hoursLabel}</h3>
                  <VerificationBadge isVerified={true} variant="compact" />
                </div>
                <div className="text-xs text-slate-700 space-y-1">
                  <p className="font-bold text-slate-900">24×7 Emergency Services</p>
                  <p className="text-slate-600">Daily Consultations Available</p>
                </div>
              </div>
              <span className="text-[11px] text-amber-700 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Available 24×7</span>
              </span>
            </div>
          </ScrollStaggerItem>
        </ScrollStagger>

        {/* 24×7 Clinical Guidance & Second Opinion Banner */}
        <ScrollReveal direction="zoom" distance={24}>
          <div className="bg-gradient-to-r from-[#060D1A] via-[#0E1726] to-[#060D1A] text-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-amber-500/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>{language === 'te' ? '24×7 తక్షణ వైద్య సహాయం' : '24×7 Immediate Clinical Care'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                {language === 'te' 
                  ? 'మెదడు లేదా వెన్నెముక చికిత్సపై నిపుణుల సలహా కావాలా?' 
                  : 'Need Clinical Evaluation or Surgical Second Opinion?'}
              </h3>
              <p className="text-xs sm:text-sm text-amber-100/90 max-w-2xl">
                {language === 'te'
                  ? `మా సీనియర్ న్యూరోసర్జరీ విభాగాన్ని నేరుగా ఫోన్ ద్వారా సంప్రదించి అపాయింట్‌మెంట్ లేదా అత్యవసర సలహా పొందవచ్చు.`
                  : `Connect directly with our senior neurosurgical team at ${settings.phone} for outpatient consultations, MRI reviews, and acute trauma guidance.`}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${settings.phone ? settings.phone.replace(/[^0-9]/g, '') : '9908981669'}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-bold text-sm shadow-md hover:from-amber-400 hover:to-amber-500 transition-all active:scale-95"
              >
                <PhoneCall className="w-4 h-4 text-slate-950" />
                <span>{language === 'te' ? 'ఇప్పుడే కాల్ చేయండి' : 'Call: +91 99089 81669'}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Contact Form (Demo) */}
        <div className="max-w-3xl mx-auto w-full">
          <ScrollReveal direction="up" distance={28}>
            <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-amber-200/70 shadow-lg shadow-amber-500/5 space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {t.contact.getInTouchTitle}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  {language === 'te' 
                    ? 'వైద్య సందేహం ఉందా లేదా సెకండ్ ఒపీనియన్ కావాలా? మాకు సందేశం పంపండి.' 
                    : 'Have a clinical question or require a second opinion? Send us a message.'}
                </p>
              </div>

              {statusMessage && (
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">{t.contact.formName} *</label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Anand Varma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">{t.contact.formPhone} *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 9876543210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">{t.contact.formEmail}</label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="e.g. user@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-700">{t.contact.formSubject}</label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="e.g. Spine Surgery Second Opinion"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-700">{t.contact.formMessage} *</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your enquiry..."
                    className="w-full p-3.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-black text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
                >
                  {isSending ? (
                    <span>{language === 'te' ? 'సందేశం పంపబడుతోంది...' : 'Sending Message...'}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.contact.sendBtn}</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>

        {/* Dedicated "Our Locations" Section featuring 2 Clinic Cards and Interactive Map */}
        <ScrollReveal direction="up" distance={30}>
          <OurLocationsSection id="locations" className="mt-14 rounded-3xl" />
        </ScrollReveal>
      </div>
    </div>
  );
};
