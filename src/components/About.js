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


  const experiences = [
    {
      role: "Java Development Intern",
      company: "Tech Solutions Inc.",
      period: "Jan 2024 – Mar 2024",
      type: "Internship",
      location: "Remote",
      tasks: [
        "Collaborated on an ATM System project using Java and implemented core banking functionalities",
        "Applied OOP principles to enhance code quality, maintainability, and system architecture",
        "Developed strong debugging and problem-solving skills through complex system troubleshooting",
        "Contributed to team collaboration and cross-functional dynamics in an agile environment"
      ],
      skills: ["Java", "OOP", "Eclipse", "Git", "Debugging", "Team Collaboration"]
    }
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-white rounded-2xl shadow-md ring-1 ring-gray-300/20 p-8 lg:p-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - About Me */}
            <motion.div
              className="flex flex-col justify-center items-center lg:items-start"
              variants={itemVariants}
            >
              <motion.div
                className="relative mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-48 h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl ring-4 ring-white">
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
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 mt-2"
                variants={itemVariants}
              >
                About Me
              </motion.h2>
              <motion.div
                className="max-w-prose text-lg leading-relaxed text-gray-700 space-y-4"
                variants={itemVariants}
              >
                <p>
                  Hi! I’m <span className="font-bold text-indigo-500">Ayush Raj</span>, a passionate web developer focused on creating beautiful and functional digital experiences. I love working with modern technologies and continuously learning new skills to stay ahead in the tech world.
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
            </motion.div>

            {/* Right Column - Experience */}
            <motion.div
              className="flex flex-col justify-center items-center lg:items-start"
              variants={itemVariants}
            >
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                variants={itemVariants}
              >
                Experience
              </motion.h2>
              <ul className="w-full space-y-6">
                {experiences.map((exp, idx) => (
                  <li key={idx} className="exp-item bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition-all border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1">
                      <span className="exp-role text-lg font-semibold text-blue-700">{exp.role}</span>
                      <span className="exp-period text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <span className="exp-company text-base text-purple-700 font-medium">{exp.company}</span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-2 mt-1">
                      <span className="text-sm text-gray-600">{exp.type}</span>
                      <span className="text-sm text-gray-600">{exp.location}</span>
                    </div>
                    <div className="mb-2">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1 uppercase tracking-wider">Key Responsibilities</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {exp.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="text-sm text-gray-700 leading-relaxed">{task}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-1 uppercase tracking-wider">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-xs font-medium hover:bg-indigo-200 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </li>
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
