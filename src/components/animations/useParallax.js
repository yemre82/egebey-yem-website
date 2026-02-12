import { useScroll, useTransform } from 'framer-motion';

export const useParallax = (ref, distance = 100) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return { y, opacity, scale, scrollYProgress };
};

export const useParallaxLayer = (ref, speeds = [0.2, 0.5, 0.8]) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return speeds.map((speed) => ({
    y: useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]),
    scale: useTransform(scrollYProgress, [0, 0.5, 1], [1 - speed * 0.1, 1, 1 - speed * 0.1]),
  }));
};
