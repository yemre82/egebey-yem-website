import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DrawLine = ({ className = '', color = '#40916C', strokeWidth = 2 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0.5]);

  return (
    <div ref={ref} className={`absolute ${className}`}>
      <svg
        width="4"
        height="100%"
        viewBox="0 0 4 100"
        preserveAspectRatio="none"
        className="w-1 h-full"
      >
        <motion.line
          x1="2"
          y1="0"
          x2="2"
          y2="100"
          stroke={color}
          strokeWidth={strokeWidth}
          style={{ pathLength, opacity }}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export const TimelineDot = ({ index, scrollYProgress, className = '' }) => {
  const start = index * 0.15;
  const end = start + 0.1;
  const scale = useTransform(scrollYProgress, [start, end], [0, 1]);
  const dotOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.div
      style={{ scale, opacity: dotOpacity }}
      className={`w-5 h-5 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10 ${className}`}
    />
  );
};

export default DrawLine;
