import React, { useState } from 'react';
import './faq.css'; // Import the CSS file for styling

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <section id="faq" className="faq">
      <h3 className="heading">FAQ</h3>
      <div className="row">
        <div className="image">
          <img src="Images/FAQ.png" alt="" />
        </div>
        <div className="accordion-container">
          <div className="accordion">
            <div
              className={`accordion-header ${
                activeAccordion === 0 ? 'active' : ''
              }`}
              onClick={() => handleAccordionClick(0)}
            >
              <span>{activeAccordion === 0 ? '-' : '+'}</span>
              <h3>What is VTBIF?</h3>
            </div>
            <div
              className={`accordion-body ${
                activeAccordion === 0 ? 'active' : ''
              }`}
            >
              <p>
              VTBIF is an incubator at VIT-AP University in Amaravathi, Andhra Pradesh, supporting knowledge- and technology-driven startups. It provides resources, mentoring, and a dedicated facility for incubation, aiming to foster innovation, entrepreneurship, and economic growth.
              </p>
            </div>
          </div>
          <div className="accordion">
            <div
              className={`accordion-header ${
                activeAccordion === 1 ? 'active' : ''
              }`}
              onClick={() => handleAccordionClick(1)}
            >
              <span>{activeAccordion === 1 ? '-' : '+'}</span>
              <h3>Does VTBIF offer funding support for startups?</h3>
            </div>
            <div
              className={`accordion-body ${
                activeAccordion === 1 ? 'active' : ''
              }`}
            >
              <p>
              Yes, VTBIF provides funding support for startups. They offer financial assistance and investment opportunities to eligible startups as part of their incubation and support services.
              </p>
            </div>
          </div>
          <div className="accordion">
            <div
              className={`accordion-header ${
                activeAccordion === 2 ? 'active' : ''
              }`}
              onClick={() => handleAccordionClick(2)}
            >
              <span>{activeAccordion === 2 ? '-' : '+'}</span>
              <h3>How to submit the startup idea form for VTBIF?</h3>
            </div>
            <div
              className={`accordion-body ${
                activeAccordion === 2 ? 'active' : ''
              }`}
            >
              <p>
              To submit your startup idea to VTBIF, visit their website, complete the form with relevant details and supporting documents, and submit it for review according to their guidelines.
              </p>
            </div>
          </div>
          {/* ... Other accordion items ... */}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
