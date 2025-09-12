// Social Media Sharing Optimization for Makamin
export class SocialShareOptimizer {
  private static BASE_URL = 'https://makamin.com.sa';
  
  // Ping social media crawlers to refresh cache
  static async refreshSocialCache(url: string = this.BASE_URL): Promise<void> {
    const refreshUrls = [
      // Facebook Debugger
      `https://developers.facebook.com/tools/debug/echo/?q=${encodeURIComponent(url)}`,
      // LinkedIn Inspector
      `https://www.linkedin.com/post-inspector/inspect/${encodeURIComponent(url)}`,
      // Twitter Card Validator (through internal API)
      `https://cards-dev.twitter.com/validator?url=${encodeURIComponent(url)}`
    ];

    try {
      await Promise.allSettled(
        refreshUrls.map(refreshUrl => 
          fetch(refreshUrl, { 
            method: 'HEAD', 
            mode: 'no-cors',
            cache: 'no-cache'
          }).catch(() => {
            // Silent fail for CORS issues
            console.log(`Attempted refresh for: ${refreshUrl}`);
          })
        )
      );
      
      console.log('🔄 Social media cache refresh initiated');
    } catch (error) {
      console.warn('Social cache refresh failed:', error);
    }
  }

  // Force crawl by search engines
  static async forceCrawl(): Promise<void> {
    const crawlUrls = [
      // Google ping
      `https://www.google.com/ping?sitemap=${encodeURIComponent(this.BASE_URL + '/sitemap.xml')}`,
      // Bing ping
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(this.BASE_URL + '/sitemap.xml')}`
    ];

    try {
      await Promise.allSettled(
        crawlUrls.map(crawlUrl => 
          fetch(crawlUrl, { method: 'GET', mode: 'no-cors' }).catch(() => {
            console.log(`Attempted crawl ping: ${crawlUrl}`);
          })
        )
      );
      
      console.log('🕷️ Search engine crawl ping initiated');
    } catch (error) {
      console.warn('Search engine crawl ping failed:', error);
    }
  }

  // Generate sharing URLs for different platforms
  static getShareUrls(url: string = this.BASE_URL, title: string = 'مكامن السعودية القابضة | Makamin Saudi Holding') {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedText = encodeURIComponent('شركة مكامن السعودية القابضة - استثمارات وخدمات النفط والغاز | رأس مال 1.2 مليار ريال');

    return {
      whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    };
  }

  // Test OG meta tags
  static testOGTags(): void {
    const ogTags = document.querySelectorAll('meta[property^="og:"]');
    const twitterTags = document.querySelectorAll('meta[name^="twitter:"]');
    
    console.log('🔍 Open Graph Tags:');
    ogTags.forEach(tag => {
      const property = tag.getAttribute('property');
      const content = tag.getAttribute('content');
      console.log(`  ${property}: ${content}`);
    });
    
    console.log('🐦 Twitter Card Tags:');
    twitterTags.forEach(tag => {
      const name = tag.getAttribute('name');
      const content = tag.getAttribute('content');
      console.log(`  ${name}: ${content}`);
    });
  }
}

// Auto-refresh on page load (development only)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  // Delay to avoid blocking page load
  setTimeout(() => {
    SocialShareOptimizer.refreshSocialCache();
    SocialShareOptimizer.forceCrawl();
  }, 3000);
}