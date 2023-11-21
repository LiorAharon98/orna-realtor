import React, { useRef, useState } from "react";
import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";
const Home = () => {

  const [toggle, setToggle] = useState(() => {
    const isLogged = JSON.parse(localStorage.getItem("orna"));
    return isLogged;
  });
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const handleClick = (e) => {
    e.preventDefault();
    if (usernameRef.current.value === "orna" && passwordRef.current.value === "058434812") {
      setToggle(true);
      window.localStorage.setItem("orna", JSON.stringify({ username: "orna", password: "058434812" }));
    }
  };

  return (
    <div id={styles.page_container}>
      <div id={styles.right_container}>
        {!toggle && (
          <form id={styles.sign_container}>
            <input className={styles.inp} ref={usernameRef} placeholder="username" />
            <input className={styles.inp} ref={passwordRef} placeholder="password" />
            <button id={styles.btn} onClick={handleClick}>
              התחבר
            </button>
          </form>
        )}
        {/* {toggle && (
          <div id={styles.right_container2}>
            <div id={styles.square_container}>
              <Link to={"/admin"} className={styles.link_container}>
                ניהול
              </Link>
            </div>
            <div id={styles.square_container}>
              <Link to={"/add-property"} className={styles.link_container}>
                הוספה
              </Link>
            </div>
          </div>
        )} */}
      </div>
      <div id={styles.left_container}></div>
    </div>
  );
};

export default Home;
