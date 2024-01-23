import React, { useEffect, useState } from "react";
import styles from "./extended.module.css";
import { Link } from "react-router-dom";
const Extended = ({ handleChange, name, data }) => {
  const [items, setItems] = useState([]);
  const pressHandler = (item) => {
    const check = items.find((currentItem) => currentItem === item);
    !check
      ? setItems((prev) => [...prev, item])
      : setItems((prev) => prev.filter((currentFilter) => currentFilter !== item));
  };
  useEffect(() => {
    const e = {
      target: {
        value: items,
      },
    };
    handleChange(name, e);
  }, [items]);
  return (
    <div id={styles.page_container}>
      {name === "extended" && <p> תוספות : </p>}
      {name === "airDirections" && <p> כיווני אוויר : </p>}
      {name === "airConditioner" && <p> מזגן : </p>}
      <div id={styles.extended_container}>
        {data.map((item, index) => {
          return (
            <Link
              className={items.find((currentItem) => currentItem === item) ? styles.item_active : styles.item_inactive}
              key={index}
              onClick={pressHandler.bind(this, item)}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Extended;
