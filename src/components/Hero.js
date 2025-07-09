import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Animation variants
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

  const bounceAnimation = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe]"
    >

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name with enhanced typography */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tight"
            variants={nameVariants}
          >
            <span className="text-gray-800 drop-shadow-lg">Ayush</span>{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Raj
            </span>
          </motion.h1>

          {/* Enhanced tagline */}
          <motion.h2
            className="text-lg text-gray-300 sm:text-xl mt-2 mb-12 font-light tracking-wide drop-shadow-md"
            variants={fadeInUp}
          >
            <span className="text-gray-600">Full‑Stack Developer | React & Spring Boot</span>
          </motion.h2>

          {/* Polished CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            variants={fadeInUp}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download
              className="text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text border border-blue-500 px-10 py-4 rounded-lg font-semibold hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.div>

          {/* Enhanced scroll indicator */}
          <motion.div
            className="flex flex-col items-center cursor-pointer group"
            variants={fadeInUp}
            onClick={() => scrollToSection('about')}
          >
            <motion.div
              className="flex flex-col items-center"
              variants={bounceAnimation}
              animate="animate"
            >
              <span className="text-gray-500 text-sm mb-3 font-light group-hover:text-blue-500 transition-colors tracking-wide">
                Scroll to explore
              </span>
              <motion.svg
                className="w-6 h-6 text-gray-500 group-hover:text-blue-500 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
