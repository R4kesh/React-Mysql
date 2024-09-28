import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form');
  };

  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
      <button onClick={handleClick}>Go to Form</button>
    </div>
  );
};

export default LandingPage;