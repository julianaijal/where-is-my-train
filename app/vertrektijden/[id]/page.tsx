'use client';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './../../styles/Departures.module.scss';

const Page = ({ params }: { params: { id: string } }) => {
  const [stationDepartureTimes, setstationDepartureTimes] = useState('');
  useEffect(() => {
    getDeptarturesData(params.id);
  }, [params.id]);

  const getDeptarturesData = async (stationCode: string) => {
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
        setstationDepartureTimes(data.payload.departures);
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });

    return getDeptarturesData;
  };

  return (
    <>
    <h1 className={styles.title}>Vertrektijden</h1>
      {stationDepartureTimes ? (
        <div>
          {stationDepartureTimes.map((stationDeparture, i: number) => (
            <p key={i}>{stationDeparture.direction} - {stationDeparture.plannedDateTime} </p>
          ))}
        </div>
      ) : (
        'Loading..'
      )}
    </>
  );
};

export default Page;
