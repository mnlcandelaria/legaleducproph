'use client'

import { motion } from "framer-motion"
import Image from 'next/image';
import React from 'react';

const MissionVision = () => {
  return (
    <section>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <div className="bg-primary">
          <motion.div
            className="flex flex-col item-end"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
          >
            <div className="relative w-full h-[180px]">
              <Image
                src="/images/mission.jpg"
                alt="logo"
                fill
                className="object-cover grayscale" // or object-cover depending on need
                priority
              />
            </div>
            <div className="text-white text-center lg:text-right lg:max-w-[700px] p-15 lg:self-end">
              <h2 className="sm:text-4xl font-bold mb-4 font-playfair">Mission</h2>
              <p className="mt-4">Our mission is to provide high-quality, accessible and affordable legal education and comprehensive bar review programs that empower aspiring legal professionals. We are committed to enhancing their knowledge, skills, and confidence through innovative teaching methods, expert faculty, and a supportive learning environment. By promoting excellence in legal practice, we strive to elevate the standards of the legal profession and serve the community with integrity and dedication.</p>
            </div>
          </motion.div>
        </div>
        <div className="bg-secondary">
          <motion.div
            className="flex flex-col item-end"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
          >
            <div className="relative w-full h-[180px]">
              <Image
                src="/images/vision.jpg"
                alt="logo"
                fill
                className="object-cover grayscale" // or object-cover depending on need
                priority
              />
            </div>
            <div className="text-white text-center lg:text-left lg:max-w-[700px] p-15">
              <h2 className="text-4xl font-bold mb-4 font-playfair">Vision</h2>
              <p className="mt-4">To be the leading institution in legal education and bar review, fostering a community of knowledgeable and ethical legal professionals who are equipped to excel in their careers and contribute positively to the justice system.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
};

export default MissionVision;