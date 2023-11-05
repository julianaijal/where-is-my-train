import { IDepartures } from '@/app/interfaces/interfaces';
import styles from './../../styles/Departures.module.scss';

const Table = ({ departures }: IDepartures) => {
  return (
    <table className={styles.departuresTable}>
      <thead>
        <tr>
          <th className={styles.tableHeader}>Vertrektijd</th>
          <th className={styles.tableHeader}>Naar</th>
          <th className={styles.tableHeader}>Platform</th>
        </tr>
      </thead>
      <tbody>
        {departures.map(({ direction, plannedDateTime, actualTrack }, i) => (
          <tr key={i} className={i % 2 === 0 ? styles.evenRow : styles.oddRow}>
            <td className={styles.tableData}>{plannedDateTime}</td>
            <td className={styles.tableData}>{direction}</td>
            <td className={styles.tableData}>{actualTrack}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
