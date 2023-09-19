import React, { useRef, useState } from "react";
import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";
const Home = () => {
  const [toggle, setToggle] = useState(false);
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const handleClick = (e) => {
    e.preventDefault();
    if (usernameRef.current.value === "orna" && passwordRef.current.value === "058434812") {
      setToggle(true);
    }
  };
  return (
    <div id={styles.page_container}>
      {!toggle && (
        <form id={styles.sign_container}>
          <input className={styles.inp} ref={usernameRef} placeholder="username" />
          <input className={styles.inp} ref={passwordRef} placeholder="password" />
          <button id={styles.btn} onClick={handleClick}>
            התחבר
          </button>
        </form>
      )}
      {toggle && (
        <div id={styles.square_container}>
          <Link to={"/admin"} className={styles.container}>
            ניהול
          </Link>

          <Link to={"/add-property"} className={styles.container}>
            הוספה
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
