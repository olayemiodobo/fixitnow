import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();
  if (username === 'Olayemi' && password === 'olayemi2000') {
    localStorage.setItem('adminLoggedIn', 'true');
    navigate('/admin');
    window.location.reload(); // Let me try to force React to check the new value
  } else {
    alert('❌ INVALID ADMIN CREDENTIALS');
  }
};

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '1rem' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <label>Username:</label><br />
        <input
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        /><br /><br />

        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
