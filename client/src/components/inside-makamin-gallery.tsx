import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';

// Import Makamin logo for branding overlay
import makaminLogoOverlay from '@assets/logo mkamin_1752524503536.png';

// Import available authentic Makamin images
import heroCarouselPath from '@assets/hero-carousel-1_1752529906169.jpg';
import drillingRigPath from '@assets/IMG-20250710-WA0011_1752529906170.jpg';
import processingFacilityPath from '@assets/IMG-20250710-WA0012_1752529906171.jpg';
import offshorePlatformPath from '@assets/IMG-20250710-WA0013_1752529906171.jpg';
import marineOperationsPath from '@assets/IMG-20250710-WA0019_1752529906172.jpg';
import inspectionOperationsPath from '@assets/IMG-20250710-WA0020_1752529906172.jpg';
import operationalImage1 from '@assets/IMG-20250710-WA0006_1752524450265.jpg';
import operationalImage2 from '@assets/IMG-20250710-WA0008_1752524450265.jpg';
import facilitiesImage1 from '@assets/صورة2_1752532266188.jpg';
import facilitiesImage2 from '@assets/صورة3_1752532266188.jpg';
import facilitiesImage3 from '@assets/صورة5_1752532266189.jpg';
import facilitiesImage4 from '@assets/صورة6_1752532266190.jpg';

interface GalleryImage {
  src: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  category: 'drilling' | 'offshore' | 'processing' | 'marine' | 'inspection' | 'facilities';
}

export default function InsideMakaminGallery() {
  const { language } = useLanguageContext();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages: GalleryImage[] = [
    {
      src: heroCarouselPath,
      title: 'Makamin Operations Overview',
      titleAr: 'نظرة عامة على عمليات مكامن',
      description: 'Comprehensive view of Makamin\'s integrated energy operations',
      descriptionAr: 'نظرة شاملة على عمليات الطاقة المتكاملة لمكامن',
      category: 'facilities'
    },
    {
      src: drillingRigPath,
      title: 'Advanced Drilling Operations',
      titleAr: 'عمليات الحفر المتقدمة',
      description: 'State-of-the-art drilling technology and precision operations',
      descriptionAr: 'تقنيات الحفر المتطورة والعمليات الدقيقة',
      category: 'drilling'
    },
    {
      src: processingFacilityPath,
      title: 'Processing Facility Excellence',
      titleAr: 'تميز منشآت المعالجة',
      description: 'Advanced processing capabilities and quality control systems',
      descriptionAr: 'قدرات المعالجة المتقدمة وأنظمة مراقبة الجودة',
      category: 'processing'
    },
    {
      src: offshorePlatformPath,
      title: 'Offshore Platform Mastery',
      titleAr: 'إتقان المنصات البحرية',
      description: 'Marine construction and offshore platform operations',
      descriptionAr: 'الإنشاءات البحرية وعمليات المنصات البحرية',
      category: 'offshore'
    },
    {
      src: marineOperationsPath,
      title: 'Marine Operations Excellence',
      titleAr: 'تميز العمليات البحرية',
      description: 'Comprehensive marine services and vessel operations',
      descriptionAr: 'الخدمات البحرية الشاملة وعمليات السفن',
      category: 'marine'
    },
    {
      src: inspectionOperationsPath,
      title: 'Precision Inspection Services',
      titleAr: 'خدمات التفتيش الدقيقة',
      description: 'Advanced inspection technology and quality assurance',
      descriptionAr: 'تقنيات التفتيش المتقدمة وضمان الجودة',
      category: 'inspection'
    },
    {
      src: operationalImage1,
      title: 'Field Operations Mastery',
      titleAr: 'إتقان العمليات الميدانية',
      description: 'On-site operational excellence and technical precision',
      descriptionAr: 'التميز التشغيلي في الموقع والدقة التقنية',
      category: 'facilities'
    },
    {
      src: operationalImage2,
      title: 'Technical Innovation',
      titleAr: 'الابتكار التقني',
      description: 'Cutting-edge technology implementation and innovation',
      descriptionAr: 'تطبيق التكنولوجيا المتطورة والابتكار',
      category: 'facilities'
    },
    {
      src: facilitiesImage1,
      title: 'Infrastructure Excellence',
      titleAr: 'تميز البنية التحتية',
      description: 'World-class facilities and infrastructure development',
      descriptionAr: 'منشآت وتطوير البنية التحتية عالمية المستوى',
      category: 'facilities'
    },
    {
      src: facilitiesImage2,
      title: 'Operational Precision',
      titleAr: 'الدقة التشغيلية',
      description: 'Precise operational control and monitoring systems',
      descriptionAr: 'أنظمة المراقبة والتحكم التشغيلي الدقيقة',
      category: 'facilities'
    },
    {
      src: facilitiesImage3,
      title: 'Strategic Operations',
      titleAr: 'العمليات الاستراتيجية',
      description: 'Strategic operational planning and execution excellence',
      descriptionAr: 'التخطيط التشغيلي الاستراتيجي وتميز التنفيذ',
      category: 'facilities'
    },
    {
      src: facilitiesImage4,
      title: 'Integrated Systems',
      titleAr: 'الأنظمة المتكاملة',
      description: 'Comprehensive integrated systems and process optimization',
      descriptionAr: 'الأنظمة المتكاملة الشاملة وتحسين العمليات',
      category: 'facilities'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const currentImage = galleryImages[currentImageIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 relative overflow-hidden">
      {/* Hero Background with Glassmorphic Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-slate-800/20 to-blue-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-800 bg-clip-text text-transparent"
          >
            {language === 'ar' ? 'داخل مكامن — سجل بصري' : 'Inside Makamin — A Visual Chronicle'}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {language === 'ar' 
              ? 'استكشف 12 صورة قوية من إتقان مكامن الميداني' 
              : 'Explore 12 powerful visuals from Makamin\'s field mastery'
            }
          </motion.p>

          {/* Launch Gallery CTA */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => setIsGalleryOpen(true)}
            className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full blur"></div>
            <span className="relative z-10 flex items-center gap-2 text-lg">
              <Play className="w-5 h-5" />
              {language === 'ar' ? 'تشغيل المعرض' : 'Launch Gallery'}
            </span>
          </motion.button>
        </div>

        {/* Gallery Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.slice(0, 6).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => {
                setCurrentImageIndex(index);
                setIsGalleryOpen(true);
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={language === 'ar' ? image.titleAr : image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Makamin Logo Overlay - Bottom Right */}
                <img 
                  src={makaminLogoOverlay}
                  alt="Makamin Brand"
                  className="absolute bottom-2 right-2 w-16 h-auto opacity-70 z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-1">
                    {language === 'ar' ? image.titleAr : image.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {language === 'ar' ? image.descriptionAr : image.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsGalleryOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Display */}
              <div className="relative bg-black rounded-lg overflow-hidden">
                <img
                  src={currentImage.src}
                  alt={language === 'ar' ? currentImage.titleAr : currentImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                {/* Makamin Logo Overlay - Bottom Right */}
                <img 
                  src={makaminLogoOverlay}
                  alt="Makamin Brand"
                  className="absolute bottom-16 right-6 w-20 h-auto opacity-70 z-10"
                />
                
                {/* Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">
                    {language === 'ar' ? currentImage.titleAr : currentImage.title}
                  </h3>
                  <p className="text-gray-300">
                    {language === 'ar' ? currentImage.descriptionAr : currentImage.description}
                  </p>
                  <div className="mt-2 text-sm text-gray-400">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}