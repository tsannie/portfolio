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
          list_prompt={[
            "Software Engineer.",
            "Machine Learning Enthusiast.",
            "Full Stack Developer.",
            "Tech Enthusiast.",
          ]}
          prompt_icon="|"
          loop_delay={1000}
          start_delay={2700}
        />
        <p className="description">
          As a tech enthusiast, I create simple solutions to solve complex
          problems.
        </p>
      </div>
    </div>
  );
}

export default Banner;
