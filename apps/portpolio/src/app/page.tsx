'use client';

import { Header, AboutMe, Skills, Projects } from '@/portpolio-ui';
import { motion } from 'framer-motion';

export default function Index() {
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
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100, scale: [1, 0.5] }}
        >
          <AboutMe />
        </motion.div>

        <motion.div
          className="max-w-screen-xl mx-auto pt-16"
          id="skills"
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100, scale: 0.9 }}
        >
          <Skills />
        </motion.div>

        <motion.div
          className="max-w-screen-xl mx-auto pt-16"
          id="projects"
          transition={{ duration: 0.5 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100, scale: 0.9 }}
        >
          <Projects />
        </motion.div>
      </div>
    </>
  );
}
