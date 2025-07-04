type Props = {
  onConfigUpdate: (tags: { amazon?: string; walmart?: string }) => void;
};
import React, { useState } from 'react';

const AffiliateConfig: React.FC = () => {
  const [affiliateId, setAffiliateId] = useState('');
  const [platformSelection, setPlatformSelection] = useState('');

  const handleSaveConfig = () => {
    try {
      // Future implementation of saving affiliate configuration
      console.log('Saving Affiliate Config:', { 
        affiliateId, 
        platformSelection 
      });
    } catch (error) {
      console.error('Config save failed:', error);
    }
  };

  return (
    <div className="affiliate-config">
      <h1>Affiliate Configuration</h1>
      <input 
        type="text"
        placeholder="Affiliate ID"
        value={affiliateId}
        onChange={(e) => setAffiliateId(e.target.value)}
      />
      <select 
        value={platformSelection}
        onChange={(e) => setPlatformSelection(e.target.value)}
      >
        <option value="">Select Affiliate Platform</option>
        <option value="amazon">Amazon Associates</option>
        <option value="clickbank">ClickBank</option>
        <option value="shareasale">ShareASale</option>
      </select>
      <button onClick={handleSaveConfig}>Save Configuration</button>
    </div>
  );
};

export default function AffiliateConfig({ onConfigUpdate }: Props)
