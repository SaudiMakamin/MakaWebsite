import { Badge } from '@/components/ui/badge';
import { Search, ChevronDown, Filter, X } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';

interface FilterOption {
  value: string;
  label: string;
}

interface ProjectFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filters: {
    key: string;
    label: string;
    labelAr: string;
    value: string;
    onChange: (value: string) => void;
    options: FilterOption[];
  }[];
  resultCount: number;
  onClearAll?: () => void;
  variant?: 'dark' | 'light';
}

export default function ProjectFilters({
  searchTerm,
  onSearchChange,
  filters,
  resultCount,
  onClearAll,
  variant = 'dark',
}: ProjectFiltersProps) {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';
  const isDark = variant === 'dark';

  const hasActiveFilters = searchTerm || filters.some(f => f.value !== 'all');

  return (
    <div className={`py-10 border-b ${isDark ? 'bg-gradient-to-r from-[#003f6a] to-slate-800 border-[#c5a66e]/20' : 'bg-gray-50 border-gray-200'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Filter className={`w-5 h-5 ${isDark ? 'text-[#c5a66e]' : 'text-blue-600'}`} />
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {isAr ? 'بحث وتصفية' : 'Search & Filter'}
            </h3>
            {hasActiveFilters && onClearAll && (
              <button
                onClick={onClearAll}
                className={`ml-auto flex items-center gap-1 text-sm ${isDark ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-500'}`}
              >
                <X className="w-4 h-4" />
                {isAr ? 'مسح الكل' : 'Clear All'}
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDark ? 'text-[#c5a66e]' : 'text-blue-500'}`} />
              <input
                type="text"
                placeholder={isAr ? 'البحث في المشاريع...' : 'Search projects...'}
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 ${
                  isDark
                    ? 'bg-slate-800 border border-[#c5a66e]/30 text-white placeholder-gray-400 focus:border-[#c5a66e] focus:ring-[#c5a66e]/20'
                    : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20'
                }`}
              />
            </div>
            {filters.slice(0, 3).map(filter => (
              <div key={filter.key} className="relative">
                <select
                  value={filter.value}
                  onChange={(e) => filter.onChange(e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg appearance-none focus:outline-none focus:ring-2 ${
                    isDark
                      ? 'bg-slate-800 border border-[#c5a66e]/30 text-white focus:border-[#c5a66e] focus:ring-[#c5a66e]/20'
                      : 'bg-white border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20'
                  }`}
                >
                  <option value="all">{isAr ? filter.labelAr : filter.label}</option>
                  {filter.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none ${isDark ? 'text-[#c5a66e]' : 'text-blue-500'}`} />
              </div>
            ))}
          </div>

          {filters.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {filters.slice(3).map(filter => (
                <div key={filter.key} className="relative">
                  <select
                    value={filter.value}
                    onChange={(e) => filter.onChange(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg appearance-none focus:outline-none focus:ring-2 ${
                      isDark
                        ? 'bg-slate-800 border border-[#c5a66e]/30 text-white focus:border-[#c5a66e] focus:ring-[#c5a66e]/20'
                        : 'bg-white border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500/20'
                    }`}
                  >
                    <option value="all">{isAr ? filter.labelAr : filter.label}</option>
                    {filter.options.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none ${isDark ? 'text-[#c5a66e]' : 'text-blue-500'}`} />
                </div>
              ))}
            </div>
          )}

          <div className="text-center">
            <Badge className={`px-4 py-2 text-sm ${isDark ? 'bg-[#003f6a]/50 text-[#c5a66e] border border-[#c5a66e]/30' : 'bg-blue-100 text-blue-800 border border-blue-200'}`}>
              {isAr
                ? `${resultCount} مشروع`
                : `${resultCount} project${resultCount !== 1 ? 's' : ''} found`
              }
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
