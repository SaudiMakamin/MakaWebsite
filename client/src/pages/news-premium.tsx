import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguageContext } from '@/components/language-provider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Star, 
  Newspaper,
  ChevronRight,
  ExternalLink,
  Users,
  TrendingUp,
  Globe,
  Target,
  Shield,
  Award,
  Search,
  Filter
} from 'lucide-react';
import { Link } from 'wouter';

export default function NewsPremium() {
  const { language } = useLanguageContext();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSection, setSelectedSection] = useState('corporate');

  // Corporate News - أخبار الشركة
  const corporateNews = [
    {
      id: 'extraordinary-general-assembly-2025',
      title: 'دعوة رسمية لحضور الجمعية العمومية غير العادية',
      titleEn: 'Official Invitation to Extraordinary General Assembly',
      excerpt: 'شركة مكامن السعودية القابضة لخدمات النفط والغاز تدعو جميع المساهمين لحضور الجمعية العمومية غير العادية المقررة يوم الثلاثاء 22 يوليو 2025 في الرياض',
      excerptEn: 'Saudi Makamin Holding Company for Oil & Gas Services invites all shareholders to attend the Extraordinary General Assembly scheduled for Tuesday, July 22, 2025 in Riyadh',
      image: '/attached_assets/logo mkamin_1752872763270.png',
      date: '2025-07-22',
      category: 'governance',
      author: 'المكتب الإعلامي لمكامن',
      authorEn: 'Makamin Media Office',
      location: 'الرياض، المملكة العربية السعودية',
      locationEn: 'Riyadh, Saudi Arabia',
      featured: true,
      priority: 1,
      readTime: '5 دقائق',
      readTimeEn: '5 min'
    },
    {
      id: 'ceo-appointment-2025',
      title: 'تعيين الأستاذ عادل النوب مديراً تنفيذياً جديداً للشركة',
      titleEn: 'Appointment of Mr. Adel Alnoob as New CEO',
      excerpt: 'بقرار من مجلس الإدارة، تم تعيين الأستاذ عادل عايض النوب مديراً تنفيذياً لشركة مكامن السعودية القابضة لقيادة المرحلة الجديدة من النمو والتطوير',
      excerptEn: 'By decision of the Board of Directors, Mr. Adel Ayed Alnoob has been appointed as CEO of Saudi Makamin Holding Company to lead the new phase of growth and development',
      image: '/attached_assets/logo mkamin_1752872763270.png',
      date: '2025-01-15',
      category: 'leadership',
      author: 'مجلس الإدارة',
      authorEn: 'Board of Directors',
      location: 'الرياض، المملكة العربية السعودية',
      locationEn: 'Riyadh, Saudi Arabia',
      featured: false,
      priority: 2,
      readTime: '4 دقائق',
      readTimeEn: '4 min'
    },
    {
      id: 'aramco-partnership-2025',
      title: 'توقيع اتفاقية شراكة استراتيجية مع أرامكو السعودية',
      titleEn: 'Strategic Partnership Agreement with Saudi Aramco',
      excerpt: 'تم توقيع اتفاقية شراكة استراتيجية مع شركة أرامكو السعودية لتطوير قطاع الخدمات النفطية وتعزيز القدرات التقنية في مجال الطاقة',
      excerptEn: 'Strategic partnership agreement signed with Saudi Aramco to develop oil services sector and enhance technical capabilities in energy field',
      image: '/attached_assets/logo mkamin_1752872763270.png',
      date: '2025-01-10',
      category: 'partnership',
      author: 'قسم الشراكات الاستراتيجية',
      authorEn: 'Strategic Partnerships Department',
      location: 'الظهران، المملكة العربية السعودية',
      locationEn: 'Dhahran, Saudi Arabia',
      featured: false,
      priority: 3,
      readTime: '6 دقائق',
      readTimeEn: '6 min'
    }
  ];

  // Public Affairs - أخبار عامة
  const publicNews = [
    {
      id: 'energy-sector-growth-2025',
      title: 'نمو قطاع الطاقة السعودي بنسبة 15% خلال العام الجاري',
      titleEn: 'Saudi Energy Sector Growth by 15% This Year',
      excerpt: 'أظهرت الإحصائيات الرسمية نمواً قوياً في قطاع الطاقة السعودي بنسبة 15% مما يعكس نجاح رؤية المملكة 2030 في تنويع مصادر الطاقة',
      excerptEn: 'Official statistics show strong growth in Saudi energy sector by 15%, reflecting the success of Kingdom Vision 2030 in diversifying energy sources',
      image: '/attached_assets/logo mkamin_1752872763270.png',
      date: '2025-01-18',
      category: 'industry',
      author: 'وزارة الطاقة',
      authorEn: 'Ministry of Energy',
      location: 'الرياض، المملكة العربية السعودية',
      locationEn: 'Riyadh, Saudi Arabia',
      featured: true,
      priority: 1,
      readTime: '7 دقائق',
      readTimeEn: '7 min'
    },
    {
      id: 'neom-energy-project-2025',
      title: 'مشروع نيوم للطاقة المتجددة يحقق إنجازاً تاريخياً',
      titleEn: 'NEOM Renewable Energy Project Achieves Historic Milestone',
      excerpt: 'حقق مشروع نيوم للطاقة المتجددة إنجازاً تاريخياً بإنتاج 5 جيجاوات من الطاقة النظيفة، مما يضع المملكة في مقدمة الدول الرائدة في الطاقة المتجددة',
      excerptEn: 'NEOM renewable energy project achieves historic milestone by producing 5 GW of clean energy, positioning the Kingdom at the forefront of renewable energy leaders',
      image: '/attached_assets/logo mkamin_1752872763270.png',
      date: '2025-01-12',
      category: 'technology',
      author: 'شركة نيوم',
      authorEn: 'NEOM Company',
      location: 'نيوم، المملكة العربية السعودية',
      locationEn: 'NEOM, Saudi Arabia',
      featured: false,
      priority: 2,
      readTime: '8 دقائق',
      readTimeEn: '8 min'
    }
  ];

  // Categories for filtering
  const categories = [
    { id: 'all', nameAr: 'جميع الأخبار', nameEn: 'All News', color: 'bg-slate-600', icon: Globe },
    { id: 'governance', nameAr: 'الحوكمة', nameEn: 'Governance', color: 'bg-blue-600', icon: Shield },
    { id: 'leadership', nameAr: 'القيادة', nameEn: 'Leadership', color: 'bg-green-600', icon: Users },
    { id: 'partnership', nameAr: 'الشراكات', nameEn: 'Partnerships', color: 'bg-purple-600', icon: Target },
    { id: 'industry', nameAr: 'الصناعة', nameEn: 'Industry', color: 'bg-orange-600', icon: TrendingUp },
    { id: 'technology', nameAr: 'التكنولوجيا', nameEn: 'Technology', color: 'bg-cyan-600', icon: Award }
  ];

  const sections = [
    {
      id: 'corporate',
      nameAr: 'أخبار الشركة',
      nameEn: 'Corporate News',
      description: 'آخر أخبار وتطورات شركة مكامن السعودية القابضة',
      descriptionEn: 'Latest news and developments from Saudi Makamin Holding Company',
      icon: Building2,
      color: 'from-blue-600 to-blue-800',
      data: corporateNews
    },
    {
      id: 'public',
      nameAr: 'أخبار عامة',
      nameEn: 'Public Affairs',
      description: 'أخبار قطاع الطاقة والتطورات الصناعية في المملكة',
      descriptionEn: 'Energy sector news and industrial developments in the Kingdom',
      icon: Globe,
      color: 'from-green-600 to-green-800',
      data: publicNews
    }
  ];

  const currentSection = sections.find(s => s.id === selectedSection);
  const currentNews = currentSection?.data || [];
  const filteredNews = selectedCategory === 'all' 
    ? currentNews 
    : currentNews.filter(news => news.category === selectedCategory);

  const featuredNews = filteredNews.filter(news => news.featured);
  const regularNews = filteredNews.filter(news => !news.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Premium Header */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(34,197,94,0.1),transparent_70%)]" />
        
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                <Newspaper className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                {language === 'ar' ? 'مركز أخبار مكامن' : 'Makamin News Center'}
              </h1>
            </div>
            
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              {language === 'ar' 
                ? 'نافذتك الإعلامية لآخر الأخبار والتطورات في شركة مكامن السعودية القابضة وقطاع الطاقة'
                : 'Your media gateway to the latest news and developments at Saudi Makamin Holding Company and the energy sector'
              }
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
              <Calendar className="w-4 h-4" />
              <span>{language === 'ar' ? 'محدث يومياً' : 'Updated Daily'}</span>
              <span className="mx-2">•</span>
              <div className="relative group flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 animate-pulse-indicator shadow-lg shadow-green-500/50 cursor-pointer"></div>
                <span>{language === 'ar' ? 'تغطية شاملة' : 'Comprehensive Coverage'}</span>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  الخبر حي – قيد التحديث
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Selector */}
      <section className="py-12 border-b border-slate-700/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <motion.button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl transition-all duration-300 ${
                    selectedSection === section.id
                      ? `bg-gradient-to-r ${section.color} text-white shadow-2xl scale-105`
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold text-lg">
                      {language === 'ar' ? section.nameAr : section.nameEn}
                    </div>
                    <div className="text-xs opacity-80">
                      {language === 'ar' ? section.description : section.descriptionEn}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `${category.color} text-white shadow-lg scale-105`
                      : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {language === 'ar' ? category.nameAr : category.nameEn}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <Star className="w-8 h-8 text-yellow-500" />
                {language === 'ar' ? 'الأخبار المميزة' : 'Featured News'}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group"
                >
                  <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden h-full">
                    <div className="relative">
                      <div className="absolute top-4 right-4 z-10">
                        <Badge className="bg-yellow-600/90 text-white px-3 py-1 backdrop-blur-sm">
                          <Star className="w-3 h-3 mr-1" />
                          {language === 'ar' ? 'مميز' : 'FEATURED'}
                        </Badge>
                      </div>
                      
                      <div className="h-64 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                        <img 
                          src={news.image} 
                          alt={language === 'ar' ? news.title : news.titleEn}
                          className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      </div>
                    </div>

                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className={`${categories.find(c => c.id === news.category)?.color} text-white`}>
                          {language === 'ar' 
                            ? categories.find(c => c.id === news.category)?.nameAr
                            : categories.find(c => c.id === news.category)?.nameEn
                          }
                        </Badge>
                        <div className="text-sm text-slate-400 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(news.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                        {language === 'ar' ? news.title : news.titleEn}
                      </h3>
                      
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {language === 'ar' ? news.excerpt : news.excerptEn}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {language === 'ar' ? news.location : news.locationEn}
                          </div>
                          <div className="relative group">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 animate-pulse-indicator shadow-lg shadow-red-500/50 cursor-pointer"></div>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                              الخبر حي – قيد التحديث
                            </div>
                          </div>
                        </div>
                        
                        <Link href={`/news/${news.id}`}>
                          <Button 
                            variant="ghost" 
                            className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 group/btn"
                          >
                            {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                            <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News Grid */}
      {regularNews.length > 0 && (
        <section className="py-16 bg-slate-800/20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
                <Newspaper className="w-8 h-8 text-blue-500" />
                {language === 'ar' ? 'آخر الأخبار' : 'Latest News'}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {regularNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="bg-slate-800/60 border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/80 transition-all duration-500 h-full">
                    <div className="relative">
                      <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                        <img 
                          src={news.image} 
                          alt={language === 'ar' ? news.title : news.titleEn}
                          className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                      </div>
                      
                      <div className="absolute top-4 right-4">
                        <Badge className={`${categories.find(c => c.id === news.category)?.color} text-white`}>
                          {language === 'ar' 
                            ? categories.find(c => c.id === news.category)?.nameAr
                            : categories.find(c => c.id === news.category)?.nameEn
                          }
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3 text-sm text-slate-400">
                        <Calendar className="w-4 h-4" />
                        {new Date(news.date).toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US')}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                        {language === 'ar' ? news.title : news.titleEn}
                      </h3>
                      
                      <p className="text-slate-300 mb-4 text-sm leading-relaxed line-clamp-3">
                        {language === 'ar' ? news.excerpt : news.excerptEn}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-slate-500">
                          {language === 'ar' ? news.author : news.authorEn}
                        </div>
                        
                        <Link href={`/news/${news.id}`}>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 group/btn"
                          >
                            {language === 'ar' ? 'اقرأ' : 'Read'}
                            <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {filteredNews.length === 0 && (
        <section className="py-32">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-300">
                {language === 'ar' ? 'لا توجد أخبار في هذا القسم' : 'No news in this section'}
              </h3>
              <p className="text-slate-500 max-w-md mx-auto">
                {language === 'ar' 
                  ? 'جرب تصفح قسم آخر أو تصفح جميع الأخبار'
                  : 'Try browsing another section or view all news'
                }
              </p>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}