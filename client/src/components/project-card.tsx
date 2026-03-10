import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Building, Calendar, ArrowRight } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import { Link } from 'wouter';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  variant?: 'dark' | 'light';
  compact?: boolean;
}

export default function ProjectCard({ project, variant = 'dark', compact = false }: ProjectCardProps) {
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

  if (compact) {
    return (
      <Card className={`${isDark ? 'bg-slate-800/60 border-slate-700 hover:border-[#c5a66e]/50' : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'} transition-all duration-300`}>
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h4 className={`font-semibold text-sm leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h4>
            {project.status && (
              <Badge className={`${statusColor} text-xs flex-shrink-0`}>{project.status}</Badge>
            )}
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className={`flex items-center gap-1 ${isDark ? 'text-[#c5a66e]' : 'text-blue-600'}`}>
              <Building className="w-3 h-3" />{project.client}
            </span>
            {project.location && (
              <span className={`flex items-center gap-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <MapPin className="w-3 h-3" />{project.location}
              </span>
            )}
          </div>
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
