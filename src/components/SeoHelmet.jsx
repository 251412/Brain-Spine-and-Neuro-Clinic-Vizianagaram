import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const SITE_URL = 'https://www.drreddisankararao.com';
const DEFAULT_IMAGE = `${SITE_URL}/images/clinic-emblem-isolated.png`;

export const SeoHelmet = ({
  title,
  description,
  canonicalUrl,
  schema,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  breadcrumbs = []
}) => {
  const { language } = useLanguage();

  useEffect(() => {
    // 1. Page Title
    const finalTitle = title || (language === 'te' 
      ? 'డా. రెడ్డి శంకర రావు – విజయనగరంలో న్యూరోసర్జన్ | బ్రెయిన్ & స్పైన్ సర్జన్'
      : 'Dr. Reddi Sankara Rao – Neurosurgeon in Vizianagaram | Brain & Spine Surgeon');
    
    document.title = finalTitle;

    // Helper to set or create meta tags
    const setMeta = (nameAttr, nameVal, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(nameAttr, nameVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to set or create link tags
    const setLink = (rel, href, hreflang = null) => {
      let selector = hreflang 
        ? `link[rel="${rel}"][hreflang="${hreflang}"]` 
        : `link[rel="${rel}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        if (hreflang) el.setAttribute('hreflang', hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // 2. Meta Description
    const finalDesc = description || (language === 'te'
      ? 'విజయనగరంలో ప్రముఖ న్యూరోసర్జన్ మరియు బ్రెయిన్ & స్పైన్ సర్జన్ డా. రెడ్డి శంకర రావు గారిని సంప్రదించండి. మెదడు, వెన్నెముక మరియు నరాల సమస్యలకు నిపుణుల సంప్రదింపులు.'
      : 'Consult Dr. Reddi Sankara Rao, Neurosurgeon and Brain & Spine Surgeon in Vizianagaram. Expert consultation for brain, spine and neurological conditions.');
    setMeta('name', 'description', finalDesc);

    // 3. Meta Robots
    setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 4. Canonical & Alternate Hreflang URLs
    const currentPath = window.location.pathname || '/';
    const cleanPath = currentPath.replace(/\/+$/, '') || '/';
    const pageUrl = canonicalUrl || `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`;
    
    setLink('canonical', pageUrl);
    setLink('alternate', `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`, 'en');
    setLink('alternate', `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}?lang=te`, 'te');
    setLink('alternate', `${SITE_URL}${cleanPath === '/' ? '' : cleanPath}`, 'x-default');

    // 5. Open Graph Meta Tags
    setMeta('property', 'og:title', finalTitle);
    setMeta('property', 'og:description', finalDesc);
    setMeta('property', 'og:url', pageUrl);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:site_name', 'Brain Spine & Neuro Clinic');
    setMeta('property', 'og:locale', language === 'te' ? 'te_IN' : 'en_IN');

    // 6. Twitter Card Meta Tags
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', finalTitle);
    setMeta('name', 'twitter:description', finalDesc);
    setMeta('name', 'twitter:image', ogImage);

    // 7. Structured Data (Schema.org JSON-LD)
    const existingScript = document.getElementById('page-json-ld');
    if (existingScript) {
      existingScript.remove();
    }

    const schemasToInject = [];

    // Inject custom schema if provided
    if (schema) {
      if (Array.isArray(schema)) {
        schemasToInject.push(...schema);
      } else {
        schemasToInject.push(schema);
      }
    }

    // Auto-generate BreadcrumbList schema if breadcrumbs are passed
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbListSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': SITE_URL
          },
          ...breadcrumbs.map((crumb, idx) => ({
            '@type': 'ListItem',
            'position': idx + 2,
            'name': crumb.name || crumb.label,
            'item': crumb.url || (crumb.to ? `${SITE_URL}${crumb.to}` : undefined)
          }))
        ]
      };
      schemasToInject.push(breadcrumbListSchema);
    }

    if (schemasToInject.length > 0) {
      const script = document.createElement('script');
      script.id = 'page-json-ld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(
        schemasToInject.length === 1 ? schemasToInject[0] : schemasToInject
      );
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById('page-json-ld');
      if (s) s.remove();
    };
  }, [title, description, canonicalUrl, schema, ogType, ogImage, breadcrumbs, language]);

  return null;
};
