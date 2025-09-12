// SEO Configuration for Makamin Saudi Holding Company
export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: any;
}

export const baseSEO: SEOConfig = {
  title: "شركة مكامن السعودية القابضة | خدمات النفط والغاز",
  description: "شركة مكامن السعودية القابضة - ريادة في خدمات النفط والغاز، الحلول البحرية، والمشاريع الاستراتيجية.",
  keywords: "مكامن، مكامن السعودية القابضة، Makamin Saudi Holding، شركة مكامن، Makamin Company، مكامن أوفشور، Makamin Offshore Saudi، مكامن للخدمات البترولية، Makamin Petroleum Services، أرامكو السعودية، Saudi Aramco، مصفاة رأس تنورة، Ras Tanura Refinery، محطة شدقم، SHEDGUM GOSP-4، آيزو 9001:2015، ISO 9001:2015، توف نورد، TÜV NORD CERT، 1980 يوم صفر حوادث، 1980 days zero accidents، 1.2 مليار ريال، SAR 1.2 billion، خدمات النفط والغاز، Oil Gas Services، السعودية، Saudi Arabia، رؤية 2030، Vision 2030، خدمات الطاقة، Energy Services، قطاع الطاقة السعودي، Saudi Energy Sector، شركة خدمات الطاقة، Energy Services Company",
  ogImage: "https://makamin.com.sa/og-image.jpg",
  canonicalUrl: "https://makamin.com.sa"
};

