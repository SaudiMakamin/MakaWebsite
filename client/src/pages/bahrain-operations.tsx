import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import { Globe, TrendingUp, Building, Users, ArrowRight, CheckCircle, DollarSign } from 'lucide-react';
import inspectionOperationsPath from '@assets/IMG-20250710-WA0020_1752529906172.jpg';
import heroCarouselPath from '@assets/hero-carousel-1_1752529906169.jpg';

export default function BahrainOperations() {
  const { t, language } = useLanguageContext();

  const services = [
    {
      icon: Globe,
      title: "International Partnerships",
      titleAr: "الشراكات الدولية",
      description: "Strategic partnerships with global energy companies",
      descriptionAr: "شراكات استراتيجية مع شركات الطاقة العالمية",
      features: ["Joint ventures", "Technology transfer", "Market expansion", "Risk sharing"]
    },
    {
      icon: TrendingUp,
      title: "Investment Management",
      titleAr: "إدارة الاستثمارات",
      description: "Professional management of energy sector investments",
      descriptionAr: "إدارة مهنية لاستثمارات قطاع الطاقة",
      features: ["Portfolio management", "Risk assessment", "Due diligence", "Return optimization"]
    },
    {
      icon: Building,
      title: "Regional Operations",
      titleAr: "العمليات الإقليمية",
      description: "Regional hub for GCC energy services coordination",
      descriptionAr: "مركز إقليمي لتنسيق خدمات الطاقة في دول الخليج",
      features: ["Regional coordination", "Market intelligence", "Regulatory compliance", "Business development"]
    }
  ];

  const partnerships = [
    {
      partner: "Gulf Energy Consortium",
      partnerAr: "اتحاد طاقة الخليج",
      type: "Strategic Alliance",
      typeAr: "تحالف استراتيجي",
      focus: "Offshore operations",
      focusAr: "العمليات البحرية",
      year: "2022"
    },
    {
      partner: "Regional Maritime Services",
      partnerAr: "خدمات بحرية إقليمية",
      type: "Joint Venture",
      typeAr: "مشروع مشترك",
      focus: "Marine logistics",
      focusAr: "الخدمات اللوجستية البحرية",
      year: "2023"
    },
    {
      partner: "Bahrain Investment Authority",
      partnerAr: "هيئة الاستثمار البحرينية",
      type: "Investment Partnership",
      typeAr: "شراكة استثمارية",
      focus: "Energy infrastructure",
      focusAr: "البنية التحتية للطاقة",
      year: "2024"
    }
  ];

  const investments = [
    {
      sector: "Offshore Technology",
      sectorAr: "تقنيات بحرية",
      amount: "$50M",
      status: "Active",
      statusAr: "نشط",
      description: "Advanced drilling technology investment"
    },
    {
      sector: "Green Energy",
      sectorAr: "الطاقة الخضراء",
      amount: "$30M",
      status: "Pipeline",
      statusAr: "قيد التطوير",
      description: "Renewable energy project development"
    },
    {
      sector: "Digital Solutions",
      sectorAr: "الحلول الرقمية",
      amount: "$25M",
      status: "Completed",
      statusAr: "مكتمل",
      description: "AI-powered operational systems"
    }
  ];

  const stats = [
    { value: "$125M", label: "Assets Under Management", labelAr: "الأصول المدارة" },
    { value: "15+", label: "Active Partnerships", labelAr: "الشراكات النشطة" },
    { value: "8", label: "Countries", labelAr: "دولة" },
    { value: "25%", label: "ROI Average", labelAr: "متوسط العائد" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SemanticMetadata page="services" />
      <EnhancedSecurity />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={inspectionOperationsPath} 
            alt="Makamin Bahrain Operations" 
            className="w-full h-full object-cover opacity-30"
          />
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
                  {language === 'ar' ? 'مكامن البحرين' : 'Makamin Bahrain'}
                </h1>
                <p className="text-xl text-blue-100">
                  {language === 'ar' ? 'الذراع الاستثماري والتجاري الإقليمي' : 'Regional investment and commercial arm'}
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-300 mb-2">{stat.value}</div>
                  <p className="text-blue-100 text-sm">{language === 'ar' ? stat.labelAr : stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'خدماتنا الاستثمارية' : 'Our Investment Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' ? 'نقدم خدمات استثمارية متخصصة لتطوير قطاع الطاقة في المنطقة' : 'Specialized investment services for energy sector development in the region'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {language === 'ar' ? service.titleAr : service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {language === 'ar' ? service.descriptionAr : service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'شراكاتنا الاستراتيجية' : 'Strategic Partnerships'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'شراكات قوية مع رواد الصناعة في المنطقة' : 'Strong partnerships with industry leaders in the region'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge variant="secondary">{partnership.year}</Badge>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {language === 'ar' ? partnership.partnerAr : partnership.partner}
                  </h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {language === 'ar' ? partnership.typeAr : partnership.type}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {language === 'ar' ? partnership.focusAr : partnership.focus}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'محفظة الاستثمارات' : 'Investment Portfolio'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'استثمارات متنوعة في قطاعات الطاقة المتقدمة' : 'Diversified investments in advanced energy sectors'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {investments.map((investment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-cyan-50 p-3 rounded-lg">
                      <DollarSign className="h-6 w-6 text-cyan-600" />
                    </div>
                    <Badge variant={investment.status === 'Active' ? 'default' : 
                                   investment.status === 'Completed' ? 'secondary' : 'outline'}>
                      {language === 'ar' ? investment.statusAr : investment.status}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {language === 'ar' ? investment.sectorAr : investment.sector}
                  </h3>
                  <div className="text-2xl font-bold text-cyan-600 mb-2">
                    {investment.amount}
                  </div>
                  <p className="text-gray-600 text-sm">
                    {investment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Presence */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'الحضور الإقليمي' : 'Regional Presence'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'نشاط في أسواق الطاقة الرئيسية في المنطقة' : 'Active in major energy markets across the region'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 'Oman', 'Bahrain', 'Iraq', 'Jordan'].map((country, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <p className="font-medium text-gray-900">{country}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'شريكك الاستثماري في المنطقة' : 'Your Regional Investment Partner'}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {language === 'ar' ? 'نقدم فرص استثمارية متميزة مع عوائد مستدامة في قطاع الطاقة' : 'Exceptional investment opportunities with sustainable returns in the energy sector'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 dark:text-blue-600 font-bold px-8 py-4 shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white"
              asChild
            >
              <a href="/contact" className="flex items-center text-blue-600 dark:text-blue-600 no-underline">
                {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 dark:hover:text-blue-600 font-bold px-8 py-4 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#projects" className="flex items-center text-white hover:text-blue-600 dark:hover:text-blue-600 no-underline">
                <ArrowRight className="w-5 h-5 mr-2" />
                {language === 'ar' ? 'استكشف مشاريعنا' : 'Discover Our Projects'}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* الشعار موجود في Header - بدون تكرار */}
    </div>
  );
}