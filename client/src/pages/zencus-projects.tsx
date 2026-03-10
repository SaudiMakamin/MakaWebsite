import { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Search as SearchIcon, LayoutGrid, List, Cpu, Wifi, Radio, Monitor, Shield, Satellite, Eye, BarChart3, Bell, FileText, Camera } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import ProjectCard from '@/components/project-card';
import ProjectFilters from '@/components/project-filters';
import { getZencusProjects, type Project } from '@/data/projects';

import heroPath from '@assets/hero-carousel-1_1752529906169.jpg';

const technologyProducts = [
  { name: 'Mono Transmitter', nameAr: 'جهاز الإرسال الأحادي', icon: Radio, description: 'Compact wireless transmitter for field sensor data acquisition' },
  { name: 'Field Transceiver', nameAr: 'جهاز الإرسال والاستقبال الميداني', icon: Wifi, description: 'Bi-directional wireless communication unit for field networks' },
  { name: 'ZENCUS Gateway', nameAr: 'بوابة ZENCUS', icon: Satellite, description: 'Central hub connecting field devices to SCADA and cloud systems' },
  { name: 'ZENCUS Data Visualization Suite', nameAr: 'مجموعة تصور البيانات ZENCUS', icon: Monitor, description: 'Integrated platform for real-time oilfield data analytics' },
  { name: 'ZDV Listener', nameAr: 'ZDV مستمع', icon: Eye, description: 'Real-time data stream listener for continuous monitoring' },
  { name: 'ZDV Studio', nameAr: 'ZDV استوديو', icon: BarChart3, description: 'Advanced analytics and visualization workspace' },
  { name: 'ZDV Alert', nameAr: 'ZDV تنبيه', icon: Bell, description: 'Automated alerting system for threshold-based notifications' },
  { name: 'ZDV Report', nameAr: 'ZDV تقرير', icon: FileText, description: 'Automated reporting engine for operations and compliance' },
  { name: 'ZENCUS CCTV', nameAr: 'كاميرات مراقبة ZENCUS', icon: Camera, description: 'Integrated security and surveillance system for remote sites' },
];

const applicationContexts = [
  { label: 'Oil Well Monitoring', labelAr: 'مراقبة آبار النفط' },
  { label: 'Reservoir Management', labelAr: 'إدارة المكامن' },
  { label: 'Production Monitoring', labelAr: 'مراقبة الإنتاج' },
  { label: 'Wireless SCADA', labelAr: 'SCADA لاسلكي' },
  { label: 'Offshore Monitoring', labelAr: 'المراقبة البحرية' },
  { label: 'Chemical Injection Systems', labelAr: 'أنظمة الحقن الكيميائي' },
  { label: 'Oilfield IoT', labelAr: 'إنترنت الأشياء للحقول النفطية' },
  { label: 'Security & Surveillance', labelAr: 'الأمن والمراقبة' },
];

