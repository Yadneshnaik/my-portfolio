import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'MongoDB', icon: <FaDatabase /> },
  { name: 'Figma', icon: <SiFigma /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
];

const Skills = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <div key={skill.name} className="skill-card">
            <div className="skill-icon">
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
