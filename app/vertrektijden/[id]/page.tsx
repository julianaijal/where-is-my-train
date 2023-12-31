'use client';
import { useEffect, useState } from 'react';
import styles from './../../styles/Departures.module.scss';
import { fetchDepartureData } from './../../_utils/api';
import Table from '@/app/_components/_departures/Table';
import Loader from '@/app/_components/_partials/Loader';

const Page = ({ params }: { params: { id: string } }) => {
  const [stationDepartureTimes, setStationDepartureTimes] = useState<
    { direction: string; plannedDateTime: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const departureData = await fetchDepartureData(params.id);
        setStationDepartureTimes(departureData);
        setLoading(false);
      } catch (error) {
        console.error('An error occurred:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <section className={styles.main}>
      <h1 className={styles.title}>Vertrektijden</h1>
      {loading ? <Loader /> : <Table departures={stationDepartureTimes} />}
    </section>
  );
};

export default Page;
