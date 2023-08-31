import React, { useState } from "react";
import styles from "./input.module.css";
const Input = ({ name,type }) => {
  const [error, setError] = useState("");
  return (
    <>
      <div id={styles.input_container}>
        <p>  {name} : </p>
        <input type={type} id={styles.input} />
      </div>
      {error && <p>error</p>}
    </>
  );
};

export default Input;
