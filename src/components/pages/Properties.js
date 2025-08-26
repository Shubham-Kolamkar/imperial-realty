import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Properties.css';

const Properties = () => {
  // Sample properties data
  const allProperties = [
    {
      id: 1,
      title: 'Luxury Villa with Ocean View',
      price: '$2,500,000',
      location: 'Malibu, CA',
      type: 'Residential',
      status: 'For Sale',
      beds: 5,
      baths: 4,
      sqft: 4200,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Stunning oceanfront villa with panoramic views, private beach access, and luxury amenities.'
    },
    {
      id: 2,
      title: 'Modern Downtown Penthouse',
      price: '$1,750,000',
      location: 'New York, NY',
      type: 'Residential',
      status: 'For Sale',
      beds: 3,
      baths: 3.5,
      sqft: 2800,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Luxurious penthouse in the heart of Manhattan with floor-to-ceiling windows and private terrace.'
    },
    {
      id: 3,
      title: 'Elegant Country Estate',
      price: '$3,200,000',
      location: 'Aspen, CO',
      type: 'Residential',
      status: 'For Sale',
      beds: 6,
      baths: 5,
      sqft: 5500,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Magnificent country estate on 10 acres with mountain views, guest house, and private pond.'
    },
    {
      id: 4,
      title: 'Waterfront Luxury Condo',
      price: '$1,200,000',
      location: 'Miami, FL',
      type: 'Residential',
      status: 'For Sale',
      beds: 2,
      baths: 2,
      sqft: 1800,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Modern waterfront condo with stunning bay views, resort-style amenities, and private balcony.'
    },
    {
      id: 5,
      title: 'Historic Brownstone',
      price: '$4,500,000',
      location: 'Boston, MA',
      type: 'Residential',
      status: 'For Sale',
      beds: 4,
      baths: 3.5,
      sqft: 3800,
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Beautifully restored historic brownstone with original details, modern updates, and private garden.'
    },
    {
      id: 6,
      title: 'Prime Commercial Space',
      price: '$3,800,000',
      location: 'Chicago, IL',
      type: 'Commercial',
      status: 'For Sale',
      sqft: 5000,
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Premium commercial property in downtown Chicago with high foot traffic and modern infrastructure.'
    }
  ];

  // State for filters
  const [filters, setFilters] = useState({
    type: 'All',
    status: 'All',
    minPrice: '',
    maxPrice: '',
    beds: 'Any',
    baths: 'Any'
  });

  // Filter properties based on selected filters
  const filteredProperties = allProperties.filter(property => {
    // Filter by type
    if (filters.type !== 'All' && property.type !== filters.type) return false;
    
    // Filter by status
    if (filters.status !== 'All' && property.status !== filters.status) return false;
    
    // Filter by price
    const price = parseInt(property.price.replace(/[^0-9]/g, ''));
    if (filters.minPrice && price < parseInt(filters.minPrice)) return false;
    if (filters.maxPrice && price > parseInt(filters.maxPrice)) return false;
    
    // Filter by beds
    if (filters.beds !== 'Any' && property.beds < parseInt(filters.beds)) return false;
    
    // Filter by baths
    if (filters.baths !== 'Any' && property.baths < parseInt(filters.baths)) return false;
    
    return true;
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  return (
    <div className="properties-page">
      <div className="page-header">
        <div className="container">
          <h1>Properties</h1>
          <p>Explore our exclusive collection of premium properties</p>
        </div>
      </div>

      <div className="container">
        <div className="properties-content">
          {/* Filters Section */}
          <div className="filters-section">
            <h3>Filter Properties</h3>
            <div className="filter-group">
              <label>Property Type</label>
              <select name="type" value={filters.type} onChange={handleFilterChange}>
                <option value="All">All Types</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Status</label>
              <select name="status" value={filters.status} onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="For Sale">For Sale</option>
                <option value="For Rent">For Rent</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Price Range</label>
              <div className="price-inputs">
                <input
                  type="number"
                  name="minPrice"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                />
                <span>to</span>
                <input
                  type="number"
                  name="maxPrice"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                />
              </div>
            </div>

            <div className="filter-group">
              <label>Bedrooms</label>
              <select name="beds" value={filters.beds} onChange={handleFilterChange}>
                <option value="Any">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Bathrooms</label>
              <select name="baths" value={filters.baths} onChange={handleFilterChange}>
                <option value="Any">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>

            <button className="reset-filters" onClick={() => setFilters({
              type: 'All',
              status: 'All',
              minPrice: '',
              maxPrice: '',
              beds: 'Any',
              baths: 'Any'
            })}>Reset Filters</button>
          </div>

          {/* Properties Grid */}
          <div className="properties-results">
            <div className="results-header">
              <p>{filteredProperties.length} properties found</p>
              <select className="sort-select">
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            <div className="properties-grid">
              {filteredProperties.length > 0 ? (
                filteredProperties.map(property => (
                  <div className="property-card" key={property.id}>
                    <div className="property-image">
                      <img src={property.image} alt={property.title} />
                      <div className="property-price">{property.price}</div>
                      <div className="property-status">{property.status}</div>
                    </div>
                    <div className="property-details">
                      <h3>{property.title}</h3>
                      <p className="property-location"><i className="fas fa-map-marker-alt"></i> {property.location}</p>
                      <p className="property-description">{property.description}</p>
                      <div className="property-features">
                        {property.beds && (
                          <span><i className="fas fa-bed"></i> {property.beds} Beds</span>
                        )}
                        {property.baths && (
                          <span><i className="fas fa-bath"></i> {property.baths} Baths</span>
                        )}
                        <span><i className="fas fa-ruler-combined"></i> {property.sqft} Sq Ft</span>
                      </div>
                      <Link to={`/properties/${property.id}`} className="view-details">View Details</Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <p>No properties match your current filters. Please try different criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;