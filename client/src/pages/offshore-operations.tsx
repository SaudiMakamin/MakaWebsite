import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import { Link } from 'wouter';
import { Ship, FileText, Waves, ArrowRight, CheckCircle } from 'lucide-react';
import heroPath from '@assets/hero-carousel-1_1752529906169.jpg';
import mosLogoPath from '@assets/Makamin-Offshore-Saudi-MOS_1773171180771.png';

export default function OffshoreOperations() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';

  const activities = [
    { en: "Offshore platform operations and support", ar: "عمليات ودعم المنصات البحرية" },
    { en: "Marine support and logistics services", ar: "خدمات الدعم البحري واللوجستيات" },
    { en: "Diving and subsea operations", ar: "عمليات الغوص وتحت البحر" },
    { en: "Underwater engineering and inspection", ar: "الهندسة والفحص تحت الماء" },
    { en: "Marine fleet management and chartering", ar: "إدارة الأسطول البحري والتأجير" },
  ];

  const fleetCapabilities = [
    { en: "AHTSS Vessels", ar: "سفن المناولة والقطر والإمداد" },
    { en: "Platform Supply Vessels (PSV)", ar: "سفن إمداد المنصات" },
    { en: "Diving Support Vessels (DSV)", ar: "سفن دعم الغوص" },
    { en: "Jack-Up Barges", ar: "صنادل الرفع" },
    { en: "Crew and Utility Boats", ar: "قوارب الأطقم والخدمات" },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir={isAr ? 'rtl' : 'ltr'}>
      <SemanticMetadata
        page="group"
        title="Makamin Offshore Saudi Ltd (MOS) | Saudi Makamin"
        description="Makamin Offshore Saudi Ltd (MOS) — a 51% Makamin-owned offshore entity providing marine services, diving operations, underwater engineering, and fleet support for oil and gas operations."
      />
      <EnhancedSecurity />

      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroPath} alt="Makamin Offshore Saudi" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-slate-900/70 to-cyan-900/85"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <img src={mosLogoPath} alt="Makamin Offshore Saudi (MOS)" className="h-16 sm:h-20 w-auto mx-auto mb-6 drop-shadow-lg" />
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {isAr ? 'شركة مكامن أوفشور السعودية المحدودة (MOS)' : 'Makamin Offshore Saudi Ltd (MOS)'}
            </h1>
            <p className="text-lg text-blue-200 mb-4">
              {isAr ? 'MOS — كيان بحري ضمن مجموعة مكامن' : 'MOS — Marine Entity — Makamin Group'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-100 text-blue-800 border-blue-200">
                  {isAr ? 'نبذة عن الكيان' : 'Entity Overview'}
                </Badge>
                <CardTitle className="text-2xl">
                  {isAr ? 'شركة مكامن أوفشور السعودية المحدودة (MOS)' : 'Makamin Offshore Saudi Ltd (MOS)'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'تُعد شركة مكامن أوفشور السعودية المحدودة (MOS) كيانًا بحريًا متخصصًا ضمن مجموعة مكامن. وتركز الشركة على العمليات البحرية وخدمات الدعم البحري لقطاع النفط والغاز.'
                    : 'Makamin Offshore Saudi Ltd (MOS) is a specialized marine entity within the Makamin Group. The company focuses on offshore operations and marine support services for the oil and gas sector.'}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-blue-700 font-medium">
                      {isAr ? 'ملكية مكامن: 51%' : 'Makamin Ownership: 51%'}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">{isAr ? 'السجل التجاري' : 'Commercial Registration'}</p>
                    <p className="text-lg font-semibold text-gray-900">2050077238</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">
                      {isAr ? 'Offshoreworks Global (L) Ltd (OWG)' : 'Offshoreworks Global (L) Ltd (OWG)'}
                    </p>
                    <p className="text-lg font-semibold text-gray-900">41%</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">
                      {isAr ? 'رقم سجل OWG' : 'OWG Commercial Registration No.'}
                    </p>
                    <p className="text-lg font-semibold text-gray-900">LL07924</p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 flex items-start gap-3">
                  <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-blue-800">
                    {isAr
                      ? 'وذلك بموجب العقد الموثق بتاريخ 20/9/2010.'
                      : 'Pursuant to the documented contract dated 20/9/2010.'}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Ship className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl">
                    {isAr ? 'النشاط البحري' : 'Offshore Activity'}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activities.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{isAr ? item.ar : item.en}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-12">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Waves className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl">
                    {isAr ? 'قدرات الأسطول' : 'Fleet Capabilities'}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {fleetCapabilities.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{isAr ? item.ar : item.en}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services/offshore">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  {isAr ? 'الخدمات البحرية والعمليات البحرية' : 'Offshore & Marine Services'}
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
