import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import LandingPage from './components/sections/LandingPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
<Routes>
      {/* Default route for the landing page */}
      <Route path="/" element={<LandingPage />} />
    
    </Routes>
    
  );
}

export default App;
