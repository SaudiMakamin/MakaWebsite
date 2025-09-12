import { motion } from 'framer-motion';
import { useLanguageContext } from '@/components/language-provider';
import makaminLogoPath from '@assets/logo mkamin_1752524503536.png';

interface MakaminLogoShowcaseProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundColor?: string;
  textColor?: string;
}

export default function MakaminLogoShowcase({
  title,
  subtitle,
  description,
  backgroundColor = "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900",
  textColor = "text-white"
}: MakaminLogoShowcaseProps) {
  const { language } = useLanguageContext();

  const defaultTitle = language === 'ar' ? 'مكامن' : 'Makamin';
  const defaultSubtitle = language === 'ar' ? 'السعودية القابضة' : 'Saudi Holding';
  const defaultDescription = language === 'ar' ? 
    'رؤية 2030 – شريك وطني موثوق في مستقبل الطاقة' :
    'Vision 2030 – Trusted National Partner in Energy Future';

  return (
    <section className={`py-20 relative overflow-hidden ${backgroundColor} min-h-[80vh] flex items-center`}>
      {/* Background Effects - بدون دوائر */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20"></div>
        {/* Animated Particles - نقاط صغيرة فقط */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* الشعار بدون أي دوائر أو تأثيرات - مسطح 100% */}
          <motion.div
            className="mx-auto mb-12"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* الشعار مباشرة بدون أي containers دائرية */}
            <img 
              src="/attached_assets/logo mkamin_1752524503536.png"
              alt="شعار مكامن السعودية القابضة"
              className="w-48 h-48 mx-auto object-contain filter brightness-110 hover:brightness-125 transition-all duration-300"
              style={{
                background: 'none',
                borderRadius: '0px',
                border: 'none',
                boxShadow: 'none',
                outline: 'none'
              }}
            />
          </motion.div>

          {/* النص المصاحب */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className={`text-6xl md:text-8xl font-bold mb-8 ${textColor}`}>
              <span className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 bg-clip-text text-transparent">
                {title || defaultTitle}
              </span>
            </h1>
            <h2 className={`text-3xl md:text-4xl font-semibold ${textColor}/90 mb-6`}>
              {subtitle || defaultSubtitle}
            </h2>
            <p className={`text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto leading-relaxed mb-8`}>
              {description || defaultDescription}
            </p>
            
            {/* نص الشعار */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <p className={`text-lg ${textColor}/80 italic leading-relaxed`}>
                {language === 'ar' ? 
                  '"رحلة استثنائية في عالم الطاقة منذ 2008 — من الرؤية إلى التنفيذ بتميز لا مثيل له"' :
                  '"An extraordinary journey in the energy world since 2008 — from vision to execution with unparalleled excellence"'
                }
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}