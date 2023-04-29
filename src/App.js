import ColorSchemesExample from './Components/Navbar/ColorSchemesExample.jsx'
import React from 'react';
import ControlledCarousel from './Components/Carousel/ControlledCarousel.jsx'
import Cards from './Components/Cards/Card.jsx'
import About from './Components/about/About.jsx'
import Gallery from './Components/Carousel/Gallery.jsx';

import Contact from './Components/about/contact.jsx';
import Footer from './Components/about/footer.jsx';

function App() {
  return (
    <div>
      <ColorSchemesExample/>
      <ControlledCarousel/>
      <Cards/>
      <About/>
      <Gallery/>
   
      <Contact/>
      <Footer/>
    
    </div>
  );
}

export default App;
