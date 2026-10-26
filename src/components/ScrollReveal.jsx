import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollReveal Component
 * Automatically animates child elements into view as the user scrolls down the page.
 *
 * Props:
 * - direction: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade' (default: 'up')
 * - delay: number in seconds (default: 0)
 * - duration: number in seconds (default: 0.55)
 * - distance: number in pixels (default: 28)
 * - threshold: number from 0 to 1 (default: 0.12)
 * - className: string
 * - once: boolean (default: true)
 */
export const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.55,
  distance = 28,
  threshold = 0.12,
  className = '',
  once = true,
  ...props
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'left':
        return {
          hidden: { opacity: 0, x: -distance },
          visible: { opacity: 1, x: 0 },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: distance },
          visible: { opacity: 1, x: 0 },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -distance },
          visible: { opacity: 1, y: 0 },
        };
      case 'zoom':
        return {
          hidden: { opacity: 0, scale: 0.93, y: distance * 0.4 },
          visible: { opacity: 1, scale: 1, y: 0 },
        };
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case 'up':
      default:
        return {
          hidden: { opacity: 0, y: distance },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold, margin: '-20px' }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Smooth Apple-style cubic-bezier ease
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * ScrollStagger Container
 * Automatically staggers child elements with sequential cascade animations as the user scrolls.
 */
export const ScrollStagger = ({
  children,
  staggerDelay = 0.1,
  className = '',
  once = true,
  threshold = 0.1,
  ...props
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.05,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold, margin: '-20px' }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * ScrollStaggerItem Component
 * Individual card/item inside a ScrollStagger grid.
 */
export const ScrollStaggerItem = ({
  children,
  direction = 'up',
  distance = 24,
  duration = 0.52,
  className = '',
  ...props
}) => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} {...props}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
