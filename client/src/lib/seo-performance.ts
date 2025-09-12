// SEO Performance Optimization Utilities
export class SEOPerformanceOptimizer {
  // Pre-connect to important domains
  static preconnectDomains() {
    const domains = [
      'https://www.google.com',
      'https://www.bing.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];
    
    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });
  }
  
  // Lazy load images for better performance
  static setupLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          }
        });
      });
      
      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    }
  }
  
  // Critical CSS injection
  static injectCriticalCSS() {
    const criticalCSS = `
      .hero-section { 
        background-size: cover; 
        background-position: center; 
        min-height: 100vh;
      }
      .seo-optimized-text {
        font-weight: 600;
        color: #1a202c;
      }
      .makamin-logo {
        width: auto;
        height: 40px;
        object-fit: contain;
      }
    `;
    
    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.appendChild(style);
  }
  
  // Ping search engines for indexing
  static async pingSearchEngines(urls: string[]) {
    if (process.env.NODE_ENV === 'production') {
      try {
        const response = await fetch('/api/ping-search-engines', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ urls })
        });
        
        const result = await response.json();
        console.log('Search engine ping result:', result);
        return result;
      } catch (error) {
        console.error('Failed to ping search engines:', error);
      }
    }
  }
  
  // Generate keywords from page content
  static extractKeywords(content: string): string[] {
    const arabicKeywords = [
      'مكامن', 'مكامن السعودية القابضة', 'أرامكو', 'النفط والغاز', 
      'الحفر', 'الأسمنت', 'البحرية', 'الأوفشور', 'آيزو', 'شهادات الجودة'
    ];
    
    const englishKeywords = [
      'Makamin', 'Saudi Holding', 'Aramco', 'Oil Gas Services',
      'Drilling', 'Cementing', 'Marine', 'Offshore', 'ISO', 'Quality Certifications'
    ];
    
    return [...arabicKeywords, ...englishKeywords];
  }
  
  // Setup performance monitoring
  static setupPerformanceMonitoring() {
    if ('PerformanceObserver' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      
      // Monitor Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }
  
  // Initialize all optimizations
  static initialize() {
    // Run on DOM content loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.preconnectDomains();
        this.setupLazyLoading();
        this.injectCriticalCSS();
        this.setupPerformanceMonitoring();
      });
    } else {
      this.preconnectDomains();
      this.setupLazyLoading();
      this.injectCriticalCSS();
      this.setupPerformanceMonitoring();
    }
  }
}

// Arabic SEO Keywords for better ranking
export const ARABIC_SEO_KEYWORDS = [
  'مكامن السعودية القابضة',
  'شركة مكامن',
  'مكامن للخدمات البترولية',
  'مكامن أوفشور السعودية',
  'أرامكو السعودية شراكة',
  'خدمات النفط والغاز السعودية',
  'مصفاة رأس تنورة',
  'محطة شدقم',
  'آيزو 9001:2015',
  'توف نورد سيرت',
  '1980 يوم صفر حوادث',
  '1.2 مليار ريال رأس مال',
  'شهادات الجودة الدولية',
  'خدمات الحفر والأسمنت',
  'العمليات البحرية',
  'رؤية 2030 السعودية',
  'قطاع الطاقة السعودي'
];

// English SEO Keywords for international reach
export const ENGLISH_SEO_KEYWORDS = [
  'Saudi Makamin Holding Company',
  'Makamin Petroleum Services',
  'Makamin Offshore Saudi',
  'Saudi Aramco Partnership',
  'Oil and Gas Services Saudi Arabia',
  'Ras Tanura Refinery',
  'SHEDGUM GOSP-4',
  'ISO 9001:2015 Certification',
  'TÜV NORD CERT',
  '1980 days zero accidents',
  'SAR 1.2 billion capital',
  'International Quality Certifications',
  'Drilling and Cementing Services',
  'Marine Offshore Operations',
  'Saudi Vision 2030',
  'Saudi Energy Sector'
];