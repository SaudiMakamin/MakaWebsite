import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/components/language-provider';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';
import HeroLogo from '@/components/hero-logo';
import { Link } from 'wouter';
import { Ship, FileText, Waves, ArrowRight, CheckCircle } from 'lucide-react';
import heroPath from '@assets/hero-carousel-1_1752529906169.jpg';
import mosLogoPath from '@assets/Makamin-Offshore-Saudi-MOS_1773171180771.png';

export default function OffshoreOperations() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';

  const activities = [
    { en: "Offshore platform operations and support", ar: "عمليات ودعم المنصات البحرية" },
    { en: "Marine support and logistics services", ar: "خدمات الدعم البحري واللوجستيات" },
    { en: "Diving and subsea operations", ar: "عمليات الغوص وتحت البحر" },
    { en: "Underwater engineering and inspection", ar: "الهندسة والفحص تحت الماء" },
    { en: "Marine fleet management and chartering", ar: "إدارة الأسطول البحري والتأجير" },
  ];

  const fleetCapabilities = [
    { en: "Platform Supply Vessels (PSV)", ar: "سفن إمداد المنصات (PSV)" },
    { en: "Offshore Support Vessels (OSV)", ar: "سفن الدعم البحري (OSV)" },
    { en: "Accommodation Support Vessels", ar: "سفن دعم الإقامة" },
    { en: "Security Patrol Boats", ar: "زوارق الدوريات الأمنية" },
    { en: "Marine Logistics Support", ar: "دعم اللوجستيات البحرية" },
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir={isAr ? 'rtl' : 'ltr'}>
      <SemanticMetadata
        page="group"
        title="Makamin Offshore Saudi Ltd (MOS) | Offshore Marine Services"
        description="Makamin Offshore Saudi Ltd (MOS) has supported offshore marine services including platform supply, offshore logistics, navigation support, and marine security operations in the Arabian Gulf."
      />
      <EnhancedSecurity />

      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroPath} alt="Makamin Offshore Saudi" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-slate-900/70 to-cyan-900/85"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <HeroLogo size="lg" />
            <img src={mosLogoPath} alt="Makamin Offshore Saudi Ltd (MOS)" className="h-16 sm:h-20 w-auto mx-auto mb-6 drop-shadow-lg" />
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {isAr ? 'شركة مكامن أوفشور السعودية المحدودة (MOS)' : 'Makamin Offshore Saudi Ltd (MOS)'}
            </h1>
            <p className="text-lg text-blue-200 mb-4">
              {isAr ? 'كيان العمليات البحرية الخارجية — مجموعة مكامن' : 'Offshore Marine Operations Entity – Makamin Group'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-100 text-blue-800 border-blue-200">
                  {isAr ? 'نبذة عن الكيان' : 'Entity Overview'}
                </Badge>
                <CardTitle className="text-2xl">
                  {isAr ? 'شركة مكامن أوفشور السعودية المحدودة (MOS)' : 'Makamin Offshore Saudi Ltd (MOS)'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-3">
                  {isAr
                    ? 'تُعد شركة مكامن أوفشور السعودية المحدودة (MOS) كيانًا بحريًا متخصصًا ضمن مجموعة مكامن. وتركز الشركة على العمليات البحرية وخدمات الدعم البحري لقطاع النفط والغاز.'
                    : 'Makamin Offshore Saudi Ltd (MOS) is a specialized marine entity within the Makamin Group. The company focuses on offshore operations and marine support services for the oil and gas sector.'}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {isAr
                    ? 'قدّمت شركة مكامن أوفشور السعودية المحدودة (MOS) خدمات دعم بحري وتشغيل بحري لمشاريع أرامكو السعودية في الخليج العربي، بما في ذلك سفن دعم المنصات، وخدمات دعم الملاحة، وعمليات الدوريات الأمنية البحرية، وأنشطة اللوجستيات البحرية.'
                    : 'Makamin Offshore Saudi Ltd (MOS) operated offshore marine support services for Saudi Aramco projects in the Arabian Gulf, including platform support vessels, navigation support services, offshore security patrol operations, and marine logistics activities.'}
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-blue-700 font-medium">
                      {isAr ? 'ملكية مكامن: 51%' : 'Makamin Ownership: 51%'}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">{isAr ? 'السجل التجاري' : 'Commercial Registration'}</p>
                    <p className="text-lg font-semibold text-gray-900">2050077238</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">
                      {isAr ? 'Offshoreworks Global (L) Ltd (OWG)' : 'Offshoreworks Global (L) Ltd (OWG)'}
                    </p>
                    <p className="text-lg font-semibold text-gray-900">49%</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 md:col-span-2">
                    <p className="text-sm text-gray-500 mb-1">
                      {isAr ? 'رقم سجل OWG' : 'OWG Commercial Registration No.'}
                    </p>
                    <p className="text-lg font-semibold text-gray-900 mb-3">LL07924</p>
                    <div className="border-t border-gray-200 pt-3 space-y-3">
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                        Historical Corporate Records – Offshoreworks Entities (Labuan, Malaysia)
                      </p>
                      <div className="bg-white rounded p-3 border border-gray-100 space-y-1">
                        <p className="text-xs font-semibold text-gray-800">Offshoreworks Global (L) Ltd</p>
                        <p className="text-xs text-gray-600">Registration Number: LL04173</p>
                        <p className="text-xs text-gray-600">Jurisdiction: Labuan International Business &amp; Financial Centre, Malaysia</p>
                        <p className="text-xs text-gray-600">Incorporation Date: 30 March 2004</p>
                        <p className="text-xs text-gray-600">Registered Office: Brumby Centre, Lot 42, Jalan Muhibbah, Federal Territory of Labuan, 87000, Malaysia</p>
                      </div>
                      <div className="bg-white rounded p-3 border border-gray-100 space-y-1">
                        <p className="text-xs font-semibold text-gray-800">Offshoreworks Middle East (L) Ltd</p>
                        <p className="text-xs text-gray-600">Registration Number: LL07924</p>
                        <p className="text-xs text-gray-600">Jurisdiction: Labuan International Business &amp; Financial Centre, Malaysia</p>
                        <p className="text-xs text-gray-600">Incorporation Date: 5 November 2010</p>
                        <p className="text-xs text-gray-600">Registered Office: Lot A020, Level 1, Podium Level, Financial Park, Jalan Merdeka, Federal Territory of Labuan, 87000, Malaysia</p>
                      </div>
                      <div className="bg-white rounded p-3 border border-gray-100 space-y-1">
                        <p className="text-xs font-semibold text-gray-700 mb-1">Notes:</p>
                        <p className="text-xs text-gray-600">Both entities were incorporated under the Labuan Companies framework in Malaysia.</p>
                        <p className="text-xs text-gray-600">Offshoreworks Global (L) Ltd appears historically in offshore marine charter structures linked to regional oil &amp; gas support operations.</p>
                        <p className="text-xs text-gray-600">Offshoreworks Middle East (L) Ltd was later incorporated and subsequently associated with the MOS joint venture structure.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 flex items-start gap-3">
                  <FileText className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-blue-800">
                    {isAr
                      ? 'وذلك بموجب العقد الموثق بتاريخ 20/9/2010.'
                      : 'Pursuant to the documented contract dated 20/9/2010.'}
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <CardTitle className="text-lg">
                      {isAr ? 'النطاق التشغيلي' : 'Operational Scope'}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[
                      { en: 'Offshore vessel chartering', ar: 'تأجير السفن البحرية' },
                      { en: 'Marine logistics', ar: 'اللوجستيات البحرية' },
                      { en: 'Aids to Navigation (AtoN)', ar: 'وسائل المساعدة الملاحية (AtoN)' },
                      { en: 'Offshore security vessels', ar: 'سفن الأمن البحري' },
                      { en: 'Offshore crew supply', ar: 'توفير الأطقم البحرية' },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                        {isAr ? item.ar : item.en}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Ship className="w-5 h-5 text-blue-600" />
                    <CardTitle className="text-lg">
                      {isAr ? 'العميل الرئيسي' : 'Main Client'}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-blue-700 font-medium">
                      {isAr ? 'إدارة الخدمات البحرية في أرامكو السعودية' : 'Saudi Aramco Marine Department'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Waves className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl">
                    {isAr ? 'سجل الأسطول البحري' : 'Offshore Fleet Registry'}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="bg-blue-50 border-b border-blue-200">
                        <th className="px-3 py-2 font-semibold text-blue-800">{isAr ? 'السفينة' : 'Vessel'}</th>
                        <th className="px-3 py-2 font-semibold text-blue-800">IMO</th>
                        <th className="px-3 py-2 font-semibold text-blue-800">{isAr ? 'المالك / المدير' : 'Owner / Manager'}</th>
                        <th className="px-3 py-2 font-semibold text-blue-800">{isAr ? 'المشغّل' : 'Operator'}</th>
                        <th className="px-3 py-2 font-semibold text-blue-800">{isAr ? 'نوع السفينة' : 'Vessel Type'}</th>
                        <th className="px-3 py-2 font-semibold text-blue-800">{isAr ? 'العقد' : 'Contract'}</th>
                        <th className="px-3 py-2 font-semibold text-blue-800">{isAr ? 'الحالة' : 'Status'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { vessel: 'Jaya Centurion', imo: '9548017', owner: 'MMA Offshore / Mermaid Marine', operator: 'Makamin Offshore Saudi Ltd (MOS)', type: isAr ? 'سفينة إمداد المنصات (PSV)' : 'Platform Supply Vessel (PSV)', contract: isAr ? 'عقد أرامكو' : 'Aramco Charter', status: isAr ? 'عقد أرامكو التاريخي' : 'Historical Aramco Charter' },
                        { vessel: 'Jaya Chieftain', imo: '9532874', owner: 'MMA Offshore / Mermaid Marine', operator: 'Makamin Offshore Saudi Ltd (MOS)', type: isAr ? 'سفينة إمداد المنصات (PSV)' : 'Platform Supply Vessel (PSV)', contract: isAr ? 'عقد أرامكو' : 'Aramco Charter', status: isAr ? 'عقد أرامكو التاريخي' : 'Historical Aramco Charter' },
                        { vessel: 'Jaya Concordia', imo: '9527465', owner: 'MMA Offshore / Mermaid Marine', operator: 'Makamin Offshore Saudi Ltd (MOS)', type: isAr ? 'سفينة إمداد المنصات (PSV)' : 'Platform Supply Vessel (PSV)', contract: isAr ? 'عقد أرامكو' : 'Aramco Charter', status: isAr ? 'عقد أرامكو التاريخي' : 'Historical Aramco Charter' },
                        { vessel: 'Arkstar Voyager', imo: '9527582', owner: 'Arkstar Offshore', operator: 'Makamin Offshore Saudi Ltd (MOS)', type: isAr ? 'سفينة إمداد المنصات (PSV)' : 'Platform Supply Vessel (PSV)', contract: isAr ? 'عقد أرامكو' : 'Aramco Charter', status: isAr ? 'عقد أرامكو التاريخي' : 'Historical Aramco Charter' },
                        { vessel: 'POSH Pelican', imo: '9648635', owner: 'POSH Semco (PACC Offshore)', operator: 'Makamin Offshore Saudi Ltd (MOS)', type: isAr ? 'سفينة دعم بحرية (OSV)' : 'Offshore Support Vessel (OSV)', contract: isAr ? 'عقد أرامكو' : 'Aramco Charter', status: isAr ? 'عقد أرامكو التاريخي' : 'Historical Aramco Charter' },
                        { vessel: 'Belait Barakah', imo: '9430569', owner: 'Belait Shipping', operator: 'Makamin Offshore Saudi Ltd (MOS)', type: isAr ? 'سفينة إقامة / دعم' : 'Accommodation / Support Vessel', contract: isAr ? 'عقد أمني' : 'Security Contract', status: isAr ? 'عقد أمني تاريخي' : 'Historical Security Contract' },
                        { vessel: 'Zakher Crest', imo: '9545194', owner: 'Zakher Marine Services', operator: 'Makamin Offshore Saudi Ltd (MOS)', type: isAr ? 'سفينة دعم بحرية (OSV)' : 'Offshore Support Vessel (OSV)', contract: '—', status: '—' },
                        { vessel: 'Makamin 1', imo: '—', owner: 'Makamin Petroleum Services', operator: 'Makamin Offshore Saudi Ltd (MOS)', type: isAr ? 'سفينة أمن اعتراضية' : 'Interceptor Security Vessel', contract: '—', status: '—' },
                        { vessel: 'Ansar 3', imo: '—', owner: 'Makamin Offshore', operator: 'Makamin Offshore Saudi Ltd (MOS)', type: isAr ? 'سفينة دورية' : 'Patrol Vessel', contract: '—', status: '—' },
                        { vessel: 'Jaya Pearl', imo: '9594171', owner: 'MOS-IES Joint Venture', operator: 'MOS IES Pearl', type: isAr ? 'سفينة بحرية' : 'Offshore Vessel', contract: '—', status: '—' },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-3 py-2 font-medium text-gray-900 border-b border-gray-100 whitespace-nowrap">{row.vessel}</td>
                          <td className="px-3 py-2 text-gray-600 border-b border-gray-100 whitespace-nowrap">{row.imo}</td>
                          <td className="px-3 py-2 text-gray-600 border-b border-gray-100">{row.owner}</td>
                          <td className="px-3 py-2 text-gray-600 border-b border-gray-100 whitespace-nowrap">{row.operator}</td>
                          <td className="px-3 py-2 text-gray-600 border-b border-gray-100">{row.type}</td>
                          <td className="px-3 py-2 text-gray-600 border-b border-gray-100 whitespace-nowrap">{row.contract}</td>
                          <td className="px-3 py-2 text-gray-600 border-b border-gray-100 whitespace-nowrap">{row.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <CardTitle className="text-xl">
                    {isAr ? 'ملاحظات المشاريع والعقود البحرية' : 'Marine Project & Contract Notes'}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="bg-blue-50 border-b border-blue-200">
                        <th className="px-3 py-2 font-semibold text-blue-800">{isAr ? 'السفينة / المشروع' : 'Vessel / Project'}</th>
                        <th className="px-3 py-2 font-semibold text-blue-800">{isAr ? 'نوع الملاحظة' : 'Note Type'}</th>
                        <th className="px-3 py-2 font-semibold text-blue-800">{isAr ? 'التفاصيل' : 'Details'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { vessel: 'POSH Pelican', noteType: isAr ? 'ملاحظة عقدية / قانونية' : 'Contract / Litigation Note', details: isAr ? 'مُشار إليها في إجراءات نزاع التأجير البحري المتعلقة بـ POSH Semco.' : 'Referenced in maritime charter dispute proceedings involving POSH Semco.' },
                        { vessel: 'Jaya Pearl / MOS IES Pearl', noteType: isAr ? 'ملاحظة مشروع مشترك' : 'Joint Venture Note', details: isAr ? 'تشغّلت ضمن هيكل المشروع المشترك MOS-IES.' : 'Operated within the MOS-IES joint venture structure.' },
                        { vessel: 'Ansar 3', noteType: isAr ? 'ملاحظة تاريخية' : 'Historical Note', details: isAr ? 'ارتبطت في الأصل بشركة بكري للملاحة قبل تشغيلها ضمن شبكة مكامن أوفشور.' : 'Originally associated with Bakri Navigation before operation within the Makamin Offshore network.' },
                        { vessel: 'Makamin 1', noteType: isAr ? 'ملاحظة تشغيلية' : 'Operational Note', details: isAr ? 'تُستخدم كسفينة أمن اعتراضية في عمليات الأمن البحري.' : 'Used as an interceptor security vessel within offshore security operations.' },
                        { vessel: 'Belait Barakah', noteType: isAr ? 'ملاحظة مشروع' : 'Project Note', details: isAr ? 'تُستخدم في دعم عمليات سفن الأمن والإقامة.' : 'Used in security and accommodation vessel support operations.' },
                        { vessel: 'Zakher Crest', noteType: isAr ? 'ملاحظة تشغيلية' : 'Operational Note', details: isAr ? 'مرتبطة بنشاط الأمن البحري ودعم الخدمات اللوجستية البحرية.' : 'Associated with offshore security and marine logistics support activity.' },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-3 py-2 font-medium text-gray-900 border-b border-gray-100 whitespace-nowrap">{row.vessel}</td>
                          <td className="px-3 py-2 text-gray-600 border-b border-gray-100 whitespace-nowrap">{row.noteType}</td>
                          <td className="px-3 py-2 text-gray-600 border-b border-gray-100">{row.details}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl">
                    {isAr ? 'محفظة العقود البحرية' : 'Offshore Marine Contract Portfolio'}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left border-collapse">
                    <thead>
                      <tr className="bg-blue-50 border-b border-blue-200">
                        <th className="px-3 py-2 font-semibold text-blue-800">{isAr ? 'فئة العقد' : 'Contract Category'}</th>
                        <th className="px-3 py-2 font-semibold text-blue-800">{isAr ? 'المرجع التجاري' : 'Commercial Reference'}</th>
                        <th className="px-3 py-2 font-semibold text-blue-800">{isAr ? 'ملاحظات' : 'Notes'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { category: isAr ? 'عقود سفن دعم المنصات' : 'Platform Support Vessel Contracts', value: 'SAR ***,***,***', notes: isAr ? '3 سفن تعمل في حقول أرامكو البحرية' : '3 vessels operating in Aramco offshore fields' },
                        { category: isAr ? 'عقد تأجير Arkstar Voyager' : 'Arkstar Voyager Charter Contract', value: 'SAR ***,******', notes: isAr ? 'عمليات دعم بحرية' : 'Offshore support operations' },
                        { category: isAr ? 'عقد تأجير POSH Pelican' : 'POSH Pelican Charter Contract', value: 'SAR ***,***,***', notes: isAr ? 'دعم منصات بحرية' : 'Offshore platform support' },
                        { category: isAr ? 'خدمات المساعدات الملاحية (AtoN)' : 'Navigational Aids Services (AtoN)', value: 'SAR***,***,***', notes: isAr ? 'خدمات صيانة الملاحة البحرية' : 'Marine navigation maintenance services' },
                        { category: isAr ? 'عقود سفن الإقامة الأمنية' : 'Security Accommodation Vessel Contracts', value: 'SAR ***,***,***', notes: isAr ? 'دعم الإقامة البحري' : 'Offshore accommodation support' },
                        { category: isAr ? 'عقود سفن الأمن الاعتراضية' : 'Interceptor Security Vessel Contracts', value: 'SAR ***,***,***', notes: isAr ? 'عمليات الدورية الأمنية الساحلية' : 'Coastal security patrol operations' },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-3 py-2 font-medium text-gray-900 border-b border-gray-100">{row.category}</td>
                          <td className="px-3 py-2 text-gray-600 border-b border-gray-100 whitespace-nowrap">{row.value}</td>
                          <td className="px-3 py-2 text-gray-600 border-b border-gray-100">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Ship className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl">
                    {isAr ? 'النشاط البحري' : 'Offshore Activity'}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activities.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{isAr ? item.ar : item.en}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-12">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Waves className="w-6 h-6 text-blue-600" />
                  <CardTitle className="text-xl">
                    {isAr ? 'قدرات الأسطول' : 'Fleet Capabilities'}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {fleetCapabilities.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{isAr ? item.ar : item.en}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services/offshore">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  {isAr ? 'الخدمات البحرية والعمليات البحرية' : 'Offshore & Marine Services'}
                  <ArrowRight className={`w-5 h-5 ${isAr ? 'mr-2 rotate-180' : 'ml-2'}`} />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  {isAr ? 'نظرة عامة على المجموعة' : 'Group Overview'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
