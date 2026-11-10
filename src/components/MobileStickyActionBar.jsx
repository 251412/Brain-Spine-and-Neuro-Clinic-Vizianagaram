import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';

export const MobileStickyActionBar = () => {
  const { language } = useLanguage();
  const { settings } = useClinicData();

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_call_mobile_sticky', {
        event_category: 'Conversion',
        event_label: 'Mobile Sticky Call Button',
        phone_number: settings.phone
      });
    }
  };

  const handleBookClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_book_mobile_sticky', {
        event_category: 'Conversion',
        event_label: 'Mobile Sticky Book Button'
      });
    }
  };

  return (
    <aside 
      aria-label="Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#060D1A]/95 backdrop-blur-md border-t border-amber-500/30 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(0,0,0,0.35)]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
          onClick={handleCallClick}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 border border-amber-400/60 text-amber-300 font-extrabold text-xs active:scale-95 transition-all shadow-xs"
          aria-label="Call Clinic Now"
        >
          <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <span className="truncate">
            {language === 'te' ? 'కాల్ చేయండి' : 'Call Clinic'}
          </span>
        </a>

        {/* Book Appointment */}
        <Link
          to="/appointment"
          onClick={handleBookClick}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 active:scale-95 transition-all"
          aria-label="Book Doctor Appointment"
        >
          <Calendar className="w-4 h-4 text-slate-950 shrink-0" />
          <span className="truncate">
            {language === 'te' ? 'అపాయింట్‌మెంట్' : 'Book Appointment'}
          </span>
        </Link>
      </div>
    </aside>
  );
};

export default MobileStickyActionBar;

