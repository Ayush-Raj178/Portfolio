import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { 
    name: 'Java', 
    icon: '☕', 
    level: 85,
    color: 'from-orange-500 to-red-500',
    hoverColor: 'group-hover:from-orange-600 group-hover:to-red-600',
    description: 'Backend Development'
  },
  { 
    name: 'React.js', 
    icon: '⚛️', 
    level: 90,
    color: 'from-blue-500 to-cyan-500',
    hoverColor: 'group-hover:from-blue-600 group-hover:to-cyan-600',
    description: 'Frontend Framework'
  },
  { 
    name: 'JavaScript', 
    icon: '🟨', 
    level: 88,
    color: 'from-yellow-500 to-orange-500',
    hoverColor: 'group-hover:from-yellow-600 group-hover:to-orange-600',
    description: 'Programming Language'
  },
  { 
    name: 'Tailwind CSS', 
    icon: '💨', 
    level: 85,
    color: 'from-teal-500 to-blue-500',
    hoverColor: 'group-hover:from-teal-600 group-hover:to-blue-600',
    description: 'CSS Framework'
  },
  { 
    name: 'Spring Boot', 
    icon: '🍃', 
    level: 80,
    color: 'from-green-500 to-emerald-500',
    hoverColor: 'group-hover:from-green-600 group-hover:to-emerald-600',
    description: 'Java Framework'
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
          <span className="text-2xl">{skill.icon}</span>
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
    <section id="skills" className="py-20 px-4 sm:px-10 bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
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
            My <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Technical Skills</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Expertise in modern technologies and frameworks for full-stack development
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
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to bring these skills to your next project?
          </motion.p>
          <motion.button 
            onClick={() => {
              const element = document.getElementById('projects');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-4 rounded-2xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            View My Projects
            <span className="ml-2">→</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

