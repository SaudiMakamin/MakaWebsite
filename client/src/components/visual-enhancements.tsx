import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Premium gradient backgrounds
export const PremiumGradient = ({ 
  variant = "makamin",
  className = ""
}: {
  variant?: "makamin" | "energy" | "ocean" | "gold";
  className?: string;
}) => {
  const gradients = {
    makamin: "bg-gradient-to-br from-blue-900 via-blue-700 to-teal-600",
    energy: "bg-gradient-to-br from-orange-600 via-red-600 to-red-800",
    ocean: "bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-900",
    gold: "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600"
  };

  return (
    <div className={`${gradients[variant]} ${className}`}>
      {/* Animated overlay pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] animate-pulse"></div>
    </div>
  );
};

// Floating particles effect
export const FloatingParticles = ({ count = 30 }: { count?: number }) => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 5
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Glass morphism card
export const GlassCard = ({ 
  children, 
  className = "",
  blur = "backdrop-blur-lg"
}: { 
  children: React.ReactNode;
  className?: string;
  blur?: string;
}) => (
  <div className={`
    bg-white/10 ${blur} 
    border border-white/20 
    rounded-2xl shadow-2xl 
    ${className}
  `}>
    {children}
  </div>
);

// Animated counter with glow effect
export const GlowCounter = ({ 
  value, 
  duration = 2,
  suffix = "",
  prefix = "",
  className = ""
}: {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const timer = setInterval(() => {
      start += end / (duration * 60);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <motion.div
      className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 ${className}`}
      style={{
        textShadow: "0 0 20px rgba(251, 191, 36, 0.5)"
      }}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.div>
  );
};

// Ripple effect on click
export const RippleButton = ({ 
  children, 
  onClick,
  className = ""
}: { 
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  const [ripples, setRipples] = useState<Array<{
    id: number;
    x: number;
    y: number;
  }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      id: Date.now(),
      x,
      y
    };

    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) onClick();
  };

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none"
          style={{
            left: ripple.x - 25,
            top: ripple.y - 25,
            width: 50,
            height: 50,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </button>
  );
};

// Glitch text effect for branding
export const GlitchText = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 text-red-500 animate-pulse opacity-70 translate-x-1">
      {children}
    </div>
    <div className="absolute inset-0 text-blue-500 animate-pulse opacity-70 -translate-x-1">
      {children}
    </div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);