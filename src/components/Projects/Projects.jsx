import React from "react";
import "./projects.scss";
import "../../main.scss";
import projects_list from "../../assets/projects";

function Projects() {
  const projects = projects_list.map((project) => {
    return (
      <div className="card">
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

  console.log(projects);

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
