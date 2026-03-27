/**
 * A2 POC — Direct Browser → Google Apps Script
 * ISOLATED TEST ONLY — not linked from production nav
 * Route: /dev/gas-poc
 *
 * Requires env vars (Replit dev only):
 *   VITE_GAS_SUBMIT_URL   = same value as server GAS_SUBMIT_URL
 *   VITE_GAS_POC_SECRET   = same value as MAKAMIN_GAS_SECRET
 */

import { useState, useRef } from 'react';
import { useLanguage } from '@/components/language-provider';

const GAS_URL = import.meta.env.VITE_GAS_SUBMIT_URL as string | undefined;
const GAS_SECRET = import.meta.env.VITE_GAS_POC_SECRET as string | undefined;

type DiagResult =
  | { phase: 'idle' }
  | { phase: 'loading' }
  | { phase: 'success'; requestId: string; raw: string }
  | { phase: 'error'; kind: 'cors' | 'http' | 'json_mismatch' | 'gas_rejected' | 'env_missing' | 'unknown'; status?: number; body?: string; message: string };

function classifyError(err: unknown, status?: number, body?: string): DiagResult {
  if (!GAS_URL || !GAS_SECRET) {
    return { phase: 'error', kind: 'env_missing', message: 'VITE_GAS_SUBMIT_URL or VITE_GAS_POC_SECRET not set' };
  }
  if (err instanceof TypeError && (String(err.message).includes('fetch') || String(err.message).includes('network'))) {
    return { phase: 'error', kind: 'cors', message: `CORS / network block — ${err.message}` };
  }
  if (status !== undefined && status !== 200) {
    return { phase: 'error', kind: 'http', status, body, message: `HTTP ${status}` };
  }
  return { phase: 'error', kind: 'unknown', message: String(err) };
}

function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const result = e.target?.result as string;
      resolve(result.split(',')[1]);
    };
    reader.onerror = () => reject(new Error('FileReader failed'));
    reader.readAsDataURL(file);
  });
}

