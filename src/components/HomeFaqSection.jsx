import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { homeFaqs } from '../data/homeFaqsData';

export { homeFaqs };

export const HomeFaqSection = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-amber-200/60" id="faqs">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14">
        <ScrollReveal direction="up" distance={24}>
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>{language === 'te' ? 'తరచుగా అడిగే ప్రశ్నలు' : 'Patient FAQs'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {language === 'te'
                ? 'మెదడు, వెన్నెముక మరియు చికిత్సలపై సాధారణ సందేహాలు'
                : 'Frequently Asked Questions (Neurosurgery & Spine Care)'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              {language === 'te'
                ? 'డాక్టర్ గారి సంప్రదింపులు, చికిత్సా విధానాలు మరియు క్లినిక్ సేవలపై రోగులు తరచుగా అడిగే ప్రశ్నలకు సమాధానాలు.'
                : 'Verified medical insights regarding consultations, symptoms, spine surgery, and clinic protocols from Dr. Reddi Sankara Rao.'}
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-3.5">
          {homeFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const q = language === 'te' ? faq.qTe : faq.qEn;
            const a = language === 'te' ? faq.aTe : faq.aEn;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-amber-200/80 bg-[#FCFAF5] overflow-hidden transition-all duration-200 hover:border-amber-400/80 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 text-slate-900 hover:text-amber-800 transition-colors">
                    {q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-amber-100/70 text-amber-800 flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-amber-800" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-amber-800" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-700 text-xs sm:text-sm leading-relaxed border-t border-amber-200/50 bg-white">
                    <p>{a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

