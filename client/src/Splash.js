import React from 'react';
import { useNavigate } from 'react-router-dom';

function Splash() {
  const navigate = useNavigate();
  const artisanId = localStorage.getItem('loggedInArtisanId');

  const handleArtisanClick = () => {
    // if (artisanId) {
    //   navigate('/artisan/job-requests');
    // } else {
    //   navigate('/artisan-auth'); // Unified login + signup
    // }
  navigate('/artisan-auth');  // always go to login/signup

  };

  const handleContinueAsArtisan = () => {
    navigate('/artisan/job-requests');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      background: '#f4f4f4',
      padding: '1rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', color: '#222' }}>🛠️ FixItNow</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '2rem' }}>
        Get trusted artisans near you — fast.
      </p>

      {/* Customer button */}
      <button
        onClick={() => navigate('/ArtisanList')}
        style={{
          padding: '0.8rem 1.5rem',
          fontSize: '1rem',
          marginBottom: '1rem',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        🔍 Find an Artisan
      </button>

      {/* Artisan Onboarding */}
      <button
        onClick={handleArtisanClick}
        style={{
          padding: '0.8rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '1rem'
        }}
      >
        🧑🏾‍🔧 Become an Artisan
      </button>

      {/* Only show if artisan is logged in */}
      {artisanId && (
        <button
          onClick={handleContinueAsArtisan}
          style={{
            padding: '0.8rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#ffc107',
            color: '#333',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          🔁 Continue as Artisan #{artisanId}
        </button>
      )}
    </div>
  );
}

export default Splash;
