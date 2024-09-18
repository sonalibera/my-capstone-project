// src/pages/Home.js
import React from 'react';
import './Home.css';  // Link the Home styles

function Home() {
  return (
    <section className="hero-section">
      <h1>Welcome to Our TechHaven</h1>
      <p>Explore our products and services to discover what suits your needs.</p>
      <a href="/services" className="btn">Our Services</a>
    </section>
  );
}

export default Home;
