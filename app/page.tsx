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

