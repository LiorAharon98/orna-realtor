import React from "react";
import styles from "./property.module.css";
import { Link } from "react-router-dom";
const Property = ({ contact, city,street }) => {
  return (
    <Link to={'/property'} id={styles.container}>
      <h4 className={styles.text}>{contact}</h4>
      <h4 className={styles.text}>{city}</h4>
      <h4 className={styles.text}>{street}</h4>
    </Link>
  );
};

export default Property;
