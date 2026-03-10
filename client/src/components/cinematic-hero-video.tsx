import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Globe, Award, Target, ChevronRight, Briefcase, Calendar, Users } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import heroCarouselPath from '@assets/hero-carousel-1_1752529906169.jpg';
import newLogoPath from '@assets/logo mkamin_1752532541023.png';
import vision2030LogoPath from '@assets/Saudi_Vision_2030_logo.svg_1752605202958.png';

export default function CinematicHeroVideo() {
  const { language } = useLanguageContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const heroStats = [
    { 
      label: language === 'ar' ? 'رأس المال المصرح به' : 'Authorized Capital',
      format: 'SAR 1.2B',
      icon: Globe,
      color: 'text-yellow-400'
    },
    { 
      label: language === 'ar' ? 'مستثمرون استراتيجيون' : 'Strategic Investors',
      format: '60+',
      icon: Users,
      color: 'text-blue-400'
    },
    { 
      label: language === 'ar' ? 'سنوات من الخبرة' : 'Years of Experience',
      format: '17+',
      icon: Calendar,
      color: 'text-green-400'
    },
    { 
      label: language === 'ar' ? 'مشاريع وسجلات' : 'Projects & Records',
      format: '100+',
      icon: Briefcase,
      color: 'text-orange-400'
    }
  ];

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroCarouselPath})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: 0
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="relative z-10 h-full flex items-center justify-center text-white"
        style={{ opacity }}
      >
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <img 
                src={newLogoPath} 
                alt="Makamin Logo" 
                className="h-20 sm:h-24 w-auto mx-auto mb-6 filter drop-shadow-2xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className={`inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 mb-6 font-bold text-sm sm:text-lg rounded-full shadow-2xl border-2 border-yellow-300 hover:shadow-yellow-500/30 hover:shadow-2xl transition-all duration-300 ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}
                aria-label="Vision 2030 National Identity"
              >
                <img 
                  src={vision2030LogoPath} 
                  alt="Vision 2030 Logo" 
                  className={`h-6 sm:h-8 w-auto opacity-90 drop-shadow-lg ${language === 'ar' ? 'mr-3' : 'ml-0 mr-3'} max-w-[50%] object-contain`}
                />
                <span className="whitespace-nowrap font-extrabold tracking-wide">
                  {language === 'ar' ? 'شريك وطني موثوق — رؤية 2030' : 'Vision 2030 — Trusted National Partner'}
                </span>
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              {language === 'ar' ? (
                <>
                  <span className="block">مكامن السعودية</span>
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    خدمات طاقة متكاملة
                  </span>
                </>
              ) : (
                <>
                  <span className="block">Saudi Makamin</span>
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Integrated Energy Services
                  </span>
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium mb-4 max-w-5xl mx-auto leading-relaxed px-2 sm:px-0"
            >
              {language === 'ar' ? 
                'حلول متكاملة في البترول والبنية التحتية والعمليات البحرية والفحص الصناعي والرقابة الرقمية — مدعومة برأس مال مصرح به بقيمة 1.2 مليار ريال سعودي' :
                'Integrated solutions across petroleum, infrastructure, offshore operations, industrial inspection, and digital monitoring — backed by SAR 1.2B authorized capital'
              }
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-base sm:text-lg md:text-xl text-blue-200/80 max-w-4xl mx-auto mb-10 leading-relaxed px-2 sm:px-0"
            >
              {language === 'ar' ? 
                'تأسست عام 2008 — سجل حافل في التنفيذ الهندسي مع أرامكو السعودية وقطاع الطاقة' :
                'Established 2008 — proven track record in engineering execution with Saudi Aramco and the energy sector'
              }
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
            >
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black dark:text-black font-bold px-8 py-4 text-lg shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-yellow-400 hover:border-yellow-500"
                asChild
              >
                <a href="/projects" className="flex items-center text-black dark:text-black no-underline">
                  <ChevronRight className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'اكتشف مشاريعنا' : 'Discover Our Projects'}
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black dark:hover:text-black font-bold px-8 py-4 text-lg bg-black/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="/services" className="flex items-center text-white hover:text-black dark:hover:text-black no-underline">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'استكشف خدماتنا' : 'Explore Services'}
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-5xl mx-auto"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="mb-3">
                    <stat.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
                    <span className={stat.color}>
                      {stat.format}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-white/70"
            >
              <span className="text-sm mb-2">
                {language === 'ar' ? 'اكتشف المزيد' : 'Discover More'}
              </span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}