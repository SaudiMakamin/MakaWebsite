import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Building, Drill, Droplets, Globe, CheckCircle, ArrowRight, Calendar, MapPin, Award, Users, Zap, Filter, Search, Eye, Target, Wrench, Ship, Layers, Command, ChevronDown, Play, X, Shield } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import { AnimatedDrillIcon, AnimatedShipIcon, AnimatedPipelineIcon } from '@/components/animated-svg-icons';
import InsideMakaminGallery from '@/components/inside-makamin-gallery';
import TeamGallery from '@/components/team-gallery';
import HeroLogo from '@/components/hero-logo';
import { useState } from 'react';

// Import authentic project images
import heroCarouselPath from '@assets/hero-carousel-1_1752529906169.jpg';
import drillingOperationsPath from '@assets/IMG-20250710-WA0011_1752529906170.jpg';
import processingFacilityPath from '@assets/IMG-20250710-WA0012_1752529906171.jpg';
import offshorePlatformPath from '@assets/IMG-20250710-WA0013_1752529906171.jpg';
import marineOperationsPath from '@assets/IMG-20250710-WA0019_1752529906172.jpg';
import inspectionOperationsPath from '@assets/IMG-20250710-WA0020_1752529906172.jpg';
import operationalImage1 from '@assets/IMG-20250710-WA0006_1752524450265.jpg';
import operationalImage2 from '@assets/IMG-20250710-WA0008_1752524450265.jpg';
import pipelineInstallationPath from '@assets/صورة2_1752532266188.jpg';
import industrialFacilityPath from '@assets/صورة3_1752532266188.jpg';
import qualityControlPath from '@assets/صورة5_1752532266189.jpg';
import technicalOperationsPath from '@assets/صورة6_1752532266190.jpg';

// Import client logos
import aramcoLogoPath from '@assets/aramco-logo--white_1752761457820.webp';
import nwcLogoPath from '@assets/Logo_1752761464998.jpg';

// Import official Makamin logo
import makaminOfficialLogo from '@assets/logo mkamin_1752524503536.png';

