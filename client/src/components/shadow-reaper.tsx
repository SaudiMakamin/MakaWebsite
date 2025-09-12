import { useEffect, useState } from 'react';

interface LogEntry {
  timestamp: string;
  type: 'scan' | 'repair' | 'alert' | 'monitor';
  target: string;
  status: 'healthy' | 'warning' | 'error' | 'fixed';
  message: string;
}

interface ShadowReaperStatus {
  isActive: boolean;
  lastScan: string;
  totalScans: number;
  repairsPerformed: number;
  errorCount: number;
}

export const ShadowReaper: React.FC = () => {
  const [reaperStatus, setReaperStatus] = useState<ShadowReaperStatus>({
    isActive: false,
    lastScan: '',
    totalScans: 0,
    repairsPerformed: 0,
    errorCount: 0
  });

  const [isDevMode, setIsDevMode] = useState(false);

  useEffect(() => {
    setIsDevMode(import.meta.env.DEV);
    
    if (import.meta.env.DEV) {
      startShadowReaper();
    }
  }, []);

  const logActivity = (type: LogEntry['type'], target: string, status: LogEntry['status'], message: string) => {
    if (!import.meta.env.DEV) return;
    
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      type,
      target,
      status,
      message
    };

    console.group(`🛡️ SHADOW REAPER - ${type.toUpperCase()}`);
    console.log(`Target: ${target}`);
    console.log(`Status: ${status}`);
    console.log(`Message: ${message}`);
    console.groupEnd();
  };

  const startShadowReaper = () => {
    setReaperStatus(prev => ({ ...prev, isActive: true }));
    
    // Run initial scan
    performSystemScan();
    
    // Schedule regular scans every 30 seconds
    const scanInterval = setInterval(performSystemScan, 30000);
    
    return () => clearInterval(scanInterval);
  };

  const performSystemScan = () => {
    const now = new Date().toISOString();
    let repairsCount = 0;
    let errorsCount = 0;

    try {
      // 1. Image integrity check
      const images = document.querySelectorAll('img');
      images.forEach((img, index) => {
        if (img.complete && img.naturalHeight === 0 && img.src && !img.src.includes('data:image/svg+xml')) {
          errorsCount++;
          logActivity('alert', `image-${index}`, 'error', `Broken image detected: ${img.src}`);
          
          // Auto-repair with smart fallback
          const altText = img.alt || 'مكامن السعودية';
          const genericSvg = `data:image/svg+xml,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" style="background:#f1f5f9">
              <rect x="150" y="120" width="100" height="60" fill="#cbd5e1" rx="5"/>
              <text x="200" y="155" font-family="Arial, sans-serif" font-size="12" 
                    text-anchor="middle" fill="#475569">${altText}</text>
            </svg>
          `)}`;
          img.src = genericSvg;
          repairsCount++;
          logActivity('repair', `image-${index}`, 'fixed', `Auto-repaired broken image with smart placeholder`);
        } else {
          logActivity('scan', `image-${index}`, 'healthy', 'Image loading successfully');
        }
      });

      // 2. Link integrity check
      const links = document.querySelectorAll('a[href]') as NodeListOf<HTMLAnchorElement>;
      links.forEach((link, index) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#') && !document.querySelector(href)) {
          logActivity('alert', `link-${index}`, 'warning', `Anchor link target not found: ${href}`);
          
          // Auto-repair: Remove broken anchor links
          link.style.cursor = 'default';
          link.style.textDecoration = 'none';
          link.removeAttribute('href');
          repairsCount++;
          logActivity('repair', `link-${index}`, 'fixed', `Disabled broken anchor link`);
        } else {
          logActivity('scan', `link-${index}`, 'healthy', 'Link target verified');
        }
      });

      // 3. Component state verification
      const components = ['header', 'footer', 'main', 'nav'];
      components.forEach(component => {
        const element = document.querySelector(component);
        if (element) {
          logActivity('scan', component, 'healthy', 'Component rendering correctly');
        } else {
          logActivity('alert', component, 'warning', `Component ${component} not found`);
        }
      });

      // 4. Arabic text rendering check
      const arabicElements = document.querySelectorAll('*');
      let arabicTextCount = 0;
      
      arabicElements.forEach((element, index) => {
        const text = element.textContent;
        if (text && /[\u0600-\u06FF]/.test(text)) {
          arabicTextCount++;
          
          const hasEncodingIssues = text.includes('�') || text.includes('???');
          if (hasEncodingIssues) {
            errorsCount++;
            logActivity('alert', `arabic-text-${index}`, 'error', `Arabic encoding issues detected`);
            
            // Auto-repair: Clean problematic characters
            const cleanedText = text.replace(/�/g, '').replace(/\?\?\?/g, '').trim();
            if (element.textContent !== cleanedText) {
              element.textContent = cleanedText;
              repairsCount++;
              logActivity('repair', `arabic-text-${index}`, 'fixed', `Cleaned Arabic encoding issues`);
            }
          } else {
            logActivity('scan', `arabic-text-${index}`, 'healthy', 'Arabic text rendering correctly');
          }
        }
      });

      logActivity('monitor', 'arabic-system', 'healthy', `Scanned ${arabicTextCount} Arabic text elements`);

      // Update status
      setReaperStatus(prev => ({
        ...prev,
        lastScan: now,
        totalScans: prev.totalScans + 1,
        repairsPerformed: prev.repairsPerformed + repairsCount,
        errorCount: prev.errorCount + errorsCount
      }));

    } catch (error) {
      logActivity('alert', 'system', 'error', `Shadow Reaper scan failed: ${error}`);
    }
  };

  if (!isDevMode) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/80 text-white p-3 rounded-lg text-xs font-mono">
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-2 h-2 rounded-full ${reaperStatus.isActive ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
        <span className="text-green-400">🛡️ SHADOW REAPER</span>
      </div>
      <div className="space-y-1 text-gray-300">
        <div>Scans: {reaperStatus.totalScans}</div>
        <div>Repairs: {reaperStatus.repairsPerformed}</div>
        <div>Errors: {reaperStatus.errorCount}</div>
        <div>Last: {reaperStatus.lastScan ? new Date(reaperStatus.lastScan).toLocaleTimeString() : 'Never'}</div>
      </div>
    </div>
  );
};

export default ShadowReaper;