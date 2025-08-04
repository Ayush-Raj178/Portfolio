import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaCode, FaBrain, FaRocket, FaHandsHelping, FaBookOpen } from 'react-icons/fa';

const strengthsData = [
  {
    id: 1,
    icon: <FaServer className="text-2xl" />,
    title: 'Backend Architecture',
    subtitle: 'Spring Boot • REST APIs • MySQL',
    description: 'Built scalable backend systems with clean architecture and secure endpoints.'
  },
  {
    id: 2,
    icon: <FaCode className="text-2xl" />,
    title: 'Frontend Development',
    subtitle: 'React.js • Tailwind CSS',
    description: 'Crafted fast, responsive UIs with reusable components and modern styling.'
  },
  {
    id: 3,
    icon: <FaBrain className="text-2xl" />,
    title: 'Analytical Problem Solving',
    subtitle: 'Debugging • System Design • Edge-case Handling',
    description: 'Efficiently troubleshoot production bugs and architect logical solutions.'
  },
  {
    id: 4,
    icon: <FaRocket className="text-2xl" />,
    title: 'Quick Learner',
    subtitle: 'New Tech • Tools • APIs',
    description: 'Adapt rapidly to frameworks and technologies to deliver quality solutions.'
  },
  {
    id: 5,
    icon: <FaHandsHelping className="text-2xl" />,
    title: 'Team & Communication',
    subtitle: 'Collaboration • Documentation',
    description: 'Proven team player in cross-functional sprints and Git-based workflows.'
  },
  {
    id: 6,
    icon: <FaBookOpen className="text-2xl" />,
    title: 'Continuous Upskilling',
    subtitle: 'Latest Tech Trends • YouTube Learning',
    description: 'Self-motivated learning from industry experts and online resources.'
  }
];

const StrengthCard = ({ strength, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8,
        transition: { type: 'spring', stiffness: 400, damping: 10 }
      }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 ease-out group relative overflow-hidden h-full flex flex-col"
    >
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon Container */}
      <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white relative z-10">
        {React.cloneElement(strength.icon, { className: 'text-xl' })}
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
          {strength.title}
        </h3>
        <p className="text-sm font-medium text-blue-600 mb-3">
          {strength.subtitle}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {strength.description}
        </p>
      </div>
    </motion.div>
  );
};

const WhyChooseMe = () => {
  return (
    <section id="why-choose-me" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Drives Me
          </h2>
        </motion.div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengthsData.map((strength, index) => (
              <StrengthCard key={strength.id} strength={strength} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mt-12"
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Let's Work Together
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
