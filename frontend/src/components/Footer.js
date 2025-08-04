import React from 'react';
import { motion } from 'framer-motion';
import { sectionStyles } from '../styles/sectionStyles';
import { downloadFile } from '../utils/downloadUtils';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${sectionStyles.section} bg-gray-900 text-gray-300 border-t border-gray-800`}>
      <div className={sectionStyles.container}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-0">
          {/* Left Section: Intro + Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Ayush Raj
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Java Backend Developer | Spring Boot | React | Open to SDE Roles
              </p>
            </div>
            
            <div className="flex items-start space-x-3 pt-2">
              <svg className="w-5 h-5 mt-0.5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <p className="text-sm">Tamil Nadu, India <span className="text-gray-500">— Open to Remote & Hybrid Roles</span></p>
            </div>
            
            <p className="text-xs text-gray-500 pt-2">
              Built with React, Tailwind CSS & Spring Boot
            </p>
          </motion.div>

          {/* Middle Section: Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">🔹 Certifications</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-sm">Full-Stack  Development – Project-based Learning</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-sm">Spring Framework 6 & Spring Boot 3 – Hands-on Backend</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-sm">Java Development Intern – OCTANET SERVICES PVT LTD</span>
              </li>
            </ul>
          </motion.div>

          {/* Right Section: Contact + Resume + Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
              <div className="space-y-2">
                <a 
                  href="mailto:ayushraj12121212@gmail.com" 
                  className="flex items-center group hover:text-white transition-colors"
                  aria-label="Email Ayush Raj"
                >
                  <span className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-lg mr-3 group-hover:bg-blue-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span className="text-sm">ayushraj12121212@gmail.com</span>
                </a>
                <a 
                  href="tel:6202885742" 
                  className="flex items-center group hover:text-white transition-colors"
                  aria-label="Call Ayush Raj"
                >
                  <span className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-lg mr-3 group-hover:bg-green-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="text-sm">+91 6202885742</span>
                </a>
              </div>
            </div>

            {/* Resume Button */}
            <div>
              <button
                onClick={() => downloadFile(
                  `${process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080'}/api/resume/download`,
                  'Ayush-Raj-Resume.pdf'
                )}
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl cursor-pointer"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <h4 className="text-sm font-medium text-gray-400 mb-3">CONNECT WITH ME</h4>
              <div className="flex space-x-3">
                <a
                  href="https://linkedin.com/in/ayushraj178"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Ayush Raj — Engineered with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
