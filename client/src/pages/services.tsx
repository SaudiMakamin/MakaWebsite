import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Drill, Globe, Ship, Building, Anchor, Navigation, Factory, ArrowRight, ChevronRight } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import AuthenticPartners from '@/components/authentic-partners';
import heroCarouselPath from '@assets/hero-carousel-1_1752529906169.jpg';
import drillingRigPath from '@assets/IMG-20250710-WA0011_1752529906170.jpg';
import processingFacilityPath from '@assets/IMG-20250710-WA0012_1752529906171.jpg';
import offshorePlatformPath from '@assets/IMG-20250710-WA0013_1752529906171.jpg';
import marineOperationsPath from '@assets/IMG-20250710-WA0019_1752529906172.jpg';
import inspectionOperationsPath from '@assets/IMG-20250710-WA0020_1752529906172.jpg';
import makaminLogoPath from '@assets/logo mkamin_1752524503536.png';
import makaminFlagsPath from '@assets/hero-carousel-3_1752933941946.jpg';
import HeroLogo from '@/components/hero-logo';

// CSS styles for amazing glow effect
const glowStyles = `
  @keyframes amazingGlow {
    0% { 
      box-shadow: 0 0 5px #fbbf24, 0 0 10px #fbbf24, 0 0 15px #fbbf24, 0 0 20px #f59e0b; 
      transform: scale(1);
    }
    50% { 
      box-shadow: 0 0 15px #fbbf24, 0 0 30px #fbbf24, 0 0 45px #fbbf24, 0 0 60px #f59e0b; 
      transform: scale(1.05);
    }
    100% { 
      box-shadow: 0 0 5px #fbbf24, 0 0 10px #fbbf24, 0 0 15px #fbbf24, 0 0 20px #f59e0b; 
      transform: scale(1);
    }
  }
  
  @keyframes textFlash {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.7; }
  }
  
  .ministry-decision-button {
    animation: amazingGlow 3s ease-in-out infinite, pulse 2s infinite;
  }
  
  .ministry-decision-button:hover {
    animation: amazingGlow 1.5s ease-in-out infinite, pulse 1s infinite;
    transform: scale(1.1) !important;
  }
`;

