import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/language-provider';
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

export default function MalaysiaCinematic() {
  const { language } = useLanguage();
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
        title: language === 'ar' ? 'تم الإرسال' : 'Sent Successfully',
        description: language === 'ar' ? 'تم إرسال رسالتك بنجاح' : 'Your message has been sent successfully',
      });
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    },
    onError: () => {
      toast({
        title: language === 'ar' ? 'خطأ' : 'Error',
        description: language === 'ar' ? 'حدث خطأ في الإرسال' : 'There was an error sending your message',
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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Epic Cinematic Background - Kuala Lumpur at Night */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          filter: 'brightness(0.2) contrast(1.5) saturate(1.2)'
        }}
      />
      
      {/* Animated Matrix Rain Effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 text-xs font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: '-20px'
            }}
            animate={{ 
              y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 10
            }}
          >
            {Math.random().toString(36).substring(7)}
          </motion.div>
        ))}
      </div>

      {/* Floating Golden Particles */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg"
            initial={{ 
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000, 
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1000,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              y: [null, typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1000],
              x: [null, typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000],
              opacity: [0, 1, 0.5, 0],
              scale: [0, 1.5, 1, 0],
              rotate: 360
            }}
            transition={{ 
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Rotating Energy Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-cyan-400/30 rounded-full"
            style={{
              width: 150 + i * 80,
              height: 150 + i * 80,
            }}
            animate={{ 
              rotate: i % 2 === 0 ? 360 : -360,
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 15 + i * 3,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Cinematic Hero Section */}
      <section className="relative z-10 py-32 lg:py-40">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="bg-black/50 backdrop-blur-xl rounded-3xl p-16 shadow-2xl border border-cyan-500/30 relative overflow-hidden"
          >
            {/* Pulsing Background Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20 rounded-3xl"
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Magical Crown with Glow */}
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1],
                filter: [
                  'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))',
                  'drop-shadow(0 0 40px rgba(255, 215, 0, 1))',
                  'drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="mb-10"
            >
              <Crown className="w-20 h-20 mx-auto text-yellow-400" />
            </motion.div>

            <motion.h1 
              className="text-6xl lg:text-8xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1.2 }}
            >
              <motion.span 
                className="bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 bg-clip-text text-transparent block"
                animate={{ 
                  backgroundPosition: ['0%', '100%', '0%']
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 100%' }}
              >
                MAKAMIN
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent block"
                animate={{ 
                  backgroundPosition: ['100%', '0%', '100%']
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 100%' }}
              >
                OFFSHORE
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent block"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(16, 185, 129, 0.5)',
                    '0 0 40px rgba(16, 185, 129, 0.8)',
                    '0 0 20px rgba(16, 185, 129, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                MALAYSIA
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mb-10"
            >
              <p className="text-2xl lg:text-3xl text-gray-200 max-w-5xl mx-auto mb-6 leading-relaxed">
                <Sparkles className="inline-block w-8 h-8 text-yellow-400 mr-3 animate-pulse" />
                {language === 'ar' ? 
                  'بوابة العمليات الآسيوية المتطورة - حيث تلتقي التكنولوجيا بالإبداع' :
                  'Advanced Asian Operations Gateway — Where Technology Meets Innovation'
                }
                <Sparkles className="inline-block w-8 h-8 text-yellow-400 ml-3 animate-pulse" />
              </p>
              
              <motion.p 
                className="text-lg text-cyan-300 italic"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {language === 'ar' ? 
                  '🌟 من برجي بتروناس التوأم إلى المستقبل الرقمي 🌟' :
                  '🌟 From Petronas Twin Towers to Digital Future 🌟'
                }
              </motion.p>
            </motion.div>

            {/* Enhanced Live Time Display */}
            <motion.div 
              className="flex items-center justify-center space-x-6 text-xl text-yellow-300 bg-black/50 rounded-full px-8 py-4 backdrop-blur-lg border-2 border-yellow-400/50 mx-auto max-w-fit"
              animate={{ 
                boxShadow: [
                  '0 0 30px rgba(255, 193, 7, 0.4)',
                  '0 0 60px rgba(255, 193, 7, 0.8)',
                  '0 0 30px rgba(255, 193, 7, 0.4)'
                ],
                borderColor: [
                  'rgba(255, 193, 7, 0.5)',
                  'rgba(255, 193, 7, 1)',
                  'rgba(255, 193, 7, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              >
                <Clock className="h-6 w-6" />
              </motion.div>
              <span className="font-mono font-bold text-2xl">🇲🇾 {currentTime}</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  color: ['#fbbf24', '#f59e0b', '#fbbf24']
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Zap className="h-6 w-6" />
              </motion.div>
            </motion.div>

            {/* Floating Action Buttons */}
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row justify-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <motion.a
                href="https://www.google.com/maps/place/The+Gardens+Mall/@3.1188459,101.6756449,17z"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg border border-blue-400/50"
              >
                <MapPin className="w-6 h-6" />
                <span>{language === 'ar' ? '🗺️ استكشف الموقع' : '🗺️ Explore Location'}</span>
              </motion.a>

              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.1, rotateY: -10 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg border border-green-400/50"
              >
                <Rocket className="w-6 h-6" />
                <span>{language === 'ar' ? '🚀 اتصل بنا' : '🚀 Contact Us'}</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Office Details Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Revolutionary Office Card */}
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-black/70 backdrop-blur-xl border-2 border-cyan-500/50 shadow-2xl overflow-hidden">
                <CardContent className="p-10">
                  <motion.div
                    animate={{ 
                      background: [
                        'linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(147, 51, 234, 0.1))',
                        'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))'
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 rounded-lg"
                  />
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                      >
                        <Building2 className="h-8 w-8 mr-4 text-cyan-400" />
                      </motion.div>
                      {language === 'ar' ? '🏢 تفاصيل المكتب الرقمي' : '🏢 Digital Office Details'}
                    </h2>
                    
                    <div className="space-y-6">
                      <motion.div 
                        className="flex items-start space-x-4 p-4 bg-cyan-900/20 rounded-lg border border-cyan-500/30"
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(6, 182, 212, 0.3)' }}
                      >
                        <MapPin className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-cyan-200 text-lg">Makamin Offshore (Malaysia) Ltd.</p>
                          <p className="text-gray-300">Suite 33.01, Level 33</p>
                          <p className="text-gray-300">The Gardens North Tower</p>
                          <p className="text-gray-300">Mid Valley City, Lingkaran Syed Putra</p>
                          <p className="text-gray-300">59200 Kuala Lumpur, Malaysia</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center space-x-4 p-4 bg-blue-900/20 rounded-lg border border-blue-500/30"
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(37, 99, 235, 0.3)' }}
                      >
                        <Mail className="h-6 w-6 text-blue-400" />
                        <a href="mailto:malaysia@makamin.com.sa" className="text-blue-300 hover:text-blue-100 font-mono text-lg">
                          malaysia@makamin.com.sa
                        </a>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center space-x-4 p-4 bg-green-900/20 rounded-lg border border-green-500/30"
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(34, 197, 94, 0.3)' }}
                      >
                        <Phone className="h-6 w-6 text-green-400" />
                        <span className="text-green-300 font-mono text-lg">+60 3-2282 8888</span>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div
              id="contact-form"
              whileHover={{ scale: 1.02, rotateY: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-black/70 backdrop-blur-xl border-2 border-purple-500/50 shadow-2xl overflow-hidden">
                <CardContent className="p-10">
                  <motion.div
                    animate={{ 
                      background: [
                        'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
                        'linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(147, 51, 234, 0.1))'
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 rounded-lg"
                  />
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Rocket className="h-8 w-8 mr-4 text-purple-400" />
                      </motion.div>
                      {language === 'ar' ? '🚀 بوابة الاتصال الرقمية' : '🚀 Digital Contact Gateway'}
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-cyan-300 font-bold">{language === 'ar' ? 'الاسم' : 'Name'}</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="bg-black/50 border-cyan-500/50 text-white placeholder-gray-400 focus:border-cyan-400"
                            placeholder={language === 'ar' ? 'اسمك الكريم' : 'Your name'}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-cyan-300 font-bold">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="bg-black/50 border-cyan-500/50 text-white placeholder-gray-400 focus:border-cyan-400"
                            placeholder={language === 'ar' ? 'بريدك الإلكتروني' : 'Your email'}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="company" className="text-cyan-300 font-bold">{language === 'ar' ? 'الشركة' : 'Company'}</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className="bg-black/50 border-cyan-500/50 text-white placeholder-gray-400 focus:border-cyan-400"
                          placeholder={language === 'ar' ? 'اسم الشركة' : 'Company name'}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="subject" className="text-cyan-300 font-bold">{language === 'ar' ? 'الموضوع' : 'Subject'}</Label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          className="bg-black/50 border-cyan-500/50 text-white placeholder-gray-400 focus:border-cyan-400"
                          placeholder={language === 'ar' ? 'موضوع الرسالة' : 'Message subject'}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-cyan-300 font-bold">{language === 'ar' ? 'الرسالة' : 'Message'}</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="bg-black/50 border-cyan-500/50 text-white placeholder-gray-400 focus:border-cyan-400 min-h-[120px]"
                          placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                          required
                        />
                      </div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          type="submit"
                          disabled={submitMutation.isPending}
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 text-lg"
                        >
                          {submitMutation.isPending ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            >
                              ⚡
                            </motion.div>
                          ) : (
                            <>
                              <Rocket className="w-5 h-5 mr-2" />
                              {language === 'ar' ? '🚀 إرسال عبر البوابة' : '🚀 Send via Gateway'}
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Status Indicators */}
      <div className="fixed bottom-8 right-8 z-50 space-y-4">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 20px rgba(34, 197, 94, 0.5)',
              '0 0 40px rgba(34, 197, 94, 0.8)',
              '0 0 20px rgba(34, 197, 94, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-green-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold"
        >
          🟢 LIVE OPERATIONS
        </motion.div>
        
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 20px rgba(59, 130, 246, 0.5)',
              '0 0 40px rgba(59, 130, 246, 0.8)',
              '0 0 20px rgba(59, 130, 246, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="bg-blue-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold"
        >
          🔵 DIGITAL GATEWAY
        </motion.div>
      </div>
    </div>
  );
}