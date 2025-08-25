import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src="/logo-placeholder.png" alt="EcoWaste Logo" className="logo-img" />
        </div>
        
        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/about" className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact Us</a>
            </li>
            <li className="nav-item">
              <a href="/sign-in" className="nav-link signin-btn">Sign In</a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
