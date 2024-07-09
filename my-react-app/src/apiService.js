// src/apiService.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://54.144.57.255:1337/api';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    console.log('API Response:', response.data); // Log the full response data
    return response.data.data; // Extract the 'data' array
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

