import { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Search as SearchIcon, ArrowRight, LayoutGrid, List, Anchor, Ship, Shield, Calendar } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import ProjectCard from '@/components/project-card';
import ProjectFilters from '@/components/project-filters';
import { Link } from 'wouter';
import { getOffshoreProjects, type Project } from '@/data/projects';

import heroPath from '@assets/hero-carousel-1_1752529906169.jpg';

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

  const recordStatusColor = (status?: string) => {
    switch (status) {
      case 'Verified': return 'bg-green-600 text-white';
      case 'Partially Documented': return 'bg-amber-600 text-white';
      case 'Referenced in Records': return 'bg-slate-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <SemanticMetadata
        page="about"
        title="Offshore Projects | Saudi Makamin"
        description="Makamin Offshore Saudi (MOS) marine and offshore project portfolio including vessel charters, security patrol, navigational aids, and offshore manning services."
      />
      <EnhancedSecurity />

      <motion.section
        className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden"
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
            {isAr ? 'المشاريع البحرية' : 'Offshore Projects'}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {isAr
              ? 'محفظة المشاريع البحرية والعمليات البحرية لمكامن البحرية السعودية (MOS)'
              : 'Makamin Offshore Saudi (MOS) marine & offshore operations portfolio'}
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Badge className="bg-[#003f6a] text-white px-6 py-3 text-lg font-bold border border-[#c5a66e]">
              <Anchor className="w-5 h-5 mr-2" />
              {allOffshore.length} {isAr ? 'مشروع بحري' : 'Offshore Projects'}
            </Badge>
            {totalValue > 0 && (
              <Badge className="bg-[#b72b2b] text-white px-6 py-3 text-lg font-bold border border-[#c5a66e]">
                <Ship className="w-5 h-5 mr-2" />
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
              {isAr ? 'جميع المشاريع البحرية' : 'All Offshore Projects'}
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
                value: selectedClient,
                onChange: setSelectedClient,
                options: clients,
                placeholder: isAr ? 'العميل' : 'Client',
              },
              {
                value: selectedCategory,
                onChange: setSelectedCategory,
                options: categories,
                placeholder: isAr ? 'الفئة' : 'Category',
              },
              {
                value: selectedStatus,
                onChange: setSelectedStatus,
                options: [
                  { value: 'verified', label: 'Verified Only' },
                  { value: 'partial', label: 'Partially Documented' },
                ],
                placeholder: isAr ? 'حالة السجل' : 'Record Status',
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
                  {project.value && project.currency && (
                    <div className="mt-2 px-2">
                      <span className="text-xs text-[#c5a66e]">{project.currency} {project.value}</span>
                      {project.yearFrom && project.yearTo && (
                        <span className="text-xs text-gray-500 ml-2">
                          <Calendar className="w-3 h-3 inline mr-1" />{project.yearFrom}–{project.yearTo}
                        </span>
                      )}
                    </div>
                  )}
                  {project.relatedAssets && project.relatedAssets.length > 0 && (
                    <div className="mt-1 px-2">
                      <span className="text-xs text-gray-500">
                        <Ship className="w-3 h-3 inline mr-1" />
                        {project.relatedAssets.join(', ')}
                      </span>
                    </div>
                  )}
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
                    {project.value && project.currency && (
                      <span className="text-xs text-[#c5a66e]">{project.currency} {project.value}</span>
                    )}
                    {project.relatedAssets && project.relatedAssets.length > 0 && (
                      <span className="text-xs text-gray-500">
                        <Ship className="w-3 h-3 inline mr-1" />{project.relatedAssets.join(', ')}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Anchor className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">{isAr ? 'لا توجد نتائج' : 'No projects match your filters'}</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-12 px-6 bg-black border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/projects/fleet">
            <span className="inline-flex items-center gap-2 text-[#c5a66e] hover:text-white transition-colors cursor-pointer text-lg font-semibold">
              <Ship className="w-5 h-5" />
              {isAr ? 'عرض الأسطول البحري والأصول' : 'View Marine Fleet & Offshore Assets'}
              <ArrowRight className={`w-5 h-5 ${isAr ? 'rotate-180' : ''}`} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
