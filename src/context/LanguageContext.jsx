import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../locales/en';
import { te } from '../locales/te';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('bsn_clinic_language') || 'en';
  });

  const setLanguage = (lang) => {
    setLanguageState(lang);
    localStorage.setItem('bsn_clinic_language', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
    if (language === 'te') {
      document.body.classList.add('font-telugu');
    } else {
      document.body.classList.remove('font-telugu');
    }
  }, [language]);

  const translations = language === 'te' ? te : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
