import React, { useState } from 'react';
import { 
  X, 
  Send, 
  Clock, 
  Calendar, 
  ShieldAlert, 
  FileText, 
  Sparkles,
  MessageCircle,
  Stethoscope
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';

export const WhatsAppWidget = () => {
  const { language, t } = useLanguage();
  const { settings, doctors } = useClinicData();
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  // Clean WhatsApp phone number - strictly official number +91 99089 81669
  const cleanNumber = '919908981669';

  // Predefined quick inquiry templates
  const quickOptions = [
    {
      id: 'appointment',
      icon: Calendar,
      labelEn: 'Book Appointment with Dr. Reddi Sankara Rao',
      labelTe: 'డా. రెడ్డి శంకర రావు అపాయింట్‌మెంట్',
      msgEn: 'Hello Dr. Reddi Sankara Rao, I would like to book an OPD consultation at Brain Spine & Neuro Clinic, Vizianagaram.',
      msgTe: 'నమస్కారం డాక్టర్ రెడ్డి శంకర రావు గారు, నేను బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్ విజయనగరంలో ఓపీ అపాయింట్‌మెంట్ బుక్ చేసుకోవాలనుకుంటున్నాను.'
    },
    {
      id: 'mri',
      icon: FileText,
      labelEn: 'Second Opinion on MRI / Spine Scans',
      labelTe: 'MRI / వెన్నెముక స్కాన్లపై రెండో అభిప్రాయం',
      msgEn: 'Hello Doctor, I have MRI/CT diagnostic reports and would like a clinical second opinion for brain/spine surgery.',
      msgTe: 'నమస్కారం డాక్టర్, నా వద్ద బ్రెయిన్/స్పైన్ MRI రిపోర్టులు ఉన్నాయి, శస్త్రచికిత్సపై మీ రెండో అభిప్రాయం కోరుతున్నాను.'
    },
    {
      id: 'emergency',
      icon: ShieldAlert,
      labelEn: 'Urgent Neuro / Stroke Guidance',
      labelTe: 'అత్యవసర న్యూరో / స్ట్రోక్ సలహా',
      msgEn: 'EMERGENCY: I need urgent neurological guidance for a patient at Vizianagaram.',
      msgTe: 'అత్యవసరం: విజయనగరంలో రోగికి తక్షణ న్యూరో వైద్య సలహా మరియు మార్గదర్శకత్వం అవసరం.'
    },
    {
      id: 'timing',
      icon: Clock,
      labelEn: 'Clinic OPD Timings & Location',
      labelTe: 'ఓపీ సమయాలు & క్లినిక్ లొకేషన్ వివరాలు',
      msgEn: 'Hello, please share the OPD consulting hours and clinic directions for Gumchi Junction, Sankaramatam Road (Kota Junction), Vizianagaram – 535002.',
      msgTe: 'నమస్కారం, దయచేసి విజయనగరం గుమ్చి జంక్షన్, శంకరమఠం రోడ్ (కోట జంక్షన్) క్లినిక్ సమయాలు మరియు లొకేషన్ వివరాలు తెలపగలరు.'
    }
  ];

  const handleStartChat = (messageText) => {
    const textToSend = messageText || customMessage || (
      language === 'te' 
        ? 'నమస్కారం, బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్ విజయనగరంలో కన్సల్టేషన్ కొరకు సంప్రదిస్తున్నాను.' 
        : 'Hello Brain Spine & Neuro Clinic, I would like to enquire about a clinical consultation.'
    );
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(textToSend)}`;
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = whatsappUrl;
    } else {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Buttons Container (Bottom-Right, safe area offset) */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 select-none pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]">
        {/* WhatsApp Main Floating Button with Radiant Emerald Glow */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_0_22px_rgba(37,211,102,0.7)] border-2 border-emerald-300/60 hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          title="Chat with us on WhatsApp"
          aria-label="Open WhatsApp Chat Widget"
        >
          {/* Online Radar Ripple */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

          {/* Official WhatsApp Glyph SVG */}
          <svg className="w-7 h-7 fill-current relative z-10" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.818-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>

          {/* Hover Tooltip */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
            {language === 'te' ? 'వాట్సాప్‌లో సంప్రదించండి' : 'Chat on WhatsApp'}
          </span>
        </button>
      </div>

      {/* WhatsApp Quick Chat Modal Popup */}
      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-3 sm:right-6 z-50 w-[94vw] sm:w-[380px] max-w-[420px] bg-white rounded-3xl shadow-2xl border-2 border-[#E8D6A5] overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-[#060D1A] p-4 text-white relative border-b border-[#E8D6A5]/40">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src="/images/dr-reddi-sankara-rao.jpg"
                    alt="Dr. Reddi Sankara Rao"
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#C99524] shadow-md"
                  />
                  <span className="w-3 h-3 rounded-full bg-[#25D366] absolute bottom-0 right-0 border-2 border-[#060D1A]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white flex items-center gap-1.5">
                    <span>Dr. Reddi Sankara Rao</span>
                  </h3>
                  <p className="text-[11px] text-[#F5E7BF] font-medium">
                    Brain Spine & Neuro Clinic • Vizianagaram
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-300">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{language === 'te' ? 'ఆన్‌లైన్‌లో అందుబాటులో ఉంది' : 'Online • Direct WhatsApp Assistance'}</span>
              </span>
              <span className="text-slate-300">{settings.whatsappNumber}</span>
            </div>
          </div>

          {/* Chat Body & Quick Options */}
          <div className="p-4 bg-slate-50 space-y-3.5 max-h-[380px] overflow-y-auto">
            {/* Clinic greeting speech bubble */}
            <div className="bg-white p-3.5 rounded-2xl rounded-tl-sm border border-slate-200/80 shadow-xs space-y-1 text-xs text-slate-700">
              <p className="font-semibold text-slate-900">
                {language === 'te' 
                  ? 'నమస్కారం! మేము మీకు ఎలా సహాయపడగలం?' 
                  : 'Hello! How can we assist you with brain & spine care today?'}
              </p>
              <p className="text-[11px] text-slate-500">
                {language === 'te'
                  ? 'క్రింది అంశాలలో ఒకదాన్ని ఎంచుకోండి లేదా మీ సందేశాన్ని టైప్ చేసి వాట్సాప్‌లో పంపండి:'
                  : 'Tap a quick topic below or type your enquiry to chat directly on WhatsApp:'}
              </p>
            </div>

            {/* Quick Template Cards */}
            <div className="space-y-2">
              {quickOptions.map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleStartChat(language === 'te' ? opt.msgTe : opt.msgEn)}
                    className="w-full p-2.5 rounded-xl bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-300 text-left transition-all flex items-center gap-2.5 group shadow-xs active:scale-98"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-600 group-hover:text-slate-950 text-amber-700 flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-800 group-hover:text-amber-950 flex-1 leading-tight">
                      {language === 'te' ? opt.labelTe : opt.labelEn}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Message Input Footer */}
          <div className="p-3 bg-white border-t border-slate-200">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleStartChat(customMessage);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder={language === 'te' ? 'మీ సందేశాన్ని టైప్ చేయండి...' : 'Type message here...'}
                className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50"
              />
              <button
                type="submit"
                className="px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold flex items-center gap-1 shadow-sm transition-all"
                title="Send via WhatsApp"
              >
                <span>{language === 'te' ? 'పంపండి' : 'Chat'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
};

export default WhatsAppWidget;
