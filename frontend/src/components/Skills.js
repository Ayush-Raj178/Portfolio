import React from 'react';
import { motion } from 'framer-motion';
import { TbApi } from 'react-icons/tb';
import { SiApachekafka, SiDocker, SiMysql, SiSpringsecurity } from 'react-icons/si';

const skillsData = [
  { name: 'Java', icon: '☕', tone: 'java', descriptor: 'Core', description: 'OOP, collections, streams, exception handling, and backend application development.' },
  { name: 'Spring Boot', icon: '🍃', tone: 'spring', descriptor: 'Primary', description: 'REST services, dependency injection, Spring Data JPA, and microservice development.' },
  { name: 'Spring Security', icon: <SiSpringsecurity />, tone: 'security', descriptor: 'Primary', description: 'JWT authentication, authorization, role-based access, and secure API flows.' },
  { name: 'REST APIs', icon: <TbApi />, tone: 'api', descriptor: 'Core', description: 'Versioned HTTP APIs, validation, consistent responses, and service integration.' },
  { name: 'MySQL', icon: <SiMysql />, tone: 'mysql', descriptor: 'Core', description: 'Relational modeling, service-owned schemas, JPA persistence, and Flyway migrations.' },
  { name: 'Kafka', icon: <SiApachekafka />, tone: 'kafka', descriptor: 'Working knowledge', description: 'Event consumers, transactional outbox delivery, idempotency, and DLT routing.' },
  { name: 'React.js', icon: '⚛️', tone: 'react', descriptor: 'Working knowledge', description: 'Component-driven interfaces, hooks, state, forms, and responsive frontend delivery.' },
  { name: 'JavaScript', icon: '🟨', tone: 'javascript', descriptor: 'Core', description: 'Modern syntax, asynchronous flows, browser APIs, and application logic.' },
  { name: 'Tailwind CSS', icon: '💨', tone: 'tailwind', descriptor: 'Working knowledge', description: 'Responsive utility-first styling and maintainable interface systems.' },
  { name: 'Docker', icon: <SiDocker />, tone: 'docker', descriptor: 'Working knowledge', description: 'Dockerfiles, multi-service local environments, and Docker Compose workflows.' },
];

const SkillCard = ({ skill, index }) => (
  <motion.article
    className={`skill-card skill-${skill.tone}`}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.25), ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ y: -8, scale: 1.02 }}
  >
    <div className="skill-card-wash" aria-hidden="true" />
    <div className="skill-icon" aria-hidden="true">{skill.icon}</div>
    <h3>{skill.name}</h3>
    <p className="skill-descriptor">{skill.descriptor}</p>
    <p className="skill-description">{skill.description}</p>
  </motion.article>
);

const Skills = () => (
  <section id="skills" className="section skills-section" aria-labelledby="skills-heading">
    <div className="page-container">
      <div className="section-heading skills-heading">
        <p className="section-index">Technical skills</p>
        <h2 id="skills-heading">Backend first. Full-stack capable.</h2>
        <p>My strongest evidence is in Java backend engineering, with the frontend and delivery tools needed to ship complete systems.</p>
      </div>
      <div className="skills-grid">
        {skillsData.map((skill, index) => <SkillCard key={skill.name} skill={skill} index={index} />)}
      </div>
    </div>
  </section>
);

export default Skills;
