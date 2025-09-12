import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, ArrowDown, Zap, Globe, Award, Target, ArrowRight, ChevronRight } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import AnimatedCounter from '@/components/animated-counter';
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
      value: 1200000000, 
      label: language === 'ar' ? 'رأس المال المصرح به' : 'Authorized Capital',
      prefix: 'SAR ',
      suffix: '',
      format: '1.2B',
      icon: Globe,
      color: 'text-yellow-400'
    },
    { 
      value: 60, 
      label: language === 'ar' ? 'مساهمون من نخبة المستثمرين المحليين' : 'Elite Local Investors',
      prefix: '',
      suffix: '+',
      format: '60+',
      icon: Award,
      color: 'text-blue-400'
    },
    { 
      value: 2025, 
      label: language === 'ar' ? 'تأسست مكامن عام 2008، وأُعيد هيكلتها وتنشيطها في فبراير 2025' : 'Established 2008, Restructured and Reactivated February 2025',
      prefix: '',
      suffix: '',
      format: '2008→2025',
      icon: Target,
      color: 'text-green-400'
    },
    { 
      value: 1980, 
      label: language === 'ar' ? 'أيام بدون حوادث' : 'Days Without LTA',
      prefix: '',
      suffix: '',
      format: '1,980',
      icon: Zap,
      color: 'text-orange-400'
    }
  ];

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        {/* Authentic company background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroCarouselPath})`
          }}
        />
        
        {/* Video overlay (future implementation) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
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

      {/* Content Overlay */}
      <motion.div 
        className="relative z-10 h-full flex items-center justify-center text-white"
        style={{ opacity }}
      >
        <div className="container mx-auto px-4 lg:px-8 text-center">
          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            {/* Logo and branding */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <img 
                src={newLogoPath} 
                alt="Makamin Logo" 
                className="h-24 w-auto mx-auto mb-6 filter drop-shadow-2xl"
              />
              {/* Vision 2030 Visual Signature Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className={`inline-flex items-center bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-6 py-3 mb-6 font-bold text-lg rounded-full shadow-2xl border-2 border-yellow-300 hover:shadow-yellow-500/30 hover:shadow-2xl transition-all duration-300 ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}
                aria-label="Vision 2030 National Identity"
              >
                <img 
                  src={vision2030LogoPath} 
                  alt="Vision 2030 Logo" 
                  className={`h-8 w-auto opacity-90 drop-shadow-lg ${language === 'ar' ? 'mr-3' : 'ml-0 mr-3'} max-w-[50%] object-contain`}
                />
                <span className="whitespace-nowrap font-extrabold tracking-wide">
                  {language === 'ar' ? 'رؤية المملكة 2030 – شريك وطني موثوق في مستقبل الطاقة' : 'Vision 2030 – Trusted National Partner in Energy Future'}
                </span>
              </motion.div>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              {language === 'ar' ? (
                <>
                  <span className="block">مكامن السعودية</span>
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    قوة الطاقة
                  </span>
                </>
              ) : (
                <>
                  <span className="block">Saudi Makamin</span>
                  <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Energy Power
                  </span>
                </>
              )}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-2xl md:text-3xl text-white font-bold mb-6 max-w-5xl mx-auto leading-relaxed"
            >
              {language === 'ar' ? 
                'مكامن السعودية — قوة بـ 1.2 مليار ريال سعودي تشكل مستقبل الطاقة من خلال الابتكار والشراكات العالمية' :
                <><span className="whitespace-nowrap">Saudi Makamin</span> — A 1.2 Billion SAR Powerhouse Shaping the Future of Energy Through Innovation and Global Partnerships</>
              }
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              {language === 'ar' ? 
                'رحلة استثنائية في عالم الطاقة منذ 2008 — من الرؤية إلى التنفيذ بتميز لا يُضاهى' :
                'An extraordinary journey in the energy world since 2008 — from vision to execution with unparalleled excellence'
              }
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
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
                <a href="/services">
                  <Play className="w-5 h-5 mr-2" />
                  {language === 'ar' ? 'شاهد قصتنا' : 'Watch Our Story'}
                </a>
              </Button>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="mb-4">
                    <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2 group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    <span className="text-white">{stat.prefix}</span>
                    <span className={stat.color}>
                      {stat.format || <AnimatedCounter value={stat.value} duration={3000} suffix={stat.suffix} />}
                    </span>
                  </div>
                  <div className="text-sm md:text-base text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
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

      {/* AI Integration Overlay */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute top-4 right-4 z-20"
      >
        <Button
          variant="secondary"
          className="bg-black/50 backdrop-blur-sm text-white border-white/20 hover:bg-black/70"
        >
          <Zap className="w-4 h-4 mr-2" />
          {language === 'ar' ? 'مساعد AI' : 'AI Assistant'}
        </Button>
      </motion.div>
    </div>
  );
}