import React, { useState } from "react";
import Category from "../category/Category";
import styles from "./categories.module.css";
import Furniture from "../furniture_category/Furniture";
const Categories = ({ name, handleChange, hebrewName, data }) => {
  const [toggle, setToggle] = useState("");
  const pressHandler = (value) => {
    const e = {
      target: {
        value,
      },
    };
    handleChange(name, e);
    setToggle((prev) => (prev = value));
  };
  return (
    <div id={styles.page_container}>
      <div id={styles.container}>
        <p id={styles.hebrew_name}> {hebrewName} : </p>
        <div id={styles.category_container}>
          {data.map((item, index) => {
            return <Category name={name} key={index} pressHandler={pressHandler} toggle={toggle} item={item} />;
          })}
         <Furniture name ={"furniture"} toggle={toggle} handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default Categories;
