import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMenuOpen(false);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {

      const sectionIds = ['home', 'about', 'why-choose-me', 'skills', 'projects', 'contact'];
      let currentSection = 'home';
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {

            if (id === 'why-choose-me') {
              currentSection = 'about';
            } else {
              currentSection = id;
            }
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <motion.nav 
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 transition-all duration-300"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between relative">
          {/* Brand with Logo */}
          <motion.div 
            className="flex items-center text-3xl font-bold cursor-pointer group"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/logo192.png" alt="Logo" className="h-10 w-10 mr-2 rounded-full shadow-md" />
            <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300">Ayush</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
              {' '}Raj
            </span>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-2 text-md sm:text-lg font-medium">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg tracking-wide transition-all duration-300 relative group ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-600 font-semibold shadow-md' 
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 hover:border hover:border-blue-200'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Hamburger Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-600 hover:from-blue-100 hover:to-purple-100 hover:border-blue-300 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>

          {/* Mobile Navigation Menu */}
          {menuOpen && (
            <div className="absolute top-16 right-0 w-48 bg-white rounded-lg shadow-lg flex flex-col items-start p-4 gap-2 md:hidden z-50 border border-gray-200 animate-fade-in">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-blue-600 font-semibold shadow-md'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 hover:border hover:border-blue-200'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
