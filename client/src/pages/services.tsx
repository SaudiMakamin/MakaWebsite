import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench, Drill, FlaskConical, Search, Cpu, Package, UserCheck, Anchor, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import heroCarouselPath from '@assets/hero-carousel-1_1752529906169.jpg';
import HeroLogo from '@/components/hero-logo';
import { Link } from 'wouter';

export default function Services() {
  const { language } = useLanguageContext();

  const services = [
    {
      icon: Wrench,
      title: 'Pipeline & Industrial Services',
      titleAr: 'خدمات الأنابيب والصناعة',
      description: 'Pipeline construction, utility installations, EPC contracts, specialized installations, and maintenance services.',
      descriptionAr: 'بناء خطوط الأنابيب، تركيبات المرافق، عقود الهندسة والمشتريات والبناء، التركيبات المتخصصة، وخدمات الصيانة.',
      path: '/services/pipeline-industrial',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Drill,
      title: 'Drilling Services',
      titleAr: 'خدمات الحفر',
      description: 'Workover services, deep water drilling, specialized drilling techniques, and real-time well monitoring.',
      descriptionAr: 'خدمات إعادة العمل، حفر المياه العميقة، تقنيات الحفر المتخصصة، ومراقبة الآبار في الوقت الفعلي.',
      path: '/services/drilling',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FlaskConical,
      title: 'Geoscience Services',
      titleAr: 'خدمات علوم الأرض',
      description: 'Geological and geophysical studies, core analysis, digital data services, and seismic monitoring.',
      descriptionAr: 'الدراسات الجيولوجية والجيوفيزيائية، تحليل العينات الصخرية، خدمات البيانات الرقمية، والرصد الزلزالي.',
      path: '/services/geoscience',
      color: 'from-emerald-500 to-green-500',
    },
    {
      icon: Search,
      title: 'Industrial Inspection Services',
      titleAr: 'خدمات التفتيش الصناعي',
      description: 'Non-destructive testing, advanced NDT, positive material identification, and corrosion monitoring.',
      descriptionAr: 'الاختبارات غير الإتلافية، الاختبارات المتقدمة، تحديد المواد الإيجابي، ومراقبة التآكل.',
      path: '/services/industrial-inspection',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Cpu,
      title: 'ZENCUS Technology Services',
      titleAr: 'خدمات زينكوس التقنية',
      description: 'Real-time field monitoring, wireless data acquisition, data visualization, and security surveillance.',
      descriptionAr: 'مراقبة الحقول في الوقت الفعلي، اكتساب البيانات اللاسلكية، تصور البيانات، والمراقبة الأمنية.',
      path: '/services/zencus',
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Anchor,
      title: 'Offshore Services',
      titleAr: 'الخدمات البحرية',
      description: 'Offshore operations and marine support services for oil and gas exploration, production, and subsea infrastructure.',
      descriptionAr: 'عمليات بحرية وخدمات دعم بحري لاستكشاف وإنتاج النفط والغاز والبنية التحتية تحت البحر.',
      path: '/services/offshore',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Package,
      title: 'Supply Chain Services',
      titleAr: 'خدمات سلسلة الإمداد',
      description: 'Procurement and vendor management, material supply, quality inspection, and logistics support.',
      descriptionAr: 'إدارة المشتريات والموردين، توريد المواد، فحص الجودة، والدعم اللوجستي.',
      path: '/services/supply-chain',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: UserCheck,
      title: 'Technical Staffing Services',
      titleAr: 'خدمات التوظيف التقني',
      description: 'Workforce supply, recruitment services, and HR logistics support across oil & gas and related industries.',
      descriptionAr: 'توفير القوى العاملة، خدمات التوظيف، والدعم اللوجستي للموارد البشرية في قطاعات النفط والغاز والصناعات ذات الصلة.',
      path: '/services/technical-staffing',
      color: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <div className="min-h-screen">
      <SemanticMetadata page="services" />

      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroCarouselPath}
            alt="Makamin Services"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              {language === 'ar' ? 'نظرة عامة على الخدمات' : 'Services Overview'}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >
              {language === 'ar'
                ? 'تقدم مكامن السعودية خدمات نفط وغاز متكاملة تشمل عمليات المنبع، الخدمات الصناعية، تقنيات التفتيش، والدعم التقني.'
                : 'Saudi Makamin provides integrated oil and gas services covering upstream operations, industrial services, inspection technologies, and technical support.'}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {language === 'ar' ? 'خدماتنا الأساسية' : 'Our Core Services'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.path}>
                  <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group border-slate-200 hover:border-blue-300">
                    <CardContent className="p-6">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} mb-5`}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {language === 'ar' ? service.titleAr : service.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {language === 'ar' ? service.descriptionAr : service.description}
                      </p>
                      <div className="flex items-center text-blue-600 text-sm font-medium group-hover:gap-2 transition-all">
                        <span>{language === 'ar' ? 'المزيد' : 'Learn More'}</span>
                        <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'mr-1 rotate-180' : 'ml-1'}`} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
            >
              <p className="text-slate-700 leading-relaxed text-lg">
                {language === 'ar'
                  ? 'تقدم مكامن حلول نفط وغاز شاملة تشمل بناء خطوط الأنابيب، عمليات الحفر، دراسات علوم الأرض، التفتيش الصناعي، تقنيات المراقبة في الوقت الفعلي، إدارة سلسلة الإمداد، ودعم التوظيف التقني.'
                  : 'Makamin delivers comprehensive oil and gas solutions including pipeline construction, drilling operations, geoscience studies, industrial inspection, real-time monitoring technologies, supply chain management, and technical staffing support.'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
