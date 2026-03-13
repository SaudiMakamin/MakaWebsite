import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import { Link } from 'wouter';
import { Building2, Layers, ArrowRight, CheckCircle } from 'lucide-react';
import heroPath from '@assets/hero-carousel-1_1752529906169.jpg';

export default function PetroleumServices() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';

  const divisions = [
    { en: "Pipeline & Industrial", ar: "الأنابيب والصناعة", path: "/services/pipeline-industrial" },
    { en: "Drilling", ar: "الحفر", path: "/services/drilling" },
    { en: "Geoscience", ar: "علوم الأرض", path: "/services/geoscience" },
    { en: "Industrial Inspection", ar: "التفتيش الصناعي", path: "/services/industrial-inspection" },
    { en: "Technical Staffing", ar: "التوظيف التقني", path: "/services/technical-staffing" },
    { en: "Supply Chain", ar: "سلسلة الإمداد", path: "/services/supply-chain" },
    { en: "Project Management", ar: "إدارة المشاريع", path: "/projects" },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir={isAr ? 'rtl' : 'ltr'}>
      <SemanticMetadata
        page="group"
        title="Makamin Petroleum Services Co (MPS) | Saudi Makamin"
        description="Makamin Petroleum Services Co (MPS) — the primary operating entity of the Makamin Group, managing pipeline, drilling, geoscience, inspection, staffing, and supply chain operations."
      />
      <EnhancedSecurity />

      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroPath} alt="Makamin Petroleum Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-amber-900/60 to-slate-900/85"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4">
                <Building2 className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {isAr ? 'شركة مكامن لخدمات النفط البترولية المحدودة (MPS)' : 'Makamin Petroleum Services Co (MPS)'}
                </h1>
                <p className="text-lg text-amber-200">
                  {isAr ? 'الكيان التشغيلي الرئيسي لمجموعة مكامن' : 'Primary Operating Entity — Makamin Group'}
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
                <Badge className="w-fit mb-2 bg-amber-100 text-amber-800 border-amber-200">
                  {isAr ? 'نبذة عن الكيان' : 'Entity Overview'}
                </Badge>
                <CardTitle className="text-2xl">
                  {isAr ? 'شركة مكامن لخدمات النفط البترولية المحدودة (MPS)' : 'Makamin Petroleum Services Co (MPS)'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'تُعد شركة مكامن لخدمات النفط البترولية المحدودة (MPS) الكيان التشغيلي الرئيسي ضمن مجموعة مكامن، وتمثل الذراع التنفيذي للمجموعة، حيث تدير العمليات عبر عدة قطاعات تخدم قطاع النفط والغاز.'
                    : 'Makamin Petroleum Services Co (MPS) is the primary operating entity within the Makamin Group. The company serves as the executive arm of the group, managing operations across multiple divisions serving the oil and gas sector.'}
                </p>
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <p className="text-sm text-amber-800 font-medium mb-2">
                    {isAr ? 'هيكل الملكية:' : 'Ownership Structure:'}
                  </p>
                  <ul className="text-sm text-amber-900 space-y-1">
                    <li>
                      {isAr
                        ? '90% ملكية خاصة لشركة مكامن السعودية القابضة لخدمات النفط والغاز.'
                        : '90% privately owned by Makamin Saudi Holding Company for Oil and Gas Services.'}
                    </li>
                    <li>
                      {isAr
                        ? '10% ملكية خاصة لشركة MAKAMIN PETROLEUM SERVICES CO. W.L.L المسجلة في مملكة البحرين، رقم السجل التجاري 72626-1.'
                        : '10% privately owned by MAKAMIN PETROLEUM SERVICES CO. W.L.L, Kingdom of Bahrain, Commercial Registration No. 72626-1.'}
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Layers className="w-6 h-6 text-amber-600" />
                  <CardTitle className="text-xl">
                    {isAr ? 'الأقسام التشغيلية' : 'Operating Divisions'}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {divisions.map((div, i) => (
                    <Link key={i} href={div.path}>
                      <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-amber-300 hover:bg-amber-50/50 transition-colors cursor-pointer">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{isAr ? div.ar : div.en}</span>
                        <ArrowRight className={`w-4 h-4 text-gray-400 ${isAr ? 'mr-auto rotate-180' : 'ml-auto'}`} />
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-xl">
                  {isAr ? 'الشركة الزميلة التقنية' : 'Technology Affiliate'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                  <p className="text-gray-700 leading-relaxed">
                    {isAr
                      ? 'شركة زينكوس الدولية المحدودة — شركة تقنية تابعة بملكية 51%، متخصصة في حلول المراقبة واكتساب البيانات في الوقت الحقيقي.'
                      : 'ZENCUS International Ltd — a 51% technology subsidiary/affiliate specializing in real-time monitoring and data acquisition solutions.'}
                  </p>
                  <Link href="/zencus-international">
                    <Button variant="link" className="text-teal-700 p-0 mt-2">
                      {isAr ? 'عرض صفحة الكيان' : 'View Entity Page'}
                      <ArrowRight className={`w-4 h-4 ${isAr ? 'mr-1 rotate-180' : 'ml-1'}`} />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/projects/aramco">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  {isAr ? 'مشاريع أرامكو' : 'Aramco Projects'}
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
