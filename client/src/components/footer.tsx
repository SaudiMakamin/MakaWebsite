import { Link } from 'wouter';
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguageContext } from './language-provider';
import makaminLogoPath from '@assets/logo mkamin_1752524503536.png';

export default function Footer() {
  const { language, t } = useLanguageContext();

  return (
    <footer 
      className="text-white py-10 px-6 relative"
      style={{ backgroundColor: '#1b1f26' }}
    >
      {/* Subtle top gradient glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Identity Block - Arabic + English */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Link href="/" aria-label="Makamin Official Logo">
                <motion.img 
                  src={makaminLogoPath} 
                  alt="Makamin Official Logo" 
                  className="w-28 max-w-[120px] h-auto filter brightness-0 invert opacity-90 hover:opacity-100 transition-all duration-300 cursor-pointer mx-auto"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                />
              </Link>
            </motion.div>

            {/* Dual Language Company Description */}
            <div className="text-sm leading-relaxed mb-6" style={{ color: '#f1f1f1' }}>
              <p className="mb-2">شركة مكامن القابضة لحلول النفط والغاز</p>
              <p className="mb-4">الريادة في الخدمات المتكاملة منذ 2008</p>
              <p className="mb-2">Saudi Makamin Holding Company for Oil & Gas Services</p>
              <p>Leading integrated energy solutions since 2008</p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-4">
              <motion.a 
                href="https://www.linkedin.com/company/makamin" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-110 transition-all duration-300"
                style={{ filter: 'drop-shadow(0 0 8px rgba(197, 166, 110, 0.3))' }}
                whileHover={{ filter: 'drop-shadow(0 0 12px rgba(197, 166, 110, 0.6))' }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://twitter.com/SaudiMakamin_sa" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-110 transition-all duration-300"
                style={{ filter: 'drop-shadow(0 0 8px rgba(197, 166, 110, 0.3))' }}
                whileHover={{ filter: 'drop-shadow(0 0 12px rgba(197, 166, 110, 0.6))' }}
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#f1f1f1' }}>
              {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/about" 
                  className="transition-colors duration-300 hover:text-[#c5a66e]"
                  style={{ color: '#f1f1f1' }}
                >
                  {language === 'ar' ? 'من نحن' : 'About'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="transition-colors duration-300 hover:text-[#c5a66e]"
                  style={{ color: '#f1f1f1' }}
                >
                  {language === 'ar' ? 'الخدمات' : 'Services'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="transition-colors duration-300 hover:text-[#c5a66e]"
                  style={{ color: '#f1f1f1' }}
                >
                  {language === 'ar' ? 'المشاريع' : 'Projects'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/news" 
                  className="transition-colors duration-300 hover:text-[#c5a66e]"
                  style={{ color: '#f1f1f1' }}
                >
                  {language === 'ar' ? 'الأخبار' : 'News'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="transition-colors duration-300 hover:text-[#c5a66e]"
                  style={{ color: '#f1f1f1' }}
                >
                  {language === 'ar' ? 'اتصل بنا' : 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Reformatted Services Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#f1f1f1' }}>
              {language === 'ar' ? 'الخدمات' : 'Services'}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/petroleum-services" 
                  className="transition-colors duration-300 hover:text-[#c5a66e]"
                  style={{ color: '#f1f1f1' }}
                >
                  {language === 'ar' ? 'خدمات الحفر' : 'Drilling Services'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/offshore-operations" 
                  className="transition-colors duration-300 hover:text-[#c5a66e]"
                  style={{ color: '#f1f1f1' }}
                >
                  {language === 'ar' ? 'العمليات البحرية' : 'Offshore Operations'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="transition-colors duration-300 hover:text-[#c5a66e]"
                  style={{ color: '#f1f1f1' }}
                >
                  {language === 'ar' ? 'خدمات الأنابيب' : 'Pipeline Services'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="transition-colors duration-300 hover:text-[#c5a66e]"
                  style={{ color: '#f1f1f1' }}
                >
                  {language === 'ar' ? 'خدمات التفتيش' : 'Inspection Services'}
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="transition-colors duration-300 hover:text-[#c5a66e]"
                  style={{ color: '#f1f1f1' }}
                >
                  {language === 'ar' ? 'خدمات علوم الأرض' : 'Geoscience Services'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Departmental Contact Matrix */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#f1f1f1' }}>
              {language === 'ar' ? 'معلومات الاتصال' : 'Contact Info'}
            </h4>
            <div className="space-y-3 text-sm">
              {/* Updated HQ and Branch Information */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: '#c5a66e' }} />
                <div style={{ color: '#f1f1f1' }}>
                  <div className="mb-1">
                    {language === 'ar' ? '📍 المقر الرئيسي: مدينة الرياض' : 'Headquarters: Riyadh, Saudi Arabia'}
                  </div>
                  <div>
                    {language === 'ar' ? '🏢 الفروع: الدمام - البحرين - الإمارات' : 'Branches: Dammam – Bahrain – UAE'}
                  </div>
                </div>
              </div>
              
              {/* Departmental Email Structure */}
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" style={{ color: '#c5a66e' }} />
                <div className="space-y-2">
                  {/* General Management */}
                  <div>
                    <div className="font-medium mb-1" style={{ color: '#c5a66e' }}>
                      {language === 'ar' ? 'الإدارة العامة' : 'General Management'}
                    </div>
                    <a 
                      href="mailto:info@makamin.com.sa"
                      className="transition-colors duration-300 block hover:text-[#c5a66e]"
                      style={{ color: '#f1f1f1' }}
                    >
                      info@makamin.com.sa
                    </a>
                  </div>
                  
                  {/* Additional Departments */}
                  <div className="text-xs space-y-1" style={{ color: '#f1f1f1' }}>
                    <div className="flex justify-between">
                      <span>{language === 'ar' ? 'التوظيف:' : 'Careers:'}</span>
                      <a 
                        href="mailto:careers@makamin.com.sa"
                        className="transition-colors duration-300 hover:text-[#c5a66e]"
                        style={{ color: '#f1f1f1' }}
                      >
                        careers@makamin.com.sa
                      </a>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'ar' ? 'الإعلام:' : 'Media:'}</span>
                      <a 
                        href="mailto:media@makamin.com.sa"
                        className="transition-colors duration-300 hover:text-[#c5a66e]"
                        style={{ color: '#f1f1f1' }}
                      >
                        media@makamin.com.sa
                      </a>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === 'ar' ? 'التقارير:' : 'Reports:'}</span>
                      <a 
                        href="mailto:report@makamin.com.sa"
                        className="transition-colors duration-300 hover:text-[#c5a66e]"
                        style={{ color: '#f1f1f1' }}
                      >
                        report@makamin.com.sa
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm" style={{ borderColor: '#404040', color: '#f1f1f1' }}>
          <p>
            {language === 'ar' ? 
              '© 2025 شركة مكامن السعودية القابضة. جميع الحقوق محفوظة.' :
              '© 2025 Saudi Makamin Holding Company. All rights reserved.'
            }
          </p>
        </div>
      </div>
    </footer>
  );
}
