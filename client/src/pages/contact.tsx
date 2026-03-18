import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Globe, AlertTriangle, Phone, Copy, Check } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';

import makaminFlags from '@assets/hero-carousel-3_1753109091165.jpg';
import HeroLogo from '@/components/hero-logo';

export default function Contact() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@makamin.com.sa');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen">
      <SemanticMetadata page="contact" />
      <EnhancedSecurity />

      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${makaminFlags})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${(i * 7.3) % 100}%`,
                top: `${(i * 6.7) % 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${3 + (i % 3) * 0.7}s`
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center">
            <HeroLogo size="md" />
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                {isAr ? 'تواصل مع مكامن' : 'Contact Makamin'}
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-makamin-blue to-white mx-auto mb-6 rounded-full" />
              <p className="text-lg text-white/90 mb-3 leading-relaxed">
                {isAr
                  ? 'نرحب بالاستفسارات التجارية وفرص الشراكة وطلبات الإعلام والتواصل العام عبر القنوات الرسمية لمكامن.'
                  : "We welcome business inquiries, partnership opportunities, media requests, and general communication through Makamin's official contact channels."}
              </p>
              <p className="text-base text-blue-200 leading-relaxed">
                {isAr
                  ? 'للاستفسارات العامة، يرجى استخدام بريدنا الإلكتروني الرسمي أدناه. للشؤون المتخصصة، يمكنكم التواصل مع الإدارة المعنية مباشرة.'
                  : 'For general inquiries, please use our official email below. For specialized matters, you may contact the relevant department directly.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">

          {/* 1. General Inquiries */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold makamin-blue mb-4">
              {isAr ? 'الاستفسارات العامة' : 'General Inquiries'}
            </h2>
            <Card className="shadow-lg border border-gray-100">
              <CardContent className="p-8">
                <p className="text-makamin-gray mb-5">
                  {isAr
                    ? 'للاستفسارات التجارية وفرص الشراكة والتواصل العام، يرجى التواصل معنا عبر بريدنا الإلكتروني الرسمي:'
                    : 'For business inquiries, partnership opportunities, and general communication, please contact us via our official email:'}
                </p>
                <a
                  href="mailto:info@makamin.com.sa"
                  className="text-2xl font-semibold makamin-blue hover:text-blue-600 block mb-6"
                >
                  info@makamin.com.sa
                </a>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-makamin-blue hover:bg-blue-600">
                    <a href="mailto:info@makamin.com.sa">
                      <Mail className="w-4 h-4 mr-2" />
                      {isAr ? 'إرسال بريد إلكتروني' : 'Send Email'}
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleCopyEmail}
                    className="border-makamin-blue text-makamin-blue hover:bg-blue-50"
                  >
                    {copied
                      ? <Check className="w-4 h-4 mr-2" />
                      : <Copy className="w-4 h-4 mr-2" />}
                    {copied
                      ? (isAr ? 'تم النسخ!' : 'Copied!')
                      : (isAr ? 'نسخ البريد' : 'Copy Email')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 2. Headquarters */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold makamin-blue mb-4">
              {isAr ? 'المقر الرئيسي - الرياض' : 'Headquarters – Riyadh'}
            </h2>
            <Card className="shadow-lg border border-gray-100">
              <CardContent className="p-8">
                <p className="text-sm text-gray-500 mb-5">
                  {isAr
                    ? 'المعلومات الرسمية للمقر الرئيسي لمكامن في الرياض.'
                    : 'Official headquarters information for Makamin in Riyadh.'}
                </p>
                <div className="flex items-start space-x-4">
                  <div className="bg-makamin-light p-2 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 makamin-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold makamin-blue mb-1">
                      {isAr ? 'العنوان' : 'Address'}
                    </h4>
                    <p className="text-makamin-gray">
                      {isAr ? (
                        <>الرياض – مجمع كناري<br />المملكة العربية السعودية</>
                      ) : (
                        <>Riyadh – Canary Complex<br />Saudi Arabia</>
                      )}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <a
                        href="https://share.google/dlRaeCu6u4gJMBMvM"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-makamin-blue hover:text-blue-600 text-sm"
                      >
                        {isAr ? 'عرض على الخريطة' : 'View on Map'}
                      </a>
                      <span className="text-xs text-gray-400">|</span>
                      <a
                        href="/headquarters"
                        className="text-makamin-blue hover:text-blue-600 text-sm"
                      >
                        {isAr ? 'صفحة المقر الكاملة' : 'Full Headquarters Page'}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 mt-5 pt-5 border-t border-gray-100">
                  <div className="bg-makamin-light p-2 rounded-lg flex-shrink-0">
                    <Globe className="h-5 w-5 makamin-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold makamin-blue mb-1">
                      {isAr ? 'الموقع الإلكتروني' : 'Website'}
                    </h4>
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
              </CardContent>
            </Card>
          </div>

          {/* 3. Department Contacts */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold makamin-blue mb-4">
              {isAr ? 'جهات الاتصال بالأقسام' : 'Department Contacts'}
            </h2>
            <Card className="shadow-lg border border-gray-100">
              <CardContent className="p-8">
                <p className="text-makamin-gray mb-5">
                  {isAr
                    ? 'للاستفسارات المتخصصة، يرجى التواصل مع الجهة المعنية أدناه.'
                    : 'For specialized inquiries, please use the relevant contact below.'}
                </p>
                <div className="space-y-1">
                  {[
                    { label: isAr ? 'التوظيف' : 'Careers', email: 'careers@makamin.com.sa' },
                    { label: isAr ? 'الإعلام' : 'Media', email: 'media@makamin.com.sa' },
                    { label: isAr ? 'الاستثمار' : 'Investment', email: 'invest@makamin.com.sa' },
                    { label: isAr ? 'التقارير' : 'Reports', email: 'report@makamin.com.sa' },
                    { label: isAr ? 'الدعم الإلكتروني' : 'Web Support', email: 'web@makamin.com.sa' },
                  ].map(({ label, email }) => (
                    <div
                      key={email}
                      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                    >
                      <span className="text-makamin-gray font-medium text-sm">{label}</span>
                      <a
                        href={`mailto:${email}`}
                        className="text-makamin-blue hover:text-blue-600 text-sm"
                      >
                        {email}
                      </a>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  {isAr
                    ? 'للاستفسارات العامة، يُفضَّل التواصل عبر info@makamin.com.sa للحصول على رد أسرع.'
                    : 'For the fastest response, general inquiries should be directed to info@makamin.com.sa.'}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 4. Emergency Contact */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-red-700 mb-4">
              {isAr ? 'اتصال الطوارئ' : 'Emergency Contact'}
            </h2>
            <Card className="bg-red-50 border border-red-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-red-600 text-sm mb-3">
                      {isAr
                        ? 'لدعم العمليات البحرية العاجلة:'
                        : 'For urgent offshore operations support:'}
                    </p>
                    <a
                      href="tel:+966563308727"
                      className="text-red-700 font-semibold text-lg hover:text-red-800 flex items-center gap-2 mb-4"
                    >
                      <Phone className="h-4 w-4 flex-shrink-0" />
                      24/7 Emergency & WhatsApp: +966 56 330 8727
                    </a>
                    <a
                      href="https://wa.me/966563308727"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors"
                    >
                      <svg className="h-4 w-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.848L.057 23.57a.75.75 0 00.918.919l5.733-1.466A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.694 9.694 0 01-4.94-1.352l-.355-.21-3.676.94.97-3.572-.23-.368A9.694 9.694 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                      </svg>
                      {isAr ? 'واتساب' : 'WhatsApp'}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 5. Saudi Arabia Branches */}
          <div className="mb-10">
            <details className="group">
              <summary className="cursor-pointer list-none flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold makamin-blue">
                  {isAr ? 'الفروع السعودية' : 'Saudi Arabia Branches'}
                </h2>
                <span className="text-makamin-blue text-sm group-open:hidden select-none">
                  {isAr ? '▼ عرض' : '▼ Show'}
                </span>
                <span className="text-makamin-blue text-sm hidden group-open:inline select-none">
                  {isAr ? '▲ إخفاء' : '▲ Hide'}
                </span>
              </summary>
              <Card className="shadow-sm border border-gray-100">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {[
                      isAr ? 'فرع الخبر – رقم السجل: 2051038139' : 'Khobar Branch – CR: 2051038139',
                      isAr ? 'مكامن للخدمات البترولية – رقم السجل: 2050048513' : 'Makamin Petroleum Services – CR: 2050048513',
                      isAr ? 'مكامن أوف شور السعودية – رقم السجل: 2050077238' : 'Makamin Offshore Saudi – CR: 2050077238',
                      isAr ? 'فرع الدمام – عمليات إقليمية' : 'Dammam Branch – Regional Operations',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-makamin-blue rounded-full flex-shrink-0" />
                        <span className="text-makamin-gray text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </details>
          </div>

          {/* 6. International Branches */}
          <div className="mb-10">
            <details className="group">
              <summary className="cursor-pointer list-none flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold makamin-blue">
                  {isAr ? 'الفروع الدولية' : 'International Branches'}
                </h2>
                <span className="text-makamin-blue text-sm group-open:hidden select-none">
                  {isAr ? '▼ عرض' : '▼ Show'}
                </span>
                <span className="text-makamin-blue text-sm hidden group-open:inline select-none">
                  {isAr ? '▲ إخفاء' : '▲ Hide'}
                </span>
              </summary>
              <Card className="shadow-sm border border-gray-100">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                      <span className="text-makamin-gray text-sm">
                        {isAr ? 'البحرين — مكامن البحرين للاستثمار' : 'Bahrain — Makamin Bahrain Investment'}
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 mt-1.5" />
                      <div>
                        <span className="text-makamin-gray font-semibold text-sm block">
                          {isAr ? 'ماليزيا — مكامن أوف شور (ماليزيا) المحدودة' : 'Malaysia — Makamin Offshore (Malaysia) Ltd.'}
                        </span>
                        <div className="text-xs text-gray-500 mt-1 space-y-0.5">
                          <div>Suite 33.01, Level 33, The Gardens North Tower</div>
                          <div>Mid Valley City, Lingkaran Syed Putra</div>
                          <div>59200 Kuala Lumpur, Malaysia</div>
                          <div className="flex items-center gap-3 mt-2">
                            <a
                              href="https://www.google.com/maps/place/The+Gardens+Mall/@3.1188459,101.6756449,17z"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-makamin-blue hover:text-blue-600"
                            >
                              {isAr ? 'عرض في Google Maps' : 'View on Google Maps'}
                            </a>
                            <span className="text-gray-300">|</span>
                            <a href="/malaysia" className="text-makamin-blue hover:text-blue-600">
                              {isAr ? 'صفحة الفرع الكاملة' : 'Full Branch Page'}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {[
                      isAr ? 'الإمارات العربية المتحدة' : 'United Arab Emirates',
                      isAr ? 'الصين' : 'China',
                      isAr ? 'الكويت' : 'Kuwait',
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                        <span className="text-makamin-gray text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </details>
          </div>

        </div>
      </section>
    </div>
  );
}