export default function ZencusProjectsPage() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';
  const allZencus = useMemo(() => getZencusProjects(), []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = useMemo(() => {
    const c = new Set(allZencus.map(p => p.category));
    return Array.from(c).sort().map(v => ({ value: v, label: v }));
  }, [allZencus]);

  const filtered = useMemo(() => {
    return allZencus.filter(p => {
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (searchTerm) {
        const s = searchTerm.toLowerCase();
        if (
          !p.title.toLowerCase().includes(s) &&
          !p.description.toLowerCase().includes(s) &&
          !(p.client && p.client.toLowerCase().includes(s)) &&
          !p.category.toLowerCase().includes(s)
        ) return false;
      }
      return true;
    });
  }, [allZencus, selectedCategory, searchTerm]);

  const categoryBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    allZencus.forEach(p => { map[p.category] = (map[p.category] || 0) + 1; });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [allZencus]);

  const recordStatusColor = (status?: string) => {
    switch (status) {
      case 'Verified': return 'bg-green-600 text-white';
      case 'Partially Documented': return 'bg-amber-600 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <SemanticMetadata
        page="about"
        title="ZENCUS Projects | Saudi Makamin"
        description="ZENCUS International technology projects — wireless well monitoring, remote monitoring, SCADA systems, and oilfield IoT solutions for oil & gas operations."
      />
      <EnhancedSecurity />

      <motion.section
        className="relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <img src={heroPath} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <HeroLogo size="md" className="mx-auto mb-6" />
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {isAr ? 'مشاريع ZENCUS' : 'ZENCUS Projects'}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {isAr
              ? 'حلول التقنية اللاسلكية والمراقبة عن بُعد والأنظمة الرقمية الميدانية'
              : 'Wireless technology, remote monitoring, and digital field systems'}
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Badge className="bg-[#003f6a] text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-bold border border-[#c5a66e]">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {allZencus.length} {isAr ? 'مشروع تقني' : 'Technology Projects'}
            </Badge>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-12 px-6 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">
            {isAr ? 'نظرة عامة على المشاريع' : 'ZENCUS Projects Overview'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {categoryBreakdown.map(([cat, count]) => (
              <div key={cat} className="bg-slate-800/60 border border-slate-700 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-[#c5a66e]">{count}</p>
                <p className="text-sm text-gray-400">{cat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white">
              {isAr ? 'جميع مشاريع ZENCUS' : 'All ZENCUS Projects'}
              <span className="text-[#c5a66e] ml-2">({filtered.length})</span>
            </h2>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-[#003f6a]' : 'text-gray-400 border-gray-600'}
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-[#003f6a]' : 'text-gray-400 border-gray-600'}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <ProjectFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filters={[
              {
                value: selectedCategory,
                onChange: setSelectedCategory,
                options: categories,
                placeholder: isAr ? 'الفئة' : 'Category',
              },
            ]}
            variant="dark"
          />

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filtered.map(project => (
                <div key={project.id} className="relative">
                  {project.recordStatus && (
                    <Badge className={`absolute top-2 right-2 z-10 text-xs ${recordStatusColor(project.recordStatus)}`}>
                      {project.recordStatus}
                    </Badge>
                  )}
                  <ProjectCard project={project} variant="dark" />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-3 mt-8">
              {filtered.map(project => (
                <div key={project.id} className="relative">
                  <ProjectCard project={project} variant="dark" compact />
                  <div className="flex flex-wrap gap-3 mt-1 px-4">
                    {project.recordStatus && (
                      <Badge className={`text-xs ${recordStatusColor(project.recordStatus)}`}>
                        {project.recordStatus}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Cpu className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">{isAr ? 'لا توجد نتائج' : 'No projects match your filters'}</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-6 bg-black border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2">
            {isAr ? 'منصات وتقنيات ZENCUS' : 'Featured Technology Capabilities'}
          </h2>
          <p className="text-gray-400 mb-8">
            {isAr ? 'المنتجات والأنظمة التي تدعم مشاريع ZENCUS الميدانية' : 'Products and platforms powering ZENCUS field deployments'}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technologyProducts.map((product) => {
              const Icon = product.icon;
              return (
                <Card key={product.name} className="bg-slate-800/60 border-slate-700 hover:border-[#c5a66e]/50 transition-all duration-300">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#003f6a]/50 flex items-center justify-center border border-[#c5a66e]/30">
                        <Icon className="w-5 h-5 text-[#c5a66e]" />
                      </div>
                      <h3 className="text-white font-semibold text-sm">{isAr ? product.nameAr : product.name}</h3>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{product.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">
            {isAr ? 'قطاعات التطبيق' : 'Related ZENCUS Services'}
          </h2>
          <div className="flex flex-wrap gap-3">
            {applicationContexts.map((ctx) => (
              <Badge
                key={ctx.label}
                className="bg-[#003f6a]/40 text-gray-300 border border-[#c5a66e]/20 px-4 py-2 text-sm hover:border-[#c5a66e]/50 transition-colors"
              >
                {isAr ? ctx.labelAr : ctx.label}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
