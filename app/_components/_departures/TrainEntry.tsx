import { ITrain } from "../../interfaces/interfaces";

const TrainEntry = ({ direction, departure, track}: ITrain) => {
  return (
    <tr>
       <td>{departure}</td>
       <td>{direction}</td>
       <td>{track}</td>
    </tr>
  );
};

export default TrainEntry;
