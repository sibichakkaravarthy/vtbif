import './card.css';
import React from 'react';
import ScrollReveal from 'scrollreveal';

function Card() {
  const config = {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 300,
    easing: 'ease',
    reset: true
  };
  
  React.useEffect(() => {
    ScrollReveal().reveal('.card', config);
  }, []);

  return (
    <>
    <section id="home">
      <br/>
      <br/>
      <br/>
      <div className="container">
        <h1>
          <span className="word jump">V</span>TBIF
        </h1>
        <div className="card">
          <div className="card-block">
            <h4>Vision</h4>
            <p>
              A nurturing platform that supports new age tech entrepreneurs to
              transform their innovative ideas to successful business ventures
              and improve economic prospects of our nation
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-block">
            <h4>Mission</h4>
            <p>
              Promote entrepreneurship among students and faculty members
              through training, mentoring, networking, funding and incubation
              services Develop pioneering products and business solutions that
              address the need of society Provide a boost to technology-based
              entrepreneurship for self-reliance Produce job creators and
              economic stimulators
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Card;
