import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import { Link } from 'wouter';
import { Building2, FileText, Globe, ArrowRight } from 'lucide-react';
import heroPath from '@assets/hero-carousel-1_1752529906169.jpg';

export default function MakaminHolding() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';

  const registrations = [
    { label: "Commercial Registration", labelAr: "السجل التجاري", value: "1010251168" },
    { label: "Branch", labelAr: "الفرع", value: "2051038139" },
    { label: "Bahrain Branch", labelAr: "فرع البحرين", value: "72626-1" },
    { label: "Bahrain Branch Ownership", labelAr: "ملكية فرع البحرين", value: "100%" },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir={isAr ? 'rtl' : 'ltr'}>
      <SemanticMetadata
        page="about"
        title="Makamin Holding for Oil & Gas | Saudi Makamin"
        description="Makamin Saudi Holding Company for Oil & Gas Services — the parent corporate umbrella overseeing Makamin Petroleum Services, ZENCUS International, and Makamin Offshore Saudi."
      />
      <EnhancedSecurity />

      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroPath} alt="Makamin Holding" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/70 to-slate-900/85"></div>
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
                  {isAr ? 'مكامن السعودية القابضة للنفط والغاز' : 'Makamin Holding for Oil & Gas'}
                </h1>
                <p className="text-lg text-blue-200">
                  {isAr ? 'الشركة الأم والمظلة المؤسسية' : 'Parent Company & Corporate Umbrella'}
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
                <Badge className="w-fit mb-2 bg-blue-100 text-blue-800 border-blue-200">
                  {isAr ? 'نبذة عن الشركة' : 'Company Overview'}
                </Badge>
                <CardTitle className="text-2xl">
                  {isAr ? 'شركة مكامن السعودية القابضة لخدمات النفط والغاز' : 'Saudi Makamin Holding Company for Oil & Gas Services'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'شركة مكامن السعودية القابضة لخدمات النفط والغاز هي الشركة الأم والمظلة المؤسسية لمجموعة مكامن. تأسست عام 2008 برأس مال 1.2 مليار ريال سعودي، وتعمل كمالك رئيسي وشريك استراتيجي لشركاتها التابعة والزميلة العاملة في قطاع النفط والغاز.'
                    : 'Saudi Makamin Holding Company for Oil & Gas Services is the parent company and corporate umbrella for the Makamin Group. Established in 2008 with a capital of SAR 1.2 billion, it serves as the principal owner and strategic partner for its subsidiaries and affiliates operating in the oil and gas sector.'}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isAr
                    ? 'تتولى الشركة القابضة الإشراف المؤسسي والحوكمة والتوجيه الاستراتيجي لشركاتها التابعة، بما في ذلك شركة مكامن للخدمات البترولية وشركة زينكوس الدولية وشركة مكامن البحرية السعودية.'
                    : 'The holding company provides corporate oversight, governance, and strategic direction for its subsidiaries, including Makamin Petroleum Services Company, ZENCUS International Ltd, and Makamin Offshore Saudi Ltd.'}
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl">
                    {isAr ? 'التسجيلات التجارية' : 'Commercial Registrations'}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {registrations.map((reg, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <p className="text-sm text-gray-500 mb-1">{isAr ? reg.labelAr : reg.label}</p>
                      <p className="text-lg font-semibold text-gray-900">{reg.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl">
                    {isAr ? 'الدور المؤسسي' : 'Corporate Role'}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {isAr
                    ? 'بصفتها الشركة القابضة، تقوم مكامن السعودية بدور المالك الرئيسي والمظلة المؤسسية لجميع الكيانات التابعة. تشرف على الحوكمة المؤسسية والتخطيط الاستراتيجي والرقابة المالية وإدارة العلاقات مع أصحاب المصلحة.'
                    : 'As the holding company, Saudi Makamin serves as the principal owner and corporate umbrella for all subsidiary entities. It oversees corporate governance, strategic planning, financial oversight, and stakeholder relations management.'}
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Link href="/about">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  {isAr ? 'نظرة عامة على المجموعة' : 'Group Overview'}
                  <ArrowRight className={`w-5 h-5 ${isAr ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  {isAr ? 'تواصل معنا' : 'Contact Us'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
