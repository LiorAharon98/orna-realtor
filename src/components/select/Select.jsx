import React from "react";
import styles from "./select.module.css";
const Select = ({ name, maxNumber }) => {
  const numbers = new Array(maxNumber).fill(1);
  return (
    <div id={styles.container}>
      <p>: {name} </p>
      <select id={styles.select_container}>
        <option>0</option>
        {numbers.map((number,index) => {
          return <option>{index+1}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
