import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguageContext } from '../components/language-provider';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ArrowRight, Calendar, ExternalLink, Share2, Filter, Search, Globe, Building2, Zap, ChevronRight } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import SemanticMetadata from '../components/semantic-metadata';
import HeroLogo from '@/components/hero-logo';

interface MediaArticle {
  id: string;
  title: string;
  titleAr: string;
  date: string;
  source: string;
  sourceAr: string;
  excerpt: string;
  excerptAr: string;
  tags: string[];
  tagsAr: string[];
  category: 'founding' | 'acquisition' | 'partnership' | 'recognition' | 'expansion' | 'technology';
  year: string;
  link?: string;
  impact: 'high' | 'medium' | 'strategic';
}

const mediaArticles: MediaArticle[] = [
  {
    id: '0',
    title: 'Aerodyne Group announces collaboration with leading Middle East offshore service provider',
    titleAr: 'مجموعة Aerodyne تعلن التعاون مع مزود الخدمات البحرية الرائد في الشرق الأوسط',
    date: '2017-08-28',
    source: 'sUAS News',
    sourceAr: 'أخبار الطائرات المسيرة',
    excerpt: 'A Memorandum of Agreement was signed between Aerodyne Group and Makamin Offshore Saudi (MOS), bringing award-winning innovative UAS Enterprise Solutions to one of the world\'s largest and most dynamic markets.',
    excerptAr: 'تم توقيع مذكرة اتفاق بين مجموعة Aerodyne وشركة مكامن أوف شور السعودية (MOS)، لإدخال حلول الطائرات بدون طيار المبتكرة والحائزة على جوائز إلى واحد من أكبر الأسواق وأكثرها ديناميكية في العالم.',
    tags: ['Strategic Partnership', 'UAS Technology', 'Aerodyne', 'Innovation'],
    tagsAr: ['شراكة استراتيجية', 'تكنولوجيا الطائرات', 'ايرودين', 'الابتكار'],
    category: 'partnership',
    year: '2017',
    impact: 'strategic',
    link: 'https://www.suasnews.com/2017/08/aerodyne-group-announces-collaboration-leading-middle-east-offshore-service-provider/'
  },
  {
    id: '1',
    title: 'Makamin Launches with SAR 2+ Billion Capital',
    titleAr: 'شركة "مكامن" تبدأ نشاطها برأس مال يتجاوز 2 مليار ريال',
    date: '2007-12-06',
    source: 'Saudi Energy Press',
    sourceAr: 'الصحافة الطاقة السعودية',
    excerpt: 'Saudi Makamin begins operations in 2008 with SAR 2.1 billion capital as closed joint-stock company headquartered in Eastern Province, with future IPO plans.',
    excerptAr: 'أعلنت مكامن السعودية لخدمات النفط والغاز عن بدء نشاطها في العام 2008 برأس مال 2.1 مليار ريال كشركة مساهمة مغلقة مقرها الشرقية، مع خطة مستقبلية لطرح أسهمها للاكتتاب العام.',
    tags: ['Founding', 'Capital', 'IPO', 'Eastern Province'],
    tagsAr: ['التأسيس', 'رأس المال', 'الطرح العام', 'المنطقة الشرقية'],
    category: 'founding',
    year: '2007',
    impact: 'high'
  },
  {
    id: '2',
    title: 'Makamin Plans SAR 500M Acquisitions & IPO Strategy',
    titleAr: 'مكامن السعودية تدرس استحواذات بـ500 مليون ريال وخطط للطرح',
    date: '2009-05-01',
    source: 'Middle East Energy News',
    sourceAr: 'أخبار الطاقة الشرق الأوسط',
    excerpt: 'Company reveals plans to invest SAR 500 million in acquiring energy companies with advanced technologies and patents, alongside strategic global partnerships.',
    excerptAr: 'كشفت شركة مكامن السعودية عن عزمها استثمار 500 مليون ريال للاستحواذ على شركات في قطاع الطاقة تمتلك تقنيات متقدمة وبراءات اختراع، إلى جانب الدخول في شراكات إستراتيجية مع شركات عالمية.',
    tags: ['Acquisitions', 'Investment', 'Technology', 'Global Expansion'],
    tagsAr: ['الاستحواذات', 'الاستثمار', 'التكنولوجيا', 'التوسع العالمي'],
    category: 'acquisition',
    year: '2009',
    impact: 'strategic'
  },
  {
    id: '3',
    title: 'Makamin Acquires 5% Stake in Swiss Exploration Firm',
    titleAr: 'مكامن السعودية تستحوذ على 5% من شركة سويسرية للتنقيب',
    date: '2009-03-08',
    source: 'International Oil & Gas Journal',
    sourceAr: 'مجلة النفط والغاز الدولية',
    excerpt: 'Saudi Makamin acquires 5% stake in Swiss Spectra Seis, becoming third-largest investor after StatoilHydro and Warburg Pincus, establishing Zurich regional office.',
    excerptAr: 'أعلنت مكامن السعودية الاستحواذ على حصة 5% من أسهم شركة سبكترا سايز السويسرية المتخصصة في الأبحاث والتطوير وخدمات التنقيب، وذلك عبر اتفاقية شراكة وُقعت في جنيف.',
    tags: ['Swiss Partnership', 'Spectra Seis', 'International Investment', 'Technology Transfer'],
    tagsAr: ['الشراكة السويسرية', 'سبكترا سايز', 'الاستثمار الدولي', 'نقل التكنولوجيا'],
    category: 'acquisition',
    year: '2009',
    impact: 'strategic'
  },
  {
    id: '4',
    title: 'Makamin Honored by Dhahran Geoscience Society',
    titleAr: 'تكريم مكامن السعودية من جمعية الظهران لعلوم الأرض',
    date: '2009-06-01',
    source: 'Saudi Professional Networks',
    sourceAr: 'الشبكات المهنية السعودية',
    excerpt: 'Makamin Saudi receives recognition shield from Dhahran Geoscience Society for sponsoring joint event with 200 petroleum specialists in attendance.',
    excerptAr: 'في إطار مسؤوليتها الاجتماعية ودعمها للمجتمع المهني، رعت شركة مكامن السعودية لقاءً مشتركًا لجمعية الظهران لعلوم الأرض وجمعية مهندسي البترول في الخبر بحضور 200 متخصص.',
    tags: ['Professional Recognition', 'Community Support', 'Geoscience', 'Petroleum Engineers'],
    tagsAr: ['التقدير المهني', 'دعم المجتمع', 'علوم الأرض', 'مهندسي البترول'],
    category: 'recognition',
    year: '2009',
    impact: 'medium'
  },
  {
    id: '5',
    title: 'Strategic Partnership with Saudi Human Resources Fund (HADAF)',
    titleAr: 'اتفاقية دعم بين مكامن السعودية وصندوق الموارد البشرية (هدف)',
    date: '2013-12-12',
    source: 'Saudi Economic Daily',
    sourceAr: 'اليومية الاقتصادية السعودية',
    excerpt: 'Makamin signs comprehensive support agreement with HADAF for training and employing Saudi workforce in specialized technical positions across drilling, maintenance, and marine operations.',
    excerptAr: 'وقعت شركة مكامن السعودية لخدمات النفط والغاز (وشركاتها التابعة مكامن للخدمات البترولية ومكامن أوفشور البحرية) اتفاقية دعم شامل مع صندوق تنمية الموارد البشرية (هدف).',
    tags: ['Saudization', 'HADAF Partnership', 'Workforce Development', 'Training'],
    tagsAr: ['السعودة', 'شراكة هدف', 'تطوير القوى العاملة', 'التدريب'],
    category: 'partnership',
    year: '2013',
    impact: 'strategic'
  },
  {
    id: '6',
    title: 'Trilateral Partnership for Regional Oil Services',
    titleAr: 'شراكة ثلاثية بين مكامن السعودية وشركاء إقليميين في خدمات النفط',
    date: '2015-04-27',
    source: 'Asian Energy Report',
    sourceAr: 'تقرير الطاقة الآسيوي',
    excerpt: 'Malaysian Carigali Petroleum announces cooperation agreement with Makamin Offshore Saudi and UAE Petro Allied for unified resources in marine platform services across Saudi Arabia, Middle East, and Southeast Asia.',
    excerptAr: 'أعلنت شركة كاريمين للبترول (ماليزيا) أن ذراعها الهندسي وقعت اتفاقية تعاون مع شركة مكامن أوفشور السعودية وشركة بترو ألايد (الإمارات) لتوحيد الموارد في مجالات الربط والتشغيل وخدمات المنصات البحرية.',
    tags: ['Regional Partnership', 'Malaysia Cooperation', 'UAE Alliance', 'Marine Services'],
    tagsAr: ['الشراكة الإقليمية', 'التعاون الماليزي', 'التحالف الإماراتي', 'الخدمات البحرية'],
    category: 'partnership',
    year: '2015',
    impact: 'strategic'
  },
  {
    id: '7',
    title: 'Makamin Enhances Services with Drone Technology',
    titleAr: 'مكامن تعزز خدماتها بتقنيات الطائرات المسيرة',
    date: '2017-08-17',
    source: 'Gulf Technology Review',
    sourceAr: 'مراجعة التكنولوجيا الخليجية',
    excerpt: 'Makamin Offshore Saudi (MOS) signs MoU with Malaysian Aerodyne Group to bring innovative UAS solutions to Saudi and GCC markets, adding advanced aerial survey and inspection services.',
    excerptAr: 'أُعلن عن توقيع مذكرة تفاهم بين شركة مكامن أوفشور السعودية (MOS) ومجموعة Aerodyne الماليزية لجلب حلول الطائرات بدون طيار (UAS) المبتكرة إلى السوق السعودي والخليجي.',
    tags: ['Drone Technology', 'UAS Innovation', 'Aerodyne Partnership', 'Aerial Inspection'],
    tagsAr: ['تقنيات الطائرات المسيرة', 'ابتكار الطائرات بدون طيار', 'شراكة إيرودين', 'التفتيش الجوي'],
    category: 'technology',
    year: '2017',
    impact: 'high'
  },
  {
    id: '8',
    title: 'Global Report Lists Makamin Among Key Marine Support Players',
    titleAr: 'تقرير عالمي يدرج مكامن بين اللاعبين الرئيسيين في سوق الدعم البحري',
    date: '2021-12-14',
    source: 'Fortune Business Insights',
    sourceAr: 'فورتشن بيزنس إنسايتس',
    excerpt: 'Fortune Business Insights report on Saudi OSV market identifies Makamin Offshore Saudi as one of the most important local companies alongside Al Zamil Marine Services and Hadi Al Hamed.',
    excerptAr: 'أورد تقرير لشركة الأبحاث Fortune Business Insights حول سوق سفن الدعم البحري (OSV) في السعودية أن شركة مكامن أوفشور السعودية واحدة من أهم الشركات المحلية في هذا القطاع إلى جانب شركات مثل الزامل للخدمات البحرية وهادي الحامد وغيرها.',
    tags: ['Global Recognition', 'Marine Support', 'Market Leadership', 'OSV Services'],
    tagsAr: ['الاعتراف العالمي', 'الدعم البحري', 'الريادة السوقية', 'خدمات السفن البحرية'],
    category: 'recognition',
    year: '2021',
    impact: 'high'
  },
  {
    id: '9',
    title: 'Makamin Secures Major Aramco Marine Infrastructure Contract',
    titleAr: 'مكامن تحصل على عقد رئيسي مع أرامكو للبنية التحتية البحرية',
    date: '2022-03-15',
    source: 'Saudi Aramco Suppliers Network',
    sourceAr: 'شبكة موردي أرامكو السعودية',
    excerpt: 'Makamin Offshore awarded significant multi-year contract for marine infrastructure support services across Saudi Aramco offshore facilities, reinforcing qualified vendor status.',
    excerptAr: 'حصلت مكامن أوفشور على عقد متعدد السنوات لخدمات دعم البنية التحتية البحرية عبر منشآت أرامكو السعودية البحرية، مما يعزز مكانتها كمورد مؤهل.',
    tags: ['Aramco Contract', 'Marine Infrastructure', 'Qualified Vendor', 'Multi-year Agreement'],
    tagsAr: ['عقد أرامكو', 'البنية التحتية البحرية', 'المورد المؤهل', 'اتفاقية متعددة السنوات'],
    category: 'expansion',
    year: '2022',
    impact: 'strategic'
  },
  {
    id: '10',
    title: 'Makamin Announces Vision 2030 Digital Transformation Initiative',
    titleAr: 'مكامن تعلن مبادرة التحول الرقمي لرؤية 2030',
    date: '2024-01-10',
    source: 'Vision 2030 Progress Report',
    sourceAr: 'تقرير تقدم رؤية 2030',
    excerpt: 'Makamin Saudi launches comprehensive digital transformation program aligned with Vision 2030, integrating AI, IoT, and advanced analytics across all operations to enhance efficiency and sustainability.',
    excerptAr: 'أطلقت مكامن السعودية برنامج التحول الرقمي الشامل المتماشي مع رؤية 2030، ودمج الذكاء الاصطناعي وإنترنت الأشياء والتحليلات المتقدمة عبر جميع العمليات لتعزيز الكفاءة والاستدامة.',
    tags: ['Vision 2030', 'Digital Transformation', 'AI Integration', 'Sustainability'],
    tagsAr: ['رؤية 2030', 'التحول الرقمي', 'دمج الذكاء الاصطناعي', 'الاستدامة'],
    category: 'technology',
    year: '2024',
    impact: 'strategic'
  }
];

