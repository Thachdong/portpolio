import React from 'react';
import { motion } from 'framer-motion';

type TMobileMenuIconProps = {
  isOpen: boolean;
};

export const MobileMenuIcon: React.FC<Readonly<TMobileMenuIconProps>> = ({
  isOpen,
}) => {
  return (
    <div className="relative w-8 h-8 flex items-center justify-center">
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: {
            rotate: 45,
            y: 0,
            transition: { duration: 0.2 },
          },
          closed: {
            rotate: 0,
            y: -8,
            transition: { duration: 0.2 },
          },
        }}
        className="absolute w-8 h-[2px] bg-current rounded-full"
      />
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: {
            opacity: 0,
            transition: { duration: 0.2 },
          },
          closed: {
            opacity: 1,
            transition: { duration: 0.2 },
          },
        }}
        className="absolute w-8 h-[2px] bg-current rounded-full"
      />
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: {
            rotate: -45,
            y: 0,
            transition: { duration: 0.2 },
          },
          closed: {
            rotate: 0,
            y: 8,
            transition: { duration: 0.2 },
          },
        }}
        className="absolute w-8 h-[2px] bg-current rounded-full"
      />
    </div>
  );
};
