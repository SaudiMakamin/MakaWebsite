import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Printer, Mail, Globe, Clock, AlertTriangle } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

import makaminFlags from '@assets/hero-carousel-3_1753109091165.jpg';
import HeroLogo from '@/components/hero-logo';

export default function Contact() {
  const { t, language } = useLanguageContext();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: language === 'ar' ? "تم إرسال الرسالة بنجاح" : "Message sent successfully",
        description: language === 'ar' ? "سنتواصل معك قريباً" : "We'll get back to you soon",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    },
    onError: (error) => {
      toast({
        title: language === 'ar' ? "خطأ في إرسال الرسالة" : "Failed to send message",
        description: language === 'ar' ? "يرجى المحاولة مرة أخرى" : "Please try again",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      <SemanticMetadata page="contact" />
      <EnhancedSecurity />
      {/* Hero Section with Makamin Flags Background */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${makaminFlags})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Animated wind particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Wave motion lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
              style={{
                left: '0',
                right: '0',
                top: `${20 + i * 15}%`,
                transform: `translateX(${Math.sin(i * 0.5) * 20}px)`,
                animation: `wave 4s ease-in-out infinite ${i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center">
            <HeroLogo size="md" />

            {/* Contact Us Title with Cinematic Effects */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                {t('contactTitle')}
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-makamin-blue to-white mx-auto mb-6 rounded-full"></div>
              <p className="text-xl lg:text-2xl text-white/90 font-medium drop-shadow-lg">
                {language === 'ar' ? (
                  <>
                    المقر الرئيسي - الرياض<br />
                    <span className="text-lg text-blue-200">مجمع كناري، المملكة العربية السعودية</span>
                  </>
                ) : (
                  <>
                    Headquarters - Riyadh<br />
                    <span className="text-lg text-blue-200">Canary Complex, Saudi Arabia</span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes wave {
            0%, 100% { transform: translateX(0px) scaleX(1); }
            50% { transform: translateX(20px) scaleX(1.1); }
          }
        `}</style>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg border border-gray-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold makamin-blue mb-6">
                  {t('sendMessage')}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-makamin-gray">
                        {t('firstName')}
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-makamin-gray">
                        {t('lastName')}
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-makamin-gray">
                      {t('email')}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-makamin-gray">
                      {t('company')}
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-makamin-gray">
                      {t('subject')}
                    </Label>
                    <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder={t('subject')} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">{t('generalInquiry')}</SelectItem>
                        <SelectItem value="business">{t('businessPartnership')}</SelectItem>
                        <SelectItem value="career">{t('careerOpportunities')}</SelectItem>
                        <SelectItem value="technical">{t('technicalSupport')}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-makamin-gray">
                      {t('message')}
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-makamin-blue hover:bg-blue-600"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? t('loading') : t('sendBtn')}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 contact-information contact-info-block" data-contact-info>
              {/* Main Office */}
              <Card className="shadow-lg border border-gray-100">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold makamin-blue mb-6">
                    {language === 'ar' ? 'المقر الرئيسي - الرياض' : 'Headquarters - Riyadh'}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-makamin-light p-2 rounded-lg">
                        <MapPin className="h-5 w-5 makamin-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold makamin-blue mb-1">{t('address')}</h4>
                        <p className="text-makamin-gray">
                          {language === 'ar' ? (
                            <>
                              الرياض – مجمع كناري<br />
                              المملكة العربية السعودية
                            </>
                          ) : (
                            <>
                              Riyadh – Canary Complex<br />
                              Saudi Arabia
                            </>
                          )}
                        </p>
                        <div className="flex space-x-4 mt-2">
                          <a 
                            href="https://share.google/dlRaeCu6u4gJMBMvM" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-makamin-blue hover:text-blue-600 text-sm"
                          >
                            {language === 'ar' ? 'عرض على الخريطة' : 'View on Map'}
                          </a>
                          <span className="text-xs text-gray-500">|</span>
                          <a 
                            href="/headquarters" 
                            className="text-makamin-blue hover:text-blue-600 text-sm"
                          >
                            {language === 'ar' ? 'صفحة المقر الكاملة' : 'Full Headquarters Page'}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-makamin-light p-2 rounded-lg">
                        <Globe className="h-5 w-5 makamin-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold makamin-blue mb-1">{t('website')}</h4>
                        <a 
                          href="https://www.makamin.com.sa" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-makamin-blue hover:text-blue-600"
                        >
                          www.makamin.com.sa
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-makamin-light p-2 rounded-lg">
                        <Mail className="h-5 w-5 makamin-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold makamin-blue mb-1">{language === 'ar' ? 'دليل البريد الإلكتروني' : 'Email Directory'}</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="text-makamin-gray">{language === 'ar' ? 'الإدارة العامة:' : 'General Management:'}</span>
                            <a href="mailto:info@makamin.com.sa" className="text-makamin-blue hover:text-blue-600 ml-2">
                              info@makamin.com.sa
                            </a>
                          </div>
                          <div>
                            <span className="text-makamin-gray">{language === 'ar' ? 'التوظيف:' : 'Careers:'}</span>
                            <a href="mailto:careers@makamin.com.sa" className="text-makamin-blue hover:text-blue-600 ml-2">
                              careers@makamin.com.sa
                            </a>
                          </div>
                          <div>
                            <span className="text-makamin-gray">{language === 'ar' ? 'الإعلام:' : 'Media:'}</span>
                            <a href="mailto:media@makamin.com.sa" className="text-makamin-blue hover:text-blue-600 ml-2">
                              media@makamin.com.sa
                            </a>
                          </div>
                          <div>
                            <span className="text-makamin-gray">{language === 'ar' ? 'الاستثمار:' : 'Investment:'}</span>
                            <a href="mailto:invest@makamin.com.sa" className="text-makamin-blue hover:text-blue-600 ml-2">
                              invest@makamin.com.sa
                            </a>
                          </div>
                          <div>
                            <span className="text-makamin-gray">{language === 'ar' ? 'الشكاوى:' : 'Reports:'}</span>
                            <a href="mailto:report@makamin.com.sa" className="text-makamin-blue hover:text-blue-600 ml-2">
                              report@makamin.com.sa
                            </a>
                          </div>
                          <div>
                            <span className="text-makamin-gray">{language === 'ar' ? 'الدعم الفني:' : 'Web Support:'}</span>
                            <a href="mailto:web@makamin.com.sa" className="text-makamin-blue hover:text-blue-600 ml-2">
                              web@makamin.com.sa
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Saudi Arabia Branches */}
              <Card className="shadow-lg border border-gray-100">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold makamin-blue mb-6">
                    {language === 'ar' ? 'الفروع السعودية' : 'Saudi Arabia Branches'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-makamin-blue rounded-full"></div>
                      <span className="text-makamin-gray">{language === 'ar' ? 'فرع الخبر - رقم السجل: 2051038139' : 'Khobar Branch - CR: 2051038139'}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-makamin-blue rounded-full"></div>
                      <span className="text-makamin-gray">{language === 'ar' ? 'مكامن للخدمات البترولية - رقم السجل: 2050048513' : 'Makamin Petroleum Services - CR: 2050048513'}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-makamin-blue rounded-full"></div>
                      <span className="text-makamin-gray">{language === 'ar' ? 'مكامن أوف شور السعودية - رقم السجل: 2050077238' : 'Makamin Offshore Saudi - CR: 2050077238'}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-makamin-blue rounded-full"></div>
                      <span className="text-makamin-gray">{language === 'ar' ? 'فرع الدمام - عمليات إقليمية' : 'Dammam Branch - Regional Operations'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* International Branches */}
              <Card className="shadow-lg border border-gray-100">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold makamin-blue mb-6">
                    {language === 'ar' ? 'الفروع الدولية' : 'International Branches'}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-makamin-gray">{language === 'ar' ? 'البحرين - مكامن البحرين للاستثمار' : 'Bahrain - Makamin Bahrain Investment'}</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <span className="text-makamin-gray font-semibold block">
                          {language === 'ar' ? 'ماليزيا - مكامن أوف شور (ماليزيا) المحدودة' : 'Malaysia - Makamin Offshore (Malaysia) Ltd.'}
                        </span>
                        <div className="text-sm text-gray-600 mt-1 space-y-1">
                          <div>Suite 33.01, Level 33, The Gardens North Tower</div>
                          <div>Mid Valley City, Lingkaran Syed Putra</div>
                          <div>59200 Kuala Lumpur, Malaysia</div>
                          <a 
                            href="https://www.google.com/maps/place/The+Gardens+Mall/@3.1188459,101.6756449,17z" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-makamin-blue hover:text-blue-600 text-xs inline-block mt-2"
                          >
                            {language === 'ar' ? 'عرض في Google Maps' : 'View on Google Maps'}
                          </a>
                          <span className="text-xs text-gray-500 mx-2">|</span>
                          <a 
                            href="/malaysia" 
                            className="text-makamin-blue hover:text-blue-600 text-xs"
                          >
                            {language === 'ar' ? 'صفحة الفرع الكاملة' : 'Full Branch Page'}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-makamin-gray">{language === 'ar' ? 'الإمارات العربية المتحدة' : 'United Arab Emirates'}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-makamin-gray">{language === 'ar' ? 'الصين' : 'China'}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-makamin-gray">{language === 'ar' ? 'الكويت' : 'Kuwait'}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-red-50 border border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    {language === 'ar' ? 'اتصال الطوارئ' : 'Emergency Contact'}
                  </h3>
                  <p className="text-red-600 text-sm mb-2">
                    {language === 'ar' ? 
                      'لدعم العمليات البحرية العاجلة:' : 
                      'For urgent offshore operations support:'
                    }
                  </p>
                  <p className="text-red-700 font-semibold">24/7 Emergency Line: +966 56 330 8727</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* الشعار موجود في Header - بدون تكرار */}
    </div>
  );
}
