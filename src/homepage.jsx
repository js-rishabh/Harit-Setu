import React from 'react';
import Header from './header';
import './homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your <span className="highlight">E-Waste</span> Into a Cleaner Future
          </h1>
          <p className="hero-description">
            Join us in responsible electronic waste management. 
            Schedule pickups, find recycling centers, and make a positive impact on the environment.
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary">Schedule Pickup</button>
            <button className="cta-button secondary">Learn More</button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Devices Recycled</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Collection Centers</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
