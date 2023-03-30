import React from "react";
import "./presentation.scss";
import "../../main.scss";

function Presentation() {
  return (
    <div className="container">
      <div className="presentation">
        <h1>About me</h1>
        <p>
          Hi, my name is Theo, I'm 22 years old and I'm a passionate developer.
          I studied at{" "}
          <a href="https://42.fr/en/" id="link">
            42 Paris
          </a>
          , a school known for its practical and collaborative approach to
          learning programming. I learned by doing a lot of{" "}
          <a href="#projects" id="link">
            projects
          </a>{" "}
          in several fields of computer science. I love learning new skills and
          discovering new languages.
        </p>
        <p>
          However, I still have a preference for low-level languages. Indeed, I
          prefer to work with languages like C that allow me to understand the
          internal workings of computers and computer systems.
        </p>
        <p>
          My portfolio contains a selection of projects that I have worked on
          over the years. My projects allow me to showcase my skills, as well as
          details about certain features and technologies. I hope you enjoy your
          visit to my portfolio and that you can discover my passion for
          programming.
        </p>
      </div>
    </div>
  );
}

export default Presentation;
