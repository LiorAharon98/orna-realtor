import React from "react";
import styles from "./property.module.css";
import { useNavigate } from "react-router-dom";
const Property = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/specific-property", { state: props });
  };
  return (
    <div onClick={handleClick} id={styles.container}>
      <h4 className={styles.text}>{props.contact}</h4>
      <h4 className={styles.text}>{props.city}</h4>
      <h4 className={styles.text}>{props.street}</h4>
    </div>
  );
};

export default Property;
