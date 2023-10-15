'use client';
import React, { useState } from 'react';
import { FC } from 'react';
import { IStation } from './interfaces/interfaces';
import { useRouter } from 'next/navigation';
import styles from './styles/Home.module.scss';
import { getStationCodes } from './_utils/api';

const Home: FC<IStation> = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [stationCodes, setStationCodes] = useState('');

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
      <section className={styles.searchElement}>
        <h2 className={styles.subtitle}>Stations informatie</h2>
        <h1 className={styles.title}>Zoek je station</h1>
        <input
          type="text"
          placeholder="Bestemming"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button onClick={handleGetStationCodes}>Search</button>
        {stationCodes ? (
          <div>
            {stationCodes.map((stationCode: IStation, i: number) => (
              <p
                key={i}
                onClick={() =>
                  router.push(`/vertrektijden/${stationCode.code}`)
                }
              >
                {stationCode.namen.lang}
              </p>
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
