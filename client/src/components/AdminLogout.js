import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    alert("ADMIN IS LOGGED OUT.");
    navigate('/admin-login');
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        float: 'right',
        marginBottom: '1rem',
        padding: '0.4rem 0.8rem',
        backgroundColor: '#bb0000',
        color: '#FEFEFE',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Logout Admin
    </button>
  );
}

export default AdminLogout;
