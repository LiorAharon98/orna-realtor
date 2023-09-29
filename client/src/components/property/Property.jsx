import React from "react";
import styles from "./property.module.css";
import { useNavigate, Link } from "react-router-dom";
const Property = (props) => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/specific-property", { state: props });
  };
  const { contact, city, street, streetNumber, price } = props;
  return (
    <Link to={"/"} onClick={handleClick} id={styles.container}>
      <h4 className={styles.text}>{contact}</h4>
      <h4 className={styles.text}>{city}</h4>
      <h4 className={styles.text}>
        {street} {streetNumber}
      </h4>
      <h4 className={styles.text}> ₪ {price} </h4>
    </Link>
  );
};

export default Property;
