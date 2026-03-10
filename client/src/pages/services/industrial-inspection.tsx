import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import { Search, Shield, Microscope, Activity, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';
import HeroLogo from '@/components/hero-logo';
import heroImage from '@assets/hero-carousel-2_1752874787607.jpg';

const sections = [
  {
    icon: Search,
    title: "Non-Destructive Testing (NDT)",
    titleAr: "الاختبار غير المدمر (NDT)",
    items: [
      { en: "Radiographic Testing (RT)", ar: "الاختبار الإشعاعي (RT)" },
      { en: "Ultrasonic Testing (UT)", ar: "الاختبار بالموجات فوق الصوتية (UT)" },
      { en: "Magnetic Particle Testing (MT)", ar: "اختبار الجسيمات المغناطيسية (MT)" },
      { en: "Liquid Penetrant Testing (PT)", ar: "اختبار السوائل المخترقة (PT)" },
      { en: "Visual Testing (VT)", ar: "الاختبار البصري (VT)" },
    ],
  },
  {
    icon: Shield,
    title: "Advanced NDT",
    titleAr: "الاختبار غير المدمر المتقدم",
    items: [
      { en: "Phased Array Ultrasonic Testing (PAUT)", ar: "الاختبار بالموجات فوق الصوتية بالمصفوفة المرحلية (PAUT)" },
      { en: "Time of Flight Diffraction (TOFD)", ar: "انحراف زمن الطيران (TOFD)" },
      { en: "Automated Corrosion Mapping", ar: "رسم خرائط التآكل الآلي" },
      { en: "Tube Inspection", ar: "فحص الأنابيب" },
      { en: "Tank Floor Inspection", ar: "فحص أرضية الخزانات" },
    ],
  },
  {
    icon: Microscope,
    title: "Material Identification",
    titleAr: "تحديد المواد",
    items: [
      { en: "Positive Material Identification (PMI)", ar: "التعرف الإيجابي على المواد (PMI)" },
    ],
  },
  {
    icon: Activity,
    title: "Corrosion Monitoring",
    titleAr: "مراقبة التآكل",
    items: [
      { en: "Corrosion Monitoring Programs", ar: "برامج مراقبة التآكل" },
      { en: "Corrosion Coupons (Weight Loss Monitoring)", ar: "كوبونات التآكل (مراقبة فقدان الوزن)" },
    ],
  },
];

export default function IndustrialInspection() {
  const { language } = useLanguageContext();

  return (
    <div className="min-h-screen bg-gray-50">
      <SemanticMetadata
        page="services"
        title="Industrial Inspection Services | Saudi Makamin"
        description="Non-destructive testing, PAUT, TOFD, PMI, corrosion monitoring, and tank floor inspection services by Saudi Makamin."
      />
      <EnhancedSecurity />

      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Industrial Inspection Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-indigo-900/60 to-purple-900/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4">
                <Search className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {language === 'ar' ? 'خدمات الفحص الصناعي' : 'Industrial Inspection Services'}
                </h1>
                <p className="text-xl text-orange-100">
                  {language === 'ar'
                    ? 'حلول فحص واختبار متقدمة لقطاع النفط والغاز'
                    : 'Advanced inspection and testing solutions for the oil & gas sector'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-4">
        <Link href="/services" className="inline-flex items-center text-makamin-blue hover:text-makamin-gold transition-colors font-medium">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === 'ar' ? 'العودة إلى الخدمات' : 'Back to Services'}
        </Link>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, idx) => (
              <Card key={idx} className="border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-makamin-blue to-indigo-600 rounded-lg p-3">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {language === 'ar' ? section.titleAr : section.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-makamin-gold flex-shrink-0" />
                        <span className="text-gray-700">
                          {language === 'ar' ? item.ar : item.en}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}