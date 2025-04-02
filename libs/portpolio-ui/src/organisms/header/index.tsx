'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('about');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  React.useEffect(() => {
    // Get hash from URL without the #
    const hash = window.location.hash.slice(1);

    if (hash) {
      setActiveLink(hash);
    }
  }, []);

  return (
    <ul className="flex gap-4 items-center border-gray-300 px-2 py-4">
      <li>
        <motion.span
          className="text-2xl font-bold text-burnt-orange tracking-widest font-mono"
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
          className={`py-2 inline-block font-medium hover:text-burnt-orange transition-colors duration-300 ${
            activeLink === 'about' ? 'text-burnt-orange' : 'text-gray-300'
          }`}
          href="#about"
          onClick={() => handleLinkClick('about')}
        >
          About Me
        </Link>
      </li>
      <li className="text-gray-300">|</li>
      <li>
        <Link
          className={`py-2 inline-block font-medium hover:text-burnt-orange transition-colors duration-300 ${
            activeLink === 'skills' ? 'text-burnt-orange' : 'text-gray-300'
          }`}
          href="#skills"
          onClick={() => handleLinkClick('skills')}
        >
          Skills
        </Link>
      </li>
      <li className="text-gray-300">|</li>
      <li>
        <Link
          className={`py-2 inline-block font-medium hover:text-burnt-orange transition-colors duration-300 ${
            activeLink === 'projects' ? 'text-burnt-orange' : 'text-gray-300'
          }`}
          href="#projects"
          onClick={() => handleLinkClick('projects')}
        >
          Projects
        </Link>
      </li>
      <li className="text-gray-300">|</li>
      <li>
        <a className="py-2 inline-block font-medium" href={'/blog'}>
          Blog
        </a>
      </li>
      <li className="text-gray-300">|</li>
      <li>
        <a
          className="py-2 inline-block font-medium"
          href={'/blog_admin/create-post'}
        >
          Blog admin
        </a>
      </li>
      <li className="flex-grow"></li>
      <Link href={'/cv'}>Download CV</Link>
    </ul>
  );
};
