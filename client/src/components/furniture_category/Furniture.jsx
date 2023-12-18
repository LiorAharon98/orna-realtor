import data from "../../furniture";
import Extended from "../extended/Extended";
const Furniture = ({handleChange}) => {

  return (
    <div>
      <Extended data={data} name={"furniture"} handleChange={handleChange} />
    </div>
  );
};

export default Furniture;
