import React from "react";
import styles from "./select.module.css";
const Select = ({ handleChange,hebrewName,name, maxNumber, room }) => {
  const numbers = new Array(maxNumber).fill(1);
  const rooms = [];
  for (let i = 0; i < maxNumber; i++) {
    rooms.push(i);
    rooms.push(i + 0.5);
  }
  return (
    <div id={styles.container}>
      <p id={styles.text}>{hebrewName} : </p>
      <select onChange={handleChange.bind(this,name)}  id={styles.select_container}>
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
  );
};

export default Select;
