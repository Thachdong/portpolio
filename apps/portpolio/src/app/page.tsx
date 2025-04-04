'use client';

import { Header, AboutMe, Skills, Projects, ContactMe } from '@/portpolio-ui';
import { motion } from 'framer-motion';
import { useCallback, useMemo } from 'react';

export default function Index() {
  const sectionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0, y: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 64,
        transition: {
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'tween',
            duration: 0.8,
            ease: 'easeOut',
            bounce: 0.25,
          },
        },
      },
    }),
    []
  );

  const onViewportEnter = useCallback((id: string) => {
    if (window.innerWidth >= 768) {
      const timeoutId = setTimeout(() => {
        document.querySelector(id)?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 header-container">
        <div className="max-w-screen-xl mx-auto">
          <Header />
        </div>
      </div>

      <div>
        <motion.div
          className="max-w-screen-xl mx-auto pt-16"
          id="about"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0,
          }}
          onViewportEnter={() => {
            onViewportEnter('#about');
          }}
        >
          <AboutMe />
        </motion.div>

        <motion.div
          className="max-w-screen-xl mx-auto pt-16"
          id="skills"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0,
          }}
          onViewportEnter={() => {
            onViewportEnter('#skills');
          }}
        >
          <Skills />
        </motion.div>

        <motion.div
          className="max-w-screen-xl mx-auto pt-16"
          id="projects"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0,
          }}
          onViewportEnter={() => {
            onViewportEnter('#projects');
          }}
        >
          <Projects />
        </motion.div>

        <motion.div
          className="max-w-screen-xl mx-auto pt-16"
          id="contact-me"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0,
          }}
          onViewportEnter={() => {
            onViewportEnter('#contact-me');
          }}
        >
          <ContactMe />
        </motion.div>
      </div>
    </>
  );
}
