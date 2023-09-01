import React, { useState } from "react";

const Extended = () => {
  const [items, setItems] = useState([]);
  const pressHandler = (item) => {
    setItems((prev) => [...prev, item]);
  };
  return (
    <div id={styles.container}>
      <p> תוספות : </p>
      {data.map((item, index) => {
        return (
          <div key={index} onClick={pressHandler.bind(this, item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Extended;
