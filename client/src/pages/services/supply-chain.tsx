import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import { Package, ShoppingCart, Search, Truck, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';
import heroPath from '@assets/hero-carousel-1_1752529906169.jpg';

export default function SupplyChainServices() {
  const { language } = useLanguageContext();

  const sections = [
    {
      icon: ShoppingCart,
      title: "Procurement & Vendor Management",
      titleAr: "المشتريات وإدارة الموردين",
      items: [
        { en: "Vendor Selection", ar: "اختيار الموردين" },
        { en: "Vendor Qualification", ar: "تأهيل الموردين" },
        { en: "Vendor Inspection", ar: "فحص الموردين" },
      ],
    },
    {
      icon: Package,
      title: "Material & Equipment Supply",
      titleAr: "توريد المواد والمعدات",
      items: [
        { en: "Equipment Procurement", ar: "شراء المعدات" },
        { en: "Tools Procurement", ar: "شراء الأدوات" },
        { en: "Materials Procurement", ar: "شراء المواد" },
      ],
    },
    {
      icon: Search,
      title: "Quality & Inspection",
      titleAr: "الجودة والفحص",
      items: [
        { en: "Material Test Certificates", ar: "شهادات اختبار المواد" },
        { en: "Mill Certificates", ar: "شهادات المصنع" },
        { en: "Third-Party Inspection", ar: "الفحص من طرف ثالث" },
      ],
    },
    {
      icon: Truck,
      title: "Logistics & Project Support",
      titleAr: "الخدمات اللوجستية ودعم المشاريع",
      items: [
        { en: "Expediting", ar: "التعجيل" },
        { en: "Factory Acceptance Tests", ar: "اختبارات القبول في المصنع" },
        { en: "Manufacturing Inspection", ar: "فحص التصنيع" },
        { en: "Technical Inspection", ar: "الفحص التقني" },
      ],
    },
    {
      icon: ShieldCheck,
      title: "Quality Assurance",
      titleAr: "ضمان الجودة",
      items: [
        { en: "Quality Control Inspection", ar: "فحص مراقبة الجودة" },
        { en: "Vendor Technical Audit", ar: "التدقيق التقني للموردين" },
        { en: "Failure Analysis", ar: "تحليل الأعطال" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SemanticMetadata page="services" />
      <EnhancedSecurity />

      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroPath} alt="Supply Chain Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/80 via-slate-900/70 to-emerald-900/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4">
                <Package className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {language === 'ar' ? 'خدمات سلسلة التوريد' : 'Supply Chain Services'}
                </h1>
                <p className="text-xl text-teal-100">
                  {language === 'ar' ? 'حلول توريد متكاملة لقطاع النفط والغاز' : 'End-to-end supply solutions for the oil & gas sector'}
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
              {language === 'ar' ? 'خدماتنا في سلسلة التوريد' : 'Our Supply Chain Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar'
                ? 'نقدم حلول سلسلة توريد شاملة تلبي متطلبات صناعة النفط والغاز بأعلى معايير الجودة'
                : 'Comprehensive supply chain solutions meeting oil & gas industry requirements with the highest quality standards'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                  <CardHeader className="pb-4">
                    <div className="bg-gradient-to-r from-teal-500 to-emerald-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                      <section.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {language === 'ar' ? section.titleAr : section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.items.map((item, iIndex) => (
                        <li key={iIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-teal-500 flex-shrink-0" />
                          <span>{language === 'ar' ? item.ar : item.en}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'شريكك في سلسلة التوريد' : 'Your Supply Chain Partner'}
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'نضمن توريد المواد والمعدات في الوقت المحدد وبأعلى معايير الجودة'
              : 'We ensure on-time delivery of materials and equipment with the highest quality standards'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-teal-700 hover:bg-teal-50 dark:text-teal-700 font-bold px-8 py-4 border-2 border-white shadow-2xl transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="/contact" className="flex items-center text-teal-700 dark:text-teal-700 no-underline">
                {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-700 dark:hover:text-teal-700 font-bold px-8 py-4 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="/services" className="flex items-center text-white hover:text-teal-700 dark:hover:text-teal-700 no-underline">
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