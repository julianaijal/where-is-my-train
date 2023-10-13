'use client';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <main>
      <h1>Home</h1>
      <input
        type="text"
        placeholder="Bestemming"
        value={searchQuery}
        onChange={handleSearch}
      />
      <button onClick={getStationCodes(searchQuery)}>Search</button>
    </main>
  );
};

export default Home;

const BASE_URL = 'https://gateway.apiportal.ns.nl';
const SUBSCRIPTION_KEY = 'ns-api';

const getStationCodes = async (stationName: string) => {
  const headers = new Headers({
    'Ocp-Apim-Subscription-Key': SUBSCRIPTION_KEY,
  });

  const endpoint = `${BASE_URL}/reisinformatie-api/api/v2/stations?q=${stationName}`;

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: headers,
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error(`Error fetching station codes: ${response.statusText}`);
    }
  } catch (error) {
    console.error(`There was a problem with the fetch operation: ${error}`);
  }
};
