import React, { useState, useEffect } from 'react';
import { getSites } from '../services/siteService';

interface Site {
  id: string;
  url: string;
  creationDate: Date;
  niche: string;
}

const Dashboard: React.FC = () => {
  const [sites, setSites] = useState<Site[]>([]);

  useEffect(() => {
    const fetchSites = async () => {
      const fetchedSites = await getSites();
      setSites(fetchedSites);
    };
    fetchSites();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">SiteSnap 500 Dashboard</h1>
      <table className="w-full bg-white shadow-md rounded">
        <thead>
          <tr>
            <th>URL</th>
            <th>Creation Date</th>
            <th>Niche</th>
          </tr>
        </thead>
        <tbody>
          {sites.map(site => (
            <tr key={site.id}>
              <td>{site.url}</td>
              <td>{site.creationDate.toLocaleDateString()}</td>
              <td>{site.niche}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;