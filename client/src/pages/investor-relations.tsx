import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import { TrendingUp, DollarSign, Users, Building, Award, Download, ChevronRight } from 'lucide-react';
import HeroLogo from '@/components/hero-logo';

export default function InvestorRelations() {
  const { t, language } = useLanguageContext();

  const financialHighlights = [
    {
      metric: "Expected Revenue Growth — نمو الإيرادات المتوقع",
      metricAr: "نمو الإيرادات المتوقع — Expected Revenue Growth",
      value: "SAR 850M",
      change: "+23%",
      period: "2023"
    },
    {
      metric: "Expected Active Contracts — العقود النشطة المتوقعة",
      metricAr: "العقود النشطة المتوقعة — Expected Active Contracts",
      value: "45 Projects",
      change: "+15%",
      period: "Current"
    },
    {
      metric: "Upcoming Market Share — الحصة السوقية القادمة",
      metricAr: "الحصة السوقية القادمة — Upcoming Market Share",
      value: "18%",
      change: "+23%",
      period: "Regional"
    },
    {
      metric: "Authorized Capital",
      metricAr: "رأس المال المصرح",
      value: "SAR 1.2 Billion",
      change: "+15%",
      period: "2024"
    }
  ];

  const boardMembers = [
    {
      name: "Abdullah Al-Rashid",
      nameAr: "عبد الله الراشد",
      position: "Chairman of the Board",
      positionAr: "رئيس مجلس الإدارة",
      experience: "25+ years in energy sector",
      experienceAr: "أكثر من 25 سنة في قطاع الطاقة"
    },
    {
      name: "Mohammed Al-Ghamdi",
      nameAr: "محمد الغامدي",
      position: "Chief Executive Officer",
      positionAr: "الرئيس التنفيذي",
      experience: "20+ years in oil & gas",
      experienceAr: "أكثر من 20 سنة في النفط والغاز"
    },
    {
      name: "Sarah Al-Mutairi",
      nameAr: "سارة المطيري",
      position: "Chief Financial Officer",
      positionAr: "الرئيس المالي",
      experience: "15+ years in corporate finance",
      experienceAr: "أكثر من 15 سنة في التمويل المؤسسي"
    }
  ];

  const ipoReadiness = [
    {
      indicator: "Financial Audits",
      indicatorAr: "المراجعة المالية",
      status: "Completed",
      statusAr: "مكتمل",
      description: "Independent financial audits by Big 4 firms"
    },
    {
      indicator: "Governance Structure",
      indicatorAr: "هيكل الحوكمة",
      status: "Implemented",
      statusAr: "مطبق",
      description: "Board independence and committee structure"
    },
    {
      indicator: "Regulatory Compliance",
      indicatorAr: "الامتثال التنظيمي",
      status: "Verified",
      statusAr: "مُتحقق",
      description: "Full compliance with CMA regulations"
    },
    {
      indicator: "Market Positioning",
      indicatorAr: "التموضع السوقي",
      status: "Strategic",
      statusAr: "استراتيجي",
      description: "Leading position in Saudi energy services"
    }
  ];

  const reports = [
    {
      title: "Annual Report 2023",
      titleAr: "التقرير السنوي 2023",
      type: "Annual",
      date: "March 2024",
      size: "2.3 MB"
    },
    {
      title: "Q4 2023 Financial Results",
      titleAr: "النتائج المالية الربع الرابع 2023",
      type: "Quarterly",
      date: "January 2024",
      size: "1.8 MB"
    },
    {
      title: "Corporate Governance Report",
      titleAr: "تقرير الحوكمة المؤسسية",
      type: "Governance",
      date: "February 2024",
      size: "1.2 MB"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 overflow-hidden">
        {/* Enhanced Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>
        
        {/* Premium Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
              {language === 'ar' ? 'علاقات المستثمرين' : 'Investor Relations'}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
              {language === 'ar' ? 'نحن ملتزمون بتوفير الشفافية والمعلومات المالية لمستثمرينا' : 'Committed to transparency and providing financial information to our investors'}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 shadow-lg font-semibold px-8 py-4 text-lg">
                {language === 'ar' ? 'تحميل التقرير السنوي' : 'Download Annual Report'}
                <Download className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 shadow-lg font-semibold px-8 py-4 text-lg transition-all duration-300">
                {language === 'ar' ? 'عرض النتائج المالية' : 'View Financial Results'}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'الأداء المالي' : 'Financial Performance'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'نتائج مالية قوية تعكس أداء الشركة المتميز' : 'Strong financial results reflecting exceptional company performance'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financialHighlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-makamin-blue/10 p-3 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-makamin-blue" />
                    </div>
                    <Badge variant="secondary" className="text-green-600 bg-green-50 font-bold text-sm">
                      {highlight.change}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                    {language === 'ar' ? highlight.metricAr : highlight.metric}
                  </h3>
                  <div className="text-2xl font-bold text-makamin-blue mb-1">
                    {highlight.value}
                  </div>
                  <p className="text-sm text-gray-500">{highlight.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'مجلس الإدارة' : 'Board of Directors'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'قيادة متمرسة مع خبرة واسعة في الصناعة' : 'Experienced leadership with extensive industry expertise'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-makamin-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-makamin-blue" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {language === 'ar' ? member.nameAr : member.name}
                  </CardTitle>
                  <p className="text-makamin-blue font-medium">
                    {language === 'ar' ? member.positionAr : member.position}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {language === 'ar' ? member.experienceAr : member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IPO Readiness */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'الاستعداد للطرح العام' : 'IPO Readiness'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'مؤشرات الاستعداد للطرح في السوق المالية السعودية' : 'Readiness indicators for Saudi capital market listing'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ipoReadiness.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {language === 'ar' ? item.indicatorAr : item.indicator}
                    </h3>
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      {language === 'ar' ? item.statusAr : item.status}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reports & Downloads */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'التقارير والوثائق' : 'Reports & Documents'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 'تحميل التقارير المالية والوثائق المؤسسية' : 'Download financial reports and corporate documents'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-makamin-blue/10 p-3 rounded-lg">
                      <Download className="h-6 w-6 text-makamin-blue" />
                    </div>
                    <Badge variant="outline">{report.type}</Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {language === 'ar' ? report.titleAr : report.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{report.date}</span>
                    <span>{report.size}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    {language === 'ar' ? 'تحميل' : 'Download'}
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-makamin-blue text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'ar' ? 'تواصل مع فريق علاقات المستثمرين' : 'Contact Investor Relations Team'}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {language === 'ar' ? 'لأي استفسارات أو طلبات معلومات إضافية' : 'For inquiries or additional information requests'}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 shadow-lg font-semibold px-8 py-4 border-2 border-white">
              {language === 'ar' ? 'البريد الإلكتروني' : 'Email Us'}
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 shadow-lg font-semibold px-8 py-4 transition-all duration-300">
              {language === 'ar' ? 'اتصل بنا' : 'Call Us'}
            </Button>
          </div>
        </div>
      </section>

      {/* الشعار موجود في Header - بدون تكرار */}
    </div>
  );
}