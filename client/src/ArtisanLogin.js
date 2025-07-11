// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';

// function ArtisanLogin() {
//   const [loginId, setLoginId] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!loginId) return alert("Enter your artisan ID");

//     localStorage.setItem('loggedInArtisanId', loginId);
//     alert("Logged in as artisan #" + loginId);
//     navigate('/artisan/job-requests');
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: '2rem auto', textAlign: 'center' }}>
//       <h2>🧑🏾‍🔧 Artisan Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="number"
//           value={loginId}
//           onChange={(e) => setLoginId(e.target.value)}
//           placeholder="Enter your Artisan ID"
//           required
//           style={{ width: '100%', padding: '0.6rem', marginBottom: '1rem' }}
//         />
//         <br />
//         <button type="submit" style={{ padding: '0.5rem 1rem' }}>🔓 Login</button>
//       </form>

//       <p style={{ marginTop: '1.5rem' }}>
//         Not signed up yet?{' '}
//         <Link to="/create-artisan">Create an account</Link>
//       </p>
//     </div>
//   );
// }

// export default ArtisanLogin;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function ArtisanLogin() {
  const [loginId, setLoginId] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginId) return alert("Enter your artisan ID");

    const id = parseInt(loginId);
    const backendArtisans = await fetch('http://localhost:5000/api/artisans').then(res => res.json());
    const localArtisans = JSON.parse(localStorage.getItem('mockArtisans')) || [];

    const allArtisans = [...backendArtisans, ...localArtisans];
    const exists = allArtisans.find(a => a.id === id);

    if (!exists) {
      alert("NO ARTISAN FOUND WITH ID: " + loginId);
      return;
    }

    localStorage.setItem('loggedInArtisanId', loginId);
    alert("Logged in as " + exists.name);
    navigate('/artisan/job-requests');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', textAlign: 'center' }}>
      <h2>Artisan Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="number"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
          placeholder="Enter your Artisan ID"
          required
          style={{ width: '100%', padding: '0.6rem', marginBottom: '1rem' }}
        />
        <br />
        <button type="submit" style={{ padding: '0.5rem 1rem' }}>🔓 Login</button>
      </form>

      <p style={{ marginTop: '1.5rem' }}>
        Not signed up yet?{' '}
        <Link to="/create-artisan">Create an account</Link>
      </p>
    </div>
  );
}

export default ArtisanLogin;
