import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ControlledCarousel.css';
import img from '../assest/vitap-1.jpg';
import img1 from '../assest/vitap-2.jpg';
import img2 from '../assest/vitap-1.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState();

  // function to update the current slide index
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    // Carousel component with activeIndex and onSelect props
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {/* First slide */}
      <Carousel.Item>
        {/* Image with responsive class */}
        <img className="d-block w-100 " src={img} alt="First slide" />
        {/* Caption for first slide */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Second slide */}
      <Carousel.Item>
        {/* Image with responsive class */}
        <img className="d-block w-100 " src={img1} alt="Second slide" />
        {/* Caption for second slide */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Third slide */}
      <Carousel.Item>
        {/* Image with responsive class */}
        <img className="d-block w-100 " src={img2} alt="Third slide" />
        {/* Caption for third slide */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
