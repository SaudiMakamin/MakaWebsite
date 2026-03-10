import { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Search as SearchIcon, ArrowRight, LayoutGrid, List, Building, Wrench } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import ProjectCard from '@/components/project-card';
import ProjectFilters from '@/components/project-filters';
import { Link } from 'wouter';
import { getPipelineProjects, type Project } from '@/data/projects';

import pipelineHeroPath from '@assets/صورة2_1752532266188.jpg';

export default function PipelineProjects() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';
  const allPipeline = useMemo(() => getPipelineProjects(), []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAramco, setSelectedAramco] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const clients = useMemo(() => {
    const c = new Set(allPipeline.map(p => p.client));
    return Array.from(c).sort().map(v => ({ value: v, label: v }));
  }, [allPipeline]);

  const categories = useMemo(() => {
    const c = new Set(allPipeline.map(p => p.category));
    return Array.from(c).sort().map(v => ({ value: v, label: v }));
  }, [allPipeline]);

  const filtered = useMemo(() => {
    return allPipeline.filter(p => {
      if (selectedClient !== 'all' && p.client !== selectedClient) return false;
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (selectedAramco === 'aramco' && !p.isAramco) return false;
      if (selectedAramco === 'non-aramco' && p.isAramco) return false;
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
  }, [allPipeline, selectedClient, selectedCategory, selectedAramco, searchTerm]);

  const categoryBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    allPipeline.forEach(p => { map[p.category] = (map[p.category] || 0) + 1; });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [allPipeline]);

  const clearAll = () => {
    setSearchTerm('');
    setSelectedClient('all');
    setSelectedCategory('all');
    setSelectedAramco('all');
  };

  return (
    <div className="min-h-screen bg-black" dir={isAr ? 'rtl' : 'ltr'}>
      <SemanticMetadata
        page="projects"
        title="Pipeline Projects | Saudi Makamin"
        description="Makamin's complete pipeline project portfolio including tie-ins, replacements, RTR installations, water injection, and rehabilitation projects."
      />
      <EnhancedSecurity />

      <section className="relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={pipelineHeroPath} alt="Pipeline Projects" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-[#003f6a]/50 to-black/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <HeroLogo size="lg" />
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#003f6a] via-[#c5a66e] to-[#b72b2b] bg-clip-text text-transparent">
              {isAr ? 'مشاريع خطوط الأنابيب' : 'Pipeline Projects'}
            </span>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-2 sm:px-0">
            {isAr
              ? 'سجل شامل لمشاريع خطوط الأنابيب — الربط والاستبدال والتأهيل وتركيب RTR وحقن المياه'
              : 'Complete pipeline track record — tie-ins, replacements, rehabilitation, RTR installations, and water injection'}
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 sm:mt-8">
            <Badge className="bg-[#003f6a]/80 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg border border-[#c5a66e]/30">
              {allPipeline.length} {isAr ? 'مشروع' : 'Projects'}
            </Badge>
            <Badge className="bg-[#003f6a]/80 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg border border-[#c5a66e]/30">
              {categoryBreakdown.length} {isAr ? 'فئة' : 'Categories'}
            </Badge>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-900 to-black py-12 border-b border-[#c5a66e]/20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            {isAr ? 'التوزيع حسب الفئة' : 'Category Breakdown'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {categoryBreakdown.map(([cat, count]) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? 'all' : cat)}
                className={`p-4 rounded-lg border text-center transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#c5a66e]/20 border-[#c5a66e] text-[#c5a66e]'
                    : 'bg-slate-800/50 border-slate-700 text-gray-300 hover:border-[#c5a66e]/50'
                }`}
              >
                <Wrench className="w-5 h-5 mx-auto mb-2" />
                <p className="text-xs font-semibold leading-tight">{cat}</p>
                <p className="text-xs text-gray-500 mt-1">{count}</p>
              </button>
            ))}
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
            key: 'client',
            label: 'All Clients',
            labelAr: 'جميع العملاء',
            value: selectedClient,
            onChange: setSelectedClient,
            options: clients,
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
            key: 'aramco',
            label: 'Aramco / Non-Aramco',
            labelAr: 'أرامكو / غير أرامكو',
            value: selectedAramco,
            onChange: setSelectedAramco,
            options: [
              { value: 'aramco', label: isAr ? 'أرامكو فقط' : 'Aramco Only' },
              { value: 'non-aramco', label: isAr ? 'غير أرامكو' : 'Non-Aramco' },
            ],
          },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-900 to-black py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              {isAr ? 'مشاريع الأنابيب' : 'Pipeline Projects'}
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
              <p className="text-gray-400 text-lg">{isAr ? 'لا توجد نتائج' : 'No pipeline projects found'}</p>
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
            <Link href="/services/pipeline-industrial">
              <Button variant="outline" className="text-white border-[#c5a66e]/30 hover:bg-[#c5a66e]/20">
                {isAr ? 'الأنابيب والصناعة' : 'Pipeline & Industrial Services'}
                <ArrowRight className={`w-4 h-4 ${isAr ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
            </Link>
            <Link href="/projects/aramco">
              <Button variant="outline" className="text-white border-[#c5a66e]/30 hover:bg-[#c5a66e]/20">
                {isAr ? 'مشاريع أرامكو' : 'Aramco Projects'}
                <ArrowRight className={`w-4 h-4 ${isAr ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
