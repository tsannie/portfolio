import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import options from "./option";
import "./banner.scss";
import LoopPrompt from "./LoopPrompt";

function Banner() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="banner">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <div className="banner__content">
        <span className="name">Theo Sannie</span>
        <LoopPrompt
          base_prompt="I'm a "
          list_prompt={["Full Stack Developer.", "Software Engineer."]}
          prompt_icon="|"
          loop_delay={6000}
        />
        <p id="description">
          As a tech enthusiast, I create simple solutions to solve complex
          problems.
        </p>
        <div className="particles_bg" />
      </div>
    </div>
  );
}

export default Banner;
