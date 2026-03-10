import { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Building, Drill, Search as SearchIcon, Shield, Wrench, Microscope, ArrowRight, LayoutGrid, List } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import ProjectCard from '@/components/project-card';
import ProjectFilters from '@/components/project-filters';
import { Link } from 'wouter';
import { getAramcoProjects, type Project } from '@/data/projects';

import heroPath from '@assets/hero-carousel-1_1752529906169.jpg';
import aramcoLogoPath from '@assets/aramco-logo--white_1752761457820.webp';

export default function AramcoProjects() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';
  const allAramco = useMemo(() => getAramcoProjects(), []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEntity, setSelectedEntity] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const sectors = useMemo(() => {
    const s = new Set(allAramco.map(p => p.sector));
    return Array.from(s).sort().map(v => ({ value: v, label: v }));
  }, [allAramco]);

  const categories = useMemo(() => {
    const c = new Set(allAramco.map(p => p.category));
    return Array.from(c).sort().map(v => ({ value: v, label: v }));
  }, [allAramco]);

  const entities = useMemo(() => {
    const e = new Set(allAramco.map(p => p.entity));
    return Array.from(e).sort().map(v => ({ value: v, label: v }));
  }, [allAramco]);

  const filtered = useMemo(() => {
    return allAramco.filter(p => {
      if (selectedSector !== 'all' && p.sector !== selectedSector) return false;
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (selectedEntity !== 'all' && p.entity !== selectedEntity) return false;
      if (searchTerm) {
        const s = searchTerm.toLowerCase();
        if (
          !p.title.toLowerCase().includes(s) &&
          !p.client.toLowerCase().includes(s) &&
          !p.location.toLowerCase().includes(s) &&
          !p.description.toLowerCase().includes(s)
        ) return false;
      }
      return true;
    });
  }, [allAramco, selectedSector, selectedCategory, selectedEntity, searchTerm]);

  const sectorBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    allAramco.forEach(p => { map[p.sector] = (map[p.sector] || 0) + 1; });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [allAramco]);

  const sectorIcons: Record<string, any> = {
    'Pipeline': Wrench,
    'Drilling': Drill,
    'Inspection': Microscope,
    'Geoscience': SearchIcon,
    'Processing': Building,
    'Facilities': Shield,
    'Water Injection': Wrench,
    'Offshore': Building,
  };

  const clearAll = () => {
    setSearchTerm('');
    setSelectedSector('all');
    setSelectedCategory('all');
    setSelectedEntity('all');
  };

  return (
    <div className="min-h-screen bg-black" dir={isAr ? 'rtl' : 'ltr'}>
      <SemanticMetadata
        page="about"
        title="Saudi Aramco Projects | Makamin"
        description="Makamin's comprehensive portfolio of Saudi Aramco projects spanning pipeline, drilling, inspection, and geoscience operations."
      />
      <EnhancedSecurity />

      <section className="relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroPath} alt="Aramco Projects" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-[#003f6a]/50 to-black/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <HeroLogo size="lg" />
          <img src={aramcoLogoPath} alt="Saudi Aramco" className="h-12 mx-auto mb-6 opacity-90" />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#003f6a] via-[#c5a66e] to-[#b72b2b] bg-clip-text text-transparent">
              {isAr ? 'مشاريع أرامكو السعودية' : 'Saudi Aramco Projects'}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {isAr
              ? 'سجل شامل لمشاريع مكامن مع أرامكو السعودية عبر قطاعات الأنابيب والحفر والفحص والجيوفيزياء'
              : "Makamin's comprehensive track record with Saudi Aramco across pipeline, drilling, inspection, and geoscience sectors"}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 sm:mt-8">
            <Badge className="bg-[#003f6a]/80 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg border border-[#c5a66e]/30">
              {allAramco.length} {isAr ? 'مشروع' : 'Projects'}
            </Badge>
            <Badge className="bg-[#003f6a]/80 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg border border-[#c5a66e]/30">
              {sectorBreakdown.length} {isAr ? 'قطاع' : 'Sectors'}
            </Badge>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-black py-12 border-b border-[#c5a66e]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            {isAr ? 'التوزيع حسب القطاع' : 'Sector Breakdown'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
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
                  <p className="text-xs text-gray-500 mt-1">{count} {isAr ? 'مشروع' : 'projects'}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <ProjectFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        resultCount={filtered.length}
        onClearAll={clearAll}
        variant="dark"
        filters={[
          {
            key: 'sector',
            label: 'All Sectors',
            labelAr: 'جميع القطاعات',
            value: selectedSector,
            onChange: setSelectedSector,
            options: sectors,
          },
          {
            key: 'category',
            label: 'All Categories',
            labelAr: 'جميع الفئات',
            value: selectedCategory,
            onChange: setSelectedCategory,
            options: categories,
          },
          {
            key: 'entity',
            label: 'All Entities',
            labelAr: 'جميع الكيانات',
            value: selectedEntity,
            onChange: setSelectedEntity,
            options: entities,
          },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-900 to-black py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              {isAr ? 'المشاريع' : 'Projects'}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#c5a66e] text-black' : 'bg-slate-700 text-gray-300'}`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#c5a66e] text-black' : 'bg-slate-700 text-gray-300'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.03, 0.3) }}
                >
                  <ProjectCard project={project} variant="dark" />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filtered.map(project => (
                <ProjectCard key={project.id} project={project} variant="dark" compact />
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <SearchIcon className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">{isAr ? 'لا توجد نتائج' : 'No projects found matching your criteria'}</p>
              <button onClick={clearAll} className="text-[#c5a66e] mt-2 hover:underline">
                {isAr ? 'مسح التصفية' : 'Clear filters'}
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#003f6a] to-slate-800 py-12 border-t border-[#c5a66e]/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {isAr ? 'الخدمات ذات الصلة' : 'Related Services'}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: isAr ? 'الأنابيب والصناعة' : 'Pipeline & Industrial', path: '/services/pipeline-industrial' },
              { label: isAr ? 'الحفر' : 'Drilling', path: '/services/drilling' },
              { label: isAr ? 'الفحص الصناعي' : 'Industrial Inspection', path: '/services/industrial-inspection' },
              { label: isAr ? 'الجيوفيزياء' : 'Geoscience', path: '/services/geoscience' },
            ].map(svc => (
              <Link key={svc.path} href={svc.path}>
                <Button variant="outline" className="text-white border-[#c5a66e]/30 hover:bg-[#c5a66e]/20">
                  {svc.label}
                  <ArrowRight className={`w-4 h-4 ${isAr ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
