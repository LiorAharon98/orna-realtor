import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./hamburger_active.module.css";
const HamburgerActive = ({ handleClick }) => {
  return <AiOutlineClose id={styles.icon} onClick={handleClick} />;
};

export default HamburgerActive;
