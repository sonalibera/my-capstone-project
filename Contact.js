// src/pages/Contact.js
import React from 'react';
import './Contact.css';  // Link the Contact styles

function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />
        <label>Email:</label>
        <input type="email" placeholder="Your Email" />
        <label>Message:</label>
        <textarea rows="5" placeholder="Your Message"></textarea>
        <button className="btn">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
