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
      <span id="name">Theo Sannie</span>
      <LoopPrompt
        id="prompt"
        base_prompt="I am a "
        prompt_list={["Full Stack Developer", "Software Engineer"]}
        loop_delay={6000}
      />
      <p id="description">
        As a tech enthusiast, I create simple solutions to solve complex
        problems.
      </p>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
    </div>
  );
}

export default Banner;
