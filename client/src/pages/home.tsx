import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { Drill, Ship, ArrowRight, Target, Users, Globe, Eye, Wrench, TrendingUp, Activity, Cpu, Anchor, Search as SearchIcon } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguageContext } from '@/components/language-provider';
import CinematicHeroVideo from '@/components/cinematic-hero-video';
import GlobalPartnersSlider from '@/components/global-partners-slider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import aramcoLogo from '@assets/Saudi_Aramco_logo_1773268826426.png';
import offshoreLogo from '@assets/Makamin-Offshore-Saudi-MOS_1773268826426.png';
import energyHouseLogo from '@assets/Energy House Holding_1752769769299.jpg';
import alDorraLogo from '@assets/Al-Dorra Petroleum Services_1752769769298.jpg';
import binTamiLogo from '@assets/Bin Tami Holding_1752769769299.jpg';
import multaqaLogo from '@assets/multaqa_1752840945634.png';
import ajlanBrosLogo from '@assets/Ajlan & Bros Holding_1752769769297.png';
import alBiladLogo from '@assets/Al Bilad Group_1752769769298.jpg';
import HeroLogo from '@/components/hero-logo';

export default function Home() {
  const { language } = useLanguageContext();
  const servicesRef = useRef<HTMLDivElement>(null);
  const isServicesInView = useInView(servicesRef, { once: true });

  const coreServices = [
    {
      icon: Wrench,
      title: language === 'ar' ? 'البنية التحتية لخطوط الأنابيب' : 'Pipeline Infrastructure',
      description: language === 'ar' ? 'بناء وصيانة خطوط الأنابيب — ربط، استبدال، تأهيل وتركيب' : 'Pipeline construction & maintenance — tie-ins, replacements, rehabilitation, and RTR installations',
      href: '/services/pipeline-industrial',
      color: 'from-[#003f6a] to-[#0a5a8a]',
      iconBg: 'bg-[#003f6a]/10'
    },
    {
      icon: Drill,
      title: language === 'ar' ? 'عمليات الحفر' : 'Drilling Operations',
      description: language === 'ar' ? 'خدمات حفر متقدمة — حفر الآبار والصيانة وأعمال التدخل' : 'Advanced drilling services — well drilling, workover, and intervention operations',
      href: '/services/drilling',
      color: 'from-[#b72b2b] to-[#d44040]',
      iconBg: 'bg-[#b72b2b]/10'
    },
    {
      icon: Eye,
      title: language === 'ar' ? 'الفحص الصناعي' : 'Industrial Inspection',
      description: language === 'ar' ? 'خدمات الفحص والاختبار غير الإتلافي — ضمان الجودة والسلامة' : 'NDT inspection and testing — quality assurance and safety compliance',
      href: '/services/industrial-inspection',
      color: 'from-[#c5a66e] to-[#d4b87e]',
      iconBg: 'bg-[#c5a66e]/10'
    },
    {
      icon: Anchor,
      title: language === 'ar' ? 'الخدمات البحرية' : 'Offshore Services',
      description: language === 'ar' ? 'عمليات بحرية متكاملة — تأجير السفن، خدمات الغوص، والدعم البحري' : 'Integrated marine operations — vessel chartering, diving services, and marine support',
      href: '/services/offshore',
      color: 'from-[#003f6a] to-[#1a6fa0]',
      iconBg: 'bg-blue-50'
    },
    {
      icon: Cpu,
      title: language === 'ar' ? 'حلول الطاقة الرقمية' : 'Digital Energy Solutions',
      description: language === 'ar' ? 'مراقبة لاسلكية للآبار، أنظمة SCADA، وحلول إنترنت الأشياء الصناعية' : 'Wireless well monitoring, SCADA systems, and industrial IoT solutions',
      href: '/services/zencus',
      color: 'from-[#0a5a8a] to-[#2a8aba]',
      iconBg: 'bg-cyan-50'
    }
  ];

  const strengthCards = [
    {
      icon: Target,
      logoSrc: aramcoLogo,
      logoAlt: 'Saudi Aramco',
      title: language === 'ar' ? 'تنفيذ مشاريع أرامكو' : 'Aramco Project Execution',
      desc: language === 'ar' ? 'سجل حافل في تنفيذ مشاريع أرامكو السعودية عبر قطاعات متعددة' : 'Proven track record executing Saudi Aramco projects across multiple sectors',
      href: '/projects/aramco'
    },
    {
      icon: Ship,
      logoSrc: offshoreLogo,
      logoAlt: 'Makamin Offshore Saudi',
      title: language === 'ar' ? 'العمليات البحرية' : 'Offshore Operations',
      desc: language === 'ar' ? 'أسطول بحري وقدرات بحرية متكاملة — تأجير وخدمات غوص ودعم بحري' : 'Marine fleet and integrated offshore capabilities — chartering, diving, and marine support',
      href: '/projects/offshore'
    },
    {
      icon: Cpu,
      title: language === 'ar' ? 'القدرات الرقمية الميدانية' : 'Digital Field Capability',
      desc: language === 'ar' ? 'تقنيات ZENCUS — مراقبة لاسلكية، SCADA، وحلول إنترنت الأشياء للحقول' : 'ZENCUS technologies — wireless monitoring, SCADA, and oilfield IoT solutions',
      href: '/projects/zencus'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'قوة المساهمين الاستراتيجيين' : 'Strategic Shareholder Strength',
      desc: language === 'ar' ? 'قاعدة مساهمين مؤسسيين تدعم النمو والتوسع الاستراتيجي' : 'Institutional shareholder base supporting strategic growth and expansion',
      href: '/group'
    }
  ];

  return (
    <div className="min-h-screen">
      <SemanticMetadata page="home" />
      <EnhancedSecurity />
      
      <CinematicHeroVideo />

      {/* Our Core Energy Services */}
      <section ref={servicesRef} className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <HeroLogo size="md" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'خدمات الطاقة الأساسية' : 'Our Core Energy Services'}
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' ? 
                'حلول متكاملة عبر خطوط الأنابيب والحفر والفحص والعمليات البحرية والرقابة الرقمية' :
                'Integrated solutions across pipeline, drilling, inspection, offshore operations, and digital monitoring'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Link href={service.href}>
                  <Card className="h-full cursor-pointer group hover:shadow-2xl transition-all duration-500 border border-gray-100 shadow-md overflow-hidden">
                    <CardContent className="p-6 text-center relative">
                      <div className={`w-14 h-14 mx-auto ${service.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-7 h-7 text-[#003f6a] group-hover:text-[#b72b2b] transition-colors duration-300" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-[#003f6a] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-center text-[#003f6a] group-hover:text-[#b72b2b] transition-colors">
                        <span className="text-xs font-medium mr-1">
                          {language === 'ar' ? 'المزيد' : 'Learn More'}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Operations Platform — repositioned from AI section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-[#003f6a]/80 to-slate-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {language === 'ar' ? 'منصة العمليات الرقمية' : 'Digital Operations Platform'}
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'ar' ? 
                'مراقبة متكاملة للمشاريع والإنتاج والعمليات الميدانية — مدعومة بتقنيات ZENCUS' :
                'Integrated monitoring for projects, production, and field operations — powered by ZENCUS technologies'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#c5a66e]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-[#c5a66e]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {language === 'ar' ? 'مراقبة الآبار اللاسلكية' : 'Wireless Well Monitoring'}
              </h3>
              <p className="text-gray-400 text-sm">
                {language === 'ar' ? 'بيانات حية من الحقول عبر شبكات ZENCUS اللاسلكية' : 'Real-time field data via ZENCUS wireless networks'}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {language === 'ar' ? 'أنظمة SCADA البعيدة' : 'Remote SCADA Systems'}
              </h3>
              <p className="text-gray-400 text-sm">
                {language === 'ar' ? 'مراقبة وتحكم عن بعد في العمليات الصناعية والإنتاجية' : 'Remote monitoring and control of industrial and production operations'}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <SearchIcon className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {language === 'ar' ? 'رؤية ميدانية متكاملة' : 'Integrated Field Visibility'}
              </h3>
              <p className="text-gray-400 text-sm">
                {language === 'ar' ? 'تكامل بيانات المشاريع والإنتاج والسلامة في منصة واحدة' : 'Consolidated project, production, and safety data in a single platform'}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-10"
          >
            <Link href="/projects/zencus">
              <Button variant="outline" className="border-[#c5a66e] text-[#c5a66e] hover:bg-[#c5a66e] hover:text-white font-semibold px-6 py-3">
                <Cpu className="w-4 h-4 mr-2" />
                {language === 'ar' ? 'استكشف مشاريع ZENCUS' : 'Explore ZENCUS Projects'}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Strategic Strength & Project Proof */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'القوة التنفيذية والقدرات' : 'Execution Strength & Capabilities'}
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' ? 
                'منصة طاقة متكاملة — بترول، بحري، فحص صناعي، ورقمي' :
                'An integrated energy platform — petroleum, offshore, inspection, and digital'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengthCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <Link href={card.href}>
                  <Card className="h-full cursor-pointer group hover:shadow-xl transition-all duration-300 border border-gray-200">
                    <CardContent className="p-6">
                      {card.logoSrc ? (
                        <img src={card.logoSrc} alt={card.logoAlt} className="h-10 w-auto mb-4 object-contain" loading="lazy" decoding="async" />
                      ) : (
                        <card.icon className="w-10 h-10 text-[#003f6a] mb-4 group-hover:text-[#c5a66e] transition-colors" />
                      )}
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#003f6a] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">
                        {card.desc}
                      </p>
                      <div className="flex items-center text-[#003f6a] group-hover:text-[#c5a66e] transition-colors text-sm font-medium">
                        {language === 'ar' ? 'عرض المزيد' : 'View Details'}
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Shareholders Section */}
      <section id="investors-section" className="py-20 sm:py-24 relative overflow-hidden text-white investors-section">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00172D] via-[#0A2B4F] to-[#012840] animate-gradient-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#012840] via-[#0A2B4F] to-[#00172D] animate-gradient-slow-reverse opacity-50"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {language === 'ar' ? 'المساهمون الاستراتيجيون' : 'Strategic Shareholders'}
            </h2>
            <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto">
              {language === 'ar' ? 
                'شركاء استراتيجيون آمنوا بإعادة انطلاقة مكامن في 2025' :
                'Strategic partners who believed in Makamin\'s relaunch in 2025'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 mb-12">
            {[
              { logo: energyHouseLogo, name: 'Energy House Holding', nameAr: 'بيت الطاقة القابضة', desc: 'Strategic Energy Sector Partner', descAr: 'شريك استراتيجي في قطاع الطاقة', href: 'https://energyhouse.com.kw/ar/home/', glow: 'green' },
              { logo: alDorraLogo, name: 'Al-Dorra Petroleum Services', nameAr: 'الدرة لخدمات النفط', desc: 'Oil Services Partner', descAr: 'شريك في الخدمات النفطية', href: 'https://www.aldorra.com/', glow: 'blue' },
              { logo: binTamiLogo, name: 'Bin Tami Holding', nameAr: 'بن طامي القابضة', desc: 'Leading Investment Group', descAr: 'مجموعة استثمارية رائدة', href: 'https://www.bintami.com/', glow: 'cyan' },
              { logo: ajlanBrosLogo, name: 'Ajlan & Bros Holding', nameAr: 'عجلان وأخوانه القابضة', desc: 'Established Investment Group', descAr: 'مجموعة استثمارية عريقة', href: 'https://ajlanbros-holding.com/ar/#', glow: 'amber' },
              { logo: alBiladLogo, name: 'Al Bilad Group', nameAr: 'مجموعة البلاد', desc: 'Local Development Partner', descAr: 'شريك تنموي محلي', href: 'https://albiladgroup.com/', glow: 'blue' },
              { logo: multaqaLogo, name: 'Multaqa Saudi Investment Company', nameAr: 'شركة الملتقى السعودية للاستثمار', desc: 'Pioneering platform driving innovation and investment', descAr: 'منصة رائدة في الابتكار والاستثمار', href: 'https://multaqa.sa', glow: 'emerald' }
            ].map((investor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="text-center"
              >
                <a 
                  href={investor.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  title={investor.desc}
                  className="group block bg-white/10 rounded-2xl p-8 sm:p-10 hover:bg-white/20 transition-all duration-300 ease-in-out h-full hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:scale-105 shadow-lg cursor-pointer border border-transparent hover:border-white/10"
                >
                  <div className={`w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mx-auto mb-5 p-4 group-hover:shadow-lg group-hover:shadow-${investor.glow}-400/30 transition-all duration-300`}>
                    <img 
                      src={investor.logo} 
                      alt={`${investor.name} Logo`}
                      className="max-w-[75%] max-h-[75%] object-contain filter brightness-105 contrast-110 group-hover:brightness-110 transition-all duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-2 text-white">
                    {language === 'ar' ? investor.nameAr : investor.name}
                  </h3>
                  <h4 className="text-xs sm:text-sm font-medium mb-2 text-blue-200">
                    {language === 'ar' ? investor.name : investor.nameAr}
                  </h4>
                  <p className="text-blue-100 text-xs sm:text-sm">
                    {language === 'ar' ? investor.descAr : investor.desc}
                  </p>
                </a>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center text-gray-400 text-sm">
              <p className="italic">
                {language === 'ar' ? 
                  '...وعدد من كبار المستثمرين الآخرين الذين تجاوز عددهم +50 جهة مساهمة من القطاعين العام والخاص.' :
                  '...and a number of other major investors exceeding +50 participating entities from both public and private sectors.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Technology Ecosystem */}
      <GlobalPartnersSlider />

      {/* Aligned with Saudi Vision 2030 */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#003f6a] via-[#0a5a8a] to-[#003f6a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'متوائمون مع رؤية السعودية 2030' : 'Aligned with Saudi Vision 2030'}
            </h2>
            <p className="text-base sm:text-xl mb-10 max-w-4xl mx-auto text-blue-100 leading-relaxed">
              {language === 'ar' ? 
                'مكامن السعودية تدعم أهداف رؤية 2030 من خلال البنية التحتية للطاقة والنمو البحري والمراقبة الرقمية وتسليم المشاريع والقدرات الصناعية' :
                'Makamin Saudi supports Vision 2030 objectives through energy infrastructure, offshore growth, digital monitoring, project delivery, and industrial capability'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#c5a66e] hover:bg-[#b8975f] text-white font-bold px-8 py-4 shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-[#c5a66e]"
                asChild
              >
                <a href="/contact" className="flex items-center text-white no-underline">
                  {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#003f6a] font-bold px-8 py-4 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="/about" className="flex items-center text-white hover:text-[#003f6a] no-underline">
                  <Globe className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'الملف التعريفي' : 'Company Profile'}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}