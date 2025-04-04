'use client';

import React, { useState, useEffect } from 'react';
import { HeaderDesktop } from '../header-desktop';
import { HeaderMobile } from '../header-mobile';

export const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('about');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Update URL without page reload
    window.history.pushState({}, '', `#${link}`);
  };

  useEffect(() => {
    // Set initial active link from URL hash
    const hash = window.location.hash.slice(1);
    if (hash && ['about', 'skills', 'projects'].includes(hash)) {
      setActiveLink(hash);
    }

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
      // Update URL without page reload
      window.history.replaceState({}, '', `#${closest.id}`);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeaderDesktop
        handleLinkClick={handleLinkClick}
        activeLink={activeLink}
      />
      <HeaderMobile handleLinkClick={handleLinkClick} activeLink={activeLink} />
    </>
  );
};
