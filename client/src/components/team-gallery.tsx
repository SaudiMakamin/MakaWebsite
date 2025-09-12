import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Users } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';

// Import Makamin logo for branding overlay
import makaminLogoOverlay from '@assets/logo mkamin_1752524503536.png';

// Import authentic Makamin team and operational images from the provided archive
import pipelineTeamRTR from '@assets/Pipeline RTR (22)_1752593343954.jpg';
import pipelineTeamWRP from '@assets/Pipeline WRP (2)_1752593343955.jpg';
import uyunCampFacilities from '@assets/Uyun Camp (5)_1752593343955.jpg';
import uyunCampEquipment from '@assets/Uyun Camp (16)_1752593343956.jpg';
import uyunCampOperations from '@assets/Uyun Camp (19)_1752593343957.jpg';
import constructionTeam from '@assets/20181028_163743_1752593343958.jpg';
import drillingWaseea1 from '@assets/Drilling Waseea (3)_1752593343958.jpg';
import drillingWaseea2 from '@assets/Drilling Waseea (10)_1752593343959.jpg';
import drillingTeamGroup from '@assets/Drilling Waseea (34)_1752593343959.jpg';
import geoscienceTeam1 from '@assets/Geoscience 4D (1)_1752593343960.jpg';
import geoscienceOffice from '@assets/Geoscience 4D (7)_1752593343960.jpg';
import geoscienceField from '@assets/Geoscience 4D (9)_1752593343960.jpg';

interface TeamImage {
  src: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  category: 'leadership' | 'operations' | 'technical' | 'safety' | 'innovation';
}

