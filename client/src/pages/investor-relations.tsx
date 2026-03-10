import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import { Building2, Users, Shield, Anchor, Cpu, Drill, Wrench, ArrowRight, FileText, Mail, Search } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import HeroLogo from '@/components/hero-logo';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import energyHouseLogo from '@assets/Energy House Holding_1752769769299.jpg';
import alDorraLogo from '@assets/Al-Dorra Petroleum Services_1752769769298.jpg';
import binTamiLogo from '@assets/Bin Tami Holding_1752769769299.jpg';
import ajlanBrosLogo from '@assets/Ajlan & Bros Holding_1752769769297.png';
import alBiladLogo from '@assets/Al Bilad Group_1752769769298.jpg';
import multaqaLogo from '@assets/multaqa_1752840945634.png';

export default function InvestorRelations() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';

  const corporateStrength = [
    {
      label: isAr ? 'رأس المال المصرح' : 'Authorized Capital',
      value: 'SAR 1.2B',
      icon: Building2,
    },
    {
      label: isAr ? 'المستثمرون الاستراتيجيون' : 'Strategic Investors',
      value: '60+',
      icon: Users,
    },
    {
      label: isAr ? 'سنوات التأسيس' : 'Years Since Establishment',
      value: '17+',
      icon: Shield,
    },
    {
      label: isAr ? 'هيكل مجموعة متكامل' : 'Integrated Group Structure',
      value: isAr ? '٤ كيانات' : '4 Entities',
      icon: Building2,
    },
  ];

  const shareholders = [
    { logo: energyHouseLogo, name: 'Energy House Holding', nameAr: 'بيت الطاقة القابضة', desc: 'Strategic Energy Sector Partner', descAr: 'شريك استراتيجي في قطاع الطاقة', href: 'https://energyhouse.com.kw/ar/home/' },
    { logo: alDorraLogo, name: 'Al-Dorra Petroleum Services', nameAr: 'الدرة لخدمات النفط', desc: 'Oil Services Partner', descAr: 'شريك في الخدمات النفطية', href: 'https://www.aldorra.com/' },
    { logo: binTamiLogo, name: 'Bin Tami Holding', nameAr: 'بن طامي القابضة', desc: 'Leading Investment Group', descAr: 'مجموعة استثمارية رائدة', href: 'https://www.bintami.com/' },
    { logo: ajlanBrosLogo, name: 'Ajlan & Bros Holding', nameAr: 'عجلان وأخوانه القابضة', desc: 'Established Investment Group', descAr: 'مجموعة استثمارية عريقة', href: 'https://ajlanbros-holding.com/ar/#' },
    { logo: alBiladLogo, name: 'Al Bilad Group', nameAr: 'مجموعة البلاد', desc: 'Local Development Partner', descAr: 'شريك تنموي محلي', href: 'https://albiladgroup.com/' },
    { logo: multaqaLogo, name: 'Multaqa Saudi Investment Company', nameAr: 'شركة الملتقى السعودية للاستثمار', desc: 'Pioneering platform driving innovation and investment', descAr: 'منصة رائدة في الابتكار والاستثمار', href: 'https://multaqa.sa' },
  ];

  const groupEntities = [
    {
      title: isAr ? 'مكامن للخدمات البترولية' : 'Makamin Petroleum Services',
      desc: isAr ? 'الكيان التشغيلي الرئيسي — الأنابيب، الحفر، التفتيش، علوم الأرض' : 'Primary operating entity — pipeline, drilling, inspection, geoscience',
      icon: Drill,
      link: '/petroleum-services',
    },
    {
      title: isAr ? 'مكامن البحرية السعودية (MOS)' : 'Makamin Offshore Saudi (MOS)',
      desc: isAr ? 'العمليات البحرية والأسطول والدعم البحري' : 'Marine operations, fleet support, and offshore services',
      icon: Anchor,
      link: '/offshore-operations',
    },
    {
      title: isAr ? 'زينكوس الدولية المحدودة' : 'ZENCUS International Ltd',
      desc: isAr ? 'الحلول الرقمية — المراقبة اللاسلكية والبيانات الميدانية' : 'Digital solutions — wireless monitoring and field data acquisition',
      icon: Cpu,
      link: '/zencus-international',
    },
    {
      title: isAr ? 'المشاريع والتنفيذ' : 'Projects & Execution',
      desc: isAr ? '+100 مشروع وسجل تنفيذي مع أرامكو السعودية والعملاء الرئيسيين' : '100+ projects and execution records with Saudi Aramco and major clients',
      icon: Wrench,
      link: '/projects',
    },
  ];

  const strengths = [
    {
      title: isAr ? 'سجل مشاريع أرامكو' : 'Aramco Project Record',
      desc: isAr ? 'سجل عقود شامل في الأنابيب والحفر والتفتيش وعلوم الأرض مع أرامكو السعودية' : 'Comprehensive contract record in pipeline, drilling, inspection, and geoscience with Saudi Aramco',
    },
    {
      title: isAr ? 'القدرة البحرية والبحرية' : 'Offshore Marine Capability',
      desc: isAr ? 'أسطول بحري وخدمات دعم بحري من خلال مكامن البحرية السعودية المحدودة' : 'Marine fleet and offshore support services through Makamin Offshore Saudi Ltd',
    },
    {
      title: isAr ? 'التنفيذ الصناعي' : 'Industrial Execution',
      desc: isAr ? 'خبرة في الأنابيب والحماية الكاثودية والتفتيش غير المدمر والحفر المتخصص' : 'Expertise in pipeline, cathodic protection, NDT inspection, and specialized drilling',
    },
    {
      title: isAr ? 'الحلول الرقمية' : 'Digital Monitoring Solutions',
      desc: isAr ? 'تقنيات زينكوس للمراقبة اللاسلكية والبيانات الميدانية في الوقت الفعلي' : 'ZENCUS wireless monitoring and real-time field data technology',
    },
    {
      title: isAr ? 'هيكل تشغيلي متنوع' : 'Diversified Operating Structure',
      desc: isAr ? 'مجموعة متكاملة تضم كيانات تشغيلية في البترول والبحرية والتكنولوجيا' : 'Integrated group with petroleum, marine, and technology operating entities',
    },
    {
      title: isAr ? 'الامتثال والجودة' : 'Compliance & Quality',
      desc: isAr ? 'شهادات ISO 9001 و ISO 14001 و ISO 45001 وبائع معتمد لدى أرامكو' : 'ISO 9001, ISO 14001, ISO 45001 certified; Saudi Aramco Approved Vendor',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir={isAr ? 'rtl' : 'ltr'}>
      <SemanticMetadata
        page="about"
        title={isAr ? 'المساهمون الاستراتيجيون | مكامن السعودية' : 'Strategic Shareholders | Saudi Makamin'}
        description={isAr ? 'المساهمون الاستراتيجيون والقوة المؤسسية لشركة مكامن السعودية القابضة لخدمات النفط والغاز' : 'Strategic shareholders and corporate strength of Saudi Makamin Holding Company for Oil & Gas Services.'}
      />
      <EnhancedSecurity />

      <section className="relative bg-gradient-to-br from-slate-900 via-[#003f6a] to-slate-800 text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(197,166,110,0.15) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`
          }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-white leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {isAr ? 'المساهمون الاستراتيجيون' : 'Strategic Shareholders'}
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {isAr
                ? 'الدعم المؤسسي وراء منصة مكامن المتكاملة للطاقة'
                : 'Institutional backing behind Makamin\'s integrated energy platform'}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/projects">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-gray-100 shadow-lg font-semibold px-8 py-4 text-lg">
                  {isAr ? 'استعرض المشاريع' : 'View Projects'}
                  <ArrowRight className={`h-5 w-5 ${isAr ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 shadow-lg font-semibold px-8 py-4 text-lg transition-all duration-300">
                  {isAr ? 'تواصل معنا' : 'Contact Us'}
                  <Mail className={`h-5 w-5 ${isAr ? 'mr-2' : 'ml-2'}`} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {corporateStrength.map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-[#003f6a]/10 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <item.icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#003f6a]" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-[#003f6a] mb-1">{item.value}</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#00172D] via-[#0A2B4F] to-[#012840] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {isAr ? 'المساهمون الاستراتيجيون' : 'Strategic Shareholders'}
            </h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              {isAr
                ? 'شركاء استراتيجيون آمنوا بإعادة انطلاقة مكامن في 2025'
                : 'Strategic partners who believed in Makamin\'s relaunch in 2025'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
            {shareholders.map((investor, index) => (
              <motion.a
                key={index}
                href={investor.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 border border-white/5 hover:border-white/15 hover:shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 p-3">
                  <img
                    src={investor.logo}
                    alt={`${investor.name} Logo`}
                    className="max-w-[75%] max-h-[75%] object-contain"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white text-center mb-1">
                  {isAr ? investor.nameAr : investor.name}
                </h3>
                <p className="text-xs sm:text-sm text-blue-200 text-center mb-1">
                  {isAr ? investor.name : investor.nameAr}
                </p>
                <p className="text-xs text-blue-300 text-center">
                  {isAr ? investor.descAr : investor.desc}
                </p>
              </motion.a>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400 italic">
              {isAr
                ? '...وعدد من كبار المستثمرين الآخرين الذين تجاوز عددهم +50 جهة مساهمة من القطاعين العام والخاص.'
                : '...and a number of other major investors exceeding +50 participating entities from both public and private sectors.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {isAr ? 'القوة المؤسسية للمجموعة' : 'Group Corporate Strength'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {isAr
                ? 'هيكل تشغيلي متكامل يربط المساهمين بالقدرات التنفيذية الحقيقية'
                : 'Integrated operating structure connecting shareholders to real execution capabilities'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {groupEntities.map((entity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={entity.link}>
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group border-gray-200 hover:border-[#003f6a]/30 h-full">
                    <CardContent className="p-6 sm:p-8 flex items-start gap-4">
                      <div className="bg-[#003f6a]/10 p-3 rounded-xl flex-shrink-0 group-hover:bg-[#003f6a]/20 transition-colors">
                        <entity.icon className="h-6 w-6 text-[#003f6a]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#003f6a] transition-colors">
                          {entity.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{entity.desc}</p>
                      </div>
                      <ArrowRight className={`h-5 w-5 text-gray-400 group-hover:text-[#003f6a] transition-colors flex-shrink-0 mt-1 ${isAr ? 'rotate-180' : ''}`} />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {isAr ? 'لماذا مكامن' : 'Why Makamin'}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {isAr
                ? 'قوة تنفيذية مثبتة عبر عقود من الخبرة في قطاع الطاقة'
                : 'Proven execution strength across decades of energy sector experience'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {strengths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {isAr ? 'المستندات والملف التعريفي' : 'Documents & Company Profile'}
            </h2>
            <p className="text-gray-600 mb-8">
              {isAr
                ? 'تعرف على المزيد عن مجموعة مكامن وخدماتها ومشاريعها'
                : 'Learn more about the Makamin Group, its services, and project portfolio'}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about">
                <Button size="lg" className="bg-[#003f6a] text-white hover:bg-[#003f6a]/90 font-semibold px-6 py-3">
                  <FileText className={`h-5 w-5 ${isAr ? 'ml-2' : 'mr-2'}`} />
                  {isAr ? 'الملف التعريفي للشركة' : 'Company Profile'}
                </Button>
              </Link>
              <Link href="/group">
                <Button size="lg" variant="outline" className="border-[#003f6a] text-[#003f6a] hover:bg-[#003f6a]/5 font-semibold px-6 py-3">
                  <Building2 className={`h-5 w-5 ${isAr ? 'ml-2' : 'mr-2'}`} />
                  {isAr ? 'نظرة عامة على المجموعة' : 'Group Overview'}
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-6 py-3">
                  <Mail className={`h-5 w-5 ${isAr ? 'ml-2' : 'mr-2'}`} />
                  {isAr ? 'تواصل مع الفريق' : 'Contact Corporate Team'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm text-gray-500 mb-3">
            {isAr ? 'للمساهمين الحاليين' : 'For Current Shareholders'}
          </p>
          <Link href="/update-shareholder">
            <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-100 font-medium">
              <Search className={`h-4 w-4 ${isAr ? 'ml-2' : 'mr-2'}`} />
              {isAr ? 'تحديث بيانات المساهم' : 'Update Shareholder Information'}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
