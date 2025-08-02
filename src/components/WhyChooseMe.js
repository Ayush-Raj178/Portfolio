import React from 'react';
import { motion } from 'framer-motion';

const strengthsData = [
  {
    id: 1,
    icon: '🔧',
    title: 'Backend Development',
    subtitle: 'Expert in Java & Spring Boot',
  },
  {
    id: 2,
    icon: '⚛️',
    title: 'Frontend Skills',
    subtitle: 'React.js & Tailwind CSS',
  },
  {
    id: 3,
    icon: '🧩',
    title: 'Problem Solver',
    subtitle: 'Creative solutions to complex challenges',
  },
  {
    id: 4,
    icon: '📚',
    title: 'Continuous Learner',
    subtitle: 'Always exploring new technologies',
  },
  {
    id: 5,
    icon: '🤝',
    title: 'Team Player',
    subtitle: 'Collaborative and communication skills',
  },
  {
    id: 6,
    icon: '⚡',
    title: 'Fast Learner',
    subtitle: 'Quick adaptation to new environments',
  },
];

const StrengthCard = ({ strength, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ scale: 1.12 }}
      viewport={{ once: true }}
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-2xl hover:bg-white border border-gray-200/50 hover:border-indigo-300/50 transition-all duration-200 ease-out cursor-pointer group relative overflow-hidden"
    >
      {/* Hover Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />
      
      {/* Icon Circle */}
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 group-hover:from-purple-600 group-hover:to-indigo-600 flex items-center justify-center mb-4 shadow-inner ring-2 ring-white/50 group-hover:shadow-lg group-hover:ring-indigo-300/50 group-hover:scale-125 transition-all duration-200 relative z-10">
        <motion.span 
          className="text-2xl"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          {strength.icon}
        </motion.span>
      </div>
      
      {/* Content */}
      <div className="space-y-2 relative z-10">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-200">
          {strength.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
          {strength.subtitle}
        </p>
      </div>
    </motion.div>
  );
};

const WhyChooseMe = () => {
  return (
    <section id="why-choose-me" className="py-20 px-4 sm:px-10 bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe] relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-800 mb-4">
            Why Choose Me?
          </h2>
          {/* Removed subtitle text as requested */}
        </motion.div>

        {/* Strengths Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {strengthsData.map((strength, index) => (
            <StrengthCard key={strength.id} strength={strength} index={index} />
          ))}
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {/* Removed 'Ready to bring these skills to your next project?' text as requested */}
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
          >
            Let's Work Together
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
