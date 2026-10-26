import React from 'react';
import { AlertCircle, ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';

export const EmergencyBanner = () => {
  const { language, t } = useLanguage();
  const { settings } = useClinicData();

  return (
    <div className="bg-gradient-to-r from-rose-50 via-amber-50 to-rose-50 border-y border-rose-200/80 px-4 py-3 sm:px-6 w-full">
      <div className="w-full px-2 sm:px-4 lg:px-6 xl:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
        <div className="flex items-start sm:items-center gap-3">
          <span className="p-1.5 bg-rose-100 text-rose-700 rounded-lg shrink-0 mt-0.5 sm:mt-0 shadow-[0_0_10px_rgba(244,63,94,0.4)] animate-pulse">
            <AlertCircle className="w-5 h-5" />
          </span>
          <div>
            <div className="font-semibold text-rose-900 flex flex-wrap items-center gap-2">
              <span>{t.home.emergencyBanner.title}</span>
              <span className="text-xs bg-rose-200/70 text-rose-800 px-2 py-0.5 rounded-full font-medium">
                {settings.emergencyPhoneVerified ? 'Verified 24/7 Desk' : 'Telecom Verification Pending'}
              </span>
            </div>
            <p className="text-rose-800 text-xs sm:text-sm mt-0.5 leading-relaxed">
              {t.home.emergencyBanner.text}
              {settings.emergencyPhone && (
                <strong className="ml-1 text-rose-950 font-bold">
                  [{settings.emergencyPhone}]
                </strong>
              )}
            </p>
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-2 w-full md:w-auto justify-end">
          <Link
            to="/emergency"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold shadow-[0_0_14px_rgba(244,63,94,0.6)] transition-all focus:outline-none focus:ring-2 focus:ring-rose-400 active:scale-95"
          >
            <span>{t.home.emergencyBanner.action}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
