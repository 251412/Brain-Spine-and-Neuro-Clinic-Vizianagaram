import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  ArrowRight, 
  Stethoscope, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TreatmentCard = ({ 
  treatment, 
  speciality, 
  onBook 
}) => {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const title = language === 'te' 
    ? (treatment.nameTe || treatment.nameEn) 
    : treatment.nameEn;
  const secondaryTitle = language === 'te' 
    ? treatment.nameEn 
    : (treatment.nameTe || '');
  const description = language === 'te' 
    ? (treatment.descTe || treatment.descEn) 
    : treatment.descEn;
  const category = language === 'te' 
    ? (treatment.categoryTe || treatment.category) 
    : treatment.category;
  const benefits = language === 'te' 
    ? (treatment.benefitsTe || treatment.benefits || []) 
    : (treatment.benefits || []);

  return (
    <div className="group relative bg-white rounded-3xl border-2 border-amber-200/80 shadow-md shadow-amber-500/10 hover:shadow-2xl hover:shadow-amber-500/25 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Banner Accent Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600" />

      <div className="p-5 sm:p-6 space-y-4">
        {/* Category Badge & Recovery Timeline */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          {category && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-bold tracking-wide uppercase">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>{category}</span>
            </span>
          )}

          {treatment.badge && (
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-900 text-amber-300 text-[11px] font-bold border border-amber-400/40 shadow-2xs">
              {treatment.badge}
            </span>
          )}
        </div>

        {/* Treatment Title */}
        <div className="space-y-1">
          <h4 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-amber-800 transition-colors tracking-tight">
            {title}
          </h4>
          {secondaryTitle && (
            <p className="text-xs text-slate-500 font-medium">
              {secondaryTitle}
            </p>
          )}
        </div>

        {/* Description */}
        <p className={`text-slate-600 text-xs sm:text-sm leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
          {description}
        </p>

        {description.length > 150 && (
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[11px] font-bold text-amber-700 hover:text-amber-900 inline-flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>{isExpanded ? (language === 'te' ? 'తక్కువ చూడండి ▲' : 'Show Less ▲') : (language === 'te' ? 'మరింత చదవండి ▼' : 'Read More ▼')}</span>
          </button>
        )}

        {/* Clinical Benefits Bullets */}
        {benefits && benefits.length > 0 && (
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              {language === 'te' ? 'ముఖ్య ప్రయోజనాలు & ఫలితాలు' : 'Clinical Highlights & Outcomes'}
            </span>
            <ul className="space-y-1.5 text-xs text-slate-700">
              {benefits.slice(0, 3).map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span className="leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Card Footer: Book Appointment */}
      <div className="p-5 sm:p-6 pt-3 bg-gradient-to-b from-white to-amber-50/40 border-t border-amber-100/90">
        <button
          type="button"
          onClick={() => onBook(treatment)}
          className="w-full py-3.5 px-4 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer group/btn"
        >
          <Calendar className="w-4 h-4 text-slate-950 group-hover/btn:rotate-6 transition-transform" />
          <span>
            {language === 'te' ? 'అపాయింట్‌మెంట్ బుక్ చేయండి' : 'Book Appointment'}
          </span>
          <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
