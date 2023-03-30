import React from "react";
import "./projects.scss";
import "../../main.scss";

function Projects() {
  return (
    <div className="container">
      <div className="projects">
        <h1>Projects</h1>
        <div className="projects__container">
          <div className="card">
            <div className="card__image">
              <img src="https://i.imgur.com/1ZQ3w9G.png" alt="project" />
            </div>
            <div className="card__text">
              <h2>Project 1</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
