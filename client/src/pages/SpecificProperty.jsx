import React from "react";
import { useLocation } from "react-router-dom";
import styles from "../styles/specific_property.module.css";
const SpecificProperty = () => {
  const location = useLocation();
  const { state } = location;
  delete state._id;
  delete state.__v;
  return (
    <div id={styles.container}>
      {Object.keys(state).map((value) => {
        if (value === "extended") {
          return state[value].map((text) => {
            return (
              <div className={styles.test}>
                <p> {text} </p>
              </div>
            );
          });
        }
        return (
         
          <div className={styles.text_container}>
            <h3>{value}</h3>
            <h3>{value == "available" || value == "visited" ? state[value].substring(0, 10) : state[value]}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default SpecificProperty;
