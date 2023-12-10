import React, { useRef, useState } from "react";
import styles from "../styles/home.module.css";
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
      </div>
      <div id={styles.left_container}></div>
    </div>
  );
};

export default Home;
