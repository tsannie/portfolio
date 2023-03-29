import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import "./main.scss";

function App() {
  return (
    <body>
      <Header />
      <main>
        <Banner />
        <Presentation />
      </main>
    </body>
  );
}

export default App;
