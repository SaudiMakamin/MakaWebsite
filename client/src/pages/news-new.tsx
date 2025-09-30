import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, ArrowRight, Star, TrendingUp, Globe, Award, Play, Eye } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import HeroLogo from '@/components/hero-logo';

export default function NewsCenter() {
  const { language } = useLanguageContext();

  const featuredNews = {
    title: "Successful Extraordinary General Assembly with Major Shareholders",
    titleAr: "نجاح الجمعية العمومية غير العادية لشركة مكامن بحضور كبار المساهمين",
    content: "Makamin successfully held its Extraordinary General Assembly with attendance from major shareholders including Al-Durra Petroleum Services, Bait Al-Taqa, Bin Tami, and Ajlan & Ajlan Companies. The assembly took place from 12:00 PM to 4:30 PM with distinguished attendance from within the Kingdom and abroad.",
    contentAr: "عقدت شركة مكامن جمعيتها العمومية غير العادية اليوم بنجاح، بحضور كبار المساهمين، من ضمنهم: شركة الدرة للخدمات البترولية، شركة بيت الطاقة، شركة بن طامي، وشركة عجلان العجلان، إضافة إلى عدد من المساهمين. الجمعية التي انطلقت عند الساعة 12 ظهرًا واستمرت حتى 4:30 عصرًا، شهدت حضورًا مميزًا من داخل المملكة وخارجها.",
    image: "/attached_assets/لقطة الشاشة 2025-07-21 172931_1754473884923.jpg",
    category: "Corporate Governance Achievement",
    categoryAr: "إنجاز الحوكمة المؤسسية",
    date: "September 30, 2025",
    dateAr: "30 سبتمبر 2025",
    priority: "urgent",
    readTime: "5 min read",
    readTimeAr: "5 دقائق قراءة"
  };

  const liveUpdates = [
    {
      title: "Zero LTA Achievement: 1,980 Days Milestone",
      titleAr: "إنجاز السلامة: 1,980 يوم بدون حوادث",
      time: "2 hours ago",
      timeAr: "منذ ساعتين",
      status: "live"
    },
    {
      title: "Malaysian Operations Expansion Update",
      titleAr: "تحديث توسع العمليات الماليزية", 
      time: "4 hours ago",
      timeAr: "منذ 4 ساعات",
      status: "recent"
    },
    {
      title: "Corporate Governance Reform Progress",
      titleAr: "تقدم إصلاح الحوكمة المؤسسية",
      time: "6 hours ago", 
      timeAr: "منذ 6 ساعات",
      status: "update"
    }
  ];

  const newsCategories = [
    { name: "Corporate News", nameAr: "أخبار مؤسسية", count: 12, icon: Star },
    { name: "Operations", nameAr: "عمليات", count: 8, icon: TrendingUp },
    { name: "Safety", nameAr: "سلامة", count: 5, icon: Award },
    { name: "Partnerships", nameAr: "شراكات", count: 7, icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      {/* Hero Section with Control Room Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* News Control Room Background */}
        <div className="absolute inset-0">
          <img
            src="/images/news-control-room.png"
            alt="Makamin News Control Center"
            className="w-full h-full object-cover scale-110"
          />
          {/* Dark Technical Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-slate-900/60 to-black/80"></div>
          
          {/* Dynamic Data Streams */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50]
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>

          {/* News Feed Lines */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                style={{
                  top: `${(i + 1) * 12.5}%`,
                  width: '100%'
                }}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <HeroLogo size="lg" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Badge className="mb-8 bg-red-600/90 text-white px-6 py-3 text-lg font-bold backdrop-blur border border-red-500/50 animate-pulse">
              🔴 {language === 'ar' ? 'مركز الأخبار المباشر' : 'LIVE NEWS CENTER'}
            </Badge>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent drop-shadow-2xl">
              {language === 'ar' ? 'مركز أخبار مكامن' : 'Makamin News Hub'}
            </h1>

            <p className="text-2xl text-cyan-100 mb-12 font-medium max-w-4xl mx-auto leading-relaxed">
              {language === 'ar' 
                ? 'مركز التحكم الإعلامي المتطور للأخبار العاجلة والتطورات في شركة مكامن السعودية القابضة'
                : 'Advanced media control center for breaking news and developments at Saudi Makamin Holding Company'
              }
            </p>

            {/* Live Statistics Dashboard */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-red-500/20 to-red-600/30 backdrop-blur-md rounded-2xl p-6 border border-red-400/30"
              >
                <Play className="w-8 h-8 text-red-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">LIVE</div>
                <p className="text-red-200 text-sm">{language === 'ar' ? 'بث مباشر' : 'Broadcasting'}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-md rounded-2xl p-6 border border-green-400/30"
              >
                <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">1,980</div>
                <p className="text-green-200 text-sm">{language === 'ar' ? 'أيام أمان' : 'Safety Days'}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-md rounded-2xl p-6 border border-blue-400/30"
              >
                <Eye className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <p className="text-blue-200 text-sm">{language === 'ar' ? 'مراقبة' : 'Monitoring'}</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-500/20 to-purple-600/30 backdrop-blur-md rounded-2xl p-6 border border-purple-400/30"
              >
                <Star className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">12+</div>
                <p className="text-purple-200 text-sm">{language === 'ar' ? 'تقارير حصرية' : 'Exclusive Reports'}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Breaking News Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-red-600 text-white px-4 py-2 animate-pulse">
              {language === 'ar' ? '⚡ عاجل' : '⚡ BREAKING'}
            </Badge>
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === 'ar' ? 'الأخبار العاجلة' : 'Breaking News'}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-slate-800/90 to-gray-800/90 border-red-500/30 shadow-2xl backdrop-blur overflow-hidden">
              <div className="relative">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-emerald-600 text-white px-4 py-2 font-bold animate-pulse">
                    🆕 {language === 'ar' ? 'جديد' : 'NEW'}
                  </Badge>
                  <Badge className="bg-blue-600 text-white px-4 py-2 font-bold animate-bounce">
                    📅 {language === 'ar' ? 'محدث' : 'UPDATED'}
                  </Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <Badge variant="outline" className="text-white border-white/50 mb-3">
                    {language === 'ar' ? featuredNews.categoryAr : featuredNews.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{language === 'ar' ? featuredNews.dateAr : featuredNews.date}</span>
                  <span className="mx-2">•</span>
                  <div className="relative group">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 animate-pulse-indicator shadow-lg shadow-red-500/50 cursor-pointer"></div>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                      الخبر حي – قيد التحديث
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                  {language === 'ar' ? featuredNews.titleAr : featuredNews.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {language === 'ar' ? featuredNews.contentAr : featuredNews.content}
                </p>

                <a href="/news/general-assembly-success-september-2025" className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center group">
                  {language === 'ar' ? 'قراءة التفاصيل الكاملة' : 'Read Full Details'}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Live Updates Ticker */}
      <section className="py-12 bg-black/50 border-y border-cyan-500/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Badge className="bg-cyan-600 text-white px-4 py-2 mr-4">
              {language === 'ar' ? '📡 تحديثات مباشرة' : '📡 LIVE UPDATES'}
            </Badge>
          </div>

          <div className="space-y-4">
            {liveUpdates.map((update, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center bg-slate-800/50 rounded-xl p-4 backdrop-blur border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
              >
                <div className="relative group mr-4">
                  <div className={`w-3 h-3 rounded-full shadow-lg cursor-pointer ${
                    update.status === 'live' ? 'bg-gradient-to-r from-red-500 to-red-600 animate-pulse-indicator shadow-red-500/50' :
                    update.status === 'recent' ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 animate-pulse-indicator shadow-yellow-500/50' : 
                    'bg-gradient-to-r from-green-500 to-green-600 animate-pulse-indicator shadow-green-500/50'
                  }`}></div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                    الخبر حي – قيد التحديث
                  </div>
                </div>
                
                <div className="flex-1">
                  <h4 className="text-white font-semibold">
                    {language === 'ar' ? update.titleAr : update.title}
                  </h4>
                </div>
                
                <div className="text-gray-400 text-sm">
                  {language === 'ar' ? update.timeAr : update.time}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {language === 'ar' ? 'أقسام الأخبار' : 'News Categories'}
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'تصفح أحدث الأخبار والتطورات حسب التصنيف'
                : 'Browse the latest news and developments by category'
              }
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-slate-800 to-gray-800 rounded-2xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <IconComponent className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <Badge className="bg-cyan-600/20 text-cyan-400 border-cyan-500/30">
                      {category.count}
                    </Badge>
                  </div>
                  
                  <h3 className="text-white font-bold text-lg mb-2">
                    {language === 'ar' ? category.nameAr : category.name}
                  </h3>
                  
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* الشعار موجود في Header - بدون تكرار */}
    </div>
  );
}