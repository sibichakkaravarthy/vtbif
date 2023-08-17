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
    <>
    <section id="about">
    <br />
    <br />
    
      <CSSTransition nodeRef={aboutRef} in={true} appear={true} timeout={1000} classNames="fade-up">
        <div className="text-center" ref={aboutRef}>
          <h2 className="heading">About VTBIF</h2>
        </div>
      </CSSTransition>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <CSSTransition nodeRef={cardRef} in={true} appear={true} timeout={1000} classNames="fade-up">
              <Card.Body ref={cardRef}>
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <Card.Text className="card-text text-left">VITAP University had established Innovation Incubation Entrepreneurship Cell (IIEC), to provide mentorship, 
  training, and resources to help students and faculty turn their innovative ideas into commercial products.VIT-AP Technology Business Incubation Foundation (VTBIF), incubation centre was established in the year 2023. 
  VTBIF is incorporated as a Section-8 Company under the Ministry of Corporate Affairs (MCA). At VTBIF, we believe 
  that entrepreneurship is the key to unlocking innovation and driving progress. VTBIF assists faculty and students in 
  their technology-based and knowledge-driven startups, and currently many product prototypes are supported at the 
  centre.
<br/><br></br>Additionally, the registered incubatees can utilize 
  COE facilities established in the areas of AI and Robotics, Internet of Things (IOT), Cybersecurity, and Rapid 
  Prototyping. Our team of experts and mentors will guide you through the process of starting a business, from the 
  initial idea to securing funding and beyond. We also provide mentorship and training programs to help enhance 
  entrepreneurs' skills and knowledge. Through the V-Launch Scheme, the University supports innovative start-up 
  projects of faculty and students with grants up to Rs. 2 Lakhs in phases.
</Card.Text>

                </div>
              </Card.Body>
            </CSSTransition>
          </Col>
          <Col md={4}>
            <CSSTransition nodeRef={imageRef} in={true} appear={true} timeout={1000} classNames="fade-up">
              <Image src={"Images/logo_new.png"} fluid className="img-fluid" ref={imageRef} width={300} height={100} />
            </CSSTransition>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
}

export default About;
