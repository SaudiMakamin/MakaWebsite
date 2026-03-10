import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import { Users, UserCheck, Briefcase, Globe, HeadphonesIcon, ArrowRight, CheckCircle } from 'lucide-react';
import HeroLogo from '@/components/hero-logo';

export default function TechnicalStaffingServices() {
  const { language } = useLanguageContext();

  const sections = [
    {
      icon: Users,
      title: "Workforce Supply",
      titleAr: "توريد القوى العاملة",
      items: [
        { en: "Engineers", ar: "مهندسون" },
        { en: "Inspectors", ar: "مفتشون" },
        { en: "Technicians", ar: "فنيون" },
        { en: "Operators", ar: "مشغلون" },
        { en: "Project Managers", ar: "مديرو مشاريع" },
      ],
    },
    {
      icon: UserCheck,
      title: "Recruitment Services",
      titleAr: "خدمات التوظيف",
      items: [
        { en: "Permanent Staffing", ar: "التوظيف الدائم" },
        { en: "Contract Staffing", ar: "التوظيف بالعقود" },
        { en: "Global Recruitment Solutions", ar: "حلول التوظيف العالمية" },
      ],
    },
    {
      icon: Briefcase,
      title: "Industries Served",
      titleAr: "القطاعات المخدومة",
      items: [
        { en: "Oil & Gas", ar: "النفط والغاز" },
        { en: "Petrochemical", ar: "البتروكيماويات" },
        { en: "Construction", ar: "البناء والتشييد" },
        { en: "Power", ar: "الطاقة" },
        { en: "Water Utilities", ar: "مرافق المياه" },
      ],
    },
    {
      icon: HeadphonesIcon,
      title: "HR & Logistics Support",
      titleAr: "دعم الموارد البشرية واللوجستيات",
      items: [
        { en: "Local Recruitment", ar: "التوظيف المحلي" },
        { en: "Expat Recruitment", ar: "توظيف الوافدين" },
        { en: "Payroll Services", ar: "خدمات الرواتب" },
        { en: "Visa Processing", ar: "معالجة التأشيرات" },
        { en: "In-Country Logistics Support", ar: "الدعم اللوجستي داخل البلاد" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SemanticMetadata
        page="services"
        title="Technical Staffing Services | Saudi Makamin"
        description="Permanent and contract staffing, payroll management, visa processing, and specialized workforce for petrochemical and oil & gas sectors by Saudi Makamin."
      />
      <EnhancedSecurity />
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4">
                <Users className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {language === 'ar' ? 'خدمات التوظيف التقني' : 'Technical Staffing Services'}
                </h1>
                <p className="text-xl text-orange-100">
                  {language === 'ar' ? 'توفير الكفاءات المتخصصة لقطاع الطاقة والصناعة' : 'Providing specialized talent for the energy and industrial sectors'}
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
              {language === 'ar' ? 'خدماتنا في التوظيف التقني' : 'Our Technical Staffing Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' ? 'نوفر حلول توظيف شاملة تلبي احتياجات القطاعات الصناعية والطاقة' : 'Comprehensive staffing solutions tailored for the industrial and energy sectors'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
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
                        <CheckCircle className="w-4 h-4 mr-2 text-orange-500 flex-shrink-0" />
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

      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'شريكك في بناء فرق العمل' : 'Your Partner in Building Teams'}
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            {language === 'ar' ? 'نوفر الكوادر المتخصصة التي تحتاجها لإنجاح مشاريعك في قطاع النفط والغاز والصناعة' : 'We supply the specialized workforce you need to succeed in oil & gas and industrial projects'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 dark:text-orange-600 font-bold px-8 py-4 border-2 border-white shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="/contact" className="flex items-center text-orange-600 dark:text-orange-600 no-underline">
                {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 dark:hover:text-orange-600 font-bold px-8 py-4 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="/services" className="flex items-center text-white hover:text-orange-600 dark:hover:text-orange-600 no-underline">
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