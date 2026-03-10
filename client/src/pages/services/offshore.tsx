import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import { Link } from 'wouter';
import { Anchor, Ship, Waves, Wrench, CheckCircle, ArrowRight } from 'lucide-react';
import heroPath from '@assets/hero-carousel-1_1752529906169.jpg';

export default function OffshoreServices() {
  const { language } = useLanguageContext();

  const sections = [
    {
      icon: Ship,
      title: "Marine & Offshore Operations",
      titleAr: "العمليات البحرية والبرية",
      items: [
        { en: "Chartering Services", ar: "خدمات التأجير البحري" },
        { en: "Offshore Manning Services", ar: "خدمات التوظيف البحري" },
        { en: "Marine Support Services", ar: "خدمات الدعم البحري" },
        { en: "Platform Support Vessel Services", ar: "خدمات سفن دعم المنصات" },
        { en: "Security & Accommodation Vessels", ar: "سفن الأمن والإقامة" },
      ]
    },
    {
      icon: Waves,
      title: "Diving & Subsea Services",
      titleAr: "خدمات الغوص وتحت البحر",
      items: [
        { en: "Air Diving", ar: "الغوص الهوائي" },
        { en: "Saturation Diving", ar: "الغوص التشبعي" },
        { en: "Diving Support Vessel (DSV)", ar: "سفن دعم الغوص" },
        { en: "ROV Services", ar: "خدمات المركبات المُوجَّهة عن بُعد" },
      ]
    },
    {
      icon: Wrench,
      title: "Underwater Engineering",
      titleAr: "الهندسة تحت الماء",
      items: [
        { en: "Underwater Inspection", ar: "الفحص تحت الماء" },
        { en: "Underwater NDT", ar: "الاختبارات غير التدميرية تحت الماء" },
        { en: "Underwater Survey", ar: "المسح تحت الماء" },
        { en: "Underwater Construction Support", ar: "دعم البناء تحت الماء" },
        { en: "Inspection Repair & Maintenance (IRM)", ar: "الفحص والإصلاح والصيانة" },
      ]
    },
    {
      icon: Anchor,
      title: "Marine Fleet Support",
      titleAr: "دعم الأسطول البحري",
      items: [
        { en: "AHTSS Vessels", ar: "سفن المناولة والقطر والإمداد" },
        { en: "Platform Supply Vessels (PSV)", ar: "سفن إمداد المنصات" },
        { en: "Crew Boats", ar: "قوارب نقل الأطقم" },
        { en: "Utility Boats", ar: "قوارب الخدمات" },
        { en: "Maintenance Boats", ar: "قوارب الصيانة" },
        { en: "Jack-Up Barges", ar: "صنادل الرفع" },
        { en: "Floating Storage Vessels", ar: "سفن التخزين العائمة" },
        { en: "Supply Vessels", ar: "سفن الإمداد" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <SemanticMetadata page="services" />
      <EnhancedSecurity />

      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroPath}
            alt={language === 'ar' ? 'خدمات بحرية - مكامن' : 'Offshore Services - Makamin'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/70 to-cyan-900/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4">
                <Anchor className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {language === 'ar' ? 'الخدمات البحرية' : 'Offshore Services'}
                </h1>
                <p className="text-lg text-blue-100">
                  {language === 'ar' ? 'مكامن البحرية السعودية المحدودة (MOS)' : 'Makamin Offshore Saudi Ltd. (MOS)'}
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mt-6">
              {language === 'ar'
                ? 'عمليات بحرية وخدمات دعم بحري لاستكشاف وإنتاج النفط والغاز والبنية التحتية تحت البحر.'
                : 'Offshore operations and marine support services for oil and gas exploration, production, and subsea infrastructure.'}
            </p>
            <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed mt-4">
              {language === 'ar'
                ? 'تقدم مكامن حلولاً بحرية متكاملة تشمل عمليات الغوص، الأعمال تحت البحر، دعم المنصات البحرية، وخدمات اللوجستيات البحرية.'
                : 'Makamin provides integrated offshore solutions including diving operations, subsea works, offshore platform support, and marine logistics services.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-4">
              {language === 'ar' ? 'خدماتنا' : 'Our Services'}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === 'ar' ? 'خدمات بحرية متكاملة' : 'Comprehensive Offshore Services'}
            </h2>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className="bg-slate-700/50 border-slate-600 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-500/20 rounded-xl p-3">
                        <Icon className="w-8 h-8 text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-white">
                          {language === 'ar' ? section.titleAr : section.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                      {section.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-600/50"
                        >
                          <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">
                            {language === 'ar' ? item.ar : item.en}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {language === 'ar' ? 'هل تحتاج إلى خدمات بحرية؟' : 'Need Offshore Services?'}
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'فريقنا من الخبراء جاهز لمناقشة متطلبات مشروعك البحري وتقديم حلول مخصصة.'
              : 'Our team of experts is ready to discuss your offshore project requirements and provide tailored solutions.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10">
                {language === 'ar' ? 'جميع الخدمات' : 'All Services'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
