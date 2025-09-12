import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Globe, Menu, X, ChevronDown, Drill, Ship, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { useLanguageContext } from './language-provider';
import makaminLogoPath from '@assets/logo mkamin_1752524503536.png';

export default function Header() {
  const [location] = useLocation();
  const { language, toggleLanguage, t } = useLanguageContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const subsidiaryItems = [
    { path: '/petroleum-services', label: 'Petroleum Services', labelAr: 'الخدمات البترولية', icon: Drill },
    { path: '/offshore-operations', label: 'Offshore Operations', labelAr: 'العمليات البحرية', icon: Ship },
    { path: '/bahrain-operations', label: 'Bahrain Operations', labelAr: 'عمليات البحرين', icon: Globe },
    { path: '/investor-relations', label: 'Investor Relations', labelAr: 'علاقات المستثمرين', icon: TrendingUp },
  ];

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { 
      path: '/services', 
      label: t('services'),
      hasDropdown: true,
      dropdown: subsidiaryItems
    },
    { path: '/projects', label: t('projects') },
    { path: '/certifications', label: t('certificationsTitle') },
    { path: '/news', label: t('news') },
    { path: '/media-coverage', label: language === 'ar' ? 'صدى مكامن' : 'Media Coverage' },
    { path: '/update-shareholder', label: language === 'ar' ? 'تحديث بيانات المساهم' : 'Shareholder Information' },
    { path: '/contact', label: t('contact') },
  ];

  const isActiveLink = (path: string) => {
    if (path === '/' && location === '/') return true;
    return path !== '/' && location.startsWith(path);
  };

  const NavLink = ({ path, label, mobile = false, hasDropdown = false, dropdown }: { 
    path: string; 
    label: string; 
    mobile?: boolean; 
    hasDropdown?: boolean;
    dropdown?: Array<{path: string; label: string; labelAr: string; icon: any}>
  }) => {
    if (hasDropdown && !mobile) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-auto p-0 font-medium makamin-gray hover:makamin-blue">
              {label}
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem asChild>
              <Link href={path} className="w-full cursor-pointer">
                <Globe className="mr-2 h-4 w-4" />
                {language === 'ar' ? 'نظرة عامة' : 'Overview'}
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

    return (
      <Link
        href={path}
        className={`${
          isActiveLink(path)
            ? 'makamin-blue border-b-2 border-makamin-blue'
            : 'makamin-gray hover:makamin-blue'
        } ${mobile ? 'block py-2' : ''} transition-colors font-medium`}
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
          {/* Company Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 group">
            {/* شعار مكامن الرسمي - نظيف بدون دوائر */}
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

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex ${language === 'ar' ? 'space-x-reverse space-x-8' : 'space-x-8'}`}>
            {navItems.map(item => (
              <NavLink 
                key={item.path} 
                path={item.path} 
                label={item.label} 
                hasDropdown={item.hasDropdown}
                dropdown={item.dropdown}
              />
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="bg-makamin-light makamin-blue hover:bg-makamin-blue hover:text-white h-10 px-3 sm:px-4"
            >
              <Globe className={`h-4 w-4 ${language === 'ar' ? 'ml-1 sm:ml-2' : 'mr-1 sm:mr-2'}`} />
              <span className="hidden sm:inline">{t('language')}</span>
              <span className="sm:hidden text-xs">{language === 'ar' ? 'EN' : 'عر'}</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side={language === 'ar' ? 'left' : 'right'} className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map(item => (
                    <NavLink key={item.path} path={item.path} label={item.label} mobile />
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
