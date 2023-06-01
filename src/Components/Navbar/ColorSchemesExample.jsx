import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import ApplyButton from './ApplyButton';
import './Color.css';

function ColorSchemesExample() {
  const handleNavItemClick = () => {
    // Logic for handling navigation item click, if needed
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top" className="fixed-top">
      <Container>
        <Navbar.Brand href="#">
          <img src="./Images/logo_new.png" height="40" alt="VTech" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={handleNavItemClick}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={handleNavItemClick}
              >
                About
              </Link>
            </Nav.Link>
            <Nav.Link href="startup">Startup</Nav.Link>
            <Nav.Link>
              <Link
                to="gallery"
                smooth={true}
                duration={500}
                onClick={handleNavItemClick}
              >
                Gallery
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={handleNavItemClick}
              >
                Contact
              </Link>
            </Nav.Link>
            <ApplyButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
