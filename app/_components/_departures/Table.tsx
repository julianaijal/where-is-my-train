import TrainEntry from '@/app/_components/_departures/TrainEntry';
import { IDepartures } from '@/app/interfaces/interfaces';

const Table = ({ departures }: IDepartures) => {
  return (
    <table>
      <tr>
        <th>Vertrektijd</th>
        <th>Naar</th>
        <th>Platform</th>
      </tr>
      {departures.map(({ direction, plannedDateTime, actualTrack }, i) => (
        <TrainEntry
          direction={direction}
          departure={plannedDateTime}
          track={actualTrack}
          key={i}
        />
      ))}
    </table>
  );
};

export default Table;
