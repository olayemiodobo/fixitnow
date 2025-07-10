import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Unsplash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 3000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div style={{
      backgroundColor: '#121212',
      color: '#fff',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      animation: 'fadeIn 1s ease-in'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        🛠️ Welcome to <span style={{ color: '#00d1b2' }}>FixItNow</span>
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
        Nigeria’s trusted app for fast, local artisans 🔧⚡
      </p>
    </div>
  );
}

export default Unsplash;
