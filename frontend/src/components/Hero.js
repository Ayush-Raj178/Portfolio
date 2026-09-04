import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiArrowDownRight, FiDownload } from 'react-icons/fi';
import ResumeButton from './ResumeButton';

const ServiceNode = ({ className = '', children }) => (
  <div className={`service-node ${className}`}>{children}</div>
);

const Hero = () => (
  <section id="home" className="hero-section" aria-labelledby="hero-title">
    <div className="page-container hero-grid">
      <div className="hero-copy">
        <h1 id="hero-title">Ayush Raj</h1>
        <p className="hero-role">Software Engineer <span aria-hidden="true">|</span> Java &amp; Spring Boot <span aria-hidden="true">|</span> Backend &amp; Full-Stack Development</p>
        <p className="hero-summary">
          I build backend-focused applications and full-stack systems with Java, Spring Boot, REST APIs, databases, and modern frontend tooling.
        </p>
        <div className="hero-actions" aria-label="Portfolio actions">
          <a className="button button-primary" href="#projects">
            View Projects <FiArrowDownRight aria-hidden="true" />
          </a>
          <a className="button button-secondary" href="https://github.com/Ayush-Raj178" target="_blank" rel="noreferrer">
            <FaGithub aria-hidden="true" /> View GitHub
          </a>
          <ResumeButton className="button button-text">
            <FiDownload aria-hidden="true" /> Download Resume
          </ResumeButton>
        </div>
      </div>

      <div className="hero-architecture" aria-label="Example full-stack service architecture">
        <div className="architecture-grid" aria-hidden="true" />
        <ServiceNode className="node-client">React Client</ServiceNode>
        <span className="connector connector-one" aria-hidden="true" />
        <ServiceNode className="node-api">API Layer</ServiceNode>
        <span className="connector connector-two" aria-hidden="true" />
        <div className="service-row">
          {['User', 'Expense', 'Budget', 'Notification'].map((service) => (
            <ServiceNode key={service}>{service}</ServiceNode>
          ))}
        </div>
        <span className="connector connector-three" aria-hidden="true" />
        <div className="data-row">
          <ServiceNode>MySQL</ServiceNode>
          <ServiceNode>Kafka</ServiceNode>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
