import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguageContext } from '@/components/language-provider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Globe,
  Newspaper,
  Plus,
  Calendar,
  Clock,
  Search,
  Filter
} from 'lucide-react';

export default function NewsClean() {
  const { language } = useLanguageContext();
  const [selectedSection, setSelectedSection] = useState('corporate');

  const sections = [
    {
      id: 'corporate',
      nameAr: 'أخبار الشركة',
      nameEn: 'Corporate News',
      description: 'أخبار وتطورات شركة مكامن السعودية القابضة',
      descriptionEn: 'Saudi Makamin Holding Company news and developments',
      icon: Building2,
      color: 'from-blue-600 to-blue-800',
      borderColor: 'border-blue-500'
    },
    {
      id: 'public',
      nameAr: 'أخبار عامة',
      nameEn: 'Public Affairs',
      description: 'أخبار قطاع الطاقة والصناعة',
      descriptionEn: 'Energy sector and industry news',
      icon: Globe,
      color: 'from-green-600 to-green-800',
      borderColor: 'border-green-500'
    }
  ];

  const currentSection = sections.find(s => s.id === selectedSection);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.1),transparent_70%)]" />
        
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
                ? 'منصة إعلامية متقدمة لنشر آخر الأخبار والتطورات في شركة مكامن السعودية القابضة وقطاع الطاقة'
                : 'Advanced media platform for the latest news and developments at Saudi Makamin Holding Company and the energy sector'
              }
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
              <Calendar className="w-4 h-4" />
              <span>{language === 'ar' ? 'محدث يومياً' : 'Updated Daily'}</span>
              <span className="mx-2">•</span>
              <Clock className="w-4 h-4" />
              <span>{language === 'ar' ? 'تغطية شاملة' : 'Comprehensive Coverage'}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Selector */}
      <section className="py-12 border-b border-slate-700/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = selectedSection === section.id;
              
              return (
                <motion.button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className={`group relative flex items-center gap-4 px-8 py-6 rounded-2xl border-2 transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${section.color} text-white shadow-2xl scale-105 ${section.borderColor}`
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 hover:text-white border-slate-600 hover:border-slate-500'
                  }`}
                  whileHover={{ scale: isActive ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-8 h-8 flex-shrink-0" />
                  <div className="text-left">
                    <div className="font-bold text-xl mb-1">
                      {language === 'ar' ? section.nameAr : section.nameEn}
                    </div>
                    <div className="text-sm opacity-80">
                      {language === 'ar' ? section.description : section.descriptionEn}
                    </div>
                  </div>
                  
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* News Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            {/* Current Section Header */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                {currentSection && (
                  <>
                    <currentSection.icon className="w-10 h-10 text-blue-400" />
                    <h2 className="text-4xl font-bold text-white">
                      {language === 'ar' ? currentSection.nameAr : currentSection.nameEn}
                    </h2>
                  </>
                )}
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto" />
            </div>

            {/* Empty State */}
            <div className="max-w-2xl mx-auto">
              <Card className="bg-slate-800/60 border-slate-700 p-12">
                <CardContent className="text-center space-y-6">
                  <div className="w-20 h-20 bg-slate-700/50 rounded-full flex items-center justify-center mx-auto">
                    <Plus className="w-10 h-10 text-slate-400" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white">
                      {language === 'ar' 
                        ? 'قسم الأخبار جاهز للاستخدام' 
                        : 'News Section Ready'
                      }
                    </h3>
                    <p className="text-slate-300 text-lg">
                      {language === 'ar' 
                        ? 'تم إعداد منصة الأخبار بنجاح. يمكن الآن إضافة المحتوى حسب الحاجة.'
                        : 'News platform successfully prepared. Content can now be added as needed.'
                      }
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4 pt-6">
                    <Badge className="bg-green-600 text-white px-4 py-2 text-sm">
                      {language === 'ar' ? '✓ منصة جاهزة' : '✓ Platform Ready'}
                    </Badge>
                    <Badge className="bg-blue-600 text-white px-4 py-2 text-sm">
                      {language === 'ar' ? '✓ تصميم احترافي' : '✓ Professional Design'}
                    </Badge>
                    <Badge className="bg-purple-600 text-white px-4 py-2 text-sm">
                      {language === 'ar' ? '✓ دعم ثنائي اللغة' : '✓ Bilingual Support'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {[
                {
                  icon: Building2,
                  titleAr: 'أخبار الشركة',
                  titleEn: 'Corporate News',
                  descAr: 'تطورات وإعلانات الشركة',
                  descEn: 'Company developments and announcements'
                },
                {
                  icon: Globe,
                  titleAr: 'أخبار عامة',
                  titleEn: 'Public Affairs',
                  descAr: 'أخبار القطاع والصناعة',
                  descEn: 'Sector and industry news'
                },
                {
                  icon: Search,
                  titleAr: 'بحث متقدم',
                  titleEn: 'Advanced Search',
                  descAr: 'بحث سريع وفعال',
                  descEn: 'Quick and efficient search'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800/40 border-slate-700 hover:bg-slate-700/40 transition-all duration-300 p-6">
                    <CardContent className="text-center space-y-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center mx-auto">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-white">
                        {language === 'ar' ? feature.titleAr : feature.titleEn}
                      </h4>
                      <p className="text-slate-400 text-sm">
                        {language === 'ar' ? feature.descAr : feature.descEn}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}