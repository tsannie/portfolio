import React from 'react';
import '../Projects/projects.scss';
import './experiences.scss';
import '../../main.scss';
import experience_list from '../../assets/experiences';

function Experiences() {
  const sortedExperiences = experience_list.sort((a, b) => b.year - a.year);
  const experiences = sortedExperiences.map((experience) => {
    return (
      <div className="experience" key={experience.name} onClick={() => window.open(experience.link)}>
        <div className="card__img">
          <img src={experience.image} alt="experience" />
          <span>{experience.year}</span>
        </div>
        <div className="experience__text">
          <span className="experience__title">
            <span id="name">{experience.name}</span>
            <span id="dash">-</span>
            <span id="type">{experience.type}</span>
          </span>
          <p>{experience.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="experiences">
        <h1>Experiences</h1>
        <div className="experiences__container">{experiences}</div>
      </div>
    </div>
  );
}

export default Experiences;
