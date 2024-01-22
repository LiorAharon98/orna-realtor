import React, { useEffect, useState } from "react";
import styles from "./input.module.css";
const Input = ({ property, toggle, hebrewName, type, width, handleChange, name }) => {
  const [error, setError] = useState("");

  useEffect(() => {
    if (!name) return;
    if (!property[name] && toggle) return setError(true);
  }, [toggle]);
  return (
    <>
      <div id={styles.input_container}>
        <p className={styles.text}>{hebrewName} :</p>
        <p>{hebrewName === "מחיר" && "₪"}</p>
        <input 
          onChange={handleChange.bind(this, name)}
          style={{ width: width ? width : null }}
          type={type}
          id={error ? styles.error_input : styles.input}
        />
      </div>
    </>
  );
};

export default Input;
