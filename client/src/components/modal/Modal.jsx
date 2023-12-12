import React from "react";
import styles from "./modal.module.css";
const Modal = ({children}) => {
  return (
    <div id={styles.page_container}>
      <div id={styles.container}>
        {children}
    
      </div>
    </div>
  );
};

export default Modal;
