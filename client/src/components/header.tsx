import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Globe, Menu, X, ChevronDown, ChevronRight, Drill, Ship, TrendingUp, Building2, Eye, Target, Users, LayoutGrid, MapPin, Wrench, Search, FlaskConical, Cpu, Package, UserCheck, FolderKanban, ClipboardList, Award, FileText, BadgeCheck, Medal, Heart, Shield, FileCheck, Anchor, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { useLanguageContext } from './language-provider';
import makaminLogoPath from '@assets/logo mkamin_1752524503536.png';

export default function Header() {
  const [location] = useLocation();
  const { language, toggleLanguage, t } = useLanguageContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileSections, setExpandedMobileSections] = useState<Record<string, boolean>>({});

  const toggleMobileSection = (key: string) => {
    setExpandedMobileSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const aboutDropdown = [
    { path: '/about', label: 'Company Information', labelAr: 'معلومات الشركة', icon: Building2 },
    { path: '/about', label: 'Vision, Mission & Objectives', labelAr: 'الرؤية والرسالة والأهداف', icon: Eye },
    { path: '/about', label: 'Goals & Values', labelAr: 'الأهداف والقيم', icon: Target },
    { path: '/about', label: 'Management', labelAr: 'الإدارة', icon: Users },
    { path: '/about', label: 'Organizational Chart', labelAr: 'الهيكل التنظيمي', icon: LayoutGrid },
    { path: '/about', label: 'Workshop / Camp Locations', labelAr: 'مواقع الورش والمعسكرات', icon: MapPin },
  ];

  const servicesDropdown = [
    { path: '/petroleum-services', label: 'Pipeline & Industrial Services', labelAr: 'خدمات الأنابيب والصناعة', icon: Wrench },
    { path: '/petroleum-services', label: 'Drilling Services', labelAr: 'خدمات الحفر', icon: Drill },
    { path: '/petroleum-services', label: 'Geoscience Services', labelAr: 'خدمات علوم الأرض', icon: FlaskConical },
    { path: '/petroleum-services', label: 'Industrial Inspection Services', labelAr: 'خدمات التفتيش الصناعي', icon: Search },
    { path: '/petroleum-services', label: 'ZENCUS Services', labelAr: 'خدمات زينكوس', icon: Cpu },
    { path: '/petroleum-services', label: 'Supply Chain Services', labelAr: 'خدمات سلسلة الإمداد', icon: Package },
    { path: '/petroleum-services', label: 'Technical Staffing Services', labelAr: 'خدمات التوظيف التقني', icon: UserCheck },
  ];

  const operationsDropdown = [
    { path: '/petroleum-services', label: 'Makamin Petroleum Services', labelAr: 'مكامن للخدمات البترولية', icon: Drill },
    { path: '/offshore-operations', label: 'Makamin Offshore Bahrain', labelAr: 'مكامن البحرية البحرين', icon: Anchor },
    { path: '/petroleum-services', label: 'ZENCUS International', labelAr: 'زينكوس الدولية', icon: Cpu },
    { path: '/offshore-operations', label: 'Offshore Operations', labelAr: 'العمليات البحرية', icon: Ship },
  ];

  const projectsDropdown = [
    { path: '/projects', label: 'Major Projects', labelAr: 'المشاريع الكبرى', icon: FolderKanban },
    { path: '/projects', label: 'Project Management', labelAr: 'إدارة المشاريع', icon: ClipboardList },
  ];

  const certificationsDropdown = [
    { path: '/certifications', label: 'ISO Certifications', labelAr: 'شهادات الأيزو', icon: Award },
    { path: '/certifications', label: 'Legal Documents', labelAr: 'الوثائق القانونية', icon: FileText },
    { path: '/certifications', label: 'Commercial Registration Certificates', labelAr: 'شهادات السجل التجاري', icon: BadgeCheck },
    { path: '/certifications', label: 'Saudization Certificates', labelAr: 'شهادات السعودة', icon: Medal },
    { path: '/certifications', label: 'Letters of Appreciation & Completions', labelAr: 'خطابات التقدير والإنجاز', icon: Heart },
  ];

  const hseDropdown = [
    { path: '/petroleum-services', label: 'HSE Policy Statement', labelAr: 'بيان سياسة السلامة', icon: FileCheck },
  ];

  const shareholderDropdown = [
    { path: '/investor-relations', label: 'Investor Relations', labelAr: 'علاقات المستثمرين', icon: TrendingUp },
    { path: '/news', label: 'Corporate Governance', labelAr: 'حوكمة الشركات', icon: Building2 },
  ];

  const navItems = [
    { path: '/', label: t('home') },
    { 
      path: '/about', 
      label: t('about'),
      hasDropdown: true,
      overviewLabel: language === 'ar' ? 'نظرة عامة' : 'Overview',
      dropdown: aboutDropdown
    },
    { 
      path: '/services', 
      label: t('services'),
      hasDropdown: true,
      overviewLabel: language === 'ar' ? 'نظرة عامة على الخدمات' : 'Services Overview',
      dropdown: servicesDropdown
    },
    { 
      path: '/about', 
      label: language === 'ar' ? 'المجموعة' : 'Group',
      hasDropdown: true,
      overviewLabel: language === 'ar' ? 'نظرة عامة' : 'Overview',
      dropdown: operationsDropdown
    },
    { 
      path: '/projects', 
      label: t('projects'),
      hasDropdown: true,
      overviewLabel: language === 'ar' ? 'نظرة عامة' : 'Overview',
      dropdown: projectsDropdown
    },
    { 
      path: '/certifications', 
      label: language === 'ar' ? 'الشهادات' : 'Certifications',
      hasDropdown: true,
      overviewLabel: language === 'ar' ? 'نظرة عامة' : 'Overview',
      dropdown: certificationsDropdown
    },
    { 
      path: '/petroleum-services', 
      label: language === 'ar' ? 'السلامة والصحة المهنية' : 'HSE',
      hasDropdown: true,
      overviewLabel: language === 'ar' ? 'نظرة عامة' : 'Overview',
      dropdown: hseDropdown
    },
    { path: '/news', label: t('news') },
    { path: '/media-coverage', label: language === 'ar' ? 'صدى مكامن' : 'Media Coverage' },
    { 
      path: '/update-shareholder', 
      label: language === 'ar' ? 'المساهمين' : 'Shareholders',
      hasDropdown: true,
      overviewLabel: language === 'ar' ? 'نظرة عامة' : 'Overview',
      dropdown: shareholderDropdown
    },
    { path: '/contact', label: t('contact') },
  ];

  const isActiveLink = (path: string) => {
    if (path === '/' && location === '/') return true;
    return path !== '/' && location.startsWith(path);
  };

  const NavLink = ({ path, label, mobile = false, hasDropdown = false, dropdown, overviewLabel }: { 
    path: string; 
    label: string; 
    mobile?: boolean; 
    hasDropdown?: boolean;
    dropdown?: Array<{path: string; label: string; labelAr: string; icon: any}>;
    overviewLabel?: string;
  }) => {
    if (hasDropdown && !mobile) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-auto p-0 font-medium text-base makamin-gray hover:makamin-blue whitespace-nowrap">
              {label}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem asChild>
              <Link href={path} className="w-full cursor-pointer">
                <Globe className="mr-2 h-4 w-4" />
                {overviewLabel || (language === 'ar' ? 'نظرة عامة' : 'Overview')}
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {dropdown?.map((item, index) => (
              <DropdownMenuItem key={index} asChild>
                <Link href={item.path} className="w-full cursor-pointer">
                  <item.icon className="mr-2 h-4 w-4" />
                  {language === 'ar' ? item.labelAr : item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    if (hasDropdown && mobile) {
      const sectionKey = `${path}-${label}`;
      const isExpanded = expandedMobileSections[sectionKey] || false;
      return (
        <div>
          <button
            type="button"
            onClick={() => toggleMobileSection(sectionKey)}
            className={`flex items-center justify-between w-full py-2 transition-colors font-medium ${
              isActiveLink(path) ? 'makamin-blue' : 'makamin-gray hover:makamin-blue'
            }`}
          >
            <span>{label}</span>
            <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
          {isExpanded && (
            <div className={`${language === 'ar' ? 'pr-4 border-r-2' : 'pl-4 border-l-2'} border-gray-200 space-y-1 pb-2`}>
              <Link
                href={path}
                className="flex items-center gap-2 py-1.5 text-sm makamin-gray hover:makamin-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Globe className="h-3.5 w-3.5 flex-shrink-0" />
                {overviewLabel || (language === 'ar' ? 'نظرة عامة' : 'Overview')}
              </Link>
              {dropdown?.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className="flex items-center gap-2 py-1.5 text-sm makamin-gray hover:makamin-blue transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="h-3.5 w-3.5 flex-shrink-0" />
                  {language === 'ar' ? item.labelAr : item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        href={path}
        className={`${
          isActiveLink(path)
            ? 'makamin-blue border-b-2 border-makamin-blue'
            : 'makamin-gray hover:makamin-blue'
        } ${mobile ? 'block py-2' : 'inline-flex items-center whitespace-nowrap'} transition-colors font-medium`}
        onClick={() => mobile && setMobileMenuOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 group">
            <img 
              src={makaminLogoPath} 
              alt="شعار مكامن السعودية القابضة" 
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
              style={{
                background: 'none',
                borderRadius: '0px',
                border: 'none',
                boxShadow: 'none',
                outline: 'none'
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className={`text-2xl sm:text-3xl font-bold ${language === 'ar' ? 'bg-gradient-to-r from-[#c5a66e] to-[#d4b876] bg-clip-text text-transparent' : 'bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'} ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                {language === 'ar' ? 'مكامن' : 'Makamin'}
              </span>
              <span className="text-base sm:text-lg font-semibold text-gray-700 -mt-1 hidden sm:block">
                {language === 'ar' ? 'السعودية القابضة' : 'Saudi Holding'}
              </span>
            </div>
          </Link>

          <nav className={`hidden md:flex items-center flex-nowrap ${language === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            {navItems.map((item, index) => (
              <NavLink 
                key={`${item.path}-${index}`} 
                path={item.path} 
                label={item.label} 
                hasDropdown={item.hasDropdown}
                dropdown={item.dropdown}
                overviewLabel={item.overviewLabel}
              />
            ))}
          </nav>

          <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="md:hidden bg-makamin-light makamin-blue hover:bg-makamin-blue hover:text-white h-10 px-3 sm:px-4"
            >
              <Globe className={`h-4 w-4 ${language === 'ar' ? 'ml-1 sm:ml-2' : 'mr-1 sm:mr-2'}`} />
              <span className="text-xs">{language === 'ar' ? 'EN' : 'عر'}</span>
            </Button>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side={language === 'ar' ? 'left' : 'right'} className="w-[300px] sm:w-[400px] overflow-y-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
                <nav className="flex flex-col space-y-2 mt-8">
                  {navItems.map((item, index) => (
                    <NavLink 
                      key={`mobile-${item.path}-${index}`} 
                      path={item.path} 
                      label={item.label} 
                      mobile 
                      hasDropdown={item.hasDropdown}
                      dropdown={item.dropdown}
                      overviewLabel={item.overviewLabel}
                    />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
