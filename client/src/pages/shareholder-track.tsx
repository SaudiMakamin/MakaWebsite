import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Search } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import { Link } from 'wouter';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';

interface TrackResult {
  found: boolean;
  id?: number;
  receivedAt?: string;
  status?: string;
}

const statusLabel = (status: string | undefined, isAr: boolean): string => {
  switch (status) {
    case 'pending': return isAr ? 'قيد المراجعة' : 'Under Review';
    case 'approved': return isAr ? 'مقبول' : 'Approved';
    case 'rejected': return isAr ? 'مرفوض' : 'Rejected';
    default: return isAr ? 'مستلَم' : 'Received';
  }
};

export default function ShareholderTrack() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';

  const [refId, setRefId] = useState('');
  const [result, setResult] = useState<TrackResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!refId.trim()) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const res = await fetch(`/api/shareholder/status/${refId.trim()}`);
      const data: TrackResult = await res.json();
      setResult(data);
    } catch {
      setError(
        isAr
          ? 'تعذّر الاتصال. يرجى المحاولة مرة أخرى.'
          : 'Connection failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

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
                ? 'أدخل رقم المرجع الذي استلمته عند تقديم الطلب.'
                : 'Enter the reference number you received when your request was submitted.'}
            </p>
          </div>

          <Card className="border border-gray-200 shadow-sm mb-6">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleTrack} className="space-y-4">
                <div>
                  <Label className="text-gray-700 font-medium text-sm">
                    {isAr ? 'رقم المرجع' : 'Reference Number'}
                  </Label>
                  <Input
                    value={refId}
                    onChange={e => setRefId(e.target.value)}
                    className="mt-1.5"
                    placeholder={isAr ? 'مثال: 42' : 'e.g. 42'}
                    required
                  />
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white"
                  disabled={loading}
                >
                  <Search className="w-4 h-4 mr-2" />
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
                    <span className="text-gray-500">{isAr ? 'رقم المرجع' : 'Reference'}</span>
                    <span className="font-semibold text-gray-800">#{result.id}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="text-gray-500">{isAr ? 'تاريخ الاستلام' : 'Received'}</span>
                    <span className="font-medium text-gray-800">
                      {result.receivedAt
                        ? new Date(result.receivedAt).toLocaleDateString(isAr ? 'ar-SA' : 'en-GB')
                        : '—'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{isAr ? 'الحالة' : 'Status'}</span>
                    <span className="font-medium text-gray-800">
                      {statusLabel(result.status, isAr)}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <p className="text-gray-600 text-sm">
                  {isAr
                    ? 'لم يتم العثور على طلب بهذا الرقم. تأكد من صحة رقم المرجع.'
                    : 'No request found with this reference number. Please verify and try again.'}
                </p>
              </div>
            )
          )}

        </div>
      </section>
    </div>
  );
}
