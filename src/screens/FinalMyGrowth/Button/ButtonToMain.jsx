import React from 'react';
import { useNavigate } from 'react-router-dom';


function ButtonToMain() {
  const navigate = useNavigate();
  const navigateToMain = () => {
    // Handle button click logic here
    navigate('/');
  };

  return (
    <button className="custom-button" onClick={navigateToMain}>
    <div >
    <img className="vector-2" alt="Vector" src="https://c.animaapp.com/Rm7LACSI/img/vector.svg" />
    </div>
    </button>
  );
}

export default ButtonToMain;
