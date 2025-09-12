import { motion } from 'framer-motion';
import { useRef } from 'react';

// Enhanced hover animations for perfect digital interactions
export const HoverCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    className={`cursor-pointer ${className}`}
    whileHover={{ 
      scale: 1.02, 
      y: -5,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
    }}
    whileTap={{ scale: 0.98 }}
    transition={{ 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }}
  >
    {children}
  </motion.div>
);

// Button with premium interaction
export const PremiumButton = ({ 
  children, 
  onClick, 
  className = "",
  variant = "primary" 
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}) => {
  const variants = {
    primary: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black",
    secondary: "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
  };

  return (
    <motion.button
      className={`px-8 py-4 rounded-lg font-bold text-lg shadow-lg ${variants[variant]} ${className}`}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
};

// Icon with rotation on hover
export const AnimatedIcon = ({ 
  icon: Icon, 
  className = "",
  color = "text-blue-600" 
}: { 
  icon: any; 
  className?: string;
  color?: string;
}) => (
  <motion.div
    className={`${color} ${className}`}
    whileHover={{ 
      rotate: 360,
      scale: 1.2
    }}
    transition={{ 
      duration: 0.6,
      ease: "easeInOut"
    }}
  >
    <Icon size={24} />
  </motion.div>
);

// Glowing text effect
export const GlowText = ({ 
  children, 
  className = "",
  glowColor = "text-yellow-400" 
}: { 
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) => (
  <motion.div
    className={`${glowColor} ${className}`}
    whileHover={{
      textShadow: "0 0 20px currentColor, 0 0 40px currentColor"
    }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

// Floating animation for statistics
export const FloatingStats = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    animate={{ 
      y: [0, -10, 0],
    }}
    transition={{ 
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

// Parallax scroll effect
export const ParallaxElement = ({ 
  children, 
  offset = 50,
  className = ""
}: { 
  children: React.ReactNode;
  offset?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      className={className}
      whileInView={{
        y: [-offset, offset]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// 3D card tilt effect
export const TiltCard = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    className={`perspective-1000 ${className}`}
    whileHover={{
      rotateX: 5,
      rotateY: 5,
      scale: 1.05
    }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    {children}
  </motion.div>
);

// Removed unused function - using motion directly from framer-motion