export default function GasPocTest() {
  const { language } = useLanguage();
  const isAr = language === 'ar';
  const fileRef = useRef<HTMLInputElement>(null);

  const [fullName, setFullName] = useState('');
  const [idOrCr, setIdOrCr] = useState('');
  const [fileName, setFileName] = useState('');
  const [result, setResult] = useState<DiagResult>({ phase: 'idle' });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!GAS_URL || !GAS_SECRET) {
      setResult({ phase: 'error', kind: 'env_missing', message: 'VITE_GAS_SUBMIT_URL or VITE_GAS_POC_SECRET not set in .env' });
      return;
    }

    const file = fileRef.current?.files?.[0];
    if (!fullName.trim() || !idOrCr.trim() || !file) {
      setResult({ phase: 'error', kind: 'unknown', message: 'All fields required' });
      return;
    }

    setResult({ phase: 'loading' });

    let base64: string;
    try {
      base64 = await readFileAsBase64(file);
    } catch (err) {
      setResult({ phase: 'error', kind: 'unknown', message: `FileReader error: ${err}` });
      return;
    }

    const payload = {
      action: 'submit',
      _secret: GAS_SECRET,
      fullName: fullName.trim(),
      idOrCr: idOrCr.trim(),
      mainDocumentBase64: base64,
      mainDocumentName: file.name,
      // POC minimal — omit other fields; GAS may reject with missing-field error (not CORS)
      _pocTest: true,
    };

    let status: number | undefined;
    let body: string | undefined;

    try {
      // CORS strategy: omit Content-Type to avoid preflight OPTIONS request.
      // Default Content-Type for string body is text/plain — no preflight triggered.
      // GAS reads payload via e.postData.contents and parses JSON itself.
      const response = await fetch(GAS_URL, {
        method: 'POST',
        body: JSON.stringify(payload),
        // NO Content-Type header intentionally
      });

      status = response.status;
      body = await response.text().catch(() => '(unreadable)');

      if (!response.ok) {
        setResult({ phase: 'error', kind: 'http', status, body, message: `HTTP ${status}` });
        return;
      }

      // Check if response is JSON
      let parsed: Record<string, unknown>;
      try {
        parsed = JSON.parse(body);
      } catch {
        setResult({
          phase: 'error',
          kind: 'json_mismatch',
          status,
          body: body.slice(0, 500),
          message: 'Response is not JSON — GAS may have returned HTML',
        });
        return;
      }

      if (parsed.success === true) {
        const requestId = typeof parsed.requestId === 'string' ? parsed.requestId : '(none)';
        setResult({ phase: 'success', requestId, raw: body.slice(0, 1000) });
      } else {
        setResult({
          phase: 'error',
          kind: 'gas_rejected',
          status,
          body: body.slice(0, 500),
          message: `GAS returned success=false — ${parsed.error ?? parsed.message ?? ''}`,
        });
      }
    } catch (err) {
      setResult(classifyError(err, status, body));
    }
  }

  const envMissing = !GAS_URL || !GAS_SECRET;

  return (
    <div className={`min-h-screen bg-gray-50 flex items-center justify-center p-6 ${isAr ? 'rtl' : 'ltr'}`} dir={isAr ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="bg-[#0a2240] text-white px-6 py-4">
          <p className="text-xs font-mono opacity-60 mb-1">POC / DEV ONLY — NOT PRODUCTION</p>
          <h1 className="text-lg font-bold">A2 POC — Direct Browser → GAS</h1>
          <p className="text-xs opacity-70 mt-1">
            Route: /dev/gas-poc — Tests direct browser upload to Google Apps Script
          </p>
        </div>

        {/* Env warning */}
        {envMissing && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 m-4 rounded text-sm">
            <p className="font-bold text-red-700 mb-1">Env vars missing</p>
            <p className="text-red-600 font-mono text-xs">VITE_GAS_SUBMIT_URL = {GAS_URL ? '✓ set' : '✗ missing'}</p>
            <p className="text-red-600 font-mono text-xs">VITE_GAS_POC_SECRET = {GAS_SECRET ? '✓ set' : '✗ missing'}</p>
            <p className="text-red-500 mt-2 text-xs">
              Set these in Replit Secrets (prefixed VITE_) to enable the POC.
            </p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isAr ? 'الاسم الكامل' : 'Full Name'}
            </label>
            <input
              type="text"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a2240]"
              placeholder={isAr ? 'الاسم كما في الوثيقة' : 'Name as in document'}
              disabled={envMissing || result.phase === 'loading'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isAr ? 'رقم الهوية / السجل التجاري' : 'National ID / CR Number'}
            </label>
            <input
              type="text"
              value={idOrCr}
              onChange={e => setIdOrCr(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#0a2240]"
              placeholder="1234567890"
              disabled={envMissing || result.phase === 'loading'}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {isAr ? 'ملف PDF (وثيقة واحدة فقط)' : 'PDF File (one file only)'}
            </label>
            <label className={`flex items-center gap-3 border-2 border-dashed rounded px-3 py-3 cursor-pointer transition-colors ${envMissing ? 'opacity-40 cursor-not-allowed' : 'hover:border-[#0a2240]'} ${fileName ? 'border-green-400 bg-green-50' : 'border-gray-300'}`}>
              <span className="text-xl">{fileName ? '📄' : '📎'}</span>
              <span className="text-sm text-gray-600 truncate">
                {fileName || (isAr ? 'انقر لاختيار ملف PDF' : 'Click to select PDF')}
              </span>
              <input
                ref={fileRef}
                type="file"
                accept=".pdf,application/pdf"
                className="hidden"
                disabled={envMissing || result.phase === 'loading'}
                onChange={e => setFileName(e.target.files?.[0]?.name || '')}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={envMissing || result.phase === 'loading'}
            className="w-full bg-[#0a2240] text-white py-2.5 rounded font-medium text-sm hover:bg-[#0d2d56] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {result.phase === 'loading'
              ? (isAr ? 'جارٍ الإرسال...' : 'Sending...')
              : (isAr ? 'إرسال مباشر إلى GAS' : 'Submit directly to GAS')}
          </button>
        </form>

        {/* Diagnostic Result Panel */}
        {result.phase !== 'idle' && result.phase !== 'loading' && (
          <div className={`mx-6 mb-6 rounded-lg p-4 text-sm ${result.phase === 'success' ? 'bg-green-50 border border-green-300' : 'bg-red-50 border border-red-300'}`}>
            {result.phase === 'success' && (
              <>
                <p className="font-bold text-green-700 mb-2">✅ SUCCESS — A2 is viable</p>
                <p className="text-green-600 text-xs mb-1">requestId: <span className="font-mono">{result.requestId}</span></p>
                <details className="mt-2">
                  <summary className="text-xs text-green-500 cursor-pointer">Raw GAS response</summary>
                  <pre className="mt-1 text-xs bg-white rounded p-2 overflow-auto max-h-40 border">{result.raw}</pre>
                </details>
              </>
            )}

            {result.phase === 'error' && (
              <>
                <p className="font-bold text-red-700 mb-2">
                  {result.kind === 'cors' && '🚫 CORS / Network Block'}
                  {result.kind === 'http' && `🔴 HTTP Error ${result.status}`}
                  {result.kind === 'json_mismatch' && '⚠️ Response Not JSON'}
                  {result.kind === 'gas_rejected' && '⚠️ GAS Rejected Submission'}
                  {result.kind === 'env_missing' && '🔧 Config Missing'}
                  {result.kind === 'unknown' && '❌ Unknown Error'}
                </p>

                <p className="text-red-600 font-mono text-xs mb-2">{result.message}</p>

                {result.kind === 'cors' && (
                  <p className="text-red-500 text-xs bg-red-100 rounded p-2">
                    Diagnosis: GAS endpoint blocked the browser request (no CORS headers). A2 is NOT viable without a server-side relay.
                  </p>
                )}
                {result.kind === 'json_mismatch' && (
                  <>
                    <p className="text-orange-600 text-xs bg-orange-50 rounded p-2">
                      Diagnosis: CORS passed ✓ but GAS returned non-JSON (likely HTML error page). Check GAS deployment settings.
                    </p>
                    <details className="mt-2">
                      <summary className="text-xs text-gray-500 cursor-pointer">Response body preview</summary>
                      <pre className="mt-1 text-xs bg-white rounded p-2 overflow-auto max-h-40 border">{result.body}</pre>
                    </details>
                  </>
                )}
                {result.kind === 'gas_rejected' && (
                  <>
                    <p className="text-yellow-700 text-xs bg-yellow-50 rounded p-2">
                      Diagnosis: CORS passed ✓, JSON parsed ✓ — GAS received but rejected. Likely missing required fields or wrong secret. A2 is viable if full payload is sent.
                    </p>
                    <details className="mt-2">
                      <summary className="text-xs text-gray-500 cursor-pointer">GAS response</summary>
                      <pre className="mt-1 text-xs bg-white rounded p-2 overflow-auto max-h-40 border">{result.body}</pre>
                    </details>
                  </>
                )}
                {result.kind === 'http' && (
                  <details className="mt-2">
                    <summary className="text-xs text-gray-500 cursor-pointer">Response body</summary>
                    <pre className="mt-1 text-xs bg-white rounded p-2 overflow-auto max-h-40 border">{result.body}</pre>
                  </details>
                )}
              </>
            )}
          </div>
        )}

        {/* Footer note */}
        <div className="bg-gray-100 px-6 py-3 text-xs text-gray-400 border-t">
          Direct fetch() → GAS | no Content-Type header (avoids CORS preflight) | base64 PDF in JSON body
        </div>
      </div>
    </div>
  );
}
