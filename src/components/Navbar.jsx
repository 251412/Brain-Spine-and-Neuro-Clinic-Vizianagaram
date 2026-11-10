import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  PhoneCall, 
  Calendar, 
  Menu, 
  X, 
  Globe, 
  Clock, 
  ShieldCheck, 
  Stethoscope, 
  MapPin,
  ChevronDown,
  Building2,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const { settings } = useClinicData();
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [branchesDropdownOpen, setBranchesDropdownOpen] = useState(false);
  const [mobileBranchesOpen, setMobileBranchesOpen] = useState(false);
  const branchesDropdownRef = useRef(null);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (branchesDropdownRef.current && !branchesDropdownRef.current.contains(event.target)) {
        setBranchesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setBranchesDropdownOpen(false);
    setMobileBranchesOpen(false);
  }, [location.pathname]);

  // Check if current route is within Branches section
  const isBranchesActive = 
    location.pathname === '/branches' || 
    location.pathname === '/branches/' ||
    location.pathname.startsWith('/neurosurgeon-in-vizianagaram') ||
    location.pathname.startsWith('/neurosurgeon-in-bobbili');

  // Desktop navigation items (Exact expected order: Home | About Us | Doctor Profile | Specialities | Branches ▼ | Blog | Contact)
  const navItems = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/dr-reddi-sankara-rao/', label: language === 'te' ? 'డాక్టర్ ప్రొఫైల్' : 'Doctor Profile' },
    { to: '/specialities', label: t.nav.specialities },
    // Branches handled specially with dropdown
    { to: '/blog', label: t.nav.blog },
    { to: '/contact', label: t.nav.contact },
  ];

  const branches = [
    {
      to: '/neurosurgeon-in-vizianagaram/',
      name: language === 'te' ? 'విజయనగరం (ప్రధాన కేంద్రం)' : 'Vizianagaram',
      subtitle: language === 'te' ? 'గుమ్చి జంక్షన్ • 24/7 అత్యవసర సేవలు' : 'Main Center (Gumchi Jnc)',
      badge: language === 'te' ? '24/7' : '24x7 OT'
    },
    {
      to: '/neurosurgeon-in-bobbili/',
      name: language === 'te' ? 'బొబ్బిలి (ఓపీడీ క్లినిక్)' : 'Bobbili',
      subtitle: language === 'te' ? 'RTC కాంప్లెక్స్ ఎదురుగా • మంగళ & శుక్ర' : 'OPD Branch (RTC Complex)',
      badge: language === 'te' ? 'ఓపీడీ' : 'OPD'
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white/95 backdrop-blur-md border-b border-amber-200/80 transition-colors">
      {/* Top Utility Micro-bar - Strictly ONE straight line on mobile & desktop */}
      <div className="bg-[#060d1a] text-slate-200 text-xs py-1.5 sm:py-2 px-3 sm:px-6 lg:px-10 xl:px-14 border-b border-amber-500/20 w-full">
        <div className="w-full flex items-center justify-between gap-2 flex-nowrap">
          {/* Emergency Helpline - hidden on mobile, displayed on desktop/tablet */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-4 shrink min-w-0">
            <a 
              href={`tel:${settings.emergencyPhone ? settings.emergencyPhone.split('/')[0].trim().replace(/[^0-9+]/g, '') : '9908981669'}`}
              className="inline-flex items-center gap-1.5 text-rose-300 font-semibold hover:text-white transition-colors whitespace-nowrap text-xs shrink-0"
              title="Emergency Helpline"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping shrink-0" />
              <span>{t.nav.emergencyHelpline}</span>
            </a>

            <span className="hidden md:inline-flex items-center gap-1.5 text-amber-200/80 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{settings.consultingHours.split('|')[0]}</span>
            </span>

            <a
              href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white font-semibold transition-colors whitespace-nowrap"
              title="Call Clinic Reception"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Call: +91 {settings.phone}</span>
            </a>
          </div>

          {/* Right Side: Language Switcher & Location */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto">
            <Link 
              to="/branches/"
              className="hidden xl:inline-flex items-center gap-1.5 text-amber-300 text-xs font-semibold bg-amber-950/40 hover:bg-amber-900/60 px-2.5 py-0.5 rounded-full border border-amber-500/30 whitespace-nowrap transition-colors"
              title="View all clinic branches"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Vizianagaram & Bobbili Branches</span>
            </Link>

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
          
          {/* Logo with official golden emblem & typography */}
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

          {/* Desktop Nav Links (Home | About Us | Doctor Profile | Specialities | Branches ▼ | Blog | Contact) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 flex-nowrap">
            {/* 1. Home */}
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black shadow-[0_0_16px_rgba(201,149,36,0.45)] border border-amber-300'
                    : 'text-slate-700 hover:text-amber-900 hover:bg-amber-50/80'
                }`
              }
            >
              {t.nav.home}
            </NavLink>

            {/* 2. About Us */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black shadow-[0_0_16px_rgba(201,149,36,0.45)] border border-amber-300'
                    : 'text-slate-700 hover:text-amber-900 hover:bg-amber-50/80'
                }`
              }
            >
              {t.nav.about}
            </NavLink>

            {/* 3. Doctor Profile */}
            <NavLink
              to="/dr-reddi-sankara-rao/"
              className={({ isActive }) =>
                `px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black shadow-[0_0_16px_rgba(201,149,36,0.45)] border border-amber-300'
                    : 'text-slate-700 hover:text-amber-900 hover:bg-amber-50/80'
                }`
              }
            >
              {language === 'te' ? 'డాక్టర్ ప్రొఫైల్' : 'Doctor Profile'}
            </NavLink>

            {/* 4. Specialities */}
            <NavLink
              to="/specialities"
              className={({ isActive }) =>
                `px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black shadow-[0_0_16px_rgba(201,149,36,0.45)] border border-amber-300'
                    : 'text-slate-700 hover:text-amber-900 hover:bg-amber-50/80'
                }`
              }
            >
              {t.nav.specialities}
            </NavLink>

            {/* 5. Branches ▼ Dropdown */}
            <div 
              ref={branchesDropdownRef}
              className="relative shrink-0"
              onMouseEnter={() => setBranchesDropdownOpen(true)}
              onMouseLeave={() => setBranchesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setBranchesDropdownOpen(!branchesDropdownOpen)}
                aria-expanded={branchesDropdownOpen}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1.5 px-2.5 xl:px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                  isBranchesActive
                    ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black shadow-[0_0_16px_rgba(201,149,36,0.45)] border border-amber-300'
                    : 'text-slate-700 hover:text-amber-900 hover:bg-amber-50/80'
                }`}
              >
                <span>{language === 'te' ? 'శాఖలు' : 'Branches'}</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    branchesDropdownOpen ? 'rotate-180 text-slate-950' : 'text-slate-500'
                  }`} 
                />
              </button>

              {/* Animated Desktop Dropdown Menu */}
              {branchesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-72 rounded-2xl bg-white border border-amber-200/90 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  role="menu"
                >
                  {/* Common /branches landing page shortcut */}
                  <Link
                    to="/branches/"
                    onClick={() => setBranchesDropdownOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold text-amber-950 hover:bg-amber-50 transition-colors border-b border-amber-100 mb-1 group"
                  >
                    <span className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-amber-600" />
                      <span>{language === 'te' ? 'అన్ని శాఖలు చూడండి' : 'View All Branches'}</span>
                    </span>
                    <span className="text-[10px] text-amber-700 font-bold uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">→</span>
                  </Link>

                  {/* Branch items */}
                  {branches.map((b) => (
                    <Link
                      key={b.to}
                      to={b.to}
                      onClick={() => setBranchesDropdownOpen(false)}
                      className={`flex flex-col gap-0.5 px-3.5 py-2.5 rounded-xl transition-all ${
                        location.pathname === b.to || location.pathname === b.to.replace(/\/$/, '')
                          ? 'bg-amber-100/90 text-amber-950 font-bold border border-amber-300/80'
                          : 'hover:bg-amber-50/90 text-slate-800'
                      }`}
                      role="menuitem"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{b.name}</span>
                        </span>
                        <span className="text-[10px] font-black uppercase px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-900 border border-amber-400/40">
                          {b.badge}
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-500 pl-5 leading-tight">
                        {b.subtitle}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 6. Blog */}
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black shadow-[0_0_16px_rgba(201,149,36,0.45)] border border-amber-300'
                    : 'text-slate-700 hover:text-amber-900 hover:bg-amber-50/80'
                }`
              }
            >
              {t.nav.blog}
            </NavLink>

            {/* 7. Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black shadow-[0_0_16px_rgba(201,149,36,0.45)] border border-amber-300'
                    : 'text-slate-700 hover:text-amber-900 hover:bg-amber-50/80'
                }`
              }
            >
              {t.nav.contact}
            </NavLink>
          </nav>

          {/* Action CTAs: Emergency Care & Book Appointment */}
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

          {/* Mobile menu trigger with Compact Emergency Care & Hamburger */}
          <div className="flex items-center gap-1.5 min-[360px]:gap-2 lg:hidden">
            <Link
              to="/emergency"
              className="sm:hidden inline-flex items-center gap-1 px-2 py-1 min-[360px]:px-2.5 min-[360px]:py-1.5 rounded-lg text-[11px] font-bold bg-gradient-to-r from-rose-50 to-rose-100/90 text-rose-700 border border-rose-300/90 mobile-glow-rose active:scale-95 whitespace-nowrap shadow-2xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping shadow-[0_0_6px_#f43f5e] shrink-0" />
              <PhoneCall className="w-3 h-3 text-rose-600 shrink-0" />
              <span>{language === 'te' ? 'అత్యవసర' : 'Emergency'}</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-800 bg-amber-50/80 hover:bg-amber-100/80 border border-amber-300/90 shadow-[0_0_10px_rgba(201,149,36,0.2)] active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-[26px] h-[26px] text-amber-700" strokeWidth={2.1} />
              ) : (
                <Menu className="w-[26px] h-[26px] text-slate-800" strokeWidth={2.1} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-amber-200/80 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-1.5">
            {/* 1. Home */}
            <NavLink
              to="/"
              end
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-[0_0_15px_rgba(201,149,36,0.4)] border border-amber-300'
                    : 'text-slate-700 hover:bg-amber-50 hover:text-amber-900'
                }`
              }
            >
              <span>{t.nav.home}</span>
            </NavLink>

            {/* 2. About Us */}
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-[0_0_15px_rgba(201,149,36,0.4)] border border-amber-300'
                    : 'text-slate-700 hover:bg-amber-50 hover:text-amber-900'
                }`
              }
            >
              <span>{t.nav.about}</span>
            </NavLink>

            {/* 3. Doctor Profile */}
            <NavLink
              to="/dr-reddi-sankara-rao/"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-[0_0_15px_rgba(201,149,36,0.4)] border border-amber-300'
                    : 'text-slate-700 hover:bg-amber-50 hover:text-amber-900'
                }`
              }
            >
              <span>{language === 'te' ? 'డాక్టర్ ప్రొఫైల్' : 'Doctor Profile'}</span>
            </NavLink>

            {/* 4. Specialities */}
            <NavLink
              to="/specialities"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-[0_0_15px_rgba(201,149,36,0.4)] border border-amber-300'
                    : 'text-slate-700 hover:bg-amber-50 hover:text-amber-900'
                }`
              }
            >
              <span>{t.nav.specialities}</span>
            </NavLink>

            {/* 5. Mobile Branches Collapsible Accordion */}
            <div className="rounded-xl border border-amber-200/80 overflow-hidden bg-amber-50/30">
              <button
                type="button"
                onClick={() => setMobileBranchesOpen(!mobileBranchesOpen)}
                className={`w-full px-3.5 py-2.5 text-sm font-semibold flex items-center justify-between transition-colors ${
                  isBranchesActive 
                    ? 'bg-amber-100 text-amber-950 font-bold' 
                    : 'text-slate-800 hover:bg-amber-50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-600" />
                  <span>{language === 'te' ? 'శాఖలు' : 'Branches'}</span>
                </span>
                <ChevronDown 
                  className={`w-4 h-4 text-slate-600 transition-transform duration-200 ${
                    mobileBranchesOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {mobileBranchesOpen && (
                <div className="p-2 space-y-1 bg-white border-t border-amber-100 animate-in fade-in duration-150">
                  <Link
                    to="/branches/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded-lg text-xs font-bold text-amber-800 bg-amber-50/70 hover:bg-amber-100"
                  >
                    {language === 'te' ? '→ అన్ని శాఖల అవలోకనం (/branches/)' : '→ Overview of All Branches'}
                  </Link>

                  <Link
                    to="/neurosurgeon-in-vizianagaram/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>{language === 'te' ? 'విజయనగరం (ప్రధాన కేంద్రం)' : 'Vizianagaram (Main Center)'}</span>
                    </span>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">24x7</span>
                  </Link>

                  <Link
                    to="/neurosurgeon-in-bobbili/"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>{language === 'te' ? 'బొబ్బిలి (ఓపీడీ క్లినిక్)' : 'Bobbili (OPD Clinic)'}</span>
                    </span>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">OPD</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 6. Blog */}
            <NavLink
              to="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-[0_0_15px_rgba(201,149,36,0.4)] border border-amber-300'
                    : 'text-slate-700 hover:bg-amber-50 hover:text-amber-900'
                }`
              }
            >
              <span>{t.nav.blog}</span>
            </NavLink>

            {/* 7. Contact */}
            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black shadow-[0_0_15px_rgba(201,149,36,0.4)] border border-amber-300'
                    : 'text-slate-700 hover:bg-amber-50 hover:text-amber-900'
                }`
              }
            >
              <span>{t.nav.contact}</span>
            </NavLink>

            {/* CTAs */}
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
                Call: +91 {settings.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
