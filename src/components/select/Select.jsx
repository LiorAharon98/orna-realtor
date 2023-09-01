import React from "react";
import styles from "./select.module.css";
const Select = ({ name, maxNumber, room }) => {
  const numbers = new Array(maxNumber).fill(1);
  const rooms = [];
  for (let i = 0; i < maxNumber; i++) {
    rooms.push(i);
    rooms.push(i + 0.5);
  }
  return (
    <div id={styles.container}>
      <p id={styles.text}>{name} : </p>
      <select id={styles.select_container}>
        <option></option>
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
