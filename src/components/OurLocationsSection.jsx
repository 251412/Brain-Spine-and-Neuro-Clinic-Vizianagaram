import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  PhoneCall, 
  Navigation, 
  ShieldCheck, 
  ExternalLink,
  Loader2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from './ScrollReveal';

export const OurLocationsSection = ({ className = '', id = 'locations' }) => {
  const { language } = useLanguage();
  const { clinicLocations } = useClinicData();

  // State: selected clinic ID ('gumchi-junction' or 'bobbili-branch')
  const [selectedClinicId, setSelectedClinicId] = useState('gumchi-junction');
  const [isMapLoading, setIsMapLoading] = useState(false);

  // Fallback data if context is not yet loaded
  const locations = clinicLocations && clinicLocations.length > 0 ? clinicLocations : [
    {
      id: "gumchi-junction",
      nameEn: "Gumchi Junction Clinic",
      nameTe: "గుమ్చి జంక్షన్ క్లినిక్",
      badgeEn: "Main Clinic",
      badgeTe: "ప్రధాన క్లినిక్",
      isMain: true,
      image: "/images/clinic-gumchi-exterior.jpg",
      addressEn: "Gumchi Junction, Sankaramatam Road (Kota Junction), Vizianagaram – 535002",
      addressTe: "గుమ్చి జంక్షన్, శంకరమఠం రోడ్ (కోట జంక్షన్), విజయనగరం – 535002",
      phone: "9908981669",
      phoneDial: "tel:9908981669",
      availabilityEn: [
        "24×7 Emergency Services",
        "Daily Consultations Available"
      ],
      availabilityTe: [
        "24×7 అత్యవసర సేవలు అందుబాటులో ఉన్నాయి",
        "రోజువారీ సంప్రదింపులు లభ్యం"
      ],
      mapQuery: "Gumchi Junction, Sankaramatam Road, Kota Junction, Vizianagaram 535002, Andhra Pradesh, India",
      embedUrl: "https://maps.google.com/maps?q=Gumchi+Junction,+Sankaramatam+Road,+Kota+Junction,+Vizianagaram+535002,+Andhra+Pradesh,+India&t=&z=16&ie=UTF8&iwloc=&output=embed",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Gumchi+Junction+Sankaramatam+Road+Kota+Junction+Vizianagaram+535002"
    },
    {
      id: "bobbili-branch",
      nameEn: "Bobbili Branch",
      nameTe: "బొబ్బిలి బ్రాంచ్",
      badgeEn: "Branch Clinic",
      badgeTe: "బ్రాంచ్ క్లినిక్",
      isMain: false,
      image: "/images/clinic-bobbili-exterior.jpg",
      addressEn: "Opp RTC Complex Ingate, beside Choudhary Bar & Restaurant, Bobbili",
      addressTe: "RTC కాంప్లెక్స్ ఇన్‌గేట్ ఎదురుగా, చౌదరి బార్ & రెస్టారెంట్ పక్కన, బొబ్బిలి",
      phone: "9951142275",
      phoneDial: "tel:9951142275",
      timingsEn: [
        "Tuesday: 4 PM – 9 PM",
        "Friday: 4 PM – 9 PM"
      ],
      timingsTe: [
        "మంగళవారం: సాయంత్రం 4 – 9 గంటలు",
        "శుక్రవారం: సాయంత్రం 4 – 9 గంటలు"
      ],
      mapQuery: "Opp RTC Complex Ingate, beside Choudhary Bar & Restaurant, Bobbili, Andhra Pradesh, India",
      embedUrl: "https://maps.google.com/maps?q=Opp+RTC+Complex+Ingate,+beside+Choudhary+Bar+%26+Restaurant,+Bobbili,+Andhra+Pradesh,+India&t=&z=16&ie=UTF8&iwloc=&output=embed",
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Opp+RTC+Complex+Ingate+beside+Choudhary+Bar+and+Restaurant+Bobbili"
    }
  ];

  const mainClinic = locations.find(loc => loc.id === 'gumchi-junction') || locations[0];
  const bobbiliBranch = locations.find(loc => loc.id === 'bobbili-branch') || locations[1] || locations[0];
  const activeLocation = locations.find(loc => loc.id === selectedClinicId) || mainClinic;

  const handleSelectClinic = (id) => {
    if (id !== selectedClinicId) {
      setIsMapLoading(true);
      setSelectedClinicId(id);
    }
  };

  return (
    <section 
      id={id} 
      className={`py-16 sm:py-24 bg-gradient-to-b from-amber-50/40 via-slate-50/60 to-white border-t border-b border-amber-200/50 relative overflow-hidden ${className}`}
    >
      {/* Subtle decorative background watermarks / ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-300/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10 space-y-12 sm:space-y-14">
        
        {/* ========================================================= */}
        {/* SECTION HEADER & 3 HIGHLIGHTS (Inspired by Reference)     */}
        {/* ========================================================= */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="text-center max-w-3xl mx-auto space-y-4">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-900 text-xs font-bold border border-amber-300/80 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>{language === 'te' ? 'మా క్లినిక్ లొకేషన్లు' : 'Our Locations'}</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              <span>{language === 'te' ? 'మా క్లినిక్స్ ' : 'Our '}</span>
              <span className="text-amber-600">{language === 'te' ? '(Our Clinics)' : 'Clinics'}</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              {language === 'te' 
                ? 'మా అనుకూలమైన క్లినిక్ లొకేషన్లలో మమ్మల్ని సంప్రదించండి' 
                : 'Visit us at our convenient clinic locations'}
            </p>

            {/* 3 Small Highlights Bar */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-10">
              {/* Highlight 1: Accessible Locations */}
              <div className="flex items-center gap-2.5 text-left bg-white/70 backdrop-blur-xs px-3.5 py-2 rounded-2xl border border-amber-200/60 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-amber-600" />
                </div>
                <div className="leading-tight">
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    {language === 'te' ? 'సులభమైన ప్రయాణం' : 'Accessible Locations'}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {language === 'te' ? 'చేరుకోవడం సులభం' : 'Easy to reach'}
                  </div>
                </div>
              </div>

              {/* Highlight 2: Flexible Timings */}
              <div className="flex items-center gap-2.5 text-left bg-white/70 backdrop-blur-xs px-3.5 py-2 rounded-2xl border border-amber-200/60 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-amber-600" />
                </div>
                <div className="leading-tight">
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    {language === 'te' ? 'అనుకూల వేళలు' : 'Flexible Timings'}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {language === 'te' ? 'మీ సౌలభ్యం కోసం' : 'Convenient for you'}
                  </div>
                </div>
              </div>

              {/* Highlight 3: Expert Care */}
              <div className="flex items-center gap-2.5 text-left bg-white/70 backdrop-blur-xs px-3.5 py-2 rounded-2xl border border-amber-200/60 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                </div>
                <div className="leading-tight">
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    {language === 'te' ? 'నిపుణుల సంరక్షణ' : 'Expert Care'}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {language === 'te' ? 'రెండు బ్రాంచీలలో' : 'At both branches'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ========================================================= */}
        {/* 3-COLUMN RESPONSIVE GRID (DESKTOP: 3 COLS, MOBILE: STACK)  */}
        {/* ========================================================= */}
        <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 items-stretch" staggerDelay={0.1}>
          
          {/* ======================================================= */}
          {/* CARD 1: MAIN CLINIC — GUMCHI JUNCTION                   */}
          {/* ======================================================= */}
          <ScrollStaggerItem className="h-full">
            <div 
              onClick={() => handleSelectClinic('gumchi-junction')}
              className={`bg-white rounded-3xl p-5 sm:p-6 border-2 transition-all duration-300 flex flex-col justify-between cursor-pointer group h-full ${
                selectedClinicId === 'gumchi-junction'
                  ? 'border-amber-500 shadow-xl shadow-amber-500/15 ring-4 ring-amber-400/20'
                  : 'border-amber-200/70 hover:border-amber-400 shadow-sm hover:shadow-md'
              }`}
            >
            <div className="space-y-4">
              {/* Clinic Facade Image */}
              <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-inner">
                <img 
                  src={mainClinic.image} 
                  alt={mainClinic.nameEn} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Main Clinic Badge on top-left of image */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 text-xs font-black tracking-wide shadow-md shadow-amber-900/20">
                    {language === 'te' ? 'ప్రధాన క్లినిక్ (Main Clinic)' : 'Main Clinic'}
                  </span>
                </div>
              </div>

              {/* Clinic Title */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {language === 'te' ? mainClinic.nameTe : mainClinic.nameEn}
                </h3>
              </div>

              {/* Details List */}
              <div className="space-y-3.5 pt-1 text-xs sm:text-sm text-slate-700">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-amber-600" />
                  </div>
                  <span className="leading-snug font-medium">
                    {language === 'te' ? mainClinic.addressTe : mainClinic.addressEn}
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-amber-600" />
                  </div>
                  <a 
                    href={mainClinic.phoneDial} 
                    onClick={(e) => e.stopPropagation()}
                    className="font-black text-sm sm:text-base text-slate-900 hover:text-amber-700 transition-colors"
                  >
                    {mainClinic.phone}
                  </a>
                </div>

                {/* Availability (Strictly Main Clinic only) */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="leading-snug space-y-0.5">
                    <span className="block font-bold text-slate-900">
                      {language === 'te' ? '24×7 అత్యవసర సేవలు' : '24×7 Emergency Services'}
                    </span>
                    <span className="block text-slate-500 font-medium">
                      {language === 'te' ? 'రోజువారీ సంప్రదింపులు అందుబాటులో ఉన్నాయి' : 'Daily Consultations Available'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-6 space-y-2.5">
              {/* Call Now Button */}
              <a 
                href={mainClinic.phoneDial}
                onClick={(e) => e.stopPropagation()}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 active:scale-98 text-center shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{language === 'te' ? 'ఇప్పుడే కాల్ చేయండి (Call Now)' : 'Call Now'}</span>
              </a>

              {/* View on Map Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectClinic('gumchi-junction');
                }}
                className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm border transition-all flex items-center justify-center gap-1.5 active:scale-98 ${
                  selectedClinicId === 'gumchi-junction'
                    ? 'border-amber-500 bg-amber-50 text-amber-900 font-bold'
                    : 'border-amber-200 text-amber-800 hover:bg-amber-50/80'
                }`}
              >
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>{language === 'te' ? 'మ్యాప్‌లో చూడండి →' : 'View on Map →'}</span>
              </button>
            </div>
          </div>
          </ScrollStaggerItem>

          {/* ======================================================= */}
          {/* CARD 2: BOBBILI BRANCH                                  */}
          {/* ======================================================= */}
          <ScrollStaggerItem className="h-full">
            <div 
              onClick={() => handleSelectClinic('bobbili-branch')}
              className={`bg-white rounded-3xl p-5 sm:p-6 border-2 transition-all duration-300 flex flex-col justify-between cursor-pointer group h-full ${
                selectedClinicId === 'bobbili-branch'
                  ? 'border-amber-500 shadow-xl shadow-amber-500/20 ring-4 ring-amber-400/25'
                  : 'border-amber-200/80 shadow-md shadow-amber-500/10 hover:border-amber-400 hover:shadow-xl'
              }`}
            >
            <div className="space-y-4">
              {/* Clinic Facade Image */}
              <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-inner">
                <img 
                  src={bobbiliBranch.image} 
                  alt={bobbiliBranch.nameEn} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Branch Clinic Badge on top-left of image */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-white/95 text-slate-800 border border-slate-200 text-xs font-bold tracking-wide shadow-sm">
                    {language === 'te' ? 'బ్రాంచ్ క్లినిక్ (Branch Clinic)' : 'Branch Clinic'}
                  </span>
                </div>
              </div>

              {/* Clinic Title */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  {language === 'te' ? bobbiliBranch.nameTe : bobbiliBranch.nameEn}
                </h3>
              </div>

              {/* Details List */}
              <div className="space-y-3.5 pt-1 text-xs sm:text-sm text-slate-700">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-amber-600" />
                  </div>
                  <span className="leading-snug font-medium">
                    {language === 'te' ? bobbiliBranch.addressTe : bobbiliBranch.addressEn}
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-amber-600" />
                  </div>
                  <a 
                    href={bobbiliBranch.phoneDial} 
                    onClick={(e) => e.stopPropagation()}
                    className="font-black text-sm sm:text-base text-slate-900 hover:text-amber-700 transition-colors"
                  >
                    {bobbiliBranch.phone}
                  </a>
                </div>

                {/* Consultation Timings (Strictly for Bobbili only) */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="leading-snug space-y-0.5">
                    <span className="block font-bold text-slate-900">
                      {language === 'te' ? 'మంగళవారం: సాయంత్రం 4 – 9 గంటలు' : 'Tuesday: 4 PM – 9 PM'}
                    </span>
                    <span className="block font-bold text-slate-900">
                      {language === 'te' ? 'శుక్రవారం: సాయంత్రం 4 – 9 గంటలు' : 'Friday: 4 PM – 9 PM'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-6 space-y-2.5">
              {/* Call Now Button */}
              <a 
                href={bobbiliBranch.phoneDial}
                onClick={(e) => e.stopPropagation()}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 active:scale-98 text-center shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{language === 'te' ? 'ఇప్పుడే కాల్ చేయండి (Call Now)' : 'Call Now'}</span>
              </a>

              {/* View on Map Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectClinic('bobbili-branch');
                }}
                className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm border transition-all flex items-center justify-center gap-1.5 active:scale-98 ${
                  selectedClinicId === 'bobbili-branch'
                    ? 'border-amber-500 bg-amber-50 text-amber-900 font-bold'
                    : 'border-amber-200 text-amber-800 hover:bg-amber-50/80'
                }`}
              >
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>{language === 'te' ? 'మ్యాప్‌లో చూడండి →' : 'View on Map →'}</span>
              </button>
            </div>
          </div>
          </ScrollStaggerItem>

          {/* ======================================================= */}
          {/* PANEL 3: INTERACTIVE GOOGLE MAP WITH SWITCHER CONTROLS  */}
          {/* ======================================================= */}
          <ScrollStaggerItem className="h-full md:col-span-2 lg:col-span-1">
            <div className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#E8D6A5] shadow-xl shadow-[#C99524]/10 flex flex-col justify-between space-y-4 h-full">
            
            {/* Map Top Bar: Heading + Switcher Pills */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#E8D6A5]/50">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-[#242424] tracking-tight">
                  {language === 'te' ? 'ఇంటరాక్టివ్ మ్యాప్' : 'Interactive Clinic Map'}
                </h3>
                <p className="text-xs text-[#686868] font-medium">
                  {language === 'te' ? 'లొకేషన్ మార్చడానికి క్రింది బటన్ నొక్కండి' : 'Select a clinic location to switch map marker'}
                </p>
              </div>

              {/* Selectable Location Controls (Gold & White Theme) */}
              <div className="inline-flex items-center gap-1 p-1 bg-[#FCFAF5] rounded-2xl border border-[#E8D6A5] self-start sm:self-auto shadow-2xs">
                <button
                  type="button"
                  onClick={() => handleSelectClinic('gumchi-junction')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    selectedClinicId === 'gumchi-junction'
                      ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 shadow-xs'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-[#F5E7BF]/40'
                  }`}
                  aria-pressed={selectedClinicId === 'gumchi-junction'}
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C99524]" />
                  <span>Gumchi Junction</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectClinic('bobbili-branch')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    selectedClinicId === 'bobbili-branch'
                      ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 shadow-xs'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-[#F5E7BF]/40'
                  }`}
                  aria-pressed={selectedClinicId === 'bobbili-branch'}
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C99524]" />
                  <span>Bobbili Branch</span>
                </button>
              </div>
            </div>

            {/* Map Canvas with Floating Info Overlay Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#E8D6A5] bg-slate-100 min-h-[380px] sm:min-h-[430px] flex-1 shadow-inner">
              
              {/* Spinner while loading iframe */}
              {isMapLoading && (
                <div className="absolute inset-0 bg-white/70 backdrop-blur-xs flex items-center justify-center z-20 transition-opacity">
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white shadow-lg border border-[#E8D6A5] text-xs font-bold text-[#A87512]">
                    <Loader2 className="w-4 h-4 animate-spin text-[#C99524]" />
                    <span>Loading Clinic Location...</span>
                  </div>
                </div>
              )}

              {/* Dynamic Google Maps Embed Iframe */}
              <iframe
                key={activeLocation.id}
                title={`${activeLocation.nameEn} - Google Maps Location`}
                src={activeLocation.embedUrl}
                onLoad={() => setIsMapLoading(false)}
                className="w-full h-full min-h-[380px] sm:min-h-[430px] border-0"
                loading="lazy"
                aria-hidden="false"
              />

              {/* Floating Clinic Info Overlay (Futuristic Medical HUD Style) */}
              <div className="absolute top-3 left-3 right-3 sm:right-auto sm:max-w-[300px] bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 border-2 border-[#E8D6A5] shadow-xl text-slate-900 z-10 space-y-2 transition-all">
                <div className="flex items-start justify-between gap-2">
                  <div className="pr-1 space-y-0.5">
                    {/* Glowing Live Location Beacon */}
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C99524] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C99524]"></span>
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#A87512]">
                        {activeLocation.id === 'gumchi-junction' ? 'Main Center (Vizianagaram)' : 'Weekly OPD Branch (Bobbili)'}
                      </span>
                    </div>

                    <h4 className="font-black text-xs sm:text-sm text-[#242424] leading-tight">
                      {activeLocation.id === 'gumchi-junction' 
                        ? 'Gumchi Junction Clinic' 
                        : 'Bobbili Branch Clinic'}
                    </h4>
                    <p className="text-[11px] text-[#686868] leading-tight line-clamp-2">
                      {language === 'te' ? activeLocation.addressTe : activeLocation.addressEn}
                    </p>
                  </div>

                  {/* Directions Button */}
                  <a
                    href={activeLocation.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex flex-col items-center justify-center px-2.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black shadow-sm transition-transform active:scale-95 group/dir"
                    title="Get Directions on Google Maps"
                  >
                    <Navigation className="w-4 h-4 text-slate-950 group-hover/dir:scale-110 transition-transform" />
                    <span className="text-[10px] font-extrabold mt-0.5">Directions</span>
                  </a>
                </div>

                {/* Timings & Contact on Overlay Card */}
                <div className="pt-2 border-t border-[#E8D6A5]/50 flex items-center justify-between text-[11px]">
                  <span className="text-[10px] font-bold text-[#A87512] bg-[#F5E7BF]/50 px-2 py-0.5 rounded-full border border-[#E8D6A5]">
                    {activeLocation.id === 'gumchi-junction' ? '24×7 Emergency' : 'Tue & Fri: 4–9 PM'}
                  </span>
                  <a
                    href={activeLocation.phoneDial}
                    className="text-[11px] font-extrabold text-[#242424] hover:text-[#C99524] transition-colors"
                  >
                    📞 {activeLocation.phone}
                  </a>
                </div>
              </div>

            </div>

            {/* Graceful Fallback Direct Map Link */}
            <div className="flex items-center justify-between pt-1 text-xs text-[#686868]">
              <span>Need exact GPS turn-by-turn navigation?</span>
              <a
                href={activeLocation.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#A87512] hover:text-[#C99524] inline-flex items-center gap-1 hover:underline"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
          </ScrollStaggerItem>

        </ScrollStagger>

      </div>
    </section>
  );
};

export default OurLocationsSection;
