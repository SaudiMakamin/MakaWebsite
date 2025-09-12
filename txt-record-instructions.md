# إضافة TXT Record للتحقق من النطاق

## TXT Record من Replit:
```
replit-verify-609f2cf-dc7...
```

## خطوات الإضافة في Cloudflare:

### 1. اذهب إلى Cloudflare DNS
- dashboard.cloudflare.com
- اختر makamin.com.sa
- DNS → Records

### 2. أضف TXT Record
- اضغط "Add record"
- Type: **TXT**
- Name: **makamin.com.sa** (أو اتركه فارغ أو ضع @)
- Content: **replit-verify-609f2cf-dc7...** (النص الكامل من Replit)
- Proxy status: **DNS only** (رمادي)
- TTL: **Auto**
- احفظ

### 3. العودة إلى Replit
- اضغط "I've added the TXT record" أو "Verify"
- انتظر 2-3 دقائق للتحقق

### 4. بعد نجاح التحقق
Replit سيعطيك:
- IP address جديد للـ A record
- إرشادات DNS إضافية

## المتوقع:
✅ Domain verification successful
✅ SSL certificate سيتم إنشاؤه تلقائياً
✅ makamin.com.sa سيصبح Active

ابدأ بإضافة TXT record في Cloudflare الآن!