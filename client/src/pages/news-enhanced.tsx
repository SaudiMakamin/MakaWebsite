import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguageContext } from '@/components/language-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Calendar, 
  ArrowRight, 
  Search, 
  Filter,
  Building2,
  Handshake,
  Award,
  Zap,
  Globe,
  Trophy,
  Users,
  Target,
  Newspaper,
  ExternalLink,
  User
} from 'lucide-react';
import { Link } from 'wouter';

export default function NewsEnhanced() {
  const { language } = useLanguageContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [activeTab, setActiveTab] = useState('corporate');

  // Corporate News Section - أخبار الشركة
  const corporateNews = [
    {
      id: 'extraordinary-general-assembly-2025',
      category: 'board',
      categoryIcon: Building2,
      title: 'دعوة رسمية لحضور الجمعية العمومية غير العادية',
      titleAr: 'دعوة رسمية لحضور الجمعية العمومية غير العادية',
      excerpt: 'شركة مكامن السعودية القابضة لخدمات النفط والغاز تدعو جميع المساهمين لحضور الجمعية العمومية غير العادية يوم الثلاثاء 22 يوليو 2025م في الرياض. منصة إلكترونية متاحة.',
      excerptAr: 'شركة مكامن السعودية القابضة لخدمات النفط والغاز تدعو جميع المساهمين لحضور الجمعية العمومية غير العادية يوم الثلاثاء 22 يوليو 2025م في الرياض. منصة إلكترونية متاحة.',
      image: '/attached_assets/logo mkamin_1752524503536.png',
      date: '2025-07-01',
      author: 'المكتب الإعلامي لمكامن',
      authorAr: 'المكتب الإعلامي لمكامن',
      location: 'مقر الرياض',
      locationAr: 'مقر الرياض',
      tags: ['مجلس الإدارة', 'وزارة التجارة', 'إشراف قانوني', 'حدث سيادي'],
      tagsAr: ['مجلس الإدارة', 'وزارة التجارة', 'إشراف قانوني', 'حدث سيادي'],
      featured: true,
      priority: true,
      readTime: '8 دقائق قراءة',
      readTimeAr: '8 دقائق قراءة',
      dataNewsId: 'news0',
      type: 'corporate'
    },
    {
      id: 'okaz-court-appointment-2025',
      category: 'board',
      categoryIcon: Building2,
      title: 'محكمة تجارية تعيّن سعودياً مديراً للإشراف على شركة غاز ونفط وتلزمه بدعوة المساهمين',
      titleAr: 'محكمة تجارية تعيّن سعودياً مديراً للإشراف على شركة غاز ونفط وتلزمه بدعوة المساهمين',
      excerpt: 'محكمة الرياض تعيّن عادل النوب لإدارة شركة مختصة بالنفط والغاز بعد انتهاء ولاية المجلس السابق، وتلزمه بدعوة الجمعية العمومية للمساهمين خلال 90 يومًا.',
      excerptAr: 'محكمة الرياض تعيّن عادل النوب لإدارة شركة مختصة بالنفط والغاز بعد انتهاء ولاية المجلس السابق، وتلزمه بدعوة الجمعية العمومية للمساهمين خلال 90 يومًا.',
      image: '/attached_assets/Logo_Ministry_of_Commerce.svg_1752785663072.png',
      date: '2025-01-29',
      author: 'صحيفة عكاظ',
      authorAr: 'صحيفة عكاظ',
      location: 'Riyadh Commercial Court',
      locationAr: 'المحكمة التجارية بالرياض',
      tags: ['Court Decision', 'Legal', 'Okaz News'],
      tagsAr: ['قرار المحكمة', 'قانوني', 'أخبار عكاظ'],
      featured: false,
      priority: false,
      readTime: '8 min read',
      readTimeAr: '8 دقائق قراءة',
      externalUrl: 'https://www.okaz.com.sa/news/local/2179775',
      source: 'Okaz',
      dataNewsId: 'news1',
      type: 'corporate'
    },
    {
      id: 'makamin-offshore-expansion-2024',
      category: 'expansion',
      categoryIcon: Building2,
      title: 'Makamin Launches Next-Gen Offshore Fleet to Meet Regional Energy Surge',
      titleAr: 'مكامن تطلق أسطولاً بحرياً متطوراً لمواكبة الطفرة الطاقوية الإقليمية',
      excerpt: 'Saudi Makamin Holding Company announces the deployment of 8 advanced offshore support vessels, strengthening its position as the leading marine services provider for Aramco and regional energy giants.',
      excerptAr: 'شركة مكامن السعودية القابضة تعلن نشر 8 سفن دعم بحرية متطورة، مما يعزز مكانتها كأرقى مزود للخدمات البحرية لأرامكو وعمالقة الطاقة الإقليمية.',
      image: '/attached_assets/Drilling Waseea (10)_1752593343959.jpg',
      date: '2024-12-15',
      author: 'Makamin Media Office',
      authorAr: 'المكتب الإعلامي لمكامن',
      location: 'Riyadh HQ',
      locationAr: 'مقر الرياض',
      tags: ['Marine Operations', 'Fleet Expansion', 'Aramco Partnership', 'Regional Leadership'],
      tagsAr: ['العمليات البحرية', 'توسع الأسطول', 'شراكة أرامكو', 'الريادة الإقليمية'],
      featured: false,
      readTime: '4 min read',
      readTimeAr: '4 دقائق قراءة'
    },
    {
      id: 'aramco-tier1-contractor-2024',
      category: 'recognition',
      categoryIcon: Award,
      title: 'Makamin Achieves Aramco Tier-1 Contractor Status with Zero LTA Record',
      titleAr: 'مكامن تحقق مرتبة المقاول من الدرجة الأولى مع أرامكو بسجل صفر حوادث',
      excerpt: 'Following 1,980 consecutive days without Lost Time Accidents, Saudi Aramco officially elevates Makamin to Tier-1 contractor status, recognizing exceptional safety performance and operational excellence.',
      excerptAr: 'بعد 1,980 يوماً متتالياً بدون حوادث فقدان وقت العمل، ترفع أرامكو السعودية رسمياً مكامن إلى مرتبة المقاول من الدرجة الأولى، اعترافاً بالأداء الاستثنائي في السلامة والتميز التشغيلي.',
      image: '/attached_assets/Logo-saudi-aramco-vector-PNG_1752608527285.png',
      date: '2024-12-08',
      author: 'HSE Department',
      authorAr: 'إدارة الصحة والسلامة والبيئة',
      location: 'Riyadh HQ',
      locationAr: 'مقر الرياض',
      tags: ['Safety Excellence', 'Aramco Recognition', 'Tier-1 Status', 'Zero LTA'],
      tagsAr: ['التميز في السلامة', 'اعتراف أرامكو', 'مرتبة الدرجة الأولى', 'صفر حوادث'],
      featured: false,
      readTime: '3 min read',
      readTimeAr: '3 دقائق قراءة'
    },
    {
      id: 'bahrain-investment-hub-2024',
      category: 'partnership',
      categoryIcon: Handshake,
      title: 'Makamin Bahrain Emerges as Gulf Investment Hub with BHD 75M Portfolio',
      titleAr: 'مكامن البحرين تبرز كمحور استثماري خليجي بمحفظة 75 مليون دينار بحريني',
      excerpt: 'Makamin Bahrain establishes itself as the regional energy investment powerhouse, managing a diversified portfolio worth BHD 75 million across marine services, technology ventures, and strategic partnerships.',
      excerptAr: 'مكامن البحرين تؤسس نفسها كقوة الاستثمار الطاقوي الإقليمية، مدير محفظة متنوعة بقيمة 75 مليون دينار بحريني عبر الخدمات البحرية والمشاريع التكنولوجية والشراكات الاستراتيجية.',
      image: '/attached_assets/Bin Tami Holding_1752769769299.jpg',
      date: '2024-11-28',
      author: 'Bahrain Operations',
      authorAr: 'عمليات البحرين',
      location: 'Manama Office',
      locationAr: 'مكتب المنامة',
      tags: ['Regional Expansion', 'Investment Hub', 'Bahrain Operations', 'Gulf Strategy'],
      tagsAr: ['التوسع الإقليمي', 'مركز الاستثمار', 'عمليات البحرين', 'استراتيجية الخليج'],
      featured: false,
      readTime: '5 min read',
      readTimeAr: '5 دقائق قراءة'
    },
    {
      id: 'ai-digital-transformation-2024',
      category: 'technology',
      categoryIcon: Zap,
      title: 'Makamin Unveils AI-Powered Digital Command Center for Real-Time Operations',
      titleAr: 'مكامن تكشف عن مركز قيادة رقمي مدعوم بالذكاء الاصطناعي للعمليات الفورية',
      excerpt: 'Revolutionary AI dashboard integrates live operational data, predictive analytics, and safety monitoring across all Makamin facilities, setting new industry standards for digital transformation.',
      excerptAr: 'لوحة معلومات ثورية بالذكاء الاصطناعي تدمج البيانات التشغيلية المباشرة والتحليلات التنبؤية ومراقبة السلامة عبر جميع منشآت مكامن، مما يضع معايير صناعية جديدة للتحول الرقمي.',
      image: '/attached_assets/Geoscience 4D (1)_1752593343960.jpg',
      date: '2024-11-15',
      author: 'Technology Division',
      authorAr: 'قسم التكنولوجيا',
      location: 'Innovation Center',
      locationAr: 'مركز الابتكار',
      tags: ['AI Technology', 'Digital Transformation', 'Innovation', 'Operational Intelligence'],
      tagsAr: ['تكنولوجيا الذكاء الاصطناعي', 'التحول الرقمي', 'الابتكار', 'الذكاء التشغيلي'],
      featured: false,
      readTime: '6 min read',
      readTimeAr: '6 دقائق قراءة'
    },
    {
      id: 'ceo-alnoob-appointment-2025',
      category: 'leadership',
      categoryIcon: Users,
      title: 'Mr. Adel Ayed ALNOOB Appointed CEO to Lead Makamin Strategic Renaissance',
      titleAr: 'تعيين الأستاذ عادل عايض النوب رئيساً تنفيذياً لقيادة النهضة الاستراتيجية لمكامن',
      excerpt: 'Board of Directors unanimously appoints Mr. Adel Ayed ALNOOB as Chief Executive Officer, tasked with executing comprehensive rescue plan and positioning Makamin for Vision 2030 alignment.',
      excerptAr: 'مجلس الإدارة يعين بالإجماع الأستاذ عادل عايض النوب رئيساً تنفيذياً، مُكلف بتنفيذ خطة الإنقاذ الشاملة وتموضع مكامن مع رؤية 2030.',
      image: '/attached_assets/HamadAlQahtani_1752784084512.png',
      date: '2025-01-15',
      author: 'Board Secretariat',
      authorAr: 'أمانة مجلس الإدارة',
      location: 'Riyadh HQ',
      locationAr: 'مقر الرياض',
      tags: ['Leadership Change', 'Strategic Direction', 'Vision 2030', 'Corporate Governance'],
      tagsAr: ['تغيير القيادة', 'التوجه الاستراتيجي', 'رؤية 2030', 'حوكمة الشركات'],
      featured: false,
      readTime: '7 min read',
      readTimeAr: '7 دقائق قراءة'
    },
    {
      id: 'iso-certifications-renewal-2024',
      category: 'quality',
      categoryIcon: Trophy,
      title: 'Makamin Renews Triple ISO Certifications: 9001, 14001, and 45001 Standards',
      titleAr: 'مكامن تجدد شهادات الآيزو الثلاثية: معايير 9001 و14001 و45001',
      excerpt: 'International certification body confirms Makamin\'s continued excellence in Quality Management, Environmental Management, and Occupational Health & Safety systems across all operations.',
      excerptAr: 'هيئة الاعتماد الدولية تؤكد استمرار تميز مكامن في إدارة الجودة والإدارة البيئية وأنظمة الصحة والسلامة المهنية عبر جميع العمليات.',
      image: '/attached_assets/ISO_9001-2015.svg_1752608437739.png',
      date: '2024-10-30',
      author: 'Quality Assurance',
      authorAr: 'ضمان الجودة',
      location: 'Certification Office',
      locationAr: 'مكتب الاعتماد',
      tags: ['ISO Certification', 'Quality Management', 'Environmental Standards', 'Safety Excellence'],
      tagsAr: ['شهادة الآيزو', 'إدارة الجودة', 'المعايير البيئية', 'تميز السلامة'],
      featured: false,
      readTime: '4 min read',
      readTimeAr: '4 دقائق قراءة',
      dataNewsId: 'news6',
      type: 'corporate'
    }
  ];

  // Public Affairs News Section - أخبار عامة
  const publicNews: typeof corporateNews = [
    // Empty for now - all categories will be left empty as requested
  ];

  // Combined news articles based on active tab
  const newsArticles = activeTab === 'corporate' ? corporateNews : publicNews;

  // Tab definitions
  const tabs = [
    { id: 'corporate', name: 'Corporate News', nameAr: 'أخبار الشركة', icon: Building2 },
    { id: 'public', name: 'Public Affairs', nameAr: 'أخبار عامة', icon: Globe }
  ];

  // Category definitions with icons and colors
  const categories = [
    { id: 'all', name: 'All News', nameAr: 'جميع الأخبار', icon: Newspaper, color: 'bg-slate-500' },
    { id: 'board', name: 'Board', nameAr: 'المجلس', icon: Building2, color: 'bg-emerald-600' },
    { id: 'expansion', name: 'Expansion', nameAr: 'التوسع', icon: Building2, color: 'bg-blue-500' },
    { id: 'recognition', name: 'Recognition', nameAr: 'الاعتراف', icon: Award, color: 'bg-yellow-500' },
    { id: 'partnership', name: 'Partnership', nameAr: 'الشراكة', icon: Handshake, color: 'bg-green-500' },
    { id: 'technology', name: 'Technology', nameAr: 'التكنولوجيا', icon: Zap, color: 'bg-purple-500' },
    { id: 'leadership', name: 'Leadership', nameAr: 'القيادة', icon: Users, color: 'bg-indigo-500' },
    { id: 'quality', name: 'Quality', nameAr: 'الجودة', icon: Trophy, color: 'bg-orange-500' }
  ];

  // Filter articles based on search and category
  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.titleAr.includes(searchTerm) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerptAr.includes(searchTerm);
    
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || article.date.startsWith(selectedYear);
    
    return matchesSearch && matchesCategory && matchesYear;
  });

  // Sort articles with priority featured first
  const sortedArticles = filteredArticles.sort((a, b) => {
    if (a.priority && !b.priority) return -1;
    if (!a.priority && b.priority) return 1;
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const featuredArticle = sortedArticles.find(article => article.featured) || sortedArticles[0];
  const regularArticles = sortedArticles.filter(article => !article.featured);

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === 'ar') {
      return date.toLocaleDateString('ar-SA', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Header */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-32 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
      >
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {language === 'ar' ? 'مركز الأخبار - News Center' : 'News Center - مركز الأخبار'}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              {language === 'ar' ? 
                'نقل مباشر من قلب صناعة الطاقة السعودية' :
                'Live from the Heart of Saudi Energy Industry'
              }
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-2 inline-flex">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-blue-600/80 text-white shadow-lg shadow-blue-500/25'
                          : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">
                        {language === 'ar' ? tab.nameAr : tab.name}
                      </span>
                      {activeTab === tab.id && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                {language === 'ar' ? 'تغطية إعلامية شاملة' : 'Comprehensive Media Coverage'}
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Target className="w-4 h-4" />
                {language === 'ar' ? 'محتوى أصيل ومؤكد' : 'Authentic & Verified Content'}
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Search and Filter Controls */}
      <section className="py-8 bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex items-center gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  placeholder={language === 'ar' ? 'البحث في الأخبار...' : 'Search news articles...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-slate-700/50 border-slate-600 text-white">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder={language === 'ar' ? 'الفئة' : 'Category'} />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      <div className="flex items-center gap-2">
                        <category.icon className="w-4 h-4" />
                        {language === 'ar' ? category.nameAr : category.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-32 bg-slate-700/50 border-slate-600 text-white">
                  <SelectValue placeholder={language === 'ar' ? 'السنة' : 'Year'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === 'ar' ? 'كل السنوات' : 'All Years'}</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-sm text-slate-400">
              {filteredArticles.length} {language === 'ar' ? 'مقال' : 'articles'}
            </div>
          </div>
        </div>
      </section>

      {/* Tab Content Header */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {language === 'ar' ? 
                (activeTab === 'corporate' ? 'أخبار الشركة' : 'أخبار عامة') :
                (activeTab === 'corporate' ? 'Corporate News' : 'Public Affairs')
              }
            </h2>
            {activeTab === 'public' && (
              <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 text-amber-400 mb-3">
                  <Globe className="w-6 h-6" />
                  <span className="font-medium">
                    {language === 'ar' ? 
                      'جميع التصنيفات في هذا القسم فارغة حالياً' :
                      'All categories in this section are currently empty'
                    }
                  </span>
                </div>
                <p className="text-slate-300 text-sm">
                  {language === 'ar' ? 
                    'المشاركات في المعارض • تصريحات المسؤولين • أخبار الصناعة والتقنية • الظهور الإعلامي • أخبار الاقتصاد والطاقة' :
                    'Exhibition Participation • Official Statements • Industry & Technology News • Media Appearances • Economic & Energy News'
                  }
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Award className="w-6 h-6 text-yellow-500" />
                {language === 'ar' ? 'الخبر المميز' : 'Featured Story'}
              </h2>
              
              <Card 
                className="bg-gradient-to-r from-slate-800 to-slate-900 border-slate-700 overflow-hidden shadow-2xl"
                data-news-id={featuredArticle.dataNewsId || 'news0'}
              >
                <div className="grid lg:grid-cols-3 gap-0">
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-4 mb-6">
                      {featuredArticle.priority && (
                        <div className="flex items-center gap-2">
                          <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 animate-pulse border-2 border-yellow-400 shadow-lg">
                            📌 {language === 'ar' ? 'مميز' : 'FEATURED'}
                          </Badge>
                          <Badge className="bg-emerald-700 text-white px-3 py-1">
                            {language === 'ar' ? 'إشراف قانوني' : 'Legal Oversight'}
                          </Badge>
                          <Badge className="bg-teal-700 text-white px-3 py-1">
                            {language === 'ar' ? 'وزارة التجارة' : 'Ministry of Commerce'}
                          </Badge>
                        </div>
                      )}
                      <Badge className={`${categories.find(c => c.id === featuredArticle.category)?.color} text-white px-3 py-1`}>
                        {(() => {
                          const IconComponent = featuredArticle.categoryIcon;
                          return <IconComponent className="w-4 h-4 mr-2" />;
                        })()}
                        {language === 'ar' ? 
                          categories.find(c => c.id === featuredArticle.category)?.nameAr :
                          categories.find(c => c.id === featuredArticle.category)?.name
                        }
                      </Badge>
                      <span className="text-slate-400 text-sm flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(featuredArticle.date)}
                      </span>
                      <span className="text-slate-500">•</span>
                      <div className="relative group">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 animate-pulse-indicator shadow-lg shadow-red-500/50 cursor-pointer"></div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                          الخبر حي – قيد التحديث
                        </div>
                      </div>
                    </div>
                    
                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                      {language === 'ar' ? featuredArticle.titleAr : featuredArticle.title}
                    </h1>
                    
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                      {language === 'ar' ? featuredArticle.excerptAr : featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {language === 'ar' ? featuredArticle.authorAr : featuredArticle.author}
                        </div>
                        <span>•</span>
                        <div>
                          {language === 'ar' ? featuredArticle.locationAr : featuredArticle.location}
                        </div>
                      </div>
                      
                      <Link href={`/news/${featuredArticle.id}`}>
                        <Button className="bg-[#c5a66e] hover:bg-[#b8956b] text-white">
                          {language === 'ar' ? 'قراءة المقال كاملاً' : 'Read Full Article'}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="relative bg-slate-700 p-8 border-l-4 border-emerald-500">
                    {featuredArticle.image && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-white/10 backdrop-blur rounded-lg p-3 border border-emerald-400/30">
                          <img 
                            src={featuredArticle.image} 
                            alt="شعار شركة مكامن السعودية القابضة" 
                            className="w-24 h-24 object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              // Try fallback logo first
                              if (!target.src.includes('logo mkamin_1752524503536.png')) {
                                target.src = '/attached_assets/logo mkamin_1752524503536.png';
                              } else {
                                // If fallback also fails, hide the image
                                target.style.display = 'none';
                                target.parentElement?.classList.add('hidden');
                              }
                            }}
                          />
                          <div className="text-center mt-2 text-xs text-emerald-300">
                            {language === 'ar' ? 'بإشراف وزارة التجارة' : 'Ministry Supervised'}
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-teal-600/20" />
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                        {language === 'ar' ? 'حدث سيادي' : 'SOVEREIGN EVENT'}
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building2 className="w-24 h-24 text-emerald-400/30" />
                    </div>
                    {(featuredArticle as any).galleryImages && (
                      <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                        {(featuredArticle as any).galleryImages.slice(0, 4).map((img: string, index: number) => (
                          <div key={index} className="w-14 h-14 rounded-lg overflow-hidden border-2 border-emerald-400/50 hover:border-emerald-400 transition-colors">
                            <img 
                              src={img} 
                              alt={`General Assembly Session ${index + 1}`} 
                              className="w-full h-full object-cover hover:scale-110 transition-transform"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement?.style.setProperty('display', 'none');
                              }}
                            />
                          </div>
                        ))}
                        {(featuredArticle as any).galleryImages.length > 4 && (
                          <div className="w-14 h-14 rounded-lg bg-emerald-600/80 flex items-center justify-center text-white text-sm font-bold">
                            +{(featuredArticle as any).galleryImages.length - 4}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      {activeTab === 'corporate' && (
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 news-center-content">
            {regularArticles.length > 0 && (
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Newspaper className="w-6 h-6 text-blue-500" />
                {language === 'ar' ? 'الأخبار الإضافية' : 'Additional News'}
              </h2>
            )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-news-container>
            {regularArticles.map((article, index) => (
              <motion.div
                key={article.id}
                data-news-item={index}
                className="news-card"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/80 transition-all duration-300 group overflow-hidden"
                  data-news-id={article.dataNewsId || `news${index + 1}`}
                >
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={language === 'ar' ? article.titleAr : article.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const container = target.parentElement;
                          if (container) {
                            container.innerHTML = `
                              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"></div>
                              <div class="absolute inset-0 flex items-center justify-center">
                                <div class="w-16 h-16 text-blue-400/20 flex items-center justify-center">
                                  <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                                  </svg>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
                    </div>
                    
                    <Badge className={`absolute top-4 left-4 ${categories.find(c => c.id === article.category)?.color} text-white`}>
                      {(() => {
                        const IconComponent = article.categoryIcon;
                        return <IconComponent className="w-3 h-3 mr-1" />;
                      })()}
                      {language === 'ar' ? 
                        categories.find(c => c.id === article.category)?.nameAr :
                        categories.find(c => c.id === article.category)?.name
                      }
                    </Badge>
                    
                    <div className="absolute top-4 right-4 text-xs text-white bg-black/50 px-2 py-1 rounded date" data-date>
                      {formatDate(article.date)}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#c5a66e] transition-colors line-clamp-2" data-title>
                      {language === 'ar' ? article.titleAr : article.title}
                    </h3>
                    
                    <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                      {language === 'ar' ? article.excerptAr : article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-3 h-3" />
                        {language === 'ar' ? article.authorAr : article.author}
                      </div>
                      <div className="relative group">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 animate-pulse-indicator shadow-lg shadow-green-500/50 cursor-pointer"></div>
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                          الخبر حي – قيد التحديث
                        </div>
                      </div>
                    </div>
                    
                    <Link href={`/news/${article.id}`}>
                      <Button variant="outline" className="w-full border-slate-600 text-slate-300 hover:bg-[#c5a66e] hover:text-white">
                        {language === 'ar' ? 'اقرأ المزيد' : 'Read More'}
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-400 mb-2">
                {language === 'ar' ? 'لم يتم العثور على نتائج' : 'No Results Found'}
              </h3>
              <p className="text-slate-500">
                {language === 'ar' ? 
                  'جرب تعديل معايير البحث أو الفلتر' :
                  'Try adjusting your search criteria or filters'
                }
              </p>
            </div>
          )}
          </div>
        </section>
      )}
    </div>
  );
}