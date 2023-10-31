import TrainEntry from '@/app/_components/_departures/TrainEntry';
import { IDepartures } from '@/app/interfaces/interfaces';

const Table = ({ departures }: IDepartures) => {
  return (
    <table>
      {departures.map(({direction, plannedDateTime}, i) => (
        <TrainEntry direction={direction} departure={plannedDateTime} key={i} />
      ))}
    </table>
  );
};

export default Table;
