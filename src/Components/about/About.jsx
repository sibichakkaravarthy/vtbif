import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import "./about.css";
import ScrollReveal from "scrollreveal";
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';



function About() {
  const aboutRef = useRef(null);
  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const config = {
      distance: "50px",
      duration: 1000,
      easing: "ease-in-out",
      reset: true,
    };
    ScrollReveal().reveal(".card", { ...config, origin: "bottom", delay: 200 });
    ScrollReveal().reveal(".img-fluid", {
      ...config,
      origin: "right",
      delay: 200,
    });

    // media queries for different screen sizes
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    if (mediaQuery.matches) {
      // apply different animation configuration for screens smaller than 768px
      ScrollReveal().reveal(".card-text", {
        ...config,
        origin: "bottom",
        delay: 200,
      });
    } else {
      // apply different animation configuration for larger screens
      ScrollReveal().reveal(".card-text", {
        ...config,
        origin: "left",
        delay: 200,
      });
    }   }, []);

  return (
    <section id="about">
      <CSSTransition nodeRef={aboutRef} in={true} appear={true} timeout={1000} classNames="fade-up">
        <div className="text-center" ref={aboutRef}>
          <h2 className="title">About VTBIF</h2>
        </div>
      </CSSTransition>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <CSSTransition nodeRef={cardRef} in={true} appear={true} timeout={1000} classNames="fade-up">
              <Card.Body ref={cardRef}>
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                  <Card.Text className="card-text text-left">
                  Amaravathi, Andhra Pradesh's VIT-AP University is home to the VIT-AP Technology Business Incubation Foundation (VTBIF), an incubator. It is now going through the registration process to become a section-8 not-for-profit organisation. VTBIF's main goal is to encourage future faculty members and students to be innovative and entrepreneurial.
                  Many product prototypes are currently being developed and supported at the centre, which provides support for startups that are knowledge- and technology-driven. For incubation and product development operations, the incubation centre offers a dedicated 12,500 square foot facility. At one time, it can accommodate and support more than 50 incubates.
                  The VTBIF has a makerspace, a free-time entertainment area, executive offices, co-working spaces, boardrooms, and dedicated office space. Furthermore, the incubators can make use of the resources set up in the fields of robotics and AI, the Internet of Things (IOT), cybersecurity, and rapid prototyping.

                  </Card.Text>
                </div>
              </Card.Body>
            </CSSTransition>
          </Col>
          <Col md={4}>
            <CSSTransition nodeRef={imageRef} in={true} appear={true} timeout={1000} classNames="fade-up">
              <Image src={"Images/about.jpeg"} fluid className="img-fluid" ref={imageRef} width={300} height={100} />
            </CSSTransition>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
