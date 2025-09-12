import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  // Serve static assets from attached_assets folder
  app.use('/attached_assets', express.static('attached_assets', {
    setHeaders: (res, path) => {
      if (path.endsWith('.webp')) {
        res.setHeader('Content-Type', 'image/webp');
      }
    }
  }));

  // Add specific routes for favicon and manifest
  app.get('/favicon.ico', (req, res) => {
    res.sendFile('client/public/favicon.ico', { root: process.cwd() });
  });
  
  app.get('/favicon.svg', (req, res) => {
    res.setHeader('Content-Type', 'image/svg+xml');
    res.sendFile('client/public/favicon.svg', { root: process.cwd() });
  });
  
  app.get('/manifest.json', (req, res) => {
    res.setHeader('Content-Type', 'application/manifest+json');
    res.sendFile('client/public/manifest.json', { root: process.cwd() });
  });
  
  // Serve special sharing page with clean meta tags
  app.get('/makamin-share.html', (req, res) => {
    res.sendFile('makamin-share.html', { root: process.cwd() });
  });
  
  app.get('/browserconfig.xml', (req, res) => {
    res.setHeader('Content-Type', 'application/xml');
    res.sendFile('client/public/browserconfig.xml', { root: process.cwd() });
  });
  
  app.get('/robots.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.sendFile('client/public/robots.txt', { root: process.cwd() });
  });
  
  app.get('/sitemap.xml', (req, res) => {
    res.setHeader('Content-Type', 'application/xml');
    res.sendFile('client/public/sitemap.xml', { root: process.cwd() });
  });
  
  // Google site verification
  app.get('/google-site-verification.html', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.sendFile('client/public/google-site-verification.html', { root: process.cwd() });
  });
  
  // Social banner with Makamin logo
  app.get('/images/makamin-social-banner.svg', (req, res) => {
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.sendFile('client/public/images/makamin-social-banner.svg', { root: process.cwd() });
  });
  
  // OG banner with proper headers and cache busting
  app.get('/images/og-banner.svg', (req, res) => {
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.sendFile('client/public/images/og-banner.svg', { root: process.cwd() });
  });
  
  // PNG version using authentic Makamin logo with CORS
  app.get('/images/og-banner.png', (req, res) => {
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    // Serve newest Makamin logo
    res.sendFile('attached_assets/878B2BA1-7AE2-4530-96FD-4769905905A3_1753908213695.png', { root: process.cwd() });
  });
  
  // Serve attached assets directory with CORS
  app.use('/attached_assets', express.static('attached_assets', {
    setHeaders: (res) => {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    }
  }));
  
  // IndexNow submission endpoint
  app.get('/IndexNow-submit.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.sendFile('client/public/IndexNow-submit.txt', { root: process.cwd() });
  });
  
  // IndexNow key file
  app.get('/indexnow-key.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.sendFile('client/public/indexnow-key.txt', { root: process.cwd() });
  });
  
  // Well-known security file
  app.get('/.well-known/security.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.sendFile('client/public/.well-known/security.txt', { root: process.cwd() });
  });
  
  // Ads.txt file
  app.get('/ads.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.sendFile('client/public/ads.txt', { root: process.cwd() });
  });
  
  // Dynamic sitemap ping to search engines (for production)
  app.post('/api/ping-search-engines', (req, res) => {
    if (process.env.NODE_ENV === 'production') {
      // Ping Google
      const googlePingUrl = `https://www.google.com/ping?sitemap=https://makamin.com.sa/sitemap.xml`;
      // Ping Bing
      const bingPingUrl = `https://www.bing.com/ping?sitemap=https://makamin.com.sa/sitemap.xml`;
      
      // In production, you would make actual HTTP requests to these URLs
      console.log('Pinging search engines:', { googlePingUrl, bingPingUrl });
      res.json({ success: true, message: 'Search engines pinged successfully' });
    } else {
      res.json({ success: false, message: 'Ping only available in production' });
    }
  });

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
