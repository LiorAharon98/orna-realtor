import React from "react";
import styles from "./side_bar.module.css";
import { Link } from "react-router-dom";
const SideBar = ({handleClick,toggleSideBar}) => {
  return (
    <div id={toggleSideBar ? styles.page_container_active : styles.page_container_inactive}>
     {toggleSideBar &&
      <div id={styles.link_container}>
        <Link onClick={handleClick}  className={styles.link} to={"/"}>דף הבית</Link>
        <Link onClick={handleClick} className={styles.link} to={"/add-property"}>הוספה</Link>
        <Link onClick={handleClick} className={styles.link} to={"/admin"}>ניהול</Link>
      </div>
      } 
    </div>
  );
};

export default SideBar;
