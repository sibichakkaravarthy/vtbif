import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import ColorSchemesExample from './Components/Navbar/ColorSchemesExample.jsx';
import ControlledCarousel from './Components/Carousel/ControlledCarousel.jsx';
import Cards from './Components/Cards/Card.jsx';
import About from './Components/about/About.jsx';
import Gallery from './Components/Carousel/Gallery.jsx';
import FAQ from './Components/Cards/Faq.jsx';
import Team from './Components/Carousel/Team.jsx';
import Contact from './Components/about/contact.jsx';
import Footer from './Components/about/footer.jsx';

import './App.css';

function App() {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <ColorSchemesExample />
      <ControlledCarousel />
      <Cards />
      <About />
      <Gallery />
      <Team />
      <Contact />
      <FAQ />
      <Footer />

      {showModal && (
        <>
          <div className="modal-overlay" onClick={handleCloseModal} />
          <div className="modal-wrapper">
            <Modal show={showModal} onHide={handleCloseModal} dialogClassName="custom-modal">
              <Modal.Header closeButton>
                <Modal.Title>Welcome to <span>VTBIF</span></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>If you have a startup idea you'd like to share, please fill out our Google Form below. We're excited to hear about your innovative concepts!</p>
                <p>Click the <span>"Apply "</span> button to fill out the Google Form and submit your startup idea.</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
