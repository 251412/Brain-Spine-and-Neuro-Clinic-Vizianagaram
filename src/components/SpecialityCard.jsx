import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  Brain, 
  Layers, 
  Zap, 
  ShieldAlert, 
  HeartPulse, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  Activity: Activity,
  Brain: Brain,
  Layers: Layers,
  Zap: Zap,
  ShieldAlert: ShieldAlert,
  HeartPulse: HeartPulse,
  Pulse: HeartPulse,
};

const fallbackImages = {
  'neurology': '/images/speciality-neurology.webp',
  'neurosurgery': '/images/speciality-neurosurgery.webp',
  'spine-care': '/images/speciality-spine-care.webp',
  'stroke-care': '/images/speciality-stroke-care.webp',
  'brain-tumour-care': '/images/speciality-brain-tumour.webp',
  'epilepsy': '/images/speciality-epilepsy.webp',
  'nerve-pain-care': '/images/speciality-nerve-pain.webp',
};

export const SpecialityCard = ({ speciality }) => {
  const { language, t } = useLanguage();
  const IconComponent = iconMap[speciality.iconName] || Brain;
  const cardImage = speciality.image || fallbackImages[speciality.id] || '/images/speciality-neurology.webp';

  const treatmentCount = speciality.treatmentsList?.length || 0;

  return (
    <div className="group relative bg-white rounded-3xl overflow-hidden border-2 border-amber-200/80 shadow-md shadow-amber-500/10 hover:shadow-2xl hover:shadow-amber-500/30 hover:border-amber-500 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Card Header Image with overlays - Clickable to Detail Page */}
        <Link to={`/specialities/${speciality.id}`} className="block relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900 cursor-pointer">
          <img
            src={cardImage}
            alt={language === 'te' ? speciality.nameTe : speciality.nameEn}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-black/30 pointer-events-none" />

          {/* Clinical Focus Tag on top left */}
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md text-[11px] font-bold tracking-wide uppercase text-amber-300 border border-amber-400/60 shadow-[0_0_12px_rgba(201,149,36,0.35)]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 drop-shadow-[0_0_6px_rgba(201,149,36,0.8)]" />
              <span>{language === 'te' ? 'క్లినికల్ విభాగం' : 'Clinical Focus'}</span>
            </span>
          </div>

          {/* Treatment Count Badge on top right */}
          {treatmentCount > 0 && (
            <div className="absolute top-3.5 right-3.5 z-10">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-500 text-slate-950 text-[11px] font-black shadow-md">
                {treatmentCount} {language === 'te' ? 'చికిత్సలు' : 'Procedures'}
              </span>
            </div>
          )}
        </Link>

        {/* Floating Icon badge overlapping the image seam */}
        <div className="relative px-6 -mt-7 z-20 flex items-center justify-between pointer-events-none">
          <Link 
            to={`/specialities/${speciality.id}`}
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-600 p-[2.5px] shadow-[0_0_18px_rgba(201,149,36,0.45)] group-hover:scale-110 group-hover:shadow-[0_0_26px_rgba(201,149,36,0.7)] transition-all duration-300 pointer-events-auto block"
          >
            <div className="w-full h-full rounded-[13px] bg-white flex items-center justify-center text-amber-700 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:via-yellow-400 group-hover:to-amber-600 group-hover:text-slate-950 transition-all duration-300">
              <IconComponent className="w-7 h-7 stroke-[2.3]" />
            </div>
          </Link>
        </div>

        {/* Card Content Body */}
        <div className="p-6 pt-3">
          <Link to={`/specialities/${speciality.id}`} className="block group-hover:text-amber-800 transition-colors">
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
              {language === 'te' ? speciality.nameTe : speciality.nameEn}
            </h3>
          </Link>

          <p className="text-slate-600 text-sm mt-2 leading-relaxed line-clamp-2">
            {language === 'te' ? speciality.shortDescTe : speciality.shortDescEn}
          </p>

          {/* Conditions quick bullet points */}
          <div className="mt-4 pt-4 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
              {t.specialities.conditionsAddressed}
            </span>
            <ul className="text-xs text-slate-600 space-y-1.5">
              {(language === 'te' ? speciality.conditionsTe : speciality.conditionsEn).slice(0, 3).map((cond, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span className="truncate">{cond}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
        <Link
          to={`/specialities/${speciality.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-950 group-hover:translate-x-1 transition-all"
        >
          <span>{language === 'te' ? 'వివరాలు & చికిత్సలు చూడండి' : 'Learn More & Treatments'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>

        <Link
          to={`/appointment?speciality=${encodeURIComponent(speciality.nameEn)}`}
          className="text-xs font-semibold text-slate-600 hover:text-amber-700 transition-colors"
        >
          {t.common.bookConsultation}
        </Link>
      </div>
    </div>
  );
};
