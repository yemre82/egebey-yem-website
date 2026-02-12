import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CountUp = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
        setDone(true);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ scale: 0.5, filter: 'blur(8px)', opacity: 0 }}
      animate={isInView ? { scale: 1, filter: 'blur(0px)', opacity: 1 } : {}}
      transition={{ type: 'spring', stiffness: 100, damping: 15, duration: 0.6 }}
      className="inline-block relative"
    >
      {prefix}{count.toLocaleString('tr-TR')}{suffix}
      {done && (
        <motion.span
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ opacity: 0, scale: 2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute inset-0 rounded-lg bg-white/20 pointer-events-none"
        />
      )}
    </motion.span>
  );
};

export default CountUp;
