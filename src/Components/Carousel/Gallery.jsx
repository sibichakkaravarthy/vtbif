import React, { useRef, useEffect, useState } from "react";
import "./Gallery.css";
import ScrollReveal from "scrollreveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import img from "../assest/Picture1.png";
import img1 from "../assest/vitap-2.png";
import img2 from "../assest/vitap-3.png";
import img3 from "../assest/v-6.jpg";
import img4 from "../assest/v-5.png";
import img5 from "../assest/v-7.png";
import img6 from "../assest/v-8.png";
import img7 from "../assest/v-9.png";
import img8 from "../assest/v-10.png";
import img9 from "../assest/v-11.png";
import img10 from "../assest/v-12.png";
import img11 from "../assest/v-13.png";
import img12 from "../assest/v-14.png";

function Gallery() {
  const carouselRef = useRef(null);
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);
  const [firstImgWidth, setFirstImgWidth] = useState(0);

  const openModal = (img) => {
    modalRef.current.style.display = "block";
    modalContentRef.current.src = img.src;
  };

  const closeModal = () => {
    modalRef.current.style.display = "none";
  };

  
  const handleArrowClick = (direction) => {
    const newScrollLeft =
      direction === "left"
        ? carouselRef.current.scrollLeft - firstImgWidth
        : carouselRef.current.scrollLeft + firstImgWidth;

    carouselRef.current.scrollLeft = newScrollLeft;
  };

  useEffect(() => {
    ScrollReveal().reveal(".carousel_2 img");
    if (carouselRef.current.children[0]) {
      setFirstImgWidth(carouselRef.current.children[0].clientWidth + 14);
    }
  }, []);

  return (
    <section id="gallery">
      <h2 className="title">Gallery</h2>
      <div className="container-gallery">
        <div className="wrapper">
          <FontAwesomeIcon
            id="left"
            icon={faAngleLeft}
            onClick={() => handleArrowClick("left")}
          />
          <div className="carousel_2" ref={carouselRef}>
          <img
  id="myImg1"
  src={img}
  alt="img1"
  draggable="false"
  onClick={() => openModal(document.getElementById("myImg1"))}
  onLoad={() => {
    if (carouselRef.current.children[0]) {
      setFirstImgWidth(carouselRef.current.children[0].clientWidth + 14);
    }
  }}
/>

<img
  id="myImg2"
  src={img1}
  alt="img2"
  draggable="false"
  onClick={() => openModal(document.getElementById("myImg2"))}
/>
<img
  id="myImg3"
  src={img2}
  alt="img3"
  draggable="false"
  onClick={() => openModal(document.getElementById("myImg3"))}
/>
            <img
              id="myImg2"
              src={img2}
              alt="img2"
              draggable="false"
              onClick={() => openModal(document.getElementById("myImg2"))}
            />
            <img
              id="myImg2"
              src={img3}
              alt="img2"
              draggable="false"
              onClick={() => openModal(document.getElementById("myImg2"))}
            />
            <img
              id="myImg2"
              src={img4}
              alt="img2"
              draggable="false"
              onClick={() => openModal(document.getElementById("myImg2"))}
            />
            <img
              id="myImg2"
              src={img5}
              alt="img2"
              draggable="false"
              onClick={() => openModal(document.getElementById("myImg2"))}
            />
            <img
              id="myImg2"
              src={img6}
              alt="img2"
              draggable="false"
              onClick={() => openModal(document.getElementById("myImg2"))}
            />
            <img
              id="myImg2"
              src={img7}
              alt="img2"
              draggable="false"
              onClick={() => openModal(document.getElementById("myImg2"))}
            />
            <img
              id="myImg2"
              src={img8}
              alt="img2"
              draggable="false"
              onClick={() => openModal(document.getElementById("myImg2"))}
            />
            <img
              id="myImg2"
              src={img8}
              alt="img2"
              draggable="false"
              onClick={() => openModal(document.getElementById("myImg2"))}
            />
            <img
              id="myImg2"
              src={img9}
              alt="img2"
              draggable="false"
              onClick={() => openModal(document.getElementById("myImg2"))}
            />
            <img
              id="myImg2"
              src={img10}
              alt="img2"
              draggable="false"
              onClick={() => openModal(document.getElementById("myImg2"))}
            />
            <img
              id="myImg2"
              src={img11}
              alt="img2"
              draggable="false"
              onClick={() => openModal(document.getElementById("myImg2"))}
            />
            <img
              id="myImg2"
              src={img12}
              alt="img2"
              draggable="false"
              onClick={() => openModal(document.getElementById("myImg2"))}
            />
            {/* Add more images here */}

          </div>
          <FontAwesomeIcon
            id="right"
            icon={faAngleRight}
            onClick={() => handleArrowClick("right")}
            style={{
              backgroundColor: "#6a6a6a",
              borderRadius: "50%",
              padding: "10px",
              color: "#fff",
              
            }}
          />
        </div>
      </div>
      <div ref={modalRef} className="modal">
        <span className="close" onClick={closeModal}>
          ×
        </span>
        <img className="modal-content" ref={modalContentRef} alt="modal-img" />
      </div>
    </section>
  );
}

export default Gallery;
