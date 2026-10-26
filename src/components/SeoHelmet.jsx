import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const SeoHelmet = ({ title, description }) => {
  const { language } = useLanguage();

  useEffect(() => {
    const siteName = language === 'te' 
      ? 'బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్' 
      : 'Brain Spine & Neuro Clinic';
    
    document.title = title ? `${title} | ${siteName}` : siteName;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description, language]);

  return null;
};
