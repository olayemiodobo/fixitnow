import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function JobTracker() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobRequests")) || [];
    setJobs(storedJobs);
  }, []);

  const handleCancel = (indexToRemove) => {
    if (!window.confirm("Are you sure you want to cancel this job request?")) return;

    const updatedJobs = jobs.filter((_, index) => index !== indexToRemove);
    localStorage.setItem("jobRequests", JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
  };

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <h2>📋 Your Job Requests</h2>
      <p>Track your ongoing and completed artisan jobs.</p>

      {jobs.length === 0 ? (
        <p>You haven’t requested any jobs yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {jobs.map((job, i) => (
            <li key={i} style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
              <p><strong>Artisan:</strong> {job.artisanName}</p>
              <p><strong>Skill:</strong> {job.skill}</p>
              <p><strong>Status:</strong> {job.status}</p>
              <p><strong>Time:</strong> {new Date(job.timestamp).toLocaleString()}</p>

              {/* ✅ NEW: Cancel request option for PENDING */}
              {job.status === 'Pending' && (
                <button
                  onClick={() => handleCancel(i)}
                  style={{ marginTop: '0.5rem', padding: '0.4rem 0.8rem', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px' }}
                >
                  ❌ Cancel Request
                </button>
              )}

              {/* ✅ Review option if job completed */}
              {job.status === 'Completed' && (
                <Link to={`/review/${job.artisanId}`} style={{ color: '#007bff' }}>
                  ✍️ Leave a Review
                </Link>
              )}

              {/* ℹ️ Show message if job was rejected */}
              {job.status === 'Rejected by Artisan' && (
                <p style={{ color: '#cc0000' }}>⚠️ This job was rejected by the artisan.</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default JobTracker;
