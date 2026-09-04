import React from 'react';
import { FiCode, FiDatabase, FiLayers, FiServer } from 'react-icons/fi';

const focusSteps = [
  { label: 'Interface', detail: 'React', icon: <FiLayers /> },
  { label: 'API layer', detail: 'Spring Boot', icon: <FiCode /> },
  { label: 'Data layer', detail: 'MySQL', icon: <FiDatabase /> },
  { label: 'Services', detail: 'Business logic', icon: <FiServer /> },
];

const About = () => (
  <section id="about" className="section about-section" aria-labelledby="about-heading">
    <div className="page-container about-grid">
      <div className="about-copy">
        <p className="section-index">Engineering focus</p>
        <h2 id="about-heading">Building reliable systems from the API outward.</h2>
        <p>
          I build Java and Spring Boot systems around clear API contracts, secure access, and maintainable data flows.
        </p>
        <p>
          My project work spans authentication, asynchronous events, relational data, responsive React interfaces, and repeatable delivery workflows.
        </p>
      </div>
      <div className="focus-flow" aria-label="Full-stack engineering focus">
        {focusSteps.map((step, index) => (
          <React.Fragment key={step.label}>
            <div className="focus-step">
              <span className="focus-icon" aria-hidden="true">{step.icon}</span>
              <strong>{step.label}</strong>
              <small>{step.detail}</small>
            </div>
            {index < focusSteps.length - 1 ? <span className="focus-line" aria-hidden="true" /> : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default About;
