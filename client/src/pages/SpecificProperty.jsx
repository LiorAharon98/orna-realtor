import { useLocation } from "react-router-dom";

import styles from "../styles/specific_property.module.css";
import CopyButton from "../components/copy_button/CopyButton";
import data from "../hebrewPropertyData";
import EditButton from "../components/edit_button/EditButton";
import DeleteButton from "../components/delete_button/DeleteButton";
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
      <div style={{ display: "flex", justifyContent: "space-around", width: "95%" }}>
        <EditButton id={id} />
        <DeleteButton  id={id} />
        <CopyButton state={state} />
      </div>
      <div id={styles.page_container}>
        <div id={styles.container}>
          {Object.keys(rest).map((value, index) => {
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
                      <div>
                        {state[value].map((extendedValues, currentIndex) => {
                          return (
                            <div key={currentIndex} className={styles.extended_container}>
                              {currentIndex == 0 && <h4>{value === "furniture" ? "ריהוט" : "תוספות"}</h4>}
                              <p>{extendedValues}</p>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <>
                        <div>
                          <h4>{data[index]} : </h4>

                          <p>{!state[value] ? "ללא" : state[value] + " "}</p>
                        </div>
                      </>
                    )}
                  </>
                )}

                {index % 2 !== 0 && (
                  <div style={{ width: 150 }}>
                    <h4>{data[index]} : </h4>
                    <p>
                      {!Object.values(state).filter((value2, index2) => {
                        return index % 2 !== 0 && index2 !== Object.values(state).length - 1;
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
