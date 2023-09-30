import styles from "./hamburger_inactive.module.css";
const HamburgerInActive = ({ handleClick }) => {
  return (
      <div onClick={handleClick} id={styles.container}>
        <div className={styles.hamburger}></div>
        <div className={styles.hamburger}></div>
        <div className={styles.hamburger}></div>
      </div>
  );
};

export default HamburgerInActive;
