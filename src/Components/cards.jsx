import React from 'react';
import './styles/Card.css'; 

const Card = ({ heading, profileImage, name, bio }) => {
  return (
    <div className="card">
      <div className="card-heading">
        {heading}
      </div>
      <div className="card-content">
        <div className="card-left">
          <img src={profileImage} alt={`${name}'s profile`} className="profile-image" />
          <a href="/profile" className="choose-button">Choose</a>
        </div>
        <div className="card-right">
          <h2 className="card-name">{name}</h2>
          <div className="card-bio" dangerouslySetInnerHTML={{ __html: bio }} />
        </div>
      </div>
    </div>
  );
};

export default Card;



