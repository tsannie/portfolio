import React from 'react';
import './projects.scss';
import '../../main.scss';
import projects_list from '../../assets/projects';

function Projects() {
  const sortedProjects = projects_list.sort((a, b) => b.year - a.year);
  const projects = sortedProjects.map((project) => {
    return (
      <div className="card" key={project.name} onClick={() => window.open(project.link)}>
        <div className="card__img">
          <img src={project.image} alt="project" />
          <span>{project.year}</span>
        </div>
        <div className="card__title">
          <span>{project.name}</span>
        </div>
        <div className="card__description">
          <p>{project.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="projects">
        <h1>Projects</h1>
        <div className="projects__container">{projects}</div>
      </div>
    </div>
  );
}

export default Projects;
