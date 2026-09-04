import React from 'react';
import { FiBookOpen } from 'react-icons/fi';

const Education = () => (
  <section id="education" className="section education-section" aria-labelledby="education-heading">
    <div className="page-container education-grid">
      <div>
        <p className="section-index">Education</p>
        <h2 id="education-heading">Academic foundation</h2>
      </div>
      <div className="education-entry">
        <span className="education-icon" aria-hidden="true"><FiBookOpen /></span>
        <div>
          <h3>Kalasalingam Academy of Research and Education</h3>
          <p>Tamil Nadu</p>
          <strong>B.Tech in Information Technology</strong>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
