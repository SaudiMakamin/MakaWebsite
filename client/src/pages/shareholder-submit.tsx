import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, ArrowLeft, Paperclip } from 'lucide-react';
import { useLanguageContext } from '@/components/language-provider';
import { Link } from 'wouter';
import SemanticMetadata from '@/components/semantic-metadata';
import EnhancedSecurity from '@/components/enhanced-security';

interface FormState {
  shareholderType: string;
  fullName: string;
  idOrCr: string;
  nationalityOrCountry: string;
  dateOfBirth: string;
  authorizedPerson: string;
  authorizedPersonId: string;
  mobile: string;
  email: string;
  address: string;
  founderShareholder: string;
  sharesNumber: string;
  sharesWords: string;
  paidAmount: string;
  currency: string;
  bankName: string;
  accountName: string;
  iban: string;
  bankCountry: string;
  updateMobile: boolean;
  updateEmail: boolean;
  updateAddress: boolean;
  updateBank: boolean;
  updateShareholding: boolean;
  notes: string;
  declaration: boolean;
}

const initialForm: FormState = {
  shareholderType: '',
  fullName: '',
  idOrCr: '',
  nationalityOrCountry: '',
  dateOfBirth: '',
  authorizedPerson: '',
  authorizedPersonId: '',
  mobile: '',
  email: '',
  address: '',
  founderShareholder: '',
  sharesNumber: '',
  sharesWords: '',
  paidAmount: '',
  currency: 'ريال سعودي',
  bankName: '',
  accountName: '',
  iban: '',
  bankCountry: '',
  updateMobile: false,
  updateEmail: false,
  updateAddress: false,
  updateBank: false,
  updateShareholding: false,
  notes: '',
  declaration: false,
};

const REQUIRED_TEXT = [
  'shareholderType','fullName','idOrCr','nationalityOrCountry',
  'mobile','email','address','founderShareholder',
  'sharesNumber','sharesWords','paidAmount','currency',
  'bankName','accountName','iban','bankCountry',
] as const;

// Defined at module scope — prevents React remounting the hidden file input on every render
const FileField = ({
  label, required, refEl, name, docName, setDocName, error, isAr,
}: {
  label: string;
  required: boolean;
  refEl: React.RefObject<HTMLInputElement>;
  name: string;
  docName: string;
  setDocName: (v: string) => void;
  error?: string;
  isAr: boolean;
}) => (
  <div>
    <Label className="text-gray-700 font-medium text-sm">
      {label}{required && ' *'}
    </Label>
    <div
      className={`mt-1.5 flex items-center gap-3 border rounded-md px-4 py-3 bg-white cursor-pointer hover:bg-gray-50 transition ${error ? 'border-red-400' : 'border-gray-200'}`}
      onClick={() => refEl.current?.click()}
    >
      <Paperclip className="w-4 h-4 text-gray-400 flex-shrink-0" />
      <span className="text-sm text-gray-600 truncate">
        {docName || (isAr ? 'انقر لاختيار ملف PDF' : 'Click to select a PDF file')}
      </span>
    </div>
    <input
      ref={refEl}
      type="file"
      name={name}
      accept=".pdf,application/pdf"
      className="hidden"
      onChange={e => setDocName(e.target.files?.[0]?.name || '')}
    />
    {error && <p className="text-xs text-red-600 mt-1" data-error="true">{error}</p>}
    <p className="text-xs text-gray-400 mt-1">{isAr ? 'PDF فقط — الحد الأقصى 10 ميغابايت' : 'PDF only — max 10 MB'}</p>
  </div>
);

