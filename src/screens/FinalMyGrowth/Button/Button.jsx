import React from 'react';
import './Button.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';


function Button() {
  const navigate = useNavigate();
  const navigateToAppreciation = () => {
    // Handle button click logic here
    navigate('/Appreciation');
  };

  return (
    <button className="custom-button" onClick={navigateToAppreciation}>
    <div className="custom-text">See more</div>
    </button>
  );
}

export default Button;
