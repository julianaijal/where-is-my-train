'use client';
import { useEffect } from 'react';
import { useState } from 'react';

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
      {stationDepartureTimes ? (
        <div>
          {stationDepartureTimes.map((stationDeparture, i: number) => (
            <p key={i}>{stationDeparture.direction}</p>
          ))}
        </div>
      ) : (
        'Loading..'
      )}
    </>
  );
};

export default Page;
