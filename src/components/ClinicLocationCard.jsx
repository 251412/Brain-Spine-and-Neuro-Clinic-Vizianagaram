import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, PhoneCall, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';

export const ClinicLocationCard = ({ className = '', initialBranch = 'gumchi-junction', onSelectBranch }) => {
  const { language } = useLanguage();
  const { clinicLocations } = useClinicData();
  const [selectedBranchId, setSelectedBranchId] = useState(initialBranch);

  const locations = clinicLocations && clinicLocations.length > 0 ? clinicLocations : [
    {
      id: "gumchi-junction",
      nameEn: "Gumchi Junction Clinic",
      nameTe: "గుమ్చి జంక్షన్ క్లినిక్",
      badgeEn: "Main Clinic",
      badgeTe: "ప్రధాన క్లినిక్",
      isMain: true,
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
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Gumchi+Junction+Sankaramatam+Road+Kota+Junction+Vizianagaram+535002"
    },
    {
      id: "bobbili-branch",
      nameEn: "Bobbili Branch",
      nameTe: "బొబ్బిలి బ్రాంచ్",
      badgeEn: "Branch Clinic",
      badgeTe: "బ్రాంచ్ క్లినిక్",
      isMain: false,
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
      directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Opp+RTC+Complex+Ingate+beside+Choudhary+Bar+and+Restaurant+Bobbili"
    }
  ];

  const activeBranch = locations.find(loc => loc.id === selectedBranchId) || locations[0];

  const handleSelect = (id) => {
    setSelectedBranchId(id);
    if (onSelectBranch) onSelectBranch(id);
  };

  return (
    <div className={`bg-white rounded-3xl p-6 sm:p-7 border-2 border-amber-300/80 shadow-xl shadow-amber-500/5 hover:border-amber-400 transition-all space-y-6 ${className}`}>
      
      {/* Branch Switcher Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200">
        <button
          type="button"
          onClick={() => handleSelect('gumchi-junction')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 ${
            selectedBranchId === 'gumchi-junction'
              ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
          }`}
        >
          <Building2 className="w-3.5 h-3.5" />
          <span>{language === 'te' ? 'గుమ్చి జంక్షన్ (Main)' : 'Gumchi Junction (Main)'}</span>
        </button>

        <button
          type="button"
          onClick={() => handleSelect('bobbili-branch')}
          className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 ${
            selectedBranchId === 'bobbili-branch'
              ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
          }`}
        >
          <Building2 className="w-3.5 h-3.5" />
          <span>{language === 'te' ? 'బొబ్బిలి బ్రాంచ్' : 'Bobbili Branch'}</span>
        </button>
      </div>

      {/* Top Pill Badge & Title */}
      <div>
        <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-black tracking-wide shadow-xs mb-2 ${
          activeBranch.isMain 
            ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950' 
            : 'bg-slate-800 text-white'
        }`}>
          {language === 'te' ? activeBranch.badgeTe : activeBranch.badgeEn}
        </span>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {language === 'te' ? activeBranch.nameTe : activeBranch.nameEn}
        </h3>
        <p className="text-xs text-amber-800 font-bold uppercase tracking-wider mt-0.5">
          Brain Spine & Neuro Clinic • {activeBranch.isMain ? 'Vizianagaram' : 'Bobbili'}
        </p>
      </div>

      {/* Details List */}
      <div className="space-y-4 text-sm sm:text-base">
        
        {/* Address */}
        <div className="flex items-start gap-3.5 text-slate-700">
          <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
            <MapPin className="w-4 h-4 text-amber-600" />
          </div>
          <div className="leading-snug">
            <span className="block font-medium">
              {language === 'te' ? activeBranch.addressTe : activeBranch.addressEn}
            </span>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3.5">
          <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
            <Phone className="w-4 h-4 text-amber-600" />
          </div>
          <a
            href={activeBranch.phoneDial}
            className="text-lg sm:text-xl font-black text-slate-900 hover:text-amber-700 tracking-wide transition-colors"
          >
            {activeBranch.phone}
          </a>
        </div>

        {/* Timings / Availability */}
        <div className="flex items-start gap-3.5 text-slate-700">
          <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
            <Clock className="w-4 h-4 text-amber-600" />
          </div>
          {activeBranch.isMain ? (
            <div className="leading-snug space-y-0.5">
              <span className="block font-bold text-slate-900">
                {language === 'te' ? '24×7 అత్యవసర సేవలు' : '24×7 Emergency Services'}
              </span>
              <span className="block text-slate-500 font-medium">
                {language === 'te' ? 'రోజువారీ సంప్రదింపులు లభ్యం' : 'Daily Consultations Available'}
              </span>
            </div>
          ) : (
            <div className="leading-snug space-y-0.5">
              <span className="block font-bold text-slate-900">
                {language === 'te' ? 'మంగళవారం: సాయంత్రం 4 – 9 గంటలు' : 'Tuesday: 4 PM – 9 PM'}
              </span>
              <span className="block font-bold text-slate-900">
                {language === 'te' ? 'శుక్రవారం: సాయంత్రం 4 – 9 గంటలు' : 'Friday: 4 PM – 9 PM'}
              </span>
            </div>
          )}
        </div>

      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row gap-3">
        <a
          href={activeBranch.phoneDial}
          className="flex-1 py-3 px-5 rounded-xl font-bold text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-center shadow-md shadow-amber-500/20 transition-all transform active:scale-98 flex items-center justify-center gap-2"
        >
          <PhoneCall className="w-4 h-4" />
          <span>{language === 'te' ? 'ఇప్పుడే కాల్ చేయండి (Call Now)' : 'Call Now'}</span>
        </a>

        <a
          href={activeBranch.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm bg-amber-50 hover:bg-amber-100/80 text-amber-900 text-center border border-amber-200 transition-all flex items-center justify-center gap-1.5"
          title="Open in Google Maps"
        >
          <Navigation className="w-4 h-4 text-amber-700" />
          <span>{language === 'te' ? 'దిశలు (Directions)' : 'Directions'}</span>
        </a>
      </div>

    </div>
  );
};

export default ClinicLocationCard;
