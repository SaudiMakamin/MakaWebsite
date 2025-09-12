import { useEffect } from 'react';
import { useLanguageContext } from '@/components/language-provider';

interface SEOMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  imageUrl?: string;
  articleAuthor?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  organizationName?: string;
  contactEmail?: string;
  phoneNumber?: string;
  address?: string;
  socialProfiles?: string[];
}

export default function SEOMetadata({
  title,
  description,
  keywords = [],
  canonicalUrl,
  imageUrl,
  articleAuthor,
  articlePublishedTime,
  articleModifiedTime,
  organizationName = 'Saudi Makamin Holding Company',
  contactEmail = 'info@makamin.com.sa',
  phoneNumber = '+966 13 8055966',
  address = 'Riyadh, Kingdom of Saudi Arabia',
  socialProfiles = []
}: SEOMetadataProps) {
  const { language } = useLanguageContext();

  // Core business terms for SEO optimization (no personal names)
  const coreBusinessTerms = [
    'شركة خدمات النفط والغاز', 'Oil and Gas Services Company',
    'خدمات الطاقة', 'Energy Services', 'خدمات بترولية', 'Petroleum Services',
    'شركة مساهمة سعودية', 'Saudi Joint Stock Company',
    'رؤية 2030', 'Vision 2030', 'قطاع الطاقة السعودي', 'Saudi Energy Sector',
    'صناعة البترول', 'Petroleum Industry', 'الصناعات البتروكيماوية', 'Petrochemical Industries'
  ];

  // Core projects and companies for SEO
  const coreProjectsCompanies = [
    'مكامن السعودية القابضة', 'Saudi Makamin Holding Company', 'Makamin Saudi Holding',
    'مكامن أوف شور', 'Makamin Offshore Saudi', 'MOS', 'Makamin Offshore Saudi Ltd',
    'مكامن للخدمات البترولية', 'Makamin Petroleum Services',
    'مكامن البحرين', 'Makamin Bahrain',
    'أرامكو السعودية', 'Saudi Aramco', 'Aramco',
    'مصفاة رأس تنورة', 'Ras Tanura Refinery', 'RTR',
    'محطة شدقم', 'SHEDGUM GOSP-4', 'Shedgum',
    'العمليات المشتركة بالخفجي', 'Khafji Joint Operation',
    'توف نورد', 'TÜV NORD CERT', 'TUV NORD',
    'أفغانيم العالمية', 'Afghanim International',
    'بيت الطاقة القابضة', 'Energy House Holding',
    'الدرة لخدمات النفط', 'Al-Dorra Petroleum Services',
    'بن طامي القابضة', 'Bin Tami Holding',
    'مجموعة البلاد', 'Al Bilad Group',
    'عجلان وأخوانه القابضة', 'Ajlan & Bros Holding'
  ];

  // Technical certifications and registrations
  const technicalTerms = [
    'آيزو 9001:2015', 'ISO 9001:2015',
    'آيزو 14001:2015', 'ISO 14001:2015', 
    'آيزو 45001:2018', 'ISO 45001:2018',
    'السجل التجاري', 'Commercial Registration', 'CR-1010251168', 'CR-2050048513',
    'الفحص غير المدمر', 'Non-Destructive Testing', 'NDT',
    'RT', 'MT', 'PT', 'UT', 'API Inspector',
    'T&I Shutdown', 'Tie-In', 'Pipeline Services',
    'Multi-Phase Flow Meter', 'MPPM',
    'صفر حوادث الوقت المفقود', 'Zero Lost Time Accident', 'LTA',
    '1980 يوم', '1980 days safety record',
    '1.2 مليار ريال', 'SAR 1.2 billion', '1.2 billion capital'
  ];

  // All SEO keywords combined (no personal names)
  const allSEOKeywords = [
    ...coreBusinessTerms,
    ...coreProjectsCompanies,
    ...technicalTerms,
    ...keywords
  ];

  const defaultTitle = language === 'ar' 
    ? 'مكامن السعودية القابضة - شركة خدمات النفط والغاز برأس مال 1.2 مليار ريال'
    : 'Saudi Makamin Holding Company - Oil & Gas Services with SAR 1.2 Billion Capital';

  const defaultDescription = language === 'ar'
    ? 'شركة مكامن السعودية القابضة لخدمات النفط والغاز برأس مال 1.2 مليار ريال سعودي. خدمات بترولية وبحرية متكاملة، شراكات مع أرامكو السعودية، شهادات آيزو دولية، سجل سلامة 1980 يوم صفر حوادث. خبرة منذ عام 2008 في قطاع الطاقة السعودي.'
    : 'Saudi Makamin Holding Company for Oil & Gas Services with SAR 1.2 billion capital. Comprehensive petroleum and marine services, Saudi Aramco partnerships, international ISO certifications, 1980 days zero accident safety record. Expert energy sector experience since 2008.';

  useEffect(() => {
    // Update document title
    document.title = title || defaultTitle;

    // Create or update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description || defaultDescription);
    updateMetaTag('keywords', allSEOKeywords.join(', '));
    updateMetaTag('author', organizationName);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('bingbot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Language and locale
    updateMetaTag('language', language === 'ar' ? 'Arabic' : 'English');
    document.documentElement.lang = language === 'ar' ? 'ar-SA' : 'en-SA';

    // Open Graph tags
    updateMetaTag('og:title', title || defaultTitle, true);
    updateMetaTag('og:description', description || defaultDescription, true);
    updateMetaTag('og:type', articlePublishedTime ? 'article' : 'website', true);
    updateMetaTag('og:url', canonicalUrl || window.location.href, true);
    updateMetaTag('og:site_name', organizationName, true);
    updateMetaTag('og:locale', language === 'ar' ? 'ar_SA' : 'en_SA', true);
    
    if (imageUrl) {
      updateMetaTag('og:image', imageUrl, true);
      updateMetaTag('og:image:alt', title || defaultTitle, true);
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title || defaultTitle);
    updateMetaTag('twitter:description', description || defaultDescription);
    updateMetaTag('twitter:site', '@MakaminSaudi');
    updateMetaTag('twitter:creator', '@MakaminSaudi');
    
    if (imageUrl) {
      updateMetaTag('twitter:image', imageUrl);
      updateMetaTag('twitter:image:alt', title || defaultTitle);
    }

    // Article specific tags
    if (articlePublishedTime) {
      updateMetaTag('article:published_time', articlePublishedTime, true);
      updateMetaTag('article:author', articleAuthor || organizationName, true);
      updateMetaTag('article:section', 'News', true);
      updateMetaTag('article:tag', allSEOKeywords.slice(0, 10).join(', '), true);
    }

    if (articleModifiedTime) {
      updateMetaTag('article:modified_time', articleModifiedTime, true);
    }

    // Business/Organization specific tags
    updateMetaTag('business:contact_data:email', contactEmail);
    updateMetaTag('business:contact_data:phone_number', phoneNumber);
    updateMetaTag('business:contact_data:website', canonicalUrl || window.location.origin);
    updateMetaTag('business:contact_data:street_address', address);
    updateMetaTag('business:contact_data:country_name', 'Saudi Arabia');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl || window.location.href);

    // JSON-LD Structured Data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": organizationName,
      "alternateName": [
        "مكامن السعودية القابضة",
        "Saudi Makamin Holding",
        "Makamin Saudi",
        "مكامن"
      ],
      "url": canonicalUrl || window.location.origin,
      "logo": `${window.location.origin}/images/makamin-logo.png`,
      "description": defaultDescription,
      "foundingDate": "2008",
      "foundingLocation": {
        "@type": "Place",
        "name": "Kingdom of Saudi Arabia"
      },
      "industry": [
        "Oil and Gas Services",
        "Petroleum Services", 
        "Marine Operations",
        "Industrial Inspection",
        "Pipeline Services"
      ],
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "500+"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SA",
        "addressLocality": "Riyadh",
        "streetAddress": address
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": phoneNumber,
          "contactType": "customer service",
          "email": contactEmail,
          "availableLanguage": ["Arabic", "English"]
        }
      ],
      "sameAs": [
        ...socialProfiles,
        "https://www.linkedin.com/company/makamin-saudi",
        "https://twitter.com/MakaminSaudi"
      ],
      "parentOrganization": {
        "@type": "Organization",
        "name": "Saudi Makamin Holding Company"
      },
      "department": [
        {
          "@type": "Organization",
          "name": "Executive Management",
          "parentOrganization": {
            "@type": "Organization",
            "name": organizationName
          }
        },
        {
          "@type": "Organization", 
          "name": "Board of Directors",
          "parentOrganization": {
            "@type": "Organization",
            "name": organizationName
          }
        },
        {
          "@type": "Organization",
          "name": "Offshore Operations Department",
          "parentOrganization": {
            "@type": "Organization", 
            "name": "Makamin Offshore Saudi Ltd"
          }
        },
        {
          "@type": "Organization",
          "name": "Petroleum Services Department",
          "parentOrganization": {
            "@type": "Organization",
            "name": "Makamin Petroleum Services"
          }
        }
      ],
      "award": [
        "ISO 9001:2015 Quality Management Certification",
        "ISO 14001:2015 Environmental Management Certification", 
        "ISO 45001:2018 Occupational Health & Safety Certification",
        "Saudi Aramco Approved Vendor Status",
        "1980 Days Zero Lost Time Accident Record"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "TÜV NORD ISO 9001:2008 Certificate",
          "credentialCategory": "Quality Management",
          "recognizedBy": {
            "@type": "Organization",
            "name": "TÜV NORD CERT GmbH"
          }
        }
      ]
    };

    // Insert or update JSON-LD
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData, null, 2);

  }, [title, description, keywords, canonicalUrl, imageUrl, articleAuthor, articlePublishedTime, articleModifiedTime, organizationName, contactEmail, phoneNumber, address, socialProfiles, language, allSEOKeywords, defaultTitle, defaultDescription]);

  return null;
}