import React, { useState } from "react";
import styles from "./property.module.css";
import { useNavigate, Link } from "react-router-dom";
const Property = (props) => {
  const [toggleChangePrice,setToggleChangePrice] = useState(false)
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/specific-property", { state: props });
  };
  const handleEditPriceClick =()=>{
    setToggleChangePrice(true)
  }
  const { contact, city, street, streetNumber, price, rooms } = props;
  return (
    <Link to={"/"} onClick={handleClick} id={styles.container}>
      <div>
        <div className={styles.container}>
          <h4 className={styles.info_text}>איש קשר</h4>
          <p className={styles.text}>{contact}</p>
        </div>
        <div className={styles.container}>
          <h4 className={styles.info_text}>עיר</h4>
          <p className={styles.text}>{city}</p>
        </div>
      </div>
      <div>
        <div className={styles.container}>
          <h4 className={styles.info_text}>רחוב</h4>
          <p className={styles.text}>
            {street} {streetNumber}
          </p>
        </div>
        <div className={styles.container}>
          <h4 className={styles.info_text}>חדרים</h4>
          <p className={styles.text}>{rooms}</p>
        </div>
      </div>
      <div className={styles.container}>
        <h4 className={styles.info_text}>מחיר</h4>
        <p className={styles.text}> ₪ {price} </p>
        <p onClick={handleEditPriceClick} className={styles.text}> שינוי מחיר </p>
      </div>
    </Link>
  );
};

export default Property;
