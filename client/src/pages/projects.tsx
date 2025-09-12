import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Building, Drill, Droplets, Globe, CheckCircle, ArrowRight, Calendar, MapPin, Award, Users, Zap } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import { AnimatedDrillIcon, AnimatedShipIcon, AnimatedPipelineIcon } from '@/components/animated-svg-icons';

export default function Projects() {
  const { language } = useLanguageContext();

  // Authentic Major Projects from 2017 Profile
  const aramcoProjects = [
    {
      id: 'pipeline-installations',
      title: language === 'ar' ? 'تركيب خطوط الأنابيب' : 'Pipeline Installations',
      description: language === 'ar' ? 'مشاريع الأنابيب في القطيف وحرض وأبقيق وشدقم والعثمانية' : 'Pipeline projects in Qatif, Haradh, Abqaiq, Shedgum, Uthmaniyah',
      type: 'Pipeline & Industrial',
      locations: ['Qatif', 'Haradh', 'Abqaiq', 'Shedgum', 'Uthmaniyah'],
      icon: AnimatedPipelineIcon,
      status: 'Completed',
      client: 'Saudi Aramco',
      details: language === 'ar' ? 
        'أكثر من 20 مشروع مكتمل يشمل تركيب الأنابيب وأنظمة حقن المياه وأنظمة المراقبة' :
        '20+ completed projects including pipeline installations, water injection systems, and monitoring systems',
      capabilities: [
        'Pipeline tie-in installations',
        'Water injection systems',
        'Downhole monitoring systems',
        'RTR line installations',
        'Trunk line rehabilitations'
      ]
    },
    {
      id: 'multiphase-flow',
      title: language === 'ar' ? 'أنظمة قياس التدفق متعددة الأطوار' : 'Multiphase Flow Meter Systems',
      description: language === 'ar' ? 'تركيب وتكامل أنظمة MPFM المتقدمة' : 'Installation and integration of advanced MPFM systems',
      type: 'Pipeline & Industrial',
      locations: ['Multiple Fields'],
      icon: AnimatedDrillIcon,
      status: 'Completed',
      client: 'Saudi Aramco',
      details: language === 'ar' ?
        'تركيب مقاييس التدفق متعددة الأطوار وأنظمة الإنتاج منخفضة الضغط' :
        'Installation of multiphase flow meters and low-pressure production systems',
      capabilities: [
        'MPFM system integration',
        'Low Pressure Production Systems (LPPS)',
        'Permanent Downhole Monitoring Systems',
        'Centrifugal pump installations'
      ]
    },
    {
      id: 'drilling-operations',
      title: language === 'ar' ? 'عمليات الحفر' : 'Drilling Operations',
      description: language === 'ar' ? 'حفر آبار المياه والإصلاح' : 'Water well drilling and workover operations',
      type: 'Drilling Services',
      locations: ['LIDAM', 'UMAMR', 'ABUJFN', 'MZLG', 'ABJF', 'SDGM', 'SNMN', 'USFR', 'UYRS', 'AHDB'],
      icon: AnimatedDrillIcon,
      status: 'Completed',
      client: 'Saudi Aramco',
      details: language === 'ar' ?
        'عشرات الآبار المحفورة بأعماق تتراوح من 100 إلى 6000+ قدم' :
        'Dozens of wells drilled with depths ranging from 100 to 6,000+ ft',
      capabilities: [
        'Workover operations',
        'Deep water drilling',
        'Water well drilling',
        'Soil testing and core drilling',
        'Micro-seismic monitoring'
      ]
    },
    {
      id: 'inspection-services',
      title: language === 'ar' ? 'خدمات الفحص الصناعي' : 'Industrial Inspection Services',
      description: language === 'ar' ? 'فحص أرضيات الخزانات والفحص غير المدمر' : 'Tank floor inspection and non-destructive testing',
      type: 'Industrial Inspection',
      locations: ['Multiple Facilities'],
      icon: AnimatedShipIcon,
      status: 'Ongoing',
      client: 'Saudi Aramco',
      details: language === 'ar' ?
        'أكثر من 30 عقد فحص شامل بما في ذلك فحص الأرضيات والأنابيب' :
        '30+ comprehensive inspection contracts including floor and tube inspections',
      capabilities: [
        'MFL Tank Floor Inspection',
        'Corrosion Coupon Surveys',
        'API Inspection services',
        'Tube inspection systems',
        'Risk-based inspection implementation'
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
    <div className="min-h-screen">
      <SemanticMetadata page="projects" />
      <EnhancedSecurity />
      {/* Cinematic Hero Section */}
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
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              {language === 'ar' ? 'مشاريعنا المتميزة' : 'Our Distinguished Projects'}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              {language === 'ar' ? 
                'سجل حافل من المشاريع الناجحة مع أرامكو السعودية والعملاء الرئيسيين' :
                'Proven track record of successful projects with Saudi Aramco and major clients'
              }
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-yellow-500 text-black px-6 py-3 text-lg font-bold">
                {language === 'ar' ? '50+ مشروع مكتمل' : '50+ Completed Projects'}
              </Badge>
              <Badge className="bg-green-500 text-white px-6 py-3 text-lg font-bold">
                {language === 'ar' ? 'صفر حوادث' : 'Zero LTA Record'}
              </Badge>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Major Saudi Aramco Projects */}
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
              {language === 'ar' ? 'المشاريع الرئيسية مع أرامكو السعودية' : 'Major Projects with Saudi Aramco'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' ? 
                'مشاريع استراتيجية مع أكبر شركة نفط في العالم' :
                'Strategic projects with the world\'s largest oil company'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aramcoProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <project.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <Badge className="bg-yellow-500 text-black mb-2">{project.client}</Badge>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h3>
                        <p className="text-gray-600 text-sm">{project.type}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{project.details}</p>

                    {/* Capabilities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        {language === 'ar' ? 'القدرات الرئيسية:' : 'Key Capabilities:'}
                      </h4>
                      <div className="space-y-2">
                        {project.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Locations */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        {language === 'ar' ? 'المواقع:' : 'Locations:'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.locations.map((location, locIndex) => (
                          <Badge key={locIndex} variant="outline" className="text-blue-600 border-blue-600">
                            {location}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <Badge 
                        className={`px-3 py-1 ${
                          project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}
                      >
                        {project.status}
                      </Badge>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Major Clients */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'مشاريع العملاء الآخرين' : 'Other Client Projects'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Building className="w-6 h-6 text-blue-600" />
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {project.client}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">{project.location}</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">{project.status}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ZENCUS Technology Projects */}
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
              {language === 'ar' ? 'مشاريع تقنية ZENCUS' : 'ZENCUS Technology Projects'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' ? 
                'حلول تقنية متقدمة للمراقبة اللاسلكية في الوقت الفعلي' :
                'Advanced technology solutions for real-time wireless monitoring'
              }
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {zencusProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <Badge className="bg-cyan-500 text-white mb-2">{project.technology}</Badge>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{project.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          {language === 'ar' ? 'المميزات التقنية:' : 'Technical Features:'}
                        </h4>
                        <div className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          {language === 'ar' ? 'المناطق المغطاة:' : 'Coverage Areas:'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.locations.map((location, locIndex) => (
                            <Badge key={locIndex} variant="outline" className="text-cyan-600 border-cyan-600">
                              {location}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}