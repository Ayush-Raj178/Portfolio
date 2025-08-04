import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sectionStyles } from '../styles/sectionStyles';

const projects = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    description: [
      'Engineered a full-stack personal portfolio application, leveraging a Spring Boot backend to serve RESTful APIs for dynamic content and user interactions',
      'Ensured a seamless and robust user experience by enabling CORS for smooth cross-origin communication between the frontend and backend services',
      'Launched a fully responsive platform designed to effectively showcase technical skills, project work, and professional credentials across all devices'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    technologies: ['React.js', 'Tailwind CSS', 'Spring Boot', 'H2 Database', 'Axios'],
    liveLink: 'https://ayush-raj-portfolio.vercel.app',
    codeLink: 'https://github.com/Ayush-Raj178/Portfolio'
  },
  {
    id: 2,
    title: 'User Management System',
    description: [
      'Developed a secure and scalable user management app with role-based access',
      'Integrated JWT for authentication and built REST APIs using Spring Boot',
      'Frontend made responsive with Next.js and Tailwind CSS',
      'Implemented admin dashboard with user analytics and reporting'
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    technologies: ['Spring Boot', 'Next.js', 'Tailwind CSS', 'JWT', 'MySQL'],
    liveLink: 'https://user-management-demo.example.com',
    codeLink: 'https://github.com/Ayush-Raj178/user-management-system'
  },
  {
    id: 3,
    title: 'Facial Recognition using CNN',
    description: [
      'Real-time facial emotion detection using CNN on webcam input',
      'Trained on FER-2013 dataset with data augmentation and model fine-tuning',
      'Achieved accurate classification of emotions in live camera feed',
      'Implemented preprocessing pipeline for improved accuracy'
    ],
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'CNN'],
    liveLink: 'https://facial-recognition-demo.example.com',
    codeLink: 'https://github.com/Ayush-Raj178/facial-recognition-cnn'
  },
  {
    id: 4,
    title: 'Smart Meal Revival System',
    description: [
      'Created a donation platform to help distribute meals to underprivileged people',
      'Added secure login, meal request/donation tracking, and admin dashboard',
      'Published and presented as part of a research initiative',
      'Implemented location-based matching for efficient food distribution'
    ],
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    liveLink: 'https://smart-meal-revival.example.com',
    codeLink: 'https://github.com/Ayush-Raj178/smart-meal-revival'
  }
];

// Projects will be paginated in the component

const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className={`group bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-fade-in`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Project overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
            >
              🌐 Live Demo
            </a>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200 transform hover:scale-105"
            >
              💻 View Code
            </a>
          </div>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {project.title}
        </h3>
        
        {/* Description Points */}
        <div className="space-y-2 mb-4">
          {project.description.map((point, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
        
        {/* Technologies */}
        <div className="pt-4 border-t border-gray-100">
          <h4 className="text-xs font-semibold text-gray-500 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-medium rounded-full hover:from-blue-200 hover:to-purple-200 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Fade in animation for scroll indicator
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};



const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showScrollArrow, setShowScrollArrow] = useState(true);
  
  const projectsPerPage = 3;
  const paginatedProjects = Array.from(
    { length: Math.ceil(projects.length / projectsPerPage) },
    (_, i) => projects.slice(i * projectsPerPage, (i + 1) * projectsPerPage)
  );
  const currentProjects = paginatedProjects[currentPage] || [];
  const canGoNext = currentPage < paginatedProjects.length - 1;
  const canGoPrev = currentPage > 0;

  const handlePageChange = (newPage) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(newPage > currentPage ? 1 : -1);
    setCurrentPage(newPage);
    
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const nextPage = () => canGoNext && handlePageChange(currentPage + 1);
  const prevPage = () => canGoPrev && handlePageChange(currentPage - 1);

  // Hide scroll arrow when not on first page
  useEffect(() => {
    setShowScrollArrow(currentPage === 0);
  }, [currentPage]);

  return (
    <section id="projects" className={`${sectionStyles.section} bg-gradient-to-b from-[#f8fafc] to-[#e0f2fe] relative overflow-hidden`}>
      <div className={sectionStyles.container}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-800 mb-4">
            <span className="text-black">Projects</span>
          </h2>
          <p className={`${sectionStyles.subtitle} text-gray-500`}>
            A showcase of my recent work and technical achievements
          </p>
        </div>

        {/* Projects Grid with Inline Navigation */}
        <div className="relative">
          <div className="relative min-h-[600px] md:min-h-[500px] w-full">
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              <motion.div 
                key={currentPage}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative"
                custom={direction}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: (direction) => ({
                    x: direction > 0 ? '100%' : '-100%',
                    opacity: 0
                  }),
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                  },
                  exit: (direction) => ({
                    x: direction > 0 ? '-100%' : '100%',
                    opacity: 0,
                    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
                  })
                }}
              >
                {currentProjects.map((project, index) => (
                  <div key={project.id} className="relative group">
                    <ProjectCard project={project} index={index} />
                    
                    {/* Hero-style Arrow on last card */}
                    {index === currentProjects.length - 1 && canGoNext && (
                      <motion.div 
                        className="absolute -right-12 top-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                        onClick={nextPage}
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                      >
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
                          <div className="flex flex-col items-center">
                            <svg
                              className="w-8 h-8 text-blue-500 group-hover:text-blue-600 transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                    
                    {/* Left Arrow on first card when not on first page */}
                    {index === 0 && canGoPrev && !showScrollArrow && (
                      <motion.div 
                        className="absolute -left-12 top-1/2 -translate-y-1/2 z-20 cursor-pointer group"
                        onClick={prevPage}
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                      >
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
                          <div className="flex flex-col items-center">
                            <svg
                              className="w-8 h-8 text-blue-500 group-hover:text-blue-600 transition-colors transform rotate-180"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>


        
        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Want to see more projects or collaborate on something new?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/Ayush-Raj178"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🔗 View All Projects
            </a>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              💬 Let's Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
