type Props = {
  affiliateTags: { amazon: string; walmart: string };
};
import React, { useState } from 'react';
import { createSite } from '../services/siteService';

const SiteBuilder: React.FC = () => {
  const [siteName, setSiteName] = useState('');
  const [siteType, setSiteType] = useState('');

  const handleCreateSite = async () => {
    try {
      const result = await createSite({ 
        name: siteName, 
        type: siteType 
      });
      console.log('Site created:', result);
    } catch (error) {
      console.error('Site creation failed:', error);
    }
  };

  return (
    <div className="site-builder">
      <h1>Site Builder</h1>
      <input 
        type="text"
        placeholder="Site Name"
        value={siteName}
        onChange={(e) => setSiteName(e.target.value)}
      />
      <select 
        value={siteType}
        onChange={(e) => setSiteType(e.target.value)}
      >
        <option value="">Select Site Type</option>
        <option value="affiliate">Affiliate</option>
        <option value="blog">Blog</option>
        <option value="portfolio">Portfolio</option>
      </select>
      <button onClick={handleCreateSite}>Create Site</button>
    </div>
  );
};

export default function SiteBuilder({ affiliateTags }: Props)
