import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/About.css';

const About = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'John Anderson',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'With over 20 years of experience in luxury real estate, John founded Imperial Realty with a vision to provide exceptional service and unparalleled expertise.'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      position: 'Chief Operating Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Sarah brings 15 years of operational excellence to Imperial Realty, ensuring that every client experience exceeds expectations.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Head of Sales',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Michael leads our sales team with a strategic approach and deep market knowledge, consistently achieving record-breaking results for our clients.'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      position: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Emily crafts innovative marketing strategies that showcase our properties to their fullest potential, leveraging the latest digital technologies.'
    }
  ];

  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>About Imperial Realty</h1>
          <p>Your trusted partner in luxury real estate since 2005</p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>Founded in 2005, Imperial Realty has established itself as a leader in the luxury real estate market. What began as a small team of passionate real estate professionals has grown into a full-service agency with a reputation for excellence and integrity.</p>
              <p>Our journey has been defined by our unwavering commitment to our clients, our deep understanding of the market, and our ability to adapt to changing trends and technologies. We believe that finding the perfect property is about more than just square footage and amenities—it's about finding a place where memories will be made and dreams will be realized.</p>
              <p>Today, Imperial Realty continues to set the standard for luxury real estate services, combining traditional values with innovative approaches to meet the unique needs of each client.</p>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Imperial Realty Office" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="our-mission">
        <div className="container">
          <div className="mission-content">
            <div className="mission-image">
              <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Imperial Realty Mission" />
            </div>
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>At Imperial Realty, our mission is to provide exceptional real estate services that exceed our clients' expectations. We are committed to:</p>
              <ul>
                <li>Delivering personalized service tailored to each client's unique needs</li>
                <li>Maintaining the highest standards of integrity and professionalism</li>
                <li>Leveraging our market expertise to achieve optimal results</li>
                <li>Embracing innovation to enhance the client experience</li>
                <li>Building lasting relationships based on trust and mutual respect</li>
              </ul>
              <p>We believe that every client deserves our full attention, expertise, and dedication, whether they are buying their first home or investing in a multi-million dollar property.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="our-team">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Leadership Team</h2>
            <p>The experienced professionals behind Imperial Realty's success</p>
          </div>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div className="team-member" key={member.id}>
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-social">
                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                    <a href="#" aria-label="Email"><i className="fas fa-envelope"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Imperial Realty</h2>
            <p>What sets us apart in the competitive real estate market</p>
          </div>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-trophy"></i>
              </div>
              <h3>Proven Track Record</h3>
              <p>With over $2 billion in successful transactions, our results speak for themselves.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Client-Centered Approach</h3>
              <p>We prioritize your needs and goals, providing personalized service every step of the way.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Market Expertise</h3>
              <p>Our in-depth knowledge of local markets ensures you make informed real estate decisions.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Global Network</h3>
              <p>Our extensive network connects you to opportunities and buyers worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Work With Us?</h2>
            <p>Contact our team today to discuss your real estate needs and discover the Imperial Realty difference.</p>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;