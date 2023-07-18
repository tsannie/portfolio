import React, { useEffect, useState } from "react";

/**
 * @param {{
 *  list_prompt: string[],
 * base_prompt: string,
 * loop_delay: number,
 * prompt_icon: string
 * start_delay: number
 * }} props
 * @returns {JSX.Element}
 */
function LoopPrompt({
  list_prompt,
  base_prompt,
  loop_delay,
  prompt_icon,
  start_delay,
}) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [write, setWrite] = useState(true);
  const [start, setStart] = useState(false);

  const writeText = () => {
    if (text.length < base_prompt.length) {
      setText(base_prompt.slice(0, text.length + 1));
    } else {
      if (text.length === base_prompt.length + list_prompt[index].length - 1) {
        setTimeout(() => setWrite(false), loop_delay);
      }
      setText(
        base_prompt +
          list_prompt[index].slice(0, text.length - base_prompt.length + 1)
      );
    }
  };

  const deleteText = () => {
    if (text.length === base_prompt.length) {
      setTimeout(() => setWrite(true), 1000);
      setIndex((index + 1) % list_prompt.length);
    } else {
      setText(text.slice(0, text.length - 1));
    }
  };

  useEffect(() => {
    if (!start) return;
    const sleep = setTimeout(
      () => {
        if (write) writeText();
        else deleteText();
      },
      write ? Math.floor(Math.random() * 130) + 30 : 50
    );

    return () => clearTimeout(sleep);
  }, [text, write, start]);

  useEffect(() => {
    const sleep = setTimeout(() => setStart(true), start_delay);
    return () => clearTimeout(sleep);
  }, []);

  useEffect(() => {
    const shuffled_list_prompt = list_prompt.sort(() => Math.random() - 0.5);
    setIndex(shuffled_list_prompt.indexOf(list_prompt[index]));
    list_prompt = shuffled_list_prompt;
  }, []);

  return (
    <div className="loop-prompt">
      <span id="base_prompt">{text.slice(0, base_prompt.length)}</span>
      <span id="list_prompt">{text.slice(base_prompt.length)}</span>
      <span id="prompt">{prompt_icon}</span>
    </div>
  );
}

export default LoopPrompt;
