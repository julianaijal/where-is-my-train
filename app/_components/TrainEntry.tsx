import { ITrain } from "../interfaces/interfaces";

const TrainEntry = ({ direction, departure }: ITrain) => {
  return (
    <p>
      {direction} - {departure}
    </p>
  );
};

export default TrainEntry;
