import { useState, useEffect } from 'react';
import { useLanguageContext } from './language-provider';
import makaminLogoPath from '@assets/logo mkamin_1752524503536.png';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);
  const { t } = useLanguageContext();

  useEffect(() => {
    const progressTimer = setTimeout(() => {
      setProgress(100);
    }, 500);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-pulse">
          <img 
            src={makaminLogoPath} 
            alt="شعار مكامن السعودية القابضة" 
            className="w-80 h-auto mx-auto mb-8 drop-shadow-2xl filter brightness-105"
          />
        </div>
        <div className="w-64 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-makamin-blue to-blue-600 rounded-full loading-progress"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 text-makamin-gray text-sm font-medium">
          {t('loading')}
        </p>
      </div>
    </div>
  );
}
