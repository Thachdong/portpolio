'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const skills = [
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    blogLink: '/blog/javascript',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    blogLink: '/blog/typescript',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    blogLink: '/blog/react',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    blogLink: '/blog/nextjs',
  },
  {
    name: 'Vue.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    blogLink: '/blog/vuejs',
  },
  {
    name: 'Vite, Webpack',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
    blogLink: '/blog/vite-webpack',
  },
  {
    name: 'Module Federation',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg',
    blogLink: '/blog/module-federation',
  },
  {
    name: 'Nextjs Multi Zone',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    blogLink: '/blog/nextjs-multi-zone',
  },
  {
    name: 'Postgres',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    blogLink: '/blog/postgres',
  },
  {
    name: 'Prisma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
    blogLink: '/blog/prisma',
  },
  {
    name: 'Nx Workspace',
    icon: 'https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png',
    blogLink: '/blog/nx-workspace',
  },
  {
    name: 'Jest, Vitest',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    blogLink: '/blog/jest-vitest',
  },
  {
    name: 'AWS',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png',
    blogLink: '/blog/aws',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    blogLink: '/blog/docker',
  },
  {
    name: 'Storybook',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg',
    blogLink: '/blog/storybook',
  },
  {
    name: 'Tailwind CSS',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    blogLink: '/blog/tailwind-css',
  },
  {
    name: 'CSS3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    blogLink: '/blog/css3',
  },
  {
    name: 'HTML5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    blogLink: '/blog/html5',
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    blogLink: '/blog/git',
  },
  {
    name: 'SonarQube',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg',
    blogLink: '/blog/sonarqube',
  },
  {
    name: 'Jira',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
    blogLink: '/blog/jira',
  },
  {
    name: 'Figma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    blogLink: '/blog/figma',
  },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-dark-jungle flex items-center justify-center py-20 mt-[15%]"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-burnt-orange mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Technologies
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-deep-teal p-4 rounded-lg flex flex-col items-center justify-center gap-3 cursor-pointer relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12" />
              <p className="text-soft-cream text-center font-medium">
                {skill.name}
              </p>

              <div className="absolute -top-2 -right-2">
                {skill.blogLink && (
                  <div className="bg-burnt-orange text-white text-xs px-2 py-1 rounded-full">
                    Blog Available
                  </div>
                )}
              </div>

              {skill.blogLink && (
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-80 rounded-lg flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                >
                  <p className="text-center text-soft-cream text-sm mb-2">
                    Read my blog about {skill.name}
                  </p>
                  <Link
                    href={skill.blogLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-burnt-orange text-white px-4 py-2 rounded-lg hover:bg-soft-cream hover:text-burnt-orange transition-colors duration-300"
                  >
                    Read Blog
                  </Link>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
