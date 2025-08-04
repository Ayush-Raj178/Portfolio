import React from 'react';
import { motion } from 'framer-motion';
import { sectionStyles } from '../styles/sectionStyles';

const skillsData = [
  { 
    name: 'Java', 
    icon: '☕', 
    level: 85,
    color: 'from-orange-500 to-red-500',
    hoverColor: 'group-hover:from-orange-600 group-hover:to-red-600',
    description: 'Built robust systems with OOP principles & exception handling'
  },
  { 
    name: 'Spring Boot', 
    icon: '🍃', 
    level: 80,
    color: 'from-green-500 to-emerald-500',
    hoverColor: 'group-hover:from-green-600 group-hover:to-emerald-600',
    description: 'REST APIs, Dependency Injection, JPA, Microservices'
  },
  { 
    name: 'React.js', 
    icon: '⚛️', 
    level: 90,
    color: 'from-blue-500 to-cyan-500',
    hoverColor: 'group-hover:from-blue-600 group-hover:to-cyan-600',
    description: 'SPA development with hooks, state mgmt, and component architecture'
  },
  { 
    name: 'JavaScript', 
    icon: '🟨', 
    level: 88,
    color: 'from-yellow-500 to-orange-500',
    hoverColor: 'group-hover:from-yellow-600 group-hover:to-orange-600',
    description: 'DOM manipulation, ES6+, async programming, fetch APIs'
  },
  { 
    name: 'Tailwind CSS', 
    icon: '💨', 
    level: 85,
    color: 'from-teal-500 to-blue-500',
    hoverColor: 'group-hover:from-teal-600 group-hover:to-blue-600',
    description: 'Utility-first styling for responsive and clean UIs'
  },
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.08,
        rotateY: 8,
        z: 50
      }}
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-200 ease-out cursor-pointer group relative overflow-hidden border border-gray-100 hover:border-transparent"
    >
      {/* Background Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-200 rounded-2xl`} />
      
      {/* Floating Background Elements */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-300" />
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-lg group-hover:scale-125 transition-transform duration-300" />
      
      <div className="relative z-10">
        {/* Icon Container */}
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${skill.color} ${skill.hoverColor} text-white shadow-xl mb-6 group-hover:shadow-2xl group-hover:scale-125 transition-all duration-200 group-hover:rotate-12`}>
          <motion.span 
            className="text-2xl"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            {skill.icon}
          </motion.span>
        </div>
        
        {/* Skill Name */}
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-white group-hover:drop-shadow-lg transition-all duration-200 relative z-20">
          {skill.name}
        </h3>
        
        {/* Skill Description */}
        <p className="text-sm text-gray-600 group-hover:text-white group-hover:drop-shadow-md transition-all duration-200 relative z-20">
          {skill.description}
        </p>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className={`${sectionStyles.section} bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe] relative overflow-hidden`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>
      
      <div className={`${sectionStyles.container} relative z-10`}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl sm:text-6xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-black">Skills</span>
          </motion.h2>
          <motion.p 
            className={`${sectionStyles.subtitle} text-gray-600`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Core competencies and technical expertise for building modern web applications
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20"
        >
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Removed 'Ready to bring these skills to your next project?' text as requested */}
          {/* Removed 'View My Projects' button as requested */}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
