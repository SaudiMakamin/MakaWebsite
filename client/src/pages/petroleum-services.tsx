import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import { Drill, Users, Award, TrendingUp, ArrowRight, CheckCircle, Target } from 'lucide-react';
import drillingRigPath from '@assets/hero-carousel-2_1752874787607.jpg';
import processingFacilityPath from '@assets/IMG-20250710-WA0012_1752529906171.jpg';
import heroCarouselPath from '@assets/hero-carousel-1_1752529906169.jpg';
import HeroLogo from '@/components/hero-logo';

export default function PetroleumServices() {
  const { t, language } = useLanguageContext();

  const services = [
    {
      icon: Drill,
      title: "Core Drilling Operations",
      titleAr: "عمليات الحفر الأساسية",
      description: "Advanced drilling technology for upstream oil & gas operations",
      descriptionAr: "تقنيات الحفر المتقدمة لعمليات النفط والغاز في المنبع",
      features: ["Rotary drilling", "Directional drilling", "Horizontal drilling", "Well completion"]
    },
    {
      icon: Target,
      title: "Well Intervention",
      titleAr: "التدخل في الآبار",
      description: "Comprehensive well intervention and workover services",
      descriptionAr: "خدمات شاملة للتدخل في الآبار وإعادة العمل",
      features: ["Coiled tubing", "Wireline services", "Snubbing operations", "Well testing"]
    },
    {
      icon: CheckCircle,
      title: "Cementing Services",
      titleAr: "خدمات الإسمنت",
      description: "Professional cementing and completion services",
      descriptionAr: "خدمات الإسمنت والإكمال المهنية",
      features: ["Primary cementing", "Squeeze cementing", "Plug & abandonment", "Specialty cementing"]
    }
  ];

  const projects = [
    {
      title: "Aramco Drilling Contract",
      titleAr: "عقد حفر أرامكو",
      location: "Eastern Province",
      locationAr: "المنطقة الشرقية",
      status: "Completed",
      statusAr: "مكتمل",
      value: "SAR 120M",
      year: "2023"
    },
    {
      title: "Onshore Well Intervention",
      titleAr: "التدخل في الآبار البرية",
      location: "Ghawar Field",
      locationAr: "حقل الغوار",
      status: "Ongoing",
      statusAr: "جاري",
      value: "SAR 85M",
      year: "2024"
    }
  ];

  const stats = [
    { value: "150+", label: "Wells Drilled", labelAr: "آبار محفورة" },
    { value: "98%", label: "Success Rate", labelAr: "معدل النجاح" },
    { value: "Zero", label: "LTA Record", labelAr: "سجل الحوادث" },
    { value: "15+", label: "Years Experience", labelAr: "سنة خبرة" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SemanticMetadata page="services" />
      <EnhancedSecurity />
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={drillingRigPath} 
            alt="Makamin Offshore Operations" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-purple-900/40"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mr-4">
                <Drill className="w-12 h-12 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  {language === 'ar' ? 'مكامن للخدمات البترولية' : 'Makamin Petroleum Services'}
                </h1>
                <p className="text-2xl md:text-3xl text-white font-bold mb-4 leading-relaxed">
                  {language === 'ar' ? 
                    'مكامن السعودية — قوة بـ 1.2 مليار ريال سعودي تشكل مستقبل الطاقة من خلال الابتكار والشراكات العالمية' :
                    <><span className="whitespace-nowrap">Saudi Makamin</span> — A 1.2 Billion SAR Powerhouse Shaping the Future of Energy Through Innovation and Global Partnerships</>
                  }
                </p>
                <p className="text-xl text-orange-100">
                  {language === 'ar' ? 'رائد الخدمات البترولية في المملكة' : 'Leading petroleum services in Saudi Arabia'}
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-center border border-white/10 shadow-lg">
                  <div className="text-3xl font-bold text-white mb-2 drop-shadow-md">{stat.value}</div>
                  <p className="text-white/90 text-sm font-medium">{language === 'ar' ? stat.labelAr : stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Branch Manager Information Section */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-gray-100 border-y-2 border-makamin-gold/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-makamin-gold to-yellow-500 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {language === 'ar' ? 'الإدارة والمسؤولية' : 'Management & Responsibility'}
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-1">
                    {language === 'ar' ? 'رقم السجل التجاري' : 'Commercial Registration Number'}
                  </h4>
                  <p className="text-lg font-bold text-makamin-blue">2050048513 – Dammam (Branch)</p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-1">
                    {language === 'ar' ? 'المنصب' : 'Position'}
                  </h4>
                  <p className="text-lg font-semibold text-gray-800">
                    {language === 'ar' ? 'مدير الفرع والمسؤول التنفيذي' : 'Branch Manager and Responsible Officer'}
                  </p>
                  <p className="text-lg font-bold text-makamin-gold">CEO</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-makamin-blue/5 to-makamin-gold/5 rounded-lg p-4 border border-makamin-gold/20">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">
                    {language === 'ar' ? 'المدير' : 'Manager'}
                  </h4>
                  <p className="text-2xl font-bold text-makamin-blue mb-2">
                    Majed Abdullah Haza'a Al-Shanbari
                  </p>
                  <p className="text-xl font-semibold text-gray-800 mb-1" style={{ fontSize: '1.5rem', lineHeight: '1.2' }}>
                    ماجد عبدالله هزاع الشنبري
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-gray-600 mb-1">
                    {language === 'ar' ? 'تاريخ التعيين' : 'Date of Appointment'}
                  </h4>
                  <p className="text-lg font-bold text-green-700">
                    March 29, 2017 – Present
                  </p>
                  <p className="text-lg font-semibold text-gray-700">
                    29 مارس 2017 - حتى الآن
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' ? 'نقدم خدمات شاملة لصناعة النفط والغاز مع التركيز على الجودة والسلامة' : 'Comprehensive oil & gas services with focus on quality and safety'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
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
                        <CheckCircle className="w-4 h-4 mr-2 text-orange-500" />
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

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'مشاريعنا الرئيسية' : 'Major Projects'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'مشاريع استراتيجية مع شركاء رائدين' : 'Strategic projects with leading partners'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {language === 'ar' ? project.titleAr : project.title}
                      </h3>
                      <p className="text-gray-600">
                        {language === 'ar' ? project.locationAr : project.location}
                      </p>
                    </div>
                    <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                      {language === 'ar' ? project.statusAr : project.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-orange-600">{project.value}</div>
                    <div className="text-gray-500">{project.year}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'شريكك في النجاح' : 'Your Partner in Success'}
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            {language === 'ar' ? 'نقدم حلول متكاملة لصناعة النفط والغاز بأعلى معايير الجودة والسلامة' : 'Comprehensive solutions for oil & gas industry with highest quality and safety standards'}
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
              <a href="#projects" className="flex items-center text-white hover:text-orange-600 dark:hover:text-orange-600 no-underline">
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