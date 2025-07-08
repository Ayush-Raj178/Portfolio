import React from 'react';

const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg mb-6">
            <span className="text-2xl text-white">🚀</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A showcase of my recent work and technical achievements
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
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
