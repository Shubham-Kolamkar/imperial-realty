import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../assets/css/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <h1>Imperial Realty</h1>
              <p>Your Luxury Real Estate Partner</p>
            </Link>
          </div>
          
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
          <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li className={location.pathname === '/' ? 'active' : ''}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li className={location.pathname.includes('/properties') ? 'active' : ''}>
                <Link to="/properties" onClick={() => setMenuOpen(false)}>Properties</Link>
              </li>
              <li className={location.pathname === '/agents' ? 'active' : ''}>
                <Link to="/agents" onClick={() => setMenuOpen(false)}>Our Agents</Link>
              </li>
              <li className={location.pathname === '/about' ? 'active' : ''}>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
              </li>
              <li className={location.pathname === '/contact' ? 'active' : ''}>
                <Link to="/contact" className={!isMobile ? "contact-btn" : ""} onClick={() => setMenuOpen(false)}>Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;