import { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Search as SearchIcon, ArrowRight, LayoutGrid, List, Anchor, Ship } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import ProjectCard from '@/components/project-card';
import ProjectFilters from '@/components/project-filters';
import { Link } from 'wouter';
import { getOffshoreProjects, type Project } from '@/data/projects';

import heroPath from '@assets/hero-carousel-1_1752529906169.jpg';
import mosLogoPath from '@assets/Makamin-Offshore-Saudi-MOS_1773171180771.png';

export default function OffshoreProjectsPage() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';
  const allOffshore = useMemo(() => getOffshoreProjects(), []);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const clients = useMemo(() => {
    const c = new Set(allOffshore.map(p => p.client));
    return Array.from(c).sort().map(v => ({ value: v, label: v }));
  }, [allOffshore]);

  const categories = useMemo(() => {
    const c = new Set(allOffshore.map(p => p.category));
    return Array.from(c).sort().map(v => ({ value: v, label: v }));
  }, [allOffshore]);

  const filtered = useMemo(() => {
    return allOffshore.filter(p => {
      if (selectedClient !== 'all' && p.client !== selectedClient) return false;
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (selectedStatus !== 'all') {
        if (selectedStatus === 'verified' && p.recordStatus !== 'Verified') return false;
        if (selectedStatus === 'partial' && p.recordStatus !== 'Partially Documented') return false;
      }
      if (searchTerm) {
        const s = searchTerm.toLowerCase();
        if (
          !p.title.toLowerCase().includes(s) &&
          !p.client.toLowerCase().includes(s) &&
          !p.location.toLowerCase().includes(s) &&
          !p.description.toLowerCase().includes(s) &&
          !(p.relatedAssets && p.relatedAssets.some(a => a.toLowerCase().includes(s)))
        ) return false;
      }
      return true;
    });
  }, [allOffshore, selectedClient, selectedCategory, selectedStatus, searchTerm]);

  const categoryBreakdown = useMemo(() => {
    const map: Record<string, number> = {};
    allOffshore.forEach(p => { map[p.category] = (map[p.category] || 0) + 1; });
    return Object.entries(map).sort((a, b) => b[1] - a[1]);
  }, [allOffshore]);

  const totalValue = useMemo(() => {
    let total = 0;
    allOffshore.forEach(p => {
      if (p.value && p.currency === 'SAR') {
        const num = parseInt(p.value.replace(/,/g, ''));
        if (!isNaN(num)) total += num;
      }
    });
    return total;
  }, [allOffshore]);

  const clearAll = () => {
    setSearchTerm('');
    setSelectedClient('all');
    setSelectedCategory('all');
    setSelectedStatus('all');
  };

  return (
    <div className="min-h-screen bg-black">
      <SemanticMetadata
        page="projects"
        title="Makamin Offshore Saudi (MOS) — Offshore Projects Portfolio | Saudi Makamin"
        description="Makamin Offshore Saudi (MOS) marine and offshore project portfolio including vessel charters, security patrol, navigational aids, and offshore manning services for Saudi Aramco."
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
          <HeroLogo size="md" className="mx-auto mb-4" />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <img src={mosLogoPath} alt="Makamin Offshore Saudi (MOS)" className="h-16 sm:h-20 w-auto mx-auto mb-4 drop-shadow-lg" />
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-[#c5a66e] via-white to-[#c5a66e] bg-clip-text text-transparent">
              {isAr ? 'مكامن البحرية السعودية' : 'Makamin Offshore Saudi'}
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl text-gray-300 mb-2 font-medium"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {isAr ? 'محفظة المشاريع البحرية' : 'Offshore Projects Portfolio'}
          </motion.p>
          <motion.p
            className="text-sm md:text-base text-gray-400 mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {isAr
              ? 'سجل شامل لعمليات تأجير السفن والدعم البحري وخدمات الأمن والصيانة الملاحية مع أرامكو السعودية'
              : 'Comprehensive record of vessel charters, marine support, security patrol, and navigational maintenance with Saudi Aramco'}
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Badge className="bg-[#003f6a] text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-bold border border-[#c5a66e]">
              <Anchor className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {allOffshore.length} {isAr ? 'مشروع بحري' : 'Offshore Projects'}
            </Badge>
            {totalValue > 0 && (
              <Badge className="bg-[#b72b2b] text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-bold border border-[#c5a66e]">
                <Ship className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                SAR {(totalValue / 1e9).toFixed(2)}B+ {isAr ? 'إجمالي القيمة' : 'Total Value'}
              </Badge>
            )}
          </motion.div>
        </div>
      </motion.section>

      <section className="py-12 px-6 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">
            {isAr ? 'توزيع الفئات' : 'Category Breakdown'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {categoryBreakdown.map(([cat, count]) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? 'all' : cat)}
                className={`bg-slate-800/60 border rounded-lg p-4 text-center transition-all ${
                  selectedCategory === cat
                    ? 'border-[#c5a66e] bg-[#c5a66e]/10'
                    : 'border-slate-700 hover:border-slate-600'
                }`}
              >
                <p className="text-2xl font-bold text-[#c5a66e]">{count}</p>
                <p className="text-sm text-gray-400">{cat}</p>
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
            key: 'status',
            label: 'All Records',
            labelAr: 'جميع السجلات',
            value: selectedStatus,
            onChange: setSelectedStatus,
            options: [
              { value: 'verified', label: 'Verified Only' },
              { value: 'partial', label: 'Partially Documented' },
            ],
          },
        ]}
      />

      <section className="py-16 px-6 bg-gradient-to-br from-slate-900 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              {isAr ? 'جميع المشاريع البحرية' : 'All Offshore Projects'}
              <span className="text-[#c5a66e] ml-2">({filtered.length})</span>
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
                  <ProjectCard project={project} variant="dark" mosMode />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {filtered.map(project => (
                <ProjectCard key={project.id} project={project} variant="dark" compact mosMode />
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Anchor className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">{isAr ? 'لا توجد نتائج' : 'No projects match your filters'}</p>
              <button onClick={clearAll} className="text-[#c5a66e] mt-2 hover:underline">
                {isAr ? 'مسح التصفية' : 'Clear filters'}
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-6 bg-gradient-to-r from-[#003f6a] to-slate-800 border-t border-[#c5a66e]/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            {isAr ? 'استكشف المزيد' : 'Explore More'}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/projects/fleet">
              <Button className="bg-slate-700/60 text-white border border-[#c5a66e]/40 hover:bg-[#c5a66e]/30 hover:border-[#c5a66e]/60 font-medium px-5 py-2.5">
                <Ship className="w-4 h-4 mr-2" />
                {isAr ? 'الأسطول البحري والأصول' : 'Marine Fleet & Assets'}
              </Button>
            </Link>
            <Link href="/services/offshore">
              <Button className="bg-slate-700/60 text-white border border-[#c5a66e]/40 hover:bg-[#c5a66e]/30 hover:border-[#c5a66e]/60 font-medium px-5 py-2.5">
                <Anchor className="w-4 h-4 mr-2" />
                {isAr ? 'الخدمات البحرية' : 'Offshore Services'}
              </Button>
            </Link>
            <Link href="/projects/aramco">
              <Button className="bg-slate-700/60 text-white border border-[#c5a66e]/40 hover:bg-[#c5a66e]/30 hover:border-[#c5a66e]/60 font-medium px-5 py-2.5">
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
