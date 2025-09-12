import { useState } from 'react';
import { ExternalLink, RefreshCw, CheckCircle, AlertCircle, Copy } from 'lucide-react';

interface SocialPlatform {
  name: string;
  testUrl: string;
  instructions: string;
  color: string;
}

const socialPlatforms: SocialPlatform[] = [
  {
    name: 'Facebook',
    testUrl: 'https://developers.facebook.com/tools/debug/',
    instructions: 'انسخ رابط makamin.com.sa والصقه في Facebook Sharing Debugger',
    color: 'bg-blue-600'
  },
  {
    name: 'Twitter/X',
    testUrl: 'https://cards-dev.twitter.com/validator',
    instructions: 'انسخ رابط makamin.com.sa والصقه في Twitter Card Validator',
    color: 'bg-black'
  },
  {
    name: 'LinkedIn',
    testUrl: 'https://www.linkedin.com/post-inspector/',
    instructions: 'انسخ رابط makamin.com.sa والصقه في LinkedIn Post Inspector',
    color: 'bg-blue-700'
  },
  {
    name: 'WhatsApp',
    testUrl: '',
    instructions: 'أرسل رابط makamin.com.sa في محادثة WhatsApp لمشاهدة المعاينة',
    color: 'bg-green-600'
  }
];

export default function SocialMediaDebugger() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  const siteUrl = 'https://makamin.com.sa';
  const ogImageUrl = 'https://makamin.com.sa/images/og-banner.png?v=company-only-2025';

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-[#c5a66e] hover:bg-[#b8956a] text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-300 text-sm font-medium"
        >
          اختبر المشاركة الاجتماعية
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              اختبار المشاركة الاجتماعية
            </h2>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Current OG Image Preview */}
          <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
              معاينة الصورة الحالية
            </h3>
            <div className="bg-white rounded-lg shadow-sm border p-4">
              <img 
                src={ogImageUrl} 
                alt="Makamin OG Banner"
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/og-banner.svg';
                }}
              />
              <div className="mt-3 flex items-center gap-2">
                <input 
                  type="text" 
                  value={ogImageUrl}
                  readOnly
                  className="flex-1 px-3 py-2 text-sm bg-gray-50 border rounded"
                />
                <button
                  onClick={() => copyToClipboard(ogImageUrl)}
                  className="px-3 py-2 bg-[#c5a66e] text-white rounded hover:bg-[#b8956a] transition-colors"
                >
                  {copied === ogImageUrl ? <CheckCircle size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Social Platform Tests */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              اختبر على المنصات الاجتماعية
            </h3>
            
            {socialPlatforms.map((platform) => (
              <div key={platform.name} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${platform.color}`}></div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {platform.name}
                    </h4>
                  </div>
                  {platform.testUrl && (
                    <a
                      href={platform.testUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#c5a66e] hover:text-[#b8956a] text-sm font-medium"
                    >
                      اختبر الآن
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {platform.instructions}
                </p>
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    value={siteUrl}
                    readOnly
                    className="flex-1 px-3 py-2 text-sm bg-gray-50 dark:bg-gray-800 border rounded"
                  />
                  <button
                    onClick={() => copyToClipboard(siteUrl)}
                    className="px-3 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded transition-colors"
                  >
                    {copied === siteUrl ? <CheckCircle size={16} /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-blue-600 dark:text-blue-400 mt-0.5" size={20} />
              <div>
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
                  تعليمات مهمة
                </h4>
                <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>• انسخ رابط makamin.com.sa والصقه في أدوات الاختبار</li>
                  <li>• إذا لم تظهر الصورة، اضغط على "Scrape Again" أو "Refresh"</li>
                  <li>• قد تحتاج بعض المنصات إلى وقت لتحديث التخزين المؤقت</li>
                  <li>• تأكد من أن الصورة تظهر شعار مكامن الأصلي</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}