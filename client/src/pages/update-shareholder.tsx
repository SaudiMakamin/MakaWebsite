import { useLanguageContext } from '@/components/language-provider';
import { Link } from 'wouter';
import { FileText, Search } from 'lucide-react';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';

const actions = [
  {
    labelAr: 'تقديم طلب جديد',
    labelEn: 'Submit New Request',
    href: 'https://script.google.com/macros/s/AKfycbzsx3zC2sx2Yv_XLoUX2TO1rDXlmT3oxyvyh8XDqucs2kfDlkr5vXQOxyehNFZ3z1WS/exec',
    external: true,
    Icon: FileText,
  },
  {
    labelAr: 'متابعة طلب سابق',
    labelEn: 'Track Existing Request',
    href: '/shareholder/track',
    external: false,
    Icon: Search,
  },
];

const notesAr = [
  'بعض البيانات تخضع للمراجعة قبل الاعتماد النهائي.',
  'سيتم إشعار مقدم الطلب بنتيجة المراجعة بعد استكمال التحقق.',
  'في حال وجود استفسار، يرجى التواصل عبر القنوات الرسمية للشركة.',
];

const notesEn = [
  'Some data is subject to review before final approval.',
  'The applicant will be notified of the review outcome upon completion of verification.',
  "For inquiries, please contact through the company's official channels.",
];

export default function UpdateShareholder() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';

  return (
    <div className="min-h-screen bg-gray-50" dir={isAr ? 'rtl' : 'ltr'}>
      <SemanticMetadata
        title="Update Shareholder Information | Saudi Makamin Holding"
        description="Official shareholder data submission portal for Saudi Makamin Holding Company."
        page="update-shareholder"
      />
      <EnhancedSecurity />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">

          <div className="mb-10 pb-8 border-b border-gray-200">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              {isAr ? 'تحديث بيانات المساهمين' : 'Shareholder Data Update'}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-2">
              {isAr
                ? 'هذه الخدمة مخصصة لتقديم أو تحديث بيانات المساهمين عبر البوابة الرسمية المعتمدة.'
                : 'This service is designated for submitting or updating shareholder data through the official approved portal.'}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {isAr
                ? 'تخضع جميع الطلبات والمرفقات للمراجعة والتحقق قبل الاعتماد.'
                : 'All requests and attachments are subject to review and verification before approval.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {actions.map(({ labelAr, labelEn, href, external, Icon }) => (
              external ? (
                <a
                  key={href}
                  href={href}
                  className="flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-lg p-8 text-center hover:border-blue-500 hover:shadow-sm transition-all group cursor-pointer"
                >
                  <Icon className="w-6 h-6 text-blue-700" />
                  <span className="font-semibold text-gray-800 text-sm leading-snug">
                    {isAr ? labelAr : labelEn}
                  </span>
                </a>
              ) : (
                <Link key={href} href={href}>
                  <a className="flex flex-col items-center gap-3 bg-white border border-gray-200 rounded-lg p-8 text-center hover:border-blue-500 hover:shadow-sm transition-all group cursor-pointer">
                    <Icon className="w-6 h-6 text-blue-700" />
                    <span className="font-semibold text-gray-800 text-sm leading-snug">
                      {isAr ? labelAr : labelEn}
                    </span>
                  </a>
                </Link>
              )
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-base font-semibold text-gray-800 mb-4">
              {isAr ? 'ملاحظات مهمة' : 'Important Notes'}
            </h2>
            <ul className="space-y-3">
              {(isAr ? notesAr : notesEn).map((note, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                  <span className="text-gray-300 select-none flex-shrink-0 mt-0.5">—</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}
