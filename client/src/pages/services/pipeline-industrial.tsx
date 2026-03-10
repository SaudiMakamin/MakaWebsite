import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import { Link } from 'wouter';
import { Wrench, Settings, Shield, Cog, CheckCircle, ArrowLeft, HardHat } from 'lucide-react';
import heroPath from '@assets/hero-carousel-1_1752529906169.jpg';

export default function PipelineIndustrialServices() {
  const { language } = useLanguageContext();

  const sections = [
    {
      icon: Wrench,
      title: "Scope of Services",
      titleAr: "نطاق الخدمات",
      items: [
        { en: "Oil, Gas and Water Pipeline Construction", ar: "بناء خطوط أنابيب النفط والغاز والمياه" },
        { en: "Utility & Facility Installations", ar: "تركيبات المرافق والمنشآت" },
        { en: "Well Site Preparations", ar: "تجهيزات مواقع الآبار" },
        { en: "Construction of Right of Ways", ar: "إنشاء حقوق الطريق" },
        { en: "Compaction and Leveling Works", ar: "أعمال الدمك والتسوية" },
        { en: "Fencing Works", ar: "أعمال السياج" },
        { en: "Engineering & Project Execution", ar: "الهندسة وتنفيذ المشاريع" },
        { en: "EPC Contracts (Engineering, Procurement & Construction)", ar: "عقود الهندسة والمشتريات والبناء" },
        { en: "LSTK Projects (Lump Sum Turnkey)", ar: "مشاريع المبلغ الإجمالي تسليم المفتاح" },
        { en: "LSPB Projects (Lump Sum Procure & Build)", ar: "مشاريع المبلغ الإجمالي للشراء والبناء" },
      ],
    },
    {
      icon: Settings,
      title: "Specialized Installations",
      titleAr: "التركيبات المتخصصة",
      items: [
        { en: "Permanent Downhole Monitoring Systems (PDHMS)", ar: "أنظمة المراقبة الدائمة تحت السطح" },
        { en: "Multiphase Flow Meter Systems (MPFM)", ar: "أنظمة عدادات التدفق متعددة المراحل" },
        { en: "Water Injection Centrifugal Pumps", ar: "مضخات الطرد المركزي لحقن المياه" },
        { en: "Low Pressure Production Systems (LPPS)", ar: "أنظمة الإنتاج منخفض الضغط" },
      ],
    },
    {
      icon: HardHat,
      title: "Pipeline Services",
      titleAr: "خدمات الأنابيب",
      items: [
        { en: "Pipeline Replacement", ar: "استبدال الأنابيب" },
        { en: "Pipeline Reconditioning", ar: "إعادة تأهيل الأنابيب" },
        { en: "RTR Pipe Installations", ar: "تركيبات أنابيب RTR" },
        { en: "Carbon Steel Pipeline Replacement", ar: "استبدال أنابيب الفولاذ الكربوني" },
      ],
    },
    {
      icon: Cog,
      title: "Maintenance Services",
      titleAr: "خدمات الصيانة",
      items: [
        { en: "Stripping & Re-manifolding of Oil & Water Wells", ar: "تفكيك وإعادة تشعيب آبار النفط والمياه" },
        { en: "Cathodic Protection", ar: "الحماية الكاثودية" },
        { en: "Corrosion Control Services", ar: "خدمات مكافحة التآكل" },
      ],
    },
    {
      icon: Shield,
      title: "Core Capabilities",
      titleAr: "القدرات الأساسية",
      items: [
        { en: "Mechanical & Piping Works", ar: "الأعمال الميكانيكية وأعمال الأنابيب" },
        { en: "Electrical & Instrumentation Works", ar: "الأعمال الكهربائية وأعمال الأجهزة" },
        { en: "Civil & Architectural Works", ar: "الأعمال المدنية والمعمارية" },
        { en: "Welding, Fabrication & Steel Erection", ar: "اللحام والتصنيع وتركيب الهياكل الفولاذية" },
      ],
    },
  ];

  return (
    <div className={`min-h-screen bg-gray-50 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <SemanticMetadata page="services" />
      <EnhancedSecurity />

      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroPath}
            alt="Pipeline & Industrial Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/60 to-slate-900/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4">
                <Wrench className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {language === 'ar' ? 'خدمات الأنابيب والصناعة' : 'Pipeline & Industrial Services'}
                </h1>
              </div>
            </div>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              {language === 'ar'
                ? 'حلول شاملة لبناء الأنابيب والخدمات الصناعية لقطاع النفط والغاز'
                : 'Comprehensive pipeline construction and industrial service solutions for the oil and gas sector'}
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-6">
        <Link href="/services">
          <Button variant="ghost" className="text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'ar' ? 'العودة إلى الخدمات' : 'Back to Services'}
          </Button>
        </Link>
      </div>

      <section className="container mx-auto px-4 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <Icon className="w-6 h-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800">
                      {language === 'ar' ? section.titleAr : section.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">
                          {language === 'ar' ? item.ar : item.en}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'ar' ? 'هل تحتاج إلى خدماتنا؟' : 'Need Our Services?'}
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'تواصل معنا لمناقشة متطلبات مشروعك'
              : 'Contact us to discuss your project requirements'}
          </p>
          <Link href="/contact">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
