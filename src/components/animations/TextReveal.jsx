import { motion } from 'framer-motion';

const TextReveal = ({ text, className = '', delay = 0, staggerDelay = 0.04 }) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariant = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={`inline-flex flex-wrap justify-center ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariant}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
