import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  
  return <div className={styles.container}>
    <Link to={'/'} id={styles.text}>דף הבית</Link>
  </div>;
};

export default Header;
