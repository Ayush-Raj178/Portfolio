import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    },
  };

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 60 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const nameVariants = {
    hidden: { 
      opacity: 0, 
      y: 80 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe] pt-20 pb-16"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Responsive name with better scaling */}
          <motion.div className="w-full overflow-hidden">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] font-extrabold mb-2 md:mb-4 tracking-tight leading-tight"
              variants={nameVariants}
            >
              <span className="text-gray-800 drop-shadow-lg">Ayush</span>{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Raj
              </span>
            </motion.h1>
          </motion.div>

          {/* Professional title and tech stack */}
          <motion.div 
            className="max-w-4xl mx-auto mt-2 md:mt-4"
            variants={fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 mb-4 md:mb-6">
              Full Stack Developer — Java Backend + React
            </h2>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-gray-700 text-sm sm:text-[0.95rem]">
              <span className="flex items-center bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                <svg className="w-4 h-4 mr-1.5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.37 17.51c-3.09.86 1.87 2.64 5.8 1.32 4.03-1.34 5.99-4.51 4.15-7.4-1.57-2.48-6.19-1.28-6.71-4.56C12.74 2.67 13.8 2 15 2c1.83 0 3 2.1 3 4.5 0 2.5-1.2 4.5-3 4.5-1.5 0-2.5-1.5-2.5-3.5 0-2.5 1.5-3.5 2.5-3.5 1.1 0 2 .9 2 2 0 .5-.4 1-1 1s-1-.5-1-1c0-.5.5-1 1-1s1 .5 1 1c0 .3-.1.6-.3.8-.2.2-.5.2-.7.2-.8 0-1.5-.7-1.5-1.5 0-1.1.9-2 2-2s2 .9 2 2c0 1.1-.9 2-2 2-1.1 0-2.5 1.1-2.5 3.5 0 2.1 1.4 3.5 2.5 3.5 1.6 0 2.5-1.5 2.5-3.5 0-2.2-1.6-4.5-4-4.5-1.4 0-2.7.8-3.3 2.1-.6 1.3-.3 2.8.9 3.8 1.2 1 3.1 1.1 4.4.6 1.3-.5 2.2-1.5 2.5-2.6.2-.6-.3-1.2-.9-1.2s-1 .4-1.1 1c-.2.5-.6.9-1.1 1.1-.5.2-1.1.1-1.5-.2-.4-.3-.6-.8-.5-1.3.1-.5.5-.9 1-1.1.5-.2 1.1-.1 1.5.2.4.3.6.8.5 1.3-.1.5-.5.9-1 1.1-.5.2-1.1.1-1.5-.2-.4-.3-.6-.8-.5-1.3.1-.5.5-.9 1-1.1.5-.2 1.1-.1 1.5.2.4.3.6.8.5 1.3-.1.5-.5.9-1 1.1-.5.2-1.1.1-1.5-.2-.4-.3-.6-.8-.5-1.3.1-.5.5-.9 1-1.1.5-.2 1.1-.1 1.5.2.4.3.6.8.5 1.3-.1.5-.5.9-1 1.1-.5.2-1.1.1-1.5-.2-.4-.3-.6-.8-.5-1.3.1-.5.5-.9 1-1.1.5-.2 1.1-.1 1.5.2.4.3.6.8.5 1.3-.1.5-.5.9-1 1.1-.5.2-1.1.1-1.5-.2-.4-.3-.6-.8-.5-1.3.1-.5.5-.9 1-1.1.5-.2 1.1-.1 1.5.2.4.3.6.8.5 1.3-.1.5-.5.9-1 1.1-.5.2-1.1.1-1.5-.2z"/>
                </svg>
                Java • Spring Boot
              </span>
              <span className="flex items-center bg-purple-50 px-3 py-1.5 rounded-full border border-purple-100">
                <svg className="w-4 h-4 mr-1.5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17.927v-1.604c-2.67-.5-3.033-1.918-3.2-2.954l2.2-.366v-1.6c-3.6.5-4.8 1.7-4.8 3.5 0 2.1 1.6 3.1 4.8 3.5v1.6c-4.4-.5-6-1.9-6-4.1 0-2.5 2.1-4.3 6-4.8v-1.6c-1.6.2-2.8.6-3.7 1.2-.9.6-1.3 1.4-1.3 2.4 0 1.8 1.2 2.7 3.7 3.1z"/>
                </svg>
                React • Tailwind CSS
              </span>
              <span className="flex items-center bg-green-50 px-3 py-1.5 rounded-full border border-green-100">
                <svg className="w-4 h-4 mr-1.5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1 17.927v-1.604c-2.67-.5-3.033-1.918-3.2-2.954l2.2-.366v-1.6c-3.6.5-4.8 1.7-4.8 3.5 0 2.1 1.6 3.1 4.8 3.5v1.6c-4.4-.5-6-1.9-6-4.1 0-2.5 2.1-4.3 6-4.8v-1.6c-1.6.2-2.8.6-3.7 1.2-.9.6-1.3 1.4-1.3 2.4 0 1.8 1.2 2.7 3.7 3.1z"/>
                </svg>
                JWT Auth • MySQL • Git
              </span>
            </div>
          </motion.div>

          {/* Enhanced CTA Buttons with better hover effects and accessibility */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 mb-16"
            variants={fadeInUp}
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 overflow-hidden group flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-white"
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4), 0 8px 10px -6px rgba(124, 58, 237, 0.4)'
              }}
              whileTap={{ scale: 0.97 }}
              aria-label="Contact me for job opportunities"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Let's Work Together
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>

            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className="px-8 py-3 bg-white text-gray-800 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 focus:ring-offset-white"
              variants={buttonVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              aria-label="View my project portfolio"
            >
              <svg className="w-5 h-5 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              View My Work
            </motion.a>
          </motion.div>

          {/* Animated scroll indicator with bounce effect */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer group"
            variants={fadeInUp}
            onClick={() => scrollToSection('about')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
          >
            <div className="flex flex-col items-center">
              <motion.span 
                className="text-gray-500 text-sm mb-2 font-light group-hover:text-blue-500 transition-colors tracking-wider"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Scroll to explore
              </motion.span>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
