import React, { useCallback } from "react";
import "./banner.scss";
import LoopPrompt from "./LoopPrompt";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__content">
        <span className="name">Theo Sannie</span>
        <LoopPrompt
          base_prompt="I'm a "
          list_prompt={["Full Stack Developer.", "Software Engineer."]}
          prompt_icon="|"
          loop_delay={4000}
        />
        <p id="description">
          As a tech enthusiast, I create simple solutions to solve complex
          problems.
        </p>
      </div>
    </div>
  );
}

export default Banner;
