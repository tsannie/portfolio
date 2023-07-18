import { useCallback, useEffect } from "react";
import Banner from "./components/Banner/Banner";
import Presentation from "./components/Presentation/Presentation";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import options from "./option";
import "./main.scss";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  const particlesInit = useCallback(async (engine) => {
    //console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    //await console.log(container);
  }, []);

  return (
    <main>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <Banner />
      <Presentation />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
