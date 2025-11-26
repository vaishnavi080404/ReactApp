import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useGif = (tag) => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);
  const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

  async function fetchData(tag) {
    try {
      setLoading(true);
      const baseURL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const url = tag ? `${baseURL}&tag=${tag}` : baseURL;
      const { data } = await axios.get(url);
      const imageSource = data.data.images.fixed_width_small.url;
      setGif(`${imageSource}?${Date.now()}`);
    } catch (error) {
      console.error("Error fetching GIF:", error);
    } 
      setLoading(false);
    
  }

  useEffect(() => {
    fetchData('car'); // fetch on mount
  }, []);

  return { gif, loading, fetchData };
};

export default useGif;
