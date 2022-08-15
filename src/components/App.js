import React, { useEffect, useState } from "react";
import Navbar from './Navbar'
import Navbar0 from './Navbar0'
import Carousel from './Carousel';
import Features from './Features';


function App() {

  const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);


  return (
    <div>
      {width>991&&<Navbar0 />}
      <Navbar />
      <Carousel />
      <Features />
    </div>
  );
}

export default App;