export default function TeamGallery() {
  const { language } = useLanguageContext();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const teamImages: TeamImage[] = [
    {
      src: pipelineTeamRTR,
      title: 'Pipeline RTR Team Excellence',
      titleAr: 'تميز فريق خط أنابيب RTR',
      description: 'Our pipeline specialists demonstrating professional collaboration and technical expertise in the field',
      descriptionAr: 'متخصصو الأنابيب لدينا يُظهرون التعاون المهني والخبرة التقنية في الميدان',
      category: 'operations'
    },
    {
      src: pipelineTeamWRP,
      title: 'WRP Pipeline Operations',
      titleAr: 'عمليات أنابيب WRP',
      description: 'Skilled technicians conducting precision pipeline installation and maintenance operations',
      descriptionAr: 'فنيون مهرة يقومون بعمليات تركيب وصيانة الأنابيب عالية الدقة',
      category: 'technical'
    },
    {
      src: uyunCampFacilities,
      title: 'Uyun Camp Operations Center',
      titleAr: 'مركز عمليات مخيم عيون',
      description: 'State-of-the-art operational facilities supporting our field teams with premium equipment and logistics',
      descriptionAr: 'مرافق تشغيلية حديثة تدعم فرقنا الميدانية بمعدات ولوجستيات متقدمة',
      category: 'operations'
    },
    {
      src: uyunCampEquipment,
      title: 'Heavy Equipment Fleet',
      titleAr: 'أسطول المعدات الثقيلة',
      description: 'Our world-class CAT excavator fleet and heavy machinery supporting major infrastructure projects',
      descriptionAr: 'أسطولنا العالمي من حفارات كات والآلات الثقيلة الداعمة لمشاريع البنية التحتية الكبرى',
      category: 'technical'
    },
    {
      src: uyunCampOperations,
      title: 'Field Operations Base',
      titleAr: 'قاعدة العمليات الميدانية',
      description: 'Strategic operational base ensuring seamless project execution and team coordination',
      descriptionAr: 'قاعدة عمليات استراتيجية تضمن التنفيذ السلس للمشاريع وتنسيق الفرق',
      category: 'operations'
    },
    {
      src: constructionTeam,
      title: 'Construction Excellence',
      titleAr: 'تميز البناء',
      description: 'Advanced construction operations showcasing our engineering capabilities and project management expertise',
      descriptionAr: 'عمليات بناء متقدمة تُظهر قدراتنا الهندسية وخبرتنا في إدارة المشاريع',
      category: 'technical'
    },
    {
      src: drillingWaseea1,
      title: 'Waseea Drilling Operations',
      titleAr: 'عمليات حفر وسيعة',
      description: 'Professional drilling teams executing complex well operations with precision and safety standards',
      descriptionAr: 'فرق حفر مهنية تنفذ عمليات آبار معقدة بدقة ومعايير السلامة',
      category: 'operations'
    },
    {
      src: drillingWaseea2,
      title: 'Advanced Drilling Technology',
      titleAr: 'تقنية الحفر المتقدمة',
      description: 'State-of-the-art drilling rigs and equipment demonstrating our technological leadership in the industry',
      descriptionAr: 'منصات وأجهزة حفر حديثة تُظهر ريادتنا التكنولوجية في الصناعة',
      category: 'technical'
    },
    {
      src: drillingTeamGroup,
      title: 'United Drilling Team',
      titleAr: 'فريق الحفر المتحد',
      description: 'Our diverse, skilled drilling professionals representing the backbone of Makamin\'s operational excellence',
      descriptionAr: 'مهنيو الحفر المتنوعون والمهرة يمثلون العمود الفقري للتميز التشغيلي لمكامن',
      category: 'leadership'
    },
    {
      src: geoscienceTeam1,
      title: 'Geoscience Team Leadership',
      titleAr: 'قيادة فريق علوم الأرض',
      description: 'Expert geoscience professionals driving innovation in subsurface analysis and reservoir optimization',
      descriptionAr: 'خبراء علوم الأرض المهنيون يقودون الابتكار في تحليل باطن الأرض وتحسين المكامن',
      category: 'leadership'
    },
    {
      src: geoscienceOffice,
      title: 'Geoscience Technical Center',
      titleAr: 'المركز التقني لعلوم الأرض',
      description: 'Advanced technical workspace where our geoscience experts analyze 4D seismic data and reservoir modeling',
      descriptionAr: 'مساحة عمل تقنية متقدمة حيث يحلل خبراء علوم الأرض البيانات الزلزالية ثلاثية الأبعاد ونمذجة المكامن',
      category: 'technical'
    },
    {
      src: geoscienceField,
      title: 'Desert Field Operations',
      titleAr: 'عمليات الحقل الصحراوي',
      description: 'Remote field operations demonstrating our capability to deliver excellence in challenging desert environments',
      descriptionAr: 'عمليات ميدانية نائية تُظهر قدرتنا على تحقيق التميز في البيئات الصحراوية الصعبة',
      category: 'operations'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % teamImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + teamImages.length) % teamImages.length);
  };

  const currentImage = teamImages[currentImageIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-900 dark:to-slate-900 relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-blue-800/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-blue-300/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
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
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-800 via-cyan-700 to-blue-900 bg-clip-text text-transparent"
          >
            {language === 'ar' ? 'قصـة موظفينا — The Story of Our People' : 'The Story of Our People — قصـة موظفينا'}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            {language === 'ar' 
              ? 'التميز البشري وراء إرث مكامن' 
              : 'Human excellence behind Makamin\'s legacy'
            }
          </motion.p>

          {/* View Team Album CTA */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={() => setIsGalleryOpen(true)}
            className="group relative bg-gradient-to-r from-blue-700 to-cyan-700 hover:from-blue-800 hover:to-cyan-800 text-white font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-full blur"></div>
            <span className="relative z-10 flex items-center gap-2 text-lg">
              <Users className="w-5 h-5" />
              {language === 'ar' ? 'عرض ألبوم الفريق' : 'View Team Album'}
            </span>
          </motion.button>
        </div>

        {/* Team Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02]"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                    image.category === 'leadership' ? 'bg-purple-600/80' :
                    image.category === 'operations' ? 'bg-blue-600/80' :
                    image.category === 'technical' ? 'bg-green-600/80' :
                    image.category === 'safety' ? 'bg-red-600/80' :
                    'bg-cyan-600/80'
                  }`}>
                    {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                  </span>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-1">
                    {language === 'ar' ? image.titleAr : image.title}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2">
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
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      currentImage.category === 'leadership' ? 'bg-purple-600' :
                      currentImage.category === 'operations' ? 'bg-blue-600' :
                      currentImage.category === 'technical' ? 'bg-green-600' :
                      currentImage.category === 'safety' ? 'bg-red-600' :
                      'bg-cyan-600'
                    }`}>
                      {currentImage.category.charAt(0).toUpperCase() + currentImage.category.slice(1)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {language === 'ar' ? currentImage.titleAr : currentImage.title}
                  </h3>
                  <p className="text-gray-300">
                    {language === 'ar' ? currentImage.descriptionAr : currentImage.description}
                  </p>
                  <div className="mt-2 text-sm text-gray-400">
                    {currentImageIndex + 1} / {teamImages.length}
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