import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiMail } from 'react-icons/fi';

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

  // Throttle the scroll handler for better performance
  React.useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;
    
    const updateActiveSection = () => {
      const sectionIds = ['home', 'about', 'why-choose-me', 'skills', 'projects', 'contact'];
      let currentSection = 'home';
      
      // Only check sections that are in viewport
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if section is in viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = id === 'why-choose-me' ? 'about' : id;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
      ticking = false;
    };
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only run the update if we're not already waiting for a frame
      // and there's been enough scroll (10px) to warrant an update
      if (!ticking && Math.abs(currentScrollY - lastScrollY) > 10) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
        lastScrollY = currentScrollY;
      }
    };
    
    // Use passive scroll for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    updateActiveSection();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', id: 'home', icon: <FiHome className="mr-2" /> },
    { name: 'About', id: 'about', icon: <FiUser className="mr-2" /> },
    { name: 'Skills', id: 'skills', icon: null },
    { name: 'Projects', id: 'projects', icon: null },
    { name: 'Contact', id: 'contact', icon: <FiMail className="mr-2" /> }
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
            className="flex items-center text-2xl font-bold cursor-pointer group"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-all duration-300">
                <span>AR</span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full -z-10 opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            </div>
            <span className="ml-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
              <span className="hidden sm:inline">Ayush </span>Raj
            </span>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-3 text-md font-medium">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2.5 rounded-lg tracking-wide transition-all duration-300 flex items-center ${
                    activeSection === item.id 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </button>
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    layoutId="activeNav"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 25,
                      mass: 0.5
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </motion.button>

          {/* Mobile Navigation Menu */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              >
                <motion.div 
                  className="absolute top-16 right-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-xl p-4 flex flex-col gap-1 overflow-y-auto"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg flex items-center transition-colors duration-200 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className={`mr-3 ${activeSection === item.id ? 'text-blue-500' : 'text-gray-400'}`}>
                        {item.icon}
                      </span>
                      {item.name}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
