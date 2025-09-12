import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { Drill, Ship, Settings, ArrowRight, Award, Target, Star, CheckCircle, Users, Globe, Zap, Eye, Wrench, TrendingUp, Activity, Bot, Network, Radar, BrainCircuit } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguageContext } from '@/components/language-provider';
import AnimatedCounter from '@/components/animated-counter';
import { AnimatedDrillIcon, AnimatedShipIcon, AnimatedPipelineIcon, AnimatedOilRigIcon } from '@/components/animated-svg-icons';
import CinematicHeroVideo from '@/components/cinematic-hero-video';
import AIEnhancedDashboard from '@/components/ai-enhanced-dashboard';
import GlobalPartnersSlider from '@/components/global-partners-slider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import energyHouseLogo from '@assets/Energy House Holding_1752769769299.jpg';
import alDorraLogo from '@assets/Al-Dorra Petroleum Services_1752769769298.jpg';
import binTamiLogo from '@assets/Bin Tami Holding_1752769769299.jpg';
import obiekanLogo from '@assets/obeikan_1752841614150.png';
import multaqaLogo from '@assets/multaqa_1752840945634.png';
import ajlanBrosLogo from '@assets/Ajlan & Bros Holding_1752769769297.png';
import alBiladLogo from '@assets/Al Bilad Group_1752769769298.jpg';
import makaminLogoPath from '@assets/logo mkamin_1752524503536.png';
import HeroLogo from '@/components/hero-logo';

