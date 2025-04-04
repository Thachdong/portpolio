'use client';
import React, { useCallback, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { MobileMenuIcon } from '../../molecules';

type THeaderMobileProps = {
  handleLinkClick: (link: string) => void;
  activeLink: string;
};

export const HeaderMobile: React.FC<Readonly<THeaderMobileProps>> = ({
  handleLinkClick,
  activeLink,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onClickLink = useCallback(
    (link: string) => {
      handleLinkClick(link);

      setIsMenuOpen(false);
    },
    [handleLinkClick]
  );

  const menuVariants = useMemo(
    () => ({
      closed: {
        x: '-100%',
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      },
      open: {
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 40,
        },
      },
    }),
    []
  );

  return (
    <div className="md:hidden fixed top-0 left-0 z-50">
      <div className="flex items-center bg-deep-teal p-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-burnt-orange"
        >
          <MobileMenuIcon isOpen={isMenuOpen} />
        </button>
        <span className="ml-4 text-burnt-orange font-medium">
          {activeLink.charAt(0).toUpperCase() + activeLink.slice(1)}
        </span>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-16 left-0 w-64 bg-deep-teal p-4 h-screen"
          >
            <nav className="flex flex-col gap-4">
              <Link
                href="#about"
                className={`${
                  activeLink === 'about' ? 'text-burnt-orange' : 'text-gray-300'
                }`}
                onClick={() => onClickLink('about')}
              >
                About Me
              </Link>
              <Link
                href="#skills"
                className={`${
                  activeLink === 'skills'
                    ? 'text-burnt-orange'
                    : 'text-gray-300'
                }`}
                onClick={() => onClickLink('skills')}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className={`${
                  activeLink === 'projects'
                    ? 'text-burnt-orange'
                    : 'text-gray-300'
                }`}
                onClick={() => onClickLink('projects')}
              >
                Projects
              </Link>
              <Link href="/blog" className="text-gray-300">
                Blog
              </Link>
              <Link href="/cv" className="text-gray-300">
                My CV
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
