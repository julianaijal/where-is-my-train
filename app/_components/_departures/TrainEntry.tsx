import { ITrain } from '../../interfaces/interfaces';

const TrainEntry = ({ direction, departure, track }: ITrain) => {
  let hours = 0;
  let minutes = 0;
  if (departure) {
    const date = new Date(departure);
    hours = date.getHours();
    minutes = date.getMinutes();
  }
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return (
    <tr>
      <td>{departure ? `${hours}:${formattedMinutes}` : '🤷‍♀️'}</td>
      <td>{direction}</td>
      <td>{track}</td>
    </tr>
  );
};

export default TrainEntry;
