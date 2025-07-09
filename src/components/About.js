import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    {
      icon: '☕',
      text: 'Java Backend Dev',
      color: 'text-orange-600'
    },
    {
      icon: '🚀',
      text: 'Spring Boot',
      color: 'text-green-600'
    },
    {
      icon: '⚛️',
      text: 'React',
      color: 'text-blue-600'
    },
    {
      icon: '🧩',
      text: 'Problem Solver',
      color: 'text-purple-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const highlightVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-2xl shadow-md ring-1 ring-gray-300/20 p-8 lg:p-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Avatar/Image */}
            <motion.div
              className="flex justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-64 h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl ring-4 ring-white">
                  <motion.div
                    className="text-white text-6xl font-bold"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    👨‍💻
                  </motion.div>
                </div>
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-full blur-xl"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              className="text-center lg:text-left space-y-6"
              variants={itemVariants}
            >
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                About Me
              </motion.h2>

              <motion.div
                className="max-w-prose text-xl leading-relaxed text-gray-700 space-y-4"
                variants={itemVariants}
              >
                <p>
                  I'm a passionate <span className="font-bold text-indigo-500">full-stack developer</span> who 
                  loves crafting robust backend systems and intuitive user experiences. With expertise in 
                  <span className="font-bold text-indigo-500"> Java, Spring Boot, and React</span>, I build 
                  scalable solutions that make a real impact.
                </p>
                
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                  projects, or mentoring fellow developers in their journey.
                </p>
              </motion.div>

              {/* Key Highlights */}
              <motion.div
                className="grid grid-cols-2 gap-4 mt-8"
                variants={containerVariants}
              >
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                    variants={highlightVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-2xl">{highlight.icon}</span>
                    <span className={`font-semibold ${highlight.color}`}>
                      {highlight.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Optional CTA Button */}
              <motion.div
                className="pt-4"
                variants={itemVariants}
              >
                <motion.button
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Connect
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
