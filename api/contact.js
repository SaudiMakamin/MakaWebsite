// Vercel API function for handling contact form submissions
// This function replaces the Express server endpoint for production deployment

export default async function handler(req, res) {
  // Set CORS headers for security
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed'
    });
  }

  try {
    const { firstName, lastName, email, company, subject, message } = req.body;

    // Basic validation
    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Create contact message object
    const contactMessage = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim() || '',
      subject: subject.trim(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      id: Date.now().toString() // Simple ID generation
    };

    // In a real implementation, you would:
    // 1. Save to database (PostgreSQL, MongoDB, etc.)
    // 2. Send email notification using SendGrid, Resend, or similar
    // 3. Store in external service like Airtable, Google Sheets
    
    // For now, we'll log the message (visible in Vercel function logs)
    console.log('📧 Contact Form Submission:', {
      id: contactMessage.id,
      name: `${contactMessage.firstName} ${contactMessage.lastName}`,
      email: contactMessage.email,
      company: contactMessage.company,
      subject: contactMessage.subject,
      timestamp: contactMessage.timestamp
    });

    // Simulate email sending (replace with actual email service)
    const emailSent = await simulateEmailSending(contactMessage);

    if (!emailSent) {
      return res.status(500).json({
        success: false,
        message: 'Failed to send notification email'
      });
    }

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully',
      id: contactMessage.id
    });

  } catch (error) {
    console.error('❌ Contact form API error:', error);
    
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}

// Simulate email sending - replace with actual email service
async function simulateEmailSending(contactMessage) {
  try {
    // Here you would integrate with:
    // - SendGrid (requires SENDGRID_API_KEY)
    // - Resend (requires RESEND_API_KEY) 
    // - EmailJS (client-side solution)
    // - Formspree (external form handling)
    
    // For demonstration, we'll simulate a successful email
    console.log('📮 Email notification would be sent to: info@makamin.com.sa');
    console.log('📝 Message details:', {
      from: contactMessage.email,
      name: `${contactMessage.firstName} ${contactMessage.lastName}`,
      subject: `New Contact Form: ${contactMessage.subject}`,
      company: contactMessage.company || 'Not specified'
    });
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return true; // Success
  } catch (error) {
    console.error('Email sending simulation failed:', error);
    return false;
  }
}

// Alternative implementation with external services:
// 
// For production, consider integrating with:
// 1. Resend API (modern alternative to SendGrid)
// 2. EmailJS (client-side email sending)
// 3. Formspree (handles forms without backend code)
// 4. Zapier webhooks (connects to multiple services)