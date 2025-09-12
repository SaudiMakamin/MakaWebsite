import { useEffect } from 'react';
import { useLanguageContext } from '@/components/language-provider';

interface SemanticMetadataProps {
  page: 'home' | 'about' | 'services' | 'projects' | 'contact' | 'certifications' | 'media-coverage' | 'update-shareholder';
  title?: string;
  description?: string;
}

export default function SemanticMetadata({ page, title, description }: SemanticMetadataProps) {
  const { language } = useLanguageContext();

  useEffect(() => {
    // Remove existing structured data
    const existingStructuredData = document.querySelectorAll('script[type="application/ld+json"]');
    existingStructuredData.forEach(script => script.remove());

    // Company base data
    const companyData = {
      "@context": "https://schema.org",
      "@type": "Corporation",
      "name": language === 'ar' ? "شركة مكامن السعودية القابضة للخدمات البترولية" : "Saudi Makamin Holding Company for Oil & Gas Services",
      "alternateName": "Saudi Makamin",
      "url": "https://saudimakamin.com",
      "logo": "https://saudimakamin.com/logo.png",
      "description": language === 'ar' ? 
        "شركة سعودية رائدة في خدمات النفط والغاز برأس مال 1.2 مليار ريال سعودي، تأسست عام 2008" :
        "Leading Saudi oil & gas services company with SAR 1.2 billion capital, established in 2008",
      "foundingDate": "2008-05-24",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Prince Mohammed bin Fahd Rd.",
        "addressLocality": "Dammam",
        "postalCode": "31431",
        "addressCountry": "SA",
        "addressRegion": "Eastern Province"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966-13-8055966",
        "faxNumber": "+966-13-8251090",
        "email": "info@saudimakamin.com",
        "contactType": "customer service",
        "availableLanguage": ["Arabic", "English"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/makamin-saudi",
        "https://twitter.com/makaminsaudi"
      ],
      "numberOfEmployees": {
        "@type": "QuantitativeValue",
        "value": "500+"
      },
      "founders": [
        {
          "@type": "Person",
          "name": "Makamin Founders"
        }
      ],
      "parentOrganization": {
        "@type": "Organization",
        "name": "Makamin Group"
      },
      "subOrganization": [
        {
          "@type": "Corporation",
          "name": "Makamin Petroleum Services",
          "description": "Core oilfield services including drilling and cementing"
        },
        {
          "@type": "Corporation", 
          "name": "Makamin Offshore Saudi Ltd (MOS)",
          "description": "Offshore rigs operations and marine support services"
        },
        {
          "@type": "Corporation",
          "name": "Makamin Bahrain",
          "description": "Offshore commercial arm and investment management"
        }
      ],
      "award": [
        "ISO 9001:2015 Quality Management Systems",
        "ISO 14001:2015 Environmental Management",
        "ISO 45001:2018 Occupational Health & Safety",
        "Saudi Aramco Approved Vendor Status",
        "Zero Lost Time Accident Record"
      ],
      "knowsAbout": [
        "Oil and Gas Services",
        "Drilling Services", 
        "Pipeline Construction",
        "Industrial Inspection",
        "Offshore Operations",
        "Marine Support",
        "Geoscience Services",
        "ZENCUS Technology"
      ],
      "serviceArea": {
        "@type": "Place",
        "name": "Middle East and Global"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Oil & Gas Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Drilling Services",
              "description": "Advanced drilling technology and wellbore solutions"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Pipeline & Industrial Services",
              "description": "Comprehensive pipeline construction and industrial solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Industrial Inspection Services",
              "description": "Non-destructive testing and advanced inspection services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Offshore Operations", 
              "description": "Marine support and offshore platform services"
            }
          }
        ]
      }
    };

    // Page-specific structured data
    let pageSpecificData = {};

    switch (page) {
      case 'about':
        pageSpecificData = {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": companyData,
          "description": language === 'ar' ? 
            "تعرف على مكامن السعودية - تاريخنا ورؤيتنا ومهمتنا في قطاع النفط والغاز" :
            "Learn about Saudi Makamin - our history, vision, and mission in oil & gas sector"
        };
        break;

      case 'services':
        pageSpecificData = {
          "@context": "https://schema.org",
          "@type": "Service",
          "provider": companyData,
          "serviceType": "Oil and Gas Services",
          "hasOfferCatalog": companyData.hasOfferCatalog
        };
        break;

      case 'projects':
        pageSpecificData = {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": language === 'ar' ? "مشاريع مكامن السعودية" : "Saudi Makamin Projects",
          "description": language === 'ar' ? 
            "مشاريع مكتملة مع أرامكو السعودية والعملاء الرئيسيين" :
            "Completed projects with Saudi Aramco and major clients",
          "mainEntity": {
            "@type": "ItemList",
            "name": "Major Projects",
            "itemListElement": [
              {
                "@type": "Project",
                "name": "Saudi Aramco Pipeline Installations",
                "description": "Pipeline projects in Qatif, Haradh, Abqaiq, Shedgum, Uthmaniyah",
                "client": {
                  "@type": "Organization",
                  "name": "Saudi Aramco"
                }
              },
              {
                "@type": "Project", 
                "name": "Drilling Operations",
                "description": "50+ completed wells with depths ranging from 100 to 6,000+ ft",
                "client": {
                  "@type": "Organization",
                  "name": "Saudi Aramco"
                }
              }
            ]
          }
        };
        break;

      case 'certifications':
        pageSpecificData = {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": language === 'ar' ? "شهادات واعتمادات مكامن" : "Makamin Certifications",
          "description": language === 'ar' ? 
            "الشهادات الدولية والمحلية التي تؤكد التزامنا بأعلى معايير الجودة" :
            "International and local certifications confirming our commitment to highest quality standards",
          "mainEntity": {
            "@type": "ItemList",
            "name": "Certifications",
            "itemListElement": [
              {
                "@type": "Certification",
                "name": "ISO 9001:2015",
                "certificationIdentification": "ISO-9001-2015-MKM",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "International Organization for Standardization"
                }
              },
              {
                "@type": "Certification",
                "name": "ISO 14001:2015", 
                "certificationIdentification": "ISO-14001-2015-MKM",
                "recognizedBy": {
                  "@type": "Organization",
                  "name": "International Organization for Standardization"
                }
              }
            ]
          }
        };
        break;

      case 'contact':
        pageSpecificData = {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": companyData,
          "description": language === 'ar' ? 
            "تواصل مع مكامن السعودية - معلومات الاتصال والمكاتب" :
            "Contact Saudi Makamin - contact information and offices"
        };
        break;

      default:
        pageSpecificData = companyData;
    }

    // Create and append structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify([companyData, pageSpecificData]);
    document.head.appendChild(script);

    // Update meta tags
    updateMetaTags(page, title, description, language);

    return () => {
      // Cleanup on unmount
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [page, title, description, language]);

  return null;
}

