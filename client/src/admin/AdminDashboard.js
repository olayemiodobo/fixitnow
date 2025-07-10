import React, { useEffect, useState } from 'react';
import AdminLogout from '../components/AdminLogout';

function AdminDashboard() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
  const fetchArtisans = async () => {
    const res = await fetch('http://localhost:5000/api/artisans');
    const backendArtisans = await res.json();

    const localArtisans = JSON.parse(localStorage.getItem('mockArtisans')) || [];
    const allArtisans = [...backendArtisans, ...localArtisans];

    const savedStatus = JSON.parse(localStorage.getItem('verifiedArtisans')) || {};

    const updated = allArtisans.map(artisan => ({
      ...artisan,
      verified: savedStatus[artisan.id] || false,
    }));

    setArtisans(updated);
  };

  fetchArtisans();
}, []);

  // Toggle verified status
  const toggleVerification = (id) => {
    const updated = artisans.map(artisan =>
      artisan.id === id ? { ...artisan, verified: !artisan.verified } : artisan
    );

    // Save to localStorage
    const toSave = {};
    updated.forEach(a => {
      toSave[a.id] = a.verified;
    });
    localStorage.setItem('verifiedArtisans', JSON.stringify(toSave));

    setArtisans(updated);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <AdminLogout />
      <h2>Admin Dashboard</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Artisan</th>
            <th>Skill</th>
            <th>Location</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {artisans.map(artisan => (
            <tr key={artisan.id} style={{ borderBottom: '1px solid #ccc' }}>
              <td>{artisan.id}</td>
              <td>{artisan.name}</td>
              <td>{artisan.skill}</td>
              <td>{artisan.location}</td>
              <td>
                <button
                  onClick={() => toggleVerification(artisan.id)}
                  style={{
                    padding: '0.4rem 0.8rem',
                    background: artisan.verified ? '#28a745' : '#bb0000',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px'
                  }}
                >
                  {artisan.verified ? 'Verified' : 'Not Verified'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
