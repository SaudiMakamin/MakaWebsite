import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import { Link } from 'wouter';
import { Building2, Drill, Cpu, Anchor, ArrowRight } from 'lucide-react';
import heroPath from '@assets/hero-carousel-1_1752529906169.jpg';

export default function GroupOverview() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';

  const entities = [
    {
      icon: Building2,
      name: "Makamin Holding for Oil & Gas",
      nameAr: "مكامن القابضة للنفط والغاز",
      role: "Parent Company & Corporate Umbrella",
      roleAr: "الشركة الأم والمظلة المؤسسية",
      path: "/makamin-holding",
    },
    {
      icon: Drill,
      name: "Makamin Petroleum Services Company",
      nameAr: "شركة مكامن للخدمات البترولية",
      role: "Primary Operating Entity (90% + 10%)",
      roleAr: "الكيان التشغيلي الرئيسي (90% + 10%)",
      path: "/petroleum-services",
    },
    {
      icon: Cpu,
      name: "ZENCUS International Ltd",
      nameAr: "زينكوس الدولية المحدودة",
      role: "Technology Subsidiary (51%)",
      roleAr: "شركة تقنية تابعة (51%)",
      path: "/zencus-international",
    },
    {
      icon: Anchor,
      name: "Makamin Offshore Saudi Ltd",
      nameAr: "مكامن البحرية السعودية المحدودة",
      role: "Marine Entity (51%)",
      roleAr: "كيان بحري (51%)",
      path: "/offshore-operations",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir={isAr ? 'rtl' : 'ltr'}>
      <SemanticMetadata
        page="about"
        title="Group Overview | Saudi Makamin"
        description="Overview of the Makamin Group corporate structure — Makamin Holding, Makamin Petroleum Services, ZENCUS International, and Makamin Offshore Saudi."
      />
      <EnhancedSecurity />

      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroPath} alt="Makamin Group" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-blue-900/65 to-slate-900/85"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isAr ? 'نظرة عامة على المجموعة' : 'Group Overview'}
            </h1>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              {isAr
                ? 'مجموعة مكامن السعودية — هيكل مؤسسي متكامل يخدم قطاع النفط والغاز'
                : 'Saudi Makamin Group — an integrated corporate structure serving the oil and gas sector'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-10">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-100 text-blue-800 border-blue-200">
                  {isAr ? 'الهيكل المؤسسي' : 'Corporate Structure'}
                </Badge>
                <CardTitle className="text-2xl">
                  {isAr ? 'شركة مكامن السعودية القابضة لخدمات النفط والغاز' : 'Saudi Makamin Holding Company for Oil & Gas Services'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {isAr
                    ? 'تأسست مجموعة مكامن عام 2008 برأس مال 1.2 مليار ريال سعودي. تعمل المجموعة من خلال شركاتها التابعة والزميلة في تقديم خدمات متكاملة لقطاع النفط والغاز، تشمل الخدمات البترولية والحلول التقنية والعمليات البحرية.'
                    : 'The Makamin Group was established in 2008 with a capital of SAR 1.2 billion. The group operates through its subsidiaries and affiliates to deliver integrated services for the oil and gas sector, including petroleum services, technology solutions, and offshore operations.'}
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {isAr ? 'الكيانات الرئيسية' : 'Main Entities'}
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {entities.map((entity, i) => {
                const Icon = entity.icon;
                return (
                  <Link key={i} href={entity.path}>
                    <Card className="h-full hover:shadow-lg hover:border-blue-300 transition-all cursor-pointer">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                            <Icon className="w-6 h-6 text-blue-700" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {isAr ? entity.nameAr : entity.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {isAr ? entity.roleAr : entity.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  {isAr ? 'الخدمات التشغيلية' : 'Operational Services'}
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
