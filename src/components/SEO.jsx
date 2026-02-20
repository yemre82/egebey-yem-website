import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords }) => {
  const location = useLocation();
  const siteUrl = 'https://egebeyyem.com';
  const fullTitle = title ? `${title} | Egebey Yem Fabrikası` : 'Egebey Yem Fabrikası | Aksaray Yem Üreticisi';

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          el.setAttribute('property', name);
        } else {
          el.setAttribute('name', name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setCanonical = (url) => {
      let el = document.querySelector('link[rel="canonical"]');
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        document.head.appendChild(el);
      }
      el.setAttribute('href', url);
    };

    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('robots', 'index, follow');
    setMeta('author', 'Egebey Yem Fabrikası');
    setMeta('geo.region', 'TR-68');
    setMeta('geo.placename', 'Aksaray, Ortaköy');

    // Open Graph
    setMeta('og:title', fullTitle);
    setMeta('og:description', description);
    setMeta('og:type', 'website');
    setMeta('og:url', `${siteUrl}${location.pathname}`);
    setMeta('og:site_name', 'Egebey Yem Fabrikası');
    setMeta('og:locale', 'tr_TR');

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);

    setCanonical(`${siteUrl}${location.pathname}`);
  }, [fullTitle, description, keywords, location.pathname]);

  return null;
};

export default SEO;
