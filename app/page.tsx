'use client';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    getDeptarturesData('ASD');
    console.log('spiderman');
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
    </main>
  );
};

export default Home;

const getDeptarturesData = async (stationCode:string) => {
  const baseUrl =
    'https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures';
  const queryParams = {
    lang: 'en',
    station: stationCode,
    maxJourneys: 10,
  };

  const queryString = Object.keys(queryParams)
    .map((key) => key + '=' + queryParams[key])
    .join('&');
  const url = `${baseUrl}?${queryString}`;

  fetch(url, {
    method: 'GET',
    headers: {
      'Ocp-Apim-Subscription-Key': 'ns-api',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Data received:', data);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });

  return getDeptarturesData;
};