export default function ShareholderSubmit() {
  const { language } = useLanguageContext();
  const isAr = language === 'ar';

  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{ requestId: string; emailSent: boolean } | null>(null);
  const [serverError, setServerError] = useState('');

  const mainDocRef = useRef<HTMLInputElement>(null);
  const bankDocRef = useRef<HTMLInputElement>(null);
  const supportDocRef = useRef<HTMLInputElement>(null);
  const [mainDocName, setMainDocName] = useState('');
  const [bankDocName, setBankDocName] = useState('');
  const [supportDocName, setSupportDocName] = useState('');

  const set = (field: keyof FormState, value: string | boolean) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const isPdf = (f: File) =>
    f.type === 'application/pdf' || f.name.toLowerCase().endsWith('.pdf');

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    for (const k of REQUIRED_TEXT) {
      if (!form[k as keyof FormState]) {
        e[k] = isAr ? 'هذا الحقل مطلوب' : 'Required';
      }
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = isAr ? 'البريد الإلكتروني غير صالح' : 'Invalid email';
    if (!mainDocRef.current?.files?.[0])
      e.mainDocument = isAr ? 'هذا المستند مطلوب' : 'This document is required';
    else if (!isPdf(mainDocRef.current.files[0]))
      e.mainDocument = isAr ? 'يُقبل PDF فقط' : 'PDF only';
    if (!bankDocRef.current?.files?.[0])
      e.bankDocument = isAr ? 'هذا المستند مطلوب' : 'This document is required';
    else if (!isPdf(bankDocRef.current.files[0]))
      e.bankDocument = isAr ? 'يُقبل PDF فقط' : 'PDF only';
    if (supportDocRef.current?.files?.[0] && !isPdf(supportDocRef.current.files[0]))
      e.supportDocument = isAr ? 'يُقبل PDF فقط' : 'PDF only';
    if (!form.declaration)
      e.declaration = isAr ? 'يجب الموافقة على الإقرار' : 'Declaration must be accepted';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) {
      const firstErr = document.querySelector('[data-error="true"]');
      firstErr?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setSubmitting(true);
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => {
        fd.append(k, typeof v === 'boolean' ? String(v) : v);
      });
      if (mainDocRef.current?.files?.[0]) fd.append('mainDocument', mainDocRef.current.files[0]);
      if (bankDocRef.current?.files?.[0]) fd.append('bankDocument', bankDocRef.current.files[0]);
      if (supportDocRef.current?.files?.[0]) fd.append('supportDocument', supportDocRef.current.files[0]);

      const res = await fetch('/api/shareholder/submit', { method: 'POST', body: fd });
      const data = await res.json();
      if (data.success) {
        setSuccessData({ requestId: data.requestId, emailSent: data.emailSent === true });
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setServerError(data.message || (isAr ? 'حدث خطأ. يرجى المحاولة مرة أخرى.' : 'An error occurred. Please try again.'));
      }
    } catch (err) {
      console.error('[shareholder submit catch]', err);
      setServerError(isAr ? 'تعذّر الاتصال. يرجى المحاولة مرة أخرى.' : 'Connection failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (successData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4" dir={isAr ? 'rtl' : 'ltr'}>
        <SemanticMetadata page="update-shareholder" title="Request Submitted | Saudi Makamin Holding" description="" />
        <div className="bg-white border border-gray-200 rounded-lg p-10 max-w-lg w-full">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <p className="text-lg font-bold text-gray-900 text-center mb-5">
            {isAr ? 'تم استلام طلبكم بنجاح.' : 'Your request has been received successfully.'}
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-md px-6 py-4 mb-5 text-center">
            <p className="text-xs text-gray-500 mb-1">
              {isAr ? 'الرقم المرجعي' : 'Reference Number'}
            </p>
            <p className="text-xl font-bold text-blue-700 tracking-widest">
              {successData.requestId}
            </p>
          </div>

          <div className="space-y-2 mb-6 text-center">
            <p className="text-sm text-gray-700 leading-relaxed">
              {isAr
                ? 'سيتم مراجعة الطلب من قبل الإدارة المختصة.'
                : 'The request will be reviewed by the relevant administrative team.'}
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              {isAr
                ? 'يرجى الاحتفاظ بالرقم المرجعي لاستخدامه عند المتابعة.'
                : 'Please keep the reference number for use when tracking your request.'}
            </p>
            {successData.emailSent && (
              <p className="text-sm text-gray-700 leading-relaxed">
                {isAr
                  ? 'تم إرسال إشعار إلى بريدكم الإلكتروني المسجل.'
                  : 'A confirmation has been sent to your registered email address.'}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/shareholder/track">
              <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white text-sm">
                {isAr ? 'متابعة الطلب' : 'Track Request'}
              </Button>
            </Link>
            <Button
              variant="outline"
              className="w-full text-sm"
              onClick={() => {
                setSuccessData(null);
                setForm(initialForm);
                setErrors({});
                setServerError('');
              }}
            >
              {isAr ? 'تقديم طلب جديد' : 'Submit a New Request'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const err = (key: string) => errors[key] ? (
    <p className="text-xs text-red-600 mt-1" data-error="true">{errors[key]}</p>
  ) : null;

  const inputClass = (key: string) =>
    `mt-1.5 ${errors[key] ? 'border-red-400 focus-visible:ring-red-300' : ''}`;

  const SectionHead = ({ title }: { title: string }) => (
    <div className="flex items-center gap-3 mb-5 pt-2">
      <div className="w-1 h-5 bg-blue-700 rounded-full flex-shrink-0" />
      <h2 className="text-base font-bold text-gray-800">{title}</h2>
    </div>
  );


  return (
    <div className="min-h-screen bg-gray-50" dir={isAr ? 'rtl' : 'ltr'}>
      <SemanticMetadata
        page="update-shareholder"
        title="Submit Shareholder Request | Saudi Makamin Holding"
        description="Submit a new shareholder data registration or update request."
      />
      <EnhancedSecurity />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">

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
                ? 'يرجى تعبئة النموذج بالكامل بدقة. سيتم مراجعة الطلب والمرفقات من قِبل الفريق الإداري.'
                : 'Please complete the form accurately. The request and attachments will be reviewed by the administrative team.'}
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <div className="space-y-6">

              {/* SECTION 1 — نوع المساهم */}
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <SectionHead title={isAr ? 'نوع المساهم' : 'Shareholder Type'} />
                  <div>
                    <Label className="text-gray-700 font-medium text-sm">
                      {isAr ? 'نوع المساهم *' : 'Shareholder Type *'}
                    </Label>
                    <Select value={form.shareholderType} onValueChange={v => set('shareholderType', v)}>
                      <SelectTrigger className={inputClass('shareholderType')}>
                        <SelectValue placeholder={isAr ? 'اختر نوع المساهم' : 'Select shareholder type'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="فرد سعودي">فرد سعودي</SelectItem>
                        <SelectItem value="فرد خليجي">فرد خليجي</SelectItem>
                        <SelectItem value="شركة سعودية">شركة سعودية</SelectItem>
                        <SelectItem value="شركة خليجية">شركة خليجية</SelectItem>
                        <SelectItem value="شركة أجنبية">شركة أجنبية</SelectItem>
                      </SelectContent>
                    </Select>
                    {err('shareholderType')}
                  </div>
                </CardContent>
              </Card>

              {/* SECTION 2 — بيانات التعريف */}
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <SectionHead title={isAr ? 'بيانات التعريف' : 'Identification Data'} />
                  <div className="space-y-4">

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'الاسم الكامل / الاسم القانوني للشركة *' : 'Full Name / Company Legal Name *'}
                      </Label>
                      <Input value={form.fullName} onChange={e => set('fullName', e.target.value)} className={inputClass('fullName')} />
                      {err('fullName')}
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'رقم الهوية / الإقامة / جواز السفر / السجل التجاري *' : 'ID / Iqama / Passport / CR Number *'}
                      </Label>
                      <Input value={form.idOrCr} onChange={e => set('idOrCr', e.target.value)} className={inputClass('idOrCr')} />
                      {err('idOrCr')}
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'الجنسية / دولة التأسيس *' : 'Nationality / Country of Incorporation *'}
                      </Label>
                      <Input value={form.nationalityOrCountry} onChange={e => set('nationalityOrCountry', e.target.value)} className={inputClass('nationalityOrCountry')} />
                      {err('nationalityOrCountry')}
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'تاريخ الميلاد (للأفراد فقط)' : 'Date of Birth (individuals only)'}
                      </Label>
                      <Input type="date" value={form.dateOfBirth} onChange={e => set('dateOfBirth', e.target.value)} className="mt-1.5" />
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'اسم المفوض / ممثل الشركة' : 'Authorized Person / Company Representative'}
                      </Label>
                      <Input value={form.authorizedPerson} onChange={e => set('authorizedPerson', e.target.value)} className="mt-1.5" />
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'رقم هوية المفوض / إقامته / جوازه' : 'Authorized Person ID / Iqama / Passport'}
                      </Label>
                      <Input value={form.authorizedPersonId} onChange={e => set('authorizedPersonId', e.target.value)} className="mt-1.5" />
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'رقم الجوال *' : 'Mobile Number *'}
                      </Label>
                      <Input type="tel" value={form.mobile} onChange={e => set('mobile', e.target.value)} placeholder="+966 5X XXX XXXX" className={inputClass('mobile')} />
                      {err('mobile')}
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'البريد الإلكتروني *' : 'Email Address *'}
                      </Label>
                      <Input type="email" value={form.email} onChange={e => set('email', e.target.value)} className={inputClass('email')} />
                      {err('email')}
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'العنوان *' : 'Address *'}
                      </Label>
                      <Textarea value={form.address} onChange={e => set('address', e.target.value)} rows={3} className={inputClass('address')} />
                      {err('address')}
                    </div>

                  </div>
                </CardContent>
              </Card>

              {/* SECTION 3 — بيانات المساهمة */}
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <SectionHead title={isAr ? 'بيانات المساهمة' : 'Shareholding Data'} />
                  <div className="space-y-4">

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'هل أنت من المساهمين المؤسسين؟ *' : 'Are you a founding shareholder? *'}
                      </Label>
                      <Select value={form.founderShareholder} onValueChange={v => set('founderShareholder', v)}>
                        <SelectTrigger className={inputClass('founderShareholder')}>
                          <SelectValue placeholder={isAr ? 'اختر' : 'Select'} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Yes">Yes</SelectItem>
                          <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                      </Select>
                      {err('founderShareholder')}
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'عدد الأسهم رقمًا *' : 'Number of Shares (numeral) *'}
                      </Label>
                      <Input type="number" min="0" value={form.sharesNumber} onChange={e => set('sharesNumber', e.target.value)} className={inputClass('sharesNumber')} />
                      {err('sharesNumber')}
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'عدد الأسهم كتابة *' : 'Number of Shares (in words) *'}
                      </Label>
                      <Input value={form.sharesWords} onChange={e => set('sharesWords', e.target.value)} className={inputClass('sharesWords')} />
                      {err('sharesWords')}
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'القيمة المدفوعة *' : 'Amount Paid *'}
                      </Label>
                      <Input type="number" min="0" value={form.paidAmount} onChange={e => set('paidAmount', e.target.value)} className={inputClass('paidAmount')} />
                      {err('paidAmount')}
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'العملة *' : 'Currency *'}
                      </Label>
                      <Input value={form.currency} onChange={e => set('currency', e.target.value)} className={inputClass('currency')} />
                      {err('currency')}
                    </div>

                  </div>
                </CardContent>
              </Card>

              {/* SECTION 4 — البيانات البنكية */}
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <SectionHead title={isAr ? 'البيانات البنكية' : 'Banking Information'} />
                  <div className="space-y-4">

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'اسم البنك *' : 'Bank Name *'}
                      </Label>
                      <Input value={form.bankName} onChange={e => set('bankName', e.target.value)} className={inputClass('bankName')} />
                      {err('bankName')}
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'اسم صاحب الحساب *' : 'Account Holder Name *'}
                      </Label>
                      <Input value={form.accountName} onChange={e => set('accountName', e.target.value)} className={inputClass('accountName')} />
                      {err('accountName')}
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'IBAN *' : 'IBAN *'}
                      </Label>
                      <Input value={form.iban} onChange={e => set('iban', e.target.value)} className={inputClass('iban')} placeholder="SA..." />
                      {err('iban')}
                    </div>

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'دولة البنك *' : 'Bank Country *'}
                      </Label>
                      <Input value={form.bankCountry} onChange={e => set('bankCountry', e.target.value)} className={inputClass('bankCountry')} />
                      {err('bankCountry')}
                    </div>

                  </div>
                </CardContent>
              </Card>

              {/* SECTION 5 — نوع التحديث المطلوب */}
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <SectionHead title={isAr ? 'نوع التحديث المطلوب' : 'Type of Update Required'} />
                  <p className="text-xs text-gray-500 mb-4">
                    {isAr ? 'اختر ما ينطبق (يمكن اختيار أكثر من خيار)' : 'Select all that apply'}
                  </p>
                  <div className="space-y-3">
                    {([
                      ['updateMobile',      isAr ? 'تحديث رقم الجوال'     : 'Update mobile number'],
                      ['updateEmail',       isAr ? 'تحديث البريد الإلكتروني' : 'Update email address'],
                      ['updateAddress',     isAr ? 'تحديث العنوان'         : 'Update address'],
                      ['updateBank',        isAr ? 'تحديث البيانات البنكية' : 'Update banking data'],
                      ['updateShareholding',isAr ? 'تحديث بيانات المساهمة'  : 'Update shareholding data'],
                    ] as [keyof FormState, string][]).map(([key, label]) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={form[key] as boolean}
                          onChange={e => set(key, e.target.checked)}
                          className="w-4 h-4 rounded border-gray-300 text-blue-700 accent-blue-700"
                        />
                        <span className="text-sm text-gray-700">{label}</span>
                      </label>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* SECTION 6 — المرفقات */}
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <SectionHead title={isAr ? 'المرفقات' : 'Attachments'} />
                  <div className="space-y-5">

                    <FileField
                      label={isAr ? 'الهوية / السجل التجاري / مستند التأسيس' : 'ID / CR / Incorporation Document'}
                      required
                      refEl={mainDocRef}
                      name="mainDocument"
                      docName={mainDocName}
                      setDocName={setMainDocName}
                      error={errors.mainDocument}
                      isAr={isAr}
                    />

                    <FileField
                      label={isAr ? 'شهادة الآيبان / خطاب بنكي' : 'IBAN Certificate / Bank Letter'}
                      required
                      refEl={bankDocRef}
                      name="bankDocument"
                      docName={bankDocName}
                      setDocName={setBankDocName}
                      error={errors.bankDocument}
                      isAr={isAr}
                    />

                    <FileField
                      label={isAr ? 'مستندات داعمة أخرى' : 'Other Supporting Documents'}
                      required={false}
                      refEl={supportDocRef}
                      name="supportDocument"
                      docName={supportDocName}
                      setDocName={setSupportDocName}
                      error={errors.supportDocument}
                      isAr={isAr}
                    />

                  </div>
                </CardContent>
              </Card>

              {/* SECTION 7 — ملاحظات وإقرار */}
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <SectionHead title={isAr ? 'ملاحظات وإقرار' : 'Notes & Declaration'} />
                  <div className="space-y-5">

                    <div>
                      <Label className="text-gray-700 font-medium text-sm">
                        {isAr ? 'ملاحظات إضافية' : 'Additional Notes'}
                      </Label>
                      <Textarea
                        value={form.notes}
                        onChange={e => set('notes', e.target.value)}
                        rows={3}
                        className="mt-1.5"
                        placeholder={isAr ? 'أي معلومات إضافية...' : 'Any additional information...'}
                      />
                    </div>

                    <div className={`border rounded-md p-4 ${errors.declaration ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-gray-50'}`}>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={form.declaration}
                          onChange={e => set('declaration', e.target.checked)}
                          className="w-4 h-4 mt-0.5 rounded border-gray-300 accent-blue-700 flex-shrink-0"
                        />
                        <span className="text-sm text-gray-700 leading-relaxed font-medium">
                          {isAr
                            ? 'أقر بصحة البيانات والمستندات المرفقة وأتحمل مسؤولية صحتها'
                            : 'I declare that all provided data and attached documents are accurate and I bear full responsibility for their correctness'}
                        </span>
                      </label>
                      {err('declaration')}
                    </div>

                  </div>
                </CardContent>
              </Card>

              {serverError && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <p className="text-sm text-red-700">{serverError}</p>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 text-base"
                disabled={submitting}
              >
                {submitting
                  ? (isAr ? 'جارٍ الإرسال...' : 'Submitting...')
                  : (isAr ? 'إرسال الطلب' : 'Submit Request')}
              </Button>

            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
