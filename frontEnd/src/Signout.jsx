import React from 'react';
import { useNavigate } from 'react-router-dom';

function Signout() {
  const navigate = useNavigate();

  const handleSignout = () => {
    // Perform signout logic here (e.g., clear authentication tokens)
    // For demonstration purposes, let's assume it's just redirecting to the home page
    navigate('/');
  };

  return (
    <div>
      <h2>Sign Out Page</h2>
      <p>Are you sure you want to Sign out?</p>
      <button onClick={handleSignout} className='btn btn-warning'>Sign Out</button>
    </div>
  );
}

export default Signout;
