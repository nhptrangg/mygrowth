import React from 'react';
import './Button.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';


function ButtonToBadges() {
  const navigate = useNavigate();
  const navigateToBadges = () => {
    // Handle button click logic here
    navigate('/BadgesAndAchievements');
  };

  return (
    <button className="custom-button" onClick={navigateToBadges}>
    <div className="custom-text">See more</div>
    </button>
  );
}

export default ButtonToBadges;
