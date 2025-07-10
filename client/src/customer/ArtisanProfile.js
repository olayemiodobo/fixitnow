import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function ArtisanProfile() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [unlocked, setUnlocked] = useState(false);
  const [jobRequested, setJobRequested] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
  const loadArtisan = async () => {
    const res = await fetch('http://localhost:5000/api/artisans');
    const backendArtisans = await res.json();

    const localArtisans = JSON.parse(localStorage.getItem('mockArtisans')) || [];
    const allArtisans = [...backendArtisans, ...localArtisans];

    const found = allArtisans.find(a => a.id === parseInt(id));
    setArtisan(found);

    const unlockedIds = JSON.parse(localStorage.getItem("unlockedArtisans")) || [];
    if (unlockedIds.includes(parseInt(id))) {
      setUnlocked(true);
    }

    const jobList = JSON.parse(localStorage.getItem("jobRequests")) || [];
    const alreadyRequested = jobList.find(job => job.artisanId === parseInt(id));
    if (alreadyRequested) {
      setJobRequested(true);
    }
  };

  loadArtisan();
}, [id]);


  const handleUnlock = () => {
    alert("✅ Contact unlocked! (Simulated Payment)");
    const unlockedIds = JSON.parse(localStorage.getItem("unlockedArtisans")) || [];
    unlockedIds.push(parseInt(id));
    localStorage.setItem("unlockedArtisans", JSON.stringify(unlockedIds));
    setUnlocked(true);
  };

  const handleJobRequest = () => {
    const job = {
      artisanId: artisan.id,
      artisanName: artisan.name,
      skill: artisan.skill,
      status: "Pending",
      timestamp: new Date().toISOString()
    };
    const jobList = JSON.parse(localStorage.getItem("jobRequests")) || [];
    jobList.push(job);
    localStorage.setItem("jobRequests", JSON.stringify(jobList));
    setJobRequested(true);
    alert("🛠️ Job request sent successfully!");
    navigate('/job-tracker');
  };

  if (!artisan) return <p style={{ textAlign: 'center' }}>Loading artisan...</p>;

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1rem' }}>
      <Link to="/" style={{ color: '#007BFF' }}>← Back to List</Link>
      <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
        <img src={artisan.picture} alt={artisan.name} style={{ width: '100%', borderRadius: '8px' }} />
        <h2>
  {artisan.name}{' '}
  {JSON.parse(localStorage.getItem('verifiedArtisans') || '{}')[artisan.id] && (
    <span title="Verified" style={{ color: 'green', fontSize: '1.5rem' }}>✅</span>
  )}
</h2>

        <p><strong>Skill:</strong> {artisan.skill}</p>
        <p><strong>Location:</strong> {artisan.location}</p>
        <p><strong>Rating:</strong> ⭐ {artisan.rating}</p>
        <p><strong>Price Range:</strong> {artisan.priceRange}</p>

        {unlocked ? (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#e0ffee', borderRadius: '6px' }}>
            <p><strong>Phone:</strong> {artisan.contact.phone}</p>
            <p><strong>Email:</strong> {artisan.contact.email}</p>
            <br />
            {!jobRequested ? (
              <button
                onClick={handleJobRequest}
                style={{ padding: '0.5rem 1rem', background: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}
              >
                🛠️ Request Job
              </button>
            ) : (
              <p style={{ color: '#28a745' }}> Job already requested</p>
            )}
          </div>
        ) : (
          <div style={{ marginTop: '1rem', padding: '1rem', background: '#f8f8f8', borderRadius: '6px' }}>
            <p>🔒 Contact info is locked.</p>
            <button
              onClick={handleUnlock}
              style={{ padding: '0.5rem 1rem', background: '#333', color: 'white', border: 'none', borderRadius: '4px' }}
            >
              💳 Unlock for ₦500
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArtisanProfile;