import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ControlledCarousel.css';
import img from '../assest/vitap-1.jpg';
import img1 from '../assest/vitap-2.jpg';
import img2 from '../assest/vitap-1.jpg';


export default function ControlledCarousel({ background }) {
  const [index, setIndex] = useState();

  // function to update the current slide index
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container" style={{ backgroundColor: background }}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          {/* Image with responsive class */}
          <img className="d-block w-100" src={img} alt="First slide" />
          {/* Caption for first slide */}
          <Carousel.Caption>
            <h3>VIT-AP TECHNOLOGY BUSINESS INCUBATION FOUNDATION</h3>
            <p>The Art of turning an idea into a thriving reality.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Second slide */}
        <Carousel.Item>
          {/* Image with responsive class */}
          <img className="d-block w-100" src={img1} alt="Second slide" />
          {/* Caption for second slide */}
          <Carousel.Caption>
            <h3>Innovation</h3>
            <p>where passion meets persistence in the pursuit of success.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Third slide */}
        <Carousel.Item>
          {/* Image with responsive class */}
          <img className="d-block w-100" src={img2} alt="Third slide" />
          {/* Caption for third slide */}
          <Carousel.Caption>
            <h3>Dream of Entrepreneurship</h3>
            <p>Entrepreneurship is not just a career choice, it's a way of life.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
    </div>
  );
}
