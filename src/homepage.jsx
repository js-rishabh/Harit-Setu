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

      {/* how it works*/}
       <section className="how-it-works-section">
        <div className="how-it-works-container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Simple, secure, and responsible e-waste disposal in just 3 easy steps
          </p>
          
          <div className="steps-container">
            {/* Step 1 */}
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon">📅</div>
              <h3 className="step-title">Schedule or Find</h3>
              <p className="step-description">
                Book a convenient pickup time or locate your nearest drop-off center. 
                Choose what works best for your schedule and location.
              </p>
              <div className="step-features">
                <span className="feature-tag">Free Pickup</span>
                <span className="feature-tag">Multiple Locations</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon">🚛</div>
              <h3 className="step-title">We Collect</h3>
              <p className="step-description">
                Our trained team handles all the heavy lifting. We safely collect your 
                electronic items with proper handling and transportation protocols.
              </p>
              <div className="step-features">
                <span className="feature-tag">Professional Team</span>
                <span className="feature-tag">Safe Handling</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon">♻️</div>
              <h3 className="step-title">Recycle Responsibly</h3>
              <p className="step-description">
                Your items are processed using eco-friendly methods. Data is securely 
                destroyed, and materials are recovered for reuse in new products.
              </p>
              <div className="step-features">
                <span className="feature-tag">Data Security</span>
                <span className="feature-tag">Eco-Friendly</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="how-it-works-cta">
            <button className="cta-button primary large">Get Started Today</button>
            <p className="cta-note">Join thousands who trust us with their e-waste disposal</p>
          </div>
        </div>
      </section>
    </div>
  );
};



export default Homepage;