export const pagesSEO: Record<string, SEOConfig> = {
  "/": {
    title: "شركة مكامن السعودية القابضة | خدمات النفط والغاز",
    description: "شركة مكامن السعودية القابضة - ريادة في خدمات النفط والغاز، الحلول البحرية، والمشاريع الاستراتيجية.",
    keywords: baseSEO.keywords + "، الصفحة الرئيسية، Home Page، مكامن الرئيسية",
    canonicalUrl: "https://makamin.com.sa/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "مكامن السعودية القابضة",
      "alternateName": "Saudi Makamin Holding Company",
      "url": "https://makamin.com.sa",
      "logo": "https://makamin.com.sa/images/makamin-social-preview.jpg",
      "description": "شركة مكامن السعودية القابضة لخدمات النفط والغاز برأس مال 1.2 مليار ريال سعودي",
      "foundingDate": "2008",
      "industry": "Oil and Gas Services",
      "numberOfEmployees": "100+",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "SA",
        "addressLocality": "Riyadh",
        "streetAddress": "Canary Complex"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966-13-8055966",
        "contactType": "customer service",
        "availableLanguage": ["Arabic", "English"]
      },
      "sameAs": [
        "https://makamin.com.sa"
      ]
    }
  },
  "/about": {
    title: "عن مكامن السعودية القابضة - تاريخ الشركة وقيادتها | Oil & Gas Services",
    description: "Saudi Makamin Holding Company - About Us | Oil & Gas Services since 2008 | SAR 1.2 Billion Capital | Executive Leadership",
    keywords: baseSEO.keywords + "، عن الشركة، About Us، تاريخ مكامن، مجلس الإدارة، القيادة التنفيذية، Board of Directors",
    canonicalUrl: "https://makamin.com.sa/about"
  },
  "/services": {
    title: "خدمات مكامن السعودية القابضة - خدمات النفط والغاز والطاقة | Petroleum Services",
    description: "خدمات شاملة في قطاع النفط والغاز: الحفر والأسمنت، الفحص غير المدمر NDT، خدمات خطوط الأنابيب، الصيانة والإيقاف T&I Shutdown، خدمات بحرية أوفشور، شهادات آيزو دولية.",
    keywords: baseSEO.keywords + "، خدمات النفط، Petroleum Services، NDT، Drilling، Cementing، Pipeline Services، Marine Services",
    canonicalUrl: "https://makamin.com.sa/services"
  },
  "/projects": {
    title: "مشاريع مكامن السعودية القابضة مع أرامكو - مصفاة رأس تنورة ومحطة شدقم",
    description: "مشاريع شركة مكامن مع أرامكو السعودية: مصفاة رأس تنورة، محطة شدقم GOSP-4، خدمات الفحص غير المدمر، صيانة خطوط الأنابيب، مشاريع الحفر والأسمنت بقيمة مليارات الريالات.",
    keywords: baseSEO.keywords + "، مشاريع أرامكو، Aramco Projects، مصفاة رأس تنورة، محطة شدقم، GOSP-4، Projects",
    canonicalUrl: "https://makamin.com.sa/projects"
  },
  "/certifications": {
    title: "شهادات مكامين السعودية القابضة - آيزو 9001:2015 وتوف نورد | Quality Certifications",
    description: "شهادات الجودة والسلامة لشركة مكامن: آيزو 9001:2015، آيزو 14001:2015، آيزو 45001:2018، شهادة توف نورد TÜV NORD، السجل التجاري، شهادات أرامكو المعتمدة، سجل سلامة 1980 يوم صفر حوادث.",
    keywords: baseSEO.keywords + "، شهادات الجودة، ISO Certifications، آيزو 9001، TÜV NORD، Quality Certifications، سجل السلامة",
    canonicalUrl: "https://makamin.com.sa/certifications"
  },
  "/news": {
    title: "أخبار مكامن السعودية القابضة - آخر التطورات والإنجازات | Company News",
    description: "آخر أخبار وتطورات شركة مكامن السعودية القابضة: الجمعية العمومية، الشراكات الجديدة، الإنجازات في السلامة، التوسعات الدولية، أخبار مجلس الإدارة والقيادة التنفيذية.",
    keywords: baseSEO.keywords + "، أخبار مكامن، Company News، الجمعية العمومية، أخبار الشركة، Press Releases",
    canonicalUrl: "https://makamin.com.sa/news"
  },
  "/contact": {
    title: "اتصل بمكامن السعودية القابضة - معلومات التواصل | Contact Information",
    description: "معلومات التواصل مع شركة مكامن السعودية القابضة: المقر الرئيسي في الرياض، الفروع في الدمام والبحرين وماليزيا، أرقام الهواتف، البريد الإلكتروني، نموذج التواصل المباشر.",
    keywords: baseSEO.keywords + "، اتصل بنا، Contact Us، معلومات التواصل، المقر الرئيسي، الرياض، Riyadh Office",
    canonicalUrl: "https://makamin.com.sa/contact"
  },
  "/offshore-operations": {
    title: "عمليات مكامن البحرية - مكامن أوفشور السعودية | Offshore Marine Operations",
    description: "عمليات مكامن البحرية والأوفشور: أسطول من 12+ سفينة متخصصة، مشاريع بقيمة 400+ مليون دولار، عمليات بحرية في الخليج العربي، خدمات الدعم البحري لأرامكو.",
    keywords: baseSEO.keywords + "، مكامن أوفشور، Offshore Operations، العمليات البحرية، Marine Services، الأسطول البحري",
    canonicalUrl: "https://makamin.com.sa/offshore-operations"
  },
  "/petroleum-services": {
    title: "خدمات مكامن البترولية - الحفر والأسمنت وخطوط الأنابيب | Petroleum Services",
    description: "خدمات مكامن البترولية المتخصصة: عمليات الحفر، خدمات الأسمنت، صيانة خطوط الأنابيب، الفحص غير المدمر NDT، خدمات الإيقاف والصيانة T&I، خبرة منذ 2008.",
    keywords: baseSEO.keywords + "، الخدمات البترولية، Petroleum Services، الحفر، Drilling، الأسمنت، Cementing، خطوط الأنابيب",
    canonicalUrl: "https://makamin.com.sa/petroleum-services"
  },
  "/bahrain-operations": {
    title: "عمليات مكامن في البحرين - التوسع الإقليمي | Bahrain Operations",
    description: "عمليات شركة مكامن في مملكة البحرين: استثمارات إقليمية، شراكات خليجية، خدمات النفط والغاز في السوق البحريني، مكتب مكامن البحرين للاستثمار.",
    keywords: baseSEO.keywords + "، مكامن البحرين، Bahrain Operations، التوسع الإقليمي، الاستثمارات الخليجية",
    canonicalUrl: "https://makamin.com.sa/bahrain-operations"
  },
  "/malaysia": {
    title: "مكتب مكامن في ماليزيا - كوالالمبور | Malaysia Office Operations",
    description: "مكتب مكامن في ماليزيا: Suite 33.01, Level 33, The Gardens North Tower, Mid Valley City, Kuala Lumpur. شراكات آسيوية، عمليات أوفشور في جنوب شرق آسيا، خدمات النفط والغاز الدولية.",
    keywords: baseSEO.keywords + "، مكامن ماليزيا، Malaysia Office، كوالالمبور، Kuala Lumpur، العمليات الآسيوية",
    canonicalUrl: "https://makamin.com.sa/malaysia"
  },
  "/headquarters": {
    title: "مقر مكامن السعودية القابضة - الرياض | Corporate Headquarters",
    description: "المقر الرئيسي لشركة مكامن السعودية القابضة في الرياض: مجمع الكناري، القيادة التنفيذية، مركز اتخاذ القرارات، مكاتب إدارية حديثة، إطلالة على العاصمة السعودية.",
    keywords: baseSEO.keywords + "، المقر الرئيسي، Headquarters، الرياض، Riyadh، مجمع الكناري، Canary Complex",
    canonicalUrl: "https://makamin.com.sa/headquarters"
  },
  "/investor-relations": {
    title: "علاقات المستثمرين - مكامن السعودية القابضة | Investor Relations",
    description: "علاقات المستثمرين في مكامن السعودية القابضة: 60+ مستثمر نخبة، رأس مال مصرح 1.2 مليار ريال، التقارير المالية، الجمعيات العمومية، فرص الاستثمار في قطاع الطاقة.",
    keywords: baseSEO.keywords + "، علاقات المستثمرين، Investor Relations، المستثمرون، الاستثمار، Financial Reports",
    canonicalUrl: "https://makamin.com.sa/investor-relations"
  },
  "/media-coverage": {
    title: "التغطية الإعلامية لمكامن السعودية القابضة | Media Coverage",
    description: "أصداء مكامن في الإعلام: تغطية صحفية شاملة، مقالات إعلامية، تقارير صحفية عن إنجازات الشركة، حضور إعلامي قوي في قطاع النفط والغاز السعودي.",
    keywords: baseSEO.keywords + "، التغطية الإعلامية، Media Coverage، الإعلام، Press Coverage، أصداء مكامن",
    canonicalUrl: "https://makamin.com.sa/media-coverage"
  },
  "/update-shareholder": {
    title: "تحديث بيانات المساهمين - مكامن السعودية القابضة | Shareholder Information",
    description: "نظام تحديث بيانات المساهمين في مكامن السعودية القابضة: تحديث المعلومات الشخصية، حقوق المساهمين، الشهادات الرقمية، حقوق التصويت، استحقاق الأرباح.",
    keywords: baseSEO.keywords + "، المساهمون، Shareholders، تحديث البيانات، حقوق المساهمين، الشهادات الرقمية",
    canonicalUrl: "https://makamin.com.sa/update-shareholder"
  }
};

export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "مكامن السعودية القابضة",
  "alternateName": "Saudi Makamin Holding Company",
  "url": "https://makamin.com.sa",
  "description": "موقع شركة مكامن السعودية القابضة لخدمات النفط والغاز",
  "inLanguage": ["ar", "en"],
  "publisher": {
    "@type": "Organization",
    "name": "مكامن السعودية القابضة",
    "logo": {
      "@type": "ImageObject",
      "url": "https://makamin.com.sa/images/makamin-social-preview.jpg"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.google.com/search?q=site:makamin.com.sa+{search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};