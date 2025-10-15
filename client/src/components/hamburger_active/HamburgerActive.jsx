import { AiOutlineClose } from "react-icons/ai";
import styles from "./hamburger_active.module.css";
const HamburgerActive = ({ handleClick }) => {
  return (
    <div id={styles.container}>
      <AiOutlineClose id={styles.icon} onClick={handleClick} />
    </div>
  );
};

export default HamburgerActive;
