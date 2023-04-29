import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <img
              src="Images/icon.png"
              alt="Logo"
              width="100%"
              height="auto"
              className="d-inline-block align-text-top"
            />
          </div>
          <div className="col-md-6 mb-3">
            <h5>Contact Us</h5>
            <p>
              If you have any questions or suggestions, feel free to get in touch with us!
            </p>
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-envelope-o me-3"></i>director.iiec@vitap.ac.in
              </li>
              <li>
                <i className="fa fa-phone me-3"></i>123-456-7890
              </li>
              <li>
                <i className="fa fa-map-marker me-3"></i>VIT-AP UNIVERSITY,AMARAVATHI
              </li>
            </ul>
          </div>
        </div>
        <hr className="text-muted" />
        <div className="text-center">
          <p className="text-muted mb-0">
            © {currentYear} Developed by Balaji.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
