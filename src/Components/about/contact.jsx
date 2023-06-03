import React from 'react';
import './Contact.css'; 

const ContactForm = () => {
  return (
    <>
    <section id="contact" className="contact">
      <br/>
      <br/>
      <br/>
      <h2 className="heading">Contact Us</h2>
      <div className="row">
        <div className="image">
          <img src="Images/contact.png" alt="" />
        </div>
        <div className="form-container">
          <form id="form" action="" method="post" >
            <div className="inputBox">
              <input name="name" type="text" placeholder="First Name" required />
              <input name="lastName" type="text" placeholder="Last Name" required />
            </div>
            <input name="email" type="email" placeholder="Email" required />
            <textarea name="message" cols="30" rows="10" placeholder="Message" required />
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactForm;
