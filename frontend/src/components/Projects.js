import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiArrowRight, FiCheck, FiExternalLink, FiShield } from 'react-icons/fi';

const smartExpenseTech = ['React', 'Java 17', 'Spring Boot', 'MySQL', 'Kafka', 'Docker'];
const apiShieldTech = ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'Flyway'];

const ProjectLink = ({ href, children, primary = false }) => (
  <a
    className={`button ${primary ? 'button-primary' : 'button-secondary'}`}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

const TechList = ({ items }) => (
  <ul className="tech-list" aria-label="Technologies used">
    {items.map((item) => <li key={item}>{item}</li>)}
  </ul>
);

const Projects = () => (
  <section id="projects" className="section project-section" aria-labelledby="projects-heading">
    <div className="page-container">
      <div className="section-heading">
        <p className="section-index">Featured work</p>
        <h2 id="projects-heading">Engineering depth, shown in the work.</h2>
      </div>

      <article className="featured-project" aria-labelledby="smart-expense-title">
        <div className="project-details">
          <div className="project-title-row">
            <span className="project-icon" aria-hidden="true">₹</span>
            <div>
              <h3 id="smart-expense-title">Smart Expense &amp; Budget Tracker</h3>
            </div>
          </div>
          <p className="project-description">
            A full-stack personal finance application built around a React frontend and four Spring Boot services, with clear service ownership across users, expenses, budgets, and notifications.
          </p>
          <ul className="project-highlights">
            <li><FiCheck aria-hidden="true" /><span><strong>Secure access</strong> with Spring Security and JWT.</span></li>
            <li><FiCheck aria-hidden="true" /><span><strong>Reliable event flow</strong> through transactional outbox, Kafka consumers, and DLT routing.</span></li>
            <li><FiCheck aria-hidden="true" /><span><strong>Repeatable delivery</strong> with Docker Compose and a CI workflow.</span></li>
            <li><FiCheck aria-hidden="true" /><span><strong>Tested backend</strong> across the four Spring Boot services.</span></li>
          </ul>
          <TechList items={smartExpenseTech} />
          <div className="project-actions">
            <ProjectLink href="https://smart-expense-budget-tracker-lake.vercel.app/login" primary>
              Live Demo <FiExternalLink aria-hidden="true" />
            </ProjectLink>
            <ProjectLink href="https://github.com/Ayush-Raj178/smart-expense-budget-tracker">
              <FaGithub aria-hidden="true" /> GitHub
            </ProjectLink>
          </div>
        </div>

        <div className="project-architecture" aria-label="Smart Expense system architecture">
          <p className="architecture-title">Architecture overview</p>
          <div className="architecture-flow">
            <div className="architecture-stage architecture-client"><span>React</span><small>Client</small></div>
            <FiArrowRight className="flow-arrow" aria-hidden="true" />
            <div className="architecture-services">
              {['User', 'Expense', 'Budget', 'Notification'].map((service) => (
                <div className="architecture-stage" key={service}><span>{service}</span><small>Service</small></div>
              ))}
            </div>
            <FiArrowRight className="flow-arrow" aria-hidden="true" />
            <div className="architecture-data">
              <div className="architecture-stage"><span>MySQL</span><small>Service-owned schemas</small></div>
              <div className="architecture-stage"><span>Kafka</span><small>Events + DLT</small></div>
            </div>
          </div>
          <div className="architecture-legend" aria-label="Architecture layers">
            <span>Frontend</span><span>Spring Boot services</span><span>Data &amp; messaging</span>
          </div>
        </div>
      </article>

      <div className="selected-heading">
        <p className="section-index">Selected project</p>
      </div>
      <article className="selected-project" aria-labelledby="api-shield-title">
        <div className="selected-project-intro">
          <span className="project-icon shield-icon" aria-hidden="true"><FiShield /></span>
          <div>
            <h3 id="api-shield-title">API Shield</h3>
            <p>
              Spring Boot backend for protected API access with JWT authentication, hashed one-time-display API keys, role-based access, request logging, and in-memory rate limiting.
            </p>
          </div>
        </div>
        <div className="selected-project-meta">
          <TechList items={apiShieldTech} />
          <ProjectLink href="https://github.com/Ayush-Raj178/api-shield">
            <FaGithub aria-hidden="true" /> View Source
          </ProjectLink>
        </div>
      </article>
    </div>
  </section>
);

export default Projects;
