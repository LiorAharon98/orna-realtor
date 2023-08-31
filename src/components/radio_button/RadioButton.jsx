import React from "react";
import styles from "./radio_button.module.css";
const RadioButton = ({ name, data }) => {
  return (
    <div id={styles.container}>
      <p>  {name} : </p>
      {data.map((item,index) => {
        return (
          <div className={styles.radio_button}>
            <p className={styles.radio}>{item}</p>
            <input type="radio" name={name ==='תוספות' ? name+index : name} value={item}  />
          </div>
        );
      })}
    </div>
  );
};

export default RadioButton;