export default function Home() {
  const { language } = useLanguageContext();
  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });

  // Updated company statistics with precise corrections
  const stats = [
    {
      value: 1200000000,
      prefix: 'SAR ',
      suffix: '',
      format: '1.2B',
      label: language === 'ar' ? 'رأس المال المصرح به' : 'Authorized Capital',
      subtitle: language === 'ar' ? '1.2 مليار ريال سعودي' : '1.2 Billion SAR',
      icon: Globe,
      color: 'text-yellow-400'
    },
    {
      value: 60,
      prefix: '',
      suffix: '+',
      format: '60+',
      label: language === 'ar' ? 'مساهمون من نخبة المستثمرين المحليين' : 'Elite Local Investors',
      subtitle: language === 'ar' ? 'مساهمون من نخبة المستثمرين المحليين' : 'Elite Local Investors',
      icon: Users,
      color: 'text-blue-400'
    },
    {
      value: 2025,
      prefix: '',
      suffix: '',
      format: '2008→2025',
      label: language === 'ar' ? 'تأسست مكامن عام 2008، وأُعيد هيكلتها وتنشيطها في فبراير 2025' : 'Established 2008, Restructured and Reactivated February 2025',
      subtitle: language === 'ar' ? 'تاريخ مرن يعكس المرحلة الجديدة بإدارة قوية' : 'Flexible history reflecting new phase with strong management',
      icon: Award,
      color: 'text-green-400'
    },
    {
      value: 1980,
      prefix: '',
      suffix: '',
      format: '1,980',
      label: language === 'ar' ? 'أيام بدون حوادث' : 'Days Without LTA',
      subtitle: language === 'ar' ? 'أيام بدون حوادث' : 'Days Without LTA',
      icon: Target,
      color: 'text-orange-400'
    }
  ];

  // Enhanced services with AI capabilities and new icons
  const services = [
    {
      animatedIcon: AnimatedDrillIcon,
      icon: Bot, // AI-powered robotic drilling icon
      title: language === 'ar' ? 'خدمات الحفر المتقدمة' : 'Advanced Drilling Services',
      description: language === 'ar' ? 'تقنيات حفر متطورة مع الذكاء الاصطناعي' : 'Advanced drilling technology with AI integration',
      href: '/petroleum-services',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50',
      hoverBg: 'bg-gradient-to-r from-blue-50 to-white',
      hoverGlow: 'hover:shadow-blue-400/30'
    },
    {
      animatedIcon: AnimatedPipelineIcon,
      icon: Network, // Connected pipeline with IoT nodes
      title: language === 'ar' ? 'أنظمة الأنابيب الذكية' : 'Smart Pipeline Systems',
      description: language === 'ar' ? 'تركيب ومراقبة الأنابيب بتقنيات ذكية' : 'Pipeline installation and monitoring with smart technologies',
      href: '/services',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      hoverBg: 'bg-gradient-to-r from-green-50 to-white',
      hoverGlow: 'hover:shadow-green-400/30'
    },
    {
      animatedIcon: AnimatedShipIcon,
      icon: Radar, // Smart vessel with radar/satellite overlay
      title: language === 'ar' ? 'العمليات البحرية المتطورة' : 'Advanced Offshore Operations',
      description: language === 'ar' ? 'خدمات بحرية متكاملة مع مراقبة لاسلكية' : 'Integrated marine services with wireless monitoring',
      href: '/offshore-operations',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50',
      hoverBg: 'bg-gradient-to-r from-purple-50 to-white',
      hoverGlow: 'hover:shadow-purple-400/30'
    },
    {
      animatedIcon: AnimatedOilRigIcon,
      icon: BrainCircuit, // AI brain overlay on financial chart
      title: language === 'ar' ? 'تحليلات الاستثمار الذكية' : 'Smart Investment Analytics',
      description: language === 'ar' ? 'تحليلات مالية واستثمارية بالذكاء الاصطناعي' : 'AI-powered financial and investment analytics',
      href: '/investor-relations',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      hoverBg: 'bg-gradient-to-r from-orange-50 to-white',
      hoverGlow: 'hover:shadow-orange-400/30'
    }
  ];

  return (
    <div className="min-h-screen">
      <SemanticMetadata page="home" />
      <EnhancedSecurity />
      
      {/* Phase Omega Cinematic Hero */}
      <CinematicHeroVideo />
      
      {/* AI Enhanced Dashboard */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <HeroLogo size="md" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'مقر الطاقة الرقمي المتقدم' : 'Advanced Digital Energy Headquarters'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              {language === 'ar' ? 
                'نظام ذكي متكامل يدمج الذكاء الاصطناعي مع العمليات التشغيلية لإدارة مستقبل الطاقة' :
                'Integrated intelligent system combining AI with operational management for the future of energy'
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'ar' ? 'مقر الطاقة الرقمي المتقدم' : 'Advanced Digital Energy HQ'}
                </h3>
                <p className="text-gray-600">
                  {language === 'ar' ? 'مركز القيادة الرقمي للطاقة' : 'Digital energy command center'}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'ar' ? 'ذكاء مكامن الاصطناعي' : 'Makamin AI Intelligence'}
                </h3>
                <p className="text-gray-600">
                  {language === 'ar' ? 'نظام الذكاء الاصطناعي المتقدم' : 'Advanced AI system'}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'ar' ? 'لوحة العمليات المباشرة' : 'Live Operations Panel'}
                </h3>
                <p className="text-gray-600">
                  {language === 'ar' ? 'لوحة القيادة الذكية لمتابعة المشاريع، الإنتاج، وعمليات السلامة في الوقت الحقيقي' : 'Smart Command Center for Real-time Project, Production, and Safety Operations Monitoring'}
                </p>
                <div className="mt-2 inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                  <Settings className="w-4 h-4 mr-1" />
                  {language === 'ar' ? 'قيد التطوير' : 'In Development'}
                </div>
              </div>
            </div>
          </motion.div>
          <AIEnhancedDashboard />
        </div>
      </section>

      {/* Makamin Logo Showcase - قسم شعار مكامن المذهل */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
          {/* Animated Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            {/* الشعار موجود في Header - لا حاجة لتكرار هنا */}
            {/* النص المصاحب */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {language === 'ar' ? 'مكامن' : 'Makamin'}
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-white/90 mb-6">
                {language === 'ar' ? 'السعودية القابضة' : 'Saudi Holding'}
              </h2>
              <p className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto leading-relaxed mb-8">
                {language === 'ar' ? 
                  'رؤية 2030 – شريك وطني موثوق في مستقبل الطاقة' :
                  'Vision 2030 – Trusted National Partner in Energy Future'
                }
              </p>
              
              {/* نص الشعار */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg text-white/80 italic leading-relaxed">
                  {language === 'ar' ? 
                    '"رحلة استثنائية في عالم الطاقة منذ 2008 — من الرؤية إلى التنفيذ بتميز لا مثيل له"' :
                    '"An extraordinary journey in the energy world since 2008 — from vision to execution with unparalleled excellence"'
                  }
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Elite Investors Section */}
      <section id="investors-section" className="py-24 relative overflow-hidden text-white investors-section">
        {/* Animated Gradient Background */}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {language === 'ar' ? 'مستثمرونا | الشركات الكبرى والمساهمون' : 'Our Investors | Major Companies and Shareholders'}
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {language === 'ar' ? 
                'شركاء استراتيجيون آمنوا بإعادة انطلاقة مكامن في 2025' :
                'Strategic partners who believed in Makamin\'s relaunch in 2025'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <a 
                href="https://energyhouse.com.kw/ar/home/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Strategic Energy Sector Partner"
                className="group block bg-white/10 rounded-2xl p-10 hover:bg-white/20 transition-all duration-300 ease-in-out h-full hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:scale-110 shadow-lg cursor-pointer border border-transparent hover:border-white/8 animate-pulse-light"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6 p-4 group-hover:shadow-lg group-hover:shadow-green-400/30 transition-all duration-300">
                  <img 
                    src={energyHouseLogo} 
                    alt="Energy House Holding Logo" 
                    className="max-w-[75%] max-h-[75%] object-contain filter brightness-105 contrast-110 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {language === 'ar' ? 'بيت الطاقة القابضة' : 'Energy House Holding'}
                </h3>
                <h4 className="text-sm font-medium mb-2 text-blue-200">
                  {language === 'ar' ? 'Energy House Holding' : 'بيت الطاقة القابضة'}
                </h4>
                <p className="text-blue-100 text-sm">
                  {language === 'ar' ? 'شريك استراتيجي في قطاع الطاقة' : 'Strategic Energy Sector Partner'}
                </p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <a 
                href="https://www.aldorra.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Oil Services Partner"
                className="group block bg-white/10 rounded-2xl p-10 hover:bg-white/20 transition-all duration-300 ease-in-out h-full hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:scale-110 shadow-lg cursor-pointer border border-transparent hover:border-white/8 animate-pulse-light"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6 p-4 group-hover:shadow-lg group-hover:shadow-blue-400/30 transition-all duration-300">
                  <img 
                    src={alDorraLogo} 
                    alt="Al-Dorra Petroleum Services Logo" 
                    className="max-w-[75%] max-h-[75%] object-contain filter brightness-105 contrast-110 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {language === 'ar' ? 'الدرة لخدمات النفط' : 'Al-Dorra Petroleum Services'}
                </h3>
                <h4 className="text-sm font-medium mb-2 text-blue-200">
                  {language === 'ar' ? 'Al-Dorra Petroleum Services' : 'الدرة لخدمات النفط'}
                </h4>
                <p className="text-blue-100 text-sm">
                  {language === 'ar' ? 'شريك في الخدمات النفطية' : 'Oil Services Partner'}
                </p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <a 
                href="https://www.bintami.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Leading Investment Group"
                className="group block bg-white/10 rounded-2xl p-10 hover:bg-white/20 transition-all duration-300 ease-in-out h-full hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:scale-110 shadow-lg cursor-pointer border border-transparent hover:border-white/8 animate-pulse-light"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6 p-4 group-hover:shadow-lg group-hover:shadow-cyan-400/30 transition-all duration-300">
                  <img 
                    src={binTamiLogo} 
                    alt="Bin Tami Holding Logo" 
                    className="max-w-[75%] max-h-[75%] object-contain filter brightness-105 contrast-110 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {language === 'ar' ? 'بن طامي القابضة' : 'Bin Tami Holding'}
                </h3>
                <h4 className="text-sm font-medium mb-2 text-blue-200">
                  {language === 'ar' ? 'Bin Tami Holding' : 'بن طامي القابضة'}
                </h4>
                <p className="text-blue-100 text-sm">
                  {language === 'ar' ? 'مجموعة استثمارية رائدة' : 'Leading Investment Group'}
                </p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <a 
                href="https://www.obeikan.com.sa/ar/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Diversified Investment Partner"
                className="group block bg-white/10 rounded-2xl p-10 hover:bg-white/20 transition-all duration-300 ease-in-out h-full hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:scale-110 shadow-lg cursor-pointer border border-transparent hover:border-white/8 animate-pulse-light"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6 p-4 group-hover:shadow-lg group-hover:shadow-indigo-400/30 transition-all duration-300 group-hover:from-blue-100 group-hover:to-blue-200">
                  <img 
                    src={obiekanLogo} 
                    alt="Obeikan Investment Group Logo" 
                    className="max-w-[75%] max-h-[75%] object-contain filter brightness-105 contrast-110 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {language === 'ar' ? 'مجموعة العبيكان الاستثمارية' : 'Obeikan Investment Group'}
                </h3>
                <h4 className="text-sm font-medium mb-2 text-blue-200">
                  {language === 'ar' ? 'Obeikan Investment Group' : 'مجموعة العبيكان الاستثمارية'}
                </h4>
                <p className="text-blue-100 text-sm">
                  {language === 'ar' ? 'شريك استثماري متنوع' : 'Diversified Investment Partner'}
                </p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <a 
                href="https://ajlanbros-holding.com/ar/#" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Established Investment Group"
                className="group block bg-white/10 rounded-2xl p-10 hover:bg-white/20 transition-all duration-300 ease-in-out h-full hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:scale-110 shadow-lg cursor-pointer border border-transparent hover:border-white/8 animate-pulse-light"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6 p-4 group-hover:shadow-lg group-hover:shadow-amber-400/30 transition-all duration-300">
                  <img 
                    src={ajlanBrosLogo} 
                    alt="Ajlan & Bros Holding Logo" 
                    className="max-w-[75%] max-h-[75%] object-contain filter brightness-105 contrast-110 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {language === 'ar' ? 'عجلان وأخوانه القابضة' : 'Ajlan & Bros Holding'}
                </h3>
                <h4 className="text-sm font-medium mb-2 text-blue-200">
                  {language === 'ar' ? 'Ajlan & Bros Holding' : 'عجلان وأخوانه القابضة'}
                </h4>
                <p className="text-blue-100 text-sm">
                  {language === 'ar' ? 'مجموعة استثمارية عريقة' : 'Established Investment Group'}
                </p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-center"
            >
              <a 
                href="https://albiladgroup.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Local Development Partner"
                className="group block bg-white/10 rounded-2xl p-10 hover:bg-white/20 transition-all duration-300 ease-in-out h-full hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:scale-110 shadow-lg cursor-pointer border border-transparent hover:border-white/8 animate-pulse-light"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center mx-auto mb-6 p-4 group-hover:shadow-lg group-hover:shadow-blue-400/30 transition-all duration-300">
                  <img 
                    src={alBiladLogo} 
                    alt="Al Bilad Group Logo" 
                    className="max-w-[75%] max-h-[75%] object-contain filter brightness-105 contrast-110 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {language === 'ar' ? 'مجموعة البلاد' : 'Al Bilad Group'}
                </h3>
                <h4 className="text-sm font-medium mb-2 text-blue-200">
                  {language === 'ar' ? 'Al Bilad Group' : 'مجموعة البلاد'}
                </h4>
                <p className="text-blue-100 text-sm">
                  {language === 'ar' ? 'شريك تنموي محلي' : 'Local Development Partner'}
                </p>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-center"
            >
              <a 
                href="https://multaqa.sa" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Pioneering platform driving innovation and investment"
                className="group block bg-white/10 rounded-2xl p-10 hover:bg-white/20 transition-all duration-300 ease-in-out h-full hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] hover:scale-110 shadow-lg cursor-pointer border border-transparent hover:border-white/8 animate-pulse-light"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-6 p-4 group-hover:shadow-lg group-hover:shadow-emerald-400/30 transition-all duration-300 group-hover:from-emerald-100 group-hover:to-emerald-200">
                  <img 
                    src={multaqaLogo} 
                    alt="Multaqa Saudi Investment Company Logo" 
                    className="max-w-[75%] max-h-[75%] object-contain filter brightness-105 contrast-110 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {language === 'ar' ? 'شركة الملتقى السعودية للاستثمار' : 'Multaqa Saudi Investment Company'}
                </h3>
                <h4 className="text-sm font-medium mb-2 text-blue-200">
                  {language === 'ar' ? 'Multaqa Saudi Investment Company' : 'شركة الملتقى السعودية للاستثمار'}
                </h4>
                <p className="text-blue-100 text-sm mb-3">
                  {language === 'ar' ? 'منصة رائدة في الابتكار والاستثمار' : 'Pioneering platform driving innovation and investment'}
                </p>
                <div className="relative">
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="text-xs text-yellow-300 bg-yellow-400/20 px-2 py-1 rounded-full border border-yellow-400/30">
                    {language === 'ar' ? 'تم تصحيح الانتساب' : 'Attribution Corrected'}
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          <div className="text-center">
            <p className="text-gray-300 text-lg mb-4">
              {language === 'ar' ? 'شركاء استراتيجيون آمنوا بإعادة انطلاقة مكامن في 2025' : 'Strategic partners who believed in Makamin\'s relaunch in 2025'}
            </p>
            <div className="flex items-center justify-center text-gray-400 text-sm">
              <span className="mr-2">✨</span>
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

      {/* Global Partners Section */}
      <GlobalPartnersSlider />

      {/* Enhanced Future Energy Services - AI Product Launch Style */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 services-section">
          {/* Timeline Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <div className="px-4 text-blue-600 font-medium text-sm">
                {language === 'ar' ? 'رحلة إلى المستقبل — 2025 إلى 2030' : 'Journey to the Future — 2025 to 2030'}
              </div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            </div>
            <motion.div
              className="h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-8"
              initial={{ width: 0 }}
              animate={isServicesInView ? { width: '200px' } : {}}
              transition={{ duration: 2, delay: 0.5 }}
            />
          </motion.div>

          {/* Dual Language Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 
                'الخدمات المستقبلية للطاقة | Future Energy Services' :
                'Future Energy Services | الخدمات المستقبلية للطاقة'
              }
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' ? 
                'خدمات مدعومة بالذكاء الاصطناعي لتلبية احتياجات صناعة الطاقة المستقبلية' :
                'AI-powered services to meet the needs of the future energy industry'
              }
            </p>
          </motion.div>

          {/* Enhanced Service Cards with AI Control Center Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link href={service.href}>
                  <Card className="h-full cursor-pointer group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl overflow-hidden bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-8 text-center relative">
                      {/* Glassmorphism Background */}
                      <div className={`absolute inset-0 ${service.hoverBg} opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />
                      
                      {/* AI Control Center Icon */}
                      <div className="relative z-10 mb-6">
                        <div className={`w-20 h-20 mx-auto ${service.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${service.hoverGlow} group-hover:shadow-lg`}>
                          <service.icon className="w-10 h-10 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                        </div>
                        {/* Pulse Animation */}
                        <motion.div
                          className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-blue-400 opacity-0 group-hover:opacity-30"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.1, 0.3]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700 transition-colors">
                        <span className="text-sm font-medium mr-2 group-hover:underline transition-all duration-300">
                          {language === 'ar' ? 'اكتشف المزيد' : 'Learn More'}
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Statistics */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'إنجازات بالأرقام' : 'Achievements in Numbers'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' ? 
                'أرقام حقيقية تعكس ريادتنا في قطاع الطاقة السعودي منذ 2008' :
                'Real numbers reflecting our leadership in Saudi energy sector since 2008'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isStatsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
                  <CardContent className="p-0">
                    <div className="mb-6">
                      <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                      <span className={stat.color}>
                        {stat.format || (
                          <AnimatedCounter 
                            value={stat.value} 
                            duration={3000}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                          />
                        )}
                      </span>
                    </div>
                    <div className="text-lg font-medium text-gray-600">
                      {stat.label}
                    </div>
                    {stat.subtitle && (
                      <div className="text-sm text-gray-500 mt-1">
                        {stat.subtitle}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Utility Section - AI Integration Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'التكامل التقني المتقدم' : 'Advanced Technical Integration'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' ? 
                'حلول تقنية متطورة لتحسين الكفاءة والتكامل مع أنظمة الشركاء' :
                'Advanced technical solutions for improved efficiency and partner system integration'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Card className="h-full p-8 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {language === 'ar' ? 'تكامل أرامكو API' : 'Aramco API Integration'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {language === 'ar' ? 
                      'تكامل تلقائي مع أنظمة أرامكو لتبادل البيانات الهندسية والتنفيذية' :
                      'Automated integration with Aramco systems for seamless project data exchange and auto-reporting'
                    }
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
                    <div className="flex items-center mb-2">
                      <Target className="w-4 h-4 mr-2" />
                      <span className="font-medium">
                        {language === 'ar' ? 'حالة التكامل' : 'Integration Status'}
                      </span>
                    </div>
                    <p className="text-blue-700">
                      {language === 'ar' ? 
                        'تكامل تلقائي مع أنظمة أرامكو لتبادل البيانات الهندسية والتنفيذية' :
                        'Automated integration with Aramco systems for seamless project data exchange and auto-reporting'
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <Card className="h-full p-8 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {language === 'ar' ? 'تقارير ESG | عارض PDF مدمج' : 'ESG Reports | Integrated PDF Viewer'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {language === 'ar' ? 
                      'تقارير الاستدامة والحوكمة البيئية والاجتماعية' :
                      'Environmental, Social, and Governance sustainability reports'
                    }
                  </p>
                  <div className="bg-green-50 rounded-lg p-4 text-sm text-green-800">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      <span className="font-medium">
                        {language === 'ar' ? 'حالة التقارير' : 'Reports Status'}
                      </span>
                    </div>
                    <p className="text-green-700">
                      {language === 'ar' ? 
                        'سيتم توفير التقارير قريبًا' :
                        'Reports will be available soon'
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <Card className="h-full p-8 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {language === 'ar' ? 'مساعد الصوت | تحويل النص إلى كلام' : 'Voice Assistant | Text-to-Speech'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {language === 'ar' ? 
                      'نظام الصوت الذكي لتحويل النصوص إلى كلام باللغة العربية' :
                      'Smart voice system for text-to-speech conversion with Arabic support'
                    }
                  </p>
                  <div className="bg-purple-50 rounded-lg p-4 text-sm text-purple-800">
                    <div className="flex items-center mb-2">
                      <Settings className="w-4 h-4 mr-2" />
                      <span className="font-medium">
                        {language === 'ar' ? 'حالة النظام' : 'System Status'}
                      </span>
                    </div>
                    <p className="text-purple-700">
                      {language === 'ar' ? 
                        'تفعيل لاحقًا' :
                        'Activate later'
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section - Target for CTA */}
      <section id="projects" className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'ar' ? 'انضم إلى مستقبل الطاقة' : 'Join the Future of Energy'}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              {language === 'ar' ? 
                'كن جزءاً من رحلة التحول الرقمي في صناعة الطاقة مع مكامن السعودية' :
                'Be part of the digital transformation journey in energy industry with Makamin Saudi'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black dark:text-black font-bold px-8 py-4 shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-yellow-400 hover:border-yellow-500"
                asChild
              >
                <a href="/contact" className="flex items-center text-black dark:text-black no-underline">
                  {language === 'ar' ? 'ابدأ شراكتك معنا' : 'Start Your Partnership'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black dark:hover:text-black font-bold px-8 py-4 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#projects" className="flex items-center text-white hover:text-black dark:hover:text-black no-underline">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'استكشف مشاريعنا' : 'Discover Our Projects'}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* تم نقل الشعار إلى أعلى الصفحة كما طلب المستخدم */}
    </div>
  );
}