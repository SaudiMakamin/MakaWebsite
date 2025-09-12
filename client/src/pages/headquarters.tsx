import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Mail, Phone, Globe, Building2, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/language-provider';

// Wind particles animation for Saudi flag colors
const WindParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-green-400 rounded-full opacity-60"
      initial={{ 
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight 
      }}
      animate={{
        x: [null, Math.random() * window.innerWidth],
        y: [null, Math.random() * window.innerHeight],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  ));
  return <>{particles}</>;
};

// Wave lines for royal movement
const WaveLines = () => {
  const lines = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"
      style={{
        width: '100%',
        top: `${20 + i * 15}%`,
        left: 0,
      }}
      animate={{
        x: ['-100%', '100%'],
      }}
      transition={{
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  ));
  return <>{lines}</>;
};

// Live Riyadh time
const RiyadhClock = () => {
  const [time, setTime] = useState(new Date());
  const { language } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const riyadhTime = new Date(time.toLocaleString("en-US", {timeZone: "Asia/Riyadh"}));
  const timeString = riyadhTime.toLocaleTimeString('en-US', {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div className="bg-green-900/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 text-center">
      <Clock className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
      <div className="text-yellow-400 font-bold text-lg">{timeString}</div>
      <div className="text-green-300 text-sm">
        {language === 'ar' ? 'الوقت في الرياض' : 'Riyadh Time'}
      </div>
    </div>
  );
};

// Office hours component
const OfficeHours = () => {
  const { language } = useLanguage();
  
  return (
    <div className="bg-yellow-900/20 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-4">
      <Building2 className="h-6 w-6 text-green-400 mb-3" />
      <h3 className="text-green-300 font-bold mb-2">
        {language === 'ar' ? 'ساعات العمل' : 'Office Hours'}
      </h3>
      <div className="text-yellow-300 space-y-1 text-sm">
        <div>{language === 'ar' ? 'الأحد - الخميس' : 'Sunday - Thursday'}</div>
        <div>8:00 AM - 5:00 PM AST</div>
        <div className="text-green-400 text-xs mt-2">
          {language === 'ar' ? 'متاح للاستقبال الآن' : 'Available for Reception'}
        </div>
      </div>
    </div>
  );
};

// Power indicators component
const PowerIndicators = () => {
  const { language } = useLanguage();
  
  const indicators = [
    { 
      value: 'SAR 1.2B', 
      label: language === 'ar' ? 'رأس المال' : 'Capital',
      color: 'text-yellow-400'
    },
    { 
      value: '2008', 
      label: language === 'ar' ? 'التأسيس' : 'Established',
      color: 'text-green-400'
    },
    { 
      value: 'Aramco', 
      label: language === 'ar' ? 'مُعتمد' : 'Approved',
      color: 'text-yellow-400'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {indicators.map((indicator, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-green-900/30 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 text-center"
        >
          <div className={`font-bold text-lg ${indicator.color}`}>
            {indicator.value}
          </div>
          <div className="text-green-300 text-sm">
            {indicator.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default function Headquarters() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Authentic Riyadh skyline background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/attached_assets/hero-carousel-3_1753109091165.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-green-800/70 to-yellow-900/60" />
      </div>

      {/* Animated particles and waves */}
      <WindParticles />
      <WaveLines />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header section with Makamin logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="mb-6">
            <img 
              src="/attached_assets/logo_makamin_clean_1753109098622.png"
              alt="Makamin Logo"
              className="h-16 w-auto mx-auto mb-4"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              {language === 'ar' ? 'المقر الرئيسي' : 'HEADQUARTERS'}
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-yellow-300 mb-2">
            {language === 'ar' ? 'مكامن السعودية القابضة' : 'Saudi Makamin Holding Company'}
          </div>
          
          <div className="text-green-300 text-lg">
            {language === 'ar' ? 'من هنا انطلقت الرحلة... من قلب العاصمة' : 'From here the journey began... from the heart of the capital'}
          </div>
        </motion.div>

        {/* Power indicators */}
        <PowerIndicators />

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left column - Time and hours */}
          <div className="space-y-6">
            <RiyadhClock />
            <OfficeHours />
          </div>

          {/* Right column - Contact information */}
          <div className="bg-white/10 backdrop-blur-sm border border-green-400/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-green-300 mb-6">
              {language === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-green-300 font-semibold">
                    {language === 'ar' ? 'العنوان' : 'Address'}
                  </div>
                  <div className="text-yellow-200 text-sm">
                    {language === 'ar' 
                      ? 'مجمع الكناري، حي الملك فهد، الرياض، المملكة العربية السعودية'
                      : 'Canary Complex, King Fahd District, Riyadh, Saudi Arabia'
                    }
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <div>
                  <div className="text-green-300 font-semibold">
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                  </div>
                  <div className="text-yellow-200 text-sm">info@makamin.com.sa</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <div>
                  <div className="text-green-300 font-semibold">
                    {language === 'ar' ? 'خط الشركة 24/7' : 'Company Line 24/7'}
                  </div>
                  <div className="text-yellow-200 text-sm">+966 56 330 8727</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-yellow-400" />
                <div>
                  <div className="text-green-300 font-semibold">
                    {language === 'ar' ? 'الموقع الإلكتروني' : 'Website'}
                  </div>
                  <div className="text-yellow-200 text-sm">www.makamin.com.sa</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-green-300 mb-6 text-center">
            {language === 'ar' ? 'موقع المقر الرئيسي' : 'Headquarters Location'}
          </h2>
          
          <div className="aspect-video rounded-lg overflow-hidden mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sKing%20Fahd%20District%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter brightness-90"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="flex-1 bg-green-600 hover:bg-green-700 text-white border-0"
              onClick={() => window.open('https://maps.google.com/?q=King+Fahd+District+Riyadh+Saudi+Arabia', '_blank')}
            >
              <MapPin className="h-4 w-4 mr-2" />
              {language === 'ar' ? 'خرائط جوجل' : 'Google Maps'}
            </Button>
            
            <Button 
              className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white border-0"
              onClick={() => window.open('https://maps.google.com/maps?q=King+Fahd+District+Riyadh+Saudi+Arabia&layer=c&cbll=24.7136,46.6753', '_blank')}
            >
              <Globe className="h-4 w-4 mr-2" />
              {language === 'ar' ? 'جولة افتراضية' : 'Street View'}
            </Button>
          </div>
        </motion.div>

        {/* Government recognition section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-gradient-to-r from-green-900/40 to-yellow-900/40 backdrop-blur-sm border border-green-400/30 rounded-lg p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-green-300 mb-6">
            {language === 'ar' ? 'الاعتراف الحكومي' : 'Government Recognition'}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div className="text-center">
              <Star className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-green-300 font-bold">Vision 2030</div>
              <div className="text-yellow-200 text-sm">
                {language === 'ar' ? 'شريك استراتيجي' : 'Strategic Partner'}
              </div>
            </div>
            
            <div className="text-center">
              <Building2 className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-green-300 font-bold">
                {language === 'ar' ? 'وزارة التجارة' : 'Ministry of Commerce'}
              </div>
              <div className="text-yellow-200 text-sm">
                {language === 'ar' ? 'مُسجل' : 'Registered'}
              </div>
            </div>
            
            <div className="text-center">
              <Users className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-green-300 font-bold">Aramco</div>
              <div className="text-yellow-200 text-sm">
                {language === 'ar' ? 'مُعتمد' : 'Approved Vendor'}
              </div>
            </div>
            
            <div className="text-center">
              <Globe className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-green-300 font-bold">ISO</div>
              <div className="text-yellow-200 text-sm">
                {language === 'ar' ? 'معتمد' : 'Certified'}
              </div>
            </div>
          </div>
          
          <div className="text-yellow-300 text-lg font-semibold">
            {language === 'ar' 
              ? 'مقر معتمد حكومياً للعمليات النفطية والغازية في المملكة'
              : 'Government-approved headquarters for oil and gas operations in the Kingdom'
            }
          </div>
        </motion.div>

        {/* Executive leadership contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-8 bg-white/10 backdrop-blur-sm border border-green-400/30 rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-green-300 mb-6 text-center">
            {language === 'ar' ? 'القيادة التنفيذية' : 'Executive Leadership'}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="text-green-300 font-bold text-lg">
                {language === 'ar' ? 'الرئيس التنفيذي' : 'Chief Executive Officer'}
              </div>
              <div className="text-yellow-200">
                {language === 'ar' ? 'عادل عايض النوب' : 'Adel Ayed ALNOOB'}
              </div>
              <div className="text-green-400 text-sm mt-2">ceo@makamin.com.sa</div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <div className="text-green-300 font-bold text-lg">
                {language === 'ar' ? 'رئيس مجلس الإدارة' : 'Chairman of the Board'}
              </div>
              <div className="text-yellow-200">
                {language === 'ar' ? 'عثمان فاضل الموسى' : 'Othman Fadel Al-Mousa'}
              </div>
              <div className="text-green-400 text-sm mt-2">chairman@makamin.com.sa</div>
            </div>
          </div>
        </motion.div>

        {/* Contact form section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-8 bg-white/10 backdrop-blur-sm border border-green-400/30 rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-green-300 mb-6 text-center">
            {language === 'ar' ? 'تواصل مع المقر الرئيسي' : 'Contact Headquarters'}
          </h2>
          
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-green-300 text-sm font-medium mb-2">
                  {language === 'ar' ? 'الاسم الأول' : 'First Name'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white/20 border border-green-400/30 rounded-lg text-white placeholder-green-200 focus:border-yellow-400 focus:outline-none"
                  placeholder={language === 'ar' ? 'أدخل اسمك الأول' : 'Enter your first name'}
                />
              </div>
              
              <div>
                <label className="block text-green-300 text-sm font-medium mb-2">
                  {language === 'ar' ? 'اسم العائلة' : 'Last Name'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-white/20 border border-green-400/30 rounded-lg text-white placeholder-green-200 focus:border-yellow-400 focus:outline-none"
                  placeholder={language === 'ar' ? 'أدخل اسم العائلة' : 'Enter your last name'}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-green-300 text-sm font-medium mb-2">
                {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-white/20 border border-green-400/30 rounded-lg text-white placeholder-green-200 focus:border-yellow-400 focus:outline-none"
                placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
              />
            </div>
            
            <div>
              <label className="block text-green-300 text-sm font-medium mb-2">
                {language === 'ar' ? 'الرسالة' : 'Message'}
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 bg-white/20 border border-green-400/30 rounded-lg text-white placeholder-green-200 focus:border-yellow-400 focus:outline-none"
                placeholder={language === 'ar' ? 'أدخل رسالتك هنا' : 'Enter your message here'}
              />
            </div>
            
            <Button className="w-full bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 text-white font-bold py-3 border-0">
              {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}