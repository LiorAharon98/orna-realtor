import React from "react";
import styles from "./radio_button.module.css";
const RadioButton = ({ name, data }) => {
  return (
    <div id={styles.container}>
      <p> : {name}</p>
      {data.map((item) => {
        return (
          <div className={styles.radio_button}>
            <p className={styles.radio}>{item}</p>
            <input type="radio" name={name} value={item}  />
          </div>
        );
      })}
    </div>
  );
};

export default RadioButton;
