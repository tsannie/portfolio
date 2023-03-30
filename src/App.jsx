import { useCallback } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import options from "./option";
import "./main.scss";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <body>
      <Header />
      <main>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={options}
        />
        <Banner />
        <Presentation />
      </main>
    </body>
  );
}

export default App;
