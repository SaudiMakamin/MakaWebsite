import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ 
  value, 
  duration = 2, 
  prefix = '', 
  suffix = '', 
  className = '' 
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      });

      let startTime: number;
      let animationId: number;

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = Math.floor(easeOutQuart * value);
        
        setDisplayValue(currentValue);

        if (progress < 1) {
          animationId = requestAnimationFrame(animateCount);
        } else {
          setDisplayValue(value);
        }
      };

      animationId = requestAnimationFrame(animateCount);

      return () => {
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    }
  }, [isInView, value, duration, controls]);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className={className}
    >
      <span className="tabular-nums">
        {prefix}{formatNumber(displayValue)}{suffix}
      </span>
    </motion.div>
  );
}