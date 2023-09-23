import React from "react";
import styles from "./property.module.css";
import { useNavigate } from "react-router-dom";
const Property = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/specific-property", { state: props });
  };
  const {contact,city,street,streetNumber} = props
  return (
    <div onClick={handleClick} id={styles.container}>
      <h4 className={styles.text}>{contact}</h4>
      <h4 className={styles.text}>{city}</h4>
      <h4 className={styles.text}>{street} {streetNumber}</h4>
    </div>
  );
};

export default Property;
