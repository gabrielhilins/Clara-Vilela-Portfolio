'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimateInViewProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

const AnimateInView: React.FC<AnimateInViewProps> = ({ 
  children, 
  delay = 0.2, 
  duration = 0.6, 
  yOffset = 50 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} 
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateInView;
