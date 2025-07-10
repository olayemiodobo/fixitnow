import React from 'react';
import { useNavigate } from 'react-router-dom';

function ArtisanLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInArtisanId');
    alert("👋 You’ve been logged out.");
    navigate('/splash');
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginBottom: '1rem'
      }}
    >
      🚪 Logout
    </button>
  );
}

export default ArtisanLogout;
