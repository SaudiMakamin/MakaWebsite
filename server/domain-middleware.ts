import type { Request, Response, NextFunction } from 'express';

// Custom domain middleware to handle makamin.com.sa requests
export function domainRedirectMiddleware(req: Request, res: Response, next: NextFunction) {
  const host = req.get('host');
  const protocol = req.get('x-forwarded-proto') || req.protocol;
  
  // If request comes from makamin.com.sa but not HTTPS, redirect to Replit
  if (host?.includes('makamin.com.sa')) {
    // Check if SSL certificate is working
    if (protocol !== 'https') {
      // Redirect to working Replit URL temporarily
      return res.redirect(301, 'https://maka-website-adelalnoob.replit.app' + req.originalUrl);
    }
    
    // Log successful HTTPS request from custom domain
    console.log(`✅ HTTPS request from ${host} - SSL working!`);
  }
  
  next();
}

// Health check for domain monitoring
export function domainHealthCheck(req: Request, res: Response) {
  const host = req.get('host');
  const protocol = req.get('x-forwarded-proto') || req.protocol;
  
  res.json({
    status: 'ok',
    domain: host,
    protocol: protocol,
    ssl_working: protocol === 'https' && host?.includes('makamin.com.sa'),
    timestamp: new Date().toISOString(),
    message: host?.includes('makamin.com.sa') 
      ? 'Custom domain detected' 
      : 'Replit domain active'
  });
}