function updateMetaTags(page: string, title?: string, description?: string, language?: string) {
  // Update page title
  const pageTitle = title || getDefaultTitle(page, language);
  document.title = pageTitle;

  // Update meta description
  const pageDescription = description || getDefaultDescription(page, language);
  updateOrCreateMeta('description', pageDescription);

  // Update Open Graph tags
  updateOrCreateMeta('property', 'og:title', pageTitle);
  updateOrCreateMeta('property', 'og:description', pageDescription);
  updateOrCreateMeta('property', 'og:type', 'website');
  updateOrCreateMeta('property', 'og:url', window.location.href);
  updateOrCreateMeta('property', 'og:site_name', 'Saudi Makamin');
  updateOrCreateMeta('property', 'og:locale', language === 'ar' ? 'ar_SA' : 'en_US');

  // Update Twitter Card tags
  updateOrCreateMeta('name', 'twitter:card', 'summary_large_image');
  updateOrCreateMeta('name', 'twitter:title', pageTitle);
  updateOrCreateMeta('name', 'twitter:description', pageDescription);

  // Update canonical URL
  updateOrCreateLink('canonical', window.location.href);

  // Update language tags
  updateOrCreateMeta('property', 'og:locale', language === 'ar' ? 'ar_SA' : 'en_US');
  const htmlElement = document.documentElement;
  htmlElement.setAttribute('lang', language === 'ar' ? 'ar' : 'en');
  htmlElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
}

