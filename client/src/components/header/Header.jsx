import React, { useState } from "react";
import styles from "./header.module.css";
import SideBar from "../side_bar/SideBar";
import HamburgerInActive from "../hamburger_inactive/HamburgerInActive";
import HamburgerActive from "../hamburger_active/HamburgerActive";
const Header = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  const handleClick = () => {
    setToggleSideBar((prev) => !prev);
  };
  return (
    <>
      <SideBar toggleSideBar={toggleSideBar} handleClick={handleClick} />
      <div className={styles.container}>
        {toggleSideBar ? <HamburgerActive handleClick={handleClick} /> : <HamburgerInActive handleClick={handleClick} />}
      </div>
    </>
  );
};

export default Header;
