import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HeroLogo from '@/components/hero-logo';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import { Ship, Anchor, Navigation, Waves, ArrowRight, CheckCircle, MapPin, Eye, Wrench, Zap, Users } from 'lucide-react';
import offshorePlatformPath from '@assets/IMG-20250710-WA0013_1752529906171.jpg';
import marineOperationsPath from '@assets/IMG-20250710-WA0019_1752529906172.jpg';
import inspectionOperationsPath from '@assets/IMG-20250710-WA0020_1752529906172.jpg';
import newOffshoreVesselPath from '@assets/صورة3_1752875088907.jpg';
import vessel1Path from '@assets/صورة1_1752532266187.png';
import vessel2Path from '@assets/صورة2_1752532266188.jpg';
import vessel3Path from '@assets/صورة3_1752532266188.jpg';
import vessel4Path from '@assets/صورة4_1752532266189.png';
import vessel5Path from '@assets/صورة5_1752532266189.jpg';
import vessel6Path from '@assets/صورة6_1752532266190.jpg';

export default function OffshoreOperations() {
  const { t, language } = useLanguageContext();

  const services = [
    {
      icon: Ship,
      title: "Marine Chartering",
      titleAr: "تأجير السفن البحرية",
      description: "AHTS, PSV, MSV vessel chartering with Aramco qualification",
      descriptionAr: "تأجير السفن المتخصصة مع مؤهلات أرامكو",
      features: ["AHTS vessels", "Platform Supply Vessels", "Multi Support Vessels", "DP2 operations"]
    },
    {
      icon: Eye,
      title: "Subsea IRM",
      titleAr: "التفتيش والإصلاح والصيانة تحت الماء",
      description: "Inspection, Repair & Maintenance with ROV and saturation diving",
      descriptionAr: "التفتيش والإصلاح والصيانة بالروبوتات والغوص المشبع",
      features: ["ROV operations", "Saturation diving", "Pipeline inspection", "Subsea welding"]
    },
    {
      icon: Wrench,
      title: "Marine Construction",
      titleAr: "الإنشاءات البحرية",
      description: "Offshore construction and installation services",
      descriptionAr: "خدمات الإنشاء والتركيب البحري",
      features: ["Platform installation", "Pipeline laying", "Subsea installation", "Heavy lifting"]
    },
    {
      icon: Zap,
      title: "Emergency Response",
      titleAr: "الاستجابة للطوارئ",
      description: "24/7 emergency response and rescue operations",
      descriptionAr: "الاستجابة للطوارئ والإنقاذ على مدار الساعة",
      features: ["Search & rescue", "Fire fighting", "Oil spill response", "Medical evacuation"]
    }
  ];

  const fleet = [
    {
      name: "MOS Explorer",
      type: "Supply Vessel",
      typeAr: "سفينة الإمداد",
      capacity: "1,200 DWT",
      status: "Active",
      statusAr: "نشط"
    },
    {
      name: "Makamin Navigator",
      type: "Crew Transport",
      typeAr: "نقل الأطقم",
      capacity: "150 PAX",
      status: "Active",
      statusAr: "نشط"
    },
    {
      name: "Saudi Pioneer",
      type: "Platform Support",
      typeAr: "دعم المنصات",
      capacity: "800 DWT",
      status: "Maintenance",
      statusAr: "صيانة"
    }
  ];

  const projects = [
    {
      title: "Aramco Offshore Platform Support",
      titleAr: "دعم منصة أرامكو البحرية",
      location: "Arabian Gulf",
      locationAr: "الخليج العربي",
      duration: "24 months",
      durationAr: "24 شهر",
      value: "SAR 200M"
    },
    {
      title: "Marine Logistics Operations",
      titleAr: "عمليات الخدمات اللوجستية البحرية",
      location: "Red Sea",
      locationAr: "البحر الأحمر",
      duration: "18 months",
      durationAr: "18 شهر",
      value: "SAR 150M"
    }
  ];

  const stats = [
    { value: "25+", label: "Vessels Fleet", labelAr: "أسطول السفن" },
    { value: "100%", label: "Safety Record", labelAr: "سجل السلامة" },
    { value: "50+", label: "Projects", labelAr: "مشروع" },
    { value: "24/7", label: "Operations", labelAr: "العمليات" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SemanticMetadata page="services" />
      <EnhancedSecurity />
      {/* Hero Section with MOS Branding */}
      <section className="relative bg-gradient-to-r from-slate-800 via-blue-900 to-teal-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/attached_assets/11161352_953852821322289_8249391606641374041_n_1752883661766.jpg" 
            alt="POSH Endeavour Marine Vessel - Executive Officer" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <HeroLogo size="lg" />
            <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
              <div className="lg:w-2/3 mb-8 lg:mb-0">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  {language === 'ar' ? 'مكامن أوف شور السعودية المحدودة' : 'Makamin Offshore Saudi Ltd'}
                </h1>
                <p className="text-2xl md:text-3xl text-white font-bold mb-4 leading-relaxed">
                  {language === 'ar' ? 
                    'مكامن السعودية — قوة بـ 1.2 مليار ريال سعودي تشكل مستقبل الطاقة من خلال الابتكار والشراكات العالمية' :
                    <><span className="whitespace-nowrap">Saudi Makamin</span> — A 1.2 Billion SAR Powerhouse Shaping the Future of Energy Through Innovation and Global Partnerships</>
                  }
                </p>
                <p className="text-xl text-cyan-200 mb-6 font-light">
                  {language === 'ar' ? 'شريك أرامكو المؤهل | الغوص | التأجير | الروبوتات | الصيانة تحت الماء' : 'Aramco-Qualified Marine Partner | Diving | Chartering | ROV | Subsea IRM'}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge className="bg-yellow-500 text-black px-4 py-2 text-lg">
                    {language === 'ar' ? 'مؤهل أرامكو' : 'Aramco Qualified'}
                  </Badge>
                  <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
                    {language === 'ar' ? 'DP2 معتمد' : 'DP2 Certified'}
                  </Badge>
                  <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">
                    {language === 'ar' ? 'غوص مشبع' : 'Saturation Diving'}
                  </Badge>
                </div>
              </div>
              <div className="lg:w-1/3">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-center">
                    {language === 'ar' ? 'إنجازاتنا' : 'Our Achievements'}
                  </h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">$400M+</div>
                      <p className="text-cyan-200">{language === 'ar' ? 'عقود محققة' : 'Contracts Awarded'}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">$1.5B</div>
                      <p className="text-cyan-200">{language === 'ar' ? 'قيد المناقصة' : 'Under Bidding'}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400">25+</div>
                      <p className="text-cyan-200">{language === 'ar' ? 'أسطول السفن' : 'Vessel Fleet'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50 border-y-2 border-teal-500/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {language === 'ar' ? 'معلومات الشركة الأساسية' : 'Company Key Information'}
              </h3>
              <p className="text-lg text-gray-600">
                {language === 'ar' ? 'مكامن أوف شور السعودية المحدودة' : 'Makamin Offshore Saudi Ltd.'}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Company Details */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-4 border border-teal-200">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">
                    {language === 'ar' ? 'السجل التجاري' : 'Commercial Registration'}
                  </h4>
                  <p className="text-lg font-bold text-teal-700">2050077238</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-1">
                    {language === 'ar' ? 'نوع الشركة' : 'Company Type'}
                  </h4>
                  <p className="text-base font-semibold text-gray-800">
                    {language === 'ar' ? 'شركة ذات مسؤولية محدودة مختلطة' : 'Mixed Limited Liability Company'}
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-1">
                    {language === 'ar' ? 'تاريخ التأسيس' : 'Date of Incorporation'}
                  </h4>
                  <p className="text-base font-bold text-green-700">
                    {language === 'ar' ? '19 شعبان 1432 هـ (20 يوليو 2011)' : 'July 20, 2011'}
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">
                    {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">📍</span> Al-Dammam Branch Office, Abdullah Fouad District, First Street</p>
                    <p><span className="font-medium">📞</span> +966 13 8821800</p>
                    <p><span className="font-medium">📠</span> +966 13 8010325</p>
                    <p><span className="font-medium">📮</span> P.O. Box: 2720, Postal Code: 31461</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">
                    {language === 'ar' ? 'المساهمون' : 'Shareholders'}
                  </h4>
                  <div className="space-y-1 text-sm">
                    <p className="font-medium text-gray-800">🇸🇦 Makamin Petroleum Services Co.</p>
                    <p className="font-medium text-gray-800">🇲🇾 Offshore Works Global (Malaysia)</p>
                  </div>
                </div>
              </div>

              {/* Directors */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="text-sm font-semibold text-gray-600 mb-3">
                    {language === 'ar' ? 'المدراء العموميون' : 'General Managers'}
                  </h4>
                  
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-lg font-bold text-teal-700 mb-1">
                        Ali Abdullah Mohammed Buraidi Asiri
                      </p>
                      <p className="text-base font-semibold text-gray-800 mb-1">
                        علي عبدالله محمد بريدي عسيري
                      </p>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">🇸🇦 Saudi</span>
                        <span className="ml-2 font-medium">General Manager</span>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-lg font-bold text-teal-700 mb-1">
                        Ahmed Saleh Mohammed Al-Faleh
                      </p>
                      <p className="text-base font-semibold text-gray-800 mb-1">
                        أحمد صالح محمد الفالح
                      </p>
                      <div className="flex items-center text-sm text-gray-600">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">🇸🇦 Saudi</span>
                        <span className="ml-2 font-medium">General Manager</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Structure & Entities Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {language === 'ar' ? 'الهيكل المؤسسي والكيانات التابعة' : 'Corporate Structure & Associated Entities'}
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {language === 'ar' ? 
                  'شبكة شاملة من الشركات التابعة والفروع الإقليمية والشراكات الاستراتيجية تدعم عملياتنا العالمية' :
                  'Comprehensive network of subsidiaries, regional branches, and strategic partnerships supporting our global operations'
                }
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 px-8 py-6">
                <h3 className="text-2xl font-bold text-white text-center">
                  {language === 'ar' ? 'سجل الكيانات المؤسسية الكامل' : 'Complete Corporate Entities Registry'}
                </h3>
                <p className="text-blue-100 text-center mt-2 font-medium">
                  All registrations are owned by the Holding Company and the Petroleum Branch of the Holding Company
                </p>
              </div>

              {/* Responsive Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200">
                        {language === 'ar' ? 'الاسم الكامل' : 'Full Entity Name'}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200">
                        {language === 'ar' ? 'رقم التسجيل' : 'Registration Number'}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200">
                        {language === 'ar' ? 'نوع الكيان' : 'Entity Type'}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200">
                        {language === 'ar' ? 'ملاحظات' : 'Notes'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* Ultimate Parent - Holding Company */}
                    <tr className="bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all duration-300">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3 shadow-lg"></div>
                          <div>
                            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                              Saudi Makamin Holding Company
                            </div>
                            <div className="text-sm text-gray-600 font-medium">مكامن السعودية القابضة</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border border-purple-200">
                          1010251168
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg">
                          👑 Ultimate Parent Company
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                        SAR 1.2 Billion Authorized Capital
                      </td>
                    </tr>

                    {/* Petroleum Services - Primary Operating Company */}
                    <tr className="bg-gradient-to-r from-emerald-50 to-green-50 hover:from-emerald-100 hover:to-green-100 transition-all duration-300">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mr-3 shadow-lg"></div>
                          <div>
                            <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                              Makamin Petroleum Services Company
                            </div>
                            <div className="text-sm text-gray-600 font-medium">شركة مكامن للخدمات البترولية</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border border-emerald-200">
                          2050048513
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg">
                          🏭 Petroleum Branch
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                        Primary operating entity owned by Holding Company
                      </td>
                    </tr>

                    {/* Offshore Operations - Branch of Petroleum */}
                    <tr className="bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 transition-all duration-300">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mr-3 shadow-md"></div>
                          <div>
                            <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                              Makamin Offshore Saudi Ltd
                            </div>
                            <div className="text-sm text-gray-600 font-medium">مكامن أوف شور السعودية المحدودة</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border border-blue-200">
                          2050077238
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-md">
                          🚢 Offshore Division
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                        Marine operations branch under Petroleum Services
                      </td>
                    </tr>

                    {/* Navigation Subsidiary */}
                    <tr className="hover:bg-gray-50 transition-all duration-300">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mr-3 shadow-sm"></div>
                          <div>
                            <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                              Makamin Offshore Saudi Navigation Company
                            </div>
                            <div className="text-sm text-gray-600 font-medium">شركة مكامن أوف شور السعودية للملاحة</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 border border-teal-200">
                          2051223939
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-sm">
                          ⚓ Navigation Services
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                        Marine navigation branch under Offshore Operations
                      </td>
                    </tr>

                    {/* Bahrain Branch */}
                    <tr className="hover:bg-gray-50 transition-all duration-300">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mr-3 shadow-sm"></div>
                          <div>
                            <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                              Makamin Bahrain Investment Branch
                            </div>
                            <div className="text-sm text-gray-600 font-medium">فرع مكامن البحرين للاستثمار</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border border-amber-200">
                          129063
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm">
                          🏛️ Regional Branch
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                        Regional operations branch under Petroleum Services
                      </td>
                    </tr>

                    {/* Malaysia Partnership */}
                    <tr className="hover:bg-gray-50 transition-all duration-300">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-3 shadow-sm"></div>
                          <div>
                            <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
                              Makamin Offshore (Malaysia) Ltd
                            </div>
                            <div className="text-sm text-gray-600 font-medium">شركة مكامن أوف شور الماليزية المحدودة</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border border-red-200">
                          MY-Partner
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-sm">
                          🤝 Strategic Partner
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                        International partnership under Petroleum Services
                      </td>
                    </tr>

                    {/* OWG Alias */}
                    <tr className="hover:bg-gray-50 transition-all duration-300">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                          <div>
                            <div className="text-lg font-bold text-gray-900">Offshoreworks Global (L) Ltd</div>
                            <div className="text-sm text-gray-600 font-medium">أوف شور ووركس العالمية (م.م) المحدودة</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-purple-100 text-purple-800">
                          OWG
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500 text-white">
                          🇲🇾 {language === 'ar' ? 'شركة أجنبية (ماليزية)' : 'Foreign Company (Malaysian)'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                        —
                      </td>
                    </tr>

                    {/* OWG Official */}
                    <tr className="bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-pink-500 rounded-full mr-3"></div>
                          <div>
                            <div className="text-lg font-bold text-gray-900">OFFSHOREWORKS GLOBAL (L) LTD</div>
                            <div className="text-sm text-gray-600 font-medium">أوف شور ووركس العالمية (الرسمية)</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-pink-100 text-pink-800">
                          LL04173
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-500 text-white">
                          🏛️ {language === 'ar' ? 'رقم التسجيل الماليزي الرسمي' : 'Official Malaysian Registration'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 font-medium">
                        {language === 'ar' ? 'مطابقة لـ OWG، مسجلة برخصة خارجية في لابوان، ماليزيا' : 'Identical to OWG, registered with external license in Labuan, Malaysia'}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-8 py-6 border-t border-gray-200">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-gray-600 font-medium">
                      {language === 'ar' ? 'جميع البيانات محدثة ومصدقة رسمياً' : 'All data is updated and officially verified'}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {language === 'ar' ? 'آخر تحديث: يناير 2025' : 'Last Updated: January 2025'}
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Network Diagram */}
            <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600">
                  Visual Corporate Network
                </span>
              </h3>
              
              <div className="flex flex-col items-center space-y-8">
                {/* Ultimate Parent - Holding Company */}
                <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl shadow-2xl text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl font-bold mb-2">Saudi Makamin Holding Company</div>
                  <div className="text-purple-200 font-medium">👑 Ultimate Parent Company</div>
                  <div className="text-sm text-purple-100 mt-1">SAR 1.2 Billion Capital</div>
                </div>

                {/* Arrow Down */}
                <div className="text-4xl text-purple-500">↓</div>

                {/* Petroleum Services - Main Operating Branch */}
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-10 py-5 rounded-xl shadow-xl text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-xl font-bold mb-2">Makamin Petroleum Services</div>
                  <div className="text-emerald-200 font-medium">🏭 Primary Operating Branch</div>
                  <div className="text-sm text-emerald-100 mt-1">Owned by Holding Company</div>
                </div>

                {/* Arrow Down */}
                <div className="text-4xl text-emerald-500">↓</div>

                {/* All Offshore & Regional Branches */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full max-w-6xl">
                  
                  {/* Offshore Operations */}
                  <div className="flex flex-col items-center">
                    <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-4 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 w-full">
                      <div className="text-lg font-bold mb-2">Makamin Offshore Saudi</div>
                      <div className="text-blue-200 font-medium">🚢 Marine Operations</div>
                      <div className="text-xs text-blue-100 mt-1">Under Petroleum Services</div>
                    </div>
                  </div>

                  {/* Navigation Services */}
                  <div className="flex flex-col items-center">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-4 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 w-full">
                      <div className="text-lg font-bold mb-2">Navigation Company</div>
                      <div className="text-teal-200 font-medium">⚓ Navigation Services</div>
                      <div className="text-xs text-teal-100 mt-1">Under Offshore Operations</div>
                    </div>
                  </div>

                  {/* Bahrain Branch */}
                  <div className="flex flex-col items-center">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-4 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 w-full">
                      <div className="text-lg font-bold mb-2">Bahrain Branch</div>
                      <div className="text-amber-200 font-medium">🏛️ Regional Branch</div>
                      <div className="text-xs text-amber-100 mt-1">Under Petroleum Services</div>
                    </div>
                  </div>

                  {/* Malaysia Partnership */}
                  <div className="flex flex-col items-center">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-4 rounded-xl shadow-lg text-center transform hover:scale-105 transition-all duration-300 w-full">
                      <div className="text-lg font-bold mb-2">Malaysia Partnership</div>
                      <div className="text-red-200 font-medium">🤝 Strategic Partner</div>
                      <div className="text-xs text-red-100 mt-1">Under Petroleum Services</div>
                    </div>
                  </div>
                </div>

                {/* Hierarchy Description */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 mt-8 border border-gray-200 w-full max-w-4xl">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Corporate Hierarchy Structure</h4>
                    <div className="text-gray-700 space-y-2">
                      <p className="font-semibold text-lg">
                        <span className="text-purple-600">Saudi Makamin Holding Company</span> → 
                        <span className="text-emerald-600 mx-2">Petroleum Services</span> → 
                        <span className="text-blue-600">All Regional Branches</span>
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        All registrations are owned by the Holding Company and operated through the Petroleum Branch
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'خدماتنا البحرية المتخصصة' : 'Our Specialized Marine Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' ? 'نقدم خدمات بحرية متكاملة للعمليات البحرية في قطاع النفط والغاز مع مؤهلات أرامكو' : 'Comprehensive Aramco-qualified marine services for offshore oil & gas operations'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-r from-slate-700 to-teal-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">
                    {language === 'ar' ? service.titleAr : service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    {language === 'ar' ? service.descriptionAr : service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 mr-2 text-teal-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Profile Section - حسب البيانات المرفقة */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {language === 'ar' ? 'ملف الشركة' : 'Company Profile'}
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {language === 'ar' ? 
                  'القطاع البحري استراتيجي ومتخصص ومربح مع أرامكو، إقليمياً وعالمياً، مما أدى إلى تأسيس مكامن أوف شور السعودية المحدودة' :
                  'The Marine sector is strategic, niche and profitable business with Aramco, regionally and internationally which led to starting Makamin Offshore Saudi Ltd.'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Card className="p-8 bg-white shadow-xl border-l-4 border-blue-500">
                <CardHeader className="pb-6">
                  <div className="flex items-center mb-4">
                    <Ship className="w-8 h-8 text-blue-500 mr-3" />
                    <CardTitle className="text-2xl text-gray-900">
                      {language === 'ar' ? 'نبذة عن الشركة' : 'Company Background'}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-gray-600 leading-relaxed">
                    {language === 'ar' ? (
                      <div className="space-y-3">
                        <p>تم تقديم حزمة التأهيل لاعتماد مكامن أوف شور كمقدم خدمات بحرية إلى أرامكو السعودية في صيف 2011.</p>
                        <p>بعد تقييم شامل وصارم لحزمة التأهيل، وجدت أرامكو أن مكامن أوف شور مؤهلة تقنياً ومالياً.</p>
                        <p>بعد اجتياز مرحلة التأهيل المسبق بنجاح، بدأت مكامن أوف شور في استقبال دعوات للمشاريع من أرامكو السعودية.</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <p>A Qualification package to approve MOS as a marine services provider was submitted to Saudi Aramco in Summer 2011.</p>
                        <p>After comprehensive and strict evaluation, Aramco found MOS technically and financially qualified.</p>
                        <p>After passing the prequalification phase successfully, MOS started receiving invitations for projects from Saudi Aramco.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-white shadow-xl border-l-4 border-teal-500">
                <CardHeader className="pb-6">
                  <div className="flex items-center mb-4">
                    <Anchor className="w-8 h-8 text-teal-500 mr-3" />
                    <CardTitle className="text-2xl text-gray-900">
                      {language === 'ar' ? 'الأسطول والقدرات' : 'Fleet & Capabilities'}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-gray-600 leading-relaxed">
                    {language === 'ar' ? (
                      <div className="space-y-3">
                        <p>أسطول أرامكو الحالي حوالي 210 سفينة ومن المتوقع أن يزيد إلى 260 خلال العامين القادمين.</p>
                        <p>المنافسة في التأجير، الغوص، وخدمات التفتيش والإصلاح والصيانة محدودة نظراً لطبيعتها التقنية.</p>
                        <p>حاجة لجيل جديد من السفن لتلبية المعايير التشغيلية المحدثة لاستبدال السفن القديمة.</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <p>Aramco's existing fleet is around 210 vessels and expected to increase to 260 during the next 2 years.</p>
                        <p>Competition in Chartering, Diving, and Subsea IRM is limited due to technical nature and challenging entry barriers.</p>
                        <p>Requirements for new generation vessels to meet updated operational standards to replace older vessels.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Market Position & Achievements */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-2xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">
                  {language === 'ar' ? 'موقعنا في السوق' : 'Market Position'}
                </h3>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  {language === 'ar' ? 
                    'بفضل القدرات التقنية وخبرة فريقنا البحري، حققت الخدمات البحرية إنجازات ملحوظة' :
                    'With technical capabilities and experience of our marine team, Marine Services has made remarkable achievements'
                  }
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">$400M+</div>
                  <p className="text-blue-100">{language === 'ar' ? 'قيمة المشاريع المحققة' : 'Projects Value Achieved'}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">12+</div>
                  <p className="text-blue-100">{language === 'ar' ? 'سفن متخصصة' : 'Specialized Vessels'}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">$1.585B</div>
                  <p className="text-blue-100">{language === 'ar' ? 'إجمالي قيمة المناقصات' : 'Total Tendering Value'}</p>
                </div>
              </div>
            </div>

            {/* Strategic Advantages */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: language === 'ar' ? 'فريق متخصص' : 'Specialized Team',
                  description: language === 'ar' ? 'فريق إدارة وتقني متخصص ومهني مع خبرة واسعة' : 'Competent, dedicated, and professional technical and management team'
                },
                {
                  icon: Eye,
                  title: language === 'ar' ? 'مراقبة السوق' : 'Market Monitoring',
                  description: language === 'ar' ? 'مراقبة اتجاهات السوق والمنافسين لضمان التميز' : 'Monitoring market and competitor trends for competitive advantage'
                },
                {
                  icon: Zap,
                  title: language === 'ar' ? 'حلول متنوعة' : 'Diverse Solutions',
                  description: language === 'ar' ? 'تقديم حلول متنوعة للعملاء تميزنا عن المنافسين' : 'Providing clients with various solutions that stand out from competitors'
                },
                {
                  icon: Ship,
                  title: language === 'ar' ? 'أسطول متطور' : 'Advanced Fleet',
                  description: language === 'ar' ? 'التحضير لمتطلبات الجيل القادم من السفن' : 'Gearing up for requirements of next generation vessels'
                },
                {
                  icon: Navigation,
                  title: language === 'ar' ? 'شبكة عالمية' : 'Global Network',
                  description: language === 'ar' ? 'الاستفادة من شبكة بحرية عالمية قوية' : 'Leveraging solid international marine network'
                },
                {
                  icon: CheckCircle,
                  title: language === 'ar' ? 'معايير عالمية' : 'Global Standards',
                  description: language === 'ar' ? 'الامتثال لأفضل الممارسات البحرية العالمية والتأمين' : 'Complying with international marine best practices and insurance standards'
                }
              ].map((advantage, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 rounded-lg">
                      <advantage.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{advantage.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Authentic MOS Fleet Gallery */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === 'ar' ? 'أسطولنا البحري الحقيقي' : 'Our Authentic Marine Fleet'}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'ar' ? 'أسطول متطور من السفن المتخصصة لخدمة القطاع البحري' : 'Advanced fleet of specialized vessels serving the offshore industry'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { image: vessel1Path, title: "AHTS Vessel", type: "Anchor Handling Tug Supply", specs: "DP2 | 120T Bollard Pull" },
              { image: vessel2Path, title: "Multi Support Vessel", type: "MSV Operations", specs: "Crane Capacity 250T" },
              { image: vessel3Path, title: "Platform Supply Vessel", type: "PSV Operations", specs: "3000 DWT | DP2" },
              { image: vessel4Path, title: "Offshore Support Vessel", type: "Construction Support", specs: "Heavy Lift Capable" },
              { image: vessel5Path, title: "Marine Construction", type: "Installation Vessel", specs: "Subsea Construction" },
              { image: vessel6Path, title: "Emergency Response", type: "Standby Vessel", specs: "Fire Fighting | SAR" }
            ].map((vessel, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors group">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={vessel.image} 
                    alt={vessel.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-yellow-500 text-black">
                        {language === 'ar' ? 'مؤهل أرامكو' : 'Aramco Qualified'}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{vessel.title}</h3>
                  <p className="text-teal-300 mb-2">{vessel.type}</p>
                  <p className="text-gray-400 text-sm">{vessel.specs}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'أسطولنا البحري' : 'Our Marine Fleet'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'أسطول حديث من السفن والمعدات البحرية' : 'Modern fleet of vessels and marine equipment'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleet.map((vessel, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{vessel.name}</h3>
                      <p className="text-gray-600">{language === 'ar' ? vessel.typeAr : vessel.type}</p>
                    </div>
                    <Badge variant={vessel.status === 'Active' ? 'default' : 'secondary'}>
                      {language === 'ar' ? vessel.statusAr : vessel.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold text-teal-600">{vessel.capacity}</div>
                    <MapPin className="w-5 h-5 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'مشاريعنا البحرية' : 'Marine Projects'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'مشاريع استراتيجية في القطاع البحري' : 'Strategic projects in marine sector'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {language === 'ar' ? project.titleAr : project.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{language === 'ar' ? 'الموقع:' : 'Location:'}</span>
                      <span className="font-medium">{language === 'ar' ? project.locationAr : project.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{language === 'ar' ? 'المدة:' : 'Duration:'}</span>
                      <span className="font-medium">{language === 'ar' ? project.durationAr : project.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{language === 'ar' ? 'القيمة:' : 'Value:'}</span>
                      <span className="font-bold text-teal-600">{project.value}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Position & Competitive Advantage */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'ميزتنا التنافسية' : 'Our Competitive Advantage'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'تفوق على المنافسين مع خدمات متقدمة وخبرة عميقة' : 'Leading the competition with advanced services and deep expertise'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: language === 'ar' ? 'مؤهلات أرامكو' : 'Aramco Qualification',
                description: language === 'ar' ? 'مؤهل رسمياً من أرامكو السعودية' : 'Officially qualified by Saudi Aramco',
                icon: CheckCircle,
                color: 'text-green-600'
              },
              {
                title: language === 'ar' ? 'تقنية DP2' : 'DP2 Technology',
                description: language === 'ar' ? 'نظام تموضع ديناميكي متقدم' : 'Advanced dynamic positioning systems',
                icon: Navigation,
                color: 'text-blue-600'
              },
              {
                title: language === 'ar' ? 'غوص مشبع' : 'Saturation Diving',
                description: language === 'ar' ? 'قدرات غوص عميق متخصصة' : 'Specialized deep diving capabilities',
                icon: Waves,
                color: 'text-teal-600'
              },
              {
                title: language === 'ar' ? 'استجابة طوارئ' : '24/7 Emergency',
                description: language === 'ar' ? 'استجابة فورية للطوارئ' : 'Immediate emergency response',
                icon: Zap,
                color: 'text-red-600'
              }
            ].map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center`}>
                    <advantage.icon className={`w-8 h-8 ${advantage.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 via-blue-900 to-teal-800 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'شريكك في الموجة القادمة من الابتكار البحري' : 'Partner With Us on the Next Wave of Marine Innovation'}
          </h2>
          <p className="text-xl text-cyan-200 mb-8 max-w-2xl mx-auto">
            {language === 'ar' ? 'انضم إلى رواد الصناعة البحرية مع مكامن أوف شور - شريك أرامكو المؤهل' : 'Join the marine industry leaders with Makamin Offshore - Your Aramco-qualified partner'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-yellow-500 hover:bg-yellow-400 text-black dark:text-black font-bold px-8 py-4 shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-yellow-400"
              asChild
            >
              <a href="/contact" className="flex items-center text-black dark:text-black no-underline">
                {language === 'ar' ? 'طلب عرض أسعار' : 'Request Quote'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-slate-800 dark:hover:text-slate-800 font-bold px-8 py-4 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#projects" className="flex items-center text-white hover:text-slate-800 dark:hover:text-slate-800 no-underline">
                <ArrowRight className="w-5 h-5 mr-2" />
                {language === 'ar' ? 'استكشف مشاريعنا' : 'Discover Our Projects'}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* الشعار موجود في Header - بدون تكرار */}
    </div>
  );
}