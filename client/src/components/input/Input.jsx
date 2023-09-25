import React, { useState } from "react";
import styles from "./input.module.css";
const Input = ({ hebrewName, type, width, handleChange,name  }) => {
  const [error, setError] = useState("");

  return (
    <>
      <div id={styles.input_container}>
        <p className={styles.text}>{hebrewName} :</p>
        <p>{hebrewName === "מחיר" && "₪"}</p>
        <input
          onChange={handleChange.bind(this, name)}
          style={{ width: width ? width : null }}
          type={type}
          id={styles.input}
        />
      </div>
      {error && <p>error</p>}
    </>
  );
};

export default Input;
