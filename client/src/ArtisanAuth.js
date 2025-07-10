// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function ArtisanAuth() {
//   const navigate = useNavigate();

//   const [loginId, setLoginId] = useState('');
//   const [newName, setNewName] = useState('');
//   const [newSkill, setNewSkill] = useState('');
//   const [newLocation, setNewLocation] = useState('');
//   const [newPhone, setNewPhone] = useState('');
//   const [newEmail, setNewEmail] = useState('');

//   // Login Handler
//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (!loginId) return alert("Enter your artisan ID");
//     localStorage.setItem('loggedInArtisanId', loginId);
//     navigate('/artisan/job-requests');
//   };

//   // Create Account Handler
//   const handleCreate = (e) => {
//     e.preventDefault();

//     const allArtisans = JSON.parse(localStorage.getItem('mockArtisans')) || [];

//     const newId = Date.now(); // Unique-ish ID
//     const newArtisan = {
//       id: newId,
//       name: newName,
//       skill: newSkill,
//       location: newLocation,
//       contact: {
//         phone: newPhone,
//         email: newEmail
//       }
//     };

//     const updated = [...allArtisans, newArtisan];
//     localStorage.setItem('mockArtisans', JSON.stringify(updated));
//     localStorage.setItem('loggedInArtisanId', newId);

//     alert('✅ Account created!');
//     navigate('/artisan/job-requests');
//   };

//   return (
//     <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
//       <h2>🧑🏾‍🔧 Artisan Login</h2>
//       <form onSubmit={handleLogin}>
//         <label>
//           Enter your Artisan ID:
//           <input
//             type="number"
//             value={loginId}
//             onChange={e => setLoginId(e.target.value)}
//             placeholder="e.g. 149"
//             required
//             style={{ width: '100%', padding: '0.5rem', margin: '0.5rem 0' }}
//           />
//         </label>
//         <button type="submit">🔓 Login</button>
//       </form>

//       <hr style={{ margin: '2rem 0' }} />

//       <h2>🆕 Create New Artisan Account</h2>
//       <form onSubmit={handleCreate}>
//         <label>
//           Name:
//           <input type="text" value={newName} onChange={e => setNewName(e.target.value)} required />
//         </label><br />
//         <label>
//           Skill:
//           <input type="text" value={newSkill} onChange={e => setNewSkill(e.target.value)} required />
//         </label><br />
//         <label>
//           Location:
//           <input type="text" value={newLocation} onChange={e => setNewLocation(e.target.value)} required />
//         </label><br />
//         <label>
//           Phone:
//           <input type="text" value={newPhone} onChange={e => setNewPhone(e.target.value)} required />
//         </label><br />
//         <label>
//           Email:
//           <input type="email" value={newEmail} onChange={e => setNewEmail(e.target.value)} required />
//         </label><br />
//         <br />
//         <button type="submit">✅ Create Account</button>
//       </form>
//     </div>
//   );
// }

// export default ArtisanAuth;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function ArtisanLogin() {
  const [loginId, setLoginId] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!loginId) return alert("Enter your artisan ID");

    localStorage.setItem('loggedInArtisanId', loginId);
    alert("✅ Logged in as artisan #" + loginId);
    navigate('/artisan/job-requests');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', textAlign: 'center' }}>
      <h2>🧑🏾‍🔧 Artisan Login</h2>
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
