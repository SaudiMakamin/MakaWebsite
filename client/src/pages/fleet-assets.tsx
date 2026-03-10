import { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Ship, Anchor, Building, Calendar, FileText, Search as SearchIcon, Shield, AlertCircle } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import { marineAssets, type MarineAsset, type RecordStatus } from '@/data/fleet';

import heroPath from '@assets/hero-carousel-1_1752529906169.jpg';

function statusColor(status: RecordStatus) {
  switch (status) {
    case 'Verified': return 'bg-green-600 text-white';
    case 'Partially Documented': return 'bg-amber-600 text-white';
    case 'Referenced in Records': return 'bg-slate-500 text-white';
  }
}

function statusIcon(status: RecordStatus) {
  switch (status) {
    case 'Verified': return <Shield className="w-3.5 h-3.5" />;
    case 'Partially Documented': return <AlertCircle className="w-3.5 h-3.5" />;
    case 'Referenced in Records': return <FileText className="w-3.5 h-3.5" />;
  }
}

function AssetCard({ asset }: { asset: MarineAsset }) {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';

  return (
    <Card className="bg-slate-800 border-[#c5a66e]/20 hover:border-[#c5a66e]/50 transition-all duration-300 h-full">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Ship className="w-5 h-5 text-[#c5a66e]" />
            <h3 className="text-lg font-bold text-white">{asset.assetName}</h3>
          </div>
          <Badge className={`text-xs flex items-center gap-1 flex-shrink-0 ${statusColor(asset.recordStatus)}`}>
            {statusIcon(asset.recordStatus)}
            {asset.recordStatus}
          </Badge>
        </div>

        <Badge className="text-xs bg-[#003f6a]/50 text-[#c5a66e] border border-[#c5a66e]/30 mb-3">
          {asset.assetType}
        </Badge>

        <div className="space-y-2 text-sm">
          {asset.ownerOrOperator && (
            <div className="flex items-center gap-2 text-gray-400">
              <Building className="w-3.5 h-3.5 text-[#c5a66e]" />
              <span>{isAr ? 'المالك/المشغل' : 'Owner/Operator'}: <span className="text-gray-300">{asset.ownerOrOperator}</span></span>
            </div>
          )}
          {asset.client && (
            <div className="flex items-center gap-2 text-gray-400">
              <Building className="w-3.5 h-3.5 text-[#c5a66e]" />
              <span>{isAr ? 'العميل' : 'Client'}: <span className="text-gray-300">{asset.client}</span></span>
            </div>
          )}
          {asset.relatedProject && (
            <div className="flex items-center gap-2 text-gray-400">
              <Anchor className="w-3.5 h-3.5 text-[#c5a66e]" />
              <span>{isAr ? 'المشروع' : 'Project'}: <span className="text-gray-300">{asset.relatedProject}</span></span>
            </div>
          )}
          {(asset.dateFrom || asset.dateTo) && (
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar className="w-3.5 h-3.5 text-[#c5a66e]" />
              <span>
                {asset.dateFrom && asset.dateFrom.substring(0, 4)}
                {asset.dateFrom && asset.dateTo && ' – '}
                {!asset.dateFrom && asset.dateTo && (isAr ? 'حتى ' : 'To ')}
                {asset.dateTo && asset.dateTo.substring(0, 4)}
              </span>
            </div>
          )}
          {asset.contractValue && asset.currency && (
            <div className="flex items-center gap-2 text-[#c5a66e] font-semibold">
              <span>{asset.currency} {asset.contractValue}</span>
            </div>
          )}
          {asset.notes && (
            <p className="text-xs text-gray-500 mt-2 italic">{asset.notes}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function FleetAssetsPage() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<'all' | RecordStatus>('all');
  const [selectedType, setSelectedType] = useState('all');

  const assetTypes = useMemo(() => {
    const types = new Set(marineAssets.map(a => a.assetType));
    return Array.from(types).sort();
  }, []);

  const filtered = useMemo(() => {
    return marineAssets.filter(a => {
      if (selectedStatus !== 'all' && a.recordStatus !== selectedStatus) return false;
      if (selectedType !== 'all' && a.assetType !== selectedType) return false;
      if (searchTerm) {
        const s = searchTerm.toLowerCase();
        if (
          !a.assetName.toLowerCase().includes(s) &&
          !(a.ownerOrOperator && a.ownerOrOperator.toLowerCase().includes(s)) &&
          !a.assetType.toLowerCase().includes(s) &&
          !(a.client && a.client.toLowerCase().includes(s)) &&
          !(a.relatedProject && a.relatedProject.toLowerCase().includes(s))
        ) return false;
      }
      return true;
    });
  }, [selectedStatus, selectedType, searchTerm]);

  const statusCounts = useMemo(() => {
    const map: Record<string, number> = { Verified: 0, 'Partially Documented': 0, 'Referenced in Records': 0 };
    marineAssets.forEach(a => { map[a.recordStatus] = (map[a.recordStatus] || 0) + 1; });
    return map;
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <SemanticMetadata
        page="about"
        title="Marine Fleet & Offshore Assets | Saudi Makamin"
        description="Complete marine fleet and offshore assets registry for Makamin Offshore Saudi (MOS) including platform support vessels, security patrol boats, and offshore vessels."
      />
      <EnhancedSecurity />

      <motion.section
        className="relative min-h-[40vh] md:min-h-[55vh] flex items-center justify-center text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <img src={heroPath} alt="" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <HeroLogo size="md" className="mx-auto mb-6" />
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {isAr ? 'الأسطول البحري والأصول' : 'Marine Fleet & Offshore Assets'}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {isAr
              ? 'سجل الأصول البحرية الكامل لمكامن البحرية السعودية المحدودة (MOS)'
              : 'Complete marine asset registry for Makamin Offshore Saudi Ltd (MOS)'}
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Badge className="bg-[#003f6a] text-white px-4 sm:px-5 py-2 sm:py-3 text-sm sm:text-base font-bold border border-[#c5a66e]">
              <Ship className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              {marineAssets.length} {isAr ? 'أصل بحري' : 'Marine Assets'}
            </Badge>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-10 px-6 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
            {Object.entries(statusCounts).map(([status, count]) => (
              <button
                key={status}
                onClick={() => setSelectedStatus(selectedStatus === status ? 'all' : status as RecordStatus)}
                className={`rounded-lg p-4 text-center border transition-all ${
                  selectedStatus === status
                    ? 'border-[#c5a66e] bg-slate-800'
                    : 'border-slate-700 bg-slate-800/60 hover:border-slate-600'
                }`}
              >
                <p className="text-2xl font-bold text-[#c5a66e]">{count}</p>
                <div className="flex items-center justify-center gap-1.5 mt-1">
                  <Badge className={`text-xs ${statusColor(status as RecordStatus)}`}>
                    {status}
                  </Badge>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder={isAr ? 'البحث في الأصول...' : 'Search assets...'}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm focus:outline-none focus:border-[#c5a66e]"
              />
            </div>
            <select
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#c5a66e]"
            >
              <option value="all">{isAr ? 'جميع الأنواع' : 'All Types'}</option>
              {assetTypes.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <p className="text-gray-400 text-sm mb-6">
            {isAr ? `عرض ${filtered.length} من ${marineAssets.length} أصل` : `Showing ${filtered.length} of ${marineAssets.length} assets`}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(asset => (
              <AssetCard key={asset.id} asset={asset} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Ship className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">{isAr ? 'لا توجد نتائج' : 'No assets match your filters'}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
