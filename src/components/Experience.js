import React from 'react';

const experienceData = [
  {
    id: 1,
    title: 'Java Development Intern',
    company: 'Tech Solutions Inc.',
    dates: 'Jan 2024 – Mar 2024',
    duration: '3 months',
    location: 'Remote',
    type: 'Internship',
    description: [
      'Built a Java-based ATM Simulation System with features like balance inquiry, deposits, and withdrawals.',
      'Applied Object-Oriented Programming (OOP) principles for clean and modular code.',
      'Improved real-world Java application development and debugging skills.',
      'Collaborated with senior developers to implement best practices and code standards.'
    ],
    technologies: ['Java', 'OOP', 'Eclipse IDE', 'Git']
  },
  // Add more experiences as needed
];

const ExperienceCard = ({ experience, index }) => {
  return (
    <div className={`relative mb-12 group animate-fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
      {/* Timeline dot */}
      <div className="absolute left-8 top-8 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform duration-300">
        <div className="absolute inset-0 bg-white rounded-full animate-pulse opacity-20"></div>
      </div>
      
      {/* Experience card */}
      <div className="ml-20 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-8 group-hover:shadow-xl group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-300 cursor-pointer">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              💼 {experience.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                🏢 <span className="font-medium text-blue-600">{experience.company}</span>
              </span>
              <span className="flex items-center gap-1">
                📍 {experience.location}
              </span>
              <span className="flex items-center gap-1">
                ⏱️ {experience.duration}
              </span>
            </div>
          </div>
          
          <div className="mt-4 lg:mt-0">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium rounded-full shadow-md">
                {experience.type}
              </span>
              <span className="text-sm font-medium text-gray-500">
                🗓️ {experience.dates}
              </span>
            </div>
          </div>
        </div>
        
        {/* Description */}
        <div className="space-y-3 mb-6">
          {experience.description.map((item, i) => (
            <div key={i} className="flex items-start gap-3 group/item">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 group-hover/item:bg-purple-500 transition-colors duration-300"></div>
              <p className="text-gray-700 leading-relaxed group-hover/item:text-gray-800 transition-colors duration-300">
                {item}
              </p>
            </div>
          ))}
        </div>
        
        {/* Technologies */}
        <div className="pt-4 border-t border-gray-100">
          <h4 className="text-sm font-semibold text-gray-600 mb-3">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
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

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg mb-6">
            <span className="text-2xl text-white">💼</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            My professional journey and key accomplishments in software development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 rounded-full hidden md:block"></div>
          
          {/* Experience cards */}
          <div className="space-y-8">
            {experienceData.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
          
          {/* Timeline end indicator */}
          <div className="flex items-center justify-center mt-12">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg animate-pulse"></div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Interested in my work? Let's connect and discuss opportunities!
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
