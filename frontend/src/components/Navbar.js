import React, { useEffect, useRef, useState } from 'react';
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import ResumeButton from './ResumeButton';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = ({ theme, onToggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstMenuItemRef = useRef(null);

  useEffect(() => {
    let frameRequested = false;
    const updateActiveSection = () => {
      const marker = 200;
      let currentSection = 'home';
      for (const { id } of navItems) {
        const section = document.getElementById(id);
        if (!section) continue;
        const bounds = section.getBoundingClientRect();
        if (bounds.top <= marker && bounds.bottom > marker) {
          currentSection = id;
          break;
        }
      }
      setActiveSection(currentSection);
      frameRequested = false;
    };
    const handleScroll = () => {
      if (!frameRequested) {
        window.requestAnimationFrame(updateActiveSection);
        frameRequested = true;
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.classList.add('menu-is-open');
    firstMenuItemRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('menu-is-open');
    };
  }, [menuOpen]);

  const goToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="nav-shell page-container" aria-label="Primary navigation">
        <button className="brand-button" type="button" onClick={() => goToSection('home')} aria-label="Ayush Raj, go to home">
          <span className="brand-mark" aria-hidden="true">AR</span>
          <span className="brand-name">Ayush Raj</span>
        </button>

        <div className="desktop-nav" aria-label="Page sections">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-link ${activeSection === item.id ? 'is-active' : ''}`}
              onClick={() => goToSection(item.id)}
              aria-current={activeSection === item.id ? 'location' : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="icon-button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <ResumeButton className="button button-primary nav-resume" compact>
            <FiDownload aria-hidden="true" /> Resume
          </ResumeButton>
          <button
            ref={menuButtonRef}
            type="button"
            className="icon-button menu-button"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="mobile-nav-backdrop" role="presentation" onMouseDown={() => setMenuOpen(false)}>
          <div id="mobile-navigation" className="mobile-nav" onMouseDown={(event) => event.stopPropagation()}>
            {navItems.map((item, index) => (
              <button
                key={item.id}
                ref={index === 0 ? firstMenuItemRef : undefined}
                type="button"
                className={`mobile-nav-link ${activeSection === item.id ? 'is-active' : ''}`}
                onClick={() => goToSection(item.id)}
              >
                <span>{item.label}</span>
              </button>
            ))}
            <ResumeButton className="button button-primary mobile-resume">
              <FiDownload aria-hidden="true" /> Download Resume
            </ResumeButton>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
