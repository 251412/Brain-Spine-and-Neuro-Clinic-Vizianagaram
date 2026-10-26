import React from 'react';
import { ShieldCheck, Clock, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const VerificationBadge = ({ 
  isVerified = false, 
  showIcon = true,
  variant = 'default', // 'default', 'compact', 'inline'
  customLabelEn,
  customLabelTe
}) => {
  const { language } = useLanguage();

  if (isVerified) {
    const text = language === 'te' 
      ? (customLabelTe || 'ధృవీకరించబడింది') 
      : (customLabelEn || 'Verified by Clinic');

    if (variant === 'compact') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-900 border border-amber-300" title="Officially verified credentials">
          {showIcon && <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />}
          <span>{text}</span>
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-950 border border-amber-300/80 shadow-2xs">
        {showIcon && <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />}
        <span>{text}</span>
      </span>
    );
  }

  // Not yet verified / Proposed / Awaiting verification
  const text = language === 'te'
    ? (customLabelTe || 'క్లినిక్ ధృవీకరణ పెండింగ్‌లో ఉంది')
    : (customLabelEn || 'Pending Clinic Verification');

  if (variant === 'compact') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200" title="Proposed service awaiting clinic verification">
        {showIcon && <Clock className="w-3.5 h-3.5 text-amber-600" />}
        <span>{text}</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200/90 shadow-sm">
      {showIcon && <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />}
      <span>{text}</span>
    </span>
  );
};
