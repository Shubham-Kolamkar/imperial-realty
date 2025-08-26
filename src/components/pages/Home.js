import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Home.css';

const Home = () => {
  // Sample featured properties data
  const featuredProperties = [
    {
      id: 1,
      title: 'Luxury Villa with Ocean View',
      price: '$2,500,000',
      location: 'Malibu, CA',
      beds: 5,
      baths: 4,
      sqft: 4200,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Modern Downtown Penthouse',
      price: '$1,750,000',
      location: 'New York, NY',
      beds: 3,
      baths: 3.5,
      sqft: 2800,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Elegant Country Estate',
      price: '$3,200,000',
      location: 'Aspen, CO',
      beds: 6,
      baths: 5,
      sqft: 5500,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Home</h1>
          <p>Discover luxury properties with Imperial Realty</p>
          <div className="search-bar">
            <input type="text" placeholder="Enter location, property type, or keyword" />
            <button className="search-btn">Search</button>
          </div>
          <div className="hero-buttons">
            <Link to="/properties" className="btn btn-primary">Browse Properties</Link>
            <Link to="/contact" className="btn btn-secondary">Contact an Agent</Link>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="featured-properties">
        <div className="container">
          <div className="section-header">
            <h2>Featured Properties</h2>
            <p>Explore our handpicked selection of premium properties</p>
          </div>
          <div className="property-grid">
            {featuredProperties.map(property => (
              <div className="property-card" key={property.id}>
                <div className="property-image">
                  <img src={property.image} alt={property.title} />
                  <div className="property-price">{property.price}</div>
                </div>
                <div className="property-details">
                  <h3>{property.title}</h3>
                  <p className="property-location"><i className="fas fa-map-marker-alt"></i> {property.location}</p>
                  <div className="property-features">
                    <span><i className="fas fa-bed"></i> {property.beds} Beds</span>
                    <span><i className="fas fa-bath"></i> {property.baths} Baths</span>
                    <span><i className="fas fa-ruler-combined"></i> {property.sqft} Sq Ft</span>
                  </div>
                  <Link to={`/properties/${property.id}`} className="view-details">View Details</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all">
            <Link to="/properties" className="btn btn-outline">View All Properties</Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive real estate solutions tailored to your needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-home"></i>
              </div>
              <h3>Property Sales</h3>
              <p>Find your dream home or sell your property with our expert guidance and market knowledge.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-key"></i>
              </div>
              <h3>Property Management</h3>
              <p>Let us handle the day-to-day operations of your investment properties with our comprehensive management services.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Investment Consulting</h3>
              <p>Make informed real estate investment decisions with our market analysis and investment strategies.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>Commercial Real Estate</h3>
              <p>Specialized services for commercial property transactions, leasing, and development opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Client Testimonials</h2>
            <p>What our satisfied clients have to say about us</p>
          </div>
          <div className="testimonial-slider">
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"Imperial Realty helped me find my dream home in just two weeks! Their knowledge of the market and attention to my specific needs made the process smooth and enjoyable."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <p>Homeowner</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <p>"As a first-time investor, I was nervous about purchasing a rental property. The team at Imperial Realty guided me through every step and helped me find a property that has been an excellent investment."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <p>Property Investor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Find Your Perfect Property?</h2>
            <p>Contact our team of experts today and let us help you navigate the real estate market.</p>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;