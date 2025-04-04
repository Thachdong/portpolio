'use client';

import { Header, AboutMe, Skills, Projects, ContactMe } from '@/portpolio-ui';
import { motion } from 'framer-motion';

export default function Index() {
  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.15, y: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
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
  };

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
            amount: 0.25,
          }}
          onViewportEnter={() => {
            document.getElementById('about')?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
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
            amount: 0.25,
          }}
          onViewportEnter={() => {
            document.getElementById('skills')?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
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
            amount: 0.25,
          }}
          onViewportEnter={() => {
            document.getElementById('projects')?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
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
            amount: 0.25,
          }}
          onViewportEnter={() => {
            document.getElementById('contact-me')?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }}
        >
          <ContactMe />
        </motion.div>
      </div>
    </>
  );
}
