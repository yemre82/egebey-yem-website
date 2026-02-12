import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    clipPath: 'circle(0% at 50% 50%)',
  },
  animate: {
    opacity: 1,
    clipPath: 'circle(150% at 50% 50%)',
    transition: {
      clipPath: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
      opacity: { duration: 0.3 },
    },
  },
  exit: {
    opacity: 0,
    clipPath: 'circle(0% at 50% 50%)',
    transition: {
      clipPath: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
      opacity: { duration: 0.3, delay: 0.2 },
    },
  },
};

const PageTransition = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

export default PageTransition;
