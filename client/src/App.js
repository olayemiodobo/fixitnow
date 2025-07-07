// client/src/App.js

import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading from backend...');

  useEffect(() => {
    // This will run once the page loads
    fetch('http://localhost:5000/')
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => {
        console.error('Error connecting to backend:', err);
        setMessage('❌ Failed to connect to backend.');
      });
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🛠️ FixItNow – Customer Homepage</h1>
      <p>Frontend is working.</p>
      <hr />
      <p><strong>Backend says:</strong> {message}</p>
    </div>
  );
}

export default App;
