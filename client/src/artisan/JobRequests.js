import React, { useEffect, useState } from 'react';

function JobRequests() {
  const [jobs, setJobs] = useState([]);
  const currentArtisanId = 12; // 🧪 Simulate "logged-in" artisan (e.g. Chuka Eze)

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobRequests")) || [];

    const myJobs = storedJobs.filter(
      job => parseInt(job.artisanId) === currentArtisanId && job.status === 'Pending'
    );

    console.log("📦 All Jobs from localStorage:", storedJobs);
    console.log("🧑🏾‍🔧 Current Artisan ID:", currentArtisanId);
    console.log("📬 Filtered My Jobs:", myJobs);

    setJobs(myJobs);
  }, []);

  const updateJobStatus = (index, status) => {
    const storedJobs = JSON.parse(localStorage.getItem("jobRequests")) || [];

    const actualIndex = storedJobs.findIndex(job =>
      parseInt(job.artisanId) === currentArtisanId &&
      job.timestamp === jobs[index].timestamp
    );

    if (actualIndex !== -1) {
      storedJobs[actualIndex].status = status;
      localStorage.setItem("jobRequests", JSON.stringify(storedJobs));

      const updated = storedJobs.filter(
        job => parseInt(job.artisanId) === currentArtisanId && job.status === 'Pending'
      );
      setJobs(updated);

      alert(`Job has been ${status === 'Accepted' ? 'accepted ✅' : 'rejected ❌'}`);
    }
  };

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <h2>📥 Pending Job Requests</h2>

      {jobs.length === 0 ? (
        <p>No new job requests for you right now.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {jobs.map((job, i) => (
            <li key={i} style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '1rem' }}>
              <p><strong>Skill Requested:</strong> {job.skill}</p>
              <p><strong>Requested On:</strong> {new Date(job.timestamp).toLocaleString()}</p>

              <button
                onClick={() => updateJobStatus(i, 'Accepted')}
                style={{ marginRight: '1rem', padding: '0.4rem 1rem', background: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}
              >
                ✅ Accept
              </button>

              <button
                onClick={() => updateJobStatus(i, 'Rejected by Artisan')}
                style={{ padding: '0.4rem 1rem', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px' }}
              >
                ❌ Reject
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default JobRequests;
