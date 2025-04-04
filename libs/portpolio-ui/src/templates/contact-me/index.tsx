import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const ContactMe: React.FC = () => {
  return (
    <section
      id="contact-me"
      className="min-h-screen bg-dark-jungle flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-burnt-orange mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-deep-teal p-6 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-burnt-orange mb-4">
              Personal Info
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:thachdong270293@gmail.com"
                className="text-soft-cream hover:text-burnt-orange transition-colors duration-300 block"
              >
                <span className="font-medium">Email:</span>{' '}
                thachdong270293@gmail.com
              </a>
              <a
                href="tel:+84353860797"
                className="text-soft-cream hover:text-burnt-orange transition-colors duration-300 block"
              >
                <span className="font-medium">Phone:</span> (+84) 35.386.0797
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-deep-teal p-6 rounded-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-burnt-orange mb-4">
              Social Links
            </h3>
            <div className="space-y-4">
              <Link
                href="https://github.com/Thachdong"
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft-cream hover:text-burnt-orange transition-colors duration-300 block"
              >
                <span className="font-medium">GitHub:</span>{' '}
                github.com/Thachdong
              </Link>
              <div
                className="fb-messenger-chat-plugin"
                data-page_id="YOUR_PAGE_ID"
                data-attribution="setup_tool"
                data-align="center"
                data-height="300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
