import React from 'react';

const About = () => {
  const keyQualities = [
    {
      icon: '💻',
      title: 'Backend Development',
      description: 'Expert in Java & Spring Boot'
    },
    {
      icon: '🎨',
      title: 'Frontend Skills',
      description: 'React.js & Tailwind CSS'
    },
    {
      icon: '🚀',
      title: 'Problem Solver',
      description: 'Creative solutions to complex challenges'
    },
    {
      icon: '📚',
      title: 'Continuous Learner',
      description: 'Always exploring new technologies'
    },
    {
      icon: '🤝',
      title: 'Team Player',
      description: 'Collaborative and communication skills'
    },
    {
      icon: '⚡',
      title: 'Fast Learner',
      description: 'Quick adaptation to new environments'
    }
  ];

  const personalInfo = [
    { label: 'Name', value: 'Ayush Raj', icon: '👨‍💻' },
    { label: 'Email', value: 'ayushraj12121212@gmail.com', icon: '📧' },
    { label: 'Phone', value: '6202885742', icon: '📱' },
    { label: 'Location', value: 'India', icon: '📍' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg mb-6">
            <span className="text-2xl text-white">👨‍💻</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main Content Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Profile Image */}
              <div className="order-2 lg:order-1 p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-blue-50/50 to-purple-50/50">
                <div className="relative group">
                  {/* Main Profile Circle */}
                  <div className="relative w-80 h-80 mx-auto">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full p-2 shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500">
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center relative overflow-hidden">
                        {/* Avatar Icon */}
                        <svg className="w-40 h-40 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full opacity-80 group-hover:scale-110 transition-transform duration-300"></div>
                        <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-pink-400 rounded-full opacity-80 group-hover:scale-110 transition-transform duration-300"></div>
                        <div className="absolute top-1/4 -left-4 w-6 h-6 bg-green-400 rounded-full opacity-70 group-hover:scale-110 transition-transform duration-300"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tech Stack Badges */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      Java
                    </div>
                    <div className="bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      React
                    </div>
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      Spring Boot
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="order-1 lg:order-2 p-8 lg:p-12">
                <div className="space-y-8">
                  {/* Introduction */}
                  <div className="space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
                      Hello! I'm <span className="text-blue-600">Ayush Raj</span>
                    </h3>
                    
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p className="text-lg">
                        I'm a <span className="font-semibold text-gray-800">Java Backend Developer</span> with experience in Spring Boot and front-end skills in React.js & Tailwind CSS. I love creating intuitive user experiences and efficient backend systems.
                      </p>
                      <p>
                        I'm currently seeking <span className="font-semibold text-blue-600">internships or entry-level roles</span> where I can apply and grow my skills. I'm passionate about learning new technologies and solving real-world problems through code.
                      </p>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-6">
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Personal Info</h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {personalInfo.map((info, index) => (
                        <div key={index} className="flex items-center space-x-3 group">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300">
                            <span className="text-lg">{info.icon}</span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500">{info.label}</p>
                            <p className="text-gray-800 font-medium">{info.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Qualities Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Why <span className="text-blue-600">Choose Me?</span>
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyQualities.map((quality, index) => (
                <div 
                  key={index} 
                  className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-2xl text-white">{quality.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {quality.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-2">
                        {quality.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
