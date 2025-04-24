'use client';
import { motion, MotionProps } from 'framer-motion';
import React from 'react';

// generate HOC that:
// params: motion tag, props of motion tag
// return: HOC that takes in the motion tag, props of motion tag, children of motion tag
const withMotionTag = <T extends MotionProps>(
  MotionTag: React.ComponentType<T>
) => {
  return function MotionComponent(props: T) {
    return <MotionTag {...props} />;
  };
};

export const MotionH2 = withMotionTag(motion.h2);

export const MotionDiv = withMotionTag(motion.div);

export const MotionP = withMotionTag(motion.p);
