import React, { useEffect, useState } from 'react';

function ArtisanJobTracker() {
  const [jobs, setJobs] = useState([]);
  const currentArtisanId = 12; // Simulated artisan ID

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobRequests")) || [];

    const accepted = storedJobs.filter(
      job => parseInt(job.artisanId) === currentArtisanId &&
             (job.status === "Accepted" || job.status === "Started")
    );

    setJobs(accepted);
  }, []);

  const updateStatus = (index, newStatus) => {
    const storedJobs = JSON.parse(localStorage.getItem("jobRequests")) || [];

    const actualIndex = storedJobs.findIndex(job =>
      parseInt(job.artisanId) === currentArtisanId &&
      job.timestamp === jobs[index].timestamp
    );

    if (actualIndex !== -1) {
      storedJobs[actualIndex].status = newStatus;
      localStorage.setItem("jobRequests", JSON.stringify(storedJobs));

      const updated = storedJobs.filter(
        job => parseInt(job.artisanId) === currentArtisanId &&
               (storedJobs[actualIndex].status === "Accepted" || storedJobs[actualIndex].status === "Started")
      );

      setJobs(updated);
      alert(`Job marked as: ${newStatus}`);
    }
  };

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <h2>🛠️ Ongoing Jobs</h2>

      {jobs.length === 0 ? (
        <p>No ongoing jobs yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {jobs.map((job, i) => (
            <li key={i} style={{ borderBottom: '1px solid #ccc', marginBottom: '1rem', padding: '1rem' }}>
              <p><strong>Skill:</strong> {job.skill}</p>
              <p><strong>Requested:</strong> {new Date(job.timestamp).toLocaleString()}</p>
              <p><strong>Status:</strong> {job.status}</p>

              {job.status === "Accepted" && (
                <button
                  onClick={() => updateStatus(i, "Started")}
                  style={{ marginTop: '0.5rem', padding: '0.4rem 0.8rem', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}
                >
                  🚀 Start Job
                </button>
              )}

              {job.status === "Started" && (
                <button
                  onClick={() => updateStatus(i, "Completed")}
                  style={{ marginTop: '0.5rem', padding: '0.4rem 0.8rem', background: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}
                >
                  ✅ Complete Job
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ArtisanJobTracker;