export default function Projects() {
  const { language } = useLanguageContext();
  const [selectedClient, setSelectedClient] = useState('all');
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCase, setExpandedCase] = useState<string | null>(null);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  // Authentic Major Projects Database with Visual Assets
  const projectsDatabase = [
    {
      id: 'pipeline-installations',
      title: language === 'ar' ? 'تركيب خطوط الأنابيب الرئيسية' : 'Major Pipeline Installations',
      description: language === 'ar' ? 'مشاريع الأنابيب الاستراتيجية في القطيف وحرض وأبقيق وشدقم والعثمانية' : 'Strategic pipeline projects in Qatif, Haradh, Abqaiq, Shedgum, Uthmaniyah',
      sector: 'Pipeline',
      client: 'Saudi Aramco',
      year: '2016-2019',
      status: 'Completed',
      image: pipelineInstallationPath,
      icon: AnimatedPipelineIcon,
      locations: ['Qatif', 'Haradh', 'Abqaiq', 'Shedgum', 'Uthmaniyah'],
      projectValue: 'SAR 45M+',
      scope: language === 'ar' ? 
        'أكثر من 20 مشروع مكتمل يشمل تركيب الأنابيب وأنظمة حقن المياه وأنظمة المراقبة المتقدمة' :
        '20+ completed projects including pipeline installations, water injection systems, and advanced monitoring systems',
      technologies: [
        'Pipeline tie-in installations',
        'Water injection systems',
        'Downhole monitoring systems',
        'RTR line installations',
        'Trunk line rehabilitations'
      ],
      outcomes: [
        'Zero safety incidents',
        'On-time delivery',
        'Cost optimization achieved',
        'Client satisfaction rating: 98%'
      ]
    },
    {
      id: 'multiphase-flow',
      title: language === 'ar' ? 'أنظمة قياس التدفق متعددة الأطوار' : 'Multiphase Flow Meter Systems',
      description: language === 'ar' ? 'تركيب وتكامل أنظمة MPFM المتقدمة عالية الدقة' : 'Installation and integration of advanced high-precision MPFM systems',
      sector: 'Processing',
      client: 'Saudi Aramco',
      year: '2017-2020',
      status: 'Completed',
      image: processingFacilityPath,
      icon: AnimatedDrillIcon,
      locations: ['Multiple Fields'],
      projectValue: 'SAR 28M+',
      scope: language === 'ar' ?
        'تركيب مقاييس التدفق متعددة الأطوار وأنظمة الإنتاج منخفضة الضغط مع التكامل الكامل' :
        'Installation of multiphase flow meters and low-pressure production systems with full integration',
      technologies: [
        'MPFM system integration',
        'Low Pressure Production Systems (LPPS)',
        'Permanent Downhole Monitoring Systems',
        'Centrifugal pump installations'
      ],
      outcomes: [
        'Production efficiency increased by 15%',
        'Real-time monitoring achieved',
        'System reliability: 99.7%',
        'Advanced analytics implementation'
      ]
    },
    {
      id: 'drilling-operations',
      title: language === 'ar' ? 'عمليات الحفر المتقدمة' : 'Advanced Drilling Operations',
      description: language === 'ar' ? 'حفر آبار المياه والإصلاح مع تقنيات متطورة' : 'Water well drilling and workover operations with advanced technologies',
      sector: 'Drilling',
      client: 'Saudi Aramco',
      year: '2015-2021',
      status: 'Completed',
      image: drillingOperationsPath,
      icon: AnimatedDrillIcon,
      locations: ['LIDAM', 'UMAMR', 'ABUJFN', 'MZLG', 'ABJF', 'SDGM', 'SNMN', 'USFR', 'UYRS', 'AHDB'],
      projectValue: 'SAR 62M+',
      scope: language === 'ar' ?
        'عشرات الآبار المحفورة بأعماق تتراوح من 100 إلى 6000+ قدم مع تقنيات متطورة' :
        'Dozens of wells drilled with depths ranging from 100 to 6,000+ ft using advanced technologies',
      technologies: [
        'Workover operations',
        'Deep water drilling',
        'Water well drilling',
        'Soil testing and core drilling',
        'Micro-seismic monitoring'
      ],
      outcomes: [
        'Successfully completed 50+ wells',
        'Depth precision: ±0.5m accuracy',
        'Zero environmental incidents',
        'Record completion times achieved'
      ]
    },
    {
      id: 'inspection-services',
      title: language === 'ar' ? 'خدمات الفحص الصناعي المتقدمة' : 'Advanced Industrial Inspection Services',
      description: language === 'ar' ? 'فحص أرضيات الخزانات والفحص غير المدمر بتقنيات متطورة' : 'Tank floor inspection and non-destructive testing with advanced technologies',
      sector: 'Inspection',
      client: 'Saudi Aramco',
      year: '2018-2024',
      status: 'Ongoing',
      image: inspectionOperationsPath,
      icon: AnimatedShipIcon,
      locations: ['Multiple Facilities'],
      projectValue: 'SAR 35M+',
      scope: language === 'ar' ?
        'أكثر من 30 عقد فحص شامل بما في ذلك فحص الأرضيات والأنابيب مع تقنيات متطورة' :
        '30+ comprehensive inspection contracts including floor and tube inspections with advanced technologies',
      technologies: [
        'MFL Tank Floor Inspection',
        'Corrosion Coupon Surveys',
        'API Inspection services',
        'Tube inspection systems',
        'Risk-based inspection implementation'
      ],
      outcomes: [
        'Detection accuracy: 99.8%',
        'Preventive maintenance optimization',
        'Cost reduction: 25%',
        'Asset life extension achieved'
      ]
    },
    {
      id: 'offshore-marine-operations',
      title: language === 'ar' ? 'العمليات البحرية المتخصصة' : 'Specialized Marine Operations',
      description: language === 'ar' ? 'عمليات الغوص والمركبات المائية عن بُعد ROV' : 'Diving operations and Remote Operated Vehicle (ROV) services',
      sector: 'Offshore',
      client: 'Saudi Aramco',
      year: '2019-2023',
      status: 'Completed',
      image: offshorePlatformPath,
      icon: AnimatedShipIcon,
      locations: ['Arabian Gulf', 'Red Sea'],
      projectValue: 'SAR 78M+',
      scope: language === 'ar' ?
        'عمليات الغوص التجاري والمركبات المائية عن بُعد لفحص وصيانة المنشآت البحرية' :
        'Commercial diving operations and ROV services for offshore facility inspection and maintenance',
      technologies: [
        'Commercial diving services',
        'ROV inspection systems',
        'Underwater welding and cutting',
        'Subsea construction',
        'Marine geotechnical services'
      ],
      outcomes: [
        'Underwater operations: 500+ hours',
        'Zero diving incidents',
        'Structural integrity maintained',
        'Marine environment protected'
      ]
    },
    {
      id: 'national-water-wells',
      title: language === 'ar' ? 'حفر آبار الوسية الاستراتيجية' : 'Strategic Al-WASIA Wells Drilling',
      description: language === 'ar' ? 'حفر آبار الوسية الاستراتيجية في الرياض' : 'Strategic Al-WASIA wells drilling in Riyadh',
      sector: 'Drilling',
      client: 'National Water Company',
      year: '2020-2022',
      status: 'Completed',
      image: operationalImage1,
      icon: AnimatedDrillIcon,
      locations: ['Riyadh'],
      projectValue: 'SAR 15M+',
      scope: language === 'ar' ?
        'حفر آبار الوسية العميقة لضمان الأمن المائي الوطني' :
        'Deep Al-WASIA wells drilling to ensure national water security',
      technologies: [
        'Deep well drilling',
        'Water quality testing',
        'Geological surveys',
        'Well completion systems'
      ],
      outcomes: [
        'Water production capacity: 2,000 m³/day',
        'National water security enhanced',
        'Environmental compliance achieved',
        'Sustainable extraction methods'
      ]
    },
    {
      id: 'jubail-cooling-systems',
      title: language === 'ar' ? 'أنظمة التبريد الصناعية المتقدمة' : 'Advanced Industrial Cooling Systems',
      description: language === 'ar' ? 'تركيب أنظمة التبريد الصناعية المتطورة' : 'Installation of advanced industrial cooling systems',
      sector: 'Industrial',
      client: 'Technimont / Al-Waha',
      year: '2021-2023',
      status: 'Completed',
      image: industrialFacilityPath,
      icon: AnimatedPipelineIcon,
      locations: ['Jubail'],
      projectValue: 'SAR 22M+',
      scope: language === 'ar' ?
        'تركيب أنظمة التبريد الصناعية المتطورة وأنابيب التبريد' :
        'Installation of advanced industrial cooling systems and cooling pipelines',
      technologies: [
        'Cooling system pipelines',
        'Heat exchanger installations',
        'Thermal management systems',
        'Process optimization'
      ],
      outcomes: [
        'Energy efficiency: 30% improvement',
        'Operational reliability: 99.5%',
        'Cost savings: SAR 5M annually',
        'Environmental compliance achieved'
      ]
    },
    {
      id: 'quality-control-systems',
      title: language === 'ar' ? 'أنظمة مراقبة الجودة المتقدمة' : 'Advanced Quality Control Systems',
      description: language === 'ar' ? 'تنفيذ أنظمة مراقبة الجودة والسلامة المتقدمة' : 'Implementation of advanced quality control and safety systems',
      sector: 'Quality Control',
      client: 'Multiple Clients',
      year: '2022-2024',
      status: 'Ongoing',
      image: qualityControlPath,
      icon: Eye,
      locations: ['Multiple Sites'],
      projectValue: 'SAR 18M+',
      scope: language === 'ar' ?
        'تنفيذ أنظمة مراقبة الجودة المتقدمة وأنظمة السلامة الذكية' :
        'Implementation of advanced quality control systems and smart safety systems',
      technologies: [
        'Quality management systems',
        'Safety monitoring systems',
        'Process control automation',
        'Data analytics platforms'
      ],
      outcomes: [
        'Quality standards: ISO 9001 compliance',
        'Safety incidents: Zero LTA',
        'Process efficiency: 25% improvement',
        'Real-time monitoring achieved'
      ]
    }
  ];

  // Filter and search logic
  const filteredProjects = projectsDatabase.filter(project => {
    const matchesClient = selectedClient === 'all' || project.client === selectedClient;
    const matchesSector = selectedSector === 'all' || project.sector === selectedSector;
    const matchesYear = selectedYear === 'all' || project.year.includes(selectedYear);
    const matchesSearch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.client.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesClient && matchesSector && matchesYear && matchesSearch;
  });

  // Filter options
  const clients = ['all', 'Saudi Aramco', 'National Water Company', 'Technimont / Al-Waha', 'Multiple Clients'];
  const sectors = ['all', 'Pipeline', 'Processing', 'Drilling', 'Inspection', 'Offshore', 'Industrial', 'Quality Control'];
  const years = ['all', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

  // Case studies data
  const caseStudies = [
    {
      id: 'aramco-pipeline-excellence',
      title: language === 'ar' ? 'تميز أنابيب أرامكو الاستراتيجية' : 'Aramco Strategic Pipeline Excellence',
      client: 'Saudi Aramco',
      scope: language === 'ar' ? 
        'تنفيذ أكثر من 20 مشروع أنابيب استراتيجي عبر المملكة' :
        'Execution of 20+ strategic pipeline projects across the Kingdom',
      outcome: language === 'ar' ?
        'تحسين كفاءة النقل بنسبة 25% مع تحقيق معدل سلامة 100%' :
        'Improved transport efficiency by 25% while achieving 100% safety record',
      technologies: [
        'Advanced Pipeline Tie-in Systems',
        'Water Injection Optimization',
        'Real-time Monitoring Integration',
        'Predictive Maintenance Systems'
      ],
      highlights: [
        'Zero safety incidents across all projects',
        'Completed 2 months ahead of schedule',
        'Cost optimization savings: SAR 12M',
        'Client satisfaction rating: 98%'
      ]
    },
    {
      id: 'offshore-marine-mastery',
      title: language === 'ar' ? 'إتقان العمليات البحرية المتخصصة' : 'Offshore Marine Operations Mastery',
      client: 'Saudi Aramco',
      scope: language === 'ar' ?
        'عمليات الغوص التجاري والمركبات المائية عن بُعد ROV لفحص وصيانة المنشآت البحرية' :
        'Commercial diving operations and ROV services for offshore facility inspection and maintenance',
      outcome: language === 'ar' ?
        'نجاح في تنفيذ 500+ ساعة عمليات تحت الماء مع صفر حوادث' :
        'Successfully executed 500+ hours underwater operations with zero incidents',
      technologies: [
        'Commercial Diving Services',
        'ROV Inspection Systems',
        'Underwater Welding & Cutting',
        'Subsea Construction',
        'Marine Geotechnical Services'
      ],
      highlights: [
        'Deep sea operations up to 150m depth',
        'Structural integrity maintained 100%',
        'Marine environment protection achieved',
        'Advanced ROV technology deployment'
      ]
    },
    {
      id: 'drilling-precision-mastery',
      title: language === 'ar' ? 'إتقان دقة الحفر المتقدمة' : 'Advanced Drilling Precision Mastery',
      client: 'Saudi Aramco & National Water Company',
      scope: language === 'ar' ?
        'حفر عشرات الآبار بأعماق تتراوح من 100 إلى 6000+ قدم' :
        'Drilling dozens of wells with depths ranging from 100 to 6,000+ ft',
      outcome: language === 'ar' ?
        'تحقيق دقة عمق ±0.5 متر مع أوقات إنجاز قياسية' :
        'Achieved depth precision ±0.5m with record completion times',
      technologies: [
        'Deep Water Drilling Systems',
        'Micro-seismic Monitoring',
        'Geological Survey Integration',
        'Well Completion Optimization'
      ],
      highlights: [
        'Successfully completed 50+ wells',
        'Zero environmental incidents',
        'Water production: 2,000 m³/day capacity',
        'National water security enhanced'
      ]
    }
  ];

  // Other Major Clients Projects
  const otherProjects = [
    {
      id: 'national-water',
      title: language === 'ar' ? 'حفر آبار الوسية' : 'Al-WASIA Wells Drilling',
      client: 'National Water Company',
      location: 'Riyadh',
      description: language === 'ar' ? 'حفر آبار الوسية في الرياض' : 'Drilling Al-WASIA wells in Riyadh',
      type: 'Water Well Drilling',
      status: 'Completed'
    },
    {
      id: 'swcc-lighting',
      title: language === 'ar' ? 'أنظمة الإضاءة والطاقة' : 'Lighting & Power Systems',
      client: 'SWCC',
      location: 'Various',
      description: language === 'ar' ? 'تركيب أنظمة الإضاءة والطاقة' : 'Installation of lighting and power systems',
      type: 'Industrial Services',
      status: 'Completed'
    },
    {
      id: 'waha-cooling',
      title: language === 'ar' ? 'تركيب أنظمة التبريد' : 'Cooling System Installation',
      client: 'Technimont / Al-Waha (Jubail)',
      location: 'Jubail',
      description: language === 'ar' ? 'تركيب أنابيب نظام التبريد' : 'Cooling system pipeline installation',
      type: 'Pipeline Installation',
      status: 'Completed'
    }
  ];

  // ZENCUS Technology Projects
  const zencusProjects = [
    {
      id: 'wireless-monitoring',
      title: language === 'ar' ? 'مراقبة الآبار اللاسلكية' : 'Wireless Well Monitoring',
      description: language === 'ar' ? 'حلول المراقبة اللاسلكية للآبار والحقول' : 'Wireless monitoring solutions for wells and fields',
      locations: ['KSA', 'Gulf Region'],
      technology: 'ZENCUS System',
      features: [
        'Real-time data transmission',
        'SCADA over VSAT',
        'Chemical injection monitoring',
        'Offshore remote monitoring'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Epic Industrial Hero - Projects of Power */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Epic Industrial Background */}
        <div className="absolute inset-0">
          {/* Industrial Engineer Sunset Hero Image */}
          <img
            src="/images/projects-hero-sunset.jpg"
            alt="Engineer silhouette at industrial facility during dramatic sunset"
            className="w-full h-full object-cover scale-105"
          />
          {/* Cinematic Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-orange-900/40 to-black/70"></div>
          
          {/* Industrial Steam/Smoke Particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-orange-400/20 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [0, 1.5, 0],
                  y: [0, -200],
                  x: [0, Math.random() * 100 - 50]
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 10
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `90%`
                }}
              />
            ))}
          </div>

          {/* Industrial Glow Lines */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"
                style={{
                  top: `${30 + (i * 8)}%`,
                  width: '100%',
                  left: 0
                }}
                animate={{ 
                  opacity: [0.1, 0.8, 0.1],
                  scaleX: [0.7, 1.3, 0.7],
                  x: ['-10px', '10px', '-10px']
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 0.8
                }}
              />
            ))}
          </div>

          {/* Heat Wave Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32">
            <motion.div
              className="w-full h-full bg-gradient-to-t from-orange-500/20 to-transparent"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scaleY: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>

        {/* Command Center Background Effects (Overlay) */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 30% 30%, rgba(0, 63, 106, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 70% 70%, rgba(197, 166, 110, 0.2) 0%, transparent 50%),
                               radial-gradient(circle at 50% 50%, rgba(183, 43, 43, 0.1) 0%, transparent 50%)`
            }}></div>
          </div>
          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
              {Array.from({ length: 400 }).map((_, i) => (
                <div key={i} className="border-[#c5a66e]/20 border"></div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <HeroLogo size="lg" />
            {/* Command Center Label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="text-sm text-[#c5a66e] uppercase tracking-wider font-mono">
                {language === 'ar' ? 'مركز القيادة التشغيلي' : 'OPERATIONAL COMMAND CENTER'}
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-7xl md:text-9xl font-bold mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-[#003f6a] via-[#c5a66e] to-[#b72b2b] bg-clip-text text-transparent">
                {language === 'ar' ? 'مشاريع القوة' : 'PROJECTS'}
              </span>
              <br />
              <span className="text-white">
                {language === 'ar' ? '' : 'OF POWER'}
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl text-[#c5a66e] mb-4 font-bold">
                {language === 'ar' ? 'الدقة الهندسية. التنفيذ الاستراتيجي. القيادة السعودية.' : 'Engineering Precision. Strategic Execution. Saudi Leadership.'}
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                {language === 'ar' ? 
                  'تأثير مكامن عبر أرامكو السعودية وسابك والمياه الوطنية والأسواق البحرية - قيادة تقنية تشكل مستقبل الطاقة' :
                  'Makamin\'s impact across Saudi Aramco, SABIC, NWC, and offshore markets - Technical leadership shaping the future of energy'
                }
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6 mb-8"
            >
              <Badge className="bg-gradient-to-r from-[#003f6a] to-[#b72b2b] text-white px-8 py-4 text-xl font-bold shadow-2xl border-2 border-[#c5a66e]">
                <Target className="w-6 h-6 mr-3" />
                {language === 'ar' ? 'SAR 280M+ في المشاريع' : 'SAR 280M+ in Projects'}
              </Badge>
              <Badge className="bg-gradient-to-r from-[#b72b2b] to-[#c5a66e] text-white px-8 py-4 text-xl font-bold shadow-2xl border-2 border-[#003f6a]">
                <Shield className="w-6 h-6 mr-3" />
                {language === 'ar' ? 'صفر حوادث وقت مفقود' : 'Zero LTA Record'}
              </Badge>
              <Badge className="bg-gradient-to-r from-[#c5a66e] to-[#003f6a] text-white px-8 py-4 text-xl font-bold shadow-2xl border-2 border-[#b72b2b]">
                <Zap className="w-6 h-6 mr-3" />
                {language === 'ar' ? '8 مشاريع نشطة' : '8 Active Projects'}
              </Badge>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Advanced Control Panel - Filters & Search */}
      <motion.section 
        className="bg-gradient-to-r from-[#003f6a] to-slate-800 py-16 border-b border-[#c5a66e]/20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              
              {/* Search Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-400" />
                <input
                  type="text"
                  placeholder={language === 'ar' ? 'البحث في المشاريع...' : 'Search projects...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-red-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
                />
              </motion.div>

              {/* Client Filter */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                <select
                  value={selectedClient}
                  onChange={(e) => setSelectedClient(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 appearance-none"
                >
                  <option value="all">{language === 'ar' ? 'جميع العملاء' : 'All Clients'}</option>
                  {clients.slice(1).map(client => (
                    <option key={client} value={client}>{client}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-400 pointer-events-none" />
              </motion.div>

              {/* Sector Filter */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 appearance-none"
                >
                  <option value="all">{language === 'ar' ? 'جميع القطاعات' : 'All Sectors'}</option>
                  {sectors.slice(1).map(sector => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-400 pointer-events-none" />
              </motion.div>

              {/* Year Filter */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 appearance-none"
                >
                  <option value="all">{language === 'ar' ? 'جميع السنوات' : 'All Years'}</option>
                  {years.slice(1).map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-400 pointer-events-none" />
              </motion.div>
            </div>

            {/* Results Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-8"
            >
              <p className="text-red-400 text-lg font-mono">
                {language === 'ar' ? 
                  `${filteredProjects.length} مشروع موجود` : 
                  `${filteredProjects.length} projects found`
                }
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Interactive Visual Grid - Projects Database */}
      <motion.section 
        className="bg-gradient-to-br from-slate-900 to-black py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <Card className="bg-slate-800 border-[#c5a66e]/20 overflow-hidden h-full hover:border-[#c5a66e]/50 transition-all duration-500 cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-[#003f6a]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="text-center text-white p-6">
                        <div className="mb-4">
                          <project.icon className="w-12 h-12 mx-auto text-[#c5a66e]" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-[#c5a66e] mb-2">{project.sector}</p>
                        <p className="text-[#c5a66e] font-mono">{project.client}</p>
                        <p className="text-gray-200 text-sm mt-2">{project.year}</p>
                      </div>
                    </div>

                    {/* Client Logo */}
                    <div className="absolute top-4 left-4">
                      {project.client === 'Saudi Aramco' && (
                        <img 
                          src={aramcoLogoPath} 
                          alt="Saudi Aramco" 
                          className="h-8 w-auto opacity-90"
                        />
                      )}
                      {project.client === 'National Water Company' && (
                        <img 
                          src={nwcLogoPath} 
                          alt="National Water Company" 
                          className="h-8 w-auto opacity-90"
                        />
                      )}
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className={`${
                        project.status === 'Completed' ? 'bg-green-600' : 
                        project.status === 'Ongoing' ? 'bg-blue-600' : 'bg-yellow-600'
                      } text-white font-bold`}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-[#003f6a]/50 text-[#c5a66e] border border-[#c5a66e]/30">
                        {project.client}
                      </Badge>
                      <Badge className="bg-slate-700 text-gray-300">
                        {project.projectValue}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.locations.slice(0, 2).map((location, i) => (
                        <Badge key={i} variant="outline" className="text-xs text-gray-400 border-gray-600">
                          <MapPin className="w-3 h-3 mr-1" />
                          {location}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      onClick={() => {
                        setSelectedImage(project);
                        setImageModalOpen(true);
                      }}
                      className="w-full bg-gradient-to-r from-[#003f6a] to-[#b72b2b] hover:from-[#003f6a]/80 hover:to-[#b72b2b]/80 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Elite Case Studies Section */}
      <motion.section 
        className="bg-gradient-to-br from-[#003f6a]/50 to-slate-900 py-20 border-t border-[#c5a66e]/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Target className="w-16 h-16 text-[#c5a66e] mx-auto mb-6" />
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                {language === 'ar' ? 'دراسات حالات النخبة' : 'Elite Case Studies'}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {language === 'ar' ? 
                  'تحليل عميق لأهم مشاريعنا الاستراتيجية وتأثيرها على قطاع الطاقة' :
                  'Deep analysis of our most strategic projects and their impact on the energy sector'
                }
              </p>
            </motion.div>

            <div className="space-y-8">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <Card className="bg-slate-800/50 border-[#c5a66e]/20 hover:border-[#c5a66e]/50 transition-all duration-500 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div
                        className="p-8 cursor-pointer"
                        onClick={() => setExpandedCase(expandedCase === caseStudy.id ? null : caseStudy.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-gradient-to-r from-[#003f6a] to-[#b72b2b] rounded-xl flex items-center justify-center">
                              <Wrench className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.title}</h3>
                              <p className="text-[#c5a66e] font-mono">{caseStudy.client}</p>
                            </div>
                          </div>
                          <ChevronDown className={`w-8 h-8 text-[#c5a66e] transition-transform duration-300 ${
                            expandedCase === caseStudy.id ? 'rotate-180' : ''
                          }`} />
                        </div>
                      </div>

                      <AnimatePresence>
                        {expandedCase === caseStudy.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8 border-t border-red-500/20">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                <div>
                                  <h4 className="text-xl font-bold text-white mb-4">
                                    {language === 'ar' ? 'نطاق المشروع' : 'Project Scope'}
                                  </h4>
                                  <p className="text-gray-300 mb-6 leading-relaxed">{caseStudy.scope}</p>
                                  
                                  <h4 className="text-xl font-bold text-white mb-4">
                                    {language === 'ar' ? 'النتائج المحققة' : 'Achieved Outcomes'}
                                  </h4>
                                  <p className="text-gray-300 leading-relaxed">{caseStudy.outcome}</p>
                                </div>
                                
                                <div>
                                  <h4 className="text-xl font-bold text-white mb-4">
                                    {language === 'ar' ? 'التقنيات المستخدمة' : 'Key Technologies'}
                                  </h4>
                                  <div className="space-y-3 mb-6">
                                    {caseStudy.technologies.map((tech, i) => (
                                      <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span className="text-gray-300">{tech}</span>
                                      </div>
                                    ))}
                                  </div>
                                  
                                  <h4 className="text-xl font-bold text-white mb-4">
                                    {language === 'ar' ? 'الإنجازات البارزة' : 'Key Highlights'}
                                  </h4>
                                  <div className="space-y-3">
                                    {caseStudy.highlights.map((highlight, i) => (
                                      <div key={i} className="flex items-center gap-3">
                                        <Award className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                                        <span className="text-gray-300">{highlight}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {imageModalOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setImageModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-4 right-4 z-10">
                <Button
                  onClick={() => setImageModalOpen(false)}
                  className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-16">
                  <div className="flex items-center gap-4 mb-4">
                    <selectedImage.icon className="w-10 h-10 text-red-400" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedImage.title}</h3>
                      <p className="text-red-400">{selectedImage.client}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 max-h-96 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">
                      {language === 'ar' ? 'تفاصيل المشروع' : 'Project Details'}
                    </h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">{selectedImage.scope}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <Badge className="bg-red-900/50 text-red-300">
                        {selectedImage.projectValue}
                      </Badge>
                      <Badge className="bg-slate-700 text-gray-300">
                        {selectedImage.year}
                      </Badge>
                      <Badge className={`${
                        selectedImage.status === 'Completed' ? 'bg-green-600' : 
                        selectedImage.status === 'Ongoing' ? 'bg-blue-600' : 'bg-yellow-600'
                      } text-white`}>
                        {selectedImage.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">
                      {language === 'ar' ? 'التقنيات والقدرات' : 'Technologies & Capabilities'}
                    </h4>
                    <div className="space-y-3 mb-6">
                      {selectedImage.technologies.map((tech: string, i: number) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-300">{tech}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-4">
                      {language === 'ar' ? 'النتائج المحققة' : 'Achieved Outcomes'}
                    </h4>
                    <div className="space-y-3">
                      {selectedImage.outcomes.map((outcome: string, i: number) => (
                        <div key={i} className="flex items-center gap-3">
                          <Award className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                          <span className="text-gray-300">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Visual Chronicles Section - Protecting original photo albums */}
      <section className="bg-gradient-to-br from-[#003f6a]/30 to-black py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Layers className="w-16 h-16 text-[#c5a66e] mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {language === 'ar' ? 'السجلات البصرية' : 'Visual Chronicles'}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'ar' ? 
                'مجموعة شاملة من الصور الأصلية لعملياتنا وفرقنا' :
                'Comprehensive collection of authentic images showcasing our operations and teams'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* الشعار موجود في Header - بدون تكرار */}

      {/* Original Photo Albums - Protected from modification */}
      <InsideMakaminGallery />
      <TeamGallery />
    </div>
  );
}