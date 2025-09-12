import makaminLogo from '@assets/logo_makamin_clean_1753109383943.png';

interface HeroLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function HeroLogo({ size = 'md', className = '' }: HeroLogoProps) {
  const sizeClasses = {
    sm: 'h-12',
    md: 'h-16',
    lg: 'h-20'
  };

  return (
    <div className={`mb-8 flex justify-center ${className}`}>
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-300 hover:scale-105">
        <img 
          src={makaminLogo} 
          alt="Makamin Logo" 
          className={`${sizeClasses[size]} w-auto mx-auto filter drop-shadow-lg`}
        />
      </div>
    </div>
  );
}