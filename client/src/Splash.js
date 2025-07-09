import React from 'react';
import { useNavigate } from 'react-router-dom';

function Splash() {
  const navigate = useNavigate();

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

      <button
        onClick={() => navigate('/')}
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

      <button
        onClick={() => navigate('/artisan/job-requests')}
        style={{
          padding: '0.8rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        🧑🏾‍🔧 Become an Artisan
      </button>
    </div>
  );
}

export default Splash;
