import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SiteBuilder from './pages/SiteBuilder';
import AffiliateConfig from './pages/AffiliateConfig';

const App: React.FC = () => {
  const [affiliateTags, setAffiliateTags] = useState({
    amazon: '',
    walmart: ''
  });

  const handleConfigUpdate = (tags: { amazon?: string; walmart?: string }) => {
    setAffiliateTags(prev => ({
      ...prev,
      ...tags
    }));
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Site Builder</Link>
          <Link to="/config">Affiliate Config</Link>
        </nav>

        <Routes>
          <Route 
            path="/" 
            element={<SiteBuilder affiliateTags={affiliateTags} />} 
          />
          <Route 
            path="/config" 
            element={
              <AffiliateConfig onConfigUpdate={handleConfigUpdate} />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
