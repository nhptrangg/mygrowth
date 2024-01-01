import React from 'react';
import './Button.css'; // Import the CSS file


function Button() {
  const handleClick = () => {
    // Handle button click logic here
    console.log('Button clicked!');
  };

  return (
    <button className="custom-button" onClick={handleClick}>
    <div className="custom-text">See more</div>
    </button>
  );
}

export default Button;
