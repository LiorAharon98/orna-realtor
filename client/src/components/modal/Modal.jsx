import React from "react";
import styles from "./modal.module.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Modal = () => {
  return (
    <div id={styles.page_container}>
      <div id={styles.container}>טוען נתונים <AiOutlineLoading3Quarters id={styles.icon}/> </div>
    </div>
  );
};

export default Modal;
