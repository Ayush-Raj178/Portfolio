import React from 'react';

const skillCategories = [
  {
    category: 'Programming Languages',
    bgGradient: 'from-blue-500/10 to-indigo-500/10',
    borderColor: 'border-blue-200',
    skills: [
      { name: 'Java', icon: '☕', bgColor: 'bg-gradient-to-br from-orange-50 to-red-50', iconBg: 'bg-orange-100' },
      { name: 'JavaScript', icon: '🟨', bgColor: 'bg-gradient-to-br from-yellow-50 to-amber-50', iconBg: 'bg-yellow-100' },
      { name: 'Python', icon: '🐍', bgColor: 'bg-gradient-to-br from-green-50 to-blue-50', iconBg: 'bg-green-100' }
    ]
  },
  {
    category: 'Web Technologies',
    bgGradient: 'from-emerald-500/10 to-teal-500/10',
    borderColor: 'border-emerald-200',
    skills: [
      { name: 'React.js', icon: '⚛️', bgColor: 'bg-gradient-to-br from-cyan-50 to-blue-50', iconBg: 'bg-cyan-100' },
      { name: 'Node.js', icon: '🟢', bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50', iconBg: 'bg-green-100' },
      { name: 'Tailwind CSS', icon: '💨', bgColor: 'bg-gradient-to-br from-teal-50 to-cyan-50', iconBg: 'bg-teal-100' },
      { name: 'HTML/CSS', icon: '🎨', bgColor: 'bg-gradient-to-br from-pink-50 to-purple-50', iconBg: 'bg-pink-100' }
    ]
  },
  {
    category: 'Databases',
    bgGradient: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'border-purple-200',
    skills: [
      { name: 'MySQL', icon: '🐬', bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50', iconBg: 'bg-blue-100' },
      { name: 'MongoDB', icon: '🍃', bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50', iconBg: 'bg-green-100' }
    ]
  },
  {
    category: 'Tools',
    bgGradient: 'from-orange-500/10 to-yellow-500/10',
    borderColor: 'border-orange-200',
    skills: [
      { name: 'Git', icon: '🔧', bgColor: 'bg-gradient-to-br from-gray-50 to-slate-50', iconBg: 'bg-gray-100' },
      { name: 'GitHub', icon: '😺', bgColor: 'bg-gradient-to-br from-gray-50 to-neutral-50', iconBg: 'bg-gray-100' },
      { name: 'Thunder Client', icon: '⚡', bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50', iconBg: 'bg-yellow-100' }
    ]
  }
];

const SkillCard = ({ skill }) => {
  return (
    <div className={`group relative overflow-hidden rounded-xl ${skill.bgColor} border border-gray-100 p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1`}>
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className={`${skill.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
          <span className="text-2xl">{skill.icon}</span>
        </div>
        <h4 className="font-semibold text-gray-800 text-sm md:text-base transition-colors duration-300 group-hover:text-blue-600">
          {skill.name}
        </h4>
      </div>
      
      {/* Subtle border animation */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300"></div>
    </div>
  );
};

const CategorySection = ({ category }) => {
  return (
    <div className="mb-12">
      {/* Category Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          {category.category}
        </h3>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-xl mb-6">
            <span className="text-3xl text-white">🛠️</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Skills Categories - Single Frame */}
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-12">
          <div className="space-y-12">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CategorySection category={category} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

