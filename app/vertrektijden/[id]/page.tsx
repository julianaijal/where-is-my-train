'use client';
import { useEffect, useState } from 'react';
import styles from './../../styles/Departures.module.scss';
import { fetchDepartureData } from './../../_utils/api';
import Table from '@/app/_components/_departures/Table';
import Loader from '@/app/_components/_partials/Loader';

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const [stationDepartureTimes, setStationDepartureTimes] = useState<
    { direction: string; plannedDateTime: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [stationId, setStationId] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resolvedParams = await params;
        setStationId(resolvedParams.id);
        const departureData = await fetchDepartureData(resolvedParams.id);
        setStationDepartureTimes(departureData);
        setLoading(false);
      } catch (error) {
        console.error('An error occurred:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  return (
    <section className={styles.main}>
      <h1 className={styles.title}>Vertrektijden</h1>
      {loading ? <Loader /> : <Table departures={stationDepartureTimes} />}
    </section>
  );
};

export default Page;
