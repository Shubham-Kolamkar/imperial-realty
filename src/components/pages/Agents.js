import React from 'react';
import '../../assets/css/Agents.css';

const Agents = () => {
  // Sample agents data
  const agents = [
    {
      id: 1,
      name: 'Sarah Williams',
      title: 'Senior Real Estate Agent',
      phone: '(555) 123-4567',
      email: 'sarah@imperialrealty.com',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Sarah has over 15 years of experience in luxury real estate. She specializes in high-end residential properties and has consistently been a top producer in the market.',
      specialties: ['Luxury Homes', 'Waterfront Properties', 'Investment Properties'],
      socialMedia: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Commercial Real Estate Specialist',
      phone: '(555) 987-6543',
      email: 'michael@imperialrealty.com',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Michael brings 10 years of commercial real estate expertise to Imperial Realty. His background in finance and business development makes him an invaluable asset for investors and business owners.',
      specialties: ['Commercial Properties', 'Office Spaces', 'Retail Locations'],
      socialMedia: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Jennifer Lopez',
      title: 'Residential Sales Expert',
      phone: '(555) 234-5678',
      email: 'jennifer@imperialrealty.com',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Jennifer has a passion for helping families find their perfect home. With 8 years in residential real estate, she has developed a keen understanding of neighborhood dynamics and market trends.',
      specialties: ['Family Homes', 'First-Time Buyers', 'Suburban Properties'],
      socialMedia: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'David Thompson',
      title: 'Luxury Property Consultant',
      phone: '(555) 345-6789',
      email: 'david@imperialrealty.com',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'David specializes in ultra-luxury properties and has represented some of the most prestigious estates in the country. His clientele includes celebrities, executives, and high-net-worth individuals.',
      specialties: ['Ultra-Luxury Estates', 'Celebrity Homes', 'Private Islands'],
      socialMedia: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 5,
      name: 'Sophia Rodriguez',
      title: 'International Property Specialist',
      phone: '(555) 456-7890',
      email: 'sophia@imperialrealty.com',
      image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Sophia has extensive experience in international real estate transactions. She is multilingual and helps clients navigate the complexities of buying and selling properties across borders.',
      specialties: ['International Properties', 'Vacation Homes', 'Investment Portfolios'],
      socialMedia: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    },
    {
      id: 6,
      name: 'Robert Johnson',
      title: 'New Development Specialist',
      phone: '(555) 567-8901',
      email: 'robert@imperialrealty.com',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Robert specializes in new construction and development projects. His background in architecture and urban planning gives him unique insights into property potential and future value.',
      specialties: ['New Developments', 'Pre-Construction Sales', 'Urban Planning'],
      socialMedia: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        linkedin: '#'
      }
    }
  ];

  return (
    <div className="agents-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Agents</h1>
          <p>Meet our team of experienced real estate professionals</p>
        </div>
      </div>

      <div className="container">
        <div className="agents-intro">
          <h2>Expert Guidance Every Step of the Way</h2>
          <p>
            At Imperial Realty, our agents are more than just real estate professionals – they're trusted advisors dedicated to your success. 
            With deep market knowledge, negotiation expertise, and a commitment to personalized service, our team will guide you through 
            every step of your real estate journey. Whether you're buying, selling, or investing, you can count on our agents to provide 
            the insights and support you need to achieve your goals.
          </p>
        </div>

        <div className="agents-grid">
          {agents.map(agent => (
            <div className="agent-card" key={agent.id}>
              <div className="agent-image rectangular-image" style={{ borderRadius: 0, overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', overflow: 'hidden' }} className="rectangular-image">
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="rectangular-image"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      borderRadius: 0,
                      clipPath: 'none'
                    }} 
                  />
                </div>
                <div className="agent-social">
                  <a href={agent.socialMedia.facebook || "https://facebook.com"} aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                  <a href={agent.socialMedia.twitter || "https://twitter.com"} aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                  <a href={agent.socialMedia.instagram || "https://instagram.com"} aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                  <a href={agent.socialMedia.linkedin || "https://linkedin.com"} aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <div className="agent-info">
                <h3>{agent.name}</h3>
                <p className="agent-title">{agent.title}</p>
                <div className="agent-contact">
                  <p><i className="fas fa-phone"></i> {agent.phone}</p>
                  <p><i className="fas fa-envelope"></i> {agent.email}</p>
                </div>
                <p className="agent-bio">{agent.bio}</p>
                <div className="agent-specialties">
                  <h4>Specialties</h4>
                  <ul>
                    {agent.specialties.map((specialty, index) => (
                      <li key={index}>{specialty}</li>
                    ))}
                  </ul>
                </div>
                <div className="agent-button-container">
                  <button className="btn btn-primary">Contact {agent.name.split(' ')[0]}</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="join-team-section">
          <div className="join-team-content">
            <h2>Join Our Team</h2>
            <p>
              Are you a passionate real estate professional looking to take your career to the next level? 
              Imperial Realty offers industry-leading support, cutting-edge technology, and a collaborative 
              culture that helps our agents thrive. Discover the difference of working with a company that 
              invests in your success.
            </p>
            <button className="btn btn-primary">Learn About Careers</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;