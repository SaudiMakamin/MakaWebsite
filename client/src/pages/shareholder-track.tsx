import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import { Link } from 'wouter';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';

interface TrackResult {
  found: boolean;
  requestId?: string;
  status?: string;
  submittedAt?: string;
  shareholderMessage?: string | null;
}

export default function ShareholderTrack() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';

  const [requestId, setRequestId] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [result, setResult] = useState<TrackResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!requestId.trim()) e.requestId = isAr ? 'الرقم المرجعي مطلوب' : 'Reference number is required';
    if (!email.trim() && !mobile.trim())
      e.contact = isAr ? 'البريد الإلكتروني أو رقم الجوال مطلوب' : 'Email or mobile number is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch('/api/shareholder/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          requestId: requestId.trim(),
          email: email.trim() || undefined,
          mobile: mobile.trim() || undefined,
        }),
      });
      const data: TrackResult = await res.json();
      setResult(data);
    } catch {
      setResult({ found: false });
    } finally {
      setLoading(false);
    }
  };

  const field = (label: string, value: string, setValue: (v: string) => void, opts?: {
    type?: string; placeholder?: string; errorKey?: string;
  }) => (
    <div>
      <Label className="text-gray-700 font-medium text-sm">{label}</Label>
      <Input
        type={opts?.type || 'text'}
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={opts?.placeholder}
        className={`mt-1.5 ${opts?.errorKey && errors[opts.errorKey] ? 'border-red-400' : ''}`}
      />
      {opts?.errorKey && errors[opts.errorKey] && (
        <p className="text-xs text-red-600 mt-1">{errors[opts.errorKey]}</p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50" dir={isAr ? 'rtl' : 'ltr'}>
      <SemanticMetadata
        page="update-shareholder"
        title="Track Shareholder Request | Saudi Makamin Holding"
        description="Track the status of your shareholder data submission."
      />
      <EnhancedSecurity />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-xl">

          <Link href="/update-shareholder">
            <a className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8">
              <ArrowLeft className="w-4 h-4" />
              {isAr ? 'العودة' : 'Back'}
            </a>
          </Link>

          <div className="mb-8 pb-6 border-b border-gray-200">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {isAr ? 'متابعة طلب سابق' : 'Track Existing Request'}
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              {isAr
                ? 'أدخل الرقم المرجعي مع البريد الإلكتروني أو رقم الجوال المسجّل في الطلب.'
                : 'Enter the reference number along with the email or mobile used during submission.'}
            </p>
          </div>

          <Card className="border border-gray-200 shadow-sm mb-6">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleTrack} className="space-y-5">

                {field(
                  isAr ? 'الرقم المرجعي *' : 'Reference Number *',
                  requestId,
                  setRequestId,
                  { placeholder: 'REQ-YYYYMMDD-XXXXXX', errorKey: 'requestId' }
                )}

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs text-gray-500 mb-3">
                    {isAr ? 'أدخل أحد الحقلين للتحقق من هويتك:' : 'Enter at least one of the following to verify your identity:'}
                  </p>
                  {field(
                    isAr ? 'البريد الإلكتروني' : 'Email Address',
                    email,
                    setEmail,
                    { type: 'email', placeholder: isAr ? 'البريد المسجّل في الطلب' : 'Email used in submission' }
                  )}
                  <div className="my-3 text-center text-xs text-gray-400">
                    {isAr ? '— أو —' : '— or —'}
                  </div>
                  {field(
                    isAr ? 'رقم الجوال' : 'Mobile Number',
                    mobile,
                    setMobile,
                    { placeholder: isAr ? 'الجوال المسجّل في الطلب' : 'Mobile used in submission' }
                  )}
                  {errors.contact && (
                    <p className="text-xs text-red-600 mt-2">{errors.contact}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white"
                  disabled={loading}
                >
                  {loading
                    ? (isAr ? 'جارٍ البحث...' : 'Searching...')
                    : (isAr ? 'متابعة الطلب' : 'Track Request')}
                </Button>
              </form>
            </CardContent>
          </Card>

          {result && (
            result.found ? (
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">
                    {isAr ? 'الطلب مسجّل في النظام' : 'Request registered in the system'}
                  </span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-500">{isAr ? 'الرقم المرجعي' : 'Reference'}</span>
                    <span className="font-semibold text-gray-800">{result.requestId}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-500">{isAr ? 'تاريخ الاستلام' : 'Received'}</span>
                    <span className="font-medium text-gray-800">
                      {result.submittedAt
                        ? new Date(result.submittedAt).toLocaleDateString(isAr ? 'ar-SA' : 'en-GB')
                        : '—'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-500">{isAr ? 'الحالة' : 'Status'}</span>
                    <span className="font-semibold text-blue-700">{result.status || '—'}</span>
                  </div>
                  {result.shareholderMessage && (
                    <div className="pt-1">
                      <p className="text-gray-500 text-xs mb-1">{isAr ? 'ملاحظة من الإدارة' : 'Admin Note'}</p>
                      <p className="text-gray-800 text-sm">{result.shareholderMessage}</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <p className="text-gray-600 text-sm">
                  {isAr
                    ? 'لم يتم العثور على طلب بهذه البيانات. تأكد من صحة الرقم المرجعي والبريد الإلكتروني أو رقم الجوال.'
                    : 'No request found with these details. Verify the reference number and contact information.'}
                </p>
              </div>
            )
          )}

        </div>
      </section>
    </div>
  );
}
