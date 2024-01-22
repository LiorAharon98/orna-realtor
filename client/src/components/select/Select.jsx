import React, { useEffect, useState } from "react";
import styles from "./select.module.css";
import Input from "../input/Input";
const Select = ({ toggle, handleChange, hebrewName, name, maxNumber, room, checkBox, property }) => {
  const [toggleError, setToggleError] = useState(false);
  const [toggleSize,setToggleSize]= useState(false)
  const numbers = new Array(maxNumber).fill(1);
  const rooms = [];
  for (let i = 0; i < maxNumber; i++) {
    rooms.push(i);
    rooms.push(i + 0.5);
  }
  const handleClick = (e) => {
    handleChange(name, e);
    setToggleSize(true)
  };
  useEffect(() => {
    if (!property[name] && toggle) return setToggleError(true);
  }, [toggle]);
  return (
    <>
      <div id={toggleError ? styles.error_container : styles.container}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p id={styles.text}> {hebrewName} : </p>
          <select onChange={handleClick} id={styles.select_container}>
            <option></option>
            <option>ללא</option>
            {!room &&
              numbers.map((number, index) => {
                return <option key={index}>{index + 1}</option>;
              })}
            {room &&
              rooms.map((number, index) => {
                return number !== 0 && number !== 0.5 && <option key={index}>{number}</option>;
              })}
          </select>
        </div>
        <div style={{ display: "flex" }}>
          { toggleSize && checkBox === "parking" && <p> נפרדות \ עוקבות</p>}
          { toggleSize && checkBox === "balcony" && <Input width={35} handleChange={() => {}} hebrewName={"גודל"} type={"number"} />}
        </div>
      </div>
    </>
  );
};

export default Select;
