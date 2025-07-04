import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

interface SiteCreationParams {
  name: string;
  type: string;
}

export const createSite = async (siteData: SiteCreationParams) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/build`, siteData);
    return response.data;
  } catch (error) {
    console.error('Error creating site:', error);
    throw error;
  }
};

export const getSites = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/sites`);
    return response.data;
  } catch (error) {
    console.error('Error fetching sites:', error);
    throw error;
  }
};