'use client';

import { Header, AboutMe, Skills, Projects, ContactMe } from '@/portpolio-ui';
import { motion } from 'framer-motion';
import { useCallback, useMemo, useRef } from 'react';

export default function Index() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const sectionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0, y: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        y: 64,
        transition: {
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: 'spring',
            ease: 'easeOut',
          },
        },
      },
    }),
    []
  );

  const onViewportEnter = useCallback((id: string) => {
    let scrollPosition = 0;

    switch (id) {
      case '#about':
        scrollPosition = 0;
        break;
      case '#skills':
        scrollPosition = aboutRef.current?.offsetHeight || 0;
        break;
      case '#projects':
        scrollPosition =
          (aboutRef.current?.offsetHeight || 0) +
          (skillsRef.current?.offsetHeight || 0);
        break;
      case '#contact-me':
        scrollPosition =
          (aboutRef.current?.offsetHeight || 0) +
          (skillsRef.current?.offsetHeight || 0) +
          (projectsRef.current?.offsetHeight || 0);
        break;
    }

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth',
    });
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
          ref={aboutRef}
          id="about"
          className="max-w-screen-xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.15,
          }}
          onViewportEnter={() => {
            onViewportEnter('#about');
          }}
        >
          <AboutMe />
        </motion.div>

        <motion.div
          ref={skillsRef}
          id="skills"
          className="max-w-screen-xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.15,
          }}
          onViewportEnter={() => {
            onViewportEnter('#skills');
          }}
        >
          <Skills />
        </motion.div>

        <motion.div
          ref={projectsRef}
          id="projects"
          className="max-w-screen-xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.15,
          }}
          onViewportEnter={() => {
            onViewportEnter('#projects');
          }}
        >
          <Projects />
        </motion.div>

        <motion.div
          id="contact-me"
          className="max-w-screen-xl mx-auto"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.15,
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
