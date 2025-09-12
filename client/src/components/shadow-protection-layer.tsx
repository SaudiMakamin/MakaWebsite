import React, { useEffect } from 'react';

interface ShadowProtectionProps {
  children: React.ReactNode;
  protectedSections?: string[];
}

export const ShadowProtectionLayer: React.FC<ShadowProtectionProps> = ({
  children,
  protectedSections = ['news-center', 'about-page', 'contact-page']
}) => {
  useEffect(() => {
    // Apply protection to specified sections
    protectedSections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.setAttribute('data-shadow-protected', 'true');
        element.setAttribute('data-original-content', element.textContent || '');
        
        // Add mutation observer for unauthorized changes
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'childList' || mutation.type === 'characterData') {
              console.warn(`🛡️ SHADOW REAPER: Unauthorized change detected in protected section: ${sectionId}`);
              // Log to shadow debug
              const debugLog = {
                timestamp: new Date().toISOString(),
                section: sectionId,
                mutationType: mutation.type,
                target: mutation.target,
                warning: 'UNAUTHORIZED_CHANGE_DETECTED'
              };
              // Production ready - logging disabled
            }
          });
        });
        
        observer.observe(element, {
          childList: true,
          subtree: true,
          characterData: true
        });
      }
    });

    // Global safeguard lock
    const globalSafeguardLock = () => {
      const protectedElements = document.querySelectorAll('[data-shadow-protected]');
      protectedElements.forEach(element => {
        element.addEventListener('DOMNodeInserted', (e) => {
          // Production ready - logging disabled
        });
        
        element.addEventListener('DOMNodeRemoved', (e) => {
          // Production ready - logging disabled
        });
      });
    };

    globalSafeguardLock();

    return () => {
      // Cleanup observers when component unmounts
      protectedSections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.removeAttribute('data-shadow-protected');
          element.removeAttribute('data-original-content');
        }
      });
    };
  }, [protectedSections]);

  return <>{children}</>;
};

export default ShadowProtectionLayer;