import { motion } from 'framer-motion';
import { useLanguageContext } from '@/components/language-provider';

// Import official partner logos
import schlumbergerLogo from '@assets/Schlumberger_1752578814081.png';
import bakerHughesLogo from '@assets/Baker Hughes_1752578814084.png';
import halliburtonLogo from '@assets/Halliburton_1752578814085.png';
import aramcoLogo from '@assets/Logo-saudi-aramco-vector-PNG_1752578814086.png';
import ministryEnergyLogo from '@assets/Ministry of Energy_1752578814086.jpg';

export default function GlobalPartnersSlider() {
  const { language } = useLanguageContext();

  // Real global partners with authentic logos
  const partners = [
    {
      name: 'Saudi Aramco',
      nameAr: 'أرامكو السعودية',
      logo: aramcoLogo,
      description: 'Strategic Partnership',
      descriptionAr: 'شراكة استراتيجية'
    },
    {
      name: 'Schlumberger',
      nameAr: 'شلمبرجير',
      logo: schlumbergerLogo,
      description: 'Technology Partner',
      descriptionAr: 'شريك تقني'
    },
    {
      name: 'Halliburton',
      nameAr: 'هاليبرتون',
      logo: halliburtonLogo,
      description: 'Service Alliance',
      descriptionAr: 'تحالف خدمي'
    },
    {
      name: 'Baker Hughes',
      nameAr: 'بيكر هيوز',
      logo: bakerHughesLogo,
      description: 'Technology Solutions',
      descriptionAr: 'حلول تقنية'
    },
    {
      name: 'Ministry of Energy',
      nameAr: 'وزارة الطاقة',
      logo: ministryEnergyLogo,
      description: 'Government Partner',
      descriptionAr: 'شريك حكومي'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? 'شركاؤنا العالميون' : 'Our Global Partners'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'ar' ? 
              'شراكات استراتيجية مع قادة الصناعة العالمية لتقديم حلول متطورة' :
              'Strategic partnerships with global industry leaders to deliver advanced solutions'
            }
          </p>
        </motion.div>

        {/* Infinite scroll animation */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-8 min-w-full"
              animate={{
                x: [0, -100 * partners.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 w-64 h-40 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center justify-center group"
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <div className="w-24 h-16 mb-4 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `data:image/svg+xml;base64,${btoa(`<svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="60" fill="#1f2937"/><text x="60" y="35" text-anchor="middle" fill="white" font-family="Arial" font-size="12" font-weight="bold">${partner.name}</text></svg>`)}`;
                      }}
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-center mb-1">
                    {language === 'ar' ? partner.nameAr : partner.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {language === 'ar' ? partner.descriptionAr : partner.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blue-50 to-transparent pointer-events-none"></div>
        </div>

        {/* Partnership Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { 
              number: '50+', 
              label: language === 'ar' ? 'شراكة عالمية' : 'Global Partnerships',
              description: language === 'ar' ? 'في 15 دولة' : 'Across 15 countries'
            },
            { 
              number: '25+', 
              label: language === 'ar' ? 'عاماً من الخبرة' : 'Years of Experience',
              description: language === 'ar' ? 'في التعاون الدولي' : 'In international cooperation'
            },
            { 
              number: '100%', 
              label: language === 'ar' ? 'معدل النجاح' : 'Success Rate',
              description: language === 'ar' ? 'في المشاريع المشتركة' : 'In joint ventures'
            },
            { 
              number: '$5B+', 
              label: language === 'ar' ? 'قيمة المشاريع' : 'Project Value',
              description: language === 'ar' ? 'مع الشركاء' : 'With partners'
            }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}