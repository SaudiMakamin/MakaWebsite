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
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import ProjectCard from '@/components/project-card';
import { Link } from 'wouter';
import { useState, useMemo } from 'react';
import { projects, getFeaturedProjects, getUniqueValues, type Project } from '@/data/projects';

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

import aramcoLogoPath from '@assets/aramco-logo--white_1752761457820.webp';
import nwcLogoPath from '@assets/Logo_1752761464998.jpg';

import makaminOfficialLogo from '@assets/logo mkamin_1752524503536.png';

const sectorImages: Record<string, string> = {
  'Pipeline': pipelineInstallationPath,
  'Drilling': drillingOperationsPath,
  'Processing': processingFacilityPath,
  'Inspection': inspectionOperationsPath,
  'Offshore': offshorePlatformPath,
  'Industrial': industrialFacilityPath,
  'Geoscience': qualityControlPath,
  'Water Injection': operationalImage1,
  'Facilities': operationalImage2,
  'Digital Systems': technicalOperationsPath,
};

const sectorIcons: Record<string, any> = {
  'Pipeline': AnimatedPipelineIcon,
  'Drilling': AnimatedDrillIcon,
  'Processing': AnimatedDrillIcon,
  'Inspection': AnimatedShipIcon,
  'Offshore': AnimatedShipIcon,
  'Industrial': AnimatedPipelineIcon,
  'Geoscience': Eye,
  'Water Injection': Wrench,
  'Facilities': Building,
  'Digital Systems': Layers,
  'Quality Control': Eye,
};

