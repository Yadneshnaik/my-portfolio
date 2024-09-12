import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project-item">
          <a href="https://infrenox-pvt-ltd.vercel.app/" target="_blank" rel="noopener noreferrer">
            <h3>Infrenox Pvt Ltd.</h3>
            <p>At Infrenox Pvt Ltd, we specialize in delivering innovative IT solutions tailored to meet the unique needs of businesses across industries.</p>
          </a>
        </div>
        {/* Add more projects */}
      </div>
    </section>
  );
};

export default Projects;
