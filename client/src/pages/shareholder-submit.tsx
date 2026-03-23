import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import { Link } from 'wouter';
import { apiRequest } from '@/lib/queryClient';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';

interface FormState {
  fullName: string;
  email: string;
  phoneNumber: string;
  idNumber: string;
  nationality: string;
}

export default function ShareholderSubmit() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';

  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phoneNumber: '',
    idNumber: '',
    nationality: '',
  });

  const [refId, setRefId] = useState<number | null>(null);

  const set = (field: keyof FormState, value: string) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest('POST', '/api/shareholders', form);
      return res.json();
    },
    onSuccess: (data) => {
      setRefId(data.id);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phoneNumber || !form.idNumber || !form.nationality) return;
    mutation.mutate();
  };

  if (refId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4" dir={isAr ? 'rtl' : 'ltr'}>
        <SemanticMetadata
          page="update-shareholder"
          title="Request Submitted | Saudi Makamin Holding"
          description="Your shareholder request has been received."
        />
        <div className="bg-white border border-gray-200 rounded-lg p-10 max-w-md w-full text-center">
          <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-5" />
          <h1 className="text-xl font-bold text-gray-900 mb-3">
            {isAr ? 'تم استلام طلبك' : 'Request Received'}
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed mb-5">
            {isAr
              ? 'تم تسجيل طلبك بنجاح. يمكنك متابعة حالة الطلب باستخدام رقم المرجع أدناه.'
              : 'Your request has been successfully registered. You may track its status using the reference number below.'}
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-md px-6 py-3 mb-4">
            <p className="text-xs text-gray-500 mb-1">
              {isAr ? 'رقم المرجع' : 'Reference Number'}
            </p>
            <p className="text-2xl font-bold text-blue-700">#{refId}</p>
          </div>
          <p className="text-xs text-gray-500 mb-8">
            {isAr
              ? 'سيتم إشعارك بنتيجة المراجعة على البريد الإلكتروني المسجل.'
              : 'You will be notified of the review outcome at your registered email address.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/shareholder/track">
              <Button variant="outline" className="text-sm w-full sm:w-auto">
                {isAr ? 'متابعة الطلب' : 'Track Request'}
              </Button>
            </Link>
            <Link href="/update-shareholder">
              <Button variant="ghost" className="text-sm text-gray-500 w-full sm:w-auto">
                {isAr ? 'العودة للبوابة' : 'Back to Portal'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir={isAr ? 'rtl' : 'ltr'}>
      <SemanticMetadata
        page="update-shareholder"
        title="Submit Shareholder Request | Saudi Makamin Holding"
        description="Submit a new shareholder data registration or update request."
      />
      <EnhancedSecurity />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">

          <Link href="/update-shareholder">
            <a className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-8">
              <ArrowLeft className="w-4 h-4" />
              {isAr ? 'العودة' : 'Back'}
            </a>
          </Link>

          <div className="mb-8 pb-6 border-b border-gray-200">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {isAr ? 'تقديم طلب جديد' : 'Submit New Request'}
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              {isAr
                ? 'يرجى تعبئة البيانات المطلوبة بدقة. سيتم مراجعة الطلب من قِبل الفريق الإداري.'
                : 'Please fill in the required information accurately. The request will be reviewed by the administrative team.'}
            </p>
          </div>

          <Card className="border border-gray-200 shadow-sm">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <Label className="text-gray-700 font-medium text-sm">
                    {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                  </Label>
                  <Input
                    value={form.fullName}
                    onChange={e => set('fullName', e.target.value)}
                    className="mt-1.5"
                    required
                  />
                </div>

                <div>
                  <Label className="text-gray-700 font-medium text-sm">
                    {isAr ? 'البريد الإلكتروني *' : 'Email Address *'}
                  </Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={e => set('email', e.target.value)}
                    className="mt-1.5"
                    required
                  />
                </div>

                <div>
                  <Label className="text-gray-700 font-medium text-sm">
                    {isAr ? 'رقم الجوال *' : 'Phone Number *'}
                  </Label>
                  <Input
                    type="tel"
                    value={form.phoneNumber}
                    onChange={e => set('phoneNumber', e.target.value)}
                    className="mt-1.5"
                    placeholder="+966 5X XXX XXXX"
                    required
                  />
                </div>

                <div>
                  <Label className="text-gray-700 font-medium text-sm">
                    {isAr ? 'رقم الهوية / الإقامة *' : 'National ID / Iqama Number *'}
                  </Label>
                  <Input
                    value={form.idNumber}
                    onChange={e => set('idNumber', e.target.value)}
                    className="mt-1.5"
                    required
                  />
                </div>

                <div>
                  <Label className="text-gray-700 font-medium text-sm">
                    {isAr ? 'الجنسية *' : 'Nationality *'}
                  </Label>
                  <Select value={form.nationality} onValueChange={v => set('nationality', v)}>
                    <SelectTrigger className="mt-1.5">
                      <SelectValue placeholder={isAr ? 'اختر الجنسية' : 'Select nationality'} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="saudi">{isAr ? 'سعودي' : 'Saudi'}</SelectItem>
                      <SelectItem value="non-saudi">{isAr ? 'غير سعودي' : 'Non-Saudi'}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {mutation.isError && (
                  <p className="text-sm text-red-600">
                    {isAr ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.'}
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending
                    ? (isAr ? 'جارٍ الإرسال...' : 'Submitting...')
                    : (isAr ? 'إرسال الطلب' : 'Submit Request')}
                </Button>

              </form>
            </CardContent>
          </Card>

        </div>
      </section>
    </div>
  );
}
