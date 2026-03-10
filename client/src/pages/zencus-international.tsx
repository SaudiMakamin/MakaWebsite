import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import { Link } from 'wouter';
import { Cpu, Radio, BarChart3, Activity, ArrowRight, CheckCircle } from 'lucide-react';
import heroPath from '@assets/hero-carousel-1_1752529906169.jpg';

export default function ZencusInternational() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';

  const capabilities = [
    {
      icon: Radio,
      title: "Technology Solutions",
      titleAr: "الحلول التقنية",
      items: [
        { en: "Wireless data acquisition systems", ar: "أنظمة اكتساب البيانات اللاسلكية" },
        { en: "Real-time monitoring platforms", ar: "منصات المراقبة الفورية" },
        { en: "IoT-enabled field instrumentation", ar: "أجهزة ميدانية مدعومة بإنترنت الأشياء" },
      ]
    },
    {
      icon: BarChart3,
      title: "Products",
      titleAr: "المنتجات",
      items: [
        { en: "Mono Transmitter units", ar: "وحدات الإرسال الأحادي" },
        { en: "Field Transceiver systems", ar: "أنظمة الإرسال والاستقبال الميدانية" },
        { en: "ZDV Studio data visualization software", ar: "برنامج تصور البيانات ZDV Studio" },
        { en: "ZDV Alert notification systems", ar: "أنظمة إشعارات ZDV Alert" },
      ]
    },
    {
      icon: Activity,
      title: "Operational Monitoring",
      titleAr: "المراقبة التشغيلية",
      items: [
        { en: "Field production monitoring", ar: "مراقبة الإنتاج الميداني" },
        { en: "CCTV and security surveillance", ar: "المراقبة بالكاميرات والأمن" },
        { en: "Environmental and safety monitoring", ar: "المراقبة البيئية والسلامة" },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir={isAr ? 'rtl' : 'ltr'}>
      <SemanticMetadata
        page="about"
        title="ZENCUS International Ltd | Saudi Makamin"
        description="ZENCUS International Ltd — a technology subsidiary (51% owned by Makamin) specializing in wireless data acquisition, real-time monitoring, and field instrumentation for oil and gas operations."
      />
      <EnhancedSecurity />

      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroPath} alt="ZENCUS International" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/85 via-cyan-900/70 to-slate-900/85"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4">
                <Cpu className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {isAr ? 'زينكوس الدولية المحدودة' : 'ZENCUS International Ltd'}
                </h1>
                <p className="text-lg text-cyan-200">
                  {isAr ? 'كيان تقني تابع لمجموعة مكامن' : 'Technology Entity — Makamin Group'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-teal-100 text-teal-800 border-teal-200">
                  {isAr ? 'نبذة عن الكيان' : 'Entity Overview'}
                </Badge>
                <CardTitle className="text-2xl">
                  {isAr ? 'زينكوس الدولية المحدودة' : 'ZENCUS International Ltd'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'زينكوس الدولية المحدودة هي شركة تقنية متخصصة ضمن مجموعة مكامن، تمتلك فيها مكامن حصة 51%. تركز الشركة على تطوير وتوفير حلول التقنية المتقدمة لقطاع الطاقة والعمليات الميدانية.'
                    : 'ZENCUS International Ltd is a specialized technology company within the Makamin Group, with Makamin holding a 51% ownership stake. The company focuses on developing and delivering advanced technology solutions for the energy sector and field operations.'}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                    <p className="text-sm text-teal-700 font-medium">
                      {isAr ? 'الملكية: 51% — مكامن السعودية القابضة' : 'Ownership: 51% — Saudi Makamin Holding'}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">{isAr ? 'رقم التسجيل' : 'Registration Number'}</p>
                    <p className="text-lg font-semibold text-gray-900">05173867</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8 mb-12">
              {capabilities.map((section, index) => {
                const Icon = section.icon;
                return (
                  <Card key={index}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-teal-100 rounded-lg p-2">
                          <Icon className="w-6 h-6 text-teal-700" />
                        </div>
                        <CardTitle className="text-xl">
                          {isAr ? section.titleAr : section.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-3">
                        {section.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{isAr ? item.ar : item.en}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="mb-12">
              <CardContent className="pt-6">
                <p className="text-gray-700 leading-relaxed">
                  {isAr
                    ? 'تعمل زينكوس الدولية على ربط التقنية بالعمليات الميدانية في قطاع الطاقة، من خلال توفير أنظمة مراقبة واكتساب بيانات في الوقت الحقيقي تدعم اتخاذ القرارات التشغيلية.'
                    : 'ZENCUS International bridges technology and field operations in the energy sector, providing real-time monitoring and data acquisition systems that support operational decision-making.'}
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects/zencus">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                  {isAr ? 'مشاريع ZENCUS' : 'ZENCUS Projects'}
                  <ArrowRight className={`w-5 h-5 ${isAr ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  {isAr ? 'نظرة عامة على المجموعة' : 'Group Overview'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
