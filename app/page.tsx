'use client';
import React, { useState } from 'react';
import { FC } from 'react';
import { IStation } from './interfaces/interfaces';
import styles from './styles/Home.module.scss';
import { getStationCodes } from './_utils/api';
import Link from 'next/link';

const Home: FC<IStation> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [stationCodes, setStationCodes] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleGetStationCodes = async () => {
    try {
      const codes = await getStationCodes(searchQuery);
      setStationCodes(codes);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <main className={styles.main}>
      <section className={styles.search}>
        <h2 className={styles.searchSubtitle}>Stations informatie</h2>
        <h1 className={styles.searchTitle}>Zoek je station</h1>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Bestemming"
            value={searchQuery}
            onChange={handleSearch}
            className={styles.searchInput}
          />
          <button
            className={styles.searchButton}
            onClick={handleGetStationCodes}
          >
            Search
          </button>
        </div>

        {stationCodes.length > 0 ? (
          <div className={styles.searchList}>
            {stationCodes.map((stationCode: IStation, i: number) => (
              <Link
                key={i}
                href={`/vertrektijden/${stationCode.code}`}
                className={styles.searchListItem}
              >
                🚉 {stationCode.namen.lang}
              </Link>
            ))}
          </div>
        ) : (
          ''
        )}
      </section>
    </main>
  );
};

export default Home;
