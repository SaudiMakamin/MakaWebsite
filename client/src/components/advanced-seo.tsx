import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { ARABIC_SEO_KEYWORDS, ENGLISH_SEO_KEYWORDS } from '@/lib/seo-performance';

export function AdvancedSEO() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Advanced meta tags for current page
    const pageKeywords = [...ARABIC_SEO_KEYWORDS, ...ENGLISH_SEO_KEYWORDS].join(', ');
    
    // Update advanced meta tags
    updateMetaTag('name', 'author', 'Saudi Makamin Holding Company');
    updateMetaTag('name', 'publisher', 'مكامن السعودية القابضة');
    updateMetaTag('name', 'copyright', '© 2025 Saudi Makamin Holding Company. All rights reserved.');
    updateMetaTag('name', 'language', 'Arabic, English');
    updateMetaTag('name', 'geo.country', 'SA');
    updateMetaTag('name', 'geo.region', 'SA-01');
    updateMetaTag('name', 'geo.placename', 'Riyadh, Saudi Arabia');
    updateMetaTag('name', 'ICBM', '24.7136,46.6753');
    updateMetaTag('name', 'DC.title', 'مكامن السعودية القابضة - شركة خدمات النفط والغاز');
    updateMetaTag('name', 'DC.creator', 'Saudi Makamin Holding Company');
    updateMetaTag('name', 'DC.subject', pageKeywords);
    updateMetaTag('name', 'DC.description', 'شركة مكامن السعودية القابضة لخدمات النفط والغاز برأس مال 1.2 مليار ريال');
    updateMetaTag('name', 'DC.language', 'ar, en');
    updateMetaTag('name', 'DC.format', 'text/html');
    updateMetaTag('name', 'DC.identifier', 'https://makamin.com.sa');
    
    // Business-specific meta tags
    updateMetaTag('name', 'business.company', 'Saudi Makamin Holding Company');
    updateMetaTag('name', 'business.industry', 'Oil and Gas Services');
    updateMetaTag('name', 'business.founded', '2008');
    updateMetaTag('name', 'business.capital', 'SAR 1.2 Billion');
    updateMetaTag('name', 'business.location', 'Riyadh, Saudi Arabia');
    updateMetaTag('name', 'business.certifications', 'ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, TÜV NORD');
    updateMetaTag('name', 'business.safety_record', '1980 Days Zero LTA');
    updateMetaTag('name', 'business.partnerships', 'Saudi Aramco, Halliburton, Baker Hughes, Schlumberger');
    
    // Search engine specific meta tags
    updateMetaTag('name', 'alexaVerifyID', 'makamin-saudi-holding-verification');
    updateMetaTag('name', 'yandex-verification', 'makamin-yandex-verification');
    updateMetaTag('name', 'norton-safeweb-site-verification', 'makamin-norton-verification');
    
    // Page freshness and revisit
    updateMetaTag('name', 'revisit-after', '7 days');
    updateMetaTag('name', 'expires', 'never');
    updateMetaTag('name', 'distribution', 'global');
    updateMetaTag('name', 'rating', 'general');
    updateMetaTag('name', 'resource-type', 'document');
    
    // Enhanced Open Graph for specific pages
    const pageSpecificOG = getPageSpecificOG(location);
    Object.entries(pageSpecificOG).forEach(([key, value]) => {
      updateMetaTag('property', key, value);
    });
    
    // Twitter Card enhancements
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:site', '@MakaminSaudi');
    updateMetaTag('name', 'twitter:creator', '@MakaminSaudi');
    updateMetaTag('name', 'twitter:domain', 'makamin.com.sa');
    
    // LinkedIn meta tags
    updateMetaTag('property', 'linkedin:owner', 'Saudi Makamin Holding Company');
    
    // Pinterest meta tags
    updateMetaTag('name', 'pinterest-rich-pin', 'true');
    
    // WhatsApp sharing optimization
    updateMetaTag('property', 'og:image:alt', 'شعار شركة مكامن السعودية القابضة لخدمات النفط والغاز');
    
  }, [location]);
  
  return null;
}

function updateMetaTag(attribute: string, name: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.content = content;
}

function getPageSpecificOG(location: string): Record<string, string> {
  const baseOG = {
    'og:site_name': 'مكامن السعودية القابضة',
    'og:type': 'website',
    'og:locale': 'ar_SA',
    'og:locale:alternate': 'en_US'
  };
  
  switch (location) {
    case '/':
      return {
        ...baseOG,
        'og:title': 'مكامن السعودية القابضة - الصفحة الرئيسية | شركة خدمات النفط والغاز',
        'og:description': 'Saudi Makamin Holding Company - Oil & Gas Services | SAR 1.2 Billion Capital | Aramco Partnership',
        'og:url': 'https://makamin.com.sa/',
        'article:section': 'Homepage'
      };
    case '/about':
      return {
        ...baseOG,
        'og:title': 'عن شركة مكامن السعودية القابضة - خدمات النفط والغاز',
        'og:description': 'Saudi Makamin Holding Company - About Us | Oil & Gas Services since 2008 | Aramco Partnerships',
        'og:url': 'https://makamin.com.sa/about',
        'article:section': 'About Company'
      };
    case '/services':
      return {
        ...baseOG,
        'og:title': 'خدمات مكامن السعودية القابضة - النفط والغاز والطاقة',
        'og:description': 'خدمات شاملة: الحفر والأسمنت، الفحص غير المدمر NDT، خطوط الأنابيب، الصيانة، خدمات بحرية أوفشور.',
        'og:url': 'https://makamin.com.sa/services',
        'article:section': 'Services'
      };
    case '/projects':
      return {
        ...baseOG,
        'og:title': 'مشاريع مكامن مع أرامكو - مصفاة رأس تنورة ومحطة شدقم',
        'og:description': 'مشاريع مع أرامكو: مصفاة رأس تنورة، محطة شدقم GOSP-4، الفحص غير المدمر، صيانة خطوط الأنابيب.',
        'og:url': 'https://makamin.com.sa/projects',
        'article:section': 'Projects'
      };
    case '/certifications':
      return {
        ...baseOG,
        'og:title': 'شهادات مكامن - آيزو 9001:2015 وتوف نورد',
        'og:description': 'شهادات الجودة: آيزو 9001:2015، آيزو 14001:2015، آيزو 45001:2018، توف نورد TÜV NORD، شهادات أرامكو.',
        'og:url': 'https://makamin.com.sa/certifications',
        'article:section': 'Certifications'
      };
    case '/news':
      return {
        ...baseOG,
        'og:title': 'أخبار مكامن السعودية القابضة - آخر التطورات',
        'og:description': 'آخر أخبار مكامن: الجمعية العمومية، الشراكات الجديدة، إنجازات السلامة، التوسعات الدولية.',
        'og:url': 'https://makamin.com.sa/news',
        'article:section': 'News'
      };
    case '/contact':
      return {
        ...baseOG,
        'og:title': 'اتصل بمكامن السعودية القابضة - معلومات التواصل',
        'og:description': 'معلومات التواصل: المقر الرئيسي الرياض، فروع الدمام والبحرين وماليزيا، أرقام الهواتف والبريد الإلكتروني.',
        'og:url': 'https://makamin.com.sa/contact',
        'article:section': 'Contact'
      };
    default:
      return baseOG;
  }
}