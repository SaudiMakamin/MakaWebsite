import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Building, FileText, ArrowRight, Calendar, Ship } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import { Link } from 'wouter';
import type { Project } from '@/data/projects';
import aramcoLogoPath from '@assets/Logo-saudi-aramco-vector-PNG_1752578814086.png';
import mosLogoPath from '@assets/Makamin-Offshore-Saudi-MOS_1773171180771.png';

interface ProjectCardProps {
  project: Project;
  variant?: 'dark' | 'light';
  compact?: boolean;
  aramcoMode?: boolean;
  mosMode?: boolean;
}

export default function ProjectCard({ project, variant = 'dark', compact = false, aramcoMode = false, mosMode = false }: ProjectCardProps) {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';
  const isDark = variant === 'dark';
  const title = isAr ? project.titleAr : project.title;
  const description = isAr ? project.descriptionAr : project.description;

  const statusColor = project.status === 'Completed'
    ? 'bg-green-600 text-white'
    : project.status === 'Ongoing'
    ? 'bg-blue-600 text-white'
    : 'bg-gray-500 text-white';

  const hasContractNo = !!project.contractNo;
  const hasContractValue = !!project.value && !!project.currency;
  const hasYearRange = !!project.yearFrom || !!project.yearTo;

  if (compact) {
    return (
      <Card className={`${isDark ? 'bg-slate-800/60 border-slate-700 hover:border-[#c5a66e]/50' : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'} transition-all duration-300`}>
        <CardContent className="p-4">
          {aramcoMode && (
            <div className="flex items-center gap-2 mb-2">
              <img src={aramcoLogoPath} alt="Saudi Aramco" className="h-4 w-auto opacity-80" />
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#c5a66e]">Aramco Project</span>
            </div>
          )}
          {mosMode && (
            <div className="flex items-center gap-2 mb-2">
              <img src={mosLogoPath} alt="MOS" className="h-5 w-auto opacity-90" />
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#c5a66e]">MOS Project</span>
            </div>
          )}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h4 className={`font-semibold text-sm leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h4>
            {project.status && (
              <Badge className={`${statusColor} text-xs flex-shrink-0`}>{project.status}</Badge>
            )}
          </div>
          {mosMode && project.relatedAssets && project.relatedAssets.length > 0 && (
            <div className="flex items-center gap-1.5 mb-2">
              <Ship className="w-3 h-3 text-blue-400" />
              <span className="text-xs font-medium text-blue-300">{project.relatedAssets.join(', ')}</span>
            </div>
          )}
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs">
            {project.location && (
              <span className={`flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <MapPin className="w-3 h-3" />{project.location}
              </span>
            )}
            {hasContractNo && (
              <span className={`flex items-center gap-1 font-mono ${isDark ? 'text-[#c5a66e]' : 'text-blue-600'}`}>
                <FileText className="w-3 h-3" />
                <span className="font-semibold">{isAr ? 'عقد' : 'Contract'}:</span> {project.contractNo}
              </span>
            )}
            {!hasContractNo && hasContractValue && (
              <span className={`flex items-center gap-1 font-mono ${isDark ? 'text-[#c5a66e]' : 'text-blue-600'}`}>
                <FileText className="w-3 h-3" />
                {project.currency} {project.value}
              </span>
            )}
            {hasYearRange && (
              <span className="flex items-center gap-1 text-gray-500">
                <Calendar className="w-3 h-3" />
                {project.yearFrom}{project.yearTo ? `–${project.yearTo}` : ''}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (mosMode) {
    return (
      <Card className="h-full bg-slate-800 border-[#c5a66e]/20 hover:border-[#c5a66e]/50 transition-all duration-300 group">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img src={mosLogoPath} alt="MOS" className="h-6 w-auto opacity-85 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center gap-2">
              {project.recordStatus && (
                <Badge className={`text-[10px] ${project.recordStatus === 'Verified' ? 'bg-green-600 text-white' : project.recordStatus === 'Partially Documented' ? 'bg-amber-600 text-white' : 'bg-slate-500 text-white'}`}>
                  {project.recordStatus}
                </Badge>
              )}
              {project.status && (
                <Badge className={`${statusColor} text-xs`}>{project.status}</Badge>
              )}
            </div>
          </div>

          <h3 className="text-lg font-bold mb-2 leading-tight text-white group-hover:text-[#c5a66e] transition-colors">{title}</h3>

          {project.relatedAssets && project.relatedAssets.length > 0 && (
            <div className="flex items-center gap-2 mb-3 bg-slate-900/50 rounded-md px-3 py-1.5 border border-slate-700/50">
              <Ship className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span className="text-sm font-semibold text-blue-300">{project.relatedAssets.join(', ')}</span>
            </div>
          )}

          <p className="text-sm mb-4 leading-relaxed line-clamp-2 text-gray-400">{description}</p>

          {hasContractValue && (
            <div className="bg-slate-900/80 border border-[#c5a66e]/25 rounded-lg px-4 py-3 mb-4">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="w-4 h-4 text-[#c5a66e] flex-shrink-0" />
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">{isAr ? 'قيمة العقد' : 'Contract Value'}</span>
              </div>
              <p className="font-mono text-base font-bold text-[#c5a66e] tracking-wide">
                {project.currency} {project.value}
              </p>
              {hasYearRange && (
                <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>{project.yearFrom}{project.yearTo ? ` – ${project.yearTo}` : ''}</span>
                </div>
              )}
            </div>
          )}

          <div className="space-y-1.5 mb-4">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-500 min-w-[52px] flex-shrink-0">{isAr ? 'العميل' : 'Client'}</span>
              <span className="text-[#c5a66e] font-medium">{project.client}</span>
            </div>
            {project.location && (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-500 min-w-[52px] flex-shrink-0">{isAr ? 'الموقع' : 'Location'}</span>
                <span className="text-gray-300">{project.location}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-500 min-w-[52px] flex-shrink-0">{isAr ? 'الفئة' : 'Category'}</span>
              <Badge className="bg-[#003f6a]/50 text-[#c5a66e] border border-[#c5a66e]/30 text-[10px] px-2 py-0">
                {project.category}
              </Badge>
            </div>
          </div>

          {project.highlights.length > 0 && (
            <div className="mb-4 border-t border-slate-700/50 pt-3">
              {project.highlights.slice(0, 2).map((h, i) => (
                <p key={i} className="text-xs flex items-center gap-1.5 text-gray-500 mb-1">
                  <span className="text-green-500 text-[10px]">✓</span> {h}
                </p>
              ))}
            </div>
          )}

          {project.serviceLink && (
            <Link href={project.serviceLink}>
              <span className="text-sm flex items-center gap-1 text-[#c5a66e] hover:text-[#c5a66e]/80 transition-colors cursor-pointer">
                {isAr ? 'الخدمة ذات الصلة' : 'Related Service'}
                <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
              </span>
            </Link>
          )}
        </CardContent>
      </Card>
    );
  }

  if (aramcoMode) {
    return (
      <Card className={`h-full bg-slate-800 border-[#c5a66e]/20 hover:border-[#c5a66e]/50 transition-all duration-300 group ${(hasContractNo || hasContractValue) ? 'ring-1 ring-[#c5a66e]/10' : ''}`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img src={aramcoLogoPath} alt="Saudi Aramco" className="h-5 w-auto opacity-80 group-hover:opacity-100 transition-opacity" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#c5a66e]/80">Project</span>
            </div>
            {project.status && (
              <Badge className={`${statusColor} text-xs`}>{project.status}</Badge>
            )}
          </div>

          <h3 className="text-lg font-bold mb-2 leading-tight text-white group-hover:text-[#c5a66e] transition-colors">{title}</h3>
          <p className="text-sm mb-4 leading-relaxed line-clamp-2 text-gray-400">{description}</p>

          {hasContractNo && (
            <div className="bg-slate-900/80 border border-[#c5a66e]/25 rounded-lg px-4 py-3 mb-4">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="w-4 h-4 text-[#c5a66e] flex-shrink-0" />
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">{isAr ? 'رقم العقد' : 'Contract No.'}</span>
              </div>
              <p className="font-mono text-base font-bold text-[#c5a66e] tracking-wide">{project.contractNo}</p>
            </div>
          )}

          {!hasContractNo && hasContractValue && (
            <div className="bg-slate-900/80 border border-[#c5a66e]/25 rounded-lg px-4 py-3 mb-4">
              <div className="flex items-center gap-2 mb-1">
                <FileText className="w-4 h-4 text-[#c5a66e] flex-shrink-0" />
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">{isAr ? 'قيمة العقد' : 'Contract Value'}</span>
              </div>
              <p className="font-mono text-base font-bold text-[#c5a66e] tracking-wide">
                {project.currency} {project.value}
              </p>
              {hasYearRange && (
                <div className="flex items-center gap-1.5 mt-1.5 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>{project.yearFrom}{project.yearTo ? ` – ${project.yearTo}` : ''}</span>
                </div>
              )}
            </div>
          )}

          <div className="space-y-1.5 mb-4">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-500 min-w-[52px] flex-shrink-0">{isAr ? 'العميل' : 'Client'}</span>
              <span className="text-[#c5a66e] font-medium">{project.client}</span>
            </div>
            {project.location && (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-500 min-w-[52px] flex-shrink-0">{isAr ? 'الموقع' : 'Location'}</span>
                <span className="text-gray-300">{project.location}</span>
              </div>
            )}
            {project.entity && (
              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-500 min-w-[52px] flex-shrink-0">{isAr ? 'الكيان' : 'Entity'}</span>
                <span className="text-gray-300">{project.entity}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-gray-500 min-w-[52px] flex-shrink-0">{isAr ? 'القطاع' : 'Sector'}</span>
              <Badge className="bg-[#003f6a]/50 text-[#c5a66e] border border-[#c5a66e]/30 text-[10px] px-2 py-0">
                {project.sector}
              </Badge>
            </div>
          </div>

          {project.highlights.length > 0 && (
            <div className="mb-4 border-t border-slate-700/50 pt-3">
              {project.highlights.slice(0, 2).map((h, i) => (
                <p key={i} className="text-xs flex items-center gap-1.5 text-gray-500 mb-1">
                  <span className="text-green-500 text-[10px]">✓</span> {h}
                </p>
              ))}
            </div>
          )}

          {project.serviceLink && (
            <Link href={project.serviceLink}>
              <span className="text-sm flex items-center gap-1 text-[#c5a66e] hover:text-[#c5a66e]/80 transition-colors cursor-pointer">
                {isAr ? 'الخدمة ذات الصلة' : 'Related Service'}
                <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
              </span>
            </Link>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`h-full ${isDark ? 'bg-slate-800 border-[#c5a66e]/20 hover:border-[#c5a66e]/50' : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg'} transition-all duration-300`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <Badge className={`text-xs ${isDark ? 'bg-[#003f6a]/50 text-[#c5a66e] border border-[#c5a66e]/30' : 'bg-blue-100 text-blue-800 border border-blue-200'}`}>
            {project.sector}
          </Badge>
          {project.status && (
            <Badge className={`${statusColor} text-xs`}>{project.status}</Badge>
          )}
        </div>

        <h3 className={`text-lg font-bold mb-2 leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
        <p className={`text-sm mb-4 leading-relaxed line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className={`text-xs ${isDark ? 'text-[#c5a66e] border-[#c5a66e]/30' : 'text-blue-700 border-blue-300'}`}>
            <Building className="w-3 h-3 mr-1" />{project.client}
          </Badge>
          {project.location && (
            <Badge variant="outline" className={`text-xs ${isDark ? 'text-gray-400 border-gray-600' : 'text-gray-500 border-gray-300'}`}>
              <MapPin className="w-3 h-3 mr-1" />{project.location}
            </Badge>
          )}
          {project.entity && (
            <Badge variant="outline" className={`text-xs ${isDark ? 'text-gray-400 border-gray-600' : 'text-gray-500 border-gray-300'}`}>
              {project.entity}
            </Badge>
          )}
          {project.contractNo && (
            <Badge variant="outline" className={`text-xs ${isDark ? 'text-gray-500 border-gray-700' : 'text-gray-400 border-gray-300'}`}>
              <FileText className="w-3 h-3 mr-1" />{project.contractNo}
            </Badge>
          )}
        </div>

        {project.highlights.length > 0 && (
          <div className="mb-4">
            {project.highlights.slice(0, 2).map((h, i) => (
              <p key={i} className={`text-xs flex items-center gap-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                <span className="text-green-500">✓</span> {h}
              </p>
            ))}
          </div>
        )}

        {project.serviceLink && (
          <Link href={project.serviceLink}>
            <span className={`text-sm flex items-center gap-1 ${isDark ? 'text-[#c5a66e] hover:text-[#c5a66e]/80' : 'text-blue-600 hover:text-blue-500'} transition-colors cursor-pointer`}>
              {isAr ? 'الخدمة ذات الصلة' : 'Related Service'}
              <ArrowRight className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} />
            </span>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
