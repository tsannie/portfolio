import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import "./main.scss";

function App() {
  return (
    <body>
      <Header />
      <main>
        <Banner />
      </main>
    </body>
  );
}

export default App;
