import type { Variants } from 'framer-motion';

export const fadeBlurUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(18px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08
    }
  }
};

export const floatingMotion = {
  y: [-6, 6, -6],
  transition: {
    duration: 7.5,
    ease: 'easeInOut' as const,
    repeat: Infinity,
    repeatType: 'mirror' as const
  }
};
