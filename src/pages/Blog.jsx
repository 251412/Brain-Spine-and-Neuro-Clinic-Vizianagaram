import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen,
  ExternalLink,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { PageHero } from '../components/PageHero';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal';

// Dedicated SVG for official Instagram Camera Logo
const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const instagramProfileUrl = "https://www.instagram.com/drreddisankararao99";

export const Blog = () => {
  const { language, t } = useLanguage();
  const { blogArticles } = useClinicData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Available unique categories
  const categories = ['All', ...new Set(blogArticles.map((a) => a.category))];

  const filteredArticles = blogArticles.filter((article) => {
    const title = language === 'te' ? article.titleTe : article.titleEn;
    const summary = language === 'te' ? article.summaryTe : article.summaryEn;
    const matchesSearch = 
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#FCFAF5]">
      <SeoHelmet 
        title={language === 'te' ? 'ఆరోగ్య బ్లాగ్ & రోగుల అవగాహన - బ్రెయిన్ స్పైన్ & న్యూరో క్లినిక్' : 'Health Blog & Patient Education - Brain Spine & Neuro Clinic'}
        description="Educational guides on stroke warning signs, lumbar spine ergonomics, sciatica relief, and seizure management."
      />

      {/* Hero Banner */}
      <PageHero
        badge={language === 'te' ? 'ప్రజారోగ్యం & రోగుల అవగాహన' : 'Public Health & Patient Education'}
        badgeIcon={<BookOpen className="w-3.5 h-3.5 text-amber-400" />}
        title={language === 'te' ? 'ఆరోగ్య బ్లాగ్' : 'Health Blog'}
        subtitle={language === 'te' ? 'మెరుగైన మెదడు & వెన్నెముక ఆరోగ్యం కోసం నిపుణుల సలహాలు' : 'Expert Insights for Better Brain & Spine Health'}
        description={language === 'te'
          ? 'స్ట్రోక్ హెచ్చరిక లక్షణాలు, వెన్నెముక ఆరోగ్యం, సయాటికా ఉపశమనం మరియు ఫిట్స్ ప్రథమ చికిత్సపై నిపుణుల మార్గదర్శక కథనాలు.'
          : 'Evidence-informed articles, ergonomic spine tips, and patient guides written to make complex neurological care understandable.'}
        breadcrumbs={[{ label: language === 'te' ? 'ఆరోగ్య బ్లాగ్' : 'Health Blog' }]}
        bgImage="/images/facility-ot.jpg"
      />

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-12 sm:py-16 space-y-12">

        {/* ========================================================= */}
        {/* DR. REDDI SANKARA RAO INSTAGRAM PROFILE CARD             */}
        {/* ========================================================= */}
        <ScrollReveal direction="up" delay={0.05}>
          <section className="bg-gradient-to-br from-white via-amber-50/30 to-purple-50/20 rounded-3xl p-6 sm:p-8 border-2 border-amber-200/80 shadow-md shadow-amber-500/5 relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Profile Header Card */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                {/* Doctor Avatar with Instagram Story Gradient Ring */}
                <div className="relative group shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] p-[3px] shadow-md group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/images/dr-reddi-sankara-rao.jpg" 
                      alt="Dr. Reddi Sankara Rao - Neurosurgeon" 
                      className="w-full h-full rounded-full object-cover bg-white"
                      loading="lazy"
                    />
                  </div>
                  {/* Verified Camera Badge */}
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-tr from-[#833ab4] to-[#fd1d1d] text-white flex items-center justify-center shadow-md border-2 border-white">
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Profile Details */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Dr. Reddi Sankara Rao
                    </h2>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      <CheckCircle2 className="w-3 h-3 text-amber-600" />
                      <span>{language === 'te' ? 'ధృవీకరించబడిన న్యూరో సర్జన్' : 'Chief Neurosurgeon'}</span>
                    </span>
                  </div>

                  <a 
                    href={instagramProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-[#bc1888] hover:text-[#dc2743] transition-colors"
                  >
                    <span>@drreddisankararao99</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <p className="text-xs sm:text-sm text-slate-600 max-w-2xl font-medium leading-relaxed">
                    {language === 'te'
                      ? 'డాక్టర్ రెడ్డి శంకర రావు గారి అధికారిక ఇన్‌స్టాగ్రామ్ పేజీ. మెదడు మరియు వెన్నెముక ఆరోగ్య సూచనలు, సర్జరీ విశేషాలు, స్ట్రోక్ అవగాహన మరియు పేషెంట్ రికవరీ రీల్స్ కోసం ఫాలో అవ్వండి.'
                      : 'Official Instagram profile of Dr. Reddi Sankara Rao (MCh Neurosurgery). Follow for weekly neurological health tips, surgical insights, stroke golden hour awareness, and recovery stories.'}
                  </p>
                </div>
              </div>

              {/* Follow Button */}
              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto shrink-0 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-md shadow-pink-500/25 active:scale-95 transition-all group"
              >
                <InstagramIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>{language === 'te' ? 'ఇన్‌స్టాగ్రామ్‌లో ఫాలో అవ్వండి' : 'Follow on Instagram'}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </section>
        </ScrollReveal>

        {/* Search & Category Filter Toolbar */}
        <ScrollReveal direction="up" delay={0.05}>
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.blog.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-200 focus:border-amber-500 transition-all"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-black shadow-xs shadow-amber-500/20'
                      : 'bg-slate-100 text-slate-700 hover:bg-amber-50 hover:text-amber-900 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 text-slate-500 text-sm">
            {t.common.noResults}
          </div>
        ) : (
          <ScrollStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.09}>
            {filteredArticles.map((article) => {
              const title = language === 'te' ? article.titleTe : article.titleEn;
              const summary = language === 'te' ? article.summaryTe : article.summaryEn;

              return (
                <ScrollStaggerItem key={article.id} className="h-full">
                  <article
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between h-full"
                  >
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                        <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 font-semibold border border-amber-200">
                          {language === 'te' ? article.categoryTe : article.category}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100/70 text-amber-950 border border-amber-300/80">
                          {language === 'te' ? 'క్లినికల్ గైడ్' : 'Clinical Guide'}
                        </span>
                      </div>

                      <h2 className="text-lg font-bold text-slate-900 hover:text-amber-800 transition-colors line-clamp-2">
                        <Link to={`/blog/${article.slug}`}>
                          {title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                          <User className="w-3.5 h-3.5 text-amber-600" />
                          <span>By {article.author || 'Dr. Reddi Sankara Rao'}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{article.readTime}</span>
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] text-slate-400">
                          {article.date}
                        </span>
                        <Link
                          to={`/blog/${article.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:text-amber-950"
                        >
                          <span>{t.common.readMore}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </ScrollStaggerItem>
              );
            })}
          </ScrollStagger>
        )}

        {/* Instagram Follow Callout Banner */}
        <ScrollReveal direction="up" distance={20}>
          <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-white border border-purple-500/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shrink-0 shadow-lg shadow-pink-500/20">
                <InstagramIcon className="w-7 h-7 text-white" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold">
                  {language === 'te' 
                    ? 'డాక్టర్ రెడ్డి శంకర రావు గారిని ఇన్‌స్టాగ్రామ్‌లో ఫాలో అవ్వండి' 
                    : 'Stay Connected with Dr. Reddi Sankara Rao on Instagram'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {language === 'te'
                    ? 'రోజూ కొత్త న్యూరో సర్జరీ & వెన్నెముక ఆరోగ్య వీడియోలు, చిట్కాలు: @drreddisankararao99'
                    : 'Watch weekly educational reels on brain health, spine care, and surgical recovery: @drreddisankararao99'}
                </p>
              </div>
            </div>

            <a
              href={instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3.5 rounded-xl font-black text-xs sm:text-sm bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-white flex items-center gap-2 shadow-lg shadow-pink-500/20 active:scale-95 transition-all"
            >
              <InstagramIcon className="w-4 h-4 text-white" />
              <span>{language === 'te' ? 'ఇన్‌స్టాగ్రామ్‌లో చూడండి' : 'Follow @drreddisankararao99'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
