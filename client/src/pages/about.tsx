import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Target, Eye, Drill, Search, Settings, Wrench, Building, Cog, Users, Globe, DollarSign, Calendar, MapPin, ChevronDown, ChevronRight, Award, Shield, Zap, TrendingUp, CheckCircle, Heart, User, Crown, Briefcase, Star, ArrowRight, ExternalLink, Phone, Mail, LinkedinIcon, Twitter, Linkedin, Ship, Compass, Package } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import AnimatedCounter from '@/components/animated-counter';
import { AnimatedDrillIcon, AnimatedShipIcon, AnimatedPipelineIcon, AnimatedOilRigIcon } from '@/components/animated-svg-icons';
import HeroLogo from '@/components/hero-logo';
import campLayoutPath from '@assets/makamin-oyun-camp-location-map-al-ahsa.jpg_1773067827094.jpg';

export default function About() {
  const { language } = useLanguageContext();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const timelineRef = useRef(null);
  const leadershipRef = useRef(null);
  const valuesRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const statsInView = useInView(statsRef, { once: true });
  const timelineInView = useInView(timelineRef, { once: true });
  const leadershipInView = useInView(leadershipRef, { once: true });
  const valuesInView = useInView(valuesRef, { once: true });
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const offset = 100;
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 500);
    }
  }, []);

  // Company Key Metrics from 2017 Profile
  const companyStats = [
    {
      icon: DollarSign,
      value: 1200000000,
      prefix: 'SAR ',
      suffix: 'M',
      label: language === 'ar' ? 'رأس المال' : 'Capital',
      color: 'text-green-500'
    },
    {
      icon: Users,
      value: 59,
      suffix: '',
      label: language === 'ar' ? 'مساهم' : 'Shareholders',
      color: 'text-blue-500'
    },
    {
      icon: Calendar,
      value: 0,
      suffix: '',
      displayText: language === 'ar' ? '24 مايو 2008' : 'May 24, 2008',
      label: language === 'ar' ? 'تاريخ التأسيس' : 'Established',
      color: 'text-purple-500'
    },
    {
      icon: Award,
      value: 0,
      suffix: '',
      displayText: language === 'ar' ? 'سجل أمان قوي' : 'Strong Record',
      label: language === 'ar' ? 'أداء السلامة' : 'Safety Performance',
      color: 'text-yellow-500'
    }
  ];

  // Core Departments from Profile
  const departments = [
    {
      id: 'pipeline',
      animatedIcon: AnimatedPipelineIcon,
      icon: Settings,
      title: language === 'ar' ? 'خدمات الأنابيب والصناعة' : 'Pipeline & Industrial Services',
      description: language === 'ar' ? 'خدمات متكاملة لأنابيب النفط والغاز والمياه' : 'Integrated services for oil, gas, and water pipelines',
      details: language === 'ar' ? 
        'التصنيع الخفيف والثقيل، تركيب المرافق، إعداد مواقع الآبار، بناء حق الطريق، الضغط والتسوية والسياج. يتعامل مع عقود LSTK وEPC.' :
        'Light & heavy fabrication, utility installations, well site preparation, right-of-way construction. Handles LSTK and EPC contracts.',
      clients: ['Saudi Aramco', 'Al-Khafji Joint Operations'],
      capabilities: language === 'ar' ? 
        ['أنظمة المراقبة الدائمة تحت الأرض', 'مقاييس التدفق متعددة الأطوار', 'أنظمة الإنتاج منخفضة الضغط'] :
        ['Permanent Downhole Monitoring Systems', 'Multiphase Flow Meters', 'Low Pressure Production Systems']
    },
    {
      id: 'drilling',
      animatedIcon: AnimatedDrillIcon,
      icon: Drill,
      title: language === 'ar' ? 'خدمات الحفر' : 'Drilling Services',
      description: language === 'ar' ? 'حفر الآبار والصيانة والمراقبة الزلزالية' : 'Well drilling, workover, and seismic monitoring',
      details: language === 'ar' ?
        'الإصلاح، حفر المياه العميقة والجزء العلوي، حفر آبار المياه، المراقبة الزلزالية الدقيقة، اختبار التربة والحفر الأساسي.' :
        'Workover, deep water & top-hole drilling, water well drilling, micro-seismic monitoring, soil testing and core drilling.',
      clients: ['Saudi Aramco', 'National Water Company'],
      capabilities: language === 'ar' ?
        ['5 منصات حفر (300-750 حصان)', 'قدرة على أعماق أكثر من 6500 قدم', 'وحدات محمولة وإسكان ميداني'] :
        ['5 Drilling Rigs (300-750 HP)', 'Capability > 6,500 ft depth', 'Portable modules & field housing']
    },
    {
      id: 'geoscience',
      animatedIcon: AnimatedOilRigIcon,
      icon: Building,
      title: language === 'ar' ? 'خدمات علوم الأرض' : 'Geoscience Services',
      description: language === 'ar' ? 'الدراسات الجيولوجية والجيوفيزيائية' : 'Geological and geophysical studies',
      details: language === 'ar' ?
        'الدراسات الجيولوجية والجيوفيزيائية والبتروفيزيائية، مسح وترقيم السجلات، تصوير وتحليل النواة عالي الدقة.' :
        'Geological, geophysical, petrophysical studies, log scanning & digitizing, high-resolution core imaging & analysis.',
      clients: ['Saudi Aramco EXPEC-ARC'],
      capabilities: language === 'ar' ?
        ['مراقبة زلزالية رباعية الأبعاد', 'مراقبة جودة البيانات', 'دعم الصيانة'] :
        ['4D Seismic Monitoring', 'Data quality control', 'Maintenance support']
    },
    {
      id: 'inspection',
      animatedIcon: AnimatedShipIcon,
      icon: Search,
      title: language === 'ar' ? 'خدمات التفتيش الصناعي' : 'Industrial Inspection Services',
      description: language === 'ar' ? 'الفحص غير المدمر والفحص المتقدم' : 'Non-Destructive Testing and Advanced NDT',
      details: language === 'ar' ?
        'الفحص الإشعاعي، الفحص بالموجات فوق الصوتية، فحص الجسيمات المغناطيسية، فحص السوائل المخترقة، الفحص البصري.' :
        'Radiographic Testing, Ultrasonic Testing, Magnetic Particle Testing, Penetrant Testing, Visual Testing.',
      clients: ['Saudi Aramco', 'SABIC', 'SASREF', 'Zamil Steel'],
      capabilities: language === 'ar' ?
        ['فحص أرضيات الخزانات', 'فحص الأنابيب المتقدم', 'تحديد المواد الإيجابي'] :
        ['Tank Floor Inspection', 'Advanced Tube Inspection', 'Positive Material Identification']
    }
  ];

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  // Executive Leadership Data - Strategic Rewrite
  const leadership = {
    ceo: {
      name: language === 'ar' ? 'الأستاذ عادل عايض النوب' : 'Mr. Adel Ayed ALNOOB',
      title: language === 'ar' ? 'الرئيس التنفيذي - تم تعيينه بقرار الجمعية العمومية (2025)' : 'Chief Executive Officer – Appointed by General Assembly Decision (2025)',
      subtitle: language === 'ar' ? 'عضو مجلس الإدارة • الممثل النظامي المعتمد بحكم قضائي' : 'Board Member • Legally Authorized Representative by Judicial Decree',
      photo: '/attached_assets/ADEL AYED ALNOOB_1752885031070.jpg',
      bio: language === 'ar' ? 
        'تنفيذ خطة إنقاذ شاملة خلال المرحلة الانتقالية (2020–2025) • تمكين انعقاد أول جمعية عمومية نظامية بعد تعثر دام 6 سنوات • إرساء مبادئ الشفافية والمساءلة المالية • قيادة التوافق مع نظام الشركات الجديد • تطوير استراتيجية الشراكات مع أرامكو السعودية والشركات الخليجية' :
        'Implementing comprehensive rescue plan during transitional period (2020–2025) • Enabling first general assembly after 6-year stagnation • Establishing transparency and financial accountability • Leading compliance with new corporate law • Developing strategic partnerships with Saudi Aramco and Gulf companies',
      keyTraits: language === 'ar' ? 
        ['تنفيذ خطة إنقاذ شاملة خلال المرحلة الانتقالية', 'تمكين انعقاد أول جمعية عمومية نظامية بعد تعثر دام 6 سنوات', 'إرساء مبادئ الشفافية والمساءلة المالية', 'قيادة التوافق مع نظام الشركات الجديد', 'تطوير استراتيجية الشراكات مع أرامكو السعودية والشركات الخليجية'] :
        ['Comprehensive rescue plan execution during transitional period', 'Enabling first general assembly after 6-year stagnation', 'Establishing transparency and financial accountability principles', 'Leading compliance with new corporate law', 'Developing strategic partnerships with Saudi Aramco and Gulf companies']
    },
    board: {
      title: language === 'ar' ? 'مجلس الإدارة (2025–2029)' : 'Board of Directors (2025–2029)',
      legalNote: language === 'ar' ? 
        'تشكيل منتخب من الجمعية العمومية بتاريخ 18 فبراير 2025م بناءً على الحكم القضائي القطعي رقم 4630484436' :
        'Elected formation by General Assembly on February 18, 2025, based on final judicial decree No. 4630484436',
      electionNote: language === 'ar' ?
        'تم انتخابهم بأغلبية أصوات المساهمين الحاضرين والذين يمثلون 29.5% من رأس المال المصرح به' :
        'Elected by majority vote of attending shareholders representing 29.5% of authorized capital',
      members: [
        { name: language === 'ar' ? 'أ. عادل عايض النوب' : 'Mr. Adel Ayed ALNOOB', role: language === 'ar' ? 'رئيس مجلس الإدارة والرئيس التنفيذي' : 'Chairman of the Board and CEO' },
        { name: language === 'ar' ? 'م. إبراهيم أحمد الغامدي' : 'Eng. Ibrahim Ahmed Al-Ghamdi', role: language === 'ar' ? 'نائب رئيس مجلس الإدارة' : 'Vice Chairman of the Board' },
        { name: language === 'ar' ? 'م. خالد حمدان السيف' : 'Eng. Khalid Hamdan Al-Saif', role: language === 'ar' ? 'عضو مجلس الإدارة' : 'Board Member' },
        { name: language === 'ar' ? 'م. حمد علي القحطاني' : 'Eng. Hamad Ali Al-Qahtani', role: language === 'ar' ? 'عضو مجلس الإدارة' : 'Board Member' },
        { name: language === 'ar' ? 'م. محمد جاسم الفواز' : 'Eng. Mohammed Jasim Al-Fawaz', role: language === 'ar' ? 'عضو مجلس الإدارة' : 'Board Member' }
      ]
    },
    committees: {
      title: language === 'ar' ? 'اللجان التابعة لمجلس الإدارة' : 'Board Committees',
      list: [
        {
          name: language === 'ar' ? 'اللجنة التنفيذية' : 'Executive Committee',
          head: language === 'ar' ? 'رئيس: أ. عادل عايض النوب' : 'Chairman: Mr. Adel Ayed ALNOOB',
          description: language === 'ar' ? 'إعداد خارطة الطريق القانونية والإدارية والتشغيلية لمرحلة ما بعد انتخابات 2025' : 'Preparing legal, administrative, and operational roadmap for post-2025 election phase'
        },
        {
          name: language === 'ar' ? 'لجنة الامتثال والمواءمة' : 'Compliance and Harmonization Committee',
          head: language === 'ar' ? 'تحت الإشراف المباشر للرئيس التنفيذي' : 'Under direct supervision of the Chief Executive Officer',
          description: language === 'ar' ? 'ضمان التوافق الكامل مع نظام الشركات الجديد ولوائح الإفصاح المالي المحدثة' : 'Ensuring full compliance with new corporate law and updated financial disclosure regulations'
        }
      ]
    }
  };

  const timelineStory = [
    {
      year: '2008',
      title: language === 'ar' ? 'تأسيس الشركة' : 'Company Founding',
      titleAr: 'تأسيس الشركة',
      description: language === 'ar' ? 
        'تأسست شركة مكامن السعودية القابضة لخدمات النفط والغاز في المنطقة الشرقية. 59 مساهماً ساهموا في تأسيس الشركة برأس مال 1.2 مليار ريال سعودي.' :
        'Saudi Makamin Holding Company for Oil & Gas Services was established in the Eastern Province. 59 shareholders contributed to founding the company with SAR 1.2 billion capital.',
      descriptionAr: 'تأسست شركة مكامن السعودية القابضة لخدمات النفط والغاز في المنطقة الشرقية. 59 مساهماً ساهموا في تأسيس الشركة برأس مال 1.2 مليار ريال سعودي.',
      type: 'founding' as const,
      icon: Building,
      color: 'from-blue-500 to-cyan-500',
      impact: language === 'ar' ? 'تأسيس الشركة' : 'Company Established',
      metrics: { value: '1.2B', label: language === 'ar' ? 'ريال سعودي' : 'SAR Capital' }
    },
    {
      year: '2010',
      title: language === 'ar' ? 'أولى العقود الرئيسية' : 'First Major Contracts',
      titleAr: 'أولى العقود الرئيسية',
      description: language === 'ar' ?
        'حصلت الشركة على أولى عقودها مع أرامكو السعودية في مجالات خدمات الأنابيب والحفر، مما رسّخ مكانتها كمزود خدمات موثوق في القطاع.' :
        'The company secured its first contracts with Saudi Aramco in pipeline and drilling services, establishing its position as a reliable service provider in the sector.',
      descriptionAr: 'حصلت الشركة على أولى عقودها مع أرامكو السعودية في مجالات خدمات الأنابيب والحفر، مما رسّخ مكانتها كمزود خدمات موثوق في القطاع.',
      type: 'milestone' as const,
      icon: Award,
      color: 'from-green-500 to-emerald-500',
      impact: language === 'ar' ? 'عقود أرامكو الأولى' : 'First Aramco Contracts',
      metrics: { value: '12+', label: language === 'ar' ? 'عقد رئيسي' : 'Major Contracts' }
    },
    {
      year: '2012',
      title: language === 'ar' ? 'إطلاق العمليات البحرية' : 'Offshore Operations Launch',
      titleAr: 'إطلاق العمليات البحرية',
      description: language === 'ar' ?
        'تأسست مكامن أوف شور لتقديم خدمات بحرية متخصصة في الخليج العربي، بأسطول من 12 سفينة وعمليات بقيمة 400 مليون دولار.' :
        'Makamin Offshore was established to provide specialized marine services in the Arabian Gulf, with a fleet of 12 vessels and operations valued at $400M.',
      descriptionAr: 'تأسست مكامن أوف شور لتقديم خدمات بحرية متخصصة في الخليج العربي، بأسطول من 12 سفينة وعمليات بقيمة 400 مليون دولار.',
      type: 'expansion' as const,
      icon: Ship,
      color: 'from-blue-600 to-indigo-600',
      impact: language === 'ar' ? 'توسع بحري' : 'Offshore Expansion',
      metrics: { value: '$400M', label: language === 'ar' ? 'قيمة العمليات' : 'Operations Value' }
    },
    {
      year: '2015',
      title: language === 'ar' ? 'التوسع الإقليمي' : 'Regional Expansion',
      titleAr: 'التوسع الإقليمي',
      description: language === 'ar' ?
        'توسعت الشركة إلى البحرين باستثمارات إقليمية بقيمة 50 مليون دينار بحريني لتعزيز حضورها في منطقة الخليج.' :
        'The company expanded into Bahrain with regional investments worth BHD 50M to strengthen its presence in the Gulf region.',
      descriptionAr: 'توسعت الشركة إلى البحرين باستثمارات إقليمية بقيمة 50 مليون دينار بحريني لتعزيز حضورها في منطقة الخليج.',
      type: 'expansion' as const,
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      impact: language === 'ar' ? 'عمليات إقليمية' : 'Regional Operations',
      metrics: { value: '50M', label: language === 'ar' ? 'دينار بحريني' : 'BHD Investment' }
    },
    {
      year: '2017',
      title: language === 'ar' ? 'التميز في السلامة' : 'Safety Excellence',
      titleAr: 'التميز في السلامة',
      description: language === 'ar' ?
        'حققت الشركة سجل أمان متميز مع تصنيف مقاول من الدرجة الأولى لدى أرامكو السعودية، مما يعكس التزامها بأعلى معايير السلامة.' :
        'The company achieved a strong safety record with Tier-1 contractor status at Saudi Aramco, reflecting its commitment to the highest safety standards.',
      descriptionAr: 'حققت الشركة سجل أمان متميز مع تصنيف مقاول من الدرجة الأولى لدى أرامكو السعودية، مما يعكس التزامها بأعلى معايير السلامة.',
      type: 'achievement' as const,
      icon: Shield,
      color: 'from-yellow-500 to-orange-500',
      impact: language === 'ar' ? 'سجل أمان متميز' : 'Strong Safety Record',
      metrics: { value: 'Tier-1', label: language === 'ar' ? 'تصنيف أرامكو' : 'Aramco Rating' }
    },
    {
      year: '2024',
      title: language === 'ar' ? 'التوافق مع رؤية 2030' : 'Vision 2030 Alignment',
      titleAr: 'التوافق مع رؤية 2030',
      description: language === 'ar' ?
        'مواصلة تطوير القدرات التقنية والاستثمار في الكوادر الوطنية تماشياً مع رؤية المملكة 2030 للتحول في قطاع الطاقة.' :
        'Continuing to develop technical capabilities and invest in national talent in alignment with the Kingdom\'s Vision 2030 for energy sector transformation.',
      descriptionAr: 'مواصلة تطوير القدرات التقنية والاستثمار في الكوادر الوطنية تماشياً مع رؤية المملكة 2030 للتحول في قطاع الطاقة.',
      type: 'achievement' as const,
      icon: Zap,
      color: 'from-cyan-500 to-teal-500',
      impact: language === 'ar' ? 'التحول الرقمي' : 'Digital Transformation',
      metrics: { value: '2030', label: language === 'ar' ? 'رؤية المملكة' : 'Saudi Vision' }
    }
  ];

  // Enhanced Values & HSE Data
  const coreValues = [
    {
      icon: Shield,
      title: language === 'ar' ? 'السلامة' : 'Safety',
      description: language === 'ar' ? 'سجل أمان متميز' : 'Strong safety record',
      metric: { value: 0, suffix: '' },
      color: 'text-green-500'
    },
    {
      icon: Award,
      title: language === 'ar' ? 'التميز التقني' : 'Technical Excellence', 
      description: language === 'ar' ? 'معايير أرامكو من الدرجة الأولى' : 'Aramco Tier-1 standards',
      metric: { value: 0, suffix: '' },
      color: 'text-blue-500'
    },
    {
      icon: Users,
      title: language === 'ar' ? 'السعودة' : 'Saudization',
      description: language === 'ar' ? 'التوطين والتدريب المحلي' : 'Local talent development',
      metric: { value: 0, suffix: '' },
      color: 'text-purple-500'
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'الابتكار' : 'Innovation',
      description: language === 'ar' ? 'تقنيات المستقبل' : 'Future technologies',
      metric: { value: 0, suffix: '' },
      color: 'text-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SemanticMetadata page="about" />
      <EnhancedSecurity />
      
      {/* Executive Hero Section */}
      <motion.section 
        id="overview"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ y }}
      >
        {/* Cinematic Makamin Flag Background */}
        <div className="absolute inset-0">
          {/* Makamin Flag Hero Image */}
          <img
            src="/images/makamin-flag-hero.jpg"
            alt="Makamin Flag Against Dramatic Sky"
            className="w-full h-full object-cover scale-110"
          />
          {/* Cinematic Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/60 to-black/80"></div>
          
          {/* Dynamic Wind Effect Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1.5, 0.5],
                  x: [0, Math.random() * 200 - 100],
                  y: [0, Math.random() * 200 - 100]
                }}
                transition={{
                  duration: 6 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 8
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>

          {/* Subtle Flag Wave Lines */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                style={{
                  top: `${20 + (i * 12)}%`,
                  width: '100%'
                }}
                animate={{ 
                  opacity: [0.2, 0.6, 0.2],
                  scaleX: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.7
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <HeroLogo size="lg" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent leading-tight">
              {language === 'ar' ? 
                'مكامن السعودية — رائدة التميز الطاقي المتكامل منذ 2008' :
                <><span className="whitespace-nowrap">Saudi Makamin</span> — Pioneering Integrated Energy Excellence Since 2008</>
              }
            </h1>
            <div className="text-xl md:text-2xl font-medium text-blue-200 max-w-4xl mx-auto leading-relaxed mb-8">
              {language === 'ar' ? 
                'مكامن السعودية — قوة بـ 1.2 مليار ريال سعودي تشكل مستقبل الطاقة من خلال الابتكار والشراكات العالمية' :
                <><span className="whitespace-nowrap">Saudi Makamin</span> — A 1.2 Billion SAR Powerhouse Shaping the Future of Energy Through Innovation and Global Partnerships</>
              }
            </div>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              {language === 'ar' ? 
                'من رؤية جريئة إلى قوة راسخة — قصة شركة تعيد تعريف معايير الصناعة وتشكل مستقبل الطاقة في المملكة والمنطقة' :
                'From bold vision to established powerhouse — the story of a company redefining industry standards and shaping the future of energy in the Kingdom and region'
              }
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Executive Statistics */}
      <motion.section 
        ref={statsRef}
        className="py-20 bg-slate-800/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: statsInView ? 1 : 0, y: statsInView ? 0 : 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${stat.color === 'text-green-500' ? 'from-green-500 to-emerald-500' : stat.color === 'text-blue-500' ? 'from-blue-500 to-cyan-500' : stat.color === 'text-purple-500' ? 'from-purple-500 to-pink-500' : 'from-yellow-500 to-orange-500'} mb-4`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {'displayText' in stat && stat.displayText ? (
                    <span className="text-2xl md:text-3xl">{stat.displayText}</span>
                  ) : stat.value === 1200000000 ? (
                    <><span className="text-2xl">SAR </span><AnimatedCounter value={1.2} duration={2000} suffix="B" /></>
                  ) : (
                    <AnimatedCounter value={stat.value} duration={2000} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Company Information Section */}
      <section id="company" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'ar' ? 'معلومات الشركة' : 'Company Information'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-6">
                {language === 'ar' ? 'البيانات الأساسية' : 'Key Facts'}
              </h3>
              <div className="space-y-4">
                {[
                  { k: language === 'ar' ? 'الاسم الرسمي' : 'Official Name', v: language === 'ar' ? 'شركة مكامن السعودية القابضة لخدمات النفط والغاز' : 'Saudi Makamin Holding Company for Oil & Gas Services' },
                  { k: language === 'ar' ? 'تاريخ التأسيس' : 'Date of Establishment', v: language === 'ar' ? '24 مايو 2008م' : 'May 24, 2008' },
                  { k: language === 'ar' ? 'رأس المال' : 'Capital', v: language === 'ar' ? '1.2 مليار ريال سعودي' : 'SAR 1.2 Billion' },
                  { k: language === 'ar' ? 'عدد المساهمين' : 'Shareholders', v: language === 'ar' ? '59 مساهماً' : '59 Shareholders' },
                  { k: language === 'ar' ? 'نوع الشركة' : 'Company Type', v: language === 'ar' ? 'شركة مساهمة مقفلة' : 'Closed Joint-Stock Company' },
                  { k: language === 'ar' ? 'المقر الرئيسي' : 'Headquarters', v: language === 'ar' ? 'المنطقة الشرقية، المملكة العربية السعودية' : 'Eastern Province, Kingdom of Saudi Arabia' },
                ].map((row, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:justify-between gap-1 py-2 border-b border-slate-700/50 last:border-0">
                    <span className="text-slate-400 text-sm font-medium">{row.k}</span>
                    <span className="text-white text-sm font-semibold">{row.v}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-6">
                {language === 'ar' ? 'قطاعات العمل' : 'Business Sectors'}
              </h3>
              <div className="space-y-3">
                {[
                  language === 'ar' ? 'خدمات الأنابيب والصناعة' : 'Pipeline & Industrial Services',
                  language === 'ar' ? 'خدمات الحفر' : 'Drilling Services',
                  language === 'ar' ? 'خدمات علوم الأرض' : 'Geoscience Services',
                  language === 'ar' ? 'خدمات التفتيش الصناعي' : 'Industrial Inspection Services',
                  language === 'ar' ? 'العمليات البحرية' : 'Offshore Operations',
                ].map((sector, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{sector}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <h4 className="text-sm font-semibold text-slate-400 mb-2">
                  {language === 'ar' ? 'السجل الصناعي' : 'Industry Track Record'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Saudi Aramco', 'Al-Khafji Joint Operations', 'SABIC', 'National Water Company'].map((c, i) => (
                    <Badge key={i} className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">{c}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Timeline Section */}
      <motion.section 
        ref={timelineRef}
        className="py-32 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M50%2050m-40%200a40%2040%200%201%201%2080%200a40%2040%200%201%201%20-80%200%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: timelineInView ? 1 : 0, y: timelineInView ? 0 : 30 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
              {language === 'ar' ? 'المحطات الرئيسية' : 'Company Milestones'}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {language === 'ar' ? 
                'محطات رئيسية في مسيرة شركة مكامن السعودية القابضة من التأسيس إلى اليوم' :
                'Key milestones in the journey of Saudi Makamin Holding Company from founding to present'
              }
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 rounded-full"></div>
            
            {timelineStory.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: timelineInView ? 1 : 0, x: timelineInView ? 0 : (index % 2 === 0 ? -100 : 100) }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-20 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-slate-800 z-10 flex items-center justify-center">
                  <event.icon className="w-4 h-4 text-white" />
                </div>
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 ml-16 md:ml-0' : 'md:pl-16 ml-16 md:ml-0'}`}>
                  <div className={`bg-gradient-to-r ${event.color} p-8 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300`}>
                    <div className="bg-slate-900/90 backdrop-blur-sm rounded-2xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl font-bold text-cyan-400">{event.year}</span>
                        <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                          {event.impact}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                      <p className="text-slate-300 text-lg leading-relaxed mb-6">{event.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-3xl font-bold text-white">{event.metrics.value}</span>
                          <span className="text-slate-400">{event.metrics.label}</span>
                        </div>
                        <event.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Vision, Mission & Objectives */}
      <section id="vision" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'ar' ? 'الرؤية والرسالة والأهداف' : 'Vision, Mission & Objectives'}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-3xl p-8 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6 mx-auto">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {language === 'ar' ? 'الرؤية' : 'Vision'}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'أن نكون الشريك الاستراتيجي الرائد والأكثر موثوقية في خدمات النفط والغاز في المملكة العربية السعودية ومنطقة الخليج.'
                  : 'To be the leading and most trusted strategic partner in oil & gas services in the Kingdom of Saudi Arabia and the Gulf region.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border border-emerald-500/30 rounded-3xl p-8 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mb-6 mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {language === 'ar' ? 'الرسالة' : 'Mission'}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {language === 'ar'
                  ? 'تقديم خدمات نفطية وغازية متكاملة بأعلى معايير الجودة والسلامة، مع الاستثمار في الكوادر الوطنية والتقنيات المتقدمة لتحقيق التنمية المستدامة.'
                  : 'Delivering integrated oil & gas services at the highest quality and safety standards, while investing in national talent and advanced technologies to achieve sustainable development.'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-3xl p-8 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 mx-auto">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {language === 'ar' ? 'الأهداف' : 'Objectives'}
              </h3>
              <ul className="text-slate-300 space-y-2 text-sm text-left">
                {[
                  language === 'ar' ? 'تعزيز الشراكات الاستراتيجية مع أرامكو السعودية والعملاء الرئيسيين' : 'Strengthen strategic partnerships with Saudi Aramco and key clients',
                  language === 'ar' ? 'التوسع الإقليمي في عمليات الخليج والبحرية' : 'Regional expansion in Gulf and offshore operations',
                  language === 'ar' ? 'تحقيق أعلى معايير السلامة والتميز التشغيلي' : 'Achieve highest safety and operational excellence standards',
                  language === 'ar' ? 'تطوير وتوطين الكفاءات الوطنية' : 'Develop and localize national competencies',
                  language === 'ar' ? 'التوافق الكامل مع رؤية 2030' : 'Full alignment with Saudi Vision 2030',
                ].map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership & Management Section */}
      <motion.section 
        id="management"
        ref={leadershipRef}
        className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: leadershipInView ? 1 : 0, y: leadershipInView ? 0 : 30 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {language === 'ar' ? 'القيادة العليا لشركة مكامن السعودية القابضة لخدمات النفط والغاز' : 'Executive Leadership of Saudi Makamin Holding Company for Oil & Gas Services'}
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              {language === 'ar' ? 
                'قيادة وطنية بخبرات دولية، مُنتخبة من المساهمين وفقاً للأنظمة المعتمدة، تعمل على تحقيق الأهداف الاستراتيجية للشركة بما يتوافق مع نظام الشركات' :
                'National leadership with international expertise, elected by shareholders in accordance with approved regulations, working to achieve the company\'s strategic objectives in compliance with corporate law'
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            {/* CEO Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: leadershipInView ? 1 : 0, x: leadershipInView ? 0 : -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-cyan-500 shadow-2xl">
                  <img 
                    src={leadership.ceo.photo}
                    alt={leadership.ceo.name}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center" style={{ display: 'none' }}>
                    <Crown className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{leadership.ceo.name}</h3>
                  <p className="text-cyan-400 font-semibold">{leadership.ceo.title}</p>
                  <p className="text-slate-400 text-sm mt-1">{leadership.ceo.subtitle}</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">{leadership.ceo.bio}</p>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <h4 className="text-lg font-semibold text-white mb-3">
                  {language === 'ar' ? 'ملامح القيادة' : 'Leadership Traits'}
                </h4>
                <ul className="space-y-2">
                  {leadership.ceo.keyTraits.map((trait, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{trait}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Board of Directors */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: leadershipInView ? 1 : 0, x: leadershipInView ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{leadership.board.title}</h3>
                  <p className="text-purple-400 font-semibold">
                    {language === 'ar' ? '7 أعضاء منتخبين' : '7 Elected Members'}
                  </p>
                </div>
              </div>
              
              {/* Legal Description */}
              <div className="bg-slate-800/50 rounded-xl p-4 mb-6">
                <p className="text-slate-300 text-sm leading-relaxed mb-3">{leadership.board.legalNote}</p>
                <p className="text-slate-400 text-xs">{leadership.board.electionNote}</p>
              </div>

              {/* Board Members */}
              <div className="space-y-3">
                {leadership.board.members.map((member, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-xl hover:bg-slate-700/50 transition-colors">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-slate-600">
                      {/* CEO - Adel Ayed ALNOOB */}
                      {(member.name.includes('عادل عايض النوب') || member.name.includes('Adel Ayed ALNOOB')) && (
                        <img 
                          src="/attached_assets/ADEL AYED ALNOOB_1752885031070.jpg"
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      )}
                      {/* Vice Chairman - Ibrahim Ahmed Sabti Al-Ghamdi */}
                      {(member.name.includes('إبراهيم أحمد الغامدي') || member.name.includes('Ibrahim Ahmed Al-Ghamdi') || member.name.includes('Ibrahim Ahmed Sabti')) && (
                        <img 
                          src="/attached_assets/Ibrahim Ahmed Sabti Alghamdi_1752784084513.png"
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                        />
                      )}
                      {/* Executive Committee Chairman - Ibrahim Abdullah Al-Jalal */}
                      {(member.name.includes('إبراهيم عبدالله الجلال') || member.name.includes('Ibrahim Abdullah Al-Jalal')) && (
                        <img 
                          src="/attached_assets/Ibrahim Abdullah Al-Jallal_1752784084513.png"
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                        />
                      )}
                      {/* Board Member - Khalid Hamdan Al-Saif */}
                      {(member.name.includes('خالد حمدان السيف') || member.name.includes('Khalid Hamdan Al-Saif')) && (
                        <img 
                          src="/attached_assets/Khaled Hamdan Alsaif_1752784084514.png"
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                        />
                      )}
                      {/* Board Member - Hamad Ali Al-Qahtani */}
                      {(member.name.includes('حمد علي القحطاني') || member.name.includes('Hamad Ali Al-Qahtani')) && (
                        <img 
                          src="/attached_assets/HamadAlQahtani_1752784084512.png"
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                        />
                      )}
                      {/* Board Member - Mohammad Jassim Ibrahim Al-Fawaz */}
                      {(member.name.includes('محمد جاسم الفواز') || member.name.includes('Mohammed Jasim Al-Fawaz') || member.name.includes('Mohammad Jassim Ibrahim')) && (
                        <img 
                          src="/attached_assets/Mohammad Jassim Ibrahim Alfawaz_1752784084515.png"
                          alt={member.name}
                          className="w-full h-full object-cover object-center"
                        />
                      )}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{member.name}</h4>
                      <p className="text-slate-400 text-xs">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Board Committees Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: leadershipInView ? 1 : 0, y: leadershipInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 shadow-2xl mb-16"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {leadership.committees.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {leadership.committees.list.map((committee, i) => (
                <div key={i} className="bg-slate-800/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">{committee.name}</h4>
                      <p className="text-slate-400 text-xs">{committee.head}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{committee.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Board Traits Footer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: leadershipInView ? 1 : 0, y: leadershipInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mb-8"
          >
            <p className="text-slate-500 text-sm leading-relaxed">
              {language === 'ar' ? 
                'انتخاب نظامي معتمد • خبرات هندسية وقانونية ومالية • تمثيل للمساهمين الكويتيين والسعوديين' :
                'Approved Regulatory Election • Engineering, Legal, and Financial Expertise • Representation of Kuwaiti and Saudi Shareholders'
              }
            </p>
          </motion.div>

          {/* Leadership Motto Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: leadershipInView ? 1 : 0, y: leadershipInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl p-8 border border-blue-500/30"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
                <Compass className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {language === 'ar' ? 'قيادة ملتزمة بإعادة بناء مكامن وتحقيق أهدافها الاستراتيجية' : 'Leadership Committed to Rebuilding Makamin and Achieving Its Strategic Goals'}
              </h3>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Independent Strategic Committees Section */}
      <motion.section 
        id="core-committees"
        data-committees
        className="py-32 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"
      >
        <div className="container mx-auto px-4 lg:px-8 about-executive-committee">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {language === 'ar' ? 'اللجان الاستراتيجية المستقلة (2025–2029)' : 'Independent Strategic Committees (2025–2029)'}
            </h2>
            <div className="space-y-2 text-slate-300 max-w-4xl mx-auto">
              <p className="text-xl">
                {language === 'ar' ? 
                  'مُعينة بقرار الجمعية العمومية (2025–2029)' :
                  'Appointed by General Assembly Resolution (2025–2029)'
                }
              </p>
              <p className="text-lg">
                {language === 'ar' ? 
                  'تحت الإشراف القضائي النهائي' :
                  'Under Final Judicial Oversight'
                }
              </p>
              <p className="text-md">
                {language === 'ar' ? 
                  'مُشكلة بما يتوافق مع بروتوكول إصلاح الحوكمة 2025' :
                  'Formed in compliance with Governance Reform Protocol 2025'
                }
              </p>
            </div>
          </motion.div>

          <div className="space-y-16">


            {/* Executive Committee */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700 committee"
              data-committee="executive"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {language === 'ar' ? 'اللجنة التنفيذية' : 'Executive Committee'}
                  </h3>
                  <p className="text-blue-400 font-semibold">
                    {language === 'ar' ? 'رئيس: م. حمد القحطاني' : 'Chairman: Eng. Hamad Al-Qahtani'}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Chairman */}
                <div className="grid md:grid-cols-3 gap-6 bg-slate-800/30 rounded-2xl p-6">
                  <div className="md:col-span-1">
                    <div className="text-center">
                      <motion.img 
                        src="/attached_assets/HamadAlQahtani_1752784084512.png" 
                        alt="Eng. Hamad Al-Qahtani"
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500 shadow-2xl hover:shadow-blue-500/60 transition-all duration-500"
                        whileHover={{ scale: 1.08, rotate: -2 }}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128' viewBox='0 0 24 24' fill='none' stroke='%233b82f6' stroke-width='2'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E";
                        }}
                      />
                      <h4 className="text-lg font-bold text-white mb-2">
                        {language === 'ar' ? 'م. حمد القحطاني' : 'Eng. Hamad Al-Qahtani'}
                      </h4>
                      <p className="text-blue-400 text-sm font-semibold">
                        {language === 'ar' ? 'رئيس اللجنة التنفيذية' : 'Executive Committee Chairman'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-slate-300 leading-relaxed text-sm mb-3">
                      {language === 'ar' ? 
                        'تنفيذي طاقة متميز مع أكثر من عقدين من القيادة التحويلية في منطقة الخليج، م. حمد القحطاني يشغل حالياً منصب الرئيس التنفيذي لشركة بيت الطاقة القابضة (سابقاً عارف للطاقة). يحمل ماجستير إدارة أعمال في المالية من مدرسة ماستريخت للإدارة وبكالوريوس في الهندسة الميكانيكية من الجامعة الكاثوليكية الأمريكية، يجمع بين البصيرة الاستراتيجية والإتقان التقني.' :
                        'A distinguished energy executive with over two decades of transformative leadership in the Gulf region, Eng. Hamad Al-Qahtani currently serves as CEO of The Energy House Holding Company (formerly AREF Energy). Holding an MBA in Finance from Maastricht School of Management and a BASc in Mechanical Engineering from The Catholic University of America, he combines strategic foresight with technical mastery.'
                      }
                    </p>
                    <p className="text-slate-400 text-xs">
                      {language === 'ar' ? 
                        'طوال مسيرته المهنية، قاد كيانات رئيسية مثل إنفيتا الكويت وشركة الفنادق الكويتية، رائداً في إعادة الهيكلة واسعة النطاق والتوسعات الدولية والمفاوضات عالية المخاطر. متخصص في إدارة التغيير واللوجستيات واستراتيجية الاستثمار، م. القحطاني معروف بقدرته النادرة على تحويل العمليات الراكدة إلى محركات نمو.' :
                        'Throughout his career, he has led major entities such as Invita Kuwait and Kuwait Hotels Company, spearheading large-scale restructuring, international expansions, and high-stakes negotiations. A specialist in change management, logistics, and investment strategy, Eng. Al-Qahtani is known for his rare ability to turn stagnant operations into growth engines.'
                      }
                    </p>
                  </div>
                </div>

                {/* Members */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Dr. Khaled Hamdan Alsaif */}
                  <div className="bg-slate-800/30 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.img 
                        src="/attached_assets/Khaled Hamdan Alsaif_1752784084514.png" 
                        alt="Dr. Khaled Hamdan Alsaif"
                        className="w-24 h-24 rounded-full object-cover border-3 border-cyan-500 shadow-xl hover:shadow-cyan-500/60 transition-all duration-500"
                        whileHover={{ scale: 1.15, rotate: 3 }}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%2306b6d4' stroke-width='2'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E";
                        }}
                      />
                      <div>
                        <h4 className="text-md font-bold text-white">
                          {language === 'ar' ? 'د. خالد حمدان السيف' : 'Dr. Khaled Hamdan Alsaif'}
                        </h4>
                        <p className="text-cyan-400 text-xs">
                          {language === 'ar' ? 'استراتيجي الطاقة – مهندس التنظيم' : 'Energy Strategist – Organizational Architect'}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {language === 'ar' ? 
                        'قوة في القيادة الاستراتيجية والتميز التشغيلي، د. خالد السيف يجلب أكثر من 35 عاماً من الخبرة الفائقة في قطاعات النفط والطاقة الكويتية. كرئيس تنفيذي سابق ونائب رئيس مجلس إدارة نابيسكو، حوّل المسار المالي للشركة - نامياً الإيرادات من أقل من 5 مليون دينار كويتي إلى أكثر من 35 مليون دينار كويتي.' :
                        'A powerhouse of strategic leadership and operational excellence, Dr. Khaled Alsaif brings over 35 years of unmatched experience in Kuwait\'s oil and energy sectors. As former CEO and Deputy Chairman of NAPESCO, he transformed the company\'s financial trajectory—growing revenues from under KD 5 million to over KD 35 million.'
                      }
                    </p>
                  </div>

                  {/* Mohammad Jassim Ibrahim Alfawaz */}
                  <div className="bg-slate-800/30 rounded-2xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.img 
                        src="/attached_assets/Mohammad Jassim Ibrahim Alfawaz_1752784084515.png" 
                        alt="Mohammad Jassim Ibrahim Alfawaz"
                        className="w-24 h-24 rounded-full object-cover border-3 border-purple-500 shadow-xl hover:shadow-purple-500/60 transition-all duration-500"
                        whileHover={{ scale: 1.15, rotate: -3 }}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%238b5cf6' stroke-width='2'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E";
                        }}
                      />
                      <div>
                        <h4 className="text-md font-bold text-white">
                          {language === 'ar' ? 'محمد جاسم إبراهيم الفواز' : 'Mohammad Jassim Ibrahim Alfawaz'}
                        </h4>
                        <p className="text-purple-400 text-xs">
                          {language === 'ar' ? 'الرؤيا الاستراتيجية – قائد الطاقة والطيران' : 'Strategic Visionary – Energy & Aviation Leader'}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {language === 'ar' ? 
                        'محمد الفواز تنفيذي ديناميكي وصاحب رؤية مع أكثر من عقدين من القيادة التنفيذية عبر الطاقة وخدمات حقول النفط والطيران المدني. كمؤسس مشارك ورئيس مجلس إدارة ريماس الشرق وخدمات حقول النفط الشرق الأوسط، بنى مؤسسات مرنة متعددة الملايين عبر الكويت والسعودية والإمارات.' :
                        'Mohammad Alfawaz is a dynamic and visionary executive with over two decades of C-level leadership spanning energy, oilfield services, and national aviation. As Co-founder and Chairman of Remas East and Middle East Oilfield Services, he built resilient multi-million-dollar enterprises across Kuwait, Saudi Arabia, and the UAE.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Projects Committee */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700 committee"
              data-committee="projects"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Drill className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {language === 'ar' ? 'لجنة المشاريع' : 'Projects Committee'}
                  </h3>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Member */}
                <div className="bg-slate-800/30 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <motion.img 
                      src="/attached_assets/Ibrahim Ahmed Sabti Alghamdi_1752784084513.png" 
                      alt="Eng. Ibrahim Ahmed Sabti Alghamdi"
                      className="w-24 h-24 rounded-full object-cover border-3 border-red-500 shadow-xl hover:shadow-red-500/60 transition-all duration-500"
                      whileHover={{ scale: 1.15, rotate: 2 }}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 24 24' fill='none' stroke='%23ef4444' stroke-width='2'%3E%3Cpath d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='12' cy='7' r='4'%3E%3C/circle%3E%3C/svg%3E";
                      }}
                    />
                    <div>
                      <h4 className="text-md font-bold text-white">
                        {language === 'ar' ? 'م. إبراهيم أحمد صبتي الغامدي' : 'Eng. Ibrahim Ahmed Sabti Alghamdi'}
                      </h4>
                      <p className="text-red-400 text-xs">
                        {language === 'ar' ? 'خبير الحفر المخضرم – رائد البحرية – حامل البراءة' : 'Veteran Drilling Expert – Offshore Pioneer – Patent Holder'}
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed mb-3">
                    {language === 'ar' ? 
                      'م. إبراهيم الغامدي أسطورة في هندسة البترول مع 37 عاماً من الخدمة المتميزة في أرامكو السعودية، عبر الحفر البري والبحري واللوجستيات والبحث والتطوير والتطوير الحقلي الاستراتيجي. سيد العمليات عالية المخاطر، قاد استعادة الكوارث لانفجار بئر عين دار-30 - محارباً الحرائق وتنفيذ آبار الإغاثة واستعادة السيطرة الكاملة.' :
                      'Eng. Ibrahim Alghamdi is a petroleum engineering legend with 37 years of elite service in Saudi Aramco, spanning onshore and offshore drilling, logistics, R&D, and strategic field development. A master of high-risk operations, he led the disaster recovery of Ain Dar Well-30 blowout—fighting fires, executing relief wells, and restoring full control.'
                    }
                  </p>
                  <div className="bg-slate-900/50 rounded-lg p-3">
                    <p className="text-slate-400 text-xs">
                      {language === 'ar' ? 
                        'من رئيس منصة حفر إلى مدير هندسة الإصلاح، الغامدي قاد أدواراً قيادية متعددة، بما في ذلك المدير بالإنابة للاستكشاف وكبير العلماء في بحث وتطوير أرامكو ومشرف مشاريع ضخمة مثل غاز الحرض ومنيفة. • خبيران نخبة (غير مسميان)' :
                        'From rig foreman to Director of Workover Engineering, Alghamdi commanded multiple leadership roles, including Acting Director for Exploration, Chief Scientist in Aramco\'s R&D, and Superintendent of mega projects like Haradh Gas and Manifa. • Two Elite Experts (unnamed)'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Administrative and Legal Committee */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700 committee"
              data-committee="legal"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white" data-title>
                    Administrative and Legal Committee
                  </h3>
                  <p className="text-purple-400 font-semibold italic">
                    (The Permanent Committee for Regulatory Affairs)
                  </p>
                </div>
              </div>
              
              <div className="bg-slate-800/30 rounded-2xl p-6">
                <p className="text-slate-300 leading-relaxed text-sm mb-6" data-description>
                  Makamin's <strong className="text-white">Administrative and Legal Committee</strong> is the company's permanent body responsible for ensuring full compliance with Saudi laws and regulations, overseeing all legal and administrative matters, and reviewing strategic contracts and agreements.
                </p>
                
                <p className="text-slate-300 leading-relaxed text-sm mb-6">
                  This committee comprises a comprehensive legal and regulatory team:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm"><strong className="text-white">6 Saudi legal counsels</strong></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm"><strong className="text-white">2 independent law firms</strong> (local)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm"><strong className="text-white">1 international law firm</strong> based in Malaysia</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm"><strong className="text-white">1 UAE-based law firm</strong></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm"><strong className="text-white">1 Kuwaiti-based law firm</strong></span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm"><strong className="text-white">6 Certified Public Accountants (CPAs)</strong></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="flex items-center gap-2">
                        <img 
                          src="/attached_assets/kpmg-logo-1_1753201810753.webp" 
                          alt="KPMG Logo"
                          className="h-5 object-contain"
                        />
                        <span className="text-slate-300 text-sm">external audit and compliance support</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm"><strong className="text-white">13 licensed government relations officers</strong> (GR officers)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm"><strong className="text-white">3 retired criminal investigation officers</strong></span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-500/30">
                  <p className="text-purple-200 text-sm font-semibold text-center">
                    This committee is responsible for safeguarding Makamin's legal, regulatory, and contractual compliance across Saudi Arabia and the GCC.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Expandable Services Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
              {language === 'ar' ? 'أقسام الأعمال' : 'Business Divisions'}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {language === 'ar' ? 
                'حلول متكاملة ومتخصصة في جميع جوانب صناعة النفط والغاز، مدعومة بخبرة تقنية عالية وتقنيات متطورة' :
                'Comprehensive, specialized solutions across all aspects of oil & gas industry, backed by high technical expertise and advanced technologies'
              }
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl">
                      <CardHeader className="pb-4">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <dept.animatedIcon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-white text-xl group-hover:text-cyan-300 transition-colors">
                              {dept.title}
                            </CardTitle>
                            <p className="text-slate-400 text-sm">
                              {language === 'ar' ? 'انقر للتفاصيل' : 'Click for details'}
                            </p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-cyan-400 ml-auto group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 leading-relaxed mb-4">{dept.description}</p>
                        <div className="flex items-center gap-2 text-sm text-slate-400">
                          <Building className="w-4 h-4" />
                          <span>{dept.clients.join(', ')}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="bg-slate-900 border-slate-700 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <dept.animatedIcon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <DialogTitle className="text-2xl font-bold text-white">{dept.title}</DialogTitle>
                          <p className="text-cyan-400">
                            {language === 'ar' ? 'الخدمات التفصيلية' : 'Detailed Services'}
                          </p>
                        </div>
                      </div>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      <div className="bg-slate-800/50 rounded-2xl p-6">
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {language === 'ar' ? 'نظرة عامة' : 'Overview'}
                        </h3>
                        <p className="text-slate-300 leading-relaxed">{dept.details}</p>
                      </div>

                      <div className="bg-slate-800/50 rounded-2xl p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          {language === 'ar' ? 'القدرات الأساسية' : 'Core Capabilities'}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {dept.capabilities.map((capability, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-xl">
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                              <span className="text-slate-300">{capability}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-slate-800/50 rounded-2xl p-6">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          {language === 'ar' ? 'عملاء رئيسيون' : 'Key Clients'}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {dept.clients.map((client, i) => (
                            <Badge key={i} className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2">
                              {client}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-6 border border-cyan-500/30">
                        <div className="flex items-center gap-3 mb-3">
                          <Star className="w-6 h-6 text-yellow-400" />
                          <h3 className="text-xl font-semibold text-white">
                            {language === 'ar' ? 'التميز التقني' : 'Technical Excellence'}
                          </h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed">
                          {language === 'ar' ? 
                            'نحن نلتزم بأعلى معايير الجودة والسلامة، مع فريق من المهندسين والتقنيين المتخصصين والمعتمدين دولياً.' :
                            'We commit to the highest quality and safety standards, with a team of specialized, internationally certified engineers and technicians.'
                          }
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals & Values Section */}
      <section
        id="goals"
        ref={valuesRef}
        className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: valuesInView ? 1 : 0, y: valuesInView ? 0 : 30 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'ar' ? 'الأهداف والقيم' : 'Goals & Values'}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {language === 'ar'
                ? 'القيم الأساسية التي تقود عملياتنا وتحدد هويتنا'
                : 'The core values that drive our operations and define who we are'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: language === 'ar' ? 'جودة عالية' : 'High Quality',
                description: language === 'ar' ? 'الالتزام بأعلى معايير الجودة في جميع الخدمات والعمليات' : 'Commitment to the highest quality standards across all services and operations',
                color: 'from-blue-500 to-cyan-500',
                border: 'border-blue-500/30'
              },
              {
                icon: TrendingUp,
                title: language === 'ar' ? 'التنمية المستدامة' : 'Sustain Development',
                description: language === 'ar' ? 'تحقيق النمو المتوازن مع الحفاظ على البيئة والموارد للأجيال القادمة' : 'Achieving balanced growth while preserving the environment and resources for future generations',
                color: 'from-emerald-500 to-green-500',
                border: 'border-emerald-500/30'
              },
              {
                icon: Heart,
                title: language === 'ar' ? 'التوجه نحو العملاء' : 'Customer Oriented',
                description: language === 'ar' ? 'العميل هو محور اهتمامنا ونسعى لتجاوز توقعاته في كل مشروع' : 'The client is at the center of our focus and we strive to exceed expectations in every project',
                color: 'from-red-500 to-pink-500',
                border: 'border-red-500/30'
              },
              {
                icon: Globe,
                title: language === 'ar' ? 'الالتزام الاجتماعي' : 'Social Commitment',
                description: language === 'ar' ? 'المساهمة الفعالة في تنمية المجتمع ودعم المبادرات الاجتماعية' : 'Active contribution to community development and supporting social initiatives',
                color: 'from-purple-500 to-indigo-500',
                border: 'border-purple-500/30'
              },
              {
                icon: Users,
                title: language === 'ar' ? 'موظفونا' : 'Our People',
                description: language === 'ar' ? 'الاستثمار في تطوير كوادرنا البشرية وتوفير بيئة عمل محفزة وآمنة' : 'Investing in our people\'s development and providing a motivating and safe work environment',
                color: 'from-amber-500 to-orange-500',
                border: 'border-amber-500/30'
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: valuesInView ? 1 : 0, y: valuesInView ? 0 : 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border ${value.border} hover:scale-105 transition-all duration-300 text-center`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${value.color} mb-4`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizational Chart Section */}
      <section id="orgchart" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'ar' ? 'الهيكل التنظيمي' : 'Organizational Chart'}
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              {language === 'ar'
                ? 'الهيكل الإداري والتنظيمي لشركة مكامن السعودية القابضة'
                : 'Administrative and organizational structure of Saudi Makamin Holding Company'}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl p-6 border border-blue-500/30 text-center mb-8"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-3 mx-auto">
                <Crown className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {language === 'ar' ? 'الرئيس التنفيذي (CEO)' : 'Chief Executive Officer (CEO)'}
              </h3>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { title: language === 'ar' ? 'المدير المالي (CFO)' : 'CFO', icon: DollarSign, color: 'from-green-500 to-emerald-500' },
                { title: language === 'ar' ? 'الشؤون القانونية' : 'Legal', icon: Shield, color: 'from-purple-500 to-indigo-500' },
                { title: language === 'ar' ? 'تقنية المعلومات' : 'IT', icon: Cog, color: 'from-cyan-500 to-blue-500' },
              ].map((dept, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center"
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${dept.color} mb-2`}>
                    <dept.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">{dept.title}</h4>
                </motion.div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { title: language === 'ar' ? 'المستودعات واللوجستيات' : 'Warehouse & Logistics', icon: Package },
                { title: language === 'ar' ? 'المحاسبة' : 'Accounting', icon: DollarSign },
                { title: language === 'ar' ? 'الشؤون الإدارية والموظفين' : 'Admin & Personnel', icon: Users },
                { title: language === 'ar' ? 'العلاقات العامة' : 'Public Relations', icon: Globe },
              ].map((dept, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 flex items-center gap-3"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-700 flex-shrink-0">
                    <dept.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">{dept.title}</h4>
                </motion.div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-cyan-400 mb-4 text-center">
              {language === 'ar' ? 'الأقسام التشغيلية' : 'Operational Departments'}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: language === 'ar' ? 'قسم الأنابيب' : 'Pipeline Department', icon: Settings },
                { title: language === 'ar' ? 'قسم الحفر' : 'Drilling Department', icon: Drill },
                { title: language === 'ar' ? 'قسم علوم الأرض' : 'Geoscience Department', icon: Compass },
                { title: language === 'ar' ? 'قسم التفتيش' : 'Inspection Department', icon: Search },
                { title: 'ZENCUS', icon: Cog },
              ].map((dept, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-4 border border-cyan-500/20 flex items-center gap-3"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex-shrink-0">
                    <dept.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white">{dept.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshop / Camp Locations Section */}
      <section id="locations" className="py-24 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'ar' ? 'مواقع الورش والمعسكرات' : 'Workshop & Camp Locations'}
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-3xl p-8 md:p-10 border border-slate-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex-shrink-0">
                  <Building className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {language === 'ar' ? 'معسكر مكامن عيون' : 'Makamin Oyun Camp'}
                  </h3>
                  <p className="text-cyan-400 text-sm font-medium">
                    {language === 'ar' ? 'منطقة العيون – الأحساء – المنطقة الشرقية – المملكة العربية السعودية' : 'Al-Oyun Area – Al-Ahsa – Eastern Province – Saudi Arabia'}
                  </p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-8">
                {language === 'ar'
                  ? 'يعمل معسكر مكامن عيون كمنشأة دعم تشغيلي للأنشطة الميدانية والخدمات الصناعية وأعمال التفتيش واللوجستيات المرتبطة بعمليات مكامن في قطاع النفط والغاز بالمنطقة الشرقية. يدعم المعسكر مجموعة واسعة من المتطلبات التشغيلية عبر خدمات الأنابيب ودعم الحفر والتفتيش الصناعي والهندسة الميدانية.'
                  : 'Makamin Oyun Camp serves as an operational support facility for field activities, industrial services, inspection work, and project logistics associated with Makamin\'s oil and gas operations in the Eastern Province of Saudi Arabia. The camp supports a range of operational requirements across pipeline services, drilling support, industrial inspection, and field engineering activities.'}
              </p>

              <h4 className="text-xl font-bold text-white mb-6">
                {language === 'ar' ? 'المرافق التشغيلية للمعسكر' : 'Camp Operational Facilities'}
              </h4>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {[
                  {
                    category: language === 'ar' ? 'مناطق التفتيش والاختبار' : 'Inspection & Testing Areas',
                    icon: Search,
                    color: 'from-blue-500 to-cyan-500',
                    items: language === 'ar'
                      ? ['منطقة فحص الأشعة السينية', 'حفرة تخزين NDT', 'مناطق دعم معدات التفتيش']
                      : ['X-Ray Inspection Area', 'NDT Storage Pit', 'Inspection equipment support areas']
                  },
                  {
                    category: language === 'ar' ? 'ورش التصنيع والصناعة' : 'Fabrication & Industrial Workshops',
                    icon: Wrench,
                    color: 'from-orange-500 to-red-500',
                    items: language === 'ar'
                      ? ['ورشة تصنيع اللحام', 'ورشة تصنيع الطلاء']
                      : ['Welding Fabrication Workshop', 'Coating Fabrication Workshop']
                  },
                  {
                    category: language === 'ar' ? 'اللوجستيات والتخزين' : 'Logistics & Storage',
                    icon: Package,
                    color: 'from-green-500 to-emerald-500',
                    items: language === 'ar'
                      ? ['المستودع المركزي', 'منطقة معالجة المواد الخردة', 'مناطق تخزين مفتوحة']
                      : ['Central Warehouse', 'Scrap Material Handling Area', 'Open operational storage areas']
                  },
                  {
                    category: language === 'ar' ? 'العمليات والدعم الميداني' : 'Operations & Field Support',
                    icon: Settings,
                    color: 'from-purple-500 to-indigo-500',
                    items: language === 'ar'
                      ? ['الساحة المدنية', 'ساحة المركبات', 'مكتب الموقع']
                      : ['Civil Yard', 'Motor Pool', 'Site Office']
                  },
                  {
                    category: language === 'ar' ? 'مرافق الموظفين' : 'Personnel Facilities',
                    icon: Users,
                    color: 'from-amber-500 to-orange-500',
                    items: language === 'ar'
                      ? ['منطقة مرافق إقامة المعسكر', 'مناطق دعم العمليات للموظفين']
                      : ['Camp Accommodation Facility Area', 'Staff operational support areas']
                  },
                  {
                    category: language === 'ar' ? 'الوصول وحركة الموقع' : 'Access & Site Movement',
                    icon: MapPin,
                    color: 'from-cyan-500 to-teal-500',
                    items: language === 'ar'
                      ? ['المدخل الرئيسي', 'طرق الوصول التشغيلية الداخلية']
                      : ['Main Entrance', 'Internal operational access routes']
                  },
                ].map((facility, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-slate-900/50 rounded-xl p-5 border border-slate-700/50"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r ${facility.color} flex-shrink-0`}>
                        <facility.icon className="w-4 h-4 text-white" />
                      </div>
                      <h5 className="text-sm font-bold text-white">{facility.category}</h5>
                    </div>
                    <ul className="space-y-1.5">
                      {facility.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-400 text-xs">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <h4 className="text-xl font-bold text-white mb-4">
                {language === 'ar' ? 'مخطط المعسكر' : 'Camp Layout'}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {language === 'ar'
                  ? 'يوضح مخطط المعسكر التوزيع التشغيلي للموقع، بما في ذلك مناطق التفتيش والتصنيع والتخزين واللوجستيات والمكاتب والإقامة التي تدعم أنشطة خدمات مكامن الميدانية.'
                  : 'The camp layout provides a view of the site\'s operational arrangement, showing the distribution of inspection, fabrication, storage, logistics, office, and accommodation areas that support Makamin\'s field service activities.'}
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-slate-600 bg-white mb-8"
              >
                <img
                  src={campLayoutPath}
                  alt="Makamin Oyun Camp operational layout and facilities in Al Oyun, Al Ahsa, Saudi Arabia"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </motion.div>

              <h4 className="text-xl font-bold text-white mb-4">
                {language === 'ar' ? 'الموقع' : 'Location'}
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {language === 'ar'
                  ? 'يقع معسكر مكامن عيون في العيون، الأحساء، بالمنطقة الشرقية، المملكة العربية السعودية.'
                  : 'Makamin Oyun Camp is located in Al-Oyun, Al-Ahsa, in the Eastern Province of Saudi Arabia.'}
              </p>
              <a
                href="https://maps.google.com/?q=25.3630,49.5900"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
              >
                <MapPin className="w-5 h-5" />
                {language === 'ar' ? 'عرض على الخريطة' : 'View on Map'}
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
