import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../app/api';

export const Hello = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get(`${API_URL}/hello`);
        setMessage(response.data.message || 'No message received');
      } catch (err) {
        setError(err.message || 'Error fetching data');
      }
    };

    fetchMessage();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Test Route</h1>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <p>Message from API: {message}</p>
      )}
    </div>
  );
};
