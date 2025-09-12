import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Clock, Building2, Globe, Mail, Phone, ExternalLink, Crown, Shield, Award } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

import canaryImage1 from '@assets/لقطة الشاشة 2025-07-21 172931_1753108389198.jpg';
import canaryImage2 from '@assets/لقطة الشاشة 2025-07-21 172958_1753108389198.jpg';
import canaryImage3 from '@assets/لقطة الشاشة 2025-07-21 173018_1753108389199.jpg';
import canaryExterior from '@assets/CDDhkW3UsAA-H3S_1753108448250.jpg';
import ministryLogo from '@assets/Logo_Ministry_of_Commerce.svg_1753108428370.png';
import visionLogo from '@assets/Saudi_Vision_2030_logo.svg_1753108438629.png';

export default function RiyadhHeadquarters() {
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

  // Saudi Arabia time update
  useEffect(() => {
    const updateTime = () => {
      const saudiTime = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Riyadh',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        weekday: 'long'
      });
      setCurrentTime(saudiTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest('POST', '/api/contact', {
        ...data,
        branch: 'Riyadh Headquarters'
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: language === 'ar' ? "تم إرسال الرسالة بنجاح" : "Message sent successfully",
        description: language === 'ar' ? "سيتواصل معك فريق المقر الرئيسي قريباً" : "Our headquarters team will contact you soon",
      });
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    },
    onError: () => {
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-gold-50">
      {/* Hero Section with Saudi Flag Colors */}
      <section className="relative bg-gradient-to-r from-green-600 via-white to-green-600 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-green-600">مكامن</span>{' '}
              <span className="text-black">السعودية</span>{' '}
              <span className="text-gold-600">القابضة</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
              <span className="text-green-700">Makamin Saudi Holding</span>{' '}
              <span className="text-gray-800">Headquarters</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-4">
              {language === 'ar' ? 
                'المقر الرئيسي - قلب الإدارة والقيادة الاستراتيجية لأعمال النفط والغاز في المملكة' :
                'Headquarters - Strategic Command Center for Oil & Gas Operations in the Kingdom'
              }
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-6">
              <Clock className="h-4 w-4" />
              <span className="font-mono">{currentTime} (Riyadh Time)</span>
            </div>
            <div className="text-center">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                {language === 'ar' ? 'من هنا انطلقت الرحلة... من قلب العاصمة' : 'From here the journey began... from the heart of the capital'}
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Headquarters Details */}
          <div className="space-y-8">
            {/* Main Office Card */}
            <Card className="shadow-2xl border-l-4 border-l-green-600">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Building2 className="h-6 w-6 mr-3 text-green-600" />
                  {language === 'ar' ? 'تفاصيل المقر الرئيسي' : 'Headquarters Details'}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Makamin Saudi Holding Company</p>
                      <p className="text-gray-600">Canary Business Complex</p>
                      <p className="text-gray-600">Riyadh, Kingdom of Saudi Arabia</p>
                      <p className="text-sm text-gray-500 mt-1">CR: 1010251168</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div className="space-y-1">
                      <a href="mailto:hq@makamin.com.sa" className="text-blue-600 hover:text-blue-800 block">
                        hq@makamin.com.sa
                      </a>
                      <a href="mailto:info@makamin.com.sa" className="text-blue-600 hover:text-blue-800 block">
                        info@makamin.com.sa
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">+966 13 805 5966</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Power Indicators - Government Recognition */}
            <Card className="shadow-2xl border-l-4 border-l-gold-500">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <Crown className="h-5 w-5 mr-3 text-gold-600" />
                  {language === 'ar' ? 'مؤشرات القوة والاعتماد' : 'Power & Recognition Indicators'}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <img src={ministryLogo} alt="Ministry of Commerce" className="w-12 h-12" />
                    <div>
                      <p className="font-semibold text-sm text-green-800">
                        {language === 'ar' ? 'وزارة التجارة' : 'Ministry of Commerce'}
                      </p>
                      <p className="text-xs text-gray-600">
                        {language === 'ar' ? 'مرخص رسمياً' : 'Officially Licensed'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                    <img src={visionLogo} alt="Saudi Vision 2030" className="w-12 h-12" />
                    <div>
                      <p className="font-semibold text-sm text-blue-800">
                        {language === 'ar' ? 'رؤية 2030' : 'Vision 2030'}
                      </p>
                      <p className="text-xs text-gray-600">
                        {language === 'ar' ? 'شريك استراتيجي' : 'Strategic Partner'}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-gold-50 rounded-lg">
                    <Shield className="h-6 w-6 text-gold-600 mx-auto mb-2" />
                    <p className="text-xs font-semibold text-gold-800">SAR 1.2B Capital</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <Award className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <p className="text-xs font-semibold text-green-800">Aramco Approved</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <Building2 className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-xs font-semibold text-blue-800">Since 2008</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Links */}
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  {language === 'ar' ? 'استكشف المقر' : 'Explore Headquarters'}
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://www.google.com/maps/place/Canary+Complex,+Riyadh/@24.7136,46.6520,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-green-600" />
                      <span className="font-medium text-green-800">Google Maps - Canary Complex</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-green-600" />
                  </a>
                  <a
                    href="https://www.google.com/maps/@24.7136,46.6520,3a,75y,90h,90t/data=!3m6!1e1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <Globe className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-blue-800">
                        {language === 'ar' ? 'جولة افتراضية - Street View' : 'Virtual Tour - Street View'}
                      </span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-blue-600" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Office Gallery */}
            <Card className="shadow-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {language === 'ar' ? 'معرض صور المجمع' : 'Complex Photo Gallery'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <img src={canaryImage1} alt="Canary Complex Interior 1" className="w-full h-32 object-cover rounded-lg shadow-md" />
                  <img src={canaryImage2} alt="Canary Complex Interior 2" className="w-full h-32 object-cover rounded-lg shadow-md" />
                  <img src={canaryImage3} alt="Canary Complex Interior 3" className="w-full h-32 object-cover rounded-lg shadow-md" />
                  <img src={canaryExterior} alt="Canary Complex Exterior" className="w-full h-32 object-cover rounded-lg shadow-md" />
                </div>
              </CardContent>
            </Card>

            {/* Embedded Google Maps */}
            <Card className="shadow-2xl">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {language === 'ar' ? 'الخريطة التفاعلية' : 'Interactive Map'}
                </h3>
                <div className="relative w-full h-96 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.3196348658516!2d46.65084711500183!3d24.71355298411543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f033ee0e4cf01%3A0x2d831624ccfbc76f!2sCanary%20Complex!5e0!3m2!1sen!2ssa!4v1721538000000!5m2!1sen!2ssa"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Makamin Headquarters Location - Canary Complex Riyadh"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="shadow-2xl border-l-4 border-l-green-500">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {language === 'ar' ? 'تواصل مع المقر الرئيسي' : 'Contact Headquarters'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">
                      {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700">
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
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
                    <Label htmlFor="company" className="text-gray-700">
                      {language === 'ar' ? 'الشركة' : 'Company'}
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
                    <Label htmlFor="subject" className="text-gray-700">
                      {language === 'ar' ? 'الموضوع' : 'Subject'}
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-gray-700">
                      {language === 'ar' ? 'الرسالة' : 'Message'}
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
                    className="w-full bg-gradient-to-r from-green-600 to-gold-600 hover:from-green-700 hover:to-gold-700 text-white"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? 
                      (language === 'ar' ? 'جاري الإرسال...' : 'Sending...') : 
                      (language === 'ar' ? 'إرسال الرسالة' : 'Send Message')
                    }
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Hours & Leadership */}
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  {language === 'ar' ? 'ساعات العمل والقيادة' : 'Office Hours & Leadership'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-800">
                        {language === 'ar' ? 'ساعات العمل:' : 'Business Hours:'}
                      </p>
                      <p className="text-gray-600">Sunday - Thursday: 8:00 AM - 5:00 PM (AST)</p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-medium text-gray-800 mb-2">
                      {language === 'ar' ? 'القيادة التنفيذية:' : 'Executive Leadership:'}
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• {language === 'ar' ? 'عادل عايض النوب - الرئيس التنفيذي' : 'Adel Ayed ALNOOB - Chief Executive Officer'}</li>
                      <li>• {language === 'ar' ? 'عثمان فاضل الموسى - رئيس مجلس الإدارة' : 'Othman Fadel Al-Mousa - Chairman'}</li>
                      <li>• {language === 'ar' ? 'إبراهيم أحمد الغامدي - نائب الرئيس' : 'Ibrahim Ahmed Al-Ghamdi - Vice Chairman'}</li>
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <p className="font-medium text-gray-800 mb-2">
                      {language === 'ar' ? 'الأقسام الرئيسية:' : 'Main Departments:'}
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• {language === 'ar' ? 'إدارة الشركات التابعة' : 'Subsidiary Management'}</li>
                      <li>• {language === 'ar' ? 'علاقات المستثمرين' : 'Investor Relations'}</li>
                      <li>• {language === 'ar' ? 'التطوير الاستراتيجي' : 'Strategic Development'}</li>
                      <li>• {language === 'ar' ? 'الشؤون القانونية' : 'Legal Affairs'}</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}