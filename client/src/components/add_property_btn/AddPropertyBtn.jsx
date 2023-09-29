import React, { useState } from "react";
import styles from "./add_property_btn.module.css";
const AddPropertyBtn = ({ handleClick }) => {
  const [toggleError, setToggleError] = useState("");
const handleClick2 = async()=>{
    const click = await handleClick()
    if (click) setToggleError(click)
}
  return (
    <div>
      {toggleError && <p id={styles.error}>{toggleError}</p>}
      <button onClick={handleClick2} id={styles.btn}>
        הוספה
      </button>
    </div>
  );
};

export default AddPropertyBtn;
