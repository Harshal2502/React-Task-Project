import React from "react";
import Navbar from './Navigation_Bar/Navbar'
import Carousel from './Carousel/Carousel';
import Features from './Features';
import Awards from "./Awards";
import Aspects from "../Aspects";

function App() {

  return (
    <div>

      <Navbar />
      <Carousel />
    
      <Features />
      <Awards />

      <Aspects />

    </div>
  );
}

export default App;