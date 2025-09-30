import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, Star, TrendingUp, Globe, Award } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
// Using direct path from public folder
const makaminNewsRoomPath = '/images/newsroom-bg.png';
import aerodyneSigningPath from '@assets/aerodyne-agreement_1752881106036.webp';
import offshoreOperationsPath from '@assets/اوف شور  مكامن  الماليزي والطيرات _1752880727945.jpg';
import drillingOperationsPath from '@assets/IMG-20250710-WA0011_1752529906170.jpg';

export default function News() {
  const { t, language } = useLanguageContext();

  const featuredArticle = {
    title: "Aerodyne-MOS Strategic Partnership Signing Ceremony",
    titleAr: "حفل توقيع الشراكة الاستراتيجية بين إيرودين - موس",
    content: "Historic signing ceremony marks the beginning of revolutionary offshore operations partnership between Aerodyne and Makamin Offshore Saudi (MOS), establishing new standards for maritime excellence in the Arabian Gulf region.",
    contentAr: "حفل توقيع تاريخي يمثل بداية شراكة ثورية في العمليات البحرية بين إيرودين ومكامن أوف شور السعودية (موس)، وإرساء معايير جديدة للتميز البحري في منطقة الخليج العربي.",
    date: "January 15, 2025",
    dateAr: "15 يناير 2025",
    category: "Strategic Partnership",
    categoryAr: "شراكة استراتيجية",
    image: aerodyneSigningPath,
    featured: true,
    tags: ["Partnership", "Offshore", "Maritime Excellence"],
    tagsAr: ["شراكة", "بحري", "التميز البحري"]
  };

  const recentNews = [
    {
      title: "Malaysian-Saudi Offshore Operations Expansion",
      titleAr: "توسع العمليات البحرية السعودية الماليزية",
      content: "Strategic expansion into Southeast Asian markets with advanced fleet capabilities and cutting-edge maritime technology integration.",
      contentAr: "توسع استراتيجي في أسواق جنوب شرق آسيا مع قدرات أسطول متقدمة وتكامل تكنولوجيا بحرية متطورة.",
      date: "January 12, 2025",
      dateAr: "12 يناير 2025",
      image: offshoreOperationsPath,
      category: "Expansion",
      categoryAr: "توسع",
      icon: Globe
    },
    {
      title: "Advanced Drilling Operations Achievement",
      titleAr: "إنجاز عمليات الحفر المتقدمة",
      content: "Successful completion of complex drilling operations using state-of-the-art equipment and innovative engineering solutions.",
      contentAr: "إنجاز ناجح لعمليات الحفر المعقدة باستخدام معدات حديثة وحلول هندسية مبتكرة.",
      date: "January 8, 2025",
      dateAr: "8 يناير 2025",
      image: drillingOperationsPath,
      category: "Operations",
      categoryAr: "عمليات",
      icon: TrendingUp
    }
  ];

  const additionalNews = [
    {
      title: "Successful Extraordinary General Assembly with Major Shareholders",
      titleAr: "نجاح الجمعية العمومية غير العادية لشركة مكامن بحضور كبار المساهمين",
      content: "Makamin successfully held its Extraordinary General Assembly with attendance from major shareholders including Al-Durra Petroleum Services, Bait Al-Taqa, Bin Tami, and Ajlan & Ajlan Companies, along with other shareholders.",
      contentAr: "عقدت شركة مكامن جمعيتها العمومية غير العادية اليوم بنجاح، بحضور كبار المساهمين، من ضمنهم: شركة الدرة للخدمات البترولية، شركة بيت الطاقة، شركة بن طامي، وشركة عجلان العجلان، إضافة إلى عدد من المساهمين.",
      date: "September 30, 2025",
      dateAr: "30 سبتمبر 2025",
      category: "Corporate Governance",
      categoryAr: "الحوكمة المؤسسية",
      icon: Star,
      priority: "urgent",
      link: "/news/general-assembly-success-september-2025"
    },
    {
      title: "Zero LTA Safety Excellence Achievement",
      titleAr: "إنجاز التميز في السلامة بدون حوادث",
      content: "Makamin celebrates 1,980 consecutive days without Lost Time Accidents, setting new industry standards for operational safety and workforce protection across all divisions.",
      contentAr: "مكامن تحتفل بـ 1,980 يوم متتالي بدون حوادث فقدان وقت عمل، وترسي معايير صناعية جديدة للسلامة التشغيلية وحماية القوى العاملة عبر جميع الأقسام.",
      date: "January 5, 2025",
      dateAr: "5 يناير 2025",
      category: "Safety Excellence",
      categoryAr: "تميز السلامة",
      icon: Award,
      priority: "high"
    },
    {
      title: "Corporate Governance Transformation Initiative",
      titleAr: "مبادرة تحول الحوكمة المؤسسية",
      content: "Comprehensive governance reforms implemented under Ministry of Commerce supervision, establishing new transparency standards and stakeholder engagement protocols.",
      contentAr: "تطبيق إصلاحات حوكمة شاملة تحت إشراف وزارة التجارة، وإرساء معايير شفافية جديدة وبروتوكولات إشراك أصحاب المصلحة.",
      date: "January 1, 2025",
      dateAr: "1 يناير 2025",
      category: "Corporate Governance",
      categoryAr: "الحوكمة المؤسسية",
      icon: Star,
      priority: "medium"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Cinematic News Control Room Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-24 overflow-hidden">
        {/* Advanced News Room Background */}
        <div className="absolute inset-0">
          <img 
            src={makaminNewsRoomPath} 
            alt="Makamin News Control Center" 
            className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-5000 ease-out"
          />
          {/* Cinematic Technical Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-800/80 backdrop-blur-[1px]"></div>
          
          {/* Advanced Digital Particles */}
          <div className="absolute inset-0">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0.3, 0.7, 0.3], 
                  scale: [0.5, 1.2, 0.5],
                  x: [0, Math.random() * 20 - 10, 0],
                  y: [0, Math.random() * 20 - 10, 0]
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
                className="absolute w-1 h-1 bg-cyan-400/60 rounded-full shadow-lg shadow-cyan-400/30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
          
          {/* News Stream Light Effects */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            <div className="absolute top-2/6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-3/6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent animate-pulse" style={{ animationDelay: '4s' }}></div>
            <div className="absolute top-4/6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent animate-pulse" style={{ animationDelay: '6s' }}></div>
            <div className="absolute top-5/6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse" style={{ animationDelay: '8s' }}></div>
          </div>
          
          {/* Technical Grid Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 text-base font-bold backdrop-blur-md border border-cyan-400/50 shadow-lg shadow-cyan-500/25">
                {language === 'ar' ? '🎯 مركز التحكم الإعلامي المتطور' : '🎯 Advanced Media Control Center'}
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent drop-shadow-2xl"
            >
              {language === 'ar' ? 'مركز أخبار مكامن' : 'Makamin News Center'}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-cyan-100 mb-8 max-w-4xl mx-auto font-semibold leading-relaxed drop-shadow-lg"
            >
              {language === 'ar' ? 
                'منصة إعلامية متطورة لآخر الأخبار والتطورات في شركة مكامن السعودية القابضة وقطاع الطاقة' :
                'Advanced media platform for the latest news and developments at Saudi Makamin Holding Company and the energy sector'
              }
            </motion.p>
            
            {/* Advanced Control Center Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16"
            >
              <div className="bg-gradient-to-br from-white/20 to-cyan-100/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-300/30 hover:bg-white/25 hover:scale-110 transition-all duration-700 shadow-2xl shadow-cyan-500/20">
                <div className="flex items-center justify-center mb-4">
                  <Star className="w-10 h-10 text-cyan-300 drop-shadow-lg" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">📺 LIVE</div>
                <p className="text-cyan-100 font-semibold text-sm">{language === 'ar' ? 'بث مباشر' : 'Live Coverage'}</p>
              </div>
              
              <div className="bg-gradient-to-br from-white/20 to-blue-100/10 backdrop-blur-md rounded-2xl p-6 border border-blue-300/30 hover:bg-white/25 hover:scale-110 transition-all duration-700 shadow-2xl shadow-blue-500/20">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-10 h-10 text-blue-300 drop-shadow-lg" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">1,980</div>
                <p className="text-blue-100 font-semibold text-sm">{language === 'ar' ? 'أيام أمان' : 'Safety Days'}</p>
              </div>
              
              <div className="bg-gradient-to-br from-white/20 to-green-100/10 backdrop-blur-md rounded-2xl p-6 border border-green-300/30 hover:bg-white/25 hover:scale-110 transition-all duration-700 shadow-2xl shadow-green-500/20">
                <div className="flex items-center justify-center mb-4">
                  <Globe className="w-10 h-10 text-green-300 drop-shadow-lg" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">24/7</div>
                <p className="text-green-100 font-semibold text-sm">{language === 'ar' ? 'مراقبة عالمية' : 'Global Monitor'}</p>
              </div>
              
              <div className="bg-gradient-to-br from-white/20 to-amber-100/10 backdrop-blur-md rounded-2xl p-6 border border-amber-300/30 hover:bg-white/25 hover:scale-110 transition-all duration-700 shadow-2xl shadow-amber-500/20">
                <div className="flex items-center justify-center mb-4">
                  <Award className="w-10 h-10 text-amber-300 drop-shadow-lg" />
                </div>
                <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">5+</div>
                <p className="text-amber-100 font-semibold text-sm">{language === 'ar' ? 'تقارير حصرية' : 'Exclusive Reports'}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Premium News Articles Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
              {language === 'ar' ? 'الأخبار المميزة' : 'Featured News'}
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              {language === 'ar' ? 
                'أحدث التطورات والإنجازات في مسيرة مكامن المؤسسية' :
                'Latest developments and achievements in Makamin\'s corporate journey'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Featured Article - Enhanced */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="shadow-2xl overflow-hidden border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl hover:scale-[1.02] transition-all duration-500">
                <div className="relative">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title} 
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 font-semibold shadow-lg">
                      ⭐ {language === 'ar' ? 'خبر مميز' : 'FEATURED'}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex flex-wrap gap-2">
                      {(language === 'ar' ? featuredArticle.tagsAr : featuredArticle.tags).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                    <span className="font-medium">{language === 'ar' ? featuredArticle.dateAr : featuredArticle.date}</span>
                    <span className="mx-3">•</span>
                    <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50">
                      {language === 'ar' ? featuredArticle.categoryAr : featuredArticle.category}
                    </Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-800 mb-4 leading-tight">
                    {language === 'ar' ? featuredArticle.titleAr : featuredArticle.title}
                  </h2>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    {language === 'ar' ? featuredArticle.contentAr : featuredArticle.content}
                  </p>
                  <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center">
                    {language === 'ar' ? 'قراءة المقال كاملاً' : 'Read Full Article'}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent News - Enhanced */}
            <div className="space-y-6">
              {recentNews.map((article, index) => {
                const IconComponent = article.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card className="shadow-xl overflow-hidden border-0 bg-white/95 backdrop-blur-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
                      <div className="relative">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute top-3 right-3">
                          <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                            <IconComponent className="w-5 h-5 text-blue-600" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-3">
                          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                            {language === 'ar' ? article.categoryAr : article.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center text-xs text-slate-500 mb-3">
                          <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                          <span className="font-medium">{language === 'ar' ? article.dateAr : article.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight group-hover:text-blue-700 transition-colors">
                          {language === 'ar' ? article.titleAr : article.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-4">
                          {language === 'ar' ? article.contentAr : article.content}
                        </p>
                        <button className="text-blue-600 font-semibold text-sm hover:text-blue-800 inline-flex items-center group-hover:translate-x-1 transition-all">
                          {language === 'ar' ? 'قراءة المزيد' : 'Read More'}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Additional Corporate News */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent mb-4">
                {language === 'ar' ? 'أخبار مؤسسية إضافية' : 'Additional Corporate News'}
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {additionalNews.map((article, index) => {
                const IconComponent = article.icon;
                const priorityColor = article.priority === 'high' ? 'from-red-500 to-orange-500' : 
                                     article.priority === 'medium' ? 'from-yellow-500 to-amber-500' : 
                                     'from-blue-500 to-cyan-500';
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                  >
                    <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl hover:scale-105 transition-all duration-500 group overflow-hidden">
                      {/* Priority Indicator */}
                      <div className={`h-1 bg-gradient-to-r ${priorityColor}`}></div>
                      
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center space-x-3">
                            <div className={`p-3 rounded-full bg-gradient-to-r ${priorityColor} shadow-lg`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex items-center text-sm text-slate-500">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span className="font-medium">{language === 'ar' ? article.dateAr : article.date}</span>
                            </div>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={`border-2 font-semibold ${
                              article.priority === 'high' ? 'border-red-300 text-red-700 bg-red-50' :
                              article.priority === 'medium' ? 'border-yellow-300 text-yellow-700 bg-yellow-50' :
                              'border-blue-300 text-blue-700 bg-blue-50'
                            }`}
                          >
                            {language === 'ar' ? article.categoryAr : article.category}
                          </Badge>
                        </div>

                        <h3 className="text-2xl font-bold text-slate-800 mb-4 leading-tight group-hover:text-blue-700 transition-colors">
                          {language === 'ar' ? article.titleAr : article.title}
                        </h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                          {language === 'ar' ? article.contentAr : article.content}
                        </p>
                        
                        <button className={`bg-gradient-to-r ${priorityColor} text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center group`}>
                          {language === 'ar' ? 'قراءة التفاصيل' : 'Read Details'}
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
