/**
 * Social Media Cache Buster for Makamin OG Images
 * Forces social platforms to refresh cached images
 */

interface CacheBusterConfig {
  facebookGraphAPI?: string;
  twitterCardsAPI?: string;
  linkedInAPI?: string;
}

export class SocialCacheBuster {
  private config: CacheBusterConfig;

  constructor(config: CacheBusterConfig = {}) {
    this.config = config;
  }

  /**
   * Force Facebook to refresh OG image cache
   */
  async refreshFacebookCache(url: string): Promise<boolean> {
    try {
      const fbGraphUrl = `https://graph.facebook.com/?id=${encodeURIComponent(url)}&scrape=true`;
      
      const response = await fetch(fbGraphUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      return response.ok;
    } catch (error) {
      console.warn('Facebook cache refresh failed:', error);
      return false;
    }
  }

  /**
   * Force LinkedIn to refresh OG image cache
   */
  async refreshLinkedInCache(url: string): Promise<boolean> {
    try {
      const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      
      // LinkedIn automatically refreshes when accessed
      const response = await fetch(linkedInUrl, {
        method: 'HEAD',
      });

      return response.ok;
    } catch (error) {
      console.warn('LinkedIn cache refresh failed:', error);
      return false;
    }
  }

  /**
   * Force cache refresh across all platforms
   */
  async refreshAllCaches(url: string): Promise<{ facebook: boolean; linkedin: boolean }> {
    console.log('🔄 Starting social media cache refresh for:', url);
    
    const results = await Promise.allSettled([
      this.refreshFacebookCache(url),
      this.refreshLinkedInCache(url)
    ]);

    const facebook = results[0].status === 'fulfilled' ? results[0].value : false;
    const linkedin = results[1].status === 'fulfilled' ? results[1].value : false;

    console.log('📊 Cache refresh results:', { facebook, linkedin });
    
    return { facebook, linkedin };
  }

  /**
   * Generate cache-busting URLs
   */
  generateCacheBustingUrl(baseUrl: string): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(7);
    return `${baseUrl}?v=makamin-${timestamp}-${random}`;
  }
}

// Initialize global cache buster
export const socialCacheBuster = new SocialCacheBuster();

// Auto-refresh cache on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    socialCacheBuster.refreshAllCaches(window.location.href);
  });
}