import React, { useState } from "react";
import Category from "../category/Category";
import styles from "./categories.module.css";
const Categories = ({ name, data }) => {
  const [toggle, setToggle] = useState("");
  const pressHandler = (value) => {
    setToggle((prev) => (prev = value));
  };
  return (
    <div id={styles.container}>
      <p> {name} : </p>
      {data.map((item,index) => {
        return <Category key={index} pressHandler={pressHandler} toggle={toggle} item={item} />;
      })}
    </div>
  );
};

export default Categories;
