import styles from "./modal.module.css";
const Modal = ({ children, opacity, toggleModal }) => {
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
