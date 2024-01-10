import React from 'react';
import './Button.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';


function ButtonToMyWellbeing() {
  const navigate = useNavigate();
  const navigateToMyWellbeing = () => {
    // Handle button click logic here
    navigate('/MyWellbeing');
  };

  return (
    <button className="custom-button" onClick={navigateToMyWellbeing}>
    <div className="custom-text">See more</div>
    </button>
  );
}

export default ButtonToMyWellbeing;