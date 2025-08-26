import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h3>Imperial Realty</h3>
            <p>Your trusted partner in finding the perfect property. We specialize in luxury homes, commercial properties, and investment opportunities.</p>
            <div className="contact">
              <span><i className="fas fa-phone"></i> &nbsp; +1 (555) 123-4567</span>
              <span><i className="fas fa-envelope"></i> &nbsp; info@imperialrealty.com</span>
            </div>
            <div className="socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/properties">Properties</Link></li>
              <li><Link to="/agents">Our Agents</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="footer-section newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for the latest property listings and real estate news.</p>
            <form>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="btn-subscribe">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Imperial Realty. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;