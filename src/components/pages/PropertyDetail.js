import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../assets/css/PropertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sample properties data - in a real app, this would come from an API
  const properties = [
    {
      id: '1',
      title: 'Luxury Villa with Ocean View',
      price: '$2,500,000',
      location: 'Malibu, CA',
      type: 'Residential',
      status: 'For Sale',
      beds: 5,
      baths: 4,
      sqft: 4200,
      yearBuilt: 2018,
      lotSize: '0.75 acres',
      garage: '3 Cars',
      description: 'This stunning oceanfront villa offers panoramic views of the Pacific Ocean. Featuring an open floor plan with high ceilings, the home seamlessly blends indoor and outdoor living. The gourmet kitchen includes top-of-the-line appliances, custom cabinetry, and a large center island. The primary suite boasts a private balcony, spa-like bathroom, and walk-in closet. Additional amenities include a home theater, wine cellar, infinity pool, and private beach access.',
      features: [
        'Oceanfront Property',
        'Infinity Pool',
        'Home Theater',
        'Wine Cellar',
        'Smart Home Technology',
        'Gourmet Kitchen',
        'Private Beach Access',
        'Outdoor Kitchen',
        'Fire Pit',
        'Spa/Hot Tub'
      ],
      images: [
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
      ],
      agent: {
        name: 'Sarah Williams',
        phone: '(555) 123-4567',
        email: 'sarah@imperialrealty.com',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    },
    {
      id: '2',
      title: 'Modern Downtown Penthouse',
      price: '$1,750,000',
      location: 'New York, NY',
      type: 'Residential',
      status: 'For Sale',
      beds: 3,
      baths: 3.5,
      sqft: 2800,
      yearBuilt: 2020,
      lotSize: 'N/A',
      garage: '2 Cars',
      description: 'Luxurious penthouse in the heart of Manhattan with floor-to-ceiling windows offering breathtaking city views. This modern residence features an open concept living area, chef\'s kitchen with premium appliances, and a spacious primary suite with a custom walk-in closet. The building offers 24/7 concierge service, a state-of-the-art fitness center, and a rooftop terrace with panoramic views of the city skyline.',
      features: [
        'Floor-to-Ceiling Windows',
        'Private Terrace',
        'Chef\'s Kitchen',
        '24/7 Concierge',
        'Fitness Center',
        'Rooftop Lounge',
        'Smart Home Technology',
        'Wine Storage',
        'Pet Spa',
        'Electric Car Charging Station'
      ],
      images: [
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
      ],
      agent: {
        name: 'Michael Chen',
        phone: '(555) 987-6543',
        email: 'michael@imperialrealty.com',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    }
  ];

  useEffect(() => {
    // Simulate API call to fetch property details
    const fetchProperty = () => {
      setLoading(true);
      setTimeout(() => {
        const foundProperty = properties.find(p => p.id === id);
        setProperty(foundProperty || null);
        setLoading(false);
      }, 500);
    };

    fetchProperty();
  }, [id, properties]);

  if (loading) {
    return (
      <div className="property-detail-page">
        <div className="container">
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading property details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="property-detail-page">
        <div className="container">
          <div className="property-not-found">
            <h2>Property Not Found</h2>
            <p>The property you are looking for does not exist or has been removed.</p>
            <Link to="/properties" className="btn btn-primary">Back to Properties</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="property-detail-page">
      {/* Property Images Gallery */}
      <div className="property-gallery">
        <div className="main-image">
          <img src={property.images[0]} alt={property.title} />
        </div>
        <div className="thumbnail-images">
          {property.images.slice(1).map((image, index) => (
            <div className="thumbnail" key={index}>
              <img src={image} alt={`${property.title} - ${index + 2}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="property-content">
          {/* Property Header */}
          <div className="property-header">
            <div className="property-title">
              <h1>{property.title}</h1>
              <p className="property-location"><i className="fas fa-map-marker-alt"></i> {property.location}</p>
            </div>
            <div className="property-price">
              <h2>{property.price}</h2>
              <span className="property-status">{property.status}</span>
            </div>
          </div>

          <div className="property-details-container">
            {/* Main Property Details */}
            <div className="main-details">
              {/* Overview */}
              <section className="property-section">
                <h3>Overview</h3>
                <div className="property-features-grid">
                  {property.beds && (
                    <div className="feature-item">
                      <i className="fas fa-bed"></i>
                      <span>{property.beds} Bedrooms</span>
                    </div>
                  )}
                  {property.baths && (
                    <div className="feature-item">
                      <i className="fas fa-bath"></i>
                      <span>{property.baths} Bathrooms</span>
                    </div>
                  )}
                  <div className="feature-item">
                    <i className="fas fa-ruler-combined"></i>
                    <span>{property.sqft} Sq Ft</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-calendar-alt"></i>
                    <span>Built in {property.yearBuilt}</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-expand"></i>
                    <span>Lot Size: {property.lotSize}</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-car"></i>
                    <span>Garage: {property.garage}</span>
                  </div>
                </div>
              </section>

              {/* Description */}
              <section className="property-section">
                <h3>Description</h3>
                <p>{property.description}</p>
              </section>

              {/* Features */}
              <section className="property-section">
                <h3>Features & Amenities</h3>
                <ul className="features-list">
                  {property.features.map((feature, index) => (
                    <li key={index}><i className="fas fa-check"></i> {feature}</li>
                  ))}
                </ul>
              </section>

              {/* Map */}
              <section className="property-section">
                <h3>Location</h3>
                <div className="property-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209796322542!3d34.08346349481622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1629308474264!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Property Location"
                  ></iframe>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="property-sidebar">
              {/* Agent Information */}
              <div className="agent-card">
                <h3>Listed By</h3>
                <div className="agent-info">
                  <div className="agent-image">
                    <img src={property.agent.image} alt={property.agent.name} />
                  </div>
                  <div className="agent-details">
                    <h4>{property.agent.name}</h4>
                    <p><i className="fas fa-phone"></i> {property.agent.phone}</p>
                    <p><i className="fas fa-envelope"></i> {property.agent.email}</p>
                  </div>
                </div>
                <div className="agent-contact">
                  <button className="btn btn-primary btn-block">Contact Agent</button>
                  <button className="btn btn-outline btn-block">Schedule Viewing</button>
                </div>
              </div>

              {/* Mortgage Calculator */}
              <div className="mortgage-calculator">
                <h3>Mortgage Calculator</h3>
                <div className="calculator-form">
                  <div className="form-group">
                    <label>Home Price</label>
                    <input type="text" value={property.price} readOnly />
                  </div>
                  <div className="form-group">
                    <label>Down Payment (20%)</label>
                    <input type="text" placeholder="$500,000" />
                  </div>
                  <div className="form-group">
                    <label>Loan Term</label>
                    <select>
                      <option>30 Years</option>
                      <option>15 Years</option>
                      <option>10 Years</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Interest Rate</label>
                    <input type="text" placeholder="3.5%" />
                  </div>
                  <button className="btn btn-primary btn-block">Calculate</button>
                </div>
                <div className="calculator-result">
                  <p>Estimated Monthly Payment:</p>
                  <h4>$9,850/month</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Properties */}
          <section className="similar-properties">
            <h3>Similar Properties</h3>
            <div className="properties-grid">
              {properties.filter(p => p.id !== property.id).map(p => (
                <div className="property-card" key={p.id}>
                  <div className="property-image">
                    <img src={p.images[0]} alt={p.title} />
                    <div className="property-price">{p.price}</div>
                    <div className="property-status">{p.status}</div>
                  </div>
                  <div className="property-details">
                    <h3>{p.title}</h3>
                    <p className="property-location"><i className="fas fa-map-marker-alt"></i> {p.location}</p>
                    <div className="property-features">
                      {p.beds && <span><i className="fas fa-bed"></i> {p.beds} Beds</span>}
                      {p.baths && <span><i className="fas fa-bath"></i> {p.baths} Baths</span>}
                      <span><i className="fas fa-ruler-combined"></i> {p.sqft} Sq Ft</span>
                    </div>
                    <Link to={`/properties/${p.id}`} className="view-details">View Details</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;