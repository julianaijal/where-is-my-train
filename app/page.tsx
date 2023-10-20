'use client';
import React, { useState } from 'react';
import { FC } from 'react';
import { IStation } from './interfaces/interfaces';
import styles from './styles/Home.module.scss';
import { getStationCodes } from './_utils/api';
import Link from 'next/link';

const Home: FC<IStation> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [stationCodes, setStationCodes] = useState<IStation[]>([]);
  const [showNoResults, setShowNoResults] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowNoResults(false);
  };

  const handleGetStationCodes = async () => {
    try {
      const codes = await getStationCodes(searchQuery);
      setStationCodes(codes);
      setShowNoResults(codes.length === 0);
    } catch (error) {
      setShowNoResults(true);
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
        {showNoResults && (
          <div className={styles.searchList}>
            <p className={styles.searchListItemError}>
              We kunnen je bestemming niet vinden, probeer het opnieuw.
            </p>
          </div>
        )}
        {stationCodes.length > 0 && (
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
        )}
      </section>
    </main>
  );
};

export default Home;
