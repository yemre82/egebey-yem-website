import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GiWheat, GiFallingLeaf } from 'react-icons/gi';
import { PiLeafFill, PiGrainsFill } from 'react-icons/pi';

const elements = [
  { Icon: GiWheat, size: 'text-4xl', x: '8%', y: '12%', duration: 8, orbit: 30 },
  { Icon: GiFallingLeaf, size: 'text-3xl', x: '85%', y: '18%', duration: 10, orbit: 25 },
  { Icon: PiLeafFill, size: 'text-5xl', x: '15%', y: '65%', duration: 12, orbit: 35 },
  { Icon: PiGrainsFill, size: 'text-3xl', x: '78%', y: '40%', duration: 9, orbit: 20 },
  { Icon: GiWheat, size: 'text-4xl', x: '88%', y: '72%', duration: 11, orbit: 28 },
  { Icon: GiFallingLeaf, size: 'text-3xl', x: '5%', y: '42%', duration: 7, orbit: 22 },
  { Icon: PiGrainsFill, size: 'text-2xl', x: '45%', y: '8%', duration: 13, orbit: 18 },
  { Icon: PiLeafFill, size: 'text-3xl', x: '55%', y: '80%', duration: 10, orbit: 32 },
  { Icon: GiWheat, size: 'text-2xl', x: '30%', y: '35%', duration: 14, orbit: 15 },
  { Icon: GiFallingLeaf, size: 'text-4xl', x: '65%', y: '58%', duration: 9, orbit: 26 },
];

const FloatingElement = ({ el, index, scrollYProgress }) => {
  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -50 * (index % 3 === 0 ? 1.5 : index % 3 === 1 ? 1 : 0.5)]
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.06, 0.12, 0.06],
        scale: [0.8, 1.1, 0.8],
        x: [0, el.orbit, 0, -el.orbit, 0],
        y: [0, -el.orbit * 0.7, 0, el.orbit * 0.7, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: el.duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: index * 0.4,
      }}
      style={{
        position: 'absolute',
        left: el.x,
        top: el.y,
        y: parallaxY,
      }}
      className={`text-white/10 ${el.size} pointer-events-none`}
    >
      <el.Icon />
    </motion.div>
  );
};

const FloatingElements = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el, i) => (
        <FloatingElement key={i} el={el} index={i} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
};

export default FloatingElements;
