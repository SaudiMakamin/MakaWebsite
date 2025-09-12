import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface QAValidationResult {
  imagePathsValid: boolean;
  contentBlocksValid: boolean;
  domIntegrityValid: boolean;
  overallPassed: boolean;
  errors: string[];
}

export const ShadowQALayer: React.FC = () => {
  const [validationResult, setValidationResult] = useState<QAValidationResult | null>(null);
  const [isDevMode, setIsDevMode] = useState(false);

  useEffect(() => {
    // Check if we're in dev mode
    setIsDevMode(import.meta.env.DEV);
    
    // Run validation checks
    performValidationChecks();
  }, []);

  const performValidationChecks = async () => {
    const errors: string[] = [];
    let imagePathsValid = true;
    let contentBlocksValid = true;
    let domIntegrityValid = true;
    let failedImageCount = 0;

    try {
      // 1. Validate image paths (with tolerance for failed images)
      const images = document.querySelectorAll('img');
      const totalImages = images.length;
      
      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        // Skip validation for hidden images or fallback SVGs
        if (img.style.display === 'none' || img.parentElement?.style.display === 'none') {
          continue;
        }
        
        if (!img.src || img.src.includes('placeholder') || img.src.includes('example')) {
          failedImageCount++;
          errors.push(`Invalid image path: ${img.src || 'undefined'}`);
        }
        
        // Check if image loads successfully (skip SVG fallbacks)
        if (!img.src.includes('data:image/svg+xml')) {
          if (img.complete && img.naturalHeight === 0) {
            failedImageCount++;
            errors.push(`Image failed to load: ${img.src}`);
          }
        }
      }
      
      // Allow up to 30% of images to fail without marking as failure
      const failureThreshold = Math.max(5, Math.floor(totalImages * 0.3));
      if (failedImageCount > failureThreshold) {
        imagePathsValid = false;
      }

      // 2. Validate critical content blocks exist (page-specific validation)
      const currentPath = window.location.pathname;
      let criticalSelectors: string[] = [];
      
      // Define page-specific selectors
      switch (currentPath) {
        case '/':
          criticalSelectors = ['.investors-section', '.services-section'];
          break;
        case '/about':
          criticalSelectors = ['.about-executive-committee'];
          break;
        case '/contact':
          criticalSelectors = ['.contact-information', '.contact-info-block'];
          break;
        case '/news':
          criticalSelectors = ['.news-center-content'];
          break;
        default:
          // For other pages, no specific validation requirements
          criticalSelectors = [];
      }

      for (const selector of criticalSelectors) {
        const element = document.querySelector(selector);
        if (!element) {
          contentBlocksValid = false;
          errors.push(`Critical content block missing on ${currentPath}: ${selector}`);
        }
      }

      // 3. Validate DOM integrity - check for unauthorized changes
      const protectedElements = document.querySelectorAll('[data-shadow-protected]');
      for (let i = 0; i < protectedElements.length; i++) {
        const element = protectedElements[i] as HTMLElement;
        const originalContent = element.getAttribute('data-original-content');
        if (originalContent && element.textContent !== originalContent) {
          domIntegrityValid = false;
          errors.push(`Unauthorized DOM change detected in protected element`);
        }
      }

      // 4. Log errors to shadow debug
      if (errors.length > 0) {
        console.group('🛡️ SHADOW DEBUG LOG - VALIDATION ERRORS');
        errors.forEach(error => console.error(error));
        console.groupEnd();
      }

    } catch (error) {
      errors.push(`Validation system error: ${error}`);
      imagePathsValid = false;
      contentBlocksValid = false;
      domIntegrityValid = false;
    }

    const overallPassed = imagePathsValid && contentBlocksValid && domIntegrityValid;

    setValidationResult({
      imagePathsValid,
      contentBlocksValid,
      domIntegrityValid,
      overallPassed,
      errors
    });

    // Log final result
    console.log(
      `🛡️ SHADOW REAPER: QA Validation ${overallPassed ? 'PASSED' : 'FAILED'} - ${errors.length} errors detected`
    );
  };

  // Don't render anything in production unless there are failures
  if (!isDevMode && validationResult?.overallPassed) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-50 max-w-md"
    >
      <div
        className={`px-4 py-3 rounded-lg border shadow-lg ${
          validationResult?.overallPassed
            ? 'bg-green-50 border-green-200 text-green-800'
            : 'bg-red-50 border-red-200 text-red-800'
        }`}
      >
        <div className="flex items-center gap-2 font-semibold">
          <span className="text-lg">
            {validationResult?.overallPassed ? '🟢' : '🔴'}
          </span>
          <span>
            SHADOW CODE INTEGRITY: {validationResult?.overallPassed ? 'PASSED' : 'FAILED'}
          </span>
        </div>
        
        {validationResult && !validationResult.overallPassed && (
          <div className="mt-2 text-sm">
            <p className="font-medium text-red-900">VIOLATION DETECTED</p>
            <ul className="mt-1 list-disc list-inside space-y-1">
              {!validationResult.imagePathsValid && (
                <li>Image path validation failed</li>
              )}
              {!validationResult.contentBlocksValid && (
                <li>Content block validation failed</li>
              )}
              {!validationResult.domIntegrityValid && (
                <li>DOM integrity validation failed</li>
              )}
            </ul>
            <p className="mt-2 text-xs text-red-700">
              Check console for detailed error log
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ShadowQALayer;