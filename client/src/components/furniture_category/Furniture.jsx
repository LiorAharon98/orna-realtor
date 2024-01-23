import data from "../../furniture";
import Extended from "../extended/Extended";
import styles from "./furniture.module.css"
const Furniture = ({handleChange,toggle,name}) => {

  return (
    <div id={name === "furniture" && toggle==='חלקי' ?styles.container_active : styles.container_inactive}>
      <Extended  data={data} name={"furniture"} handleChange={handleChange} />
    </div>
  );
};

export default Furniture;
