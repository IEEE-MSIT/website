import React from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

export interface FadeInProps extends HTMLMotionProps<'div'> {
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  fullWidth?: boolean;
  once?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const FadeIn: React.FC<FadeInProps> = ({
  direction = 'up',
  delay = 0,
  duration = 0.5,
  distance = 24,
  fullWidth = false,
  once = true,
  className = '',
  children,
  ...props
}) => {
  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-40px' }}
      variants={variants}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  staggerChildren?: number;
  delayChildren?: number;
  once?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  staggerChildren = 0.1,
  delayChildren = 0,
  once = true,
  className = '',
  children,
  ...props
}) => {
  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-40px' }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerItemProps extends HTMLMotionProps<'div'> {
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  direction = 'up',
  distance = 20,
  duration = 0.45,
  className = '',
  children,
  ...props
}) => {
  const getOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <motion.div variants={variants} className={className} {...props}>
      {children}
    </motion.div>
  );
};

export interface HoverCardProps extends HTMLMotionProps<'div'> {
  hoverY?: number;
  scale?: number;
  tapScale?: number;
  className?: string;
  children: React.ReactNode;
}

export const HoverCard: React.FC<HoverCardProps> = ({
  hoverY = -6,
  scale = 1.01,
  tapScale = 0.98,
  className = '',
  children,
  ...props
}) => {
  return (
    <motion.div
      whileHover={{
        y: hoverY,
        scale,
        transition: { duration: 0.22, ease: 'easeOut' },
      }}
      whileTap={{ scale: tapScale }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export interface MotionButtonProps extends HTMLMotionProps<'button'> {
  scale?: number;
  tapScale?: number;
  className?: string;
  children: React.ReactNode;
}

export const MotionButton: React.FC<MotionButtonProps> = ({
  scale = 1.03,
  tapScale = 0.96,
  className = '',
  children,
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale, transition: { duration: 0.18, ease: 'easeOut' } }}
      whileTap={{ scale: tapScale }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
};
