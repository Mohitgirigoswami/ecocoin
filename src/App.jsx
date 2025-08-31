import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';
import MultiStepSignup from './MultiStepSignup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<MultiStepSignup />} />
      </Routes>
    </Router>
  );
}

export default App;