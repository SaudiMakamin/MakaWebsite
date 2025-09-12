import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { pagesSEO, baseSEO, websiteStructuredData } from '@/lib/seo-config';

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: any;
}

interface SEOHeadProps {
  customSEO?: Partial<SEOConfig>;
}

export function SEOHead({ customSEO }: SEOHeadProps) {
  const [location] = useLocation();
  
  // Get SEO config for current page
  const currentPageSEO = pagesSEO[location] || baseSEO;
  const seoConfig = { ...currentPageSEO, ...customSEO };
  
  useEffect(() => {
    // Update document title
    document.title = seoConfig.title;
    
    // Update meta description
    updateMetaTag('name', 'description', seoConfig.description);
    
    // Update meta keywords
    updateMetaTag('name', 'keywords', seoConfig.keywords);
    
    // Update canonical URL
    if (seoConfig.canonicalUrl) {
      updateLinkTag('canonical', seoConfig.canonicalUrl);
    }
    
    // Update Open Graph tags
    updateMetaTag('property', 'og:title', seoConfig.ogTitle || seoConfig.title);
    updateMetaTag('property', 'og:description', seoConfig.ogDescription || seoConfig.description);
    updateMetaTag('property', 'og:url', seoConfig.canonicalUrl || `https://makamin.com.sa${location}`);
    updateMetaTag('property', 'og:image', seoConfig.ogImage || baseSEO.ogImage || '');
    
    // Update Twitter Card tags
    updateMetaTag('name', 'twitter:title', seoConfig.ogTitle || seoConfig.title);
    updateMetaTag('name', 'twitter:description', seoConfig.ogDescription || seoConfig.description);
    updateMetaTag('name', 'twitter:image', seoConfig.ogImage || baseSEO.ogImage || '');
    
    // Update structured data
    updateStructuredData(seoConfig.structuredData);
    
    // Update website structured data (only on homepage)
    if (location === '/') {
      updateStructuredData(websiteStructuredData, 'website-schema');
    }
    
  }, [location, seoConfig]);
  
  return null; // This component doesn't render anything
}

function updateMetaTag(attribute: string, name: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  
  element.content = content;
}

function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  
  element.href = href;
}

function updateStructuredData(data: any, id: string = 'page-schema') {
  // Remove existing structured data
  const existingScript = document.getElementById(id);
  if (existingScript) {
    existingScript.remove();
  }
  
  // Add new structured data if provided
  if (data) {
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
}

// SEO Component for specific pages
export function useSEO(customSEO?: Partial<SEOConfig>) {
  return <SEOHead customSEO={customSEO} />;
}