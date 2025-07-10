
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';

// ROUTE COMPONENTS
import ArtisanList from './customer/ArtisanList';
import ArtisanProfile from './customer/ArtisanProfile';
import JobTracker from './customer/JobTracker';
import ReviewPage from './customer/ReviewPage';
import JobRequests from './artisan/JobRequests';
import ArtisanJobTracker from './artisan/JobTracker';
import Splash from './Splash';
import AdminDashboard from './admin/AdminDashboard';
import ReviewForm from './reviews/ReviewForm';
import ArtisanAuth from './ArtisanAuth';
import CreateArtisan from './CreateArtisan';
import AdminLogin from './AdminLogin';
import Unsplash from './Unsplash';



function App() {
  const isLoggedIn = !!localStorage.getItem('loggedInArtisanId');
  return (
    <Router>
      <Routes>
        <Route path="/ArtisanList" element={<ArtisanList />} />
        <Route path="/artisan/:id" element={<ArtisanProfile />} />
        <Route path="/job-tracker" element={<JobTracker />} />
        <Route path="/review/:artisanId" element={<ReviewPage />} />

        <Route path="/artisan/job-requests" element={isLoggedIn ? <JobRequests /> : <Navigate to="/artisan-auth" />} />
        <Route path="/artisan/job-tracker" element={isLoggedIn ?<ArtisanJobTracker />: <Navigate to="/artisan-auth" />} />

        <Route path="/welcome" element={<Splash />} />
        <Route path="/" element={<Unsplash />} />
      <Route
  path="/admin"
  element={
    localStorage.getItem('adminLoggedIn') === 'true' ? (
      <AdminDashboard />
    ) : (
      <Navigate to="/admin-login" />
    )
  }
/>
<Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/review/:artisanId" element={<ReviewForm />} />
        <Route path="/artisan-auth" element={<ArtisanAuth />} />
        <Route path="/create-artisan" element={<CreateArtisan />} />

      </Routes>
    </Router>
  );
}

export default App;