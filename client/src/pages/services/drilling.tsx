import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import { Drill, Droplets, Mountain, Monitor, Factory, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';
import drillingRigPath from '@assets/hero-carousel-2_1752874787607.jpg';
import HeroLogo from '@/components/hero-logo';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export default function DrillingServices() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';

  const sections = [
    {
      icon: Drill,
      title: "Drilling Operations",
      titleAr: "عمليات الحفر",
      items: [
        { en: "Workover Services", ar: "خدمات إعادة العمل" },
        { en: "Deep Water Drilling", ar: "الحفر في المياه العميقة" },
        { en: "Top Hole Drilling", ar: "حفر الجزء العلوي" },
        { en: "Water Well Drilling", ar: "حفر آبار المياه" },
      ]
    },
    {
      icon: Mountain,
      title: "Specialized Drilling",
      titleAr: "الحفر المتخصص",
      items: [
        { en: "Micro Seismic Drilling", ar: "الحفر الزلزالي الدقيق" },
        { en: "Vertical Seismic Profiling (VSP)", ar: "التنميط الزلزالي العمودي (VSP)" },
        { en: "Reverse Circulation Drilling", ar: "الحفر بالتداول العكسي" },
        { en: "Core Drilling (Mud / Air)", ar: "الحفر اللبابي (طين / هواء)" },
      ]
    },
    {
      icon: Droplets,
      title: "Additional Drilling Services",
      titleAr: "خدمات حفر إضافية",
      items: [
        { en: "Oil Well Workover", ar: "إعادة عمل آبار النفط" },
        { en: "Shallow Water Well Drilling", ar: "حفر آبار المياه الضحلة" },
        { en: "Water Well Rehabilitation", ar: "إعادة تأهيل آبار المياه" },
        { en: "Soil Testing", ar: "اختبار التربة" },
        { en: "Pile Drilling", ar: "حفر الركائز" },
        { en: "Auger Drilling", ar: "الحفر بالمثقاب" },
      ]
    },
    {
      icon: Monitor,
      title: "Monitoring & Technology",
      titleAr: "المراقبة والتقنية",
      items: [
        { en: "Real-time Well Monitoring", ar: "مراقبة الآبار في الوقت الحقيقي" },
        { en: "Remote Drilling Operation Monitoring", ar: "مراقبة عمليات الحفر عن بُعد" },
      ]
    },
    {
      icon: Factory,
      title: "Industries Served",
      titleAr: "القطاعات المخدومة",
      items: [
        { en: "Oil & Gas", ar: "النفط والغاز" },
        { en: "Civil Construction", ar: "البناء المدني" },
        { en: "Agriculture", ar: "الزراعة" },
        { en: "Mining", ar: "التعدين" },
      ]
    },
  ];

  return (
    <div className={`min-h-screen bg-slate-900 ${isAr ? 'rtl' : 'ltr'}`}>
      <SemanticMetadata
        page="services"
        title="Drilling Services | Saudi Makamin"
        description="Drilling operations including reverse circulation, auger, pile drilling, VSP, and micro seismic services by Saudi Makamin."
      />
      <EnhancedSecurity />

      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={drillingRigPath}
            alt="Drilling Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeroLogo />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isAr ? "خدمات الحفر" : "Drilling Services"}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {isAr
                ? "تقنيات حفر متقدمة وحلول متكاملة للعمليات البرية والبحرية"
                : "Advanced drilling technology and wellbore solutions for upstream and downstream operations"}
            </p>
          </motion.div>
        </div>
      </section>

      <nav className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 text-sm text-gray-400">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              {isAr ? "الرئيسية" : "Home"}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-amber-400 transition-colors">
              {isAr ? "الخدمات" : "Services"}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-amber-400">
              {isAr ? "خدمات الحفر" : "Drilling Services"}
            </span>
          </div>
        </div>
      </nav>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="bg-slate-800 border-slate-700 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center">
                        <section.icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <h2 className="text-2xl font-bold text-white">
                        {isAr ? section.titleAr : section.title}
                      </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.items.map((item, i) => (
                        <motion.div
                          key={i}
                          variants={itemVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors"
                        >
                          <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                          <span className="text-gray-200">
                            {isAr ? item.ar : item.en}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/services">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg transition-colors cursor-pointer"
            >
              {isAr ? "العودة إلى جميع الخدمات" : "Back to All Services"}
            </motion.span>
          </Link>
        </div>
      </section>
    </div>
  );
}