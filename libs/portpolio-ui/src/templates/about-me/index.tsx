'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-dark-jungle flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-burnt-orange mb-6">
            About Me
          </h2>
          <div className="text-soft-cream space-y-4">
            <h3 className="text-2xl font-semibold">Hi, I'm Thach Dong</h3>
            <p className="text-lg">
              A passionate Frontend Developer based in Ho Chi Minh City with 5
              years of experience in creating beautiful and functional web
              applications.
            </p>
            <p className="text-lg">
              I'm a highly motivated individual who thrives on turning creative
              ideas into reality. My approach combines technical expertise with
              innovative problem-solving to deliver exceptional user
              experiences.
            </p>
            <div className="flex flex-col gap-2 mt-6">
              <p className="flex items-center gap-2">
                <span className="text-burnt-orange">•</span>
                Hard-working and detail-oriented
              </p>
              <p className="flex items-center gap-2">
                <span className="text-burnt-orange">•</span>
                Creative problem solver
              </p>
              <p className="flex items-center gap-2">
                <span className="text-burnt-orange">•</span>
                Team player with excellent communication skills
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-burnt-orange">
            <Image
              src="https://res.cloudinary.com/dongthach/image/upload/v1657530088/ecommerce/avatar_nuhxqf.png"
              alt="Thach Dong"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
