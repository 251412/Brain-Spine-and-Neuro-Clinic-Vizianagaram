import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  PhoneCall, 
  Calendar, 
  Menu, 
  X, 
  Globe, 
  Clock,
  ShieldCheck,
  Stethoscope,
  MapPin
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { settings } = useClinicData();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation headers - clicking each navigates immediately to the next page
  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/specialities', label: t.nav.specialities },
    { to: '/gallery', label: t.nav.gallery },
    { to: '/blog', label: t.nav.blog },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white/95 backdrop-blur-md border-b border-amber-200/80 transition-colors">
      {/* Top Utility Micro-bar - Strictly ONE straight line on mobile & desktop */}
      <div className="bg-[#060d1a] text-slate-200 text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-10 xl:px-14 border-b border-amber-500/20 w-full">
        <div className="w-full flex items-center justify-between gap-2 flex-nowrap">
          {/* Emergency Helpline - strictly on 1 line */}
          <div className="flex items-center gap-2 sm:gap-4 shrink min-w-0">
            <a 
              href={`tel:${settings.emergencyPhone ? settings.emergencyPhone.split('/')[0].trim().replace(/[^0-9+]/g, '') : '9908981669'}`}
              className="inline-flex items-center gap-1.5 text-rose-300 font-semibold hover:text-white transition-colors whitespace-nowrap text-[11px] sm:text-xs shrink-0"
              title="Emergency Helpline"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-500 animate-ping shrink-0" />
              {/* Desktop Full Text */}
              <span className="hidden sm:inline">{t.nav.emergencyHelpline}</span>
              {/* Mobile Compact Text - strictly fitting on one line */}
              <span className="sm:hidden inline-flex items-center gap-1">
                <span className="font-bold text-rose-400">{language === 'te' ? 'అత్యవసరం:' : '24/7:'}</span>
                <span className="font-extrabold text-white tracking-wide">9908981669</span>
              </span>
            </a>

            <span className="hidden md:inline-flex items-center gap-1.5 text-amber-200/80 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{settings.consultingHours.split('|')[0]}</span>
            </span>

            <a
              href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-amber-300 hover:text-white font-semibold transition-colors whitespace-nowrap"
              title="Call Clinic Reception"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Call: +91 {settings.phone}</span>
            </a>
          </div>

          {/* Right Side: Language Switcher & Location */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto">
            <span className="hidden xl:inline-flex items-center gap-1.5 text-amber-300 text-xs font-semibold bg-amber-950/40 px-2.5 py-0.5 rounded-full border border-amber-500/30 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Gumchi Junction, {settings.city}</span>
            </span>

            {/* Language Switcher */}
            <div className="flex items-center gap-0.5 sm:gap-1 bg-slate-900/90 rounded-full px-2 py-0.5 border border-amber-500/30 shrink-0">
              <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-400 shrink-0" />
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs transition-colors ${
                  language === 'en' 
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-xs' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                English
              </button>
              <span className="text-slate-600 text-[10px] sm:text-xs">|</span>
              <button
                type="button"
                onClick={() => setLanguage('te')}
                className={`px-1.5 sm:px-2 py-0.5 rounded text-[10px] sm:text-xs transition-colors ${
                  language === 'te' 
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-xs' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                తెలుగు
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <div className="flex items-center justify-between min-h-[5.5rem] sm:min-h-[6rem] lg:min-h-[6.5rem] py-2 sm:py-2.5 gap-2 xl:gap-4">
          {/* Logo with official golden emblem & typography - 100% transparent background */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-xl py-1 px-1 transition-all shrink-0 bg-transparent"
            title="Brain Spine & Neuro Clinic - Vizianagaram"
          >
            <img 
              src="/images/clinic-logo-transparent.png" 
              alt="Brain Spine & Neuro Clinic - Care • Compassion • Cure - Vizianagaram" 
              className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain transition-transform group-hover:scale-[1.03] mobile-glow-aura bg-transparent"
            />
          </Link>

          {/* Desktop Nav Links (Strictly on ONE single line without text wrapping) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-nowrap">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-2.5 xl:px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black shadow-[0_0_16px_rgba(201,149,36,0.45)] border border-amber-300'
                      : link.isAlert
                      ? 'text-rose-600 hover:bg-rose-50 hover:text-rose-700'
                      : 'text-slate-700 hover:text-amber-900 hover:bg-amber-50/80'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs: Emergency Care placed immediately on the left of Book Appointment */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5 shrink-0">
            <NavLink
              to="/emergency"
              className={({ isActive }) =>
                `inline-flex items-center gap-1.5 px-3 xl:px-3.5 py-2.5 rounded-xl text-xs xl:text-sm font-bold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-rose-600 text-white border-rose-600 shadow-[0_0_15px_rgba(244,63,94,0.5)]'
                    : 'bg-rose-50 hover:bg-rose-100 text-rose-700 border-rose-200/90 shadow-xs'
                }`
              }
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
              <PhoneCall className="w-3.5 h-3.5 text-rose-600 shrink-0" />
              <span className="whitespace-nowrap">{t.nav.emergency}</span>
            </NavLink>

            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 px-3.5 xl:px-4 py-2.5 rounded-xl text-xs xl:text-sm font-black whitespace-nowrap bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-[0_0_20px_rgba(201,149,36,0.4)] hover:shadow-[0_0_30px_rgba(201,149,36,0.7)] border border-amber-300/80 transition-all transform active:scale-95 shrink-0"
            >
              <Calendar className="w-4 h-4 shrink-0 text-slate-950" />
              <span className="whitespace-nowrap">{t.nav.bookNow}</span>
            </Link>
          </div>

          {/* Mobile menu trigger with Radiant Glowing Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/emergency"
              className="sm:hidden inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold bg-gradient-to-r from-rose-50 to-rose-100/90 text-rose-700 border border-rose-300 mobile-glow-rose active:scale-95 whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping shadow-[0_0_8px_#f43f5e]" />
              <span>{language === 'te' ? 'అత్యవసరం' : '24/7'}</span>
            </Link>

            <Link
              to="/appointment"
              className="sm:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 border border-amber-300/80 mobile-glow-gold active:scale-95 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-950" />
              <span>{language === 'te' ? 'బుకింగ్' : 'Book'}</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 bg-amber-50/70 border border-amber-200/80 shadow-[0_0_10px_rgba(201,149,36,0.2)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-700" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Each header click navigates to next page & closes menu) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-amber-200/80 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-[0_0_15px_rgba(201,149,36,0.4)] border border-amber-300'
                      : 'text-slate-700 hover:bg-amber-50 hover:text-amber-900'
                  }`
                }
              >
                <span>{link.label}</span>
              </NavLink>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to="/emergency"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 px-4 rounded-xl text-sm font-bold bg-rose-50 text-rose-700 border border-rose-200 shadow-[0_0_15px_rgba(244,63,94,0.35)] flex items-center justify-center gap-2 active:scale-98"
              >
                <PhoneCall className="w-4 h-4 text-rose-600" />
                <span>{t.nav.emergency}</span>
              </Link>

              <Link
                to="/appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 px-4 rounded-xl text-sm font-black bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 shadow-[0_0_20px_rgba(201,149,36,0.45)] border border-amber-300/80 flex items-center justify-center gap-2 active:scale-98"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>{t.nav.bookNow}</span>
              </Link>

              <a
                href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full text-center py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200"
              >
                {settings.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
