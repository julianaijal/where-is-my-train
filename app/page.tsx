'use client';
import React, { useState, ChangeEvent } from 'react';
import { IStation } from './interfaces/interfaces';
import styles from './styles/Home.module.scss';
import { getStationCodes } from './_utils/api';
import appConfig from '@/config/app.config';
import Analytics from "./_lib/Analytics";
import WebVitals from './_lib/WebVitals';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [stationCodes, setStationCodes] = useState<IStation[]>([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const ERROR_MESSAGE =
    'We kunnen je bestemming niet vinden, probeer het opnieuw.';

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowNoResults(false);
  };

  const handleGetStationCodes = async () => {
    try {
      const codes = await getStationCodes(searchQuery);
      setStationCodes(codes);
      setShowNoResults(codes.length === 0);
    } catch (error: any) {
      setShowNoResults(true);
      console.error(error.message);
    }
  };

  const renderErrorMessage = () => (
    <div className={styles.searchList}>
      <p className={styles.searchListItemError}>{ERROR_MESSAGE}</p>
    </div>
  );

  const renderStation = ({ code, namen }: IStation, i: number) => (
    <a
      key={i}
      href={`/vertrektijden/${code}`}
      className={styles.searchListItem}
    >
      🚉 {namen.lang}
    </a>
  );

  return (
    <>
    <WebVitals/>
      {typeof appConfig.env.analyticsMeasurementId !== "undefined" && (
        <Analytics
          analyticsMeasurementId={appConfig.env.analyticsMeasurementId}
        />
      )}
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
              aria-label="Bestemming"
            />
            <button
              className={styles.searchButton}
              onClick={handleGetStationCodes}
              aria-label="Search"
            >
              Search
            </button>
          </div>
          {showNoResults && renderErrorMessage()}
          {stationCodes.length > 0 && (
            <div className={styles.searchList}>
              {stationCodes.map(renderStation)}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Home;
