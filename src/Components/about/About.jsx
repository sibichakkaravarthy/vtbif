import React, { useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import assets from "../assest/idea.jpg";
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
                  VIT-AP Technology Entrepreneurship Centre (VTEC) is the
                    incubation centre located within VIT-AP University,
                    Amaravathi, AP. VTEC is under the process of section-8 Not
                    for Profit Company registration. At VTEC, we believe that
                    entrepreneurship is the key to unlocking innovation and
                    driving progress. VTEC assists potential faculty and
                    students in their technology-based and knowledge-driven
                    startups, and currently, many product prototypes are
                    supported at the centre. VTEC has a dedicated space of
                    12,500 sq. ft for incubation and product development
                    activity. The centre can support and host up to 50+
                    incubates. It comprises dedicated office space, co-working
                    space, executive office space, board meeting room,
                    makerspace, and free-time recreation zone. Additionally, the
                    in the areas of AI and Robotics, Internet of Things (IOT),
                    registered incubatees can utilize COE facilities established
                    Cybersecurity, and Rapid Prototyping.
                  </Card.Text>
                </div>
              </Card.Body>
            </CSSTransition>
          </Col>
          <Col md={4}>
            <CSSTransition nodeRef={imageRef} in={true} appear={true} timeout={1000} classNames="fade-up">
              <Image src={assets} fluid className="img-fluid" ref={imageRef} />
            </CSSTransition>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
