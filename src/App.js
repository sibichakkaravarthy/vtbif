import React, { useState, useEffect } from "react";
import Header from "./Components/Navbar/ColorSchemesExample.jsx";
import Cards from "./Components/Cards/Card.jsx";
import About from "./Components/about/About.jsx";
import Gallery from "./Components/Carousel/Gallery.jsx";
import FAQ from "./Components/Cards/Faq.jsx";
import Team from "./Components/Carousel/Team.jsx";
import Contact from "./Components/about/contact.jsx";
import Footer from "./Components/about/footer.jsx";

import "./App.css";
import ControlledCarousel from "./Components/Carousel/ControlledCarousel.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
    <div class="loader-container">
    <div class="loader">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
  
  
    
      ) : (
        <>
          {/* <ColorSchemesExample /> */}
    
        <ControlledCarousel />
          <Cards />
          <About />
          <Gallery />
          <Contact />
          <FAQ />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
