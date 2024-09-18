// src/pages/Services.js
import React, { useState } from 'react';
import './Services.css';

function Services() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (index) => {
    setActiveModal(index);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">

        {/* Service 1 */}
        <div className="service-item">
          <i className="fas fa-cogs service-icon"></i>
          <h3>Product Design</h3>
          <p>We offer end-to-end product design services that ensure top-notch user experience and functionality.</p>
          <button className="service-link" onClick={() => openModal(1)}>Learn More</button>
        </div>

        {/* Service 2 */}
        <div className="service-item">
          <i className="fas fa-laptop-code service-icon"></i>
          <h3>Software Development</h3>
          <p>Our expert developers build scalable and secure software solutions tailored to your business needs.</p>
          <button className="service-link" onClick={() => openModal(2)}>Learn More</button>
        </div>

        {/* Service 3 */}
        <div className="service-item">
          <i className="fas fa-chart-line service-icon"></i>
          <h3>Business Consulting</h3>
          <p>We provide in-depth business consulting services to help you scale and optimize your business processes.</p>
          <button className="service-link" onClick={() => openModal(3)}>Learn More</button>
        </div>

        {/* Service 4 */}
        <div className="service-item">
          <i className="fas fa-cloud service-icon"></i>
          <h3>Cloud Solutions</h3>
          <p>Our cloud-based solutions help businesses store, manage, and access data securely and efficiently.</p>
          <button className="service-link" onClick={() => openModal(4)}>Learn More</button>
        </div>

        {/* Service 5 */}
        <div className="service-item">
          <i className="fas fa-mobile-alt service-icon"></i>
          <h3>Mobile App Development</h3>
          <p>We specialize in creating high-performance mobile apps for both Android and iOS platforms.</p>
          <button className="service-link" onClick={() => openModal(5)}>Learn More</button>
        </div>

        {/* Service 6 */}
        <div className="service-item">
          <i className="fas fa-shield-alt service-icon"></i>
          <h3>Cybersecurity</h3>
          <p>Our cybersecurity services safeguard your business from potential threats and vulnerabilities.</p>
          <button className="service-link" onClick={() => openModal(6)}>Learn More</button>
        </div>

      </div>

      {/* Modals */}
      {activeModal === 1 && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>Product Design</h3>
            <p>Our product design team works closely with clients to create innovative, user-friendly products that meet market demands. From wireframes to prototyping, we ensure each design phase aligns with your vision.</p>
          </div>
        </div>
      )}
      {activeModal === 2 && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>Software Development</h3>
            <p>Our development team builds scalable and secure solutions using the latest technologies like React, Node.js, and cloud platforms. We customize each project to fit your specific business requirements.</p>
          </div>
        </div>
      )}
      {activeModal === 3 && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>Business Consulting</h3>
            <p>We offer detailed business strategies and consulting services that help you streamline operations and improve productivity, allowing you to focus on growth and innovation.</p>
          </div>
        </div>
      )}
      {activeModal === 4 && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>Cloud Solutions</h3>
            <p>Our cloud services allow businesses to scale quickly, secure their data, and operate efficiently with minimal downtime. We integrate your systems into AWS, Azure, and other leading cloud providers.</p>
          </div>
        </div>
      )}
      {activeModal === 5 && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>Mobile App Development</h3>
            <p>We develop mobile apps that are fast, reliable, and feature-rich. Our apps are available on both Android and iOS, designed to provide the best user experience.</p>
          </div>
        </div>
      )}
      {activeModal === 6 && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>Cybersecurity</h3>
            <p>Our cybersecurity services protect your digital assets from cyber threats. We implement firewalls, encryption, and multi-factor authentication to keep your data safe.</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
