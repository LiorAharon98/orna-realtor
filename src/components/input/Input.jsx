import React, { useState } from "react";
import styles from "./input.module.css";
const Input = ({ name, type, width }) => {
  const [error, setError] = useState("");
  return (
    <>
      <div id={styles.input_container}>
        <p className={styles.text}>{name} :</p>
        <input style={{ width: width ? width : null }} type={type} id={styles.input} />
      </div>
      {error && <p>error</p>}
    </>
  );
};

export default Input;
