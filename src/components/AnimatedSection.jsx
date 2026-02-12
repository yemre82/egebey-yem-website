import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const effects = {
  'fade-up': {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  },
  'fade-scale': {
    initial: { opacity: 0, scale: 0.85 },
    animate: { opacity: 1, scale: 1 },
  },
  'blur-in': {
    initial: { opacity: 0, filter: 'blur(12px)', y: 20 },
    animate: { opacity: 1, filter: 'blur(0px)', y: 0 },
  },
  'slide-rotate': {
    initial: { opacity: 0, x: -60, rotate: -3 },
    animate: { opacity: 1, x: 0, rotate: 0 },
  },
  'spring-up': {
    initial: { opacity: 0, y: 80 },
    animate: { opacity: 1, y: 0 },
    transition: { type: 'spring', stiffness: 100, damping: 12 },
  },
  'zoom-blur': {
    initial: { opacity: 0, scale: 1.15, filter: 'blur(8px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
  },
};

const directionOffsets = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { y: 0, x: -60 },
  right: { y: 0, x: 60 },
};

const AnimatedSection = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  effect,
  stagger = false,
  staggerDelay = 0.08,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  if (effect && effects[effect]) {
    const fx = effects[effect];
    return (
      <motion.div
        ref={ref}
        initial={fx.initial}
        animate={isInView ? fx.animate : fx.initial}
        transition={fx.transition || {
          duration: 0.7,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: staggerDelay,
              delayChildren: delay,
            },
          },
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  const dir = directionOffsets[direction] || directionOffsets.up;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: dir.y, x: dir.x }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '' }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
      visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
