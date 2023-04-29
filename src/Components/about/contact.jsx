import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Contact() {
  useEffect(() => {
    ScrollReveal().reveal(".contact-form", { delay: 200, distance: "50px", origin: "bottom" });
  }, []);

  return (
    <section id="contact" className="text-center">
      <div className="container mt-6 mb-5 ">
        <div className="row justify-content-center">
          <div className="col-md-12 ">
            <div className="section-header  pb-5">
              <h2>Contact Us</h2>
            </div>
          </div>
        </div>
        <div className="row m-0 justify-content-center">
          <div className=" bg-light col-md-8 p-0 pt-4 pb-4 d-flex justify-content-center">
            <form action="#" className="p-4 contact-form">
              <div className="row">
                <div className="col-md-10">
                  <div className="mb-3">
                    <input className="form-control" placeholder="Full Name" required type="text" />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="mb-3">
                    <input className="form-control" placeholder="Email" required type="email" />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="mb-3">
                    <textarea className="form-control" placeholder="Message" required rows="3"></textarea>
                  </div>
                </div>
                <div className="col-md-10">
                <button className="btn btn-warning btn-lg btn-block mt-3 col-md-10" type="button">Send Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
