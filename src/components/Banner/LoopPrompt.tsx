import React, { useEffect, useState } from "react";

function LoopPrompt({ prompt_list, base_prompt, loop_delay, id }) {
  const [prompt, setPrompt] = useState("");
  const [index, setIndex] = useState(0);
  const [write, setWrite] = useState(true);

  useEffect(() => {
    const sleep = setTimeout(() => {
      if (write) {
        if (prompt.length < base_prompt.length) {
          setPrompt(base_prompt.slice(0, prompt.length + 1));
        } else {
          if (
            prompt.length ===
            base_prompt.length + prompt_list[index].length - 1
          ) {
            setTimeout(() => setWrite(false), loop_delay);
          }
          setPrompt(
            base_prompt +
              prompt_list[index].slice(
                0,
                prompt.length - base_prompt.length + 1
              )
          );
        }
      } else {
        if (prompt.length === base_prompt.length) {
          setTimeout(() => setWrite(true), 1000);
          setIndex((index + 1) % prompt_list.length);
        } else {
          setPrompt(prompt.slice(0, prompt.length - 1));
        }
      }
    }, 100);

    return () => clearTimeout(sleep);
  }, [prompt, write]);

  return (
    <div className="loop-prompt">
      <span>{prompt}</span>
      <span id={id} className="cursor">
        |
      </span>
    </div>
  );
}

export default LoopPrompt;
