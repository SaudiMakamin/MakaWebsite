import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import { Globe, Microscope, Database, BarChart3, Users, Activity, ArrowRight, CheckCircle, Layers, Search, FileText, Cpu } from 'lucide-react';
import heroCarouselPath from '@assets/hero-carousel-1_1752529906169.jpg';
import HeroLogo from '@/components/hero-logo';
import { Link } from 'wouter';

export default function GeoscienceServices() {
  const { language } = useLanguageContext();

  const sections = [
    {
      icon: Globe,
      title: "Geological & Geophysical Studies",
      titleAr: "الدراسات الجيولوجية والجيوفيزيائية",
      items: [
        { en: "Geological Analysis", ar: "التحليل الجيولوجي" },
        { en: "Geophysical Studies", ar: "الدراسات الجيوفيزيائية" },
        { en: "Petrophysical Studies", ar: "الدراسات البتروفيزيائية" },
      ]
    },
    {
      icon: Database,
      title: "Digital Data Services",
      titleAr: "خدمات البيانات الرقمية",
      items: [
        { en: "Log Scanning", ar: "مسح السجلات" },
        { en: "Log Digitizing", ar: "رقمنة السجلات" },
        { en: "Legacy Log Conversion", ar: "تحويل السجلات القديمة" },
      ]
    },
    {
      icon: Microscope,
      title: "Core Analysis",
      titleAr: "تحليل العينات الصخرية",
      items: [
        { en: "Porosity Analysis", ar: "تحليل المسامية" },
        { en: "Permeability Studies", ar: "دراسات النفاذية" },
        { en: "Mineralogy Analysis", ar: "تحليل المعادن" },
        { en: "Wettability Mapping", ar: "خرائط القابلية للبلل" },
        { en: "Fluid Distribution Analysis", ar: "تحليل توزيع السوائل" },
      ]
    },
    {
      icon: Search,
      title: "Advanced Core Studies",
      titleAr: "دراسات العينات المتقدمة",
      items: [
        { en: "Relative Permeability", ar: "النفاذية النسبية" },
        { en: "Capillary Pressure Analysis", ar: "تحليل الضغط الشعري" },
        { en: "Imbibition & Drainage Studies", ar: "دراسات التشرب والتصريف" },
      ]
    },
    {
      icon: Users,
      title: "Consultancy & Manpower",
      titleAr: "الاستشارات والقوى العاملة",
      items: [
        { en: "Geophysics Consultancy", ar: "استشارات الجيوفيزياء" },
        { en: "Geology Consultancy", ar: "استشارات الجيولوجيا" },
        { en: "Petrophysics Consultancy", ar: "استشارات البتروفيزياء" },
        { en: "Specialized Technical Manpower", ar: "القوى العاملة التقنية المتخصصة" },
      ]
    },
    {
      icon: Activity,
      title: "Monitoring Services",
      titleAr: "خدمات المراقبة",
      items: [
        { en: "4D Seismic Monitoring", ar: "المراقبة الزلزالية رباعية الأبعاد" },
        { en: "Seismic Data Quality Control", ar: "مراقبة جودة البيانات الزلزالية" },
        { en: "Seismic Equipment Maintenance", ar: "صيانة معدات الرصد الزلزالي" },
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
            src={heroCarouselPath}
            alt={language === 'ar' ? 'خدمات علوم الأرض - مكامن' : 'Geoscience Services - Makamin'}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-emerald-900/60 to-slate-900/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4">
                <Globe className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {language === 'ar' ? 'خدمات علوم الأرض' : 'Geoscience Services'}
                </h1>
                <p className="text-xl text-emerald-200">
                  {language === 'ar'
                    ? 'حلول جيولوجية وجيوفيزيائية متكاملة لقطاع النفط والغاز'
                    : 'Integrated geological and geophysical solutions for the oil & gas sector'}
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed mt-6">
              {language === 'ar'
                ? 'تقدم مكامن خدمات علوم الأرض الشاملة بما في ذلك الدراسات الجيولوجية والجيوفيزيائية، تحليل العينات الصخرية، الخدمات الرقمية، والاستشارات المتخصصة لدعم عمليات الاستكشاف والإنتاج.'
                : 'Makamin delivers comprehensive geoscience services including geological & geophysical studies, core analysis, digital data services, and specialized consultancy to support exploration and production operations.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 mb-4">
              {language === 'ar' ? 'خدماتنا' : 'Our Services'}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === 'ar' ? 'خدمات علوم الأرض المتكاملة' : 'Comprehensive Geoscience Services'}
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {language === 'ar'
                ? 'نقدم مجموعة كاملة من حلول علوم الأرض لتلبية احتياجات قطاع النفط والغاز'
                : 'We provide a complete suite of geoscience solutions to meet the needs of the oil & gas sector'}
            </p>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className="bg-slate-700/50 border-slate-600 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-emerald-500/20 rounded-xl p-3">
                        <Icon className="w-8 h-8 text-emerald-400" />
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
                          <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
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
            {language === 'ar' ? 'هل تحتاج إلى خدمات علوم الأرض؟' : 'Need Geoscience Services?'}
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'فريقنا من الخبراء جاهز لمناقشة متطلبات مشروعك وتقديم حلول مخصصة.'
              : 'Our team of experts is ready to discuss your project requirements and provide tailored solutions.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10">
                {language === 'ar' ? 'جميع الخدمات' : 'All Services'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
