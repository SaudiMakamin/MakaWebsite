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
    ogImage: "https://makamin.com.sa/images/makamin-social-card.jpg",
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
    ogImage: "https://makamin.com.sa/images/makamin-flag-hero.jpg",
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
    ogImage: "https://makamin.com.sa/images/projects-hero-sunset.jpg",
    canonicalUrl: "https://makamin.com.sa/projects"
  },
  "/certifications": {
    title: "شهادات مكامين السعودية القابضة - آيزو 9001:2015 وتوف نورد | Quality Certifications",
    description: "شهادات الجودة والسلامة لشركة مكامن: آيزو 9001:2015، آيزو 14001:2015، آيزو 45001:2018، شهادة توف نورد TÜV NORD، السجل التجاري، شهادات أرامكو المعتمدة، سجل سلامة 1980 يوم صفر حوادث.",
    keywords: baseSEO.keywords + "، شهادات الجودة، ISO Certifications، آيزو 9001، TÜV NORD، Quality Certifications، سجل السلامة",
    ogImage: "https://makamin.com.sa/images/certifications-hero-industrial.jpg",
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
  },
  "/group": {
    title: "مجموعة مكامن السعودية - الهيكل المؤسسي | Group Overview",
    description: "نظرة عامة على هيكل مجموعة مكامن المؤسسية: مكامن القابضة، خدمات مكامن البترولية، زينكوس الدولية، ومكامن أوفشور السعودية — مجموعة متكاملة في خدمات النفط والغاز.",
    keywords: baseSEO.keywords + "، مجموعة مكامن، Group Overview، الهيكل المؤسسي، Corporate Structure، شركات مكامن",
    canonicalUrl: "https://makamin.com.sa/group"
  },
  "/makamin-holding": {
    title: "مكامن القابضة للنفط والغاز - الشركة الأم | Makamin Holding",
    description: "مكامن السعودية القابضة لخدمات النفط والغاز — الشركة الأم والمظلة المؤسسية لمجموعة مكامن، رأس مال مصرح 1.2 مليار ريال سعودي، التسجيلات التجارية والدور المؤسسي.",
    keywords: baseSEO.keywords + "، مكامن القابضة، Makamin Holding، الشركة الأم، Parent Company، التسجيل التجاري",
    canonicalUrl: "https://makamin.com.sa/makamin-holding"
  },
  "/zencus-international": {
    title: "زينكوس الدولية المحدودة - الحلول التقنية للنفط والغاز | ZENCUS International",
    description: "زينكوس الدولية المحدودة — شركة تقنية تابعة لمجموعة مكامن متخصصة في الاستحواذ اللاسلكي للبيانات، المراقبة الآنية، والأجهزة الميدانية لعمليات النفط والغاز.",
    keywords: baseSEO.keywords + "، زينكوس الدولية، ZENCUS International، مراقبة الآبار، Well Monitoring، البيانات اللاسلكية، Wireless Data Acquisition",
    canonicalUrl: "https://makamin.com.sa/zencus-international"
  },
  "/projects/aramco": {
    title: "مشاريع مكامن مع أرامكو السعودية - محفظة مشاريع شاملة | Aramco Projects",
    description: "محفظة مشاريع مكامن مع أرامكو السعودية: خطوط الأنابيب، الحفر، الفحص غير المدمر، والخدمات الجيوعلمية — سجل إنجازات تقني في قطاع النفط والغاز السعودي.",
    keywords: baseSEO.keywords + "، مشاريع أرامكو، Aramco Projects، خطوط الأنابيب، الحفر، الفحص غير المدمر، NDT",
    canonicalUrl: "https://makamin.com.sa/projects/aramco"
  },
  "/projects/pipeline": {
    title: "مشاريع خطوط الأنابيب - مكامن السعودية القابضة | Pipeline Projects",
    description: "محفظة مشاريع خطوط الأنابيب لمكامن: ربط الخطوط، الاستبدال، تركيبات RTR، حقن المياه، ومشاريع إعادة التأهيل في قطاع النفط والغاز السعودي.",
    keywords: baseSEO.keywords + "، مشاريع خطوط الأنابيب، Pipeline Projects، ربط الخطوط، RTR، إعادة التأهيل",
    canonicalUrl: "https://makamin.com.sa/projects/pipeline"
  },
  "/projects/offshore": {
    title: "مشاريع مكامن أوفشور السعودية - العمليات البحرية | Offshore Projects Portfolio",
    description: "محفظة مشاريع مكامن أوفشور السعودية (MOS): تأجير السفن، دوريات الأمن البحري، الإشارات الملاحية، وخدمات المناوبة البحرية لأرامكو السعودية.",
    keywords: baseSEO.keywords + "، مشاريع أوفشور، Offshore Projects، MOS، مكامن أوفشور، تأجير السفن، Vessel Charter",
    canonicalUrl: "https://makamin.com.sa/projects/offshore"
  },
  "/projects/fleet": {
    title: "الأسطول البحري وأصول مكامن أوفشور السعودية | Marine Fleet & Assets",
    description: "سجل الأسطول البحري والأصول البحرية لمكامن أوفشور السعودية (MOS): سفن دعم المنصات، زوارق الدورية الأمنية، والسفن البحرية المتخصصة.",
    keywords: baseSEO.keywords + "، الأسطول البحري، Marine Fleet، أصول مكامن، MOS، سفن الدعم، Platform Support Vessels",
    canonicalUrl: "https://makamin.com.sa/projects/fleet"
  },
  "/projects/zencus": {
    title: "مشاريع زينكوس - المراقبة التقنية للنفط والغاز | ZENCUS Projects",
    description: "مشاريع زينكوس الدولية التقنية: مراقبة الآبار اللاسلكية، المراقبة عن بُعد، أنظمة SCADA، وحلول إنترنت الأشياء الميدانية في قطاع النفط والغاز.",
    keywords: baseSEO.keywords + "، مشاريع زينكوس، ZENCUS Projects، مراقبة الآبار، SCADA، إنترنت الأشياء الميدانية، IoT",
    canonicalUrl: "https://makamin.com.sa/projects/zencus"
  },
  "/services/pipeline-industrial": {
    title: "خدمات خطوط الأنابيب والصناعة - مكامن السعودية | Pipeline & Industrial Services",
    description: "خدمات خطوط الأنابيب والصيانة الصناعية من مكامن: إنشاء الخطوط، الصيانة الصناعية، الحماية الكاثودية، وأنظمة PDHMS لبنية تحتية النفط والغاز.",
    keywords: baseSEO.keywords + "، خطوط الأنابيب، Pipeline Services، الصيانة الصناعية، الحماية الكاثودية، Cathodic Protection، PDHMS",
    canonicalUrl: "https://makamin.com.sa/services/pipeline-industrial"
  },
  "/services/drilling": {
    title: "خدمات الحفر - مكامن السعودية القابضة | Drilling Services",
    description: "خدمات الحفر التخصصية من مكامن: الحفر العكسي، الحفر الآلي، حفر الأوتاد، VSP، والرصد الزلزالي الدقيق لقطاع النفط والغاز.",
    keywords: baseSEO.keywords + "، خدمات الحفر، Drilling Services، الحفر العكسي، Reverse Circulation، VSP، Micro Seismic",
    canonicalUrl: "https://makamin.com.sa/services/drilling"
  },
  "/services/geoscience": {
    title: "خدمات الجيوعلوم - مكامن السعودية القابضة | Geoscience Services",
    description: "خدمات الجيوعلوم من مكامن: الدراسات الجيولوجية والجيوفيزيائية والبتروفيزيائية، تحليل الأنوية، الخدمات الرقمية للبيانات، والرصد الزلزالي الرباعي الأبعاد.",
    keywords: baseSEO.keywords + "، الجيوعلوم، Geoscience، الجيوفيزياء، Geophysics، البتروفيزياء، Petrophysics، 4D Seismic",
    canonicalUrl: "https://makamin.com.sa/services/geoscience"
  },
  "/services/industrial-inspection": {
    title: "خدمات الفحص الصناعي - مكامن السعودية | Industrial Inspection & NDT",
    description: "خدمات الفحص الصناعي غير المدمر من مكامن: PAUT، TOFD، PMI، رصد التآكل، وفحص قاع الخزانات لضمان سلامة البنية التحتية البترولية.",
    keywords: baseSEO.keywords + "، الفحص غير المدمر، NDT، PAUT، TOFD، PMI، فحص الخزانات، Tank Inspection، رصد التآكل",
    canonicalUrl: "https://makamin.com.sa/services/industrial-inspection"
  },
  "/services/zencus": {
    title: "خدمات زينكوس التقنية - المراقبة الآنية والبيانات الميدانية | ZENCUS Technology",
    description: "خدمات زينكوس التقنية من مكامن: المراقبة الميدانية الآنية، الاستحواذ اللاسلكي للبيانات، أجهزة الإرسال الأحادية، ZDV Studio، ومراقبة CCTV.",
    keywords: baseSEO.keywords + "، زينكوس، ZENCUS، المراقبة الآنية، Real-Time Monitoring، البيانات اللاسلكية، ZDV Studio، CCTV",
    canonicalUrl: "https://makamin.com.sa/services/zencus"
  },
  "/services/offshore": {
    title: "خدمات مكامن أوفشور السعودية - الغوص والهندسة البحرية | Offshore Services",
    description: "خدمات مكامن أوفشور السعودية (MOS): العمليات البحرية، الغوص والخدمات تحت الماء، الهندسة البحرية، ودعم الأسطول البحري لعمليات النفط والغاز.",
    keywords: baseSEO.keywords + "، خدمات أوفشور، Offshore Services، MOS، الغوص، Diving، الخدمات تحت الماء، Subsea، الأسطول البحري",
    canonicalUrl: "https://makamin.com.sa/services/offshore"
  },
  "/services/supply-chain": {
    title: "خدمات سلسلة التوريد - مكامن السعودية القابضة | Supply Chain Services",
    description: "خدمات سلسلة التوريد من مكامن: إدارة الموردين، المشتريات، شهادات اختبار المواد، التسريع، اختبارات القبول في المصنع، ومراقبة الجودة.",
    keywords: baseSEO.keywords + "، سلسلة التوريد، Supply Chain، المشتريات، Procurement، إدارة الموردين، Vendor Management، مراقبة الجودة",
    canonicalUrl: "https://makamin.com.sa/services/supply-chain"
  },
  "/services/technical-staffing": {
    title: "خدمات التوظيف التقني - مكامن السعودية القابضة | Technical Staffing",
    description: "خدمات التوظيف التقني من مكامن: التوظيف الدائم والمؤقت، إدارة الرواتب، تجهيز التأشيرات، والقوى العاملة المتخصصة للقطاع البتروكيماوي والنفط والغاز.",
    keywords: baseSEO.keywords + "، التوظيف التقني، Technical Staffing، توظيف الكوادر، القوى العاملة، Workforce، البتروكيماويات، Petrochemical",
    canonicalUrl: "https://makamin.com.sa/services/technical-staffing"
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