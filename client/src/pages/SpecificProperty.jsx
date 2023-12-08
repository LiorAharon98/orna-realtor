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
    <div id={styles.page_container}>
      <div id={styles.container}>
        {Object.keys(state).map((value, index) => {
          return (
            <div key={index} className={styles.text_container}>
              {index % 2 === 0 && (
                <div style={{ width: 150 }}>
                  {value === "extended"  || value === 'furniture' ? (
                    <div style={{ width: 150 }}>
                      {state[value].map((extendedValues, currentIndex) => {
                        return (
                          <div key={currentIndex} className={styles.extended_container}>
                            <div>
                              {currentIndex == 0 && <h4>{value ==='furniture' ? 'ריהוט' : 'תוספות'}</h4>}
                              <p>{extendedValues}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <>
                      <h4>{data[index]} : </h4>
                      <p>
                        {value === "available" || value === "visited"
                          ? handleReverseDate(state[value].substring(0, 10))
                          : !state[value]
                          ? "ללא"
                          : state[value]}
                      </p>
                    </>
                  )}
                </div>
              )}

              {index % 2 !== 0 && (
                <div style={{ width: 150 }}>
                  <>
                    <h4>{data[index]} : </h4>
                    <p>
                      {value === "available" || value === "visited"
                        ? handleReverseDate(state[value].substring(0, 10))
                        : !Object.values(state).filter((value2, index2) => {
                            return index % 2 !== 0;
                          })[index]
                        ? "ללא"
                        : state[value]}
                    </p>
                  </>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecificProperty;
