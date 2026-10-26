import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useClinicData } from '../context/ClinicDataContext';
import { SeoHelmet } from '../components/SeoHelmet';
import { PageHero } from '../components/PageHero';
import { ScrollReveal, ScrollStagger, ScrollStaggerItem } from '../components/ScrollReveal';

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

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-12 sm:py-16 space-y-10">

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
                        <span className="flex items-center gap-1 font-medium">
                          <User className="w-3.5 h-3.5 text-amber-600" />
                          <span>{article.author}</span>
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
      </div>
    </div>
  );
};