function updateOrCreateMeta(attribute: string, name: string, content?: string) {
  if (!content) {
    content = name;
    name = attribute;
    attribute = 'name';
  }
  
  let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

function updateOrCreateLink(rel: string, href: string) {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

function getDefaultTitle(page: string, language?: string): string {
  const titles = {
    ar: {
      home: 'مكامن السعودية - الشركة الرائدة في خدمات النفط والغاز',
      about: 'عن الشركة - مكامن السعودية',
      services: 'خدماتنا - مكامن السعودية',
      projects: 'مشاريعنا - مكامن السعودية', 
      certifications: 'الشهادات والاعتمادات - مكامن السعودية',
      contact: 'تواصل معنا - مكامن السعودية'
    },
    en: {
      home: 'Saudi Makamin - Leading Oil & Gas Services Company',
      about: 'About Us - Saudi Makamin',
      services: 'Our Services - Saudi Makamin',
      projects: 'Our Projects - Saudi Makamin',
      certifications: 'Certifications & Accreditations - Saudi Makamin',
      contact: 'Contact Us - Saudi Makamin'
    }
  };
  
  const langKey = language === 'ar' ? 'ar' : 'en';
  return (titles[langKey] as any)[page] || titles.en.home;
}

function getDefaultDescription(page: string, language?: string): string {
  const descriptions = {
    ar: {
      home: 'شركة مكامن السعودية القابضة - شركة رائدة في خدمات النفط والغاز برأس مال 1.2 مليار ريال، تقدم خدمات الحفر والأنابيب والفحص الصناعي والعمليات البحرية.',
      about: 'تعرف على تاريخ مكامن السعودية ورؤيتها ومهمتها في قطاع النفط والغاز منذ التأسيس عام 2008.',
      services: 'خدمات شاملة في النفط والغاز تشمل الحفر والأنابيب والفحص الصناعي والعمليات البحرية.',
      projects: 'مشاريع مكتملة مع أرامكو السعودية والعملاء الرئيسيين في قطاع النفط والغاز.',
      certifications: 'شهادات آيزو الدولية والاعتمادات المحلية التي تؤكد التزامنا بأعلى معايير الجودة والسلامة.',
      contact: 'تواصل مع مكامن السعودية - معلومات الاتصال والمكاتب في الدمام والمملكة العربية السعودية.'
    },
    en: {
      home: 'Saudi Makamin Holding Company - Leading oil & gas services company with SAR 1.2 billion capital, providing drilling, pipeline, industrial inspection, and offshore operations.',
      about: 'Learn about Saudi Makamin\'s history, vision, and mission in the oil & gas sector since establishment in 2008.',
      services: 'Comprehensive oil & gas services including drilling, pipeline, industrial inspection, and offshore operations.',
      projects: 'Completed projects with Saudi Aramco and major clients in the oil & gas sector.',
      certifications: 'International ISO certifications and local accreditations confirming our commitment to highest quality and safety standards.',
      contact: 'Contact Saudi Makamin - contact information and offices in Dammam, Saudi Arabia.'
    }
  };
  
  const langKey = language === 'ar' ? 'ar' : 'en';
  return (descriptions[langKey] as any)[page] || descriptions.en.home;
}