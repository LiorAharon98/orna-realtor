import { useLocation } from "react-router-dom";

import styles from "../styles/specific_property.module.css";
import CopyButton from "../components/copy_button/CopyButton";
import data from "../hebrewPropertyData";
import EditButton from "../components/edit_button/EditButton";
const SpecificProperty = () => {
  const location = useLocation();
  const { state } = location;
  const id = state._id;
  const { _id, ...rest } = state;
  delete state.__v;
  const handleReverseDate = (date) => {
    let newDate = "";
    newDate += date.substring(8) + "-";
    newDate += date.substring(5, 7) + "-";
    newDate += date.substring(0, 4);
    return newDate;
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <EditButton id={id} />
        <CopyButton state={state} />
      </div>
      <div id={styles.page_container}>
        <div id={styles.container}>
          {Object.keys(rest).map((value, index) => {
            return (
              <div key={index} className={styles.text_container}>
                {index % 2 === 0 && (
                  <div style={{ width: 145 }}>
                    {Array.isArray(Object.values(state)[index]) ? (
                      <div>
                        {state[value].map((extendedValues, currentIndex) => {
                          return (
                            <div key={currentIndex} className={styles.extended_container}>
                              <div>
                                {currentIndex == 0 && <h4>{value === "furniture" ? "ריהוט" : "תוספות"}</h4>}
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
                            : state[value] + " "}
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
                          : state[value] + " "}
                      </p>
                    </>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SpecificProperty;
