import React from "react";
import styles from "./modal.module.css";
import { useSelector } from "react-redux";
const Modal = ({ children, opacity }) => {
  const { toggleModal } = useSelector((state) => state.modal);
  return (
    <>
      {toggleModal && (
        <div style={{ opacity: opacity ? opacity : null }} id={styles.page_container}>
          <div id={styles.container}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
