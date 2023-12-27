import { useLocation } from "react-router-dom";

import styles from "../styles/specific_property.module.css";
import data from "../hebrewPropertyData";
import AdminHeader from "../components/admin_header/AdminHeader";
import handleReverseDate from "../handleReverseDate";
const SpecificProperty = () => {
  const location = useLocation();
  const { state } = location;
  const id = state._id;
  const infoData = { ...state };
  delete infoData.__v;
  delete infoData._id;

  return (
    <>
      <AdminHeader id={id} state={state} />
      <div id={styles.page_container}>
        <div id={styles.container}>
          {Object.keys(infoData).map((value, index) => {
            if (value === "available" || value === "visited")
              return (
                <div key={index} className={styles.text_container}>
                  <div>
                    <h4>{value === "available" ? "תאריך כניסה" : "ביקור בנכס"}</h4>
                    <p>{handleReverseDate(state[value].substring(0, 10))}</p>
                  </div>
                </div>
              );
            return (
              <div key={index} className={styles.text_container}>
                {index % 2 === 0 && (
                  <>
                    {Array.isArray(Object.values(state)[index]) ? (
                      <div className={styles.test}>
                        <h4>תוספות :</h4>
                        <div className={styles.test2}>
                          {state[value].extendedValues && <h4>{value === "furniture" ? "ריהוט" : "תוספות"}</h4>}
                          {state[value].map((extendedValues, currentIndex) => {
                            return (
                              <div key={currentIndex} className={styles.extended_container}>
                                <p>{extendedValues}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                        <div className={index == 24 ? styles.test : styles.extended_container}>
                          <h4>{data[index]} : </h4>
                          <div className={styles.test2}>

                            <p>{!state[value] ? "ללא" : state[value] + " "}</p>
                          </div>
                        </div>
                    )}
                  </>
                )}

                {index % 2 !== 0 && (
                  <div>
                    <h4>{data[index]} : </h4>
                    <p>
                      {!Object.values(state).filter((value2, index2) => {
                        return index % 2 !== 0 && index2 !== Object.values(state).length;
                      })[index] && !state[value]
                        ? "ללא"
                        : !state[value]
                        ? "ללא"
                        : state[value] + " "}
                    </p>
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
