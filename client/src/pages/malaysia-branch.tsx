import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { 
  Clock, Building2, MapPin, Mail, Phone, Globe, 
  Crown, Sparkles, Rocket, Zap, ExternalLink, Camera
} from 'lucide-react';
import makaminLogo from '@assets/logo_makamin_clean_1753109383943.png';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export default function MalaysiaBranch() {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [currentTime, setCurrentTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  // Update Malaysia time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const malaysiaTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kuala_Lumpur',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      setCurrentTime(malaysiaTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const submitMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
    },
    onSuccess: () => {
      toast({
        title: language === 'ar' ? 'تم الإرسال بنجاح' : 'Message Sent Successfully',
        description: language === 'ar' ? 'شكراً لتواصلكم معنا' : 'Thank you for contacting us',
      });
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    },
    onError: () => {
      toast({
        title: language === 'ar' ? 'خطأ في الإرسال' : 'Sending Error',
        description: language === 'ar' ? 'يرجى المحاولة مرة أخرى' : 'Please try again',
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen relative">
      {/* Hero Section with Kuala Lumpur Background */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        }}
      >
        {/* Elegant Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        
        {/* Floating Wind Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
              initial={{ 
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                scale: 0
              }}
              animate={{ 
                x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
                y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0]
              }}
              transition={{ 
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>

        {/* Wave Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: 0,
                right: 0
              }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 lg:p-16 border border-white/20 shadow-2xl"
          >
            {/* Makamin Logo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <img 
                src={makaminLogo} 
                alt="Makamin Logo" 
                className="w-24 h-24 mx-auto object-contain"
              />
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <span className="block text-blue-500">MAKAMIN</span>
              <span className="block text-blue-500">OFFSHORE</span>
              <span className="block text-yellow-400">MALAYSIA</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              {language === 'ar' ? 
                'مكتب كوالالمبور - بوابة العمليات الآسيوية المتطورة' :
                'Kuala Lumpur Office - Advanced Asian Operations Gateway'
              }
            </motion.p>

            {/* Live Time */}
            <motion.div 
              className="inline-flex items-center space-x-4 bg-black/30 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Clock className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-mono text-lg">
                🇲🇾 {currentTime} Malaysia Time
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <a
                href="https://www.google.com/maps/place/The+Gardens+Mall/@3.1188459,101.6756449,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600/80 hover:bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <MapPin className="w-5 h-5 mr-2" />
                {language === 'ar' ? 'عرض الخريطة' : 'View on Map'}
              </a>

              <a
                href="https://www.google.com/maps/@3.1188459,101.6756449,3a,75y,90t/data=!3m7!1e1!3m5!1s-"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600/80 hover:bg-green-600 text-white rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <Camera className="w-5 h-5 mr-2" />
                {language === 'ar' ? 'جولة افتراضية' : 'Street View'}
              </a>

              <a
                href="#contact-form"
                className="inline-flex items-center px-6 py-3 bg-purple-600/80 hover:bg-purple-600 text-white rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                {language === 'ar' ? 'اتصل بنا' : 'Contact Us'}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Office Details Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {language === 'ar' ? 'مكتب كوالالمبور' : 'Kuala Lumpur Office'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'ar' ? 
                'يقع مكتبنا في قلب كوالالمبور، في برج الحدائق الشمالي بمدينة الوادي الأوسط' :
                'Located in the heart of Kuala Lumpur, at The Gardens North Tower in Mid Valley City'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Office Photos Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="Kuala Lumpur Office Interior"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-bold">Modern Office Space</h3>
                      <p className="text-sm opacity-90">Level 33, The Gardens North Tower</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <img 
                        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        alt="Conference Room"
                        className="w-full h-24 object-cover rounded-lg border"
                      />
                      <img 
                        src="https://images.unsplash.com/photo-1497366412874-3415097a27e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                        alt="Office Reception"
                        className="w-full h-24 object-cover rounded-lg border"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-xl border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                    <Building2 className="h-6 w-6 mr-3 text-blue-600" />
                    {language === 'ar' ? 'معلومات المكتب' : 'Office Information'}
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <MapPin className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-blue-800">Makamin Offshore (Malaysia) Ltd.</p>
                        <p className="text-gray-700">Suite 33.01, Level 33</p>
                        <p className="text-gray-700">The Gardens North Tower</p>
                        <p className="text-gray-700">Mid Valley City, Lingkaran Syed Putra</p>
                        <p className="text-gray-700">59200 Kuala Lumpur, Malaysia</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-100">
                      <Mail className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-gray-800">Email</p>
                        <a 
                          href="mailto:malaysia@makamin.com.sa" 
                          className="text-green-600 hover:text-green-700 transition-colors"
                        >
                          malaysia@makamin.com.sa
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg border border-purple-100">
                      <Phone className="h-5 w-5 text-purple-600" />
                      <div>
                        <p className="font-medium text-gray-800">Phone</p>
                        <p className="text-purple-600">+60 3-2282 8888</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
                      <Clock className="h-5 w-5 text-amber-600" />
                      <div>
                        <p className="font-medium text-gray-800">
                          {language === 'ar' ? 'ساعات العمل' : 'Business Hours'}
                        </p>
                        <p className="text-amber-600">Monday - Friday: 8:00 AM - 6:00 PM (MYT)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {language === 'ar' ? 'موقع المكتب' : 'Office Location'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 
                'العثور علينا في قلب كوالالمبور' :
                'Find us in the heart of Kuala Lumpur'
              }
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0978367886547!2d101.6756449!3d3.1188459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49c701efeae7%3A0x46fd0804ef0b1559!2sThe%20Gardens%20Mall!5e0!3m2!1sen!2smy!4v1642592070213!5m2!1sen!2smy"
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Makamin Malaysia Office Location"
            />
          </div>

          <div className="mt-8 text-center">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://www.google.com/maps/place/The+Gardens+Mall/@3.1188459,101.6756449,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                {language === 'ar' ? 'فتح في خرائط جوجل' : 'Open in Google Maps'}
              </a>
              
              <a
                href="https://www.google.com/maps/@3.1188459,101.6756449,3a,75y,90t/data=!3m7!1e1!3m5!1s-"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
              >
                <Camera className="w-5 h-5 mr-2" />
                {language === 'ar' ? 'عرض الشارع' : 'Street View'}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h2>
            <p className="text-xl text-gray-600">
              {language === 'ar' ? 
                'نحن هنا لمساعدتكم في جميع استفساراتكم' :
                'We are here to help you with all your inquiries'
              }
            </p>
          </div>

          <Card className="bg-white shadow-2xl border-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">
                      {language === 'ar' ? 'الاسم' : 'Name'}
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder={language === 'ar' ? 'اسمكم الكريم' : 'Your name'}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      placeholder={language === 'ar' ? 'بريدكم الإلكتروني' : 'Your email'}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-gray-700 font-medium">
                    {language === 'ar' ? 'الشركة' : 'Company'}
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={language === 'ar' ? 'اسم الشركة' : 'Company name'}
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-gray-700 font-medium">
                    {language === 'ar' ? 'الموضوع' : 'Subject'}
                  </Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    placeholder={language === 'ar' ? 'موضوع الرسالة' : 'Message subject'}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    {language === 'ar' ? 'الرسالة' : 'Message'}
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-2 border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                    placeholder={language === 'ar' ? 'اكتبوا رسالتكم هنا...' : 'Write your message here...'}
                    required
                  />
                </div>
                
                <div className="text-center">
                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 text-lg"
                  >
                    {submitMutation.isPending ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="mr-2"
                        >
                          <Zap className="w-5 h-5" />
                        </motion.div>
                        {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        <Rocket className="w-5 h-5 mr-2" />
                        {language === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}