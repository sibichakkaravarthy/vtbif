
import React, { useRef } from 'react';
import CarouselSlider from 'react-carousel-slider';
import './Gallery.css';
import img from '../assest/v-10.png';
import img1 from '../assest/vitap-2.png';
import img2 from '../assest/vitap-3.png';
import img3 from '../assest/v-6.jpg';
import img4 from '../assest/v-5.png';
import img5 from '../assest/v-7.png';
import img6 from '../assest/v-8.png';
import img7 from '../assest/v-9.png';
import img8 from '../assest/v-10.png';
import img9 from '../assest/v-11.png';
import img10 from '../assest/v-12.png';
import img11 from '../assest/v-13.png';
import img12 from '../assest/v-14.png';

const jsonData = {
  autoSliding: {
    items: [
      {
        imgSrc: img,
      },
      {
        imgSrc: img1,
      },
      {
        imgSrc: img2,
      },
      {
        imgSrc: img3,
      },
      {
        imgSrc: img4,
      },
      {
        imgSrc: img5,
      },
      {
        imgSrc: img6,
      },
      {
        imgSrc: img7,
      },
      {
        imgSrc: img8,
      },
      {
        imgSrc: img9,
      },
      {
        imgSrc: img10,
      },
      {
        imgSrc: img11,
      },
      {
        imgSrc: img12,
      },
      {
        imgSrc: img,
      },
      {
        imgSrc: img1,
      },
    ],
  },
};

const AutoSlideCarousel = () => {
  const sliderBoxRef = useRef(null);
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);
  
  const slideItems = jsonData.autoSliding.items.map((item) => ({
    imgSrc: item.imgSrc,
  }));

  const slideCpnts = slideItems.map((item, i) => (
    <div
      className="slide-item"
      key={i}
      style={{ width: sliderBoxRef.current?.offsetWidth }}
    >
      <img
        className="slide-img"
        src={item.imgSrc}
        alt="slide"
        onClick={() => openModal(item)}
      />
    </div>
  ));
  
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  
  const buttonSetting = {
    placeOn: 'middle-inside',
    
    style: {
      left: {
        height: '50px',
        width: '50px',
        color: '#000',
       fontweight: 'bold',
        borderRadius: '50%',
        backgroundcolor: 'black',
        

      },
      right: {
        backgroundcolor: 'black',
        height: '50px',
        width: '50px',
        color: '#000',
        backgroundcolor: 'black',
        borderRadius: '50%',
      },
    },
  };
  
  const openModal = (item) => {
    const imgElement = document.createElement('img');
    imgElement.src = item.imgSrc;
    imgElement.alt = 'modal-image';
    imgElement.className = 'modal-image'; // Add the desired class name
  
    modalContentRef.current.innerHTML = ''; // Clear existing content
    modalContentRef.current.appendChild(imgElement);
    modalRef.current.style.display = 'block';
  };
  
  return (
    <>
    <div id="gallery"className="carousel-container">
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 className="heading">Gallery</h2>
      <div className="slider-box" ref={sliderBoxRef}>
        <CarouselSlider
          slideCpnts={slideCpnts}
          settings={settings}
          buttonSetting={buttonSetting}
        />
      </div>
      <div className="modal" ref={modalRef}>
        <div className="modal-content" ref={modalContentRef}>
        </div>
          <span className="close-btn" onClick={() => (modalRef.current.style.display = 'none')}>
            ×
          </span>
      </div>
    </div>
    </>
  );
};

export default AutoSlideCarousel;