export default function Projects() {
  const { language } = useLanguageContext();
  const [selectedClient, setSelectedClient] = useState('all');
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedEntity, setSelectedEntity] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCase, setExpandedCase] = useState<string | null>(null);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = useMemo(() => getFeaturedProjects(), []);

  const clients = useMemo(() => ['all', ...getUniqueValues('client')], []);
  const sectors = useMemo(() => ['all', ...getUniqueValues('sector')], []);
  const entities = useMemo(() => ['all', ...getUniqueValues('entity')], []);

  const filteredProjects = useMemo(() => {
    return featuredProjects.filter(project => {
      const matchesClient = selectedClient === 'all' || project.client === selectedClient;
      const matchesSector = selectedSector === 'all' || project.sector === selectedSector;
      const matchesEntity = selectedEntity === 'all' || project.entity === selectedEntity;
      const matchesSearch = searchTerm === '' ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesClient && matchesSector && matchesEntity && matchesSearch;
    });
  }, [featuredProjects, selectedClient, selectedSector, selectedEntity, searchTerm]);

  const sectorBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    projects.forEach(p => { map[p.sector] = (map[p.sector] || 0) + 1; });
    return Object.entries(map).sort((a, b) => b[1] - a[1]).slice(0, 8);
  }, []);

  const aramcoCount = useMemo(() => projects.filter(p => p.isAramco).length, []);
  const pipelineCount = useMemo(() => projects.filter(p => p.isPipeline).length, []);

  return (
    <div className="min-h-screen bg-black">
      <SemanticMetadata
        page="about"
        title="Projects | Saudi Makamin"
        description="Makamin's complete project portfolio across pipeline, drilling, geoscience, inspection, and offshore operations for Saudi Aramco and major clients."
      />
      <EnhancedSecurity />
      <motion.section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <img
            src="/images/projects-hero-sunset.jpg"
            alt="Engineer silhouette at industrial facility during dramatic sunset"
            className="w-full h-full object-cover scale-105"
            onError={(e) => { (e.target as HTMLImageElement).src = heroCarouselPath; }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-orange-900/40 to-black/70"></div>
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

        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 30% 30%, rgba(0, 63, 106, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 70% 70%, rgba(197, 166, 110, 0.2) 0%, transparent 50%),
                               radial-gradient(circle at 50% 50%, rgba(183, 43, 43, 0.1) 0%, transparent 50%)`
            }}></div>
          </div>
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
                {language === 'ar' ? `${projects.length}+ مشروع مسجل` : `${projects.length}+ Recorded Projects`}
              </Badge>
              <Badge className="bg-gradient-to-r from-[#b72b2b] to-[#c5a66e] text-white px-8 py-4 text-xl font-bold shadow-2xl border-2 border-[#003f6a]">
                <Shield className="w-6 h-6 mr-3" />
                {language === 'ar' ? `${aramcoCount} مشروع أرامكو` : `${aramcoCount} Aramco Projects`}
              </Badge>
              <Badge className="bg-gradient-to-r from-[#c5a66e] to-[#003f6a] text-white px-8 py-4 text-xl font-bold shadow-2xl border-2 border-[#b72b2b]">
                <Zap className="w-6 h-6 mr-3" />
                {language === 'ar' ? `${pipelineCount} مشروع أنابيب` : `${pipelineCount} Pipeline Projects`}
              </Badge>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="bg-gradient-to-br from-slate-900 to-black py-16 border-b border-[#c5a66e]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              {language === 'ar' ? 'صفحات المشاريع المخصصة' : 'Dedicated Project Pages'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/projects/aramco">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800 border border-[#c5a66e]/20 rounded-xl p-8 cursor-pointer hover:border-[#c5a66e]/50 transition-all"
              >
                <img src={aramcoLogoPath} alt="Saudi Aramco" className="h-8 mb-4 opacity-90" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {language === 'ar' ? 'مشاريع أرامكو السعودية' : 'Saudi Aramco Projects'}
                </h3>
                <p className="text-gray-400 mb-4">
                  {language === 'ar'
                    ? `${aramcoCount} مشروع عبر الأنابيب والحفر والفحص والجيوفيزياء`
                    : `${aramcoCount} projects across pipeline, drilling, inspection, and geoscience`}
                </p>
                <span className="text-[#c5a66e] flex items-center gap-2">
                  {language === 'ar' ? 'عرض المشاريع' : 'View Projects'}
                  <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                </span>
              </motion.div>
            </Link>
            <Link href="/projects/pipeline">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800 border border-[#c5a66e]/20 rounded-xl p-8 cursor-pointer hover:border-[#c5a66e]/50 transition-all"
              >
                <AnimatedPipelineIcon className="w-8 h-8 text-[#c5a66e] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {language === 'ar' ? 'مشاريع خطوط الأنابيب' : 'Pipeline Projects'}
                </h3>
                <p className="text-gray-400 mb-4">
                  {language === 'ar'
                    ? `${pipelineCount} مشروع — الربط والاستبدال والتأهيل و RTR`
                    : `${pipelineCount} projects — tie-ins, replacements, rehabilitation, RTR`}
                </p>
                <span className="text-[#c5a66e] flex items-center gap-2">
                  {language === 'ar' ? 'عرض المشاريع' : 'View Projects'}
                  <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                </span>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-black py-12 border-b border-[#c5a66e]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {language === 'ar' ? 'فئات المشاريع' : 'Project Categories'}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {sectorBreakdown.map(([sector, count]) => {
              const Icon = sectorIcons[sector] || Building;
              return (
                <button
                  key={sector}
                  onClick={() => setSelectedSector(selectedSector === sector ? 'all' : sector)}
                  className={`p-4 rounded-lg border text-center transition-all ${
                    selectedSector === sector
                      ? 'bg-[#c5a66e]/20 border-[#c5a66e] text-[#c5a66e]'
                      : 'bg-slate-800/50 border-slate-700 text-gray-300 hover:border-[#c5a66e]/50'
                  }`}
                >
                  <Icon className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm font-semibold">{sector}</p>
                  <p className="text-xs text-gray-500 mt-1">{count} {language === 'ar' ? 'مشروع' : 'projects'}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

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
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#c5a66e]" />
                <input
                  type="text"
                  placeholder={language === 'ar' ? 'البحث في المشاريع...' : 'Search projects...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-[#c5a66e]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#c5a66e] focus:ring-2 focus:ring-[#c5a66e]/20"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                <select
                  value={selectedClient}
                  onChange={(e) => setSelectedClient(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-[#c5a66e]/30 rounded-lg text-white focus:outline-none focus:border-[#c5a66e] focus:ring-2 focus:ring-[#c5a66e]/20 appearance-none"
                >
                  <option value="all">{language === 'ar' ? 'جميع العملاء' : 'All Clients'}</option>
                  {clients.slice(1).map(client => (
                    <option key={client} value={client}>{client}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#c5a66e] pointer-events-none" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <select
                  value={selectedSector}
                  onChange={(e) => setSelectedSector(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-[#c5a66e]/30 rounded-lg text-white focus:outline-none focus:border-[#c5a66e] focus:ring-2 focus:ring-[#c5a66e]/20 appearance-none"
                >
                  <option value="all">{language === 'ar' ? 'جميع القطاعات' : 'All Sectors'}</option>
                  {sectors.slice(1).map(sector => (
                    <option key={sector} value={sector}>{sector}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#c5a66e] pointer-events-none" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <select
                  value={selectedEntity}
                  onChange={(e) => setSelectedEntity(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800 border border-[#c5a66e]/30 rounded-lg text-white focus:outline-none focus:border-[#c5a66e] focus:ring-2 focus:ring-[#c5a66e]/20 appearance-none"
                >
                  <option value="all">{language === 'ar' ? 'جميع الكيانات' : 'All Entities'}</option>
                  {entities.slice(1).map(entity => (
                    <option key={entity} value={entity}>{entity}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#c5a66e] pointer-events-none" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-8"
            >
              <p className="text-[#c5a66e] text-lg font-mono">
                {language === 'ar' ?
                  `${filteredProjects.length} مشروع مميز` :
                  `${filteredProjects.length} featured projects`
                }
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="bg-gradient-to-br from-slate-900 to-black py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const image = sectorImages[project.sector] || heroCarouselPath;
              const Icon = sectorIcons[project.sector] || Building;
              const title = language === 'ar' ? project.titleAr : project.title;
              const description = language === 'ar' ? project.descriptionAr : project.description;

              return (
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
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                      <div className="absolute inset-0 bg-[#003f6a]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="text-center text-white p-6">
                          <div className="mb-4">
                            <Icon className="w-12 h-12 mx-auto text-[#c5a66e]" />
                          </div>
                          <h3 className="text-xl font-bold mb-2">{title}</h3>
                          <p className="text-[#c5a66e] mb-2">{project.sector}</p>
                          <p className="text-[#c5a66e] font-mono">{project.client}</p>
                        </div>
                      </div>

                      <div className="absolute top-4 left-4">
                        {project.client === 'Saudi Aramco' && (
                          <img src={aramcoLogoPath} alt="Saudi Aramco" className="h-8 w-auto opacity-90" />
                        )}
                        {project.client === 'National Water Company' && (
                          <img src={nwcLogoPath} alt="National Water Company" className="h-8 w-auto opacity-90" />
                        )}
                      </div>

                      <div className="absolute top-4 right-4">
                        {project.status && (
                          <Badge className={`${
                            project.status === 'Completed' ? 'bg-green-600' :
                            project.status === 'Ongoing' ? 'bg-blue-600' : 'bg-yellow-600'
                          } text-white font-bold`}>
                            {project.status}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-[#003f6a]/50 text-[#c5a66e] border border-[#c5a66e]/30">
                          {project.client}
                        </Badge>
                        <Badge className="bg-slate-700 text-gray-300">
                          {project.entity}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                      <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">{description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.location && (
                          <Badge variant="outline" className="text-xs text-gray-400 border-gray-600">
                            <MapPin className="w-3 h-3 mr-1" />
                            {project.location}
                          </Badge>
                        )}
                      </div>

                      <Button
                        onClick={() => {
                          setSelectedProject(project);
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
              );
            })}
          </div>
        </div>
      </motion.section>

      <AnimatePresence>
        {imageModalOpen && selectedProject && (
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
              className="relative bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
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

              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={sectorImages[selectedProject.sector] || heroCarouselPath}
                  alt={language === 'ar' ? selectedProject.titleAr : selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {language === 'ar' ? selectedProject.titleAr : selectedProject.title}
                  </h2>
                  <p className="text-[#c5a66e] font-mono">{selectedProject.client}</p>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-gray-500 text-xs mb-1">{language === 'ar' ? 'القطاع' : 'Sector'}</p>
                    <p className="text-white font-semibold">{selectedProject.sector}</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-gray-500 text-xs mb-1">{language === 'ar' ? 'الكيان' : 'Entity'}</p>
                    <p className="text-white font-semibold">{selectedProject.entity}</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-gray-500 text-xs mb-1">{language === 'ar' ? 'الموقع' : 'Location'}</p>
                    <p className="text-white font-semibold">{selectedProject.location}</p>
                  </div>
                  <div className="bg-slate-800 p-4 rounded-lg">
                    <p className="text-gray-500 text-xs mb-1">{language === 'ar' ? 'الحالة' : 'Status'}</p>
                    <p className="text-white font-semibold">{selectedProject.status || '—'}</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {language === 'ar' ? selectedProject.descriptionAr : selectedProject.description}
                </p>

                {selectedProject.highlights.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-white font-bold mb-3">{language === 'ar' ? 'النقاط البارزة' : 'Highlights'}</h4>
                    <div className="space-y-2">
                      {selectedProject.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-300">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {selectedProject.serviceLink && (
                  <Link href={selectedProject.serviceLink}>
                    <Button className="bg-gradient-to-r from-[#003f6a] to-[#b72b2b] text-white">
                      {language === 'ar' ? 'عرض الخدمة ذات الصلة' : 'View Related Service'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <InsideMakaminGallery />

      <section className="bg-gradient-to-r from-[#003f6a] to-slate-800 py-12 border-t border-[#c5a66e]/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            {language === 'ar' ? 'استكشف المزيد' : 'Explore More'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects/aramco">
              <Button size="lg" className="bg-[#c5a66e] text-black hover:bg-[#c5a66e]/80 font-bold">
                {language === 'ar' ? 'مشاريع أرامكو' : 'Aramco Projects'}
                <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
            </Link>
            <Link href="/projects/pipeline">
              <Button size="lg" className="bg-[#c5a66e] text-black hover:bg-[#c5a66e]/80 font-bold">
                {language === 'ar' ? 'مشاريع الأنابيب' : 'Pipeline Projects'}
                <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-white border-[#c5a66e]/30 hover:bg-[#c5a66e]/20">
                {language === 'ar' ? 'الخدمات' : 'Services'}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
