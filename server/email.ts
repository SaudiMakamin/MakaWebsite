import sgMail from "@sendgrid/mail";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || "noreply@makamin.com.sa";

export async function sendShareholderConfirmation(params: {
  toEmail: string;
  fullName: string;
  requestId: string;
}): Promise<{ sent: boolean; reason?: string }> {
  if (!SENDGRID_API_KEY) {
    return { sent: false, reason: "SENDGRID_API_KEY not configured" };
  }

  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    await sgMail.send({
      to: params.toEmail,
      from: FROM_EMAIL,
      subject: `استلام طلبكم — ${params.requestId} | مكامن السعودية`,
      text: [
        `عزيزي/عزيزتي ${params.fullName}،`,
        "",
        "تم استلام طلبكم بنجاح.",
        `الرقم المرجعي: ${params.requestId}`,
        "سيتم مراجعة الطلب من قبل الإدارة المختصة.",
        "يرجى الاحتفاظ بالرقم المرجعي لاستخدامه عند المتابعة.",
        "",
        "مكامن السعودية القابضة لخدمات النفط والغاز",
      ].join("\n"),
      html: `
        <div dir="rtl" style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;color:#1a1a1a">
          <p style="font-size:14px;margin-bottom:8px">عزيزي/عزيزتي ${params.fullName}،</p>
          <p style="font-size:15px;font-weight:bold;color:#1d4ed8">تم استلام طلبكم بنجاح.</p>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:16px 24px;margin:20px 0">
            <p style="margin:0 0 4px;font-size:12px;color:#64748b">الرقم المرجعي</p>
            <p style="margin:0;font-size:22px;font-weight:bold;color:#1d4ed8">${params.requestId}</p>
          </div>
          <p style="font-size:14px;color:#374151">سيتم مراجعة الطلب من قبل الإدارة المختصة.</p>
          <p style="font-size:14px;color:#374151">يرجى الاحتفاظ بالرقم المرجعي لاستخدامه عند المتابعة.</p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0"/>
          <p style="font-size:12px;color:#9ca3af">مكامن السعودية القابضة لخدمات النفط والغاز</p>
        </div>
      `,
    });

    return { sent: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("SendGrid error:", msg);
    return { sent: false, reason: msg };
  }
}
