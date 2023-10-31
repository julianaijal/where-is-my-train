import { ITrain } from "../../interfaces/interfaces";

const TrainEntry = ({ direction, departure }: ITrain) => {
  return (
    <tr>
      {direction} - {departure}
    </tr>
  );
};

export default TrainEntry;
