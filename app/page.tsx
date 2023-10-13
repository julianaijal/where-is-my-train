'use client';
import React, { useState } from 'react';

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
    </main>
  );
};

export default Home;
