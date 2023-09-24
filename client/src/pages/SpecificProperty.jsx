import React from "react";
import { useLocation } from "react-router-dom";
import styles from "../styles/specific_property.module.css";
import data from "../hebrewPropertyData";
const SpecificProperty = () => {
  const location = useLocation();
  const { state } = location;
  delete state._id;
  delete state.__v;
  const handleReverseDate = (date) => {
    let newDate = "";
    newDate += date.substring(8) + "-";
    newDate += date.substring(5, 7) + "-";
    newDate += date.substring(0, 4);
    return newDate;
  };

  return (
    <div id={styles.container}>
      <div id={styles.left_container}>
        {Object.keys(state)
          .slice(0, 16)
          .map((value, index) => {
            return (
              <div className={styles.text_container}>
                <h4>{data[index]} : </h4>
                <h4>
                  {value == "available" || value == "visited"
                    ? handleReverseDate(state[value].substring(0, 10))
                    : state[value]}
                </h4>
              </div>
            );
          })}
      </div>
      <div id={styles.right_container}>
        {Object.keys(state)
          .splice(16)
          .map((value, index) => {
            if (value === "extended") {
              return state[value].map((text, currentIndex) => {
                return (
                  <div className={styles.test}>
                    {currentIndex === 0 && <h4>תוספות :</h4>}

                    <p> {text} </p>
                  </div>
                );
              });
            }
            return (
              <div className={styles.text_container}>
                <h4>{data[index+16]} : </h4>
                <h4>
                  {value == "available" || value == "visited"
                    ? handleReverseDate(state[value].substring(0, 10))
                    : state[value]}
                </h4>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SpecificProperty;
