import { motion } from 'framer-motion';

export const AnimatedDrillIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial="hidden"
    animate="visible"
  >
    <motion.path
      d="M20 80 L50 20 L80 80"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
          pathLength: 1, 
          opacity: 1,
          transition: { duration: 2, ease: "easeInOut" }
        }
      }}
    />
    <motion.circle
      cx="50"
      cy="20"
      r="8"
      fill="currentColor"
      initial={{ scale: 0, rotate: 0 }}
      animate={{ 
        scale: 1, 
        rotate: 360,
        transition: { 
          scale: { delay: 1, duration: 0.5 },
          rotate: { delay: 1.5, duration: 2, repeat: Infinity, ease: "linear" }
        }
      }}
    />
    <motion.rect
      x="46"
      y="75"
      width="8"
      height="15"
      fill="currentColor"
      initial={{ scaleY: 0, originY: 0 }}
      animate={{ 
        scaleY: 1,
        transition: { delay: 2, duration: 0.8, ease: "easeOut" }
      }}
    />
  </motion.svg>
);

export const AnimatedShipIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial="hidden"
    animate="visible"
  >
    <motion.path
      d="M10 60 Q20 50 30 60 L70 60 Q80 50 90 60 L90 70 Q50 80 10 70 Z"
      fill="currentColor"
      opacity="0.3"
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: { 
          pathLength: 1, 
          opacity: 0.3,
          transition: { duration: 1.5, ease: "easeInOut" }
        }
      }}
    />
    <motion.rect
      x="20"
      y="40"
      width="60"
      height="20"
      rx="3"
      fill="currentColor"
      initial={{ scaleX: 0, originX: 0.5 }}
      animate={{ 
        scaleX: 1,
        transition: { delay: 0.5, duration: 1, ease: "easeOut" }
      }}
    />
    <motion.rect
      x="45"
      y="20"
      width="3"
      height="20"
      fill="currentColor"
      initial={{ scaleY: 0, originY: 1 }}
      animate={{ 
        scaleY: 1,
        transition: { delay: 1.5, duration: 0.8, ease: "easeOut" }
      }}
    />
    <motion.polygon
      points="48,20 55,30 40,30"
      fill="currentColor"
      opacity="0.7"
      initial={{ scale: 0, originY: 1 }}
      animate={{ 
        scale: 1,
        transition: { delay: 2, duration: 0.5, ease: "easeOut" }
      }}
    />
  </motion.svg>
);

export const AnimatedPipelineIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial="hidden"
    animate="visible"
  >
    <motion.rect
      x="10"
      y="45"
      width="80"
      height="10"
      rx="5"
      fill="currentColor"
      opacity="0.3"
      variants={{
        hidden: { scaleX: 0, originX: 0 },
        visible: { 
          scaleX: 1,
          transition: { duration: 2, ease: "easeInOut" }
        }
      }}
    />
    <motion.rect
      x="10"
      y="47"
      width="80"
      height="6"
      rx="3"
      fill="currentColor"
      variants={{
        hidden: { scaleX: 0, originX: 0 },
        visible: { 
          scaleX: 1,
          transition: { delay: 0.5, duration: 2, ease: "easeInOut" }
        }
      }}
    />
    {/* Flow animation */}
    <motion.circle
      r="2"
      fill="orange"
      initial={{ x: 15, y: 50 }}
      animate={{ 
        x: [15, 85, 15],
        transition: { 
          delay: 2, 
          duration: 3, 
          repeat: Infinity, 
          ease: "linear" 
        }
      }}
    />
    <motion.rect
      x="20"
      y="40"
      width="3"
      height="20"
      fill="currentColor"
      initial={{ scaleY: 0, originY: 0.5 }}
      animate={{ 
        scaleY: 1,
        transition: { delay: 1, duration: 0.5 }
      }}
    />
    <motion.rect
      x="75"
      y="40"
      width="3"
      height="20"
      fill="currentColor"
      initial={{ scaleY: 0, originY: 0.5 }}
      animate={{ 
        scaleY: 1,
        transition: { delay: 1.5, duration: 0.5 }
      }}
    />
  </motion.svg>
);

export const AnimatedOilRigIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <motion.svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial="hidden"
    animate="visible"
  >
    {/* Base platform */}
    <motion.rect
      x="20"
      y="70"
      width="60"
      height="8"
      fill="currentColor"
      variants={{
        hidden: { scaleX: 0, originX: 0.5 },
        visible: { 
          scaleX: 1,
          transition: { duration: 1, ease: "easeOut" }
        }
      }}
    />
    {/* Support pillars */}
    <motion.rect
      x="25"
      y="60"
      width="4"
      height="18"
      fill="currentColor"
      variants={{
        hidden: { scaleY: 0, originY: 1 },
        visible: { 
          scaleY: 1,
          transition: { delay: 0.5, duration: 0.8, ease: "easeOut" }
        }
      }}
    />
    <motion.rect
      x="71"
      y="60"
      width="4"
      height="18"
      fill="currentColor"
      variants={{
        hidden: { scaleY: 0, originY: 1 },
        visible: { 
          scaleY: 1,
          transition: { delay: 0.7, duration: 0.8, ease: "easeOut" }
        }
      }}
    />
    {/* Derrick tower */}
    <motion.polygon
      points="48,20 52,20 60,60 40,60"
      fill="currentColor"
      opacity="0.8"
      variants={{
        hidden: { scaleY: 0, originY: 1 },
        visible: { 
          scaleY: 1,
          transition: { delay: 1, duration: 1.5, ease: "easeOut" }
        }
      }}
    />
    {/* Drilling animation */}
    <motion.rect
      x="49"
      y="60"
      width="2"
      height="20"
      fill="orange"
      initial={{ scaleY: 0, originY: 0 }}
      animate={{ 
        scaleY: [0, 1, 0],
        transition: { 
          delay: 2.5, 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }
      }}
    />
  </motion.svg>
);