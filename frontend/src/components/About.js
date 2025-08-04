import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaGitAlt, FaUsers, FaLaptopCode, FaServer } from 'react-icons/fa';
import { SiSpringboot, SiReact } from 'react-icons/si';
import { sectionStyles } from '../styles/sectionStyles';

const About = () => {
  const highlights = [
    {
      icon: <FaJava className="text-2xl text-[#f89820]" />,
      text: 'Java Backend',
      color: 'text-orange-600'
    },
    {
      icon: <SiSpringboot className="text-2xl text-green-600" />,
      text: 'Spring Boot',
      color: 'text-green-600'
    },
    {
      icon: <SiReact className="text-2xl text-blue-500" />,
      text: 'React',
      color: 'text-blue-600'
    },
    {
      icon: <FaLaptopCode className="text-2xl text-purple-600" />,
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


  const experiences = [
    {
      role: "Java Development Intern",
      company: "OCTANET SERVICES PVT LTD",
      period: "Jan 2024 – Mar 2024",
      type: "Internship",
      location: "Remote",
      tasks: [
        "Collaborated on an ATM System project using Java and implemented core banking functionalities",
        "Applied OOP principles to enhance code quality, maintainability, and system architecture",
        "Developed strong debugging and problem-solving skills through complex system troubleshooting",
        "Contributed to team collaboration and cross-functional dynamics in an agile environment"
      ],
      skills: [
        { name: "Java", icon: <FaJava className="inline mr-1" /> },
        { name: "OOP", icon: <FaLaptopCode className="inline mr-1" /> },
        { name: "Git", icon: <FaGitAlt className="inline mr-1" /> },
        { name: "Team Collaboration", icon: <FaUsers className="inline mr-1" /> }
      ]
    }
  ];

  return (
    <section id="about" className={`${sectionStyles.section} bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe] relative overflow-hidden`}>
      <div className={sectionStyles.container}>
        <motion.div
          className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-8 lg:p-12 hover:shadow-2xl transition-all duration-300"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start w-full">
            {/* Left Column - About Me */}
            <motion.div
              className="flex flex-col justify-center items-center lg:items-start"
              variants={itemVariants}
            >
              <motion.div
                className="relative mb-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-40 h-40 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full rounded-full bg-white p-1">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center overflow-hidden">
                      <motion.img 
                        src="/profile.jpg" 
                        alt="Profile" 
                        className="w-full h-full object-cover rounded-full"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%237f9cf5"><rect width="100" height="100" rx="50" fill="%23e0e7ff"/><text x="50%" y="50%" font-size="40" text-anchor="middle" dy=".3em" fill="%234f46e5" font-family="sans-serif">AR</text></svg>';
                        }}
                      />
                    </div>
                  </div>
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
              <motion.h2
                className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6"
                variants={itemVariants}
              >
                About Me
              </motion.h2>
              <motion.div
                className="max-w-prose text-lg leading-relaxed text-gray-700 space-y-5"
                variants={itemVariants}
              >
                <p className="text-gray-700">
                  I'm a passionate <span className="font-semibold text-indigo-600">Java backend-focused full-stack developer</span> who enjoys building scalable applications and solving real-world problems. I love exploring new technologies and continuously improving my skills.
                </p>
                <p className="text-gray-700">
                  Currently, I'm focused on designing clean backend architectures with <span className="font-medium text-purple-600">Spring Boot</span>, exploring modern tools, and contributing to full-stack projects that deliver real user impact.
                </p>
              </motion.div>
              {/* Key Highlights */}
              <motion.div
                className="grid grid-cols-2 gap-4 mt-10"
                variants={containerVariants}
              >
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                    variants={highlightVariants}
                    whileHover={{ 
                      y: -5,
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    {highlight.icon}
                    <span className={`font-semibold ${highlight.color}`}>
                      {highlight.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Experience */}
            <motion.div
              className="flex flex-col justify-center items-center lg:items-start"
              variants={itemVariants}
            >
              <motion.div
                className="flex items-center space-x-3 mb-6"
                variants={itemVariants}
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                  <FaServer className="text-indigo-600 text-xl" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Experience
                </h2>
              </motion.div>
              
              <ul className="w-full space-y-8">
                {experiences.map((exp, idx) => (
                  <motion.li 
                    key={idx} 
                    className="exp-item bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                        <h4 className="text-lg font-medium text-indigo-700">{exp.company}</h4>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                        <div className="flex gap-2 mt-1">
                          <span className="px-2.5 py-0.5 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                            {exp.type}
                          </span>
                          <span className="px-2.5 py-0.5 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 mb-5">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider flex items-center">
                        <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2.5 pl-1 mb-4">
                        {exp.tasks.map((task, taskIndex) => (
                          <motion.li 
                            key={taskIndex} 
                            className="flex items-start text-gray-700 leading-relaxed"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: 0.1 * taskIndex }}
                          >
                            <span className="text-indigo-500 mr-2 mt-1">•</span>
                            <span className="text-gray-700">{task}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className="pt-2 border-t border-gray-100">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wider flex items-center">
                        <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2.5 justify-start">
                        {exp.skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="flex items-center px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium hover:bg-indigo-100 transition-all duration-200 flex-shrink-0"
                            whileHover={{ y: -2 }}
                          >
                            {skill.icon}
                            <span>{skill.name}</span>
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
