import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => (
  <footer className="site-footer">
    <div className="page-container footer-grid">
      <div>
        <strong>Ayush Raj</strong>
        <span>Software Engineer</span>
      </div>
      <div className="footer-links" aria-label="Social links">
        <a href="https://github.com/Ayush-Raj178" target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> GitHub</a>
        <a href="https://www.linkedin.com/in/ayushraj178/" target="_blank" rel="noreferrer"><FaLinkedinIn aria-hidden="true" /> LinkedIn</a>
        <a href="mailto:ayushraj12121212@gmail.com"><FiMail aria-hidden="true" /> Email</a>
      </div>
      <p>© {new Date().getFullYear()} Ayush Raj</p>
    </div>
  </footer>
);

export default Footer;
