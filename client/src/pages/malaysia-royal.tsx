import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { 
  Clock, Building2, MapPin, Mail, Phone, Globe, 
  Crown, Sparkles, Rocket, Zap, ExternalLink
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export default function MalaysiaRoyalPage() {
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
    <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Royal Background with Kuala Lumpur Skyline */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        }}
      />
      
      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* Floating Golden Particles - Reduced for Performance */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: 0
            }}
            animate={{ 
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0]
            }}
            transition={{ 
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Royal Hero Section */}
        <section className="py-20 px-4 lg:px-8">
          <div className="container mx-auto max-w-6xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="bg-black/60 backdrop-blur-xl rounded-3xl p-12 lg:p-16 border border-yellow-500/30 shadow-2xl"
            >
              {/* Royal Crown */}
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="mb-8"
              >
                <Crown className="w-16 h-16 mx-auto text-yellow-400 filter drop-shadow-lg" />
              </motion.div>

              {/* Royal Title */}
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  MAKAMIN
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  OFFSHORE
                </span>
                <span className="block bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 bg-clip-text text-transparent">
                  MALAYSIA
                </span>
              </motion.h1>

              {/* Royal Subtitle */}
              <motion.p
                className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <Sparkles className="inline w-6 h-6 text-yellow-400 mr-2" />
                {language === 'ar' ? 
                  'بوابة العمليات الآسيوية المتطورة - مكتب كوالالمبور' :
                  'Advanced Asian Operations Gateway - Kuala Lumpur Office'
                }
                <Sparkles className="inline w-6 h-6 text-yellow-400 ml-2" />
              </motion.p>

              {/* Live Time Display */}
              <motion.div 
                className="inline-flex items-center space-x-4 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 backdrop-blur-lg rounded-full px-8 py-4 border border-yellow-400/50 mb-10"
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(255, 193, 7, 0.3)',
                    '0 0 40px rgba(255, 193, 7, 0.6)',
                    '0 0 20px rgba(255, 193, 7, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Clock className="h-5 w-5 text-yellow-400" />
                <span className="text-yellow-300 font-mono text-lg font-bold">
                  🇲🇾 Malaysia Time: {currentTime}
                </span>
                <Zap className="h-5 w-5 text-yellow-400" />
              </motion.div>

              {/* Royal Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1 }}
              >
                <motion.a
                  href="https://www.google.com/maps/place/The+Gardens+Mall/@3.1188459,101.6756449,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  {language === 'ar' ? '🗺️ استكشف الموقع' : '🗺️ Explore Location'}
                </motion.a>

                <motion.a
                  href="#contact-section"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  {language === 'ar' ? '🚀 اتصل بنا' : '🚀 Contact Us'}
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Office Details & Contact Section */}
        <section id="contact-section" className="py-16 px-4 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Office Details Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/70 backdrop-blur-xl border border-cyan-500/30 shadow-2xl h-full">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Building2 className="h-6 w-6 mr-3 text-cyan-400" />
                      {language === 'ar' ? '🏢 تفاصيل المكتب' : '🏢 Office Details'}
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4 p-4 bg-cyan-900/20 rounded-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-colors">
                        <MapPin className="h-5 w-5 text-red-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-cyan-200 text-lg">Makamin Offshore (Malaysia) Ltd.</p>
                          <p className="text-gray-300">Suite 33.01, Level 33</p>
                          <p className="text-gray-300">The Gardens North Tower</p>
                          <p className="text-gray-300">Mid Valley City, Lingkaran Syed Putra</p>
                          <p className="text-gray-300">59200 Kuala Lumpur, Malaysia</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4 p-4 bg-blue-900/20 rounded-lg border border-blue-500/20 hover:border-blue-400/40 transition-colors">
                        <Mail className="h-5 w-5 text-blue-400" />
                        <a 
                          href="mailto:malaysia@makamin.com.sa" 
                          className="text-blue-300 hover:text-blue-100 font-mono text-lg transition-colors"
                        >
                          malaysia@makamin.com.sa
                        </a>
                      </div>
                      
                      <div className="flex items-center space-x-4 p-4 bg-green-900/20 rounded-lg border border-green-500/20 hover:border-green-400/40 transition-colors">
                        <Phone className="h-5 w-5 text-green-400" />
                        <span className="text-green-300 font-mono text-lg">+60 3-2282 8888</span>
                      </div>

                      <div className="flex items-center space-x-4 p-4 bg-purple-900/20 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                        <Clock className="h-5 w-5 text-purple-400" />
                        <div>
                          <p className="text-purple-300 font-medium">
                            {language === 'ar' ? 'ساعات العمل:' : 'Business Hours:'}
                          </p>
                          <p className="text-gray-300">Monday - Friday: 8:00 AM - 6:00 PM (MYT)</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/70 backdrop-blur-xl border border-purple-500/30 shadow-2xl h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <Rocket className="h-6 w-6 mr-3 text-purple-400" />
                      {language === 'ar' ? '🚀 تواصل معنا' : '🚀 Contact Us'}
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-cyan-300 font-medium">
                            {language === 'ar' ? 'الاسم' : 'Name'}
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="mt-2 bg-black/50 border-cyan-500/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                            placeholder={language === 'ar' ? 'اسمكم الكريم' : 'Your name'}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-cyan-300 font-medium">
                            {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="mt-2 bg-black/50 border-cyan-500/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                            placeholder={language === 'ar' ? 'بريدكم الإلكتروني' : 'Your email'}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="company" className="text-cyan-300 font-medium">
                          {language === 'ar' ? 'الشركة' : 'Company'}
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="mt-2 bg-black/50 border-cyan-500/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                          placeholder={language === 'ar' ? 'اسم الشركة' : 'Company name'}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="subject" className="text-cyan-300 font-medium">
                          {language === 'ar' ? 'الموضوع' : 'Subject'}
                        </Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          className="mt-2 bg-black/50 border-cyan-500/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400"
                          placeholder={language === 'ar' ? 'موضوع الرسالة' : 'Message subject'}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-cyan-300 font-medium">
                          {language === 'ar' ? 'الرسالة' : 'Message'}
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="mt-2 bg-black/50 border-cyan-500/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-cyan-400 min-h-[100px]"
                          placeholder={language === 'ar' ? 'اكتبوا رسالتكم هنا...' : 'Write your message here...'}
                          required
                        />
                      </div>
                      
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          disabled={submitMutation.isPending}
                          className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                          {submitMutation.isPending ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="mr-2"
                              >
                                ⚡
                              </motion.div>
                              {language === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                            </>
                          ) : (
                            <>
                              <Rocket className="w-5 h-5 mr-2" />
                              {language === 'ar' ? '🚀 إرسال الرسالة' : '🚀 Send Message'}
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Status Indicators */}
        <div className="fixed bottom-6 right-6 z-50 space-y-3">
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 0 15px rgba(34, 197, 94, 0.4)',
                '0 0 25px rgba(34, 197, 94, 0.7)',
                '0 0 15px rgba(34, 197, 94, 0.4)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="bg-green-600/90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg"
          >
            🟢 LIVE
          </motion.div>
          
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                '0 0 15px rgba(59, 130, 246, 0.4)',
                '0 0 25px rgba(59, 130, 246, 0.7)',
                '0 0 15px rgba(59, 130, 246, 0.4)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg"
          >
            🔵 ONLINE
          </motion.div>
        </div>
      </div>
    </div>
  );
}