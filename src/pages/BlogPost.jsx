import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  AlertCircle, 
  Share2, 
  BookOpen, 
  CheckCircle,
  ArrowRight,
  PhoneCall,
  ShieldAlert,
  Stethoscope,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { PageHero } from '../components/PageHero';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal';
import { SITE_URL, getArticleSchema, getPhysicianSchema, getClinicSchema } from '../data/seoSchemas';

export const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const { blogArticles, doctors, settings } = useClinicData();
  const leadDoctor = doctors[0] || {};

  const article = blogArticles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm max-w-md space-y-4">
          <AlertCircle className="w-12 h-12 text-amber-500 mx-auto" />
          <h2 className="text-xl font-bold text-slate-900">
            {language === 'te' ? 'కథనం కనుగొనబడలేదు' : 'Article Not Found'}
          </h2>
          <p className="text-slate-600 text-sm">
            {language === 'te' 
              ? 'కోరిన బ్లాగ్ కథనం అందుబాటులో లేదు లేదా తొలగించబడింది.' 
              : 'The requested health article could not be found.'}
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-bold hover:from-amber-400 hover:to-amber-500 text-sm shadow-sm shadow-amber-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.blog.backToArticles}</span>
          </Link>
        </div>
      </div>
    );
  }

  const title = language === 'te' ? article.titleTe : article.titleEn;
  const content = language === 'te' ? article.contentTe : article.contentEn;
  const summary = language === 'te' ? article.summaryTe : article.summaryEn;

  // Related articles
  const relatedArticles = blogArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  // Relevant Treatment Links mapping based on article category / slug
  const getRelevantTreatmentLinks = () => {
    const s = article.slug.toLowerCase();
    if (s.includes('stroke')) {
      return [
        { label: 'Stroke Management in Vizianagaram', url: '/stroke-management/' },
        { label: 'Emergency Head Injury Care', url: '/head-injury-treatment/' }
      ];
    }
    if (s.includes('discectomy') || s.includes('spine')) {
      return [
        { label: 'Endoscopic Lumbar Discectomy in Vizianagaram', url: '/endoscopic-lumbar-discectomy-in-vizianagaram/' },
        { label: 'Slip Disc Treatment in Vizianagaram', url: '/slip-disc-treatment-in-vizianagaram/' },
        { label: 'Minimally Invasive Spine Surgery', url: '/minimally-invasive-spine-surgery/' }
      ];
    }
    if (s.includes('sciatica') || s.includes('back')) {
      return [
        { label: 'Sciatica Treatment in Vizianagaram', url: '/sciatica-treatment-in-vizianagaram/' },
        { label: 'Lower Back Pain Treatment', url: '/lower-back-pain-treatment-in-vizianagaram/' },
        { label: 'Lumbar Disc Herniation', url: '/lumbar-disc-herniation-treatment/' }
      ];
    }
    return [
      { label: 'Spine Surgery in Vizianagaram', url: '/spine-surgery-in-vizianagaram/' },
      { label: 'Brain and Spine Disorders', url: '/brain-and-spine-disorders/' }
    ];
  };

  const treatmentLinks = getRelevantTreatmentLinks();
  const pageCanonical = `${SITE_URL}/blog/${article.slug}/`;
  const schemaList = [
    getPhysicianSchema(leadDoctor),
    getClinicSchema(),
    getArticleSchema({
      title: article.titleEn,
      description: article.summaryEn,
      url: pageCanonical,
      datePublished: article.date,
      author: article.author || 'Dr. Reddi Sankara Rao'
    })
  ];

  return (
    <div className="min-h-screen bg-[#FCFAF5]">
      <SeoHelmet 
        title={`${title} | Dr. Reddi Sankara Rao`}
        description={summary}
        canonicalUrl={pageCanonical}
        schema={schemaList}
        ogType="article"
        breadcrumbs={[
          { label: language === 'te' ? 'ఆరోగ్య బ్లాగ్' : 'Health Blog', to: '/blog' },
          { label: title, url: pageCanonical }
        ]}
      />

      {/* Hero Banner */}
      <PageHero
        badge={language === 'te' ? article.categoryTe : article.category}
        badgeIcon={<BookOpen className="w-3.5 h-3.5 text-amber-400" />}
        title={title}
        subtitle={language === 'te' ? 'డా. రెడ్డి శంకర రావు గారి వైద్య విశ్లేషణ' : 'Medically Reviewed by Dr. Reddi Sankara Rao'}
        description={summary}
        breadcrumbs={[
          { label: language === 'te' ? 'ఆరోగ్య బ్లాగ్' : 'Health Blog', to: '/blog' },
          { label: title }
        ]}
        bgImage="/images/facility-ot.jpg"
      />

      <article className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 py-10 sm:py-14 space-y-10">
        {/* Navigation link */}
        <div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-amber-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.blog.backToArticles}</span>
          </Link>
        </div>

        {/* Article Header Card */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-200/80 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="px-3.5 py-1 rounded-full bg-amber-50 text-amber-900 font-semibold border border-amber-200">
                {language === 'te' ? article.categoryTe : article.category}
              </span>

              <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100/70 text-amber-950 border border-amber-300/80">
                {language === 'te' ? 'నిపుణుల వైద్య కథనం' : 'Doctor-Reviewed Guide'}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 pt-2 border-t border-slate-100">
              <Link 
                to="/dr-reddi-sankara-rao/"
                className="flex items-center gap-1.5 font-semibold text-amber-800 hover:text-amber-950 transition-colors"
              >
                <User className="w-4 h-4 text-amber-600" />
                <span>By {article.author || 'Dr. Reddi Sankara Rao'} (Neurosurgeon)</span>
              </Link>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{article.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{article.readTime} read</span>
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Featured Medical Image */}
        <div className="rounded-3xl overflow-hidden border-2 border-amber-200/80 shadow-md bg-slate-900">
          <img
            src="/images/speciality-spine-care.jpg"
            alt={`${title} - Dr. Reddi Sankara Rao Brain Spine & Neuro Clinic`}
            className="w-full h-64 sm:h-96 object-cover"
            loading="lazy"
          />
        </div>

        {/* Article Body */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-sm space-y-6">
            <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
              {content.split('\n\n').map((paragraph, idx) => {
                const trimmed = paragraph.trim();
                if (trimmed.startsWith('###')) {
                  return (
                    <h3 key={idx} className="text-lg sm:text-xl font-bold text-slate-900 pt-4 pb-1 border-b border-amber-100">
                      {trimmed.replace('###', '').trim()}
                    </h3>
                  );
                }
                if (trimmed.startsWith('##')) {
                  return (
                    <h2 key={idx} className="text-xl sm:text-2xl font-bold text-slate-900 pt-4 pb-1 border-b border-amber-100">
                      {trimmed.replace('##', '').trim()}
                    </h2>
                  );
                }
                if (trimmed.startsWith('-')) {
                  return (
                    <div key={idx} className="pl-4 py-1 space-y-1">
                      {trimmed.split('\n').map((line, lIdx) => (
                        <div key={lIdx} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                          <span>{line.replace('-', '').trim()}</span>
                        </div>
                      ))}
                    </div>
                  );
                }
                if (trimmed.startsWith('1.') || trimmed.startsWith('2.') || trimmed.startsWith('3.')) {
                  return (
                    <div key={idx} className="pl-4 py-1 space-y-1">
                      {trimmed.split('\n').map((line, lIdx) => (
                        <div key={lIdx} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="font-bold text-amber-700 shrink-0">{line.slice(0, 2)}</span>
                          <span>{line.slice(2).trim()}</span>
                        </div>
                      ))}
                    </div>
                  );
                }
                return (
                  <p key={idx} className="leading-relaxed">
                    {trimmed}
                  </p>
                );
              })}
            </div>

            {/* Related Treatment Links Section */}
            {treatmentLinks.length > 0 && (
              <div className="mt-8 p-5 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-3">
                <span className="text-xs font-black uppercase text-amber-900 tracking-wider flex items-center gap-1.5">
                  <Stethoscope className="w-4 h-4 text-amber-700" />
                  <span>Related Conditions & Treatments</span>
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {treatmentLinks.map((tl, idx) => (
                    <Link
                      key={idx}
                      to={tl.url}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-amber-300 text-xs font-bold text-slate-800 hover:text-amber-900 hover:border-amber-500 shadow-2xs transition-all"
                    >
                      <span>{tl.label}</span>
                      <ArrowRight className="w-3 h-3 text-amber-700" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Medical Disclaimer Banner */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                <strong>Medical Disclaimer:</strong> The information provided in this article is for educational purposes only and does not substitute professional medical advice, diagnosis, or treatment. Always consult Dr. Reddi Sankara Rao or a qualified healthcare specialist regarding specific neurological or spine conditions.
              </p>
            </div>

            {/* Bottom Actions: Call Now & Book Consultation */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <Link to="/dr-reddi-sankara-rao/" className="font-bold text-amber-800 hover:underline">
                  Dr. Reddi Sankara Rao Profile
                </Link>
                <span>•</span>
                <span>Gumchi Junction, Vizianagaram</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs bg-white hover:bg-amber-50 text-slate-900 border border-amber-300 shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-700" />
                  <span>Call: {settings.phone}</span>
                </a>

                <Link
                  to="/appointment"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-black text-xs bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-md shadow-amber-500/20 active:scale-95 transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Related Health Articles */}
        {relatedArticles.length > 0 && (
          <div className="space-y-6 pt-4">
            <ScrollReveal direction="up">
              <h3 className="text-xl font-bold text-slate-900">
                {t.blog.relatedArticles}
              </h3>
            </ScrollReveal>

            <ScrollStagger className="grid grid-cols-1 sm:grid-cols-2 gap-6" staggerDelay={0.1}>
              {relatedArticles.map((rel) => (
                <ScrollStaggerItem key={rel.id} className="h-full">
                  <div 
                    className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-full"
                  >
                    <div className="space-y-2">
                      <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider">
                        {language === 'te' ? rel.categoryTe : rel.category}
                      </span>
                      <h4 className="font-bold text-slate-900 text-base line-clamp-2 hover:text-amber-800">
                        <Link to={`/blog/${rel.slug}`}>
                          {language === 'te' ? rel.titleTe : rel.titleEn}
                        </Link>
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {language === 'te' ? rel.summaryTe : rel.summaryEn}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-400">{rel.readTime}</span>
                      <Link
                        to={`/blog/${rel.slug}`}
                        className="text-amber-800 font-bold hover:text-amber-950 inline-flex items-center gap-1"
                      >
                        <span>{t.common.readMore}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </ScrollStaggerItem>
              ))}
            </ScrollStagger>
          </div>
        )}
      </article>
    </div>
  );
};
