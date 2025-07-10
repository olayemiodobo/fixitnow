import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // use for clicking cards

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '1rem',
  margin: '1rem',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  width: '250px',
  cursor: 'pointer' //pointer on hover
};

const gridStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  minHeight: '150px'
};

const filterStyle = {
  margin: '1rem auto',
  textAlign: 'center'
};

const paginationStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '1rem'
};

const pageButtonStyle = (isActive) => ({
  padding: '0.5rem 1rem',
  borderRadius: '6px',
  border: '1px solid #ddd',
  backgroundColor: isActive ? '#333' : '#fff',
  color: isActive ? '#fff' : '#333',
  cursor: 'pointer'
});

const selectStyle = {
  padding: '0.5rem',
  color: '#333',
  marginRight: '1rem'
};

function ArtisanList() {
  const [artisans, setArtisans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const artisansPerPage = 4;

  const navigate = useNavigate(); // NEW: to navigate on card click

  // useEffect(() => {
  //   fetch('http://localhost:5000/api/artisans')
  //     .then(res => res.json())
  //     .then(data => {
  //       setArtisans(data);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       console.error('❌ Error fetching artisans:', err);
  //       setLoading(false);
  //     });
  // }, []);
useEffect(() => {
  const fetchCombinedArtisans = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/artisans');
      const backendArtisans = await res.json();

      const localArtisans = JSON.parse(localStorage.getItem('mockArtisans')) || [];
      const combined = [...backendArtisans, ...localArtisans];

      setArtisans(combined);
    } catch (err) {
      console.error('❌ Error fetching artisans:', err);
    } finally {
      setLoading(false);
    }
  };

  fetchCombinedArtisans();
}, []);



  const uniqueSkills = [...new Set(artisans.map(a => a.skill).filter(Boolean))].sort();
  const uniqueLocations = [...new Set(artisans.map(a => a.location).filter(Boolean))].sort();

  const filteredArtisans = artisans.filter(a => {
    return (
      (selectedSkill && a.skill === selectedSkill) &&
      (selectedLocation && a.location === selectedLocation)
    );
  });


  const totalPages = Math.ceil(filteredArtisans.length / artisansPerPage);
  const indexOfLast = currentPage * artisansPerPage;
  const indexOfFirst = indexOfLast - artisansPerPage;
  const currentArtisans = filteredArtisans.slice(indexOfFirst, indexOfLast);

  const goToPage = (pageNum) => setCurrentPage(pageNum);

  const handleSkillChange = (e) => {
    setSelectedSkill(e.target.value);
    setCurrentPage(1);
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center' }}>Find Artisans Near You</h2>

      {/* Filters */}
      <div style={filterStyle}>
        <select
          value={selectedSkill}
          onChange={handleSkillChange}
          style={{ ...selectStyle, color: selectedSkill ? '#333' : '#999' }}
        >
          <option value="" disabled style={{ color: '#999' }}>
            🛠️ Filter by Skill
          </option>
          {uniqueSkills.map((skill, i) => (
            <option key={i} value={skill}>
              {skill}
            </option>
          ))}
        </select>

        <select
          value={selectedLocation}
          onChange={handleLocationChange}
          style={{ ...selectStyle, color: selectedLocation ? '#333' : '#999', marginRight: 0 }}
        >
          <option value="" disabled style={{ color: '#999' }}>
            📍 Filter by Location
          </option>
          {uniqueLocations.map((loc, i) => (
            <option key={i} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Grid */}
      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading artisans...</p>
      ) : !selectedSkill || !selectedLocation ? (
        <p style={{ textAlign: 'center' }}>Please select both a skill and a location.</p>
      ) : filteredArtisans.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No artisans match your filters.</p>
      ) : (
        <>
          <div style={gridStyle}>
            {currentArtisans.map((artisan) => (
              <div
                key={artisan.id}
                style={cardStyle}
                onClick={() => navigate(`/artisan/${artisan.id}`)} // To navigate to profile
              >
                <img
                  src={artisan.picture}
                  alt={artisan.name}
                  style={{ width: '100%', borderRadius: '8px' }}
                />
                <h3>
  {artisan.name}{' '}
  {JSON.parse(localStorage.getItem('verifiedArtisans') || '{}')[artisan.id] && (
    <span title="Verified" style={{ color: 'green', fontSize: '1.2rem' }}>✅</span>
  )}
</h3>
                <p><strong>Skill:</strong> {artisan.skill}</p>
                <p><strong>Location:</strong> {artisan.location}</p>
                <p><strong>Rating:</strong> ⭐ {artisan.rating}</p>
                <p><strong>Price:</strong> {artisan.priceRange}</p>
                <p style={{ color: '#999', fontSize: '0.9rem' }}>
                  🔒 Contact details locked. Pay to unlock.
                </p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div style={paginationStyle}>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                style={pageButtonStyle(currentPage === i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ArtisanList;