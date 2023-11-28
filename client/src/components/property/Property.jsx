import React from "react";
import styles from "./property.module.css";
import { useNavigate, Link } from "react-router-dom";
const Property = (props) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/specific-property", { state: props });
  };
  const { contact, city, street, streetNumber, price, rooms } = props;
  return (
    <Link to={"/"} onClick={handleClick} id={styles.container}>
      <div className={styles.container}>
        <p className={styles.info_text}>איש קשר</p>
        <h4 className={styles.text}>{contact}</h4>
      </div>
      <div className={styles.container}>
        <p className={styles.info_text}>עיר</p>
        <h4 className={styles.text}>{city}</h4>
      </div>
      <div className={styles.container}>
        <p className={styles.info_text} >חדרים</p>
        <h4 className={styles.text}>{rooms}</h4>
      </div>
      <div className={styles.container}>
        <p className={styles.info_text}>רחוב</p>
        <h4 className={styles.text}>
          {street} {streetNumber}
        </h4>
      </div>
      <div className={styles.container}>
        <p className={styles.info_text}>מחיר</p>
        <h4 className={styles.text}> ₪ {price} </h4>
      </div>
    </Link>
  );
};

export default Property;