export default function Services() {
  const { t } = useLanguageContext();

  const subsidiaries = [
    {
      icon: Drill,
      title: "Makamin Petroleum Services",
      titleAr: "مكامن للخدمات البترولية",
      brandColor: "from-orange-500 to-red-600",
      image: drillingRigPath,
      services: [
        "Drilling & Cementing Services",
        "Well Intervention & Workover", 
        "Coiled Tubing Operations",
        "Production Testing & Optimization"
      ],
      servicesAr: [
        "خدمات الحفر والإسمنت",
        "التدخل في الآبار وإعادة العمل",
        "عمليات الأنابيب الملفوفة",
        "اختبار الإنتاج والتحسين"
      ],
      description: "Leading provider of comprehensive petroleum services for Saudi Aramco and major operators",
      descriptionAr: "مزود رائد للخدمات البترولية الشاملة لأرامكو السعودية والمشغلين الرئيسيين",
      companyDetails: {
        registrationNumber: "2050048513",
        location: "Dammam (Branch)",
        manager: "Majed Abdullah Haza'a Al-Shanbari",
        managerAr: "ماجد عبدالله هزاع الشنبري",
        position: "Branch Manager and CEO",
        positionAr: "مدير الفرع والمدير التنفيذي",
        appointmentDate: "March 29, 2017 – Present",
        appointmentDateAr: "29 مارس 2017 - حتى الآن"
      }
    },
    {
      icon: Globe,
      title: "Makamin Bahrain",
      titleAr: "مكامن البحرين",
      brandColor: "from-blue-500 to-cyan-600",
      image: heroCarouselPath,
      services: [
        "Regional Investment Hub",
        "International Joint Ventures",
        "Cross-border Project Management",
        "Strategic Partnerships Development"
      ],
      servicesAr: [
        "مركز الاستثمار الإقليمي",
        "المشاريع المشتركة الدولية",
        "إدارة المشاريع عبر الحدود",
        "تطوير الشراكات الاستراتيجية"
      ],
      description: "Regional headquarters for international operations and strategic investments",
      descriptionAr: "المقر الإقليمي للعمليات الدولية والاستثمارات الاستراتيجية",
      companyDetails: {
        registrationNumber: "129063-1",
        fullName: "MAKAMIN OFFSHORE SAUDI MARINE – Foreign Branch",
        fullNameAr: "شركة مكامن أوف شور السعودية المحدودة للملاحة (فرع شركة)",
        registrationCountry: "Kingdom of Bahrain",
        registrationCountryAr: "مملكة البحرين",
        companyType: "Branch of a Foreign Company",
        companyTypeAr: "فرع شركة أجنبية",
        nationality: "Saudi",
        nationalityAr: "سعودي",
        legalStatus: "Active",
        legalStatusAr: "نشط",
        registrationDate: "March 5, 2019",
        registrationDateAr: "5 مارس 2019",
        duration: "Unlimited",
        durationAr: "غير محدود",
        licenseExpiry: "March 5, 2020",
        licenseExpiryAr: "5 مارس 2020",
        registeredThrough: "Al-Nabhan Corporate Services for Businessmen & Investors",
        registeredThroughAr: "النبهان للخدمات المؤسسية لرجال الأعمال والمستثمرين",
        contactNumbers: ["(+973) 3888 8682", "(+973) 3302 6446"],
        bankDetails: {
          bank: "BCCI – Bank of Credit and Commerce International",
          bankAr: "بنك الائتمان والتجارة الدولي",
          issued: "March 6, 2019",
          issuedAr: "6 مارس 2019",
          expiry: "March 6, 2020",
          expiryAr: "6 مارس 2020"
        },
        address: {
          company: "Al-Nabhan Consulting W.L.L",
          companyAr: "النبهان للاستشارات ش.م.م",
          office: "2012",
          building: "1435",
          street: "4626",
          block: "346",
          area: "Seafront, Manama – Kingdom of Bahrain",
          areaAr: "الواجهة البحرية، المنامة - مملكة البحرين",
          email: "leored786@gmail.com",
          phone: "(+973) 3888 8682"
        },
        businessActivity: {
          isicCode: "6202",
          description: "Computer consultancy and IT facility management services",
          descriptionAr: "خدمات الاستشارات الحاسوبية وإدارة مرافق تكنولوجيا المعلومات"
        },
        authorizedSignatories: [
          {
            name: "Ahmad bin Saleh bin Mohammed Al-Faleh",
            nameAr: "أحمد بن صالح بن محمد الفالح",
            nationality: "Saudi",
            nationalityAr: "سعودي",
            position: "Director",
            positionAr: "مدير",
            authority: "Authorized individually",
            authorityAr: "مخول بصورة فردية"
          },
          {
            name: "Ali Abdullah bin Mohammed Asiri",
            nameAr: "علي عبدالله بن محمد عسيري",
            nationality: "Saudi",
            nationalityAr: "سعودي",
            position: "Director",
            positionAr: "مدير",
            authority: "Authorized individually",
            authorityAr: "مخول بصورة فردية"
          }
        ],
        boardOfDirectors: [
          {
            name: "Ahmad Saleh Mohammed Al-Faleh",
            nameAr: "أحمد صالح محمد الفالح",
            nationality: "Saudi",
            nationalityAr: "سعودي",
            position: "Director",
            positionAr: "مدير",
            authority: "Individually authorized",
            authorityAr: "مخول بصورة فردية"
          },
          {
            name: "Ali Abdullah Asiri",
            nameAr: "علي عبدالله عسيري",
            nationality: "Saudi",
            nationalityAr: "سعودي",
            position: "Director",
            positionAr: "مدير",
            authority: "Individually authorized",
            authorityAr: "مخول بصورة فردية"
          }
        ]
      }
    },
    {
      icon: Ship,
      title: "Makamin Offshore Saudi Ltd (MOS)",
      titleAr: "مكامن أوف شور السعودية المحدودة",
      brandColor: "from-slate-800 to-blue-900",
      image: offshorePlatformPath,
      services: [
        "Marine Construction & Installation",
        "Subsea Inspection, Repair & Maintenance",
        "AHTS & PSV Vessel Operations",
        "Emergency Response & Rescue"
      ],
      servicesAr: [
        "الإنشاء والتركيب البحري",
        "التفتيش والإصلاح والصيانة تحت الماء",
        "عمليات السفن المتخصصة",
        "الاستجابة للطوارئ والإنقاذ"
      ],
      description: "Specialized offshore operations with Aramco-qualified marine fleet and subsea capabilities",
      descriptionAr: "العمليات البحرية المتخصصة مع أسطول بحري مؤهل من أرامكو وقدرات تحت الماء",
      companyDetails: {
        registrationNumber: "2050077238",
        companyType: "Mixed Limited Liability Company",
        companyTypeAr: "شركة ذات مسؤولية محدودة مختلطة",
        incorporationDate: "July 20, 2011",
        incorporationDateAr: "20 يوليو 2011",
        location: "Al-Dammam Branch Office, Abdullah Fouad District",
        locationAr: "مكتب فرع الدمام، حي عبدالله فؤاد",
        phone: "+966 13 8821800",
        fax: "+966 13 8010325",
        poBox: "P.O. Box: 2720, Postal Code: 31461",
        shareholders: ["Makamin Petroleum Services Co. (Saudi Arabia)", "Offshore Works Global (Malaysia)"],
        shareholersAr: ["مكامن للخدمات البترولية (السعودية)", "أوف شور وركس العالمية (ماليزيا)"],
        managers: [
          {
            name: "Ali Abdullah Mohammed Buraidi Asiri",
            nameAr: "علي عبدالله محمد بريدي عسيري",
            position: "General Manager",
            positionAr: "مدير عام",
            nationality: "Saudi",
            nationalityAr: "سعودي"
          },
          {
            name: "Ahmed Saleh Mohammed Al-Faleh",
            nameAr: "أحمد صالح محمد الفالح",
            position: "General Manager",
            positionAr: "مدير عام",
            nationality: "Saudi",
            nationalityAr: "سعودي"
          }
        ]
      }
    },
    {
      icon: Building,
      title: "Saudi Makamin Dammam Branch Office",
      titleAr: "مكتب فرع مكامن السعودية - الدمام",
      brandColor: "from-green-600 to-emerald-700",
      image: processingFacilityPath,
      services: [
        "Regional Operations Management",
        "Local Workforce Development",
        "Eastern Province Projects",
        "Aramco Contract Execution"
      ],
      servicesAr: [
        "إدارة العمليات الإقليمية",
        "تطوير القوى العاملة المحلية",
        "مشاريع المنطقة الشرقية",
        "تنفيذ عقود أرامكو"
      ],
      description: "Primary operational hub serving the Eastern Province with direct Aramco partnership",
      descriptionAr: "مكتب فرع إقليمي يخدم المنطقة الشرقية مع شراكة مباشرة مع أرامكو السعودية",
      companyDetails: {
        fullName: "Makamin Saudi Holding for Oil & Gas Services – Al-Khobar Branch",
        fullNameAr: "مكامن السعودية القابضة لخدمات النفط والغاز - فرع الخبر",
        registrationNumber: "2051038139",
        issuanceDate: "August 27, 2008",
        issuanceDateAr: "27 أغسطس 2008 (26/08/1429 هـ)",
        manager: "Majed Abdullah Haza'a Al-Shanbari",
        managerAr: "ماجد عبدالله هزاع الشنبري",
        position: "CEO Manager",
        positionAr: "مدير تنفيذي",
        appointmentDate: "March 29, 2017 – Present",
        appointmentDateAr: "29 مارس 2017 - حتى الآن"
      }
    }
  ];

  const serviceAreas = [
    {
      title: "Drilling Services",
      titleAr: "خدمات الحفر",
      description: "Advanced drilling technology and wellbore solutions for upstream operations",
      descriptionAr: "تقنيات الحفر المتقدمة وحلول آبار النفط لعمليات المنبع",
      image: drillingRigPath
    },
    {
      title: "Industrial Inspection Services",
      titleAr: "خدمات التفتيش الصناعي",
      description: "Quality control and safety inspections for industrial facilities",
      descriptionAr: "مراقبة الجودة وفحوصات السلامة للمنشآت الصناعية",
      image: inspectionOperationsPath
    },
    {
      title: "Geoscience Services",
      titleAr: "خدمات علوم الأرض",
      description: "Geological analysis and seismic surveys for exploration",
      descriptionAr: "التحليل الجيولوجي والمسوحات الزلزالية للاستكشاف",
      image: processingFacilityPath
    }
  ];

  const { language } = useLanguageContext();

  return (
    <div className="min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: glowStyles }} />
      <SemanticMetadata page="services" />
      <EnhancedSecurity />
      {/* Cinematic Hero Section with Makamin Flags */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 text-slate-800 py-24 overflow-hidden">
        {/* Majestic Makamin Flags Background */}
        <div className="absolute inset-0">
          <img 
            src={makaminFlagsPath} 
            alt="Makamin Corporate Flags" 
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-3000 ease-out"
          />
          {/* Premium Glass Morphism Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-50/40 to-cyan-100/60 backdrop-blur-[2px]"></div>
          
          {/* Dynamic Sky Particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.3, 0.6, 0.3], 
                  scale: [1, 1.2, 1],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}
                className="absolute w-3 h-3 bg-blue-400/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
          
          {/* Elegant Wind Flow Lines */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-3/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
          </div>
          
          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/10"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-slate-900 bg-clip-text text-transparent drop-shadow-xl"
            >
              {language === 'ar' ? 'الأقسام التجارية' : 'Business Divisions'}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-slate-700 mb-8 font-semibold drop-shadow-lg"
            >
              {language === 'ar' ? 
                'تقديم حلول متكاملة للنفط والغاز منذ عام 2008' :
                'Delivering Integrated Oil & Gas Solutions Since 2008'
              }
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 text-center shadow-2xl border border-blue-200/50 hover:bg-white/90 hover:scale-105 transition-all duration-500"
              >
                <div className="text-4xl font-bold text-blue-600 mb-3 drop-shadow-lg">5</div>
                <p className="text-slate-700 font-semibold">{language === 'ar' ? 'شركات تابعة' : 'Subsidiary Companies'}</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 text-center shadow-2xl border border-cyan-200/50 hover:bg-white/90 hover:scale-105 transition-all duration-500"
              >
                <div className="text-4xl font-bold text-cyan-600 mb-3 drop-shadow-lg">17+</div>
                <p className="text-slate-700 font-semibold">{language === 'ar' ? 'سنة خبرة' : 'Years Experience'}</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 text-center shadow-2xl border border-green-200/50 hover:bg-white/90 hover:scale-105 transition-all duration-500"
              >
                <div className="text-4xl font-bold text-green-600 mb-3 drop-shadow-lg">100%</div>
                <p className="text-slate-700 font-semibold">{language === 'ar' ? 'ملكية سعودية' : 'Saudi Ownership'}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidiary Structure */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold makamin-blue mb-12 text-center">
            {t('companyStructure')}
          </h2>
          
          {/* Enhanced Branded Company Structure Block */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900 p-12 rounded-3xl mb-12 text-center shadow-2xl border border-blue-100 dark:border-blue-800 relative overflow-hidden">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-500/5 to-blue-800/5 animate-pulse"></div>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-800"></div>
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Official Company Logo */}
              <img 
                src={makaminLogoPath} 
                alt="Saudi Makamin Logo" 
                className="w-40 h-auto mx-auto drop-shadow-lg mb-4"
              />
              
              {/* Enhanced Company Title with Visual Dominance */}
              <motion.h3 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-blue-800 dark:text-blue-200 mb-4 tracking-wide"
              >
                Saudi Makamin Holding Company
              </motion.h3>
              
              {/* Premium Description with Enhanced Typography */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center text-gray-700 dark:text-gray-300 mt-4 max-w-3xl text-lg leading-relaxed"
              >
                Since 2008, we have led the Saudi energy transformation as a fully-owned national entity, 
                powered by <span className="font-bold text-blue-600 dark:text-blue-400">SAR 1.2 billion capital</span>, pioneering strategic investments and operational leadership in oil & gas.
              </motion.p>
              
              {/* Board of Directors Leadership History */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-800 shadow-inner"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm5 2a1 1 0 000 2h4a1 1 0 000-2H8z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-3">
                    <h4 className="font-bold text-gray-800 dark:text-gray-200">Chairman of the Board (2017 – 2019):</h4>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Dr. Mohammed Al-Sulaiman</p>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3 border border-red-200 dark:border-red-800">
                    <h4 className="font-bold text-red-800 dark:text-red-200">Chairman of the Board (2020 – 2025):</h4>
                    <p className="text-red-700 dark:text-red-300 font-medium text-sm">An unlawful and non-compliant board was in place during this period.</p>
                    
                    {/* Ministry of Commerce Committee Decision Box */}
                    <div className="mt-4 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-4 shadow-2xl border border-red-300">
                      <div className="text-center mb-3">
                        <h5 className="font-bold text-white text-sm mb-2 flex items-center justify-center gap-2">
                          <svg className="w-5 h-5 text-yellow-300 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Official Ministry Committee Decision
                        </h5>
                        <p className="text-red-100 text-xs">
                          Companies Law Violations Committee Decision - Ministry of Commerce
                        </p>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-3">
                        <div className="text-yellow-300 text-xs font-bold mb-1 text-center">
                          Violation No: 835 | Decision No: 2226/1445
                        </div>
                        <div className="text-white text-xs text-center">
                          Decision Date: 06 Dhul-Qi'dah 1445H
                        </div>
                      </div>
                      
                      <a 
                        href="/attached_assets/قرار اللجنة للمخالفة رقم 835_1753202929983.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ministry-decision-button block w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-3 px-4 rounded-xl text-center transition-all duration-300 transform"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <svg className="w-5 h-5 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">View Ministry Committee Decision</span>
                        </div>
                        <div className="text-xs mt-1 font-medium">
                          Complete decision with details and penalties
                        </div>
                      </a>
                      
                      <div className="mt-3 text-center">
                        <div className="text-yellow-200 text-xs font-medium">
                          Official documentation of violations against the unlawful board
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 border border-green-200 dark:border-green-800">
                    <h4 className="font-bold text-green-800 dark:text-green-200">Current Chairman of the Board (2025 – 2029):</h4>
                    <p className="text-green-700 dark:text-green-300 font-medium text-sm">Appointed under a judicial mandate for reform and legal restoration.</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Call-to-Action Button with Premium Styling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8"
              >
                <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                  {/* Button Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full blur"></div>
                  <span className="relative z-10 flex items-center gap-2 text-lg">
                    Discover Our Legacy
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </motion.div>
            </div>
          </div>

          {/* Subsidiaries Grid - Enhanced with Authentic Data */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subsidiaries.map((subsidiary, index) => (
              <motion.div
                key={subsidiary.title}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-[1.02]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Enhanced Brand Header with Authentic Imagery */}
                <div className={`h-32 bg-gradient-to-r ${subsidiary.brandColor || 'from-blue-600 to-blue-800'} relative overflow-hidden`}>
                  {subsidiary.image && (
                    <div className="absolute inset-0 bg-black/20">
                      <img 
                        src={subsidiary.image} 
                        alt={subsidiary.title}
                        className="w-full h-full object-cover opacity-30"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-between p-6">
                    <div className="text-white">
                      <subsidiary.icon className="h-8 w-8 mb-2 opacity-80" />
                      <h3 className="text-lg font-bold">
                        {language === 'ar' ? subsidiary.titleAr : subsidiary.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  {/* Official Company Description */}
                  {subsidiary.description && (
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {language === 'ar' ? subsidiary.descriptionAr : subsidiary.description}
                    </p>
                  )}
                  
                  {/* Company Details Section */}
                  {subsidiary.companyDetails && (
                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-4 mb-4 border border-blue-200">
                      <h4 className="text-sm font-bold text-blue-800 mb-3 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2h1v-2h-1zm-2-2h1v2h-1v-2zm1-1v-1h-1v1h1zm-4-1v1h1V9h-1z" clipRule="evenodd" />
                        </svg>
                        {language === 'ar' ? 'تفاصيل الشركة' : 'Company Details'}
                      </h4>
                      
                      <div className="space-y-2 text-xs">
                        {/* Registration Number */}
                        {subsidiary.companyDetails.registrationNumber && (
                          <div className="flex justify-between items-center bg-white/60 rounded-lg p-2">
                            <span className="font-medium text-gray-600">
                              {language === 'ar' ? 'السجل التجاري:' : 'CR Number:'}
                            </span>
                            <span className="font-bold text-blue-700">{subsidiary.companyDetails.registrationNumber}</span>
                          </div>
                        )}
                        
                        {/* Manager Information */}
                        {subsidiary.companyDetails.manager && (
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                            <div className="text-center">
                              <p className="font-bold text-green-800 text-sm">
                                {language === 'ar' ? subsidiary.companyDetails.managerAr : subsidiary.companyDetails.manager}
                              </p>
                              <p className="text-green-600 text-xs">
                                {language === 'ar' ? subsidiary.companyDetails.positionAr : subsidiary.companyDetails.position}
                              </p>
                              {subsidiary.companyDetails.appointmentDate && (
                                <p className="text-green-500 text-xs font-medium mt-1">
                                  {language === 'ar' ? subsidiary.companyDetails.appointmentDateAr : subsidiary.companyDetails.appointmentDate}
                                </p>
                              )}
                            </div>
                          </div>
                        )}
                        
                        {/* Multiple Managers for MOS */}
                        {subsidiary.companyDetails.managers && (
                          <div className="space-y-2">
                            <p className="text-xs font-semibold text-gray-700">
                              {language === 'ar' ? 'المدراء العموميون:' : 'General Managers:'}
                            </p>
                            {subsidiary.companyDetails.managers.map((manager, managerIndex) => (
                              <div key={managerIndex} className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-2 border border-teal-200">
                                <p className="font-bold text-teal-800 text-xs">
                                  {language === 'ar' ? manager.nameAr : manager.name}
                                </p>
                                <div className="flex justify-between items-center mt-1">
                                  <span className="text-teal-600 text-xs">
                                    {language === 'ar' ? manager.positionAr : manager.position}
                                  </span>
                                  <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                                    🇸🇦 {language === 'ar' ? manager.nationalityAr : manager.nationality}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {/* Additional Details for MOS */}
                        {subsidiary.companyDetails.phone && (
                          <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="bg-white/60 rounded p-2">
                              <span className="font-medium">📞</span> {subsidiary.companyDetails.phone}
                            </div>
                            <div className="bg-white/60 rounded p-2">
                              <span className="font-medium">📠</span> {subsidiary.companyDetails.fax}
                            </div>
                          </div>
                        )}
                        
                        {/* Company Type */}
                        {subsidiary.companyDetails.companyType && (
                          <div className="bg-yellow-50 rounded-lg p-2 border border-yellow-200">
                            <p className="text-xs text-yellow-800">
                              <span className="font-medium">
                                {language === 'ar' ? 'نوع الشركة: ' : 'Type: '}
                              </span>
                              {language === 'ar' ? subsidiary.companyDetails.companyTypeAr : subsidiary.companyDetails.companyType}
                            </p>
                          </div>
                        )}
                        
                        {/* Full Name for Dammam Branch Office */}
                        {subsidiary.companyDetails.fullName && (
                          <div className="bg-purple-50 rounded-lg p-2 border border-purple-200">
                            <p className="text-xs text-purple-800 font-medium text-center">
                              {language === 'ar' ? subsidiary.companyDetails.fullNameAr : subsidiary.companyDetails.fullName}
                            </p>
                          </div>
                        )}
                        
                        {/* Bahrain Branch Specific Information */}
                        {subsidiary.companyDetails.registrationCountry && (
                          <div className="space-y-2">
                            {/* Country and Legal Status */}
                            <div className="grid grid-cols-2 gap-2">
                              <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                                <p className="text-xs font-medium text-blue-800">
                                  🏛️ {language === 'ar' ? subsidiary.companyDetails.registrationCountryAr : subsidiary.companyDetails.registrationCountry}
                                </p>
                              </div>
                              <div className="bg-green-50 rounded-lg p-2 border border-green-200">
                                <p className="text-xs font-medium text-green-800">
                                  ✅ {language === 'ar' ? subsidiary.companyDetails.legalStatusAr : subsidiary.companyDetails.legalStatus}
                                </p>
                              </div>
                            </div>
                            
                            {/* Registration Date and Duration */}
                            <div className="bg-amber-50 rounded-lg p-2 border border-amber-200">
                              <div className="grid grid-cols-2 gap-2 text-xs">
                                <div>
                                  <span className="font-medium text-amber-800">
                                    {language === 'ar' ? 'تاريخ التسجيل:' : 'Registered:'}
                                  </span>
                                  <p className="text-amber-700">{language === 'ar' ? subsidiary.companyDetails.registrationDateAr : subsidiary.companyDetails.registrationDate}</p>
                                </div>
                                <div>
                                  <span className="font-medium text-amber-800">
                                    {language === 'ar' ? 'المدة:' : 'Duration:'}
                                  </span>
                                  <p className="text-amber-700">{language === 'ar' ? subsidiary.companyDetails.durationAr : subsidiary.companyDetails.duration}</p>
                                </div>
                              </div>
                            </div>
                            
                            {/* Bank Details */}
                            {subsidiary.companyDetails.bankDetails && (
                              <div className="bg-slate-50 rounded-lg p-2 border border-slate-200">
                                <p className="text-xs font-medium text-slate-800 mb-1">
                                  🏦 {language === 'ar' ? subsidiary.companyDetails.bankDetails.bankAr : subsidiary.companyDetails.bankDetails.bank}
                                </p>
                                <div className="grid grid-cols-2 gap-1 text-xs text-slate-600">
                                  <span>{language === 'ar' ? 'إصدار:' : 'Issued:'} {language === 'ar' ? subsidiary.companyDetails.bankDetails.issuedAr : subsidiary.companyDetails.bankDetails.issued}</span>
                                  <span>{language === 'ar' ? 'انتهاء:' : 'Expiry:'} {language === 'ar' ? subsidiary.companyDetails.bankDetails.expiryAr : subsidiary.companyDetails.bankDetails.expiry}</span>
                                </div>
                              </div>
                            )}
                            
                            {/* Address Information */}
                            {subsidiary.companyDetails.address && (
                              <div className="bg-cyan-50 rounded-lg p-3 border border-cyan-200">
                                <p className="text-xs font-bold text-cyan-800 mb-2">
                                  📍 {language === 'ar' ? 'العنوان المسجل' : 'Registered Address'}
                                </p>
                                <div className="space-y-1 text-xs text-cyan-700">
                                  <p className="font-medium">{language === 'ar' ? subsidiary.companyDetails.address.companyAr : subsidiary.companyDetails.address.company}</p>
                                  <div className="grid grid-cols-2 gap-1">
                                    <span>Office: {subsidiary.companyDetails.address.office}</span>
                                    <span>Building: {subsidiary.companyDetails.address.building}</span>
                                    <span>Street: {subsidiary.companyDetails.address.street}</span>
                                    <span>Block: {subsidiary.companyDetails.address.block}</span>
                                  </div>
                                  <p className="font-medium">{language === 'ar' ? subsidiary.companyDetails.address.areaAr : subsidiary.companyDetails.address.area}</p>
                                  <div className="flex justify-between items-center">
                                    <span>📧 {subsidiary.companyDetails.address.email}</span>
                                    <span>📞 {subsidiary.companyDetails.address.phone}</span>
                                  </div>
                                </div>
                              </div>
                            )}
                            
                            {/* Business Activity */}
                            {subsidiary.companyDetails.businessActivity && (
                              <div className="bg-indigo-50 rounded-lg p-2 border border-indigo-200">
                                <p className="text-xs font-medium text-indigo-800">
                                  💼 ISIC: {subsidiary.companyDetails.businessActivity.isicCode}
                                </p>
                                <p className="text-xs text-indigo-700 mt-1">
                                  {language === 'ar' ? subsidiary.companyDetails.businessActivity.descriptionAr : subsidiary.companyDetails.businessActivity.description}
                                </p>
                              </div>
                            )}
                            
                            {/* Authorized Signatories */}
                            {subsidiary.companyDetails.authorizedSignatories && (
                              <div className="space-y-2">
                                <p className="text-xs font-bold text-gray-700">
                                  ✍️ {language === 'ar' ? 'المخولون بالتوقيع:' : 'Authorized Signatories:'}
                                </p>
                                {subsidiary.companyDetails.authorizedSignatories.map((signatory, sigIndex) => (
                                  <div key={sigIndex} className="bg-rose-50 rounded-lg p-2 border border-rose-200">
                                    <p className="font-bold text-rose-800 text-xs">
                                      {language === 'ar' ? signatory.nameAr : signatory.name}
                                    </p>
                                    <div className="flex justify-between items-center mt-1">
                                      <span className="text-rose-600 text-xs">
                                        {language === 'ar' ? signatory.positionAr : signatory.position}
                                      </span>
                                      <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                                        🇸🇦 {language === 'ar' ? signatory.nationalityAr : signatory.nationality}
                                      </span>
                                    </div>
                                    <p className="text-rose-500 text-xs mt-1">
                                      {language === 'ar' ? signatory.authorityAr : signatory.authority}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {/* Contact Numbers */}
                            {subsidiary.companyDetails.contactNumbers && (
                              <div className="bg-emerald-50 rounded-lg p-2 border border-emerald-200">
                                <p className="text-xs font-medium text-emerald-800 mb-1">
                                  📞 {language === 'ar' ? 'أرقام التواصل:' : 'Contact Numbers:'}
                                </p>
                                <div className="space-y-1">
                                  {subsidiary.companyDetails.contactNumbers.map((number, numIndex) => (
                                    <span key={numIndex} className="inline-block bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs mr-1">
                                      {number}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {/* Registered Through */}
                            {subsidiary.companyDetails.registeredThrough && (
                              <div className="bg-violet-50 rounded-lg p-2 border border-violet-200">
                                <p className="text-xs font-medium text-violet-800">
                                  🏢 {language === 'ar' ? 'مسجل من خلال:' : 'Registered through:'}
                                </p>
                                <p className="text-xs text-violet-700">
                                  {language === 'ar' ? subsidiary.companyDetails.registeredThroughAr : subsidiary.companyDetails.registeredThrough}
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* Authentic Services List */}
                  <ul className="space-y-2">
                    {(language === 'ar' ? subsidiary.servicesAr : subsidiary.services).map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center space-x-2">
                        <ChevronRight className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold makamin-blue mb-12 text-center">
            Service Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="shadow-lg">
                <CardContent className="p-6">
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold makamin-blue mb-2">
                    {language === 'ar' ? area.titleAr || area.title : area.title}
                  </h3>
                  <p className="text-sm text-makamin-gray">
                    {language === 'ar' ? area.descriptionAr : area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* الشعار موجود في Header - بدون تكرار */}

      {/* Authentic Strategic Partners Section */}
      <AuthenticPartners />
    </div>
  );
}
