import React from 'react';
import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      role: "Java Development Intern",
      company: "Tech Solutions Inc.",
      duration: "Jan 2024 – Mar 2024",
      type: "Internship",
      location: "Remote",
      tasks: [
        "Collaborated on an ATM System project using Java and implemented core banking functionalities",
        "Applied OOP principles to enhance code quality, maintainability, and system architecture",
        "Developed strong debugging and problem-solving skills through complex system troubleshooting",
        "Contributed to team collaboration and cross-functional dynamics in an agile environment"
      ],
      skills: ["Java", "OOP", "Eclipse", "Git", "Debugging", "Team Collaboration"]
    },
    // Add more experiences here as needed
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 px-6 sm:px-10 bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Building robust solutions and growing through hands-on development experience
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg ring-1 ring-gray-300/20 p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              {/* Role and Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                  <span className="text-2xl">🏢</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {exp.role}
                  </h3>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
                  {exp.type}
                </span>
              </div>

              {/* Company and Duration */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="text-sm">🏢</span>
                  <span className="font-semibold text-gray-900">{exp.company}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-sm">📅</span>
                  <span className="text-sm">{exp.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span className="text-sm">🌐</span>
                  <span className="text-sm">{exp.location}</span>
                </div>
              </div>

              {/* Tasks */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {exp.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-3">
                      <span className="text-indigo-500 mt-1.5 text-xs">▶</span>
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {task}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                  Technologies Used
                </h4>
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
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Let's connect and collaborate on your next project
          </p>
          <motion.button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get in Touch</span>
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
      </div>
    </section>
  );
};

export default WorkExperience;
