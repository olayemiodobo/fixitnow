import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ✅ ROUTE COMPONENTS
import ArtisanList from './customer/ArtisanList';
import ArtisanProfile from './customer/ArtisanProfile';
import JobTracker from './customer/JobTracker';
import ReviewPage from './customer/ReviewPage';
import JobRequests from './artisan/JobRequests';
import ArtisanJobTracker from './artisan/JobTracker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArtisanList />} />
        <Route path="/artisan/:id" element={<ArtisanProfile />} />
        <Route path="/job-tracker" element={<JobTracker />} />
        <Route path="/review/:artisanId" element={<ReviewPage />} />
        <Route path="/artisan/job-requests" element={<JobRequests />} />
        <Route path="/artisan/job-tracker" element={<ArtisanJobTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
