import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import ControlledCarousel from './Components/Carousel/ControlledCarousel.jsx';
import Cards from './Components/Cards/Card.jsx';
import About from './Components/about/About.jsx';
import Gallery from './Components/Carousel/Gallery.jsx';
import FAQ from './Components/Cards/Faq.jsx';
import Team from './Components/Carousel/Team.jsx';
import Contact from './Components/about/contact.jsx';
import Footer from './Components/about/footer.jsx';

import './App.css';
import FireworksComponent from './Components/Carousel/FireworksComponent.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader-container">
          <div className="loader" />
        </div>
      ) : (
        <>
          {/* <ColorSchemesExample /> */}
          <ControlledCarousel />
          <Cards />
          <About />
          <Gallery />
          <Team />
          <Contact />
          <FAQ />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
