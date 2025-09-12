import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award, Building, Drill, Ship, Eye } from 'lucide-react';
import { useLanguageContext } from './language-provider';

interface TimelineEvent {
  year: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  type: 'founding' | 'milestone' | 'expansion' | 'achievement';
  location?: string;
  value?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2008',
    title: 'Company Establishment',
    titleAr: 'تأسيس الشركة',
    description: 'Saudi Makamin Oil & Gas Services established with SAR 1.2 billion capital and 59 shareholders',
    descriptionAr: 'تأسيس شركة مكامن السعودية للخدمات البترولية برأس مال 1.2 مليار ريال و59 مساهم',
    type: 'founding',
    location: 'Dammam, Saudi Arabia',
    value: 'SAR 1.2B'
  },
  {
    year: '2008-2010',
    title: 'First Major Contracts',
    titleAr: 'أول العقود الكبيرة',
    description: 'Secured multiple pipeline and drilling contracts with Saudi Aramco',
    descriptionAr: 'الحصول على عقود متعددة للأنابيب والحفر مع أرامكو السعودية',
    type: 'milestone',
    location: 'Eastern Province'
  },
  {
    year: '2012',
    title: 'Offshore Operations Launch',
    titleAr: 'إطلاق العمليات البحرية',
    description: 'Makamin Offshore Saudi (MOS) established for marine services and vessel operations',
    descriptionAr: 'تأسيس مكامن أوف شور السعودية للخدمات البحرية وعمليات السفن',
    type: 'expansion',
    location: 'Dammam Port',
    value: 'USD 400M+'
  },
  {
    year: '2013-2015',
    title: 'Technical Excellence',
    titleAr: 'التميز التقني',
    description: 'Advanced NDT services, ZENCUS wireless monitoring, and specialized inspection capabilities',
    descriptionAr: 'خدمات الفحص المتقدمة وأنظمة المراقبة اللاسلكية وقدرات التفتيش المتخصصة',
    type: 'achievement',
    location: 'Multiple Sites'
  },
  {
    year: '2015',
    title: 'Regional Expansion',
    titleAr: 'التوسع الإقليمي',
    description: 'Bahrain operations established for regional investments and strategic partnerships',
    descriptionAr: 'تأسيس عمليات البحرين للاستثمارات الإقليمية والشراكات الاستراتيجية',
    type: 'expansion',
    location: 'Manama, Bahrain',
    value: 'BHD 50M'
  },
  {
    year: '2016-2017',
    title: 'Industry Leadership',
    titleAr: 'ريادة الصناعة',
    description: 'Achieved Aramco Tier-1 contractor status with zero LTA safety record',
    descriptionAr: 'الحصول على مرتبة المقاول من الدرجة الأولى مع أرامكو وسجل أمان صفر حوادث',
    type: 'achievement',
    location: 'Kingdom-wide'
  },
  {
    year: '2018-Present',
    title: 'Digital Transformation',
    titleAr: 'التحول الرقمي',
    description: 'AI-powered services, smart monitoring, and Vision 2030 alignment initiatives',
    descriptionAr: 'خدمات ذكية مدعومة بالذكاء الاصطناعي ومبادرات رؤية 2030',
    type: 'milestone',
    location: 'National Scale'
  }
];

export default function Timeline() {
  const { language } = useLanguageContext();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'founding': return Building;
      case 'milestone': return Award;
      case 'expansion': return Ship;
      case 'achievement': return Eye;
      default: return Calendar;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'founding': return 'from-green-500 to-emerald-600';
      case 'milestone': return 'from-blue-500 to-cyan-600';
      case 'expansion': return 'from-purple-500 to-pink-600';
      case 'achievement': return 'from-yellow-500 to-orange-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div ref={ref} className="w-full max-w-6xl mx-auto py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {language === 'ar' ? 'رحلة التميز عبر الزمن' : 'Journey of Excellence Through Time'}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {language === 'ar' ? 'من التأسيس في 2008 إلى الريادة في خدمات النفط والغاز' : 'From establishment in 2008 to leadership in oil & gas services'}
        </p>
      </motion.div>

      <div className="relative">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 h-full"></div>

        <div className="space-y-12">
          {timelineEvents.map((event, index) => {
            const IconComponent = getEventIcon(event.type);
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                    <CardContent className="p-8">
                      {/* Event Type Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <Badge 
                          variant="secondary" 
                          className={`bg-gradient-to-r ${getEventColor(event.type)} text-white`}
                        >
                          {event.type}
                        </Badge>
                        {event.value && (
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {event.value}
                          </Badge>
                        )}
                      </div>

                      {/* Event Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {language === 'ar' ? event.titleAr : event.title}
                      </h3>

                      {/* Event Description */}
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {language === 'ar' ? event.descriptionAr : event.description}
                      </p>

                      {/* Location */}
                      {event.location && (
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${getEventColor(event.type)} flex items-center justify-center shadow-xl`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Year Display */}
                <div className={`w-5/12 ${isLeft ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                  <motion.div
                    className="text-4xl font-bold text-gray-900 mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {event.year}
                  </motion.div>
                  <div className="text-lg text-gray-600">
                    {language === 'ar' ? 'معلم هام' : 'Key Milestone'}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}