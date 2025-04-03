'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('about');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects'].map((id) => {
        const element = document.getElementById(id);
        if (!element) return { id, top: 0 };
        const rect = element.getBoundingClientRect();
        return {
          id,
          top: rect.top,
        };
      });

      // Find the section closest to top of viewport
      const closest = sections.reduce((prev, curr) => {
        return Math.abs(curr.top) < Math.abs(prev.top) ? curr : prev;
      });

      setActiveLink(closest.id);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ul className="bg-deep-teal flex gap-12 items-center border-gray-300 px-4 py-2 rounded-b-lg">
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
        <a className="py-2 inline-block font-medium" href={'/blog'}>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Blog
          </motion.span>
        </a>
      </li>

      <li className="flex-grow"></li>

      <Link href={'/cv'}>
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Download CV
        </motion.span>
      </Link>
    </ul>
  );
};
