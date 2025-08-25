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

         <section className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Join thousands of satisfied customers who trust us with their e-waste disposal
          </p>
          
          <div className="testimonials-grid">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
              </div>
              <p className="testimonial-text">
                "Excellent service! They picked up my old laptops and phones right from my doorstep. 
                The team was professional and assured me about data security. Highly recommended!"
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">Priya Sharma</h4>
                  <p className="author-title">Software Engineer, Mumbai</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
              </div>
              <p className="testimonial-text">
                "I had 15 old computers from my office. Their bulk collection service was amazing! 
                They handled everything professionally and provided proper certificates for disposal."
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">Rajesh Kumar</h4>
                  <p className="author-title">Business Owner, Delhi</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
              </div>
              <p className="testimonial-text">
                "Great environmental initiative! I feel good knowing my old electronics are being 
                recycled responsibly. The process was simple and completely free!"
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">Anjali Patel</h4>
                  <p className="author-title">Teacher, Bangalore</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
              </div>
              <p className="testimonial-text">
                "Scheduling was so easy through their website. The pickup team arrived on time and 
                handled my old TV and printer with care. Truly professional service!"
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">Vikram Singh</h4>
                  <p className="author-title">Marketing Manager, Pune</p>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="testimonial-card">
              <div className="testimonial-rating">
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
              </div>
              <p className="testimonial-text">
                "I was worried about data on my old hard drives. Their secure data destruction service 
                gave me peace of mind. Plus, they explained the entire recycling process!"
              </p>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">Meera Reddy</h4>
                  <p className="author-title">Healthcare Professional, Chennai</p>
                </div>
              </div>
            </div>

            {/* Testimonial 6 - NEW */}
            <div className="testimonial-card">
            <div className="testimonial-rating">
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
                <span className="star">⭐</span>
            </div>
            <p className="testimonial-text">
                "As a college student, I had old gaming laptops and phones piling up in my hostel room. 
                Their free pickup service was perfect for students like me. They even gave me a certificate 
                showing how much e-waste was properly recycled!"
            </p>
            <div className="testimonial-author">
                <div className="author-info">
                <h4 className="author-name">Arjun Mishra</h4>
                <p className="author-title">Engineering Student, Hyderabad</p>
                </div>
            </div>
            </div>


          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="trust-item">
              <h3>5.0⭐</h3>
              <p>Average Rating</p>
            </div>
            <div className="trust-item">
              <h3>2000+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="trust-item">
              <h3>100%</h3>
              <p>Data Security</p>
            </div>
            <div className="trust-item">
              <h3>99%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};



export default Homepage;
