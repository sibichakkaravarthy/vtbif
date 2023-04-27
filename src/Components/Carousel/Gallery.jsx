import React, { useRef, useEffect } from "react";
import "./Gallery.css";
import img from "../assest/Picture1.png";
import img1 from "../assest/vitap-2.png";
import img2 from "../assest/vitap-3.png";
import img3 from "../assest/Picture1.png";
import img4 from "../assest/Picture1.png";
import ScrollReveal from "scrollreveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Gallery() {
  const carouselRef = useRef(null);
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);
  let isDragStart = false,
    prevPageX,
    prevScrollLeft,
    positionDiff;
  let firstImgWidth = 0;

  const openModal = (img) => {
    modalRef.current.style.display = "block";
    modalContentRef.current.src = img.src;
  };

  const closeModal = () => {
    modalRef.current.style.display = "none";
  };

  const autoSlide = () => {
    positionDiff = Math.abs(positionDiff);
    let valDifference = firstImgWidth - positionDiff;
    // console.log(valDifference);
  };

  const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carouselRef.current.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carouselRef.current.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
  };

  const dragStop = () => {
    isDragStart = false;
    carouselRef.current.classList.remove("dragging");
    autoSlide();
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
              onLoad={() =>
                (firstImgWidth =
                  carouselRef.current.children[0].clientWidth + 14)
              }
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
              id="myImg3"
              src={img3}
              alt="img3"
              draggable="false"
              onClick={() => openModal(document.getElementById("myImg3"))}
            />
            <img
              id="myImg4"
              src={img4}
              alt="img4"
              draggable="false"
              onClick={() => openModal(document.getElementById("myImg4"))}
            />
          </div>
          <FontAwesomeIcon
            id="right"
            icon={faAngleRight}
            onClick={() => handleArrowClick("right")}
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
