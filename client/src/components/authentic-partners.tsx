import { motion } from 'framer-motion';
import { useLanguageContext } from '@/components/language-provider';

// Import official partner logos
import schlumbergerLogo from '@assets/Schlumberger_1752578814081.png';
import bakerHughesLogo from '@assets/Baker Hughes_1752578814084.png';
import halliburtonLogo from '@assets/Halliburton_1752578814085.png';
import aramcoLogo from '@assets/Logo-saudi-aramco-vector-PNG_1752578814086.png';
import ministryEnergyLogo from '@assets/Ministry of Energy_1752578814086.jpg';

// Authentic partner data with real logos and partnerships
export default function AuthenticPartners() {
  const { language } = useLanguageContext();

  // Real strategic partners based on company documents
  const partners = [
    {
      name: 'Saudi Aramco',
      nameAr: 'أرامكو السعودية',
      type: 'Primary Client',
      typeAr: 'العميل الرئيسي',
      logo: aramcoLogo,
      partnership: "Strategic long-term partnership with direct contract awards",
      partnershipAr: "شراكة استراتيجية طويلة المدى مع ترسيات عقود مباشرة"
    },
    {
      name: 'Ministry of Energy',
      nameAr: 'وزارة الطاقة',
      type: 'Regulatory Partner',
      typeAr: 'الشريك التنظيمي',
      logo: ministryEnergyLogo,
      partnership: "Government regulatory compliance and national energy projects",
      partnershipAr: "الامتثال التنظيمي الحكومي ومشاريع الطاقة الوطنية"
    },
    {
      name: 'Schlumberger',
      nameAr: 'شلمبرجير',
      type: 'Technology Partner',
      typeAr: 'شريك تقني',
      logo: schlumbergerLogo,
      partnership: "Advanced drilling technology and downhole tools supply",
      partnershipAr: "تقنيات الحفر المتقدمة وتوريد أدوات قاع البئر"
    },
    {
      name: 'Halliburton',
      nameAr: 'هاليبرتون',
      type: 'Service Alliance',
      typeAr: 'تحالف خدمي',
      logo: halliburtonLogo,
      partnership: "Cementing services and well completion technologies",
      partnershipAr: "خدمات الإسمنت وتقنيات إكمال الآبار"
    },
    {
      name: 'Baker Hughes',
      nameAr: 'بيكر هيوز',
      type: 'Equipment Partner',
      typeAr: 'شريك المعدات',
      logo: bakerHughesLogo,
      partnership: "Energy equipment and digital solutions",
      partnershipAr: "معدات الطاقة والحلول الرقمية"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-makamin-blue mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {language === 'ar' ? 'شركاؤنا الاستراتيجيون' : 'Strategic Partners'}
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {language === 'ar' 
              ? 'نفخر بشراكاتنا مع كبرى الشركات العالمية في قطاع الطاقة والنفط والغاز'
              : 'Proud partnerships with leading global companies in energy, oil & gas sector'
            }
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-full h-20 mb-6 flex items-center justify-center bg-gray-50 rounded-lg">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language === 'ar' ? partner.nameAr : partner.name}
                </h3>
                
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {language === 'ar' ? partner.typeAr : partner.type}
                </span>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'ar' ? partner.partnershipAr : partner.partnership}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Statistics */}
        <motion.div 
          className="mt-16 bg-makamin-blue rounded-2xl p-8 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-blue-100">
                {language === 'ar' ? 'شراكة فعالة' : 'Active Partnerships'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">15</div>
              <div className="text-blue-100">
                {language === 'ar' ? 'دولة' : 'Countries'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">$5B+</div>
              <div className="text-blue-100">
                {language === 'ar' ? 'قيمة المشاريع' : 'Project Value'}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">16+</div>
              <div className="text-blue-100">
                {language === 'ar' ? 'سنة خبرة' : 'Years Experience'}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}