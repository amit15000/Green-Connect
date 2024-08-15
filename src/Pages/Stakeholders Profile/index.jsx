import React from 'react';
import './index.css';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

function Profile() {
  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted!');
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <div className="header">
        <div className="title">
          <h1>Stakeholder's Profile</h1>
        </div>
        <div className="nav">
          <a href="#">Home/</a>
          <a href="#">ALL/</a>
          <a href="#">Plant Trees for Impact</a>
        </div>
      </div>
      <div className="content">
        <div className="profile-card">
          <div className="profile-image">
            <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="John Doe"/>
            <p>JHON DOE</p>
          </div>
          <div className="profile-info">
            <div className="profile-details">
              <h2>Stakeholder Profile</h2>
              <h3>Green Earth Foundation</h3>
              <p>Organization Name: Green Earth Foundation</p>
              <p>Contact Information:</p>
              <p>Email: contact@greenearth.org</p>
              <p>Phone: +91-XXXXXXXXXX</p>
              <p>Mission/Bio:</p>
              <p>To promote sustainable development through large-scale afforestation projects and community engagement. The foundation focuses on increasing green cover and addressing climate change through various environmental initiatives.</p>
              <p>Projects Involved:</p>
              <ul>
                <li>Bharat Nirman Programme</li>
                <li>Green India Mission</li>
              </ul>
              <p>Contact | Learn More</p>
            </div>
            <div className="profile-actions">
              <button onClick={handleSubmit}>Submit</button>
              <button>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Profile;



