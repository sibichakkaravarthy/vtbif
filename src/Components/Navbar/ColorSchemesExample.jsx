import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ApplyButton from './ApplyButton';
import './Color.css'
import Logo from '../assest/logo.jpg';
function ColorSchemesExample() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="fixed-top">
      <Container>
      <Navbar.Brand href="#">
          <img src={Logo} alt="" className='log-1 navbar-logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link href="/#home">Home</Nav.Link>
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/startup">Startup</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>
            <Nav.Link href="/event">Events</Nav.Link>
            <Nav.Link href="/#gallery">Gallery</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
            <ApplyButton/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;