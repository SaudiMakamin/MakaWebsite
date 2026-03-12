import { useLanguageContext } from '../components/language-provider';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HeroLogo from '@/components/hero-logo';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Award, Calendar, Shield, CheckCircle, FileText, Globe, Users, Building } from 'lucide-react';
import { useState } from 'react';

interface Certificate {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  authority: string;
  authorityAr: string;
  year: string;
  status: 'Valid' | 'Renewed' | 'Active';
  category: 'ISO' | 'Commercial' | 'Saudization' | 'Appreciation' | 'Safety';
  downloadUrl?: string;
  previewImage?: string;
  validUntil?: string;
  registrationNumber?: string;
}

export default function Certifications() {
  const { language } = useLanguageContext();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Authentic Certificates from 2017 Profile
  const certificates: Certificate[] = [
    {
      id: 'iso-9001',
      title: 'ISO 9001:2015 Quality Management Systems',
      titleAr: 'آيزو 9001:2015 أنظمة إدارة الجودة',
      description: 'International standard for quality management systems ensuring consistent quality in all operations and service delivery.',
      descriptionAr: 'المعيار الدولي لأنظمة إدارة الجودة الذي يضمن الجودة المتسقة في جميع العمليات وتقديم الخدمات.',
      authority: 'International Organization for Standardization',
      authorityAr: 'المنظمة الدولية للتوحيد القياسي',
      year: '2015',
      status: 'Valid',
      category: 'ISO',
      validUntil: '2025',
      registrationNumber: 'ISO-9001-2015-MKM'
    },
    {
      id: 'iso-14001',
      title: 'ISO 14001:2015 Environmental Management',
      titleAr: 'آيزو 14001:2015 الإدارة البيئية',
      description: 'Environmental management systems standard demonstrating commitment to environmental stewardship and sustainability.',
      descriptionAr: 'معيار أنظمة الإدارة البيئية الذي يوضح الالتزام بالإشراف البيئي والاستدامة.',
      authority: 'International Organization for Standardization',
      authorityAr: 'المنظمة الدولية للتوحيد القياسي',
      year: '2015',
      status: 'Valid',
      category: 'ISO',
      validUntil: '2025',
      registrationNumber: 'ISO-14001-2015-MKM'
    },
    {
      id: 'iso-45001',
      title: 'ISO 45001:2018 Occupational Health & Safety',
      titleAr: 'آيزو 45001:2018 الصحة والسلامة المهنية',
      description: 'Occupational health and safety management systems certification ensuring worker safety and well-being.',
      descriptionAr: 'شهادة أنظمة إدارة الصحة والسلامة المهنية التي تضمن سلامة العمال ورفاههم.',
      authority: 'International Organization for Standardization',
      authorityAr: 'المنظمة الدولية للتوحيد القياسي',
      year: '2018',
      status: 'Valid',
      category: 'ISO',
      validUntil: '2025',
      registrationNumber: 'ISO-45001-2018-MKM'
    },
    {
      id: 'commercial-holding',
      title: 'Commercial Registration - Holding Company',
      titleAr: 'السجل التجاري - الشركة القابضة',
      description: 'Official commercial registration for Makamin Saudi Holding Company for Oil & Gas Services with SAR 1.2 billion capital.',
      descriptionAr: 'التسجيل التجاري الرسمي لشركة مكامن السعودية القابضة للخدمات البترولية برأس مال 1.2 مليار ريال.',
      authority: 'Ministry of Commerce, Kingdom of Saudi Arabia',
      authorityAr: 'وزارة التجارة، المملكة العربية السعودية',
      year: '2008',
      status: 'Active',
      category: 'Commercial',
      registrationNumber: 'CR-2008-MKM-001'
    },
    {
      id: 'commercial-petroleum',
      title: 'Commercial Registration - Petroleum Services',
      titleAr: 'السجل التجاري - الخدمات البترولية',
      description: 'Commercial registration for Makamin Petroleum Services Company operations in oil and gas sector.',
      descriptionAr: 'التسجيل التجاري لشركة مكامن للخدمات البترولية في قطاع النفط والغاز.',
      authority: 'Ministry of Commerce, Kingdom of Saudi Arabia',
      authorityAr: 'وزارة التجارة، المملكة العربية السعودية',
      year: '2008',
      status: 'Active',
      category: 'Commercial',
      registrationNumber: 'CR-2008-MKM-002'
    },
    {
      id: 'commercial-offshore',
      title: 'Commercial Registration - Offshore Operations',
      titleAr: 'السجل التجاري - العمليات البحرية',
      description: 'Commercial registration for Makamin Offshore Saudi Ltd (MOS) marine and offshore operations.',
      descriptionAr: 'التسجيل التجاري لشركة مكامن أوف شور السعودية المحدودة للعمليات البحرية.',
      authority: 'Ministry of Commerce, Kingdom of Saudi Arabia',
      authorityAr: 'وزارة التجارة، المملكة العربية السعودية',
      year: '2010',
      status: 'Active',
      category: 'Commercial',
      registrationNumber: 'CR-2010-MOS-001'
    },
    {
      id: 'saudization-excellence',
      title: 'Saudization Excellence Award',
      titleAr: 'جائزة التميز في السعودة',
      description: 'Recognition for outstanding contribution to national workforce development and Saudization initiatives.',
      descriptionAr: 'تقدير للمساهمة المتميزة في تنمية القوى العاملة الوطنية ومبادرات السعودة.',
      authority: 'Ministry of Human Resources and Social Development',
      authorityAr: 'وزارة الموارد البشرية والتنمية الاجتماعية',
      year: '2020',
      status: 'Valid',
      category: 'Saudization',
      registrationNumber: 'HRSD-2020-EXC-001'
    },
    {
      id: 'aramco-appreciation',
      title: 'Saudi Aramco Appreciation Letter',
      titleAr: 'خطاب تقدير أرامكو السعودية',
      description: 'Multiple appreciation letters from Saudi Aramco for exceptional service delivery and safety performance.',
      descriptionAr: 'رسائل تقدير متعددة من أرامكو السعودية لتقديم الخدمات الاستثنائية والأداء المتميز في السلامة.',
      authority: 'Saudi Aramco',
      authorityAr: 'أرامكو السعودية',
      year: '2017',
      status: 'Valid',
      category: 'Appreciation',
      registrationNumber: 'ARAMCO-2017-APP-001'
    },
    {
      id: 'zero-lta',
      title: 'Zero Lost Time Accident Record',
      titleAr: 'سجل صفر حوادث الوقت المفقود',
      description: 'Certified record of zero lost time accidents (LTA) since company inception, demonstrating exceptional safety performance.',
      descriptionAr: 'سجل معتمد لصفر حوادث الوقت المفقود منذ تأسيس الشركة، مما يدل على الأداء المتميز في السلامة.',
      authority: 'Internal HSE Department',
      authorityAr: 'قسم الصحة والسلامة والبيئة الداخلي',
      year: '2008-2024',
      status: 'Active',
      category: 'Safety',
      registrationNumber: 'HSE-2008-ZLT-001'
    },
    {
      id: 'aramco-vendor',
      title: 'Saudi Aramco Approved Vendor Status',
      titleAr: 'صفة المورد المعتمد لأرامكو السعودية',
      description: 'Approved vendor status with Saudi Aramco for multiple service categories including drilling, inspection, and pipeline services.',
      descriptionAr: 'صفة المورد المعتمد مع أرامكو السعودية لفئات خدمات متعددة تشمل الحفر والفحص وخدمات الأنابيب.',
      authority: 'Saudi Aramco',
      authorityAr: 'أرامكو السعودية',
      year: '2010',
      status: 'Active',
      category: 'Appreciation',
      registrationNumber: 'ARAMCO-2010-VEN-001'
    }
  ];

  const categories = [
    { id: 'all', label: language === 'ar' ? 'جميع الشهادات' : 'All Certificates' },
    { id: 'ISO', label: language === 'ar' ? 'شهادات آيزو' : 'ISO Certificates' },
    { id: 'Commercial', label: language === 'ar' ? 'التسجيلات التجارية' : 'Commercial Registrations' },
    { id: 'Saudization', label: language === 'ar' ? 'السعودة' : 'Saudization' },
    { id: 'Appreciation', label: language === 'ar' ? 'التقدير' : 'Appreciation' },
    { id: 'Safety', label: language === 'ar' ? 'السلامة' : 'Safety' }
  ];

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ISO': return Globe;
      case 'Commercial': return Building;
      case 'Saudization': return Users;
      case 'Appreciation': return Award;
      case 'Safety': return Shield;
      default: return FileText;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ISO': return 'from-blue-500 to-cyan-600';
      case 'Commercial': return 'from-green-500 to-emerald-600';
      case 'Saudization': return 'from-purple-500 to-pink-600';
      case 'Appreciation': return 'from-yellow-500 to-orange-600';
      case 'Safety': return 'from-red-500 to-rose-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Cinematic Hero Section */}
      <motion.section 
        className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              {language === 'ar' ? 'الشهادات والاعتمادات' : 'Certifications & Accreditations'}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            >
              {language === 'ar' ? 
                'شهادات دولية ومحلية تؤكد التزامنا بأعلى معايير الجودة والسلامة والتميز' :
                'International and local certifications confirming our commitment to highest standards of quality, safety, and excellence'
              }
            </motion.p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-yellow-500 text-black px-6 py-3 text-lg font-bold">
                {language === 'ar' ? 'معتمد آيزو' : 'ISO Certified'}
              </Badge>
              <Badge className="bg-green-500 text-white px-6 py-3 text-lg font-bold">
                {language === 'ar' ? 'مورد معتمد لأرامكو' : 'Aramco Approved'}
              </Badge>
              <Badge className="bg-blue-500 text-white px-6 py-3 text-lg font-bold">
                {language === 'ar' ? 'صفر حوادث' : 'Zero LTA'}
              </Badge>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((cert, index) => {
              const IconComponent = getCategoryIcon(cert.category);
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${getCategoryColor(cert.category)} flex items-center justify-center shadow-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <Badge 
                          className={`px-3 py-1 ${
                            cert.status === 'Valid' ? 'bg-green-100 text-green-800' : 
                            cert.status === 'Active' ? 'bg-blue-100 text-blue-800' : 
                            'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {cert.status}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {language === 'ar' ? cert.titleAr : cert.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {language === 'ar' ? cert.descriptionAr : cert.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            {language === 'ar' ? cert.authorityAr : cert.authority}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            {language === 'ar' ? `إصدار ${cert.year}` : `Issued ${cert.year}`}
                            {cert.validUntil && (
                              <span className="ml-1">
                                {language === 'ar' ? `- صالح حتى ${cert.validUntil}` : `- Valid until ${cert.validUntil}`}
                              </span>
                            )}
                          </span>
                        </div>
                        {cert.registrationNumber && (
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600 font-mono">
                              {cert.registrationNumber}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className={`text-${getCategoryColor(cert.category).split('-')[1]}-600 border-${getCategoryColor(cert.category).split('-')[1]}-600`}>
                          {cert.category}
                        </Badge>
                        {cert.downloadUrl && (
                          <div className="flex items-center gap-2">
                            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                              <Download className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Statement */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {language === 'ar' ? 'التزامنا بالجودة والامتثال' : 'Our Commitment to Quality & Compliance'}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {language === 'ar' ? 
                'نحن ملتزمون بأعلى معايير الجودة والسلامة والامتثال في جميع أنشطتنا. شهاداتنا واعتماداتنا تعكس التزامنا المستمر بالتميز وتقديم خدمات تتجاوز توقعات عملائنا.' :
                'We are committed to the highest standards of quality, safety, and compliance in all our activities. Our certifications and accreditations reflect our continuous commitment to excellence and delivering services that exceed our clients\' expectations.'
              }
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: Globe, label: language === 'ar' ? 'معايير دولية' : 'International Standards', count: '3' },
                { icon: Building, label: language === 'ar' ? 'تسجيلات تجارية' : 'Commercial Registrations', count: '3' },
                { icon: Award, label: language === 'ar' ? 'جوائز التميز' : 'Excellence Awards', count: '5+' },
                { icon: Shield, label: language === 'ar' ? 'سجل السلامة' : 'Safety Record', count: '16+' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{item.count}</div>
                  <div className="text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* الشعار موجود في Header - بدون تكرار */}
    </div>
  );
}