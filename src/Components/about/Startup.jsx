import React from 'react';
import './Startup.css';

const Startup = () => {
  return (
    <div id="startup" className="container">
      <div className="card left-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="Images/digital.svg"
              alt="Startup Logo"
              className="card-img-top"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Digital Fortress</h5>
              <p className="card-text">
                It involves using biometric security software to automatically recognize people based on their behavioral or biological characteristics.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Location: Vtbif VIT-AP, India</li>
              <li className="list-group-item">Founding Year: 2023</li>
              <li className="list-group-item">Industry: Technology</li>
            </ul>
            <div className="card-footer">
              <a href="https://digitalfortress.in/" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="card left-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="Images/lac.jpg"
              alt="Startup Logo"
              className="card-img-top"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Spark Learning</h5>
              <p className="card-text">
              Spark Learning is the concept born from the profound discussion of a few young students who firmly believe in reshaping the way of learning. 
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Location: Vtbif VIT-AP, India</li>
              <li className="list-group-item">Founding Year: 2023</li>
              <li className="list-group-item">Industry: Technology</li>
            </ul>
            <div className="card-footer">
              <a href="/" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="card left-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="Images/loc1.jpg"
              alt="Startup Logo"
              className="card-img-top"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Locaro</h5>
              <p className="card-text">
              A hyperlocal delivery platform that allows you to buy from shops and stores near you! 
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Location: Vtbif VIT-AP, India</li>
              <li className="list-group-item">Founding Year: 2023</li>
              <li className="list-group-item">Industry: Technology</li>
            </ul>
            <div className="card-footer">
              <a href="https://digitalfortress.in/" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="card right-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="Images/steam.jpg"
              alt="Another Startup Logo"
              className="card-img-top"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Packet Lab</h5>
              <p className="card-text">
                The company and location associated with the Home-lab-kit are not provided in the given information.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Location: Vtbif VIT-AP, India</li>
              <li className="list-group-item">Founding Year: 2023</li>
              <li className="list-group-item">Industry: Technology</li>
            </ul>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startup;
