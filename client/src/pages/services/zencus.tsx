import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import { Radio, Wifi, Cpu, BarChart3, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import heroCarouselPath from '@assets/hero-carousel-1_1752529906169.jpg';
import HeroLogo from '@/components/hero-logo';

export default function ZencusServices() {
  const { language } = useLanguageContext();

  const sections = [
    {
      icon: Radio,
      title: "Real-Time Field Monitoring",
      titleAr: "المراقبة الميدانية في الوقت الحقيقي",
      items: [
        { en: "Wellhead Monitoring Systems", ar: "أنظمة مراقبة رؤوس الآبار" },
        { en: "Real-Time Production Data", ar: "بيانات الإنتاج في الوقت الحقيقي" },
        { en: "Remote Field Monitoring", ar: "المراقبة الميدانية عن بُعد" },
      ],
    },
    {
      icon: Wifi,
      title: "Wireless Data Acquisition",
      titleAr: "اكتساب البيانات اللاسلكية",
      items: [
        { en: "Wireless Field Instrumentation", ar: "الأجهزة الميدانية اللاسلكية" },
        { en: "Data Transmission Systems", ar: "أنظمة نقل البيانات" },
        { en: "Remote Monitoring Networks", ar: "شبكات المراقبة عن بُعد" },
      ],
    },
    {
      icon: Cpu,
      title: "ZENCUS Technologies",
      titleAr: "تقنيات زينكوس",
      items: [
        { en: "Mono Transmitter", ar: "جهاز الإرسال الأحادي" },
        { en: "Field Transceiver", ar: "جهاز الإرسال والاستقبال الميداني" },
        { en: "ZENCUS Gateway", ar: "بوابة زينكوس" },
      ],
    },
    {
      icon: BarChart3,
      title: "Data Visualization",
      titleAr: "تصور البيانات",
      items: [
        { en: "ZENCUS Data Visualization Suite", ar: "مجموعة تصور بيانات زينكوس" },
        { en: "ZDV Studio", ar: "ZDV Studio" },
        { en: "ZDV Listener", ar: "ZDV Listener" },
        { en: "ZDV Alert", ar: "ZDV Alert" },
        { en: "ZDV Reporting", ar: "ZDV Reporting" },
      ],
    },
    {
      icon: Shield,
      title: "Security & Surveillance",
      titleAr: "الأمن والمراقبة",
      items: [
        { en: "ZENCUS CCTV Monitoring Systems", ar: "أنظمة مراقبة CCTV من زينكوس" },
        { en: "Remote Site Security Systems", ar: "أنظمة أمن المواقع عن بُعد" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SemanticMetadata
        page="services"
        title="ZENCUS Technology Services | Saudi Makamin"
        description="Real-time field monitoring, wireless data acquisition with mono transmitters and field transceivers, ZDV Studio, and CCTV surveillance by Saudi Makamin."
      />
      <EnhancedSecurity />

      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCarouselPath}
            alt="ZENCUS Technology Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 via-cyan-900/30 to-blue-900/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4">
                <Radio className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {language === 'ar' ? 'خدمات زينكوس' : 'ZENCUS Services'}
                </h1>
                <p className="text-xl text-cyan-100">
                  {language === 'ar'
                    ? 'تقنيات المراقبة الميدانية واكتساب البيانات في الوقت الحقيقي'
                    : 'Real-time field monitoring and data acquisition technologies'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'خدماتنا التقنية' : 'Our Technology Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar'
                ? 'حلول متكاملة للمراقبة الميدانية واكتساب البيانات اللاسلكية وتقنيات التصور المتقدمة'
                : 'Integrated solutions for field monitoring, wireless data acquisition, and advanced visualization technologies'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-r from-teal-500 to-cyan-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <section.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {language === 'ar' ? section.titleAr : section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {section.items.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-teal-500 flex-shrink-0" />
                        {language === 'ar' ? item.ar : item.en}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-teal-500 to-cyan-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'شريكك في التقنية' : 'Your Technology Partner'}
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'حلول مراقبة وتقنيات ذكية لصناعة النفط والغاز بأعلى معايير الجودة'
              : 'Smart monitoring solutions and technologies for the oil & gas industry with the highest quality standards'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-teal-50 dark:text-teal-600 font-bold px-8 py-4 border-2 border-white shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="/contact" className="flex items-center text-teal-600 dark:text-teal-600 no-underline">
                {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-600 dark:hover:text-teal-600 font-bold px-8 py-4 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="/services" className="flex items-center text-white hover:text-teal-600 dark:hover:text-teal-600 no-underline">
                <ArrowRight className="w-5 h-5 mr-2" />
                {language === 'ar' ? 'جميع الخدمات' : 'All Services'}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}