export default function MediaCoverage() {
  const { language } = useLanguageContext();
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = mediaArticles.filter(article => {
    const matchesYear = selectedYear === 'all' || article.year === selectedYear;
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.titleAr.includes(searchTerm) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      article.tagsAr.some(tag => tag.includes(searchTerm));
    
    return matchesYear && matchesCategory && matchesSearch;
  });

  const years = ['all', ...Array.from(new Set(mediaArticles.map(article => article.year))).sort().reverse()];
  const categories = ['all', 'founding', 'acquisition', 'partnership', 'recognition', 'expansion', 'technology'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'founding': return Building2;
      case 'acquisition': return ArrowRight;
      case 'partnership': return Globe;
      case 'recognition': return Badge;
      case 'expansion': return ChevronRight;
      case 'technology': return Zap;
      default: return Building2;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-500 text-white';
      case 'strategic': return 'bg-yellow-500 text-black';
      case 'medium': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800">
      <SemanticMetadata page="media-coverage" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-cyan-900/70"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
          </div>
          {/* Animated wave lines */}
          <svg className="absolute bottom-0 w-full h-24 text-blue-600/30" viewBox="0 0 1440 120" fill="currentColor">
            <motion.path 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,69.3C960,85,1056,107,1152,106.7C1248,107,1344,85,1392,74.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <HeroLogo size="lg" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent">
              {language === 'ar' ? 'صدى مكامن في الإعلام' : 'Echoes of Makamin in the Media'}
            </h1>
            <div className="text-2xl md:text-3xl font-semibold mb-4 text-yellow-400">
              {language === 'ar' ? 'مكامن في العناوين... حيث يولد التأثير' : 'Makamin in the Headlines... Where Influence is Born'}
            </div>
            <p className="text-xl md:text-2xl text-white font-bold max-w-5xl mx-auto leading-relaxed mb-4">
              {language === 'ar' ? 
                'مكامن السعودية — قوة بـ 1.2 مليار ريال سعودي تشكل مستقبل الطاقة من خلال الابتكار والشراكات العالمية' :
                <><span className="whitespace-nowrap">Saudi Makamin</span> — A 1.2 Billion SAR Powerhouse Shaping the Future of Energy Through Innovation and Global Partnerships</>
              }
            </p>
            <p className="text-lg md:text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
              {language === 'ar' ? 
                'من العقود العالمية إلى الصفحة الأولى — اكتشف القصص التي شكلت رحلتنا' :
                'From global contracts to the front page — discover the stories that shaped our journey'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-slate-800/50 backdrop-blur-sm border-y border-blue-500/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex items-center gap-2 text-white">
              <Filter className="w-5 h-5" />
              <span className="font-medium">
                {language === 'ar' ? 'تصفية المحتوى:' : 'Filter Content:'}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-4 flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder={language === 'ar' ? 'البحث في الأخبار...' : 'Search articles...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64 bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                />
              </div>
              
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-32 bg-slate-700/50 border-slate-600 text-white">
                  <SelectValue placeholder={language === 'ar' ? 'السنة' : 'Year'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === 'ar' ? 'كل السنوات' : 'All Years'}</SelectItem>
                  {years.slice(1).map(year => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40 bg-slate-700/50 border-slate-600 text-white">
                  <SelectValue placeholder={language === 'ar' ? 'الفئة' : 'Category'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{language === 'ar' ? 'كل الفئات' : 'All Categories'}</SelectItem>
                  <SelectItem value="founding">{language === 'ar' ? 'التأسيس' : 'Founding'}</SelectItem>
                  <SelectItem value="acquisition">{language === 'ar' ? 'الاستحواذات' : 'Acquisitions'}</SelectItem>
                  <SelectItem value="partnership">{language === 'ar' ? 'الشراكات' : 'Partnerships'}</SelectItem>
                  <SelectItem value="recognition">{language === 'ar' ? 'التقدير' : 'Recognition'}</SelectItem>
                  <SelectItem value="expansion">{language === 'ar' ? 'التوسع' : 'Expansion'}</SelectItem>
                  <SelectItem value="technology">{language === 'ar' ? 'التكنولوجيا' : 'Technology'}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="text-blue-300 font-medium">
              {filteredArticles.length} {language === 'ar' ? 'خبر' : 'articles'}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {filteredArticles.map((article, index) => {
              const CategoryIcon = getCategoryIcon(article.category);
              
              return (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full bg-gradient-to-br from-slate-800/80 to-blue-900/60 backdrop-blur-lg border-blue-500/20 hover:border-yellow-400/50 transition-all duration-500 shadow-2xl hover:shadow-yellow-400/20">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-2 rounded-lg">
                            <CategoryIcon className="w-5 h-5 text-white" />
                          </div>
                          <Badge className={`${getImpactColor(article.impact)} text-xs font-bold`}>
                            {article.impact.toUpperCase()}
                          </Badge>
                        </div>
                        <div className="text-xs text-blue-300 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {article.year}
                        </div>
                      </div>
                      
                      <CardTitle className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {language === 'ar' ? article.titleAr : article.title}
                        {article.id === '0' && (
                          <div className="mt-4">
                            <div className="relative">
                              <img 
                                src="/attached_assets/aerodyne-agreement_1752881106036.webp" 
                                alt="Aerodyne Makamin Partnership Signing Ceremony" 
                                className="w-full h-56 object-cover rounded-lg border-4 border-yellow-400 shadow-2xl"
                                onLoad={() => console.log('Image loaded successfully')}
                                onError={(e) => {
                                  console.log('Using fallback image');
                                  const target = e.target as HTMLImageElement;
                                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' font-size='16' fill='%23374151'%3EAerodyne Partnership%3C/text%3E%3C/svg%3E";
                                }}
                              />
                              <div className="absolute top-2 left-2">
                                <Badge className="bg-red-600 text-white font-bold text-xs px-2 py-1 shadow-lg">
                                  {language === 'ar' ? '⭐ مميز' : '⭐ FEATURED'}
                                </Badge>
                              </div>
                            </div>
                            <div className="text-sm text-yellow-300 mt-3 text-center font-medium bg-black/20 rounded p-2">
                              {language === 'ar' ? 
                                '🤝 حفل توقيع مذكرة التفاهم التاريخية - 28 أغسطس 2017' :
                                '🤝 Historic MOU Signing Ceremony - August 28, 2017'
                              }
                            </div>
                          </div>
                        )}
                      </CardTitle>
                      
                      <div className="text-blue-300 text-sm font-medium">
                        {language === 'ar' ? article.sourceAr : article.source}
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <p className="text-gray-300 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {language === 'ar' ? article.excerptAr : article.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {(language === 'ar' ? article.tagsAr : article.tags).slice(0, 3).map((tag, tagIndex) => (
                          <Badge 
                            key={tagIndex} 
                            variant="outline" 
                            className="text-xs border-blue-400 text-blue-300 bg-blue-900/30"
                          >
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold transition-all duration-300"
                          onClick={() => {
                            if (article.link) {
                              window.open(article.link, '_blank');
                            }
                          }}
                        >
                          <ExternalLink className="w-3 h-3 mr-2" />
                          {language === 'ar' ? 'قراءة المقال' : 'Read Article'}
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-blue-400 text-blue-300 hover:bg-blue-900/50"
                        >
                          <Share2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {filteredArticles.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 text-xl mb-4">
                {language === 'ar' ? 'لا توجد أخبار تطابق البحث' : 'No articles match your search'}
              </div>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedYear('all');
                  setSelectedCategory('all');
                }}
                variant="outline"
                className="border-blue-400 text-blue-300 hover:bg-blue-900/50"
              >
                {language === 'ar' ? 'إعادة تعيين الفلاتر' : 'Reset Filters'}
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Media Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'ar' ? 'هل لديك قصة عن مكامن؟' : 'Have a Story About Makamin?'}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {language === 'ar' ? 
                'ندعو الصحفيين ووسائل الإعلام للتواصل مع فريق الإعلام لدينا لمشاركة القصص والتقارير' :
                'We invite journalists and media professionals to connect with our media team for stories and reports'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black dark:text-black font-bold px-8 py-4 shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-yellow-400 hover:border-yellow-500"
                asChild
              >
                <a href="/contact" className="flex items-center text-black dark:text-black no-underline">
                  {language === 'ar' ? 'تواصل مع الإعلام' : 'Contact Media Team'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 dark:hover:text-blue-600 font-bold px-8 py-4 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="#projects" className="flex items-center text-white hover:text-blue-600 dark:hover:text-blue-600 no-underline">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'استكشف مشاريعنا' : 'Discover Our Projects'}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* الشعار موجود في Header - بدون تكرار */}
    </div>
  );
}