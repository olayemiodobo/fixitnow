import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function CreateArtisan() {
  const navigate = useNavigate();

  const [newName, setNewName] = useState('');
  const [newSkill, setNewSkill] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();

    const allArtisans = JSON.parse(localStorage.getItem('mockArtisans')) || [];

    const newId = Date.now(); // unique ID
    const newArtisan = {
      id: newId,
      name: newName,
      skill: newSkill,
      location: newLocation,
      contact: {
        phone: newPhone,
        email: newEmail
      }
    };

    const updated = [...allArtisans, newArtisan];
    localStorage.setItem('mockArtisans', JSON.stringify(updated));
    localStorage.setItem('loggedInArtisanId', newId);

    alert(`✅ Account created! Your Artisan ID is ${newId}`);
    navigate('/artisan/job-requests');
  };

  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '1rem' }}>
      <h2>🆕 Create Artisan Account</h2>
      <form onSubmit={handleCreate}>
        <input placeholder="Full Name" value={newName} onChange={e => setNewName(e.target.value)} required /><br />
        <input placeholder="Skill" value={newSkill} onChange={e => setNewSkill(e.target.value)} required /><br />
        <input placeholder="Location" value={newLocation} onChange={e => setNewLocation(e.target.value)} required /><br />
        <input placeholder="Phone" value={newPhone} onChange={e => setNewPhone(e.target.value)} required /><br />
        <input placeholder="Email" value={newEmail} onChange={e => setNewEmail(e.target.value)} required /><br /><br />
        <button type="submit">✅ Register</button>
      </form>

      <p style={{ marginTop: '1.5rem' }}>
        Already have an account? <Link to="/artisan-auth">Login</Link>
      </p>
    </div>
  );
}

export default CreateArtisan;
