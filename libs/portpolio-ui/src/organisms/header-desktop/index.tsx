'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type THeaderDesktopProps = {
  handleLinkClick: (link: string) => void;
  activeLink: string;
};

export const HeaderDesktop: React.FC<THeaderDesktopProps> = ({
  handleLinkClick,
  activeLink,
}) => {
  return (
    <ul className="hidden md:flex bg-deep-teal md:gap-12 lg:gap-12 gap-6 items-center border-gray-300 px-4 py-2 rounded-b-lg">
      <li>
        <motion.span
          className="text-2xl font-bold text-burnt-orange tracking-widest font-light"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
        >
          Dong.T
        </motion.span>
      </li>

      <li className="flex-grow"></li>

      <li>
        <Link
          className={`relative py-2 inline-block font-medium hover:text-burnt-orange transition-colors duration-300 ${
            activeLink === 'about' ? 'text-burnt-orange' : 'text-gray-300'
          }`}
          href="#about"
          onClick={() => handleLinkClick('about')}
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.span>
          {activeLink === 'about' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              layoutId="underline"
              className="absolute bottom-0 left-0 w-full h-[3px] bg-burnt-orange"
            />
          )}
        </Link>
      </li>

      <li>
        <Link
          className={`relative py-2 inline-block font-medium hover:text-burnt-orange transition-colors duration-300 ${
            activeLink === 'skills' ? 'text-burnt-orange' : 'text-gray-300'
          }`}
          href="#skills"
          onClick={() => handleLinkClick('skills')}
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.span>
          {activeLink === 'skills' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              layoutId="underline"
              className="absolute bottom-0 left-0 w-full h-[3px] bg-burnt-orange"
            />
          )}
        </Link>
      </li>

      <li>
        <Link
          className={`relative py-2 inline-block font-medium hover:text-burnt-orange transition-colors duration-300 ${
            activeLink === 'projects' ? 'text-burnt-orange' : 'text-gray-300'
          }`}
          href="#projects"
          onClick={() => handleLinkClick('projects')}
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Projects
          </motion.span>
          {activeLink === 'projects' && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              layoutId="underline"
              className="absolute bottom-0 left-0 w-full h-[3px] bg-burnt-orange"
            />
          )}
        </Link>
      </li>

      <li>
        <Link
          href="/blog"
          className="py-2 inline-block font-medium text-gray-300"
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog
          </motion.span>
        </Link>
      </li>

      <li className="flex-grow"></li>

      <Link href="/cv" className="text-gray-300">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My CV
        </motion.span>
      </Link>
    </ul>
  );
};
