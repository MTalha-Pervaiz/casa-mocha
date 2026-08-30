import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

export function FadeIn({ children, delay = 0, className, y = 20 }: { children: ReactNode, delay?: number, className?: string, y?: number }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reducedMotion ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: reducedMotion ? 0.01 : 0.8, delay: reducedMotion ? 0 